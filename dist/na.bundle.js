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
            ext.initialized = true;
            ext.context = ext.callback.call(ext.callback, thisInstance);
            if (!thisInstance[ext.name]) thisInstance[ext.name] = ext.context;
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

    if (key && _require.requireStack[key]) {
        var stack = _require.requireStack[key];
        var max = stack.src.length - 1;

        stack.src.forEach(function (src, i) {
            stack.elements.push((0, _loadJS2.default)(src, function () {
                if (max === i) {
                    return stack.oncomplete(stack.elements);
                }
            }, stack.onerror));
        });
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

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var source = createSource();
var sourceData = {};
var actionsCallback = {};

var state = function state(key) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return data ? state.set(key, data) : state.get(key);
};

state.init = function (thisInstance) {};

state.action = function (key, callback) {
    actionsCallback[key] = callback;
};

state.get = function (key) {
    return (0, _typeOf2.default)(key, 'string') ? sourceData[key] || source[key] : key ? null : sourceData;
};

state.set = function (key, payload) {
    state.push(_defineProperty({}, key, payload));
};

state.push = function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object.keys(payload).forEach(function (key) {
        source[key] = sourceData[key] = payload[key];
    });
};

function createSource() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    sourceData = payload;
    return new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {
            if (actionsCallback[prop]) {
                actionsCallback[prop].call({}, state.source, value);
            }
            return true;
        }
    });
}

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

var _createFragment = __webpack_require__(/*! ./static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _css = __webpack_require__(/*! ./static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ./static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _empty = __webpack_require__(/*! ./static/empty */ "./src/static/empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _each = __webpack_require__(/*! ./static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

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

var _on = __webpack_require__(/*! ./static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

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

// createNamespaceApplicationProperty('state', state);
// createNamespaceApplicationProperty('namespace', namespace);
// createNamespaceApplicationProperty('require', require);
// createNamespaceApplicationProperty('extension', extension);
NamespaceApplication.prototype.state = NamespaceApplication.state = _state2.default;
NamespaceApplication.prototype.namespace = NamespaceApplication.namespace = _namespace2.default;
NamespaceApplication.prototype.require = NamespaceApplication.require = _require3.default;
NamespaceApplication.prototype.extension = NamespaceApplication.extension = _extension2.default;

createNamespaceApplicationProperty('attr', _attr2.default);
// createNamespaceApplicationProperty('createElement', createElement);
NamespaceApplication.prototype.createElement = NamespaceApplication.createElement = _createElement2.default;
NamespaceApplication.prototype.create = NamespaceApplication.create = _createElement2.default;
NamespaceApplication.prototype.createFragment = NamespaceApplication.createFragment = _createFragment2.default;
NamespaceApplication.prototype.fragment = NamespaceApplication.fragment = _createFragment2.default;
createNamespaceApplicationProperty('css', _css2.default);
createNamespaceApplicationProperty('domLoaded', _domLoaded2.default);
createNamespaceApplicationProperty('empty', _empty2.default);
NamespaceApplication.prototype.each = NamespaceApplication.each = _each2.default;
// createNamespaceApplicationProperty('findObjects', findObjects);
NamespaceApplication.prototype.findObjects = NamespaceApplication.findObjects = _findObjects2.default;
// createNamespaceApplicationProperty('findObject', findObject);
NamespaceApplication.prototype.findObject = NamespaceApplication.findObject = _findObject2.default;
createNamespaceApplicationProperty('format', _format2.default);
createNamespaceApplicationProperty('inject', _inject2.default);
createNamespaceApplicationProperty('isNode', _isNode2.default);
createNamespaceApplicationProperty('loadCSS', _loadCSS2.default);
createNamespaceApplicationProperty('loadJS', _loadJS2.default);
createNamespaceApplicationProperty('str2node', _str2node2.default);
createNamespaceApplicationProperty('node2str', _node2str2.default);
// createNamespaceApplicationProperty('on', on);
NamespaceApplication.prototype.on = NamespaceApplication.on = _on2.default;
createNamespaceApplicationProperty('position', _position2.default);
createNamespaceApplicationProperty('positionMouse', _positionMouse2.default);
// createNamespaceApplicationProperty('query', query);
NamespaceApplication.prototype.query = NamespaceApplication.query = _query2.default;
// createNamespaceApplicationProperty('queryAll', queryAll);
NamespaceApplication.prototype.queryAll = NamespaceApplication.queryAll = _queryAll2.default;
createNamespaceApplicationProperty('redirect', _redirect2.default);
createNamespaceApplicationProperty('route', _route2.default);
createNamespaceApplicationProperty('routePath', _routePath2.default);
createNamespaceApplicationProperty('search', _search2.default);
// createNamespaceApplicationProperty('typeOf', typeOf);
NamespaceApplication.prototype.typeOf = NamespaceApplication.typeOf = _typeOf2.default;
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

/***/ "./src/static/createFragment.js":
/*!**************************************!*\
  !*** ./src/static/createFragment.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var createFragment = function createFragment() {
    return document.createDocumentFragment();
};

exports.default = createFragment;

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

/***/ "./src/static/each.js":
/*!****************************!*\
  !*** ./src/static/each.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var each = function each(list, callback, tmp) {
    var i = 0;
    if (list instanceof Array) for (i = 0; i < list.length; i++) {
        callback.call({}, list[i], i, tmp);
    } else for (i in list) {
        callback.call({}, list[i], i, tmp);
    }
};

each.parent = function (selector, filter) {
    var loops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            return element;
        }
        element = getParent(element);
    }
};

each.filter = function (selector, filter, callback) {
    var loops = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            callback(element);
            return element;
        }
        element = getParent(element);
    }
    return element;
};

exports.default = each;

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

/***/ "./src/static/on.js":
/*!**************************!*\
  !*** ./src/static/on.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on(selector, eventName, callback, bubble) {
    var i = void 0,
        elements = [];

    switch ((0, _typeOf2.default)(selector)) {
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

    for (i = 0; i < elements.length; i++) {
        if (elements[i] && elements[i].addEventListener) elements[i].addEventListener(eventName, callback, !!bubble);
    }
};

exports.default = on;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVxdWlyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yb3V0ZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZlN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VyaS5qcyJdLCJuYW1lcyI6WyJwcmVmaXgiLCJleHRlbnNpb24iLCJuYW1lIiwiY2FsbGJhY2siLCJvdmVycmlkZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIk5hbWVzcGFjZUFwcGxpY2F0aW9uIiwiaW5pdCIsInRoaXNJbnN0YW5jZSIsIm1vZHVsZSIsImV4dCIsImNyZWF0ZU9iamVjdCIsInN0YWNrIiwiaW5pdGlhbGl6ZWQiLCJjb250ZXh0IiwiY2FsbCIsInVuZGVmaW5lZCIsIm5hbWVzcGFjZSIsInJlcXVpcmUiLCJrZXkiLCJwYXRoIiwib25jb21wbGV0ZSIsIm9uZXJyb3IiLCJyZXF1aXJlS2V5IiwicmVxdWlyZVN0YWNrIiwic3JjIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlbWVudHMiLCJzdGFydCIsIm1heCIsImZvckVhY2giLCJpIiwicHVzaCIsInNvdXJjZSIsImNyZWF0ZVNvdXJjZSIsInNvdXJjZURhdGEiLCJhY3Rpb25zQ2FsbGJhY2siLCJzdGF0ZSIsImRhdGEiLCJzZXQiLCJnZXQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiT2JqZWN0Iiwia2V5cyIsIlByb3h5Iiwib2JqIiwicHJvcCIsInZhbHVlIiwiZGVidWciLCJpbmRleE9mIiwiY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImF0dHIiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlRnJhZ21lbnQiLCJmcmFnbWVudCIsImNzcyIsImRvbUxvYWRlZCIsImVtcHR5IiwiZWFjaCIsImZpbmRPYmplY3RzIiwiZmluZE9iamVjdCIsImZvcm1hdCIsImluamVjdCIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJzdHIybm9kZSIsIm5vZGUyc3RyIiwib24iLCJwb3NpdGlvbiIsInBvc2l0aW9uTW91c2UiLCJxdWVyeSIsInF1ZXJ5QWxsIiwicmVkaXJlY3QiLCJyb3V0ZSIsInJvdXRlUGF0aCIsInNlYXJjaCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsIndpbmRvdyIsImVsZW1lbnQiLCJ0eXBlX2VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ0YWciLCJhdHRycyIsImlubmVyIiwiZG9jdW1lbnQiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydCIsInR5cGUiLCJrIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInNlbGVjdG9yIiwicHJvcGVydGllcyIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicGFyc2UiLCJzdHIiLCJwMSIsInNwbGl0IiwicDIiLCJwbiIsIml4IiwibyIsInRyaW0iLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInN0eWxlIiwiZG9jIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0IiwidG1wIiwicGFyZW50IiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbGVtIiwicGFyZW50Tm9kZSIsImhhc093blByb3BlcnR5IiwicmVwbGFjZSIsImlzTmFOIiwidmFsdWVzIiwiYXR0clZhbHVlIiwic3RyaW5nIiwiZm9ybWF0ZWQiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsIm51bWJlciIsImdldERvY3VtZW50IiwiRXJyb3IiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiZ2V0V2luZG93IiwiYXBwZW5kIiwidG8iLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwib25sb2FkIiwibGluayIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJocmVmIiwic3Vic3RyIiwicmVsIiwiaGVhZCIsInNjcmlwdCIsImNvbnRhaW5lciIsImNsb25lTm9kZSIsImV2ZW50TmFtZSIsImJ1YmJsZSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicGFyc2VJbnQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiZXZlbnQiLCJNb3VzZUV2ZW50IiwiY29uc29sZSIsImVycm9yIiwiY2xpZW50WCIsImNsaWVudFkiLCJmcm9tQ2FsbGJhY2siLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYyIsIndpbiIsImhhc2giLCJwYXRobmFtZSIsInVybCIsInF1ZXJ5RWxlbWVudHMiLCJoYXNBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsInNpbXBsZVR5cGVzIiwidCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFHQSxJQUFNQSxTQUFTLGFBQWY7O0FBRUEsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQVVDLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCQyxRQUExQixFQUFvQztBQUNsRCxRQUFJQyxVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLGVBQU8sZ0JBQWdCQyxvQkFBaEIsSUFBd0MsS0FBS1AsU0FBU0UsSUFBZCxDQUF4QyxHQUNELEtBQUtGLFNBQVNFLElBQWQsQ0FEQyxHQUVELElBRk47QUFHSCxLQUpELE1B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bEQsR0FBc0RBLENBQTdEO0FBQ0gsQ0FQRDs7a0JBU2V2SSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBVWpDLEtBQVYsRUFBaUJtRCxJQUFqQixFQUF1QjtBQUN4QyxRQUFNb0gsSUFBSTVLLE9BQU9TLFNBQVAsQ0FBaUI0RyxRQUFqQixDQUEwQmxKLElBQTFCLENBQStCa0MsS0FBL0IsRUFBc0NpSCxLQUF0QyxDQUE0QyxDQUE1QyxFQUErQyxDQUFDLENBQWhELENBQVY7QUFDQSxXQUFPLE9BQU85RCxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxTQUFTb0gsQ0FBcEMsR0FBd0NBLENBQS9DO0FBQ0gsQ0FIRDs7a0JBS2V0SSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZjs7Ozs7O0FBR0EsSUFBTUMsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTTJILE1BQU0sNEJBQVo7QUFDQTNILFdBQU1BLFFBQU8ySCxJQUFJRyxRQUFqQjtBQUNBOUgsV0FBTUEsS0FBSWdELE9BQUosQ0FBWSxPQUFaLEVBQXFCLEdBQXJCLENBQU47QUFDQSxXQUFPaEQsS0FBSTlFLE1BQUosR0FBYSxDQUFiLElBQWtCOEUsS0FBSStFLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixNQUFvQixHQUF0QyxHQUE0QyxNQUFNL0UsSUFBbEQsR0FBd0RBLElBQS9EO0FBQ0gsQ0FMRDs7a0JBT2VBLEciLCJmaWxlIjoibmEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgbW9kdWxlIGZyb20gJy4vbW9kdWxlJztcblxuXG5jb25zdCBwcmVmaXggPSAnZXh0ZW5zaW9ucy4nO1xuXG5jb25zdCBleHRlbnNpb24gPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIG92ZXJyaWRlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbiAmJiB0aGlzW3ByZWZpeCArIG5hbWVdXG4gICAgICAgICAgICA/IHRoaXNbcHJlZml4ICsgbmFtZV1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUocHJlZml4ICsgbmFtZSwgY2FsbGJhY2ssIG92ZXJyaWRlKTtcbiAgICB9XG59O1xuXG5leHRlbnNpb24uaW5pdCA9IGZ1bmN0aW9uICh0aGlzSW5zdGFuY2UpIHtcbiAgICBtb2R1bGUuaW5pdCh0aGlzSW5zdGFuY2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9uOyIsImltcG9ydCBleHRlbnNpb24gZnJvbSAnLi9leHRlbnNpb24nO1xuXG5cbmNvbnN0IG1vZHVsZSA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgb3ZlcnJpZGUpIHtcbiAgICBjb25zdCBleHQgPSBjcmVhdGVPYmplY3QobmFtZSwgY2FsbGJhY2ssIG92ZXJyaWRlKTtcbiAgICBpZiAodHlwZW9mIGV4dC5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2R1bGUuc3RhY2tbbmFtZV0gPSBleHQ7XG4gICAgfVxufTtcblxubW9kdWxlLnN0YWNrID0ge307XG5cbm1vZHVsZS5pbml0ID0gZnVuY3Rpb24gKHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBuYW1lLCBleHQ7XG4gICAgZm9yIChuYW1lIGluIG1vZHVsZS5zdGFjaykge1xuICAgICAgICBleHQgPSBtb2R1bGUuc3RhY2tbbmFtZV07XG5cbiAgICAgICAgaWYgKHRoaXNJbnN0YW5jZSAmJiAhZXh0LmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBleHQuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXh0LmNvbnRleHQgPSBleHQuY2FsbGJhY2suY2FsbChleHQuY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXNJbnN0YW5jZVtleHQubmFtZV0pXG4gICAgICAgICAgICAgICAgdGhpc0luc3RhbmNlW2V4dC5uYW1lXSA9IGV4dC5jb250ZXh0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlT2JqZWN0ID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgb3ZlcnJpZGU6ICEhb3ZlcnJpZGUsXG4gICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICBjb250ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7XG4iLCJpbXBvcnQgbW9kdWxlIGZyb20gJy4vbW9kdWxlJztcbmltcG9ydCBOYW1lc3BhY2VBcHBsaWNhdGlvbiBmcm9tICcuLi9pbmRleCc7XG5cblxuY29uc3QgbmFtZXNwYWNlID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24gJiYgdGhpc1tuYW1lXVxuICAgICAgICAgICAgPyB0aGlzW25hbWVdXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlKG5hbWUsIGNhbGxiYWNrLCBvdmVycmlkZSk7XG5cbiAgICAgICAgY29uc3QgZXh0ID0gbW9kdWxlLnN0YWNrW25hbWVdO1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uICYmICFleHQuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGV4dC5jb250ZXh0ID0gZXh0LmNhbGxiYWNrLmNhbGwoZXh0LmNhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXNbZXh0Lm5hbWVdID0gZXh0LmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5uYW1lc3BhY2UuaW5pdCA9IGZ1bmN0aW9uICh0aGlzSW5zdGFuY2UpIHtcbiAgICBtb2R1bGUuaW5pdCh0aGlzSW5zdGFuY2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmFtZXNwYWNlO1xuIiwiaW1wb3J0IGxvYWRKUyBmcm9tICcuLi9zdGF0aWMvbG9hZEpTJztcblxuXG5jb25zdCByZXF1aXJlID0gZnVuY3Rpb24gKGtleSwgcGF0aCwgb25jb21wbGV0ZSwgb25lcnJvcikge1xuICAgIHJlcXVpcmUucmVxdWlyZUtleSA9IGtleTtcbiAgICByZXF1aXJlLnJlcXVpcmVTdGFja1trZXldID0ge1xuICAgICAgICBzcmM6IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogW3BhdGhdLFxuICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgIG9uY29tcGxldGU6IG9uY29tcGxldGUsXG4gICAgICAgIG9uZXJyb3I6IG9uZXJyb3JcbiAgICB9O1xufTtcbnJlcXVpcmUucmVxdWlyZUtleSA9IG51bGw7XG5yZXF1aXJlLnJlcXVpcmVTdGFjayA9IFtdO1xucmVxdWlyZS5zdGFydCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgPSBrZXkgfHwgcmVxdWlyZS5yZXF1aXJlS2V5O1xuXG4gICAgaWYgKGtleSAmJiByZXF1aXJlLnJlcXVpcmVTdGFja1trZXldKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gcmVxdWlyZS5yZXF1aXJlU3RhY2tba2V5XTtcbiAgICAgICAgY29uc3QgbWF4ID0gc3RhY2suc3JjLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgc3RhY2suc3JjLmZvckVhY2goKHNyYywgaSkgPT4ge1xuICAgICAgICAgICAgc3RhY2suZWxlbWVudHMucHVzaChsb2FkSlMoc3JjLCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFjay5vbmNvbXBsZXRlKHN0YWNrLmVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBzdGFjay5vbmVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4uL3N0YXRpYy90eXBlT2YnO1xuXG5sZXQgc291cmNlID0gY3JlYXRlU291cmNlKCk7XG5sZXQgc291cmNlRGF0YSA9IHt9O1xubGV0IGFjdGlvbnNDYWxsYmFjayA9IHt9O1xuXG5jb25zdCBzdGF0ZSA9IGZ1bmN0aW9uIChrZXksIGRhdGEgPSBudWxsKSB7XG4gICAgcmV0dXJuIGRhdGEgPyBzdGF0ZS5zZXQoa2V5LCBkYXRhKSA6IHN0YXRlLmdldChrZXkpXG59O1xuXG5zdGF0ZS5pbml0ID0gZnVuY3Rpb24gKHRoaXNJbnN0YW5jZSkge1xuXG59O1xuXG5zdGF0ZS5hY3Rpb24gPSBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgIGFjdGlvbnNDYWxsYmFja1trZXldID0gY2FsbGJhY2s7XG59O1xuXG5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHR5cGVPZihrZXksICdzdHJpbmcnKVxuICAgICAgICA/IHNvdXJjZURhdGFba2V5XSB8fCBzb3VyY2Vba2V5XVxuICAgICAgICA6IGtleVxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IHNvdXJjZURhdGEgO1xufTtcblxuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnB1c2goe1trZXldOiBwYXlsb2FkfSk7XG59O1xuXG5zdGF0ZS5wdXNoID0gZnVuY3Rpb24gKHBheWxvYWQgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzb3VyY2Vba2V5XSA9IHNvdXJjZURhdGFba2V5XSA9IHBheWxvYWRba2V5XTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZSAocGF5bG9hZCA9IHt9KSB7XG4gICAgc291cmNlRGF0YSA9IHBheWxvYWQ7XG4gICAgcmV0dXJuIG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OihvYmosIHByb3AsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uc0NhbGxiYWNrW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc0NhbGxiYWNrW3Byb3BdLmNhbGwoe30sIHN0YXRlLnNvdXJjZSwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcbiIsIlxuY2xhc3MgTmFtZXNwYWNlQXBwbGljYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnBhdGggPSAnLyc7XG4gICAgICAgIHRoaXMuZGVidWcgPSB0cnVlO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGFyZ3VtZW50c1swXSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBbJ3BhdGgnLCAnZGVidWcnXS5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBhcmd1bWVudHNbMF1ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcmVcbiAgICAgICAgc3RhdGUuaW5pdCh0aGlzKTtcbiAgICAgICAgZXh0ZW5zaW9uLmluaXQodGhpcyk7XG4gICAgICAgIG5hbWVzcGFjZS5pbml0KHRoaXMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSAoa2V5LCBkYXRhKSB7XG4gICAgTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlW2tleV0gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbltrZXldID0gZGF0YTtcbn1cblxuaW1wb3J0IHN0YXRlIGZyb20gJy4vY29yZS9zdGF0ZSc7XG5pbXBvcnQgbmFtZXNwYWNlIGZyb20gJy4vY29yZS9uYW1lc3BhY2UnO1xuaW1wb3J0IHJlcXVpcmUgZnJvbSAnLi9jb3JlL3JlcXVpcmUnO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tIFwiLi9jb3JlL2V4dGVuc2lvblwiO1xuXG4vLyBjcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdzdGF0ZScsIHN0YXRlKTtcbi8vIGNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ25hbWVzcGFjZScsIG5hbWVzcGFjZSk7XG4vLyBjcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdyZXF1aXJlJywgcmVxdWlyZSk7XG4vLyBjcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdleHRlbnNpb24nLCBleHRlbnNpb24pO1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLnN0YXRlID0gTmFtZXNwYWNlQXBwbGljYXRpb24uc3RhdGUgPSBzdGF0ZTtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZS5uYW1lc3BhY2UgPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5wcm90b3R5cGUucmVxdWlyZSA9IE5hbWVzcGFjZUFwcGxpY2F0aW9uLnJlcXVpcmUgPSByZXF1aXJlO1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLmV4dGVuc2lvbiA9IE5hbWVzcGFjZUFwcGxpY2F0aW9uLmV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcblxuaW1wb3J0IGF0dHIgZnJvbSAnLi9zdGF0aWMvYXR0cic7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL3N0YXRpYy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tICcuL3N0YXRpYy9jcmVhdGVGcmFnbWVudCc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3RhdGljL2Nzcyc7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBlbXB0eSBmcm9tIFwiLi9zdGF0aWMvZW1wdHlcIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9zdGF0aWMvZmluZE9iamVjdHMnO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSAnLi9zdGF0aWMvZmluZE9iamVjdCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJy4vc3RhdGljL2Zvcm1hdCc7XG5pbXBvcnQgaW5qZWN0IGZyb20gJy4vc3RhdGljL2luamVjdCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tICcuL3N0YXRpYy9zdHIybm9kZSc7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSAnLi9zdGF0aWMvbm9kZTJzdHInO1xuaW1wb3J0IG9uIGZyb20gJy4vc3RhdGljL29uJztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuL3N0YXRpYy9wb3NpdGlvbic7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tICcuL3N0YXRpYy9wb3NpdGlvbk1vdXNlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3N0YXRpYy9xdWVyeSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9zdGF0aWMvcXVlcnlBbGwnO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHJvdXRlIGZyb20gXCIuL3N0YXRpYy9yb3V0ZVwiO1xuaW1wb3J0IHJvdXRlUGF0aCBmcm9tICcuL3N0YXRpYy9yb3V0ZVBhdGgnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3N0YXRpYy9zZWFyY2gnO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSAnLi9zdGF0aWMvdXJpJztcblxuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnYXR0cicsIGF0dHIpO1xuLy8gY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnY3JlYXRlRWxlbWVudCcsIGNyZWF0ZUVsZW1lbnQpO1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZS5jcmVhdGUgPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5jcmVhdGUgPSBjcmVhdGVFbGVtZW50O1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLmNyZWF0ZUZyYWdtZW50ID0gTmFtZXNwYWNlQXBwbGljYXRpb24uY3JlYXRlRnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudDtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZS5mcmFnbWVudCA9IE5hbWVzcGFjZUFwcGxpY2F0aW9uLmZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQ7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdjc3MnLCBjc3MpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnZG9tTG9hZGVkJywgZG9tTG9hZGVkKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2VtcHR5JywgZW1wdHkpO1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLmVhY2ggPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5lYWNoID0gZWFjaDtcbi8vIGNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2ZpbmRPYmplY3RzJywgZmluZE9iamVjdHMpO1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLmZpbmRPYmplY3RzID0gTmFtZXNwYWNlQXBwbGljYXRpb24uZmluZE9iamVjdHMgPSBmaW5kT2JqZWN0cztcbi8vIGNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2ZpbmRPYmplY3QnLCBmaW5kT2JqZWN0KTtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZS5maW5kT2JqZWN0ID0gTmFtZXNwYWNlQXBwbGljYXRpb24uZmluZE9iamVjdCA9IGZpbmRPYmplY3Q7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdmb3JtYXQnLCBmb3JtYXQpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnaW5qZWN0JywgaW5qZWN0KTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ2lzTm9kZScsIGlzTm9kZSk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdsb2FkQ1NTJywgbG9hZENTUyk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdsb2FkSlMnLCBsb2FkSlMpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgnc3RyMm5vZGUnLCBzdHIybm9kZSk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdub2RlMnN0cicsIG5vZGUyc3RyKTtcbi8vIGNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ29uJywgb24pO1xuTmFtZXNwYWNlQXBwbGljYXRpb24ucHJvdG90eXBlLm9uID0gTmFtZXNwYWNlQXBwbGljYXRpb24ub24gPSBvbjtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ3Bvc2l0aW9uJywgcG9zaXRpb24pO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncG9zaXRpb25Nb3VzZScsIHBvc2l0aW9uTW91c2UpO1xuLy8gY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncXVlcnknLCBxdWVyeSk7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5wcm90b3R5cGUucXVlcnkgPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5xdWVyeSA9IHF1ZXJ5O1xuLy8gY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncXVlcnlBbGwnLCBxdWVyeUFsbCk7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5wcm90b3R5cGUucXVlcnlBbGwgPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5xdWVyeUFsbCA9IHF1ZXJ5QWxsO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgncmVkaXJlY3QnLCByZWRpcmVjdCk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdyb3V0ZScsIHJvdXRlKTtcbmNyZWF0ZU5hbWVzcGFjZUFwcGxpY2F0aW9uUHJvcGVydHkoJ3JvdXRlUGF0aCcsIHJvdXRlUGF0aCk7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCdzZWFyY2gnLCBzZWFyY2gpO1xuLy8gY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgndHlwZU9mJywgdHlwZU9mKTtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLnByb3RvdHlwZS50eXBlT2YgPSBOYW1lc3BhY2VBcHBsaWNhdGlvbi50eXBlT2YgPSB0eXBlT2Y7XG5jcmVhdGVOYW1lc3BhY2VBcHBsaWNhdGlvblByb3BlcnR5KCd0eXBlT2ZTdHJpY3QnLCB0eXBlT2ZTdHJpY3QpO1xuY3JlYXRlTmFtZXNwYWNlQXBwbGljYXRpb25Qcm9wZXJ0eSgndXJpJywgdXJpKTtcblxud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uID0gTmFtZXNwYWNlQXBwbGljYXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJcblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGxldCBpID0gMDtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykgY2FsbGJhY2suY2FsbCh7fSwgbGlzdFtpXSwgaSwgdG1wKTtcbiAgICBlbHNlXG4gICAgICAgIGZvciAoaSBpbiBsaXN0KSBjYWxsYmFjay5jYWxsKHt9LCBsaXN0W2ldLCBpLCB0bXApO1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGVtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW1wdHk7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXSwgbGlzdCA9IHZhbHVlcyB8fCBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuICAgIHJldHVybiB0bXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBmb3JtYXRlZCkge1xuICAgIGxldCByZWc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0ZWQpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChmb3JtYXRlZCAmJiB0eXBlb2YgZm9ybWF0ZWQgPT09ICdvYmplY3QnKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcdyspfS9nKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZm9ybWF0ZWRbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gZm9ybWF0ZWRbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYXRpb24pXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdylcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bykge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcblxuY29uc3Qgbm9kZTJzdHIgPSAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlMnN0cjtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcblxuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuXG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tQ2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tQ2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb21DYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbUNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihmcm9tQ2FsbGJhY2spLFxuICAgICAgICBmcm9tID0gZG9jIHx8IGRvY3VtZW50LFxuICAgICAgICBlbGVtZW50cyA9IFtdLFxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBjYWxsYmFjayA9IGZyb21DYWxsYmFjaztcbiAgICBlbHNlIGlmICh0eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbUNhbGxiYWNrKTtcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiICYmIGlzTm9kZShmcm9tQ2FsbGJhY2spKVxuICAgICAgICBmcm9tID0gZnJvbUNhbGxiYWNrO1xuXG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJcblxuY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAodG8pIHtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGU7IiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbmNvbnN0IHdpbiA9IGdldFdpbmRvdygpO1xuXG5jb25zdCByb3V0ZVBhdGggPSBmdW5jdGlvbiAoaGFzaCwgcXVlcnkpIHtcbiAgICBsZXQgcGF0aCA9IGxvYy5wYXRobmFtZTtcbiAgICBpZiAoaGFzaClcbiAgICAgICAgcGF0aCArPSBsb2MuaGFzaDtcbiAgICBpZiAocXVlcnkpXG4gICAgICAgIHBhdGggKz0gd2luLnNlYXJjaDtcbiAgICBpZiAodGhpcy51cmwgJiYgcGF0aC5pbmRleE9mKHRoaXMudXJsKSA9PT0gMCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIodGhpcy51cmwubGVuZ3RoKTtcbiAgICAgICAgaWYgKHBhdGguc2xpY2UoMCwgMSkgIT09ICcvJykgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVQYXRoO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgaSwgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcblxuICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxID8gZnJhZ21lbnQuZmlyc3RDaGlsZCA6IGZyYWdtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9