import module from './module';
import NamespaceApplication from '../index';


const namespace = function (name, callback, override) {
    if (arguments.length === 1) {
        return this instanceof NamespaceApplication && this[name]
            ? this[name]
            : null;
    } else {
        module(name, callback, override);

        const ext = module.stack[name];
        if (this instanceof NamespaceApplication && !ext.initialized) {
            ext.context = ext.callback.call(ext.callback, this);
            this[ext.name] = ext.context;
        }
    }
};

namespace.init = function (thisInstance) {
    module.init(thisInstance);
};

export default namespace;
