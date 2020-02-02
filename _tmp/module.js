import merge from "../src/static/merge";


const module = {

    list: {},

    module: function (config)
    {
        if (typeof config === 'string') {
            return module.list[config];

        } else {
            const comp = module.create(config);

            if (typeof comp.init === 'function' && !comp.initialized){
                comp.initialized = true;
                comp.init();
            }

            if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication){
                comp.completed = true;
                comp.complete.call(comp, this);
            }

            module.list[comp.id] = comp;
        }
    },

    register: function (instance)
    {
        if (instance instanceof NamespaceApplication)
        {
            Object.keys(module.list).forEach((key) => {
                const comp = module.list[key];
                if (comp.complete && !comp.completed) {
                    comp.completed = true;
                    comp.complete.call(comp, instance);
                }
            });
        }
    },

    create: function (config)
    {
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
    }

};
export default module;
