import isNode from './isNode';
import query from './query';


const each = function (list, callback, tmp) {
    let i = 0;
    if (list instanceof Array)
        for (i = 0; i < list.length; i++) callback.call({}, list[i], i, tmp);
    else
        for (i in list) callback.call({}, list[i], i, tmp);
};

each.parent = function (selector, filter, loops = 10) {
    const getParent = (elem) => elem && elem.parentNode ? elem.parentNode : false;
    let element = isNode(selector) ? selector : query(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            return element
        }
        element = getParent(element);
    }
};

each.filter = function (selector, filter, callback, loops = 10) {
    const getParent = (elem) => elem && elem.parentNode ? elem.parentNode : false;
    let element = isNode(selector) ? selector : query(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            callback(element);
            return element
        }
        element = getParent(element);
    }
    return element;
};

export default each;
