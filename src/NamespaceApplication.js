import component from "./core/component";
import extension from "./core/extension";
import dependency from "./core/dependency";
import route from "./core/route";
import state from "./core/state";
import defined from "./static/defined";

class NamespaceApplication
{
    constructor(config) {
        if (NamespaceApplication.instance)
            return NamespaceApplication.instance;

        this.config = (key, value) => value === undefined ? this.configuration[key] : this.configuration[key] = value;
        this.configuration = {
            id: undefined,
            url: undefined,
            mode: undefined,
            debug: undefined,
        };
        Object.keys(config).forEach((key) => {
            if (this.configuration[key] === undefined)
                this.configuration[key] = config[key];
        });

        if (this.configuration.id) {
            Object.defineProperty(this, "root", {
                value: document.querySelector(this.configuration.id),
                writable: false
            });
        }

        this.component = component;
        this.component.register(this);

        this.extension = extension;
        this.extension.register(this);

        this.dependency = dependency;
        this.route = route;
        // this.state = state;

        NamespaceApplication.instance = this;
    }
}

NamespaceApplication.component = component;
NamespaceApplication.extension = extension;
NamespaceApplication.MODE_DEBUG = 'debug';

export default NamespaceApplication;
