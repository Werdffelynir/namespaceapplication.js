import isNode from './isNode';
import queryAll from './queryAll';
import query from './query';

/**
 * search('[data-on]', 'data-on')
 * @param selector
 * @param attr
 * @param from
 * @return {{}}
 */
const search = function (selector, attr, from) {
    from = isNode(from) ? from : query(from);
    let i = 0,
        key,
        elements = {},
        queryElements = queryAll(selector, from || document.body);

    if (queryElements) {
        while (i < queryElements.length) {
            if (!attr)
                elements[i] = queryElements[i];
            else {
                if (queryElements[i].hasAttribute(attr)) {
                    key = queryElements[i].getAttribute(attr);
                    elements[key] = queryElements[i];
                }
            }
            i++;
        }
    }
    return elements;
};

export default search;
