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

    if (key && require.requireStack[key]) {
        const stack = require.requireStack[key];
        const max = stack.src.length - 1;

        stack.src.forEach((src, i) => {
            stack.elements.push(loadJS(src,() => {
                if (max === i) {
                    return stack.oncomplete(stack.elements);
                }
            }, stack.onerror));
        });
    }
};

export default require;
