import extension from './extension';


const module = function (name, callback, override) {
    const ext = createObject(name, callback, override);
    if (typeof ext.callback === 'function') {
        module.stack[name] = ext;
    }
};

module.stack = {};

module.init = function (thisInstance) {
    let name, ext;
    for (name in module.stack) {
        ext = module.stack[name];

        if (thisInstance && !ext.initialized) {
            ext.initialized = true;
            ext.context = ext.callback.call(ext.callback, thisInstance);
            if (!thisInstance[ext.name])
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

export default module;
