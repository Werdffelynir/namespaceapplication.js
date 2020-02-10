import merge from "../static/merge";


const component = function (config) {
    if (typeof config === 'string') {
        return component.list[config];
    } else {
        const comp = component.create(config);
        if (typeof comp.init === 'function' && !comp.initialized){
            comp.initialized = true;
            comp.init();
        }
        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication){
            comp.completed = true;
            comp.complete.call(comp, this);
        }
        component.list[comp.id] = comp;
    }
};

component.register = function (instance)
{
    if (instance instanceof NamespaceApplication) {
        Object.keys(component.list).forEach((key) => {
            const comp = component.list[key];
            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
            }
        });
    }
};

component.list = {};

component.create = function (config) {
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


export default component;
