import loadJS from '../static/loadJS';


const require = function (key, path, oncomplete, onerror) {
    require.requireKey = key;
    require.requireStack[key] = {
        src: Array.isArray(path) ? path : [path],
        elements: [],
        oncomplete: oncomplete,
        onerror: onerror
    };
};
require.requireKey = null;
require.requireStack = [];
require.start = function (key) {
    key = key || require.requireKey;
    if (key) {
        if (key && require.requireStack[key])
            load_scripts_recursive(0, key);
        else
            console.error("Require source not found! Key: " + key + " not exist!");
    }
};
const load_scripts_recursive = function (i, key) {
    const requires = require.requireStack[key];

    if (requires.src[i]) {
        if (!Array.isArray(requires.elements))
            requires.elements = [];

        requires.elements.push(loadJS(requires.src[i], function () {
            load_scripts_recursive(++i, key);
        }, requires.onerror));
    }
    else if (i === requires.src.length) {
        requires.oncomplete.call(self, requires.elements);
    }
    else {
        load_scripts_recursive(++i, key);
    }
};


export default require;
