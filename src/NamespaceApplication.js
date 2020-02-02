import component from "./core/component";
import extension from "./core/extension";
import dependency from "./core/dependency";
import route from "./core/route";
import state from "./core/state";

class NamespaceApplication
{
    constructor(config) {
        if (NamespaceApplication.instance)
            return NamespaceApplication.instance;

        this.id = undefined;
        this.url = undefined;
        this.debug = undefined;

        Object.keys(config).forEach((key) => {
            if (this[key] === undefined)
                this[key] = config[key];
        });

        this.component = component;
        this.component.register(this);

        this.extension = extension;
        this.extension.register(this);

        this.dependency = dependency;
        this.route = route;
        this.state = state;

        NamespaceApplication.instance = this;
    }
}

NamespaceApplication.component = component;
NamespaceApplication.extension = extension;

export default NamespaceApplication;
