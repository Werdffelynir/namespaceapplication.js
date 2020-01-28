/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/extension.js":
/*!*******************************!*\
  !*** ./src/core/extension.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _module2 = __webpack_require__(/*! ./module */ "./src/core/module.js");

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'extensions.';

var extension = function extension(name, callback, override) {
    if (arguments.length === 1) {
        return this instanceof NamespaceApplication && this[prefix + name] ? this[prefix + name] : null;
    } else {
        (0, _module3.default)(prefix + name, callback, override);
    }
};

extension.init = function (thisInstance) {
    _module3.default.init(thisInstance);
};

exports.default = extension;

/***/ }),

/***/ "./src/core/module.js":
/*!****************************!*\
  !*** ./src/core/module.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extension = __webpack_require__(/*! ./extension */ "./src/core/extension.js");

var _extension2 = _interopRequireDefault(_extension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = function _module(name, callback, override) {
    var ext = createObject(name, callback, override);
    if (typeof ext.callback === 'function') {
        _module.stack[name] = ext;
    }
};

_module.stack = {};

_module.init = function (thisInstance) {
    var name = void 0,
        ext = void 0;
    for (name in _module.stack) {
        ext = _module.stack[name];

        if (thisInstance && !ext.initialized) {
            ext.context = ext.callback.call(ext.callback, thisInstance);
            if (!thisInstance) thisInstance = {};
            thisInstance[ext.name] = ext.context;
        }
    }
};

var createObject = function createObject(name, callback, override) {
    if (typeof name === 'string' && typeof callback === 'function') {
        return {
            name: name,
            callback: callback,
            override: !!override,
            initialized: false,
            context: undefined
        };
    }
};

exports.default = _module;

/***/ }),

/***/ "./src/core/namespace.js":
/*!*******************************!*\
  !*** ./src/core/namespace.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _module2 = __webpack_require__(/*! ./module */ "./src/core/module.js");

var _module3 = _interopRequireDefault(_module2);

var _index = __webpack_require__(/*! ../index */ "./src/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespace = function namespace(name, callback, override) {
    if (arguments.length === 1) {
        return this instanceof _index2.default && this[name] ? this[name] : null;
    } else {
        (0, _module3.default)(name, callback, override);

        var ext = _module3.default.stack[name];
        if (this instanceof _index2.default && !ext.initialized) {
            ext.context = ext.callback.call(ext.callback, this);
            this[ext.name] = ext.context;
        }
    }
};

namespace.init = function (thisInstance) {
    _module3.default.init(thisInstance);
};

exports.default = namespace;

/***/ }),

/***/ "./src/core/require.js":
/*!*****************************!*\
  !*** ./src/core/require.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = function _require(key, path, oncomplete, onerror) {
    _require.requireKey = key;
    _require.requireStack[key] = {
        src: Array.isArray(path) ? path : [path],
        elements: [],
        oncomplete: oncomplete,
        onerror: onerror
    };
};
_require.requireKey = null;
_require.requireStack = [];
_require.start = function (key) {
    key = key || _require.requireKey;
    if (key) {
        if (key && _require.requireStack[key]) load_scripts_recursive(0, key);else console.error("Require source not found! Key: " + key + " not exist!");
    }
};
var load_scripts_recursive = function load_scripts_recursive(i, key) {
    var requires = _require.requireStack[key];

    if (requires.src[i]) {
        if (!Array.isArray(requires.elements)) requires.elements = [];

        requires.elements.push((0, _loadJS2.default)(requires.src[i], function () {
            load_scripts_recursive(++i, key);
        }, requires.onerror));
    } else if (i === requires.src.length) {
        requires.oncomplete.call(self, requires.elements);
    } else {
        load_scripts_recursive(++i, key);
    }
};

exports.default = _require;

/***/ }),

/***/ "./src/core/state.js":
/*!***************************!*\
  !*** ./src/core/state.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var state = function state(key) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return data ? state.set(key, data) : state.get(key);
};

state.source = new Proxy({}, {
    get: function get(obj, prop) {
        return prop in obj ? obj[prop] : null;
    },
    set: function set(obj, prop, value) {
        if (state.actionsCallback[prop]) {
            state.actionsCallback[prop].call({}, state.source, value);
        }
        return true;
    }
});

state.sourceData = {};

state.actionsCallback = {};

state.action = function (key, callback) {
    state.actionsCallback[key] = callback;
};

state.init = function (thisInstance) {};

state.get = function (key) {
    return state.sourceData[key] || state.source[key];
};

state.set = function (key, payload) {
    state.source[key] = state.sourceData[key] = payload;
};

exports.default = state;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _state = __webpack_require__(/*! ./core/state */ "./src/core/state.js");

var _state2 = _interopRequireDefault(_state);

var _namespace = __webpack_require__(/*! ./core/namespace */ "./src/core/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _require2 = __webpack_require__(/*! ./core/require */ "./src/core/require.js");

var _require3 = _interopRequireDefault(_require2);

var _extension = __webpack_require__(/*! ./core/extension */ "./src/core/extension.js");

var _extension2 = _interopRequireDefault(_extension);

var _attr = __webpack_require__(/*! ./static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _createElement = __webpack_require__(/*! ./static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _css = __webpack_require__(/*! ./static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ./static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _empty = __webpack_require__(/*! ./static/empty */ "./src/static/empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _findObjects = __webpack_require__(/*! ./static/findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _findObject = __webpack_require__(/*! ./static/findObject */ "./src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _format = __webpack_require__(/*! ./static/format */ "./src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _inject = __webpack_require__(/*! ./static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _isNode = __webpack_require__(/*! ./static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ./static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ./static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _str2node = __webpack_require__(/*! ./static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ./static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _position = __webpack_require__(/*! ./static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ./static/positionMouse */ "./src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _query = __webpack_require__(/*! ./static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ./static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _redirect = __webpack_require__(/*! ./static/redirect */ "./src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _route = __webpack_require__(/*! ./static/route */ "./src/static/route.js");

var _route2 = _interopRequireDefault(_route);

var _routePath = __webpack_require__(/*! ./static/routePath */ "./src/static/routePath.js");

var _routePath2 = _interopRequireDefault(_routePath);

var _search = __webpack_require__(/*! ./static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _typeOf = __webpack_require__(/*! ./static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ./static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ./static/uri */ "./src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NamespaceApplication = function NamespaceApplication() {
    _classCallCheck(this, NamespaceApplication);

    this.path = '/';
    this.debug = true;

    if (arguments.length === 1 && arguments[0] && _typeof(arguments[0]) === 'object') {
        for (var key in arguments[0]) {
            if (this[key] === undefined || ['path', 'debug'].indexOf(key) !== -1) this[key] = arguments[0][key];
        }
    }

    // Core
    _state2.default.init(this);
    _extension2.default.init(this);
    _namespace2.default.init(this);
};

function createNamespaceApplicationProperty(key, data) {
    NamespaceApplication.prototype[key] = NamespaceApplication[key] = data;
}

createNamespaceApplicationProperty('state', _state2.default);
createNamespaceApplicationProperty('namespace', _namespace2.default);
createNamespaceApplicationProperty('require', _require3.default);
// createNamespaceApplicationProperty('extension', extension);
NamespaceApplication.prototype.extension = NamespaceApplication.extension = _extension2.default;

createNamespaceApplicationProperty('attr', _attr2.default);
createNamespaceApplicationProperty('createElement', _createElement2.default);
createNamespaceApplicationProperty('css', _css2.default);
createNamespaceApplicationProperty('domLoaded', _domLoaded2.default);
createNamespaceApplicationProperty('empty', _empty2.default);
createNamespaceApplicationProperty('findObjects', _findObjects2.default);
createNamespaceApplicationProperty('findObject', _findObject2.default);
createNamespaceApplicationProperty('format', _format2.default);
createNamespaceApplicationProperty('inject', _inject2.default);
createNamespaceApplicationProperty('isNode', _isNode2.default);
createNamespaceApplicationProperty('loadCSS', _loadCSS2.default);
createNamespaceApplicationProperty('loadJS', _loadJS2.default);
createNamespaceApplicationProperty('str2node', _str2node2.default);
createNamespaceApplicationProperty('node2str', _node2str2.default);
createNamespaceApplicationProperty('position', _position2.default);
createNamespaceApplicationProperty('positionMouse', _positionMouse2.default);
createNamespaceApplicationProperty('query', _query2.default);
createNamespaceApplicationProperty('queryAll', _queryAll2.default);
createNamespaceApplicationProperty('redirect', _redirect2.default);
createNamespaceApplicationProperty('route', _route2.default);
createNamespaceApplicationProperty('routePath', _routePath2.default);
createNamespaceApplicationProperty('search', _search2.default);
createNamespaceApplicationProperty('typeOf', _typeOf2.default);
createNamespaceApplicationProperty('typeOfStrict', _typeOfStrict2.default);
createNamespaceApplicationProperty('uri', _uri2.default);

window.NamespaceApplication = NamespaceApplication;

exports.default = NamespaceApplication;

/***/ }),

/***/ "./src/static/attr.js":
/*!****************************!*\
  !*** ./src/static/attr.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attr = function attr(element, name, value) {
    var type_element = (0, _typeOf2.default)(element);
    if (type_element === 'string') {
        element = (0, _query2.default)(element);
    }

    if ((0, _isNode2.default)(element) && arguments.length === 2) {
        if ((0, _typeOf2.default)(name, 'object')) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
        } else return element.getAttribute(name);
    } else if ((0, _isNode2.default)(element) && arguments.length === 3) {
        if (value === false) element.removeAttribute(name);else element.setAttribute(name, value);
    }
};

exports.default = attr;

/***/ }),

/***/ "./src/static/createElement.js":
/*!*************************************!*\
  !*** ./src/static/createElement.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createElement = function createElement(tag, attrs, inner) {
    var element = document.createElement(tag),
        is_attr = function is_attr(src) {
        return (0, _typeOf2.default)(src, 'object') && !(0, _isNode2.default)(src);
    },
        insert_html = function insert_html(src) {
        element.insertAdjacentHTML('beforeend', src);
    },
        insert_child = function insert_child(src) {
        element.appendChild(src);
    },
        insert = function insert(src) {
        var type = (0, _typeOf2.default)(src);
        if (type === 'string') insert_html(src);else if (type === 'object' && (0, _isNode2.default)(src)) insert_child(src);else if (type === 'array') for (var i = 0; i < src.length; i++) {
            insert(src[i]);
        }
    };

    if (arguments.length === 2 && !is_attr(attrs)) {
        inner = attrs;
        attrs = false;
    }

    if (attrs) for (var k in attrs) {
        element.setAttribute(k, attrs[k]);
    }if (inner) insert(inner);

    return element;
};

exports.default = createElement;

/***/ }),

/***/ "./src/static/css.js":
/*!***************************!*\
  !*** ./src/static/css.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = function css(selector, properties) {
    if (!selector || !properties) return;
    if (arguments.length === 3) {
        var prop = {};
        prop[properties] = arguments[2];
        return css(selector, prop);
    }

    var i = void 0,
        k = void 0,
        elements = null,
        typeSelector = (0, _typeOf2.default)(selector),
        typeProperties = (0, _typeOf2.default)(properties),
        parse = function parse(str) {
        var i = void 0,
            p1 = str.split(';'),
            p2 = void 0,
            pn = void 0,
            ix = void 0,
            o = {};
        for (i = 0; i < p1.length; i++) {
            p2 = p1[i].split(':');
            pn = p2[0].trim();
            ix = pn.indexOf('-');
            if (ix !== -1) pn = pn.substring(0, ix) + pn[ix + 1].toUpperCase() + pn.substring(ix + 2);
            if (p2.length === 2) o[pn] = p2[1].trim();
        }
        return o;
    };

    switch (typeSelector) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;

        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;

        case 'array':
            elements = selector;
            break;
    }

    if (elements) {

        if (typeProperties === 'string') properties = parse(properties);

        for (i in elements) {
            for (k in properties) {
                elements[i].style[k] = properties[k];
            }
        }
    }

    return elements;
};

exports.default = css;

/***/ }),

/***/ "./src/static/domLoaded.js":
/*!*********************************!*\
  !*** ./src/static/domLoaded.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domLoaded = function domLoaded(callback) {
    var doc = (0, _getDocument2.default)();
    if (doc.querySelector('body')) callback.call();else doc.addEventListener('DOMContentLoaded', function () {
        callback.call();
    }, false);
};

exports.default = domLoaded;

/***/ }),

/***/ "./src/static/empty.js":
/*!*****************************!*\
  !*** ./src/static/empty.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = function empty(src) {
    if ((0, _typeOf2.default)(src, 'object') || (0, _typeOf2.default)(src, 'array')) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) return false;
        }return true;
    } else if ((0, _typeOf2.default)(src, 'string')) {
        src = src.replace(/\s/g, '');
        return src === "" || src === "0";
    } else {
        return src === 0 || src === null || src === undefined || src === false || isNaN(src);
    }
};

exports.default = empty;

/***/ }),

/***/ "./src/static/findObject.js":
/*!**********************************!*\
  !*** ./src/static/findObject.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findObjects = __webpack_require__(/*! ./findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findObject = function findObject(values, attr, attrValue) {
    var tmp = (0, _findObjects2.default)(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

exports.default = findObject;

/***/ }),

/***/ "./src/static/findObjects.js":
/*!***********************************!*\
  !*** ./src/static/findObjects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var findObjects = function findObjects(values, attr, attrValue) {
    var i = void 0,
        tmp = [],
        list = values || [];
    for (i = 0; i < list.length; i++) {
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue) tmp.push(list[i]);
    }return tmp;
};

exports.default = findObjects;

/***/ }),

/***/ "./src/static/format.js":
/*!******************************!*\
  !*** ./src/static/format.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var format = function format(string, formated) {
    var reg = void 0;
    if (Array.isArray(formated)) reg = new RegExp(/{(\d+)}/g);else if (formated && (typeof formated === 'undefined' ? 'undefined' : _typeof(formated)) === 'object') reg = new RegExp(/{(\w+)}/g);

    return string.replace(reg, function (match, number) {
        return _typeof(formated[number]) !== undefined ? formated[number] : match;
    });
};

exports.default = format;

/***/ }),

/***/ "./src/static/getDocument.js":
/*!***********************************!*\
  !*** ./src/static/getDocument.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getDocument = function getDocument() {
    if (document) return document;else throw new Error('document object not exist!');
};

exports.default = getDocument;

/***/ }),

/***/ "./src/static/getLocation.js":
/*!***********************************!*\
  !*** ./src/static/getLocation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getLocation = function getLocation() {
    if (location) return location;else throw new Error('location object not exist!');
};

exports.default = getLocation;

/***/ }),

/***/ "./src/static/getWindow.js":
/*!*********************************!*\
  !*** ./src/static/getWindow.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getWindow = function getWindow() {
    if (window) return window;else throw new Error('window object not exist!');
};

exports.default = getWindow;

/***/ }),

/***/ "./src/static/inject.js":
/*!******************************!*\
  !*** ./src/static/inject.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inject = function inject(selector, data, append, to) {
    if (typeof selector === 'string') selector = (0, _query2.default)(selector, to);

    if (!append) selector.textContent = '';

    if ((0, _isNode2.default)(selector)) {
        if ((0, _isNode2.default)(data)) {
            selector.appendChild(data);
        } else if ((0, _typeOf2.default)(data, 'array')) {
            var i = void 0;
            for (i = 0; i < data.length; i++) {
                inject(selector, data[i], true, to);
            }
        } else {
            selector.innerHTML = !append ? data : selector.innerHTML + data;
        }
        return selector;
    }
    return null;
};

exports.default = inject;

/***/ }),

/***/ "./src/static/isNode.js":
/*!******************************!*\
  !*** ./src/static/isNode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var isNode = function isNode(value) {
    return value && (value.nodeType === Node.TEXT_NODE || value.nodeType === Node.ELEMENT_NODE || value.nodeType === Node.DOCUMENT_FRAGMENT_NODE || value.nodeType === Node.DOCUMENT_NODE);
};

exports.default = isNode;

/***/ }),

/***/ "./src/static/loadCSS.js":
/*!*******************************!*\
  !*** ./src/static/loadCSS.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadCSS = function loadCSS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadCSS(src[i], onload, onerror);
        }
    } else {
        var doc = (0, _getDocument2.default)();
        var link = doc.createElement('link');
        var id = "src-" + Math.random().toString(32).slice(2);

        link.href = src.substr(-4) === '.css' ? src : src + '.css';
        link.rel = 'stylesheet';
        link.id = id;
        link.onload = onload;
        link.onerror = onerror;

        doc.head.appendChild(link);
        return link;
    }
};

exports.default = loadCSS;

/***/ }),

/***/ "./src/static/loadJS.js":
/*!******************************!*\
  !*** ./src/static/loadJS.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadJS = function loadJS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadJS(src[i], onload, onerror);
        }
    } else {
        var doc = (0, _getDocument2.default)();
        var script = doc.createElement('script');
        var id = "src-" + Math.random().toString(32).slice(2);

        script.src = src.substr(-3) === '.js' ? src : src + '.js';
        script.type = 'application/javascript';
        script.id = id;
        script.onload = onload;
        script.onerror = onerror;

        doc.head.appendChild(script);
        return script;
    }
};

exports.default = loadJS;

/***/ }),

/***/ "./src/static/node2str.js":
/*!********************************!*\
  !*** ./src/static/node2str.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var node2str = function node2str(element) {
    var container = document.createElement("div");
    container.appendChild(element.cloneNode(true));
    return container.innerHTML;
};

exports.default = node2str;

/***/ }),

/***/ "./src/static/position.js":
/*!********************************!*\
  !*** ./src/static/position.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var position = function position(elem) {
    var data = { x: 0, y: 0, width: 0, height: 0 };

    if (typeof elem === 'string') elem = document.querySelector(elem);

    if (elem === undefined || elem === window || elem === document) {
        data.width = window.innerWidth;
        data.height = window.innerHeight;
        data.element = window;
    } else if (elem && elem.nodeType === Node.ELEMENT_NODE) {
        if (elem.getBoundingClientRect) {
            var rect = elem.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                clientTop = document.documentElement.clientTop || document.body.clientTop || 0,
                clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

            data.y = Math.round(rect.top + scrollTop - clientTop);
            data.x = Math.round(rect.left + scrollLeft - clientLeft);
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        } else {
            var top = 0,
                left = 0;
            while (elem) {
                top += parseInt(elem.offsetTop, 10);
                left += parseInt(elem.offsetLeft, 10);
                elem = elem.offsetParent;
            }
            data.y = top;
            data.x = left;
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        }
        data.element = elem;
    }
    return data;
};

exports.default = position;

/***/ }),

/***/ "./src/static/positionMouse.js":
/*!*************************************!*\
  !*** ./src/static/positionMouse.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var positionMouse = function positionMouse(event) {
    if (!(event instanceof MouseEvent)) {
        console.error('Error: argument is not type the MouseEvent!');
        return;
    }
    var rect = document.body.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

exports.default = positionMouse;

/***/ }),

/***/ "./src/static/query.js":
/*!*****************************!*\
  !*** ./src/static/query.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param selector
 * @param fromCallback
 * @param thisInstance
 * @returns {Node|boolean}
 */
var query = function query(selector, fromCallback, thisInstance) {
  var elements = (0, _queryAll2.default)(selector, fromCallback, thisInstance);
  return elements && elements[0] ? elements[0] : false;
};

exports.default = query;

/***/ }),

/***/ "./src/static/queryAll.js":
/*!********************************!*\
  !*** ./src/static/queryAll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doc = (0, _getDocument2.default)();

var queryAll = function queryAll(selector, fromCallback, thisInstance) {
    var type = (0, _typeOf2.default)(fromCallback),
        from = doc || document,
        elements = [],
        callback = null;

    if ((0, _isNode2.default)(selector)) return [selector];

    if (type === "function") callback = fromCallback;else if (type === "string") from = doc.querySelector(fromCallback);else if (type === "object" && (0, _isNode2.default)(fromCallback)) from = fromCallback;

    if (from) elements = [].slice.call(from.querySelectorAll(selector));

    if (callback) callback.call(thisInstance || {}, elements);

    return elements;
};

exports.default = queryAll;

/***/ }),

/***/ "./src/static/redirect.js":
/*!********************************!*\
  !*** ./src/static/redirect.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirect = function redirect(to) {
    var loc = (0, _getLocation2.default)();
    var doc = (0, _getDocument2.default)();
    loc.href = to || doc.href;
};

exports.default = redirect;

/***/ }),

/***/ "./src/static/route.js":
/*!*****************************!*\
  !*** ./src/static/route.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var route = function route(to) {};

exports.default = route;

/***/ }),

/***/ "./src/static/routePath.js":
/*!*********************************!*\
  !*** ./src/static/routePath.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

var _getWindow = __webpack_require__(/*! ./getWindow */ "./src/static/getWindow.js");

var _getWindow2 = _interopRequireDefault(_getWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loc = (0, _getLocation2.default)();
var win = (0, _getWindow2.default)();

var routePath = function routePath(hash, query) {
    var path = loc.pathname;
    if (hash) path += loc.hash;
    if (query) path += win.search;
    if (this.url && path.indexOf(this.url) === 0) {
        path = path.substr(this.url.length);
        if (path.slice(0, 1) !== '/') path = '/' + path;
    }
    return path;
};

exports.default = routePath;

/***/ }),

/***/ "./src/static/search.js":
/*!******************************!*\
  !*** ./src/static/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = function search(selector, attr, from) {
    from = (0, _isNode2.default)(from) ? from : (0, _query2.default)(from);
    var i = 0,
        key = void 0,
        elements = {},
        queryElements = (0, _queryAll2.default)(selector, from || document.body);

    if (queryElements) {
        while (i < queryElements.length) {
            if (!attr) elements[i] = queryElements[i];else {
                if (queryElements[i].hasAttribute(attr)) {
                    key = queryElements[i].getAttribute(attr);
                    elements[key] = queryElements[i];
                }
            }
            i++;
        }
    }
    return elements;
};

exports.default = search;

/***/ }),

/***/ "./src/static/str2node.js":
/*!********************************!*\
  !*** ./src/static/str2node.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var str2node = function str2node(string) {
    var i = void 0,
        fragment = document.createDocumentFragment(),
        container = document.createElement("div");
    container.innerHTML = string;

    while (i = container.firstChild) {
        fragment.appendChild(i);
    }return fragment.childNodes.length === 1 ? fragment.firstChild : fragment;
};

exports.default = str2node;

/***/ }),

/***/ "./src/static/typeOf.js":
/*!******************************!*\
  !*** ./src/static/typeOf.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeOfStrict = __webpack_require__(/*! ./typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeOf = function typeOf(value, type) {
    var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    var t = (0, _typeOfStrict2.default)(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') t = 'object';

    return typeof type === 'string' ? type.toLowerCase() === t : t;
};

exports.default = typeOf;

/***/ }),

/***/ "./src/static/typeOfStrict.js":
/*!************************************!*\
  !*** ./src/static/typeOfStrict.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var typeOfStrict = function typeOfStrict(value, type) {
    var t = Object.prototype.toString.call(value).slice(8, -1);
    return typeof type === 'string' ? type === t : t;
};

exports.default = typeOfStrict;

/***/ }),

/***/ "./src/static/uri.js":
/*!***************************!*\
  !*** ./src/static/uri.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uri = function uri(_uri) {
    var loc = (0, _getLocation2.default)();
    _uri = _uri || loc.pathname;
    _uri = _uri.replace(/\/+/ig, '/');
    return _uri.length > 1 && _uri.slice(0, 1) !== '/' ? '/' + _uri : _uri;
};

exports.default = uri;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVxdWlyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcm91dGVQYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiXSwibmFtZXMiOlsicHJlZml4IiwiZXh0ZW5zaW9uIiwibmFtZSIsImNhbGxiYWNrIiwib3ZlcnJpZGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJOYW1lc3BhY2VBcHBsaWNhdGlvbiIsImluaXQiLCJ0aGlzSW5zdGFuY2UiLCJtb2R1bGUiLCJleHQiLCJjcmVhdGVPYmplY3QiLCJzdGFjayIsImluaXRpYWxpemVkIiwiY29udGV4dCIsImNhbGwiLCJ1bmRlZmluZWQiLCJuYW1lc3BhY2UiLCJyZXF1aXJlIiwia2V5IiwicGF0aCIsIm9uY29tcGxldGUiLCJvbmVycm9yIiwicmVxdWlyZUtleSIsInJlcXVpcmVTdGFjayIsInNyYyIsIkFycmF5IiwiaXNBcnJheSIsImVsZW1lbnRzIiwic3RhcnQiLCJsb2FkX3NjcmlwdHNfcmVjdXJzaXZlIiwiY29uc29sZSIsImVycm9yIiwiaSIsInJlcXVpcmVzIiwicHVzaCIsInNlbGYiLCJzdGF0ZSIsImRhdGEiLCJzZXQiLCJnZXQiLCJzb3VyY2UiLCJQcm94eSIsIm9iaiIsInByb3AiLCJ2YWx1ZSIsImFjdGlvbnNDYWxsYmFjayIsInNvdXJjZURhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZGVidWciLCJpbmRleE9mIiwiY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImF0dHIiLCJjcmVhdGVFbGVtZW50IiwiY3NzIiwiZG9tTG9hZGVkIiwiZW1wdHkiLCJmaW5kT2JqZWN0cyIsImZpbmRPYmplY3QiLCJmb3JtYXQiLCJpbmplY3QiLCJpc05vZGUiLCJsb2FkQ1NTIiwibG9hZEpTIiwic3RyMm5vZGUiLCJub2RlMnN0ciIsInBvc2l0aW9uIiwicG9zaXRpb25Nb3VzZSIsInF1ZXJ5IiwicXVlcnlBbGwiLCJyZWRpcmVjdCIsInJvdXRlIiwicm91dGVQYXRoIiwic2VhcmNoIiwidHlwZU9mIiwidHlwZU9mU3RyaWN0IiwidXJpIiwid2luZG93IiwiZWxlbWVudCIsInR5cGVfZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInRhZyIsImF0dHJzIiwiaW5uZXIiLCJkb2N1bWVudCIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0IiwidHlwZSIsImsiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJzcGxpdCIsInAyIiwicG4iLCJpeCIsIm8iLCJ0cmltIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdHlsZSIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzT3duUHJvcGVydHkiLCJyZXBsYWNlIiwiaXNOYU4iLCJ2YWx1ZXMiLCJhdHRyVmFsdWUiLCJ0bXAiLCJsaXN0Iiwic3RyaW5nIiwiZm9ybWF0ZWQiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsIm51bWJlciIsImdldERvY3VtZW50IiwiRXJyb3IiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiZ2V0V2luZG93IiwiYXBwZW5kIiwidG8iLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwib25sb2FkIiwibGluayIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJocmVmIiwic3Vic3RyIiwicmVsIiwiaGVhZCIsInNjcmlwdCIsImNvbnRhaW5lciIsImNsb25lTm9kZSIsImVsZW0iLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInBhcnNlSW50Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsImV2ZW50IiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwiZnJvbUNhbGxiYWNrIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2MiLCJ3aW4iLCJoYXNoIiwicGF0aG5hbWUiLCJ1cmwiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImNoaWxkTm9kZXMiLCJzaW1wbGVUeXBlcyIsInQiLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBQ0FqSCxXQUFNQSxRQUFPaUgsSUFBSUcsUUFBakI7QUFDQXBILFdBQU1BLEtBQUl1QyxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT3ZDLEtBQUl6RSxNQUFKLEdBQWEsQ0FBYixJQUFrQnlFLEtBQUl3RSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTXhFLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6Im5hLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IG1vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5cblxuY29uc3QgcHJlZml4ID0gJ2V4dGVuc2lvbnMuJztcblxuY29uc3QgZXh0ZW5zaW9uID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24gJiYgdGhpc1twcmVmaXggKyBuYW1lXVxuICAgICAgICAgICAgPyB0aGlzW3ByZWZpeCArIG5hbWVdXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlKHByZWZpeCArIG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSk7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLmluaXQgPSBmdW5jdGlvbiAodGhpc0luc3RhbmNlKSB7XG4gICAgbW9kdWxlLmluaXQodGhpc0luc3RhbmNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbjsiLCJpbXBvcnQgZXh0ZW5zaW9uIGZyb20gJy4vZXh0ZW5zaW9uJztcblxuXG5jb25zdCBtb2R1bGUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIG92ZXJyaWRlKSB7XG4gICAgY29uc3QgZXh0ID0gY3JlYXRlT2JqZWN0KG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSk7XG4gICAgaWYgKHR5cGVvZiBleHQuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kdWxlLnN0YWNrW25hbWVdID0gZXh0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5zdGFjayA9IHt9O1xuXG5tb2R1bGUuaW5pdCA9IGZ1bmN0aW9uICh0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgbmFtZSwgZXh0O1xuICAgIGZvciAobmFtZSBpbiBtb2R1bGUuc3RhY2spIHtcbiAgICAgICAgZXh0ID0gbW9kdWxlLnN0YWNrW25hbWVdO1xuXG4gICAgICAgIGlmICh0aGlzSW5zdGFuY2UgJiYgIWV4dC5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgZXh0LmNvbnRleHQgPSBleHQuY2FsbGJhY2suY2FsbChleHQuY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXNJbnN0YW5jZSlcbiAgICAgICAgICAgICAgICB0aGlzSW5zdGFuY2UgPSB7fTtcbiAgICAgICAgICAgIHRoaXNJbnN0YW5jZVtleHQubmFtZV0gPSBleHQuY29udGV4dDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU9iamVjdCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgb3ZlcnJpZGUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgIG92ZXJyaWRlOiAhIW92ZXJyaWRlLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29udGV4dDogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlO1xuIiwiaW1wb3J0IG1vZHVsZSBmcm9tICcuL21vZHVsZSc7XG5pbXBvcnQgTmFtZXNwYWNlQXBwbGljYXRpb24gZnJvbSAnLi4vaW5kZXgnO1xuXG5cbmNvbnN0IG5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgb3ZlcnJpZGUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uICYmIHRoaXNbbmFtZV1cbiAgICAgICAgICAgID8gdGhpc1tuYW1lXVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZShuYW1lLCBjYWxsYmFjaywgb3ZlcnJpZGUpO1xuXG4gICAgICAgIGNvbnN0IGV4dCA9IG1vZHVsZS5zdGFja1tuYW1lXTtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbiAmJiAhZXh0LmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBleHQuY29udGV4dCA9IGV4dC5jYWxsYmFjay5jYWxsKGV4dC5jYWxsYmFjaywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzW2V4dC5uYW1lXSA9IGV4dC5jb250ZXh0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxubmFtZXNwYWNlLmluaXQgPSBmdW5jdGlvbiAodGhpc0luc3RhbmNlKSB7XG4gICAgbW9kdWxlLmluaXQodGhpc0luc3RhbmNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hbWVzcGFjZTtcbiIsImltcG9ydCBsb2FkSlMgZnJvbSAnLi4vc3RhdGljL2xvYWRKUyc7XG5cblxuY29uc3QgcmVxdWlyZSA9IGZ1bmN0aW9uIChrZXksIHBhdGgsIG9uY29tcGxldGUsIG9uZXJyb3IpIHtcbiAgICByZXF1aXJlLnJlcXVpcmVLZXkgPSBrZXk7XG4gICAgcmVxdWlyZS5yZXF1aXJlU3RhY2tba2V5XSA9IHtcbiAgICAgICAgc3JjOiBBcnJheS5pc0FycmF5KHBhdGgpID8gcGF0aCA6IFtwYXRoXSxcbiAgICAgICAgZWxlbWVudHM6IFtdLFxuICAgICAgICBvbmNvbXBsZXRlOiBvbmNvbXBsZXRlLFxuICAgICAgICBvbmVycm9yOiBvbmVycm9yXG4gICAgfTtcbn07XG5yZXF1aXJlLnJlcXVpcmVLZXkgPSBudWxsO1xucmVxdWlyZS5yZXF1aXJlU3RhY2sgPSBbXTtcbnJlcXVpcmUuc3RhcnQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5ID0ga2V5IHx8IHJlcXVpcmUucmVxdWlyZUtleTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgJiYgcmVxdWlyZS5yZXF1aXJlU3RhY2tba2V5XSlcbiAgICAgICAgICAgIGxvYWRfc2NyaXB0c19yZWN1cnNpdmUoMCwga2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlcXVpcmUgc291cmNlIG5vdCBmb3VuZCEgS2V5OiBcIiArIGtleSArIFwiIG5vdCBleGlzdCFcIik7XG4gICAgfVxufTtcbmNvbnN0IGxvYWRfc2NyaXB0c19yZWN1cnNpdmUgPSBmdW5jdGlvbiAoaSwga2V5KSB7XG4gICAgY29uc3QgcmVxdWlyZXMgPSByZXF1aXJlLnJlcXVpcmVTdGFja1trZXldO1xuXG4gICAgaWYgKHJlcXVpcmVzLnNyY1tpXSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVxdWlyZXMuZWxlbWVudHMpKVxuICAgICAgICAgICAgcmVxdWlyZXMuZWxlbWVudHMgPSBbXTtcblxuICAgICAgICByZXF1aXJlcy5lbGVtZW50cy5wdXNoKGxvYWRKUyhyZXF1aXJlcy5zcmNbaV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRfc2NyaXB0c19yZWN1cnNpdmUoKytpLCBrZXkpO1xuICAgICAgICB9LCByZXF1aXJlcy5vbmVycm9yKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGkgPT09IHJlcXVpcmVzLnNyYy5sZW5ndGgpIHtcbiAgICAgICAgcmVxdWlyZXMub25jb21wbGV0ZS5jYWxsKHNlbGYsIHJlcXVpcmVzLmVsZW1lbnRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvYWRfc2NyaXB0c19yZWN1cnNpdmUoKytpLCBrZXkpO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZTtcbiIsIlxuY29uc3Qgc3RhdGUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhID0gbnVsbCkge1xuICAgIHJldHVybiBkYXRhID8gc3RhdGUuc2V0KGtleSwgZGF0YSkgOiBzdGF0ZS5nZXQoa2V5KVxufTtcblxuc3RhdGUuc291cmNlID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgfSxcbiAgICBzZXQ6KG9iaiwgcHJvcCwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmFjdGlvbnNDYWxsYmFja1twcm9wXSkge1xuICAgICAgICAgICAgc3RhdGUuYWN0aW9uc0NhbGxiYWNrW3Byb3BdLmNhbGwoe30sIHN0YXRlLnNvdXJjZSwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSk7XG5cbnN0YXRlLnNvdXJjZURhdGEgPSB7fTtcblxuc3RhdGUuYWN0aW9uc0NhbGxiYWNrID0ge307XG5cbnN0YXRlLmFjdGlvbiA9IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgc3RhdGUuYWN0aW9uc0NhbGxiYWNrW2tleV0gPSBjYWxsYmFjaztcbn07XG5cbnN0YXRlLmluaXQgPSBmdW5jdGlvbiAodGhpc0luc3RhbmNlKSB7fTtcblxuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzdGF0ZS5zb3VyY2VEYXRhW2tleV0gfHwgc3RhdGUuc291cmNlW2tleV07XG59O1xuXG5zdGF0ZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuc291cmNlW2tleV0gPSBzdGF0ZS5zb3VyY2VEYXRhW2tleV0gPSBwYXlsb2FkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XG4iLCJcbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJy8nO1xuICAgICAgICB0aGlzLmRlYnVnID0gdHJ1ZTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBhcmd1bWVudHNbMF0gJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldID09PSB1bmRlZmluZWQgfHwgWydwYXRoJywgJ2RlYnVnJ10uaW5kZXhPZihrZXkpICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gYXJndW1lbnRzWzBdW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb3JlXG4gICAgICAgIHN0YXRlLmluaXQodGhpcyk7XG4gICAgICAgIGV4dGVuc2lvbi5pbml0KHRoaXMpO1xuICAgICAgICBuYW1lc3BhY2UuaW5pdCh0aGlzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkgKGtleSwgZGF0YSkge1xuICAgIE5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZVtrZXldID0gTmFtZXNwYWNlQXBwbGljYXRpb25ba2V5XSA9IGRhdGE7XG59XG5cbmltcG9ydCBzdGF0ZSBmcm9tICcuL2NvcmUvc3RhdGUnO1xuaW1wb3J0IG5hbWVzcGFjZSBmcm9tICcuL2NvcmUvbmFtZXNwYWNlJztcbmltcG9ydCByZXF1aXJlIGZyb20gJy4vY29yZS9yZXF1aXJlJztcbmltcG9ydCBleHRlbnNpb24gZnJvbSBcIi4vY29yZS9leHRlbnNpb25cIjtcblxuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnc3RhdGUnLCBzdGF0ZSk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCduYW1lc3BhY2UnLCBuYW1lc3BhY2UpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncmVxdWlyZScsIHJlcXVpcmUpO1xuLy8gY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnZXh0ZW5zaW9uJywgZXh0ZW5zaW9uKTtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZS5leHRlbnNpb24gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5cbmltcG9ydCBhdHRyIGZyb20gJy4vc3RhdGljL2F0dHInO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9zdGF0aWMvY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3RhdGljL2Nzcyc7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBlbXB0eSBmcm9tIFwiLi9zdGF0aWMvZW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tICcuL3N0YXRpYy9maW5kT2JqZWN0cyc7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tICcuL3N0YXRpYy9maW5kT2JqZWN0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnLi9zdGF0aWMvZm9ybWF0JztcbmltcG9ydCBpbmplY3QgZnJvbSAnLi9zdGF0aWMvaW5qZWN0JztcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gJy4vc3RhdGljL3N0cjJub2RlJztcbmltcG9ydCBub2RlMnN0ciBmcm9tICcuL3N0YXRpYy9ub2RlMnN0cic7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnLi9zdGF0aWMvcG9zaXRpb24nO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSAnLi9zdGF0aWMvcG9zaXRpb25Nb3VzZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9zdGF0aWMvcXVlcnknO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vc3RhdGljL3F1ZXJ5QWxsJztcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9zdGF0aWMvcm91dGVcIjtcbmltcG9ydCByb3V0ZVBhdGggZnJvbSAnLi9zdGF0aWMvcm91dGVQYXRoJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9zdGF0aWMvc2VhcmNoJztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gJy4vc3RhdGljL3VyaSc7XG5cbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2F0dHInLCBhdHRyKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2NyZWF0ZUVsZW1lbnQnLCBjcmVhdGVFbGVtZW50KTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2NzcycsIGNzcyk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdkb21Mb2FkZWQnLCBkb21Mb2FkZWQpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnZW1wdHknLCBlbXB0eSk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdmaW5kT2JqZWN0cycsIGZpbmRPYmplY3RzKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2ZpbmRPYmplY3QnLCBmaW5kT2JqZWN0KTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2Zvcm1hdCcsIGZvcm1hdCk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdpbmplY3QnLCBpbmplY3QpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnaXNOb2RlJywgaXNOb2RlKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2xvYWRDU1MnLCBsb2FkQ1NTKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2xvYWRKUycsIGxvYWRKUyk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdzdHIybm9kZScsIHN0cjJub2RlKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ25vZGUyc3RyJywgbm9kZTJzdHIpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncG9zaXRpb24nLCBwb3NpdGlvbik7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdwb3NpdGlvbk1vdXNlJywgcG9zaXRpb25Nb3VzZSk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdxdWVyeScsIHF1ZXJ5KTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ3F1ZXJ5QWxsJywgcXVlcnlBbGwpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncmVkaXJlY3QnLCByZWRpcmVjdCk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdyb3V0ZScsIHJvdXRlKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ3JvdXRlUGF0aCcsIHJvdXRlUGF0aCk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdzZWFyY2gnLCBzZWFyY2gpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgndHlwZU9mJywgdHlwZU9mKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ3R5cGVPZlN0cmljdCcsIHR5cGVPZlN0cmljdCk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCd1cmknLCB1cmkpO1xuXG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGVtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW1wdHk7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXSwgbGlzdCA9IHZhbHVlcyB8fCBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuICAgIHJldHVybiB0bXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBmb3JtYXRlZCkge1xuICAgIGxldCByZWc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0ZWQpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChmb3JtYXRlZCAmJiB0eXBlb2YgZm9ybWF0ZWQgPT09ICdvYmplY3QnKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcdyspfS9nKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZm9ybWF0ZWRbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gZm9ybWF0ZWRbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYXRpb24pXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdylcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bykge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcblxuY29uc3Qgbm9kZTJzdHIgPSAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlMnN0cjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcblxuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuXG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tQ2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tQ2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb21DYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbUNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihmcm9tQ2FsbGJhY2spLFxuICAgICAgICBmcm9tID0gZG9jIHx8IGRvY3VtZW50LFxuICAgICAgICBlbGVtZW50cyA9IFtdLFxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBjYWxsYmFjayA9IGZyb21DYWxsYmFjaztcbiAgICBlbHNlIGlmICh0eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbUNhbGxiYWNrKTtcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiICYmIGlzTm9kZShmcm9tQ2FsbGJhY2spKVxuICAgICAgICBmcm9tID0gZnJvbUNhbGxiYWNrO1xuXG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJcblxuY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAodG8pIHtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGU7IiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbmNvbnN0IHdpbiA9IGdldFdpbmRvdygpO1xuXG5jb25zdCByb3V0ZVBhdGggPSBmdW5jdGlvbiAoaGFzaCwgcXVlcnkpIHtcbiAgICBsZXQgcGF0aCA9IGxvYy5wYXRobmFtZTtcbiAgICBpZiAoaGFzaClcbiAgICAgICAgcGF0aCArPSBsb2MuaGFzaDtcbiAgICBpZiAocXVlcnkpXG4gICAgICAgIHBhdGggKz0gd2luLnNlYXJjaDtcbiAgICBpZiAodGhpcy51cmwgJiYgcGF0aC5pbmRleE9mKHRoaXMudXJsKSA9PT0gMCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIodGhpcy51cmwubGVuZ3RoKTtcbiAgICAgICAgaWYgKHBhdGguc2xpY2UoMCwgMSkgIT09ICcvJykgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVQYXRoO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgaSwgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcblxuICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxID8gZnJhZ21lbnQuZmlyc3RDaGlsZCA6IGZyYWdtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9