

const extension = function (name, callback, override) {
    const ext = createObject(name, callback, override);
    if (typeof ext.callback === 'function') {
        extension.stack[name] = ext;
    }
};

extension.stack = {};

extension.init = function (thisInstance) {
    let name, ext;
    for (name in extension.stack) {
        ext = extension.stack[name];

        if (thisInstance && !ext.initialized) {
            ext.context = ext.callback.call(ext.callback, thisInstance);
            thisInstance[ext.name] = ext.context;
        }
    }
};

const createObject = function (name, callback, override) {
    if (typeof name === 'string' && typeof callback === 'function') {
        return {
            name: name,
            callback: callback,
            override: !!override,
            initialized: false,
            context: undefined
        };
    }
};

export default extension;
