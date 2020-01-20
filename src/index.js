import loadJS from "./static/loadJS";
import typeOf from "./static/typeOf";
import typeOfStrict from "./static/typeOfStrict";
import extension from "./extension/extension";

class NamespaceApplication {

    constructor () {
        this.path = '/';
        this.debug = true;

        if (arguments.length === 1 && arguments[0] && typeof arguments[0] === 'object') {
            for (let key in arguments[0]) {
                if (this[key] === undefined || ['path', 'debug'].indexOf(key) !== -1)
                    this[key] = arguments[0][key];
            }
        }

        extension.init(this);
    }

}

NamespaceApplication.extension = extension;
NamespaceApplication.loadJS = loadJS;
NamespaceApplication.typeOf = typeOf;
NamespaceApplication.typeOfStrict = typeOfStrict;
window.NamespaceApplication = NamespaceApplication;

export default NamespaceApplication;