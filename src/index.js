
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

        // Core
        state.init(this);
        extension.init(this);
        namespace.init(this);
    }
}

function createNamespaceApplicationProperty (key, data) {
    NamespaceApplication.prototype[key] = NamespaceApplication[key] = data;
}

import state from './core/state';
import namespace from './core/namespace';
import require from './core/require';
import extension from "./core/extension";

createNamespaceApplicationProperty('state', state);
createNamespaceApplicationProperty('namespace', namespace);
createNamespaceApplicationProperty('require', require);
// createNamespaceApplicationProperty('extension', extension);
NamespaceApplication.prototype.extension = NamespaceApplication.extension = extension;

import attr from './static/attr';
import createElement from './static/createElement';
import css from './static/css';
import domLoaded from "./static/domLoaded";
import empty from "./static/empty";
import findObjects from './static/findObjects';
import findObject from './static/findObject';
import format from './static/format';
import inject from './static/inject';
import isNode from "./static/isNode";
import loadCSS from "./static/loadCSS";
import loadJS from "./static/loadJS";
import str2node from './static/str2node';
import node2str from './static/node2str';
import position from './static/position';
import positionMouse from './static/positionMouse';
import query from './static/query';
import queryAll from './static/queryAll';
import redirect from "./static/redirect";
import route from "./static/route";
import routePath from './static/routePath';
import search from './static/search';
import typeOf from "./static/typeOf";
import typeOfStrict from "./static/typeOfStrict";
import uri from './static/uri';

createNamespaceApplicationProperty('attr', attr);
createNamespaceApplicationProperty('createElement', createElement);
createNamespaceApplicationProperty('css', css);
createNamespaceApplicationProperty('domLoaded', domLoaded);
createNamespaceApplicationProperty('empty', empty);
createNamespaceApplicationProperty('findObjects', findObjects);
createNamespaceApplicationProperty('findObject', findObject);
createNamespaceApplicationProperty('format', format);
createNamespaceApplicationProperty('inject', inject);
createNamespaceApplicationProperty('isNode', isNode);
createNamespaceApplicationProperty('loadCSS', loadCSS);
createNamespaceApplicationProperty('loadJS', loadJS);
createNamespaceApplicationProperty('str2node', str2node);
createNamespaceApplicationProperty('node2str', node2str);
createNamespaceApplicationProperty('position', position);
createNamespaceApplicationProperty('positionMouse', positionMouse);
createNamespaceApplicationProperty('query', query);
createNamespaceApplicationProperty('queryAll', queryAll);
createNamespaceApplicationProperty('redirect', redirect);
createNamespaceApplicationProperty('route', route);
createNamespaceApplicationProperty('routePath', routePath);
createNamespaceApplicationProperty('search', search);
createNamespaceApplicationProperty('typeOf', typeOf);
createNamespaceApplicationProperty('typeOfStrict', typeOfStrict);
createNamespaceApplicationProperty('uri', uri);

window.NamespaceApplication = NamespaceApplication;

export default NamespaceApplication;
