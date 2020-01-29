
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

// createNamespaceApplicationProperty('state', state);
// createNamespaceApplicationProperty('namespace', namespace);
// createNamespaceApplicationProperty('require', require);
// createNamespaceApplicationProperty('extension', extension);
NamespaceApplication.prototype.state = NamespaceApplication.state = state;
NamespaceApplication.prototype.namespace = NamespaceApplication.namespace = namespace;
NamespaceApplication.prototype.require = NamespaceApplication.require = require;
NamespaceApplication.prototype.extension = NamespaceApplication.extension = extension;

import attr from './static/attr';
import createElement from './static/createElement';
import createFragment from './static/createFragment';
import css from './static/css';
import domLoaded from "./static/domLoaded";
import empty from "./static/empty";
import each from "./static/each";
import findObjects from './static/findObjects';
import findObject from './static/findObject';
import format from './static/format';
import inject from './static/inject';
import isNode from "./static/isNode";
import loadCSS from "./static/loadCSS";
import loadJS from "./static/loadJS";
import str2node from './static/str2node';
import node2str from './static/node2str';
import on from './static/on';
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
// createNamespaceApplicationProperty('createElement', createElement);
NamespaceApplication.prototype.createElement = NamespaceApplication.createElement = createElement;
NamespaceApplication.prototype.create = NamespaceApplication.create = createElement;
NamespaceApplication.prototype.createFragment = NamespaceApplication.createFragment = createFragment;
NamespaceApplication.prototype.fragment = NamespaceApplication.fragment = createFragment;
createNamespaceApplicationProperty('css', css);
createNamespaceApplicationProperty('domLoaded', domLoaded);
createNamespaceApplicationProperty('empty', empty);
NamespaceApplication.prototype.each = NamespaceApplication.each = each;
// createNamespaceApplicationProperty('findObjects', findObjects);
NamespaceApplication.prototype.findObjects = NamespaceApplication.findObjects = findObjects;
// createNamespaceApplicationProperty('findObject', findObject);
NamespaceApplication.prototype.findObject = NamespaceApplication.findObject = findObject;
createNamespaceApplicationProperty('format', format);
createNamespaceApplicationProperty('inject', inject);
createNamespaceApplicationProperty('isNode', isNode);
createNamespaceApplicationProperty('loadCSS', loadCSS);
createNamespaceApplicationProperty('loadJS', loadJS);
createNamespaceApplicationProperty('str2node', str2node);
createNamespaceApplicationProperty('node2str', node2str);
// createNamespaceApplicationProperty('on', on);
NamespaceApplication.prototype.on = NamespaceApplication.on = on;
createNamespaceApplicationProperty('position', position);
createNamespaceApplicationProperty('positionMouse', positionMouse);
// createNamespaceApplicationProperty('query', query);
NamespaceApplication.prototype.query = NamespaceApplication.query = query;
// createNamespaceApplicationProperty('queryAll', queryAll);
NamespaceApplication.prototype.queryAll = NamespaceApplication.queryAll = queryAll;
createNamespaceApplicationProperty('redirect', redirect);
createNamespaceApplicationProperty('route', route);
createNamespaceApplicationProperty('routePath', routePath);
createNamespaceApplicationProperty('search', search);
// createNamespaceApplicationProperty('typeOf', typeOf);
NamespaceApplication.prototype.typeOf = NamespaceApplication.typeOf = typeOf;
createNamespaceApplicationProperty('typeOfStrict', typeOfStrict);
createNamespaceApplicationProperty('uri', uri);

window.NamespaceApplication = NamespaceApplication;

export default NamespaceApplication;
