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

/***/ "./src/NamespaceApplication.js":
/*!*************************************!*\
  !*** ./src/NamespaceApplication.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _component = __webpack_require__(/*! ./core/component */ "./src/core/component.js");

var _component2 = _interopRequireDefault(_component);

var _extension = __webpack_require__(/*! ./core/extension */ "./src/core/extension.js");

var _extension2 = _interopRequireDefault(_extension);

var _dependency = __webpack_require__(/*! ./core/dependency */ "./src/core/dependency.js");

var _dependency2 = _interopRequireDefault(_dependency);

var _route = __webpack_require__(/*! ./core/route */ "./src/core/route.js");

var _route2 = _interopRequireDefault(_route);

var _state = __webpack_require__(/*! ./core/state */ "./src/core/state.js");

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NamespaceApplication = function NamespaceApplication(config) {
    var _this = this;

    _classCallCheck(this, NamespaceApplication);

    if (NamespaceApplication.instance) return NamespaceApplication.instance;

    this.id = undefined;
    this.url = undefined;
    this.debug = undefined;

    Object.keys(config).forEach(function (key) {
        if (_this[key] === undefined) _this[key] = config[key];
    });

    this.component = _component2.default;
    this.component.register(this);

    this.extension = _extension2.default;
    this.extension.register(this);

    this.dependency = _dependency2.default;
    this.route = _route2.default;
    this.state = _state2.default;

    NamespaceApplication.instance = this;
};

NamespaceApplication.component = _component2.default;
NamespaceApplication.extension = _extension2.default;

exports.default = NamespaceApplication;

/***/ }),

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _inject = __webpack_require__(/*! ./static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ./static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ./static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ./static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _search = __webpack_require__(/*! ./static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _defined = __webpack_require__(/*! ./static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _each = __webpack_require__(/*! ./static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

var _empty = __webpack_require__(/*! ./static/empty */ "./src/static/empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _findObject = __webpack_require__(/*! ./static/findObject */ "./src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _findObjects = __webpack_require__(/*! ./static/findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _format = __webpack_require__(/*! ./static/format */ "./src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _isNode = __webpack_require__(/*! ./static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ./static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ./static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _merge = __webpack_require__(/*! ./static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _on = __webpack_require__(/*! ./static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _position = __webpack_require__(/*! ./static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ./static/positionMouse */ "./src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _redirect = __webpack_require__(/*! ./static/redirect */ "./src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _typeOf = __webpack_require__(/*! ./static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ./static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ./static/uri */ "./src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = {
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
    domLoaded: _domLoaded2.default,
    inject: _inject2.default,
    str2node: _str2node2.default,
    node2str: _node2str2.default,
    query: _query2.default,
    search: _search2.default,
    defined: _defined2.default,
    each: _each2.default,
    empty: _empty2.default,
    findObject: _findObject2.default,
    findObjects: _findObjects2.default,
    format: _format2.default,
    isNode: _isNode2.default,
    loadCSS: _loadCSS2.default,
    loadJS: _loadJS2.default,
    merge: _merge2.default,
    on: _on2.default,
    position: _position2.default,
    positionMouse: _positionMouse2.default,
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default
};

exports.default = Util;

/***/ }),

/***/ "./src/cookie/index.js":
/*!*****************************!*\
  !*** ./src/cookie/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
 * LocalStorage wrapper
 *
 * @param name
 * @param value
 * @param option
 * @returns {{set: (Storage.set|*), get: (Storage.get|*), key: (Storage.key|*), clear: (Storage.clear|*), remove: (Storage.remove|*), length: (Storage.length|*)}}
 * @constructor
 */
var Cookie = function Cookie(name, value) {
    switch (arguments.length) {
        case 0:
            return {
                set: set,
                get: get,
                clear: clear,
                remove: remove,
                length: length
            };
        case 1:
            return get(name);
        case 2:
            return set(name, value);
    }
};

/**
 * Set Cookie key, value
 *  expires - ms, Date, -1, 0
 * @param name
 * @param value
 * @param {{}} options   {expires: 0, path: '/', domain: 'site.com', secure: false}
 * @param typeJson bool
 */
var set = function set(name, value, options) {
    var typeJson = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    options = options || {};

    if (Cookie.typeJson) {}
    if (typeJson) try {
        value = JSON.stringify(value);
    } catch (error) {}

    var data = name + "=" + encodeURIComponent(value);

    if (options.expires) {
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        } else {
            var date = new Date();
            options.expires = date.setTime(date.getTime() + parseInt(options.expires) * 1000);
        }
    }

    data += encode(options);
    document.cookie = data;
};

/**
 * Get Cookie value by key
 * @param name
 * @param typeJson bool
 * @returns {*}
 */
var get = function get(name) {
    var typeJson = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    var data = matches ? decodeURIComponent(matches[1]) : undefined;

    if (Cookie.dataJson) {}
    if (typeJson && data) try {
        data = JSON.parse(data);
    } catch (error) {}

    return data;
};

/**
 * Remove Cookie by key
 * @param name
 * @param option
 */
var remove = function remove(name, option) {
    option = option || { expires: -1 };
    set(name, "", option);
};

var clear = function clear() {
    document.cookie = '';
};

/**
 * Convert object to uri get string
 * @param {object} data     example: {expires: 0, path: '/', domain: 'my-site.com', secure: false}
 * @returns {string}        example: "expires=0;path=/;domain=site.com;secure=false";
 */
var encode = function encode(data) {
    var str = '';
    Object.keys(data).forEach(function (key) {
        if (data[key] !== true) str += (str ? ';' : '') + key + '=' + encodeURIComponent(data[key]);
    });
    return str;
};

var decode = function decode(name) {
    if (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    } else {
        var data = {},
            cookies = document.cookie.split('; ');

        cookies.forEach(function (value) {
            if (value.length) {
                var parts = value.trim().split('=');
                data[parts[0].trim()] = decodeURIComponent(parts[1]).trim();
            }
        });
        return data;
    }
};

Cookie.set = set;
Cookie.get = get;
Cookie.remove = remove;
Cookie.clear = clear;
Cookie.encode = encode;
Cookie.decode = decode;
Cookie.dataJson = true;

// Cookie('a', 'AAA');
// Cookie('b', 'BBB');
// Cookie('c', 'CCC');
// Cookie('n', 120);
// Cookie.decode();

exports.set = set;
exports.get = get;
exports.clear = clear;
exports.remove = remove;
exports.encode = encode;
exports.decode = decode;
exports.length = length;
exports.default = Cookie;

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(config) {
    if (typeof config === 'string') {
        return component.list[config];
    } else {
        var comp = component.create(config);
        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
        }
        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }
        component.list[comp.id] = comp;
    }
};

component.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(component.list).forEach(function (key) {
            var comp = component.list[key];
            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
            }
        });
    }
};

component.list = {};

component.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        template: null,
        init: function init() {},
        complete: function complete() {},
        override: false,
        initialized: false,
        completed: false,
        context: false
    }, config);
};

exports.default = component;

/***/ }),

/***/ "./src/core/dependency.js":
/*!********************************!*\
  !*** ./src/core/dependency.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _loadCSS = __webpack_require__(/*! ../static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dependency = function dependency(config) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var sources = (0, _merge2.default)({
        css: [],
        js: [],
        elements: [],
        complete: function complete() {},
        error: function error() {}
    }, config);

    if (force) dependency.load(sources);

    return sources;
};

dependency.load = function (sources) {
    var max = (sources.css ? sources.css.length : 0) + (sources.js ? sources.js.length : 0);
    var srcs = (0, _merge2.default)({ css: sources.css }, { js: sources.js });

    var i = 0;
    Object.keys(srcs).forEach(function (key) {
        var load = key === 'css' ? _loadCSS2.default : _loadJS2.default;
        srcs[key].forEach(function (src) {
            sources.elements.push(load(src, function () {
                i++;
                if (max === i) return sources.complete(sources);
            }, sources.error));
        });
    });
};

dependency.remove = function (sources) {
    var elements = sources && sources.elements ? sources.elements : [];
    if (elements.length) {
        sources.elements.forEach(function (element) {
            element.parentNode.removeChild(element);
        });
    }
};

exports.default = dependency;

/***/ }),

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

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extension = function extension(config) {
    if (typeof config === 'string') {
        return extension.list[config];
    } else {
        var comp = extension.create(config);
        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
        }
        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }
        extension.list[comp.id] = comp;
    }
};

extension.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(extension.list).forEach(function (key) {
            var comp = extension.list[key];
            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
            }
        });
    }
};

extension.list = {};

extension.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        template: null,
        init: function init() {},
        complete: function complete() {},
        override: false,
        initialized: false,
        completed: false,
        context: false
    }, config);
};

exports.default = extension;

/***/ }),

/***/ "./src/core/route.js":
/*!***************************!*\
  !*** ./src/core/route.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var route = function route(url, component) {
    if (location.pathname === url) {
        this[component]();
    }
};

exports.default = route;

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

var state = function state(key, data) {
    return data === undefined ? state.get(key) : state.set(key, data);
};

state.callback = {};
state.source = createSource();
state.sourcedata = {};
state.action = function (key, callback) {
    state.callback[key] = callback;
};

state.get = function (key) {
    return (0, _typeOf2.default)(key, 'string') ? state.sourcedata[key] || state.source[key] : key === undefined ? null : state.sourcedata;
};

state.set = function (key, payload) {
    state.setCase(_defineProperty({}, key, payload));
};

state.setCase = function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object.keys(payload).forEach(function (key) {
        state.source[key] = state.sourcedata[key] = payload[key];
    });
};

function createSource() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    state.sourcedata = payload;
    return new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {
            if (state.callback[prop]) {
                state.callback[prop].call({}, state.source, value);
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

var _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _NamespaceApplication = __webpack_require__(/*! ./NamespaceApplication */ "./src/NamespaceApplication.js");

var _NamespaceApplication2 = _interopRequireDefault(_NamespaceApplication);

var _cookie = __webpack_require__(/*! ./cookie */ "./src/cookie/index.js");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.NamespaceApplication = _NamespaceApplication2.default;
window.Util = _Util2.default;
window.Cookie = _cookie2.default;

exports.default = _NamespaceApplication2.default;

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

/***/ "./src/static/defined.js":
/*!*******************************!*\
  !*** ./src/static/defined.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var defined = function defined(value) {
    return value !== undefined;
};

exports.default = defined;

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

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _defined = __webpack_require__(/*! ./defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _node2str = __webpack_require__(/*! ./node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formatting of string, or maybe template builder
 *
 * Examples:
 * .format("Hello {0}, your code is {1}!", ['Jade', 'Prefect']);
 * .format("Hello {name}, your code is {mean}!", {name:'Jade', mean: 'Prefect'});
 *
 * @param string    String
 * @param list  Array|Object
 * @returns string
 */
var format = function format(string, list) {
    var reg = void 0;
    if (Array.isArray(list)) reg = new RegExp(/{(\d+)}/g);else if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === 'object') reg = new RegExp(/{(\w+)}/g);

    return string.replace(reg, function (match, number) {
        if ((0, _defined2.default)(list[number]) && (0, _isNode2.default)(list[number])) list[number] = (0, _node2str2.default)(list[number]);

        return _typeof(list[number]) !== undefined ? list[number] : match;
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

/***/ "./src/static/merge.js":
/*!*****************************!*\
  !*** ./src/static/merge.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var merge = function merge(object1, object2) {
    for (var key in object2) {
        try {
            if (object2[key].constructor === Object) {
                object1[key] = merge(object1[key], object2[key]);
            } else {
                object1[key] = object2[key];
            }
        } catch (e) {
            object1[key] = object2[key];
        }
    }
    return object1;
};

exports.default = merge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZlN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VyaS5qcyJdLCJuYW1lcyI6WyJOYW1lc3BhY2VBcHBsaWNhdGlvbiIsImNvbmZpZyIsImluc3RhbmNlIiwiaWQiLCJ1bmRlZmluZWQiLCJ1cmwiLCJkZWJ1ZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiY29tcG9uZW50IiwicmVnaXN0ZXIiLCJleHRlbnNpb24iLCJkZXBlbmRlbmN5Iiwicm91dGUiLCJzdGF0ZSIsIlV0aWwiLCJhdHRyIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUZyYWdtZW50IiwiY3NzIiwiZG9tTG9hZGVkIiwiaW5qZWN0Iiwic3RyMm5vZGUiLCJub2RlMnN0ciIsInF1ZXJ5Iiwic2VhcmNoIiwiZGVmaW5lZCIsImVhY2giLCJlbXB0eSIsImZpbmRPYmplY3QiLCJmaW5kT2JqZWN0cyIsImZvcm1hdCIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJtZXJnZSIsIm9uIiwicG9zaXRpb24iLCJwb3NpdGlvbk1vdXNlIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJDb29raWUiLCJuYW1lIiwidmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZXQiLCJnZXQiLCJjbGVhciIsInJlbW92ZSIsIm9wdGlvbnMiLCJ0eXBlSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleHBpcmVzIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJlbmNvZGUiLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoZXMiLCJtYXRjaCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkYXRhSnNvbiIsInBhcnNlIiwib3B0aW9uIiwic3RyIiwiZGVjb2RlIiwiY29va2llcyIsInNwbGl0IiwicGFydHMiLCJ0cmltIiwibGlzdCIsImNvbXAiLCJjcmVhdGUiLCJpbml0IiwiaW5pdGlhbGl6ZWQiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImNhbGwiLCJ0ZW1wbGF0ZSIsIm92ZXJyaWRlIiwiY29udGV4dCIsImZvcmNlIiwic291cmNlcyIsImpzIiwiZWxlbWVudHMiLCJsb2FkIiwibWF4Iiwic3JjcyIsImkiLCJzcmMiLCJwdXNoIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjYWxsYmFjayIsInNvdXJjZSIsImNyZWF0ZVNvdXJjZSIsInNvdXJjZWRhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0Q2FzZSIsIlByb3h5Iiwib2JqIiwicHJvcCIsIndpbmRvdyIsInR5cGVfZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInRhZyIsImF0dHJzIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydCIsInR5cGUiLCJrIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInNlbGVjdG9yIiwicHJvcGVydGllcyIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwic3R5bGUiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRtcCIsIkFycmF5IiwicGFyZW50IiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbGVtIiwiaGFzT3duUHJvcGVydHkiLCJpc05hTiIsInZhbHVlcyIsImF0dHJWYWx1ZSIsInN0cmluZyIsInJlZyIsImlzQXJyYXkiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsIkVycm9yIiwiZ2V0TG9jYXRpb24iLCJhcHBlbmQiLCJ0byIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwibm9kZVR5cGUiLCJOb2RlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJvbmxvYWQiLCJvbmVycm9yIiwibGluayIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiaHJlZiIsInN1YnN0ciIsInJlbCIsImhlYWQiLCJzY3JpcHQiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnN0cnVjdG9yIiwiZSIsImNvbnRhaW5lciIsImNsb25lTm9kZSIsImV2ZW50TmFtZSIsImJ1YmJsZSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsImV2ZW50IiwiTW91c2VFdmVudCIsImNvbnNvbGUiLCJjbGllbnRYIiwiY2xpZW50WSIsImZyb21DYWxsYmFjayIsInRoaXNJbnN0YW5jZSIsInF1ZXJ5QWxsIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiZnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsInNpbXBsZVR5cGVzIiwidCIsInRvTG93ZXJDYXNlIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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QUFTNEcsQ0FBcEMsR0FBd0NBLENBQS9DO0FBQ0gsQ0FIRDs7a0JBS2V4TSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZjs7Ozs7O0FBR0EsSUFBTUMsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTWdNLE1BQU0sNEJBQVo7QUFDQWhNLFdBQU1BLFFBQU9nTSxJQUFJOUgsUUFBakI7QUFDQWxFLFdBQU1BLEtBQUk4QixPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBTzlCLEtBQUlLLE1BQUosR0FBYSxDQUFiLElBQWtCTCxLQUFJZ0osS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLEdBQXRDLEdBQTRDLE1BQU1oSixJQUFsRCxHQUF3REEsSUFBL0Q7QUFDSCxDQUxEOztrQkFPZUEsRyIsImZpbGUiOiJuYS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vY29yZS9jb21wb25lbnRcIjtcbmltcG9ydCBleHRlbnNpb24gZnJvbSBcIi4vY29yZS9leHRlbnNpb25cIjtcbmltcG9ydCBkZXBlbmRlbmN5IGZyb20gXCIuL2NvcmUvZGVwZW5kZW5jeVwiO1xuaW1wb3J0IHJvdXRlIGZyb20gXCIuL2NvcmUvcm91dGVcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9jb3JlL3N0YXRlXCI7XG5cbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uXG57XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGlmIChOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXNba2V5XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVnaXN0ZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBleHRlbnNpb247XG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uLnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeSA9IGRlcGVuZGVuY3k7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG59XG5cbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247XG4iLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZW1wdHkgZnJvbSBcIi4vc3RhdGljL2VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi9zdGF0aWMvdXJpXCI7XG5cbmNvbnN0IFV0aWwgPSB7XG4gICAgYXR0cixcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50LFxuICAgIGNzcyxcbiAgICBkb21Mb2FkZWQsXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHNlYXJjaCxcbiAgICBkZWZpbmVkLFxuICAgIGVhY2gsXG4gICAgZW1wdHksXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIG1lcmdlLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiXG5cbi8qKlxuICogTG9jYWxTdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gb3B0aW9uXG4gKiBAcmV0dXJucyB7e3NldDogKFN0b3JhZ2Uuc2V0fCopLCBnZXQ6IChTdG9yYWdlLmdldHwqKSwga2V5OiAoU3RvcmFnZS5rZXl8KiksIGNsZWFyOiAoU3RvcmFnZS5jbGVhcnwqKSwgcmVtb3ZlOiAoU3RvcmFnZS5yZW1vdmV8KiksIGxlbmd0aDogKFN0b3JhZ2UubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb29raWUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KG5hbWUpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFNldCBDb29raWUga2V5LCB2YWx1ZVxuICogIGV4cGlyZXMgLSBtcywgRGF0ZSwgLTEsIDBcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB7e319IG9wdGlvbnMgICB7ZXhwaXJlczogMCwgcGF0aDogJy8nLCBkb21haW46ICdzaXRlLmNvbScsIHNlY3VyZTogZmFsc2V9XG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMsIHR5cGVKc29uID0gdHJ1ZSlcbntcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXG4gICAgaWYgKENvb2tpZS50eXBlSnNvbikge31cbiAgICBpZiAodHlwZUpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBsZXQgZGF0YSA9IG5hbWUgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgcGFyc2VJbnQob3B0aW9ucy5leHBpcmVzKSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSArPSBlbmNvZGUob3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuY29va2llID0gZGF0YTtcbn07XG5cbi8qKlxuICogR2V0IENvb2tpZSB2YWx1ZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGdldCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlSnNvbiA9IHRydWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXG4gICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuICAgICkpO1xuXG4gICAgbGV0IGRhdGEgPSBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xuXG5cbiAgICBpZiAoQ29va2llLmRhdGFKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbiAmJiBkYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuXG4gICAgcmV0dXJuIGRhdGFcbn07XG5cbi8qKlxuICogUmVtb3ZlIENvb2tpZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gb3B0aW9uXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge2V4cGlyZXM6IC0xfTtcbiAgICBzZXQobmFtZSwgXCJcIiwgb3B0aW9uKTtcbn07XG5cbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICcnO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCB0byB1cmkgZ2V0IHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICAgIGV4YW1wbGU6IHtleHBpcmVzOiAwLCBwYXRoOiAnLycsIGRvbWFpbjogJ215LXNpdGUuY29tJywgc2VjdXJlOiBmYWxzZX1cbiAqIEByZXR1cm5zIHtzdHJpbmd9ICAgICAgICBleGFtcGxlOiBcImV4cGlyZXM9MDtwYXRoPS87ZG9tYWluPXNpdGUuY29tO3NlY3VyZT1mYWxzZVwiO1xuICovXG5jb25zdCBlbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAoc3RyID8gJzsnIDogJycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgICAgICkpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge30sXG4gICAgICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpO1xuXG4gICAgICAgIGNvb2tpZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBkYXRhW3BhcnRzWzBdLnRyaW0oKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn07XG5cbkNvb2tpZS5zZXQgPSBzZXQ7XG5Db29raWUuZ2V0ID0gZ2V0O1xuQ29va2llLnJlbW92ZSA9IHJlbW92ZTtcbkNvb2tpZS5jbGVhciA9IGNsZWFyO1xuQ29va2llLmVuY29kZSA9IGVuY29kZTtcbkNvb2tpZS5kZWNvZGUgPSBkZWNvZGU7XG5Db29raWUuZGF0YUpzb24gPSB0cnVlO1xuXG4vLyBDb29raWUoJ2EnLCAnQUFBJyk7XG4vLyBDb29raWUoJ2InLCAnQkJCJyk7XG4vLyBDb29raWUoJ2MnLCAnQ0NDJyk7XG4vLyBDb29raWUoJ24nLCAxMjApO1xuLy8gQ29va2llLmRlY29kZSgpO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGVuY29kZSxcbiAgICBkZWNvZGUsXG4gICAgbGVuZ3RoLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBjb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCAmJiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pe1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICB9XG59O1xuXG5jb21wb25lbnQucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpXG57XG4gICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50Lmxpc3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5saXN0W2tleV07XG4gICAgICAgICAgICBpZiAoY29tcC5jb21wbGV0ZSAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29tcG9uZW50Lmxpc3QgPSB7fTtcblxuY29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29udGV4dDogZmFsc2UsXG4gICAgfSwgY29uZmlnKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iLCJpbXBvcnQgbG9hZEpTIGZyb20gJy4uL3N0YXRpYy9sb2FkSlMnO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGRlcGVuZGVuY3kgPSBmdW5jdGlvbiAoY29uZmlnLCBmb3JjZSA9IHRydWUpXG57XG4gICAgY29uc3Qgc291cmNlcyA9IG1lcmdlKHtcbiAgICAgICAgY3NzOiBbXSxcbiAgICAgICAganM6IFtdLFxuICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSwgY29uZmlnKTtcblxuICAgIGlmIChmb3JjZSlcbiAgICAgICAgZGVwZW5kZW5jeS5sb2FkKHNvdXJjZXMpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG59O1xuXG5kZXBlbmRlbmN5LmxvYWQgPSAoc291cmNlcykgPT4ge1xuICAgIGNvbnN0IG1heCA9XG4gICAgICAgIChzb3VyY2VzLmNzcyA/IHNvdXJjZXMuY3NzLmxlbmd0aCA6IDApICtcbiAgICAgICAgKHNvdXJjZXMuanMgPyBzb3VyY2VzLmpzLmxlbmd0aCA6IDApO1xuICAgIGNvbnN0IHNyY3MgPSBtZXJnZSh7Y3NzOiBzb3VyY2VzLmNzc30se2pzOiBzb3VyY2VzLmpzfSk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWQgPSBrZXkgPT09ICdjc3MnID8gbG9hZENTUyA6IGxvYWRKUztcbiAgICAgICAgc3Jjc1trZXldLmZvckVhY2goKHNyYykgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZXMuZWxlbWVudHMucHVzaChsb2FkKHNyYywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlcy5jb21wbGV0ZShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB9LCBzb3VyY2VzLmVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZGVwZW5kZW5jeS5yZW1vdmUgPSBmdW5jdGlvbiAoc291cmNlcylcbntcbiAgICBjb25zdCBlbGVtZW50cyA9IHNvdXJjZXMgJiYgc291cmNlcy5lbGVtZW50cyA/IHNvdXJjZXMuZWxlbWVudHMgOiBbXTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHNvdXJjZXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5O1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBleHRlbnNpb24gPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uLmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmNyZWF0ZShjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKXtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbnNpb24ubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGV4dGVuc2lvbi5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24ubGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5saXN0ID0ge307XG5cbmV4dGVuc2lvbi5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGZhbHNlLFxuICAgIH0sIGNvbmZpZylcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9uO1xuIiwiXG5jb25zdCByb3V0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbXBvbmVudCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdXJsKSB7XG4gICAgICAgIHRoaXNbY29tcG9uZW50XSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlOyIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi4vc3RhdGljL3R5cGVPZic7XG5cblxuY29uc3Qgc3RhdGUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/IHN0YXRlLmdldChrZXkpIDogc3RhdGUuc2V0KGtleSwgZGF0YSk7XG59O1xuXG5zdGF0ZS5jYWxsYmFjayA9IHt9O1xuc3RhdGUuc291cmNlID0gY3JlYXRlU291cmNlKCk7XG5zdGF0ZS5zb3VyY2VkYXRhID0ge307XG5zdGF0ZS5hY3Rpb24gPSBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgIHN0YXRlLmNhbGxiYWNrW2tleV0gPSBjYWxsYmFjaztcbn07XG5cbnN0YXRlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdHlwZU9mKGtleSwgJ3N0cmluZycpXG4gICAgICAgID8gc3RhdGUuc291cmNlZGF0YVtrZXldIHx8IHN0YXRlLnNvdXJjZVtrZXldXG4gICAgICAgIDoga2V5ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBzdGF0ZS5zb3VyY2VkYXRhIDtcbn07XG5cbnN0YXRlLnNldCA9IGZ1bmN0aW9uIChrZXksIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZXRDYXNlKHtba2V5XTogcGF5bG9hZH0pO1xufTtcblxuc3RhdGUuc2V0Q2FzZSA9IGZ1bmN0aW9uIChwYXlsb2FkID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc3RhdGUuc291cmNlW2tleV0gPSBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gPSBwYXlsb2FkW2tleV07XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2UgKHBheWxvYWQgPSB7fSkge1xuICAgIHN0YXRlLnNvdXJjZWRhdGEgPSBwYXlsb2FkO1xuICAgIHJldHVybiBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQ6IChvYmosIHByb3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDoob2JqLCBwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNhbGxiYWNrW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2FsbGJhY2tbcHJvcF0uY2FsbCh7fSwgc3RhdGUuc291cmNlLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4vVXRpbFwiO1xuaW1wb3J0IE5hbWVzcGFjZUFwcGxpY2F0aW9uIGZyb20gXCIuL05hbWVzcGFjZUFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCIuL2Nvb2tpZVwiO1xuXG5cbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbiA9IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xud2luZG93LlV0aWwgPSBVdGlsO1xud2luZG93LkNvb2tpZSA9IENvb2tpZTtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsIlxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5cbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGxldCBpID0gMDtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykgY2FsbGJhY2suY2FsbCh7fSwgbGlzdFtpXSwgaSwgdG1wKTtcbiAgICBlbHNlXG4gICAgICAgIGZvciAoaSBpbiBsaXN0KSBjYWxsYmFjay5jYWxsKHt9LCBsaXN0W2ldLCBpLCB0bXApO1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGVtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW1wdHk7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXSwgbGlzdCA9IHZhbHVlcyB8fCBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuICAgIHJldHVybiB0bXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bykge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IG9uID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpIHtcbiAgICBsZXQgaSwgZWxlbWVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAodHlwZU9mKHNlbGVjdG9yKSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbGVtZW50c1tpXSAmJiBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCAhIWJ1YmJsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb247XG4iLCJcblxuY29uc3QgcG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG5cbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcblxuICAgIGlmIChlbGVtID09PSB1bmRlZmluZWQgfHwgZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbSAmJiBlbGVtLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICAgICAgICBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbUNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbUNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tQ2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb21DYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YoZnJvbUNhbGxiYWNrKSxcbiAgICAgICAgZnJvbSA9IGRvYyB8fCBkb2N1bWVudCxcbiAgICAgICAgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgY2FsbGJhY2sgPSBmcm9tQ2FsbGJhY2s7XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb21DYWxsYmFjayk7XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIiAmJiBpc05vZGUoZnJvbUNhbGxiYWNrKSlcbiAgICAgICAgZnJvbSA9IGZyb21DYWxsYmFjaztcblxuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgaSwgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcblxuICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxID8gZnJhZ21lbnQuZmlyc3RDaGlsZCA6IGZyYWdtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9