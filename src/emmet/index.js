/**
 * Emmet syntax for creating DOM elements
 *
 * Syntax
 *   const emmet = Emmet();
 *   emmet('.table > div{left} + div(class="text-right"){right}')
 *   tag#id.classes(attributes=""){inner text} > .nested ^ .backed.up.one + .sibling
 *
 * Arguments
 *   .emmet( syntax : string, returnOnlyHTML : boolean )
 *
 * @namespace Emmet
 * @type function
 * @param text          syntax
 * @param htmlOnly      returnOnlyHTML
 * @returns {string|*}
 */
const Emmet = function () {
    let  tempInnerTexts = [];
    let  tempEscaped = [];
    const re = {};

    re.excludes = "([^\\.#\\(\\{]+)";
    re.classes = new RegExp("\\." + re.excludes, "g");
    re.id = new RegExp("#" + re.excludes, "g");
    re.tag = new RegExp("^" + re.excludes);
    re.indexes = /(.+?)(>|\+|\^|$)/g;
    re.escape = /("|')([^\1]*?)\1/g;
    re.innerText = /\{([^}]*?)}/g;
    re.attrs = /\(([^\)]*)\)/g;

    const emmet = function (text, htmlOnly) {
        let tree = element(),
            current = tree,
            lastElement = tree,
            commandText = text || "",
            convertCollection = function (src) {
                const fragment = document.createDocumentFragment();
                while (src.length)
                    fragment.appendChild(src[0]);
                return fragment;
            },
            result;

        tempInnerTexts = [];
        tempEscaped = [];
        commandText
            .replace(re.escape, function (full, quotes, escape) {
                tempEscaped.push(escape);
                return "\"\"";
            })
            .replace(re.innerText, function (full, innerText) {
                tempInnerTexts.push(innerText);
                return "{}";
            })
            .replace(/\s+/g, "")
            .replace(re.indexes, function (full, elementText, splitter) {
                current.appendChild(lastElement = element(elementText));
                if (splitter === ">")
                    current = lastElement;
                else if (splitter === "^")
                    current = current.parentNode;
            });

        result = tree.children.length > 1
            ? tree.children
            : tree.children[0];

        return htmlOnly
            ? tree.innerHTML
            : (result instanceof HTMLCollection ? convertCollection(result) : result);
    };

    const element = function (text) {
        let commandText = text || "",
            match_tag = commandText.match(re.tag),
            match_id = commandText.match(re.id),
            match_classes = commandText.match(re.classes),
            match_attrs = commandText.match(re.attrs),
            match_innerText = commandText.match(re.innerText),
            element = document.createElement(match_tag ? match_tag[0] : "div");

        if (match_id) {
            element.id = match_id.pop().replace(re.id, "$1");
        }

        if (match_classes) {
            element.className = match_classes.map(function (className) {
                return className.slice(1)
            }).join(" ");
        }

        if (match_innerText) {
            element.innerHTML += match_innerText.map(function () {
                return unescape(tempInnerTexts.shift());
            }).join(" ");
        }

        if (match_attrs) {
            match_attrs.map(function (chunkParam) {
                const chunk = chunkParam.replace(re.attrs, "$1").split(",");
                chunk.map(function (attrParam) {
                    const attr = attrParam.split("=");
                    const key = attr.shift();
                    const value = JSON.parse(unescape(attr.join("=")));
                    element.setAttribute(key, value);
                });
            });
        }

        return element;
    };

    return emmet;
};

export default Emmet;
