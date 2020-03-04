import merge from "../static/merge";
import str2node from "../static/str2node";
import search from "../static/search";
import queryAll from "../static/queryAll";
import query from "../static/query";
import inject from "../static/inject";
import { EVENTS_NAMES_BASIC } from "../event-manager/eventsNames";
import isNode from "../static/isNode";
import copy from "../static/copy";


const component = function (config) {
    if (typeof config === 'string') {



        return component.list[config];
    } else {
        const comp = component.create(config);
        component.list[comp.id] = comp;

        if (typeof comp.init === 'function' && !comp.initialized){
            comp.initialized = true;
            comp.init();
        }

        if (typeof comp.template === 'string') {
            comp.template = str2node(comp.template);
        }

        if (isNode(comp.template)) {

            if (comp.template.querySelector('[data-node]'))
                comp.node = search('[data-node]', 'data-node', comp.template);

            if (comp.styles)
                setStyles(comp);

            attributesEventsHandler(comp, 'on', Object.keys(EVENTS_NAMES_BASIC));
        }

        if (this instanceof NamespaceApplication) {
            injectComponent (comp, this);
            if (!comp.template && this.root){
                const node = query('[data-component="'+ comp.id +'"]', this.root);
                if (node)
                    comp.template = node;
            }
        } else {
            if (NamespaceApplication.mode === NamespaceApplication.MODE_DEBUG)
                throw new Error('"Late Call": Component ['+comp.id+'] can t call completed() and injects')
        }

        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }

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
                injectComponent (comp, instance);
            }
        });
    }
};

component.list = {};

component.create = function (config) {
    return merge( {
        id: null,
        props: null,
        styles: null,
        template: false,
        override: false,
        init: () => {},
        complete: () => {},
        methods: {},
        node: {},
        initialized: false,
        completed: false,
    }, config)
};

function attributesEventsHandler (comp, prefix, eventsNames) {
    const addEvent = (elem, attr, eventName) => {
        const method = elem.getAttribute(attr);
        if (typeof comp.methods[method] === "function") {
            elem.removeAttribute(attr);
            elem.addEventListener(eventName, (e) => {
                comp.methods[method].call(comp, e, e.target || e.currentTarget || e.path[0])
            });
        }
    };

    eventsNames.forEach((eventName) => {
        const attr = prefix + '-' + eventName;
        if (comp.template.querySelector('['+attr+']')) {
            Array.from(comp.template.querySelectorAll('['+attr+']')).forEach((elem) => {
                addEvent(elem, attr, eventName);
            })
        } else if (comp.template.hasAttribute(attr)) {
            addEvent(comp.template, attr, eventName);
        }
    })
}

function injectComponent (comp, instance) {
    const nodes = queryAll('[data-component="'+ comp.id +'"]', instance.root);

    if (nodes)
        nodes.forEach((node) => {
            if (comp.props) {
                comp.props.forEach((prop) => {
                    if(node.hasAttribute(prop)) {
                        Object.defineProperty(comp, prop, {
                            value: node.getAttribute(prop),
                            writable: false
                        });
                        node.removeAttribute(prop);
                    }
                });
            }
            if (node !== comp.template)
                inject(node, comp.template);
        });

    return comp;
}

function setStyles(comp, instance) {

    Object.keys(comp.styles).forEach((selector) => {
        if (selector === 'template' && isNode(comp.template)) {
            Object.keys(comp.styles[selector]).forEach((key) => {
                comp.template.style[key] = comp.styles[selector][key];
            });
        } else
            queryAll(selector, comp.template, function (node) {
                Object.keys(comp.styles[selector]).forEach((key) => {
                    node.style[key] = comp.styles[selector][key];
                });
            });
    });

    return comp;
}

export default component;
