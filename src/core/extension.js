import merge from "../static/merge";


const extension = function (config)
{
    if (typeof config === 'string') {
        return extension.list[config];
    } else {
        const comp = extension.create(config);
        if (typeof comp.init === 'function' && !comp.initialized){
            comp.initialized = true;
            comp.init();
        }
        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication){
            comp.completed = true;
            comp.complete.call(comp, this);
        }
        extension.list[comp.id] = comp;
    }
};

extension.register = function (instance)
{
    if (instance instanceof NamespaceApplication) {
        Object.keys(extension.list).forEach((key) => {
            const comp = extension.list[key];
            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
            }
        });
    }
};

extension.list = {};

extension.create = function (config) {
    return merge( {
        id: null,
        template: null,
        init: () => {},
        complete: () => {},
        override: false,
        initialized: false,
        completed: false,
        context: false,
    }, config)
};


export default extension;
