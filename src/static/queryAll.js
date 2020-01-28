import isNode from './isNode';
import typeOf from './typeOf';
import getDocument from './getDocument';

const doc = getDocument();

const queryAll = function (selector, fromCallback, thisInstance) {
    let type = typeOf(fromCallback),
        from = doc || document,
        elements = [],
        callback = null;

    if (isNode(selector))
        return [selector];

    if (type === "function")
        callback = fromCallback;
    else if (type === "string")
        from = doc.querySelector(fromCallback);
    else if (type === "object" && isNode(fromCallback))
        from = fromCallback;

    if (from)
        elements = [].slice.call(from.querySelectorAll(selector));

    if (callback)
        callback.call(thisInstance || {}, elements);

    return elements;
};

export default queryAll;
