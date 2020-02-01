
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

NamespaceApplication.prototype.attr = NamespaceApplication.attr = attr;
NamespaceApplication.prototype.createElement = NamespaceApplication.createElement = createElement;
NamespaceApplication.prototype.create = NamespaceApplication.create = createElement;
NamespaceApplication.prototype.createFragment = NamespaceApplication.createFragment = createFragment;
NamespaceApplication.prototype.fragment = NamespaceApplication.fragment = createFragment;
NamespaceApplication.prototype.css = NamespaceApplication.css = css;
NamespaceApplication.prototype.domLoaded = NamespaceApplication.domLoaded = domLoaded;
NamespaceApplication.prototype.empty = NamespaceApplication.empty = empty;
NamespaceApplication.prototype.each = NamespaceApplication.each = each;
NamespaceApplication.prototype.findObjects = NamespaceApplication.findObjects = findObjects;
NamespaceApplication.prototype.findObject = NamespaceApplication.findObject = findObject;
NamespaceApplication.prototype.format = NamespaceApplication.format = format;
NamespaceApplication.prototype.inject = NamespaceApplication.inject = inject;
NamespaceApplication.prototype.isNode = NamespaceApplication.isNode = isNode;
NamespaceApplication.prototype.loadCSS = NamespaceApplication.loadCSS = loadCSS;
NamespaceApplication.prototype.loadJS = NamespaceApplication.loadJS = loadJS;
NamespaceApplication.prototype.str2node = NamespaceApplication.str2node = str2node;
NamespaceApplication.prototype.node2str = NamespaceApplication.node2str = node2str;
NamespaceApplication.prototype.on = NamespaceApplication.on = on;
NamespaceApplication.prototype.position = NamespaceApplication.position = position;
NamespaceApplication.prototype.positionMouse = NamespaceApplication.positionMouse = positionMouse;
NamespaceApplication.prototype.query = NamespaceApplication.query = query;
NamespaceApplication.prototype.queryAll = NamespaceApplication.queryAll = queryAll;
NamespaceApplication.prototype.redirect = NamespaceApplication.redirect = redirect;
NamespaceApplication.prototype.route = NamespaceApplication.redirect = route;
NamespaceApplication.prototype.routePath = NamespaceApplication.redirect = routePath;
NamespaceApplication.prototype.search = NamespaceApplication.redirect = search;
NamespaceApplication.prototype.typeOf = NamespaceApplication.typeOf = typeOf;
NamespaceApplication.prototype.typeOfStrict = NamespaceApplication.typeOfStrict = typeOfStrict;
NamespaceApplication.prototype.uri = NamespaceApplication.uri = uri;

window.NamespaceApplication = NamespaceApplication;

export default NamespaceApplication;
