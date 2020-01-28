import module from './module';


const prefix = 'extensions.';

const extension = function (name, callback, override) {
    if (arguments.length === 1) {
        return this instanceof NamespaceApplication && this[prefix + name]
            ? this[prefix + name]
            : null;
    } else {
        module(prefix + name, callback, override);
    }
};

extension.init = function (thisInstance) {
    module.init(thisInstance);
};

export default extension;