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

var _defined = __webpack_require__(/*! ./static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NamespaceApplication = function NamespaceApplication(config) {
    var _this = this;

    _classCallCheck(this, NamespaceApplication);

    if (NamespaceApplication.instance) return NamespaceApplication.instance;

    this.config = function (key) {
        return _this.configuration[key];
    };
    this.configuration = {
        id: undefined,
        url: undefined,
        mode: undefined,
        debug: undefined
    };
    Object.keys(config).forEach(function (key) {
        if (_this.configuration[key] === undefined) _this.configuration[key] = config[key];
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

exports.set = set;
exports.get = get;
exports.clear = clear;
exports.remove = remove;
exports.encode = encode;
exports.decode = decode;
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

/***/ "./src/datetime/index.js":
/*!*******************************!*\
  !*** ./src/datetime/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Datetime = {};
Datetime.MS_IN_DAY = 864e5;
Datetime.MS_IN_HOUR = 36e5;
Datetime.MS_IN_MIN = 6e4;

/**
 * Return timestamp
 * @param date
 * @returns {number}
 */
Datetime.time = function (date) {
    return date instanceof Date ? date.getTime() : new Date().getTime();
};

/**
 * Add days to some date
 * @param day           number of days. 0.04 - 1 hour, 0.5 - 12 hour, 1 - 1 day
 * @param dateStart     type Date, start date
 * @returns {*}  type Date
 */
Datetime.addDays = function (day, dateStart) {
    var date = dateStart ? new Date(dateStart) : new Date();
    date.setTime(date.getTime() + day * 86400000);
    return date;
};

/**
 * Time between Dates
 * <pre>
 *     var from = new Date('2016-08-01 20:30');
 *     var to = new Date('2016-08-10 07:55');
 *     .Date.betweenDates(from, to); // Object { day: 8, hour: 11, minute: 25 }
 * </pre>
 * @param dateFrom
 * @param dateTo
 * @returns {{day: number, hour: number, minute: number}}
 */
Datetime.betweenDates = function (dateFrom, dateTo) {
    dateFrom = dateFrom || new Date();
    dateTo = dateTo || new Date();
    var diffMs = dateTo - dateFrom,
        diffDays = Math.round(diffMs / 864e5),
        diffHrs = Math.round(diffMs % 864e5 / 36e5),
        diffMin = Math.round(diffMs % 864e5 % 36e5 / 6e4);
    return { day: diffDays, hour: diffHrs, minute: diffMin };
};

/**
 * Convert date string to Date Object
 * yy - the year as a two-digit number ( 00 to 99 );
 * YY - the year as a four-digit number ( 1900-9999 );
 * mm - the month as a number with a leading zero ( 01 to 12 ) ( 1 to 12 );
 * dd - the day as a number with a leading zero ( 01 to 31 ) ( 1 to 31 );
 * hh HH - the hour ( 00 to 11 ) ( 00 to 23 ) ( 1 to 12 ) ( 0 to 23 );
 * ii - the minute as a number with a leading zero ( 00 to 59 );
 * ss - the second as a number with a leading zero ( 00 to 59 );
 * aa - displays am (for times from midnight until noon) and pm (for times from noon until midnight);
 *
 * .strToDate('12.05.2017 12:30:25', 'mm.dd.YY HH:ii:ss')
 * .strToDate('12/05/2017', 'mm/dd/YY')
 * .strToDate('12/5/2017', 'mm/dd/YY', true)
 * @param date
 * @param format
 * @param utc
 * @returns {Date}
 */
Datetime.strToDate = function (date, format, utc) {
    var set = [0, 0, 1, 0, 0, 0];
    var temp = date.match(/[a-zA-Z]+|[0-9]+/g);
    var mask = format.match(/[a-zA-Z]{2}/g);
    for (var i = 0; i < mask.length; i++) {
        switch (mask[i]) {
            case "dd":
                set[2] = temp[i] || 1;
                break;
            case "mm":
                set[1] = (temp[i] || 1) - 1;
                break;
            case "yy":
                set[0] = temp[i] * 1 + (temp[i] > 50 ? 1900 : 2000);
                break;
            case "hh":
            case "HH":
                set[3] = temp[i] || 0;
                break;
            case "ii":
                set[4] = temp[i] || 0;
                break;
            case "YY":
                set[0] = temp[i] || 0;
                break;
            case "aa":
                set[3] = set[3] % 12 + ((temp[i] || '').toLowerCase() === 'am' ? 0 : 12);
                break;
            case "ss":
                set[5] = temp[i] || 0;
                break;
            default:
                break;
        }
    }
    if (utc) {
        return new Date(Date.UTC(set[0], set[1], set[2], set[3], set[4], set[5]));
    }
    return new Date(set[0], set[1], set[2], set[3], set[4], set[5]);
};

exports.default = Datetime;

/*
export default {
    MS_IN_DAY: Datetime.MS_IN_DAY,
    MS_IN_HOUR: Datetime.MS_IN_HOUR,
    MS_IN_MIN: Datetime.MS_IN_MIN,
    time: Datetime.time,
    addDays: Datetime.addDays,
    betweenDates: Datetime.betweenDates,
    strToDate: Datetime.strToDate,
};
*/

/***/ }),

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _attr = __webpack_require__(/*! ../static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _css = __webpack_require__(/*! ../static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ../static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _createFragment = __webpack_require__(/*! ../static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _createElement = __webpack_require__(/*! ../static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _on = __webpack_require__(/*! ../static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _defined = __webpack_require__(/*! ../static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dom(selector) {
    var $ = {
        selector: (0, _typeOf2.default)(selector, 'string') ? selector : null,
        selected: (0, _isNode2.default)(selector) ? [selector] : (0, _queryAll2.default)(selector)
    };

    var _set_real_display_style = function _set_real_display_style(src) {
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(_set_real_display_style);
        } else if ((0, _isNode2.default)(src) && src['real-display-style'] === undefined) {
            var style = src.style.display ? src.style.display : getComputedStyle(src).display;
            src['real-display-style'] = !style || style === 'none' ? 'block' : style;
        }
    };

    $.one = function () {
        return $.selected && $.selected.length ? $.selected[0] : false;
    };
    $.all = function () {
        return $.selected;
    };
    $.attr = function (name, value) {
        return (0, _defined2.default)(value) ? (0, _attr2.default)($.one(), name, value) : (0, _attr2.default)($.one(), name);
    };
    $.inject = function (data, append, to) {
        return (0, _inject2.default)($.one(), data, append, to);
    };
    $.append = function (data) {
        return (0, _inject2.default)($.one(), data, true);
    };
    $.search = function (attr, from) {
        return (0, _search2.default)($.one(), attr, from);
    };
    $.parent = function () {
        return $.one().parentNode;
    };
    $.children = function () {
        $.one();
    };
    $.position = function () {
        return (0, _position2.default)($.one());
    };
    $.x = function () {
        return (0, _position2.default)($.one()).x;
    };
    $.y = function () {
        return (0, _position2.default)($.one()).y;
    };
    $.width = function () {
        return (0, _position2.default)($.one()).width;
    };
    $.height = function () {
        return (0, _position2.default)($.one()).height;
    };
    $.remove = function () {
        return $.one().parentNode.removeChild($.one());
    };
    $.show = function () {
        var src = $.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: src && src['real-display-style'] ? src['real-display-style'] : 'block' });
    };
    $.hide = function () {
        var src = $.one();
        _set_real_display_style(src);
        (0, _css2.default)(src, { display: 'none' });
    };
    $.toggle = function () {
        var src = $.one();
        if ((0, _typeOf2.default)(src, 'string')) {
            (0, _queryAll2.default)(src).map(Dom.toggle);
        } else if ((0, _isNode2.default)(src)) {
            if (src.style.display === 'none') Dom.show(src);else Dom.hide(src);
        }
    };
    $.on = function (eventName, callback, bubble) {
        return (0, _on2.default)($.one(), eventName, callback, bubble);
    };

    return $;
}

Dom.attr = _attr2.default;
Dom.css = _css2.default;
Dom.loaded = _domLoaded2.default;
Dom.inject = _inject2.default;
Dom.str2node = _str2node2.default;
Dom.search = _search2.default;
Dom.queryAll = _queryAll2.default;
Dom.query = _query2.default;
Dom.create = _createElement2.default;
Dom.fragment = _createFragment2.default;
Dom.node2str = _node2str2.default;
Dom.str2node = _str2node2.default;

exports.default = Dom;

/***/ }),

/***/ "./src/emmet/index.js":
/*!****************************!*\
  !*** ./src/emmet/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Emmet syntax for creating DOM elements
 *
 * Syntax
 *   const emmet = Emmet();
 *   emmet('.table > div{left} + div(class="text-right"){right}')
 *   tag#id.classes(attributes=""){inner text} > .nested ^ .backed.up.one + .sibling
 *
 * Arguments
 *   .emmet( syntax : string, returnOnlyHTML : boolean )
 *
 * @namespace Emmet
 * @type function
 * @param text          syntax
 * @param htmlOnly      returnOnlyHTML
 * @returns {string|*}
 */
var Emmet = function Emmet() {
    var tempInnerTexts = [];
    var tempEscaped = [];
    var re = {};

    re.excludes = "([^\\.#\\(\\{]+)";
    re.classes = new RegExp("\\." + re.excludes, "g");
    re.id = new RegExp("#" + re.excludes, "g");
    re.tag = new RegExp("^" + re.excludes);
    re.indexes = /(.+?)(>|\+|\^|$)/g;
    re.escape = /("|')([^\1]*?)\1/g;
    re.innerText = /\{([^}]*?)}/g;
    re.attrs = /\(([^\)]*)\)/g;

    var emmet = function emmet(text, htmlOnly) {
        var tree = element(),
            current = tree,
            lastElement = tree,
            commandText = text || "",
            convertCollection = function convertCollection(src) {
            var fragment = document.createDocumentFragment();
            while (src.length) {
                fragment.appendChild(src[0]);
            }return fragment;
        },
            result = void 0;

        tempInnerTexts = [];
        tempEscaped = [];
        commandText.replace(re.escape, function (full, quotes, escape) {
            tempEscaped.push(escape);
            return "\"\"";
        }).replace(re.innerText, function (full, innerText) {
            tempInnerTexts.push(innerText);
            return "{}";
        }).replace(/\s+/g, "").replace(re.indexes, function (full, elementText, splitter) {
            current.appendChild(lastElement = element(elementText));
            if (splitter === ">") current = lastElement;else if (splitter === "^") current = current.parentNode;
        });

        result = tree.children.length > 1 ? tree.children : tree.children[0];

        return htmlOnly ? tree.innerHTML : result instanceof HTMLCollection ? convertCollection(result) : result;
    };

    var element = function element(text) {
        var commandText = text || "",
            match_tag = commandText.match(re.tag),
            match_id = commandText.match(re.id),
            match_classes = commandText.match(re.classes),
            match_attrs = commandText.match(re.attrs),
            match_innerText = commandText.match(re.innerText),
            element = document.createElement(match_tag ? match_tag[0] : "div");

        if (match_id) {
            element.id = match_id.pop().replace(re.id, "$1");
        }

        if (match_classes) {
            element.className = match_classes.map(function (className) {
                return className.slice(1);
            }).join(" ");
        }

        if (match_innerText) {
            element.innerHTML += match_innerText.map(function () {
                return unescape(tempInnerTexts.shift());
            }).join(" ");
        }

        if (match_attrs) {
            match_attrs.map(function (chunkParam) {
                var chunk = chunkParam.replace(re.attrs, "$1").split(",");
                chunk.map(function (attrParam) {
                    var attr = attrParam.split("=");
                    var key = attr.shift();
                    var value = JSON.parse(unescape(attr.join("=")));
                    element.setAttribute(key, value);
                });
            });
        }

        return element;
    };

    return emmet;
};

exports.default = Emmet;

/***/ }),

/***/ "./src/event-manager/index.js":
/*!************************************!*\
  !*** ./src/event-manager/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var EventManager = {

    eventFragment: document.createDocumentFragment(),
    version: '0.0.2',
    eventsType: {},

    /**
     * Create new Event
     * @param name
     * @param details
     * @returns {CustomEvent}
     */
    addEvent: function addEvent(name, details) {
        var key = void 0;
        var event = new CustomEvent(name, { detail: details });
        if ((typeof details === 'undefined' ? 'undefined' : _typeof(details)) === 'object') for (key in details) {
            if (!event.hasOwnProperty(key)) event[key] = details[key];
        }EventManager.eventFragment[name] = event;
        return this;
    },

    /**
     * Remove Event
     * @param name
     */
    removeEvent: function removeEvent(name) {
        if (EventManager.eventFragment[name]) delete EventManager.eventFragment[name];
        return this;
    },

    /**
     * Register an event handler of a specific event type on the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     * @returns {{type: *, listener: *, useCapture: (*|boolean)}}
     */
    addEventListener: function addEventListener(type, listener, useCapture) {
        useCapture = useCapture || false;
        EventManager.eventFragment.addEventListener(type, listener, useCapture);
        return this;
    },

    /**
     * Removes an event listener from the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     */
    removeEventListener: function removeEventListener(type, listener, useCapture) {
        EventManager.eventFragment.removeEventListener(type, listener, useCapture || false);
        return this;
    },

    /**
     * Dispatch an event to this EventTarget.
     * @param type
     */
    dispatchEvent: function dispatchEvent(type) {
        if (EventManager.eventFragment[type] instanceof CustomEvent) EventManager.eventFragment.dispatchEvent(EventManager.eventFragment[type]);
        return this;
    }

};

exports.default = EventManager;

/***/ }),

/***/ "./src/http-request/index.js":
/*!***********************************!*\
  !*** ./src/http-request/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var httpRequest = function httpRequest(config, callback, thisInstance) {
    var key = void 0,
        xhr = new XMLHttpRequest(),
        options = {
        data: config.data || {},
        action: config.action || config.url || document.location.href,
        method: config.method ? config.method.toUpperCase() : 'GET',
        headers: config.headers || {},
        useEncode: config.useEncode === undefined ? true : !!config.useEncode,
        useFormData: config.useFormData === undefined ? false : !!config.useFormData,
        async: config.async === undefined ? true : !!config.async,
        user: config.user || null,
        password: config.user || null
    },
        concateString = function concateString(params) {
        var result = '';
        for (key in params) {
            result += '&' + key + '=' + (options.useEncode ? encodeURIComponent(params[key]) : params[key]);
        }
        return result;
    },
        sendData = {};

    thisInstance = (0, _typeOf2.default)(thisInstance, 'object') ? thisInstance : {};

    // data prepare
    if (options.method === 'GET') {

        // form to FormData
        options.action += options.action.indexOf('?') === -1 ? '?' : '';
        options.action += concateString(options.data);
        sendData = {};
    } else {

        // reset to useFormData in true
        if (options.data instanceof FormData) {
            options.data = {};
            options.useFormData = true;
            sendData = options.data;
        }

        // form to FormData
        if (options.data instanceof HTMLFormElement) {
            sendData = new FormData(options.data);
            options.useFormData = true;
            options.data = {};
        }

        if (options.useFormData) {
            if (!(sendData instanceof FormData)) {
                sendData = new FormData();
            }

            for (key in options.data) {
                sendData.append(key, options.useEncode ? encodeURIComponent(options.data[key]) : options.data[key]);
            }
        } else {
            sendData = concateString(options.data);
        }
    }

    // build request
    xhr.open(options.method, options.action, options.async, options.user, options.password);

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (options.method !== 'GET' && !options.useFormData) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    for (key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
    }

    xhr.onloadend = function () {
        thisInstance.XMLHttpRequest = xhr;
        if (typeof callback === 'function') {
            callback.call(thisInstance, xhr.status, xhr.responseText, xhr);
        }
    };

    xhr.sendOptions = options;
    xhr.send(sendData);
    return xhr;
}; /**
    * Base HTTP Request
    *
    * .httpRequest( {method: 'GET', data: {}, headers: {}, action: '/index'}, function(status, data){}, thisInstance );
    *
    * @param config
    *      data:           data to send. Object, FormData (POST only), HTMLFormElement (POST only)
    *      action, url:    url address to
    *      method:         request method GET POST or custom methods, default 'GET'
    *      headers:        headers Object, key = value
    *      useEncode:      used url encoding, default TRUE. Boolean
    *      useFormData:    used FormData, default FALSE. Boolean
    *      async:          default TRUE. Boolean
    *      user:
    *      password:
    *
    * @param callback
    *      executing event - onloadend. function (status, responseText)
    *
    * @param thisInstance
    *      object 'this' for callback
    *
    * @returns {XMLHttpRequest}
    */
exports.default = httpRequest;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _NamespaceApplication = __webpack_require__(/*! ./NamespaceApplication */ "./src/NamespaceApplication.js");

var _NamespaceApplication2 = _interopRequireDefault(_NamespaceApplication);

var _util = __webpack_require__(/*! ./util */ "./src/util/index.js");

var _util2 = _interopRequireDefault(_util);

var _cookie = __webpack_require__(/*! ./cookie */ "./src/cookie/index.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _storage = __webpack_require__(/*! ./storage */ "./src/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _datetime = __webpack_require__(/*! ./datetime */ "./src/datetime/index.js");

var _datetime2 = _interopRequireDefault(_datetime);

var _eventManager = __webpack_require__(/*! ./event-manager */ "./src/event-manager/index.js");

var _eventManager2 = _interopRequireDefault(_eventManager);

var _timer = __webpack_require__(/*! ./timer */ "./src/timer/index.js");

var _timer2 = _interopRequireDefault(_timer);

var _emmet = __webpack_require__(/*! ./emmet */ "./src/emmet/index.js");

var _emmet2 = _interopRequireDefault(_emmet);

var _httpRequest = __webpack_require__(/*! ./http-request */ "./src/http-request/index.js");

var _httpRequest2 = _interopRequireDefault(_httpRequest);

var _dom = __webpack_require__(/*! ./dom */ "./src/dom/index.js");

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.NamespaceApplication = _NamespaceApplication2.default;
window.NamespaceApplication.Util = _util2.default;
window.NamespaceApplication.Cookie = _cookie2.default;
window.NamespaceApplication.Storage = _storage2.default;
window.NamespaceApplication.Datetime = _datetime2.default;
window.NamespaceApplication.EventManager = _eventManager2.default;
window.NamespaceApplication.Timer = _timer2.default;
window.NamespaceApplication.Emmet = _emmet2.default;
window.NamespaceApplication.httpRequest = _httpRequest2.default;
window.NamespaceApplication.Dom = _dom2.default;

/***/ }),

/***/ "./src/static/abc.js":
/*!***************************!*\
  !*** ./src/static/abc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LETTER_CONSONANT = exports.LETTER_CONSONANT = 'B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z';
var LETTER_VOWEL = exports.LETTER_VOWEL = 'A,E,I,O,U,Y';
var ABC = exports.ABC = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
var NUMBERS = exports.NUMBERS = '0,1,2,3,4,5,6,7,8,9';
var AMPERSAND = exports.AMPERSAND = '&';

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

/***/ "./src/static/copy.js":
/*!****************************!*\
  !*** ./src/static/copy.js ***!
  \****************************/
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

var _defined = __webpack_require__(/*! ./defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, addProperties) {
    var type = (0, _typeOf2.default)(src);

    if (type === 'object' && (0, _isNode2.default)(src)) {
        return src.cloneNode(!!addProperties);
    } else if (type === 'function') {
        return src.bind({});
    } else if (type === 'array' || type === 'object') {
        var _copy = JSON.parse(JSON.stringify(src));
        if ((0, _typeOf2.default)(addProperties, 'object') || (0, _typeOf2.default)(addProperties, 'array')) Object.keys(addProperties).forEach(function (key) {
            _copy[key] = addProperties[key];
        });
        return _copy;
    } else return (0, _defined2.default)(addProperties) ? src + addProperties : src;
};

exports.default = copy;

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

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _str2node = __webpack_require__(/*! ./str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFragment = function createFragment(append) {
    var fragment = document.createDocumentFragment();

    if ((0, _isNode2.default)(append)) fragment.appendChild(append);

    if ((0, _typeOf2.default)(append, 'string')) fragment.appendChild((0, _str2node2.default)(append));

    return fragment;
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

/***/ "./src/static/definedIn.js":
/*!*********************************!*\
  !*** ./src/static/definedIn.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var definedIn = function definedIn(stack, value) {
    return stack && stack[value] !== undefined;
};

exports.default = definedIn;

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
    if (list instanceof Array) {
        list.forEach(function (item, i) {
            callback.call({}, item, i, tmp);
        });
    } else if ((0, _isNode2.default)(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach(function (item, i) {
            callback.call({}, item, i, tmp);
        });
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

/***/ "./src/static/extend.js":
/*!******************************!*\
  !*** ./src/static/extend.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var extend = exports.extend = function extend(destination, source) {
    for (var param in source) {
        if (source.hasOwnProperty(param)) destination[param] = source[param];
    }function __() {
        this.constructor = destination;
    }

    __.prototype = source.prototype;
    destination.prototype = new __();
};

var extendRecursive = exports.extendRecursive = function extendRecursive(destination, source) {
    var property = void 0;
    for (property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            extendRecursive(destination[property], source[property]);
        } else destination[property] = source[property];
    }
    return destination;
};

exports.default = extend;

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

/***/ "./src/static/httpRequest.js":
/*!***********************************!*\
  !*** ./src/static/httpRequest.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base HTTP Request
 *
 * .httpRequest( {method: 'GET', data: {}, headers: {}, action: '/index'}, function(status, data){}, thisInstance );
 *
 * @param config
 *      data:           data to send. Object, FormData (POST only), HTMLFormElement (POST only)
 *      action, url:    url address to
 *      method:         request method GET POST or custom methods, default 'GET'
 *      headers:        headers Object, key = value
 *      useEncode:      used url encoding, default TRUE. Boolean
 *      useFormData:    used FormData, default FALSE. Boolean
 *      async:          default TRUE. Boolean
 *      user:
 *      password:
 *
 * @param callback
 *      executing event - onloadend. function (status, responseText)
 *
 * @param thisInstance
 *      object 'this' for callback
 *
 * @returns {XMLHttpRequest}
 */
var httpRequest = function httpRequest(config, callback, thisInstance) {
    var key = void 0;
    var sendData = {};
    var xhr = new XMLHttpRequest();
    var options = {
        data: config.data || {},
        action: config.action || config.url || document.location.href,
        method: config.method ? config.method.toUpperCase() : 'GET',
        headers: config.headers || {},
        useEncode: config.useEncode === undefined ? true : !!config.useEncode,
        useFormData: config.useFormData === undefined ? false : !!config.useFormData,
        async: config.async === undefined ? true : !!config.async,
        user: config.user || null,
        password: config.user || null
    };

    var concateString = function concateString(params) {
        var result = '';
        for (key in params) {
            result += '&' + key + '=' + (options.useEncode ? encodeURIComponent(params[key]) : params[key]);
        }
        return result;
    };

    thisInstance = (0, _typeOf2.default)(thisInstance, 'object') ? thisInstance : {};

    // data prepare
    if (options.method === 'GET') {

        // form to FormData
        options.action += options.action.indexOf('?') === -1 ? '?' : '';
        options.action += concateString(options.data);
        sendData = {};
    } else {

        // reset to useFormData in true
        if (options.data instanceof FormData) {
            options.data = {};
            options.useFormData = true;
            sendData = options.data;
        }

        // form to FormData
        if (options.data instanceof HTMLFormElement) {
            sendData = new FormData(options.data);
            options.useFormData = true;
            options.data = {};
        }

        if (options.useFormData) {
            if (!(sendData instanceof FormData)) sendData = new FormData();

            Object.keys(options.data).forEach(function (key) {
                sendData.append(key, options.useEncode ? encodeURIComponent(options.data[key]) : options.data[key]);
            });
        } else {
            sendData = concateString(options.data);
        }
    }

    // build request
    xhr.open(options.method, options.action, options.async, options.user, options.password);

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (options.method !== 'GET' && !options.useFormData) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    for (key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
    }

    xhr.onloadend = function () {
        thisInstance.XMLHttpRequest = xhr;
        if (typeof callback === 'function') {
            callback.call(thisInstance, xhr.status, xhr.responseText, xhr);
        }
    };

    xhr.sendOptions = options;
    xhr.send(sendData);
    return xhr;
};

exports.default = httpRequest;

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
    if ((0, _typeOf2.default)(selector, 'array')) {
        selector.forEach(function (elem) {
            inject(elem, data, append, to);
        });
        return;
    }

    if ((0, _typeOf2.default)(selector, 'string')) selector = (0, _query2.default)(selector, to);

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

/***/ "./src/static/isEmpty.js":
/*!*******************************!*\
  !*** ./src/static/isEmpty.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(src) {
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

exports.default = isEmpty;

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

var documentElement = (0, _getDocument2.default)();
var loadJS = function loadJS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadJS(src[i], onload, onerror);
        }
    } else {
        var script = documentElement.createElement('script');
        var id = 'resource-' + Math.random().toString(32).slice(2);

        script.src = src.substr(-3) === '.js' ? src : src + '.js';
        script.type = 'application/javascript';
        script.id = id;
        script.onload = onload;
        script.onerror = onerror;

        documentElement.head.appendChild(script);
        return script;
    }
};

exports.default = loadJS;

/***/ }),

/***/ "./src/static/loadJSSync.js":
/*!**********************************!*\
  !*** ./src/static/loadJSSync.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _createElement = __webpack_require__(/*! ./createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loads a script element with javascript source
 *
 * .loadJSSync ( {
 *      myscript1: '/path/to/myscript1',
 *      myscript2: '/path/to/myscript2',
 *    },
 *    function (list) {})
 *
 * .loadJSSync ( [
 *      '/path/to/myscript1',
 *      '/path/to/myscript2',
 *    ],
 *    function (list) {})
 *
 * @namespace NamespaceApplication.loadJSSync
 * @param srcs       Object, Array. items: key is ID, value is src
 * @param callback  Function called when all srcs is loaded
 * @param onerror   Function called when load is failed
 * @returns {*}
 */
var loadJSSync = function loadJSSync(srcs, callback, onerror) {
    if ((0, _typeOf2.default)(srcs, 'object') || (0, _typeOf2.default)(srcs, 'array')) {
        if ((0, _typeOf2.default)(srcs, 'array')) {
            var obj = {};
            srcs.forEach(function (item, i) {
                obj['resource-' + Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }
        var iterator = 0;
        var scripts = {};
        Object.keys(srcs).forEach(function (key) {
            var src = srcs[key];
            var script = (0, _createElement2.default)('script', {
                src: src.substr(-3) === '.js' ? src : src + '.js',
                type: 'application/javascript',
                id: key
            });
            script.onerror = onerror;
            script.onload = function (e) {
                scripts[this.id] = this;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            };
            document.head.appendChild(script);
        });
    }
};

exports.default = loadJSSync;

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

/***/ "./src/static/number2string.js":
/*!*************************************!*\
  !*** ./src/static/number2string.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var number2string = exports.number2string = function number2string(x) {
    var e = void 0;
    if (Math.abs(x) < 1.0) {
        e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + new Array(e).join('0') + x.toString().substring(2);
        }
    } else {
        e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += new Array(e + 1).join('0');
        }
    }
    return x;
};

exports.default = number2string;

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

/***/ "./src/static/random.js":
/*!******************************!*\
  !*** ./src/static/random.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomItem = exports.randomString = exports.randomNumber = exports.randomColor = exports.random = undefined;

var _abc = __webpack_require__(/*! ./abc */ "./src/static/abc.js");

var random = exports.random = function random(min, max) {
    min = min || 0;
    max = max || 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generate a random hex color
 * @returns {string}
 */
/**
 * Generate a random number
 * @param min
 * @param max
 * @returns {number}
 */
var randomColor = exports.randomColor = function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var i = void 0,
        color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }return color;
};

var randomNumber = exports.randomNumber = function randomNumber() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    if (size > 16) {
        var i = Math.ceil(size / 16);
        var res = '';
        for (i; i > 0; i--) {
            res += Array(16).fill(0).map(function (i) {
                return Math.floor(Math.random() * 10);
            }).join('');
        }return res.slice(0, size);
    }
    return parseInt(Array(size).fill(0).map(function (i) {
        return Math.floor(Math.random() * 10);
    }).join(''));
};

var randomString = exports.randomString = function randomString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    var i = void 0,
        string = '';
    var abs = (_abc.ABC + _abc.NUMBERS).toLowerCase().split('');
    for (i = size; i > 0; i--) {
        string += abs[Math.floor(Math.random() * abs.length)];
    }
    return string;
};

/**
 * Return random item from array
 * @param arr
 * @returns {*}
 */
var randomItem = exports.randomItem = function randomItem(arr) {
    return Array.isArray(arr) ? arr[random(0, arr.length - 1)] : false;
};

exports.default = random;

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

/***/ }),

/***/ "./src/storage/index.js":
/*!******************************!*\
  !*** ./src/storage/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
 * Add item by name
 * @param name
 * @param value
 * @param json
 */
var set = function set(name, value) {
    var json = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (json) try {
        value = JSON.stringify(value);
    } catch (error) {}
    return window.localStorage.setItem(name, value);
};

/**
 * Get item by name
 * @param name
 * @param json
 */
var get = function get(name) {
    var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var value = window.localStorage.getItem(name);
    if (json && value) try {
        value = JSON.parse(value);
    } catch (error) {}
    return value;
};

/**true
 * Remove item by name
 * @param name
 */
var remove = function remove(name) {
    return window.localStorage.removeItem(name);
};

/**
 * Get item by index
 * @param index
 * @returns {string}
 */
var key = function key(index) {
    return window.localStorage.key(index);
};

/**
 * When invoked, will empty all keys out of the storage.
 */
var clear = function clear() {
    return window.localStorage.clear();
};

/**
 * Returns an integer representing the number of data items stored in the Storage object.
 * @returns {number}
 */
var length = function length() {
    return window.localStorage.length;
};

/**
 * LocalStorage wrapper
 *
 * @param name
 * @param value
 * @returns {{set: (Storage.set|*), get: (Storage.get|*), key: (Storage.key|*), clear: (Storage.clear|*), remove: (Storage.remove|*), length: (Storage.length|*)}}
 * @constructor
 */
var Storage = function Storage(name, value) {
    switch (arguments.length) {
        case 0:
            return {
                set: set,
                get: get,
                key: key,
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

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = Storage;

/***/ }),

/***/ "./src/timer/index.js":
/*!****************************!*\
  !*** ./src/timer/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Simple timer realise. Return self-instance
 * timer = new .Timer(function(iterator, repeat){}, 1000, 5)
 *  Instance methods
 *      timer.repeat
 *      timer.iterator
 *      timer.start ()
 *      timer.stop ()
 *      timer.pause ()
 *      timer.reset ()
 *      timer.clear ()
 *  Static methods
 *      Timer.timeout (callback, ms, thisInst) : timeoutId
 *      Timer.interval (callback, ms, thisInst) : intervalId
 *      Timer.timeoutStop (timeoutId)
 *      Timer.intervalStop (intervalId)
 * @param callback
 * @param delay
 * @param repeat
 * @param thisInstance  if not set, uses instance of Timer
 * @returns {Window.Timer|Timer}
 * @constructor
 */
var Timer = function Timer(callback, delay, repeat, thisInstance) {
    if (!(this instanceof Timer)) return new Timer(callback, delay, repeat, thisInstance);

    delay = delay !== undefined ? parseInt(delay) : 500;
    repeat = repeat !== undefined ? parseInt(repeat) : 0;
    var config = { self: this, callback: callback, delay: delay, repeat: repeat };

    var ht = null;
    var hc = function hc() {
        config.self.iterator++;
        if (config.repeat !== 0 && config.repeat <= config.self.iterator) config.self.stop();
        config.callback.call(thisInstance || this, config.self.iterator, config.repeat);
    };

    this.repeat = repeat;
    this.iterator = 0;
    this.start = function () {
        if (config.repeat === 0 || config.repeat > config.self.iterator) ht = setInterval(hc, config.delay);
    };
    this.stop = function () {
        this.iterator = config.repeat;
        this.clear();
    };
    this.pause = function () {
        this.clear();
    };
    this.reset = function () {
        this.iterator = 0;
    };
    this.clear = function () {
        clearInterval(ht);
    };
};

Timer.timeout = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setTimeout(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.interval = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setInterval(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.timeoutStop = function (id) {
    clearTimeout(id);
};
Timer.intervalStop = function (id) {
    clearInterval(id);
};

exports.default = Timer;

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _attr = __webpack_require__(/*! ../static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _createElement = __webpack_require__(/*! ../static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _createFragment = __webpack_require__(/*! ../static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _css = __webpack_require__(/*! ../static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ../static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _httpRequest = __webpack_require__(/*! ../static/httpRequest */ "./src/static/httpRequest.js");

var _httpRequest2 = _interopRequireDefault(_httpRequest);

var _defined = __webpack_require__(/*! ../static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _definedIn = __webpack_require__(/*! ../static/definedIn */ "./src/static/definedIn.js");

var _definedIn2 = _interopRequireDefault(_definedIn);

var _each = __webpack_require__(/*! ../static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(/*! ../static/extend */ "./src/static/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isEmpty = __webpack_require__(/*! ../static/isEmpty */ "./src/static/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _findObject = __webpack_require__(/*! ../static/findObject */ "./src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _findObjects = __webpack_require__(/*! ../static/findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _format = __webpack_require__(/*! ../static/format */ "./src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ../static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _loadJSSync = __webpack_require__(/*! ../static/loadJSSync */ "./src/static/loadJSSync.js");

var _loadJSSync2 = _interopRequireDefault(_loadJSSync);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _number2string = __webpack_require__(/*! ../static/number2string */ "./src/static/number2string.js");

var _number2string2 = _interopRequireDefault(_number2string);

var _on = __webpack_require__(/*! ../static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ../static/positionMouse */ "./src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _random = __webpack_require__(/*! ../static/random */ "./src/static/random.js");

var _random2 = _interopRequireDefault(_random);

var _redirect = __webpack_require__(/*! ../static/redirect */ "./src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ../static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ../static/uri */ "./src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

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
    httpRequest: _httpRequest2.default,
    defined: _defined2.default,
    definedIn: _definedIn2.default,
    extend: _extend2.default,
    extendRecursive: _extend.extendRecursive,
    each: _each2.default,
    findObject: _findObject2.default,
    findObjects: _findObjects2.default,
    format: _format2.default,
    isEmpty: _isEmpty2.default,
    isNode: _isNode2.default,
    loadCSS: _loadCSS2.default,
    loadJS: _loadJS2.default,
    loadJSSync: _loadJSSync2.default,
    merge: _merge2.default,
    number2string: _number2string2.default,
    on: _on2.default,
    position: _position2.default,
    positionMouse: _positionMouse2.default,
    random: _random2.default,
    randomColor: _random.randomColor,
    randomItem: _random.randomItem,
    randomNumber: _random.randomNumber,
    randomString: _random.randomString,
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default,
    copy: _copy2.default
};

exports.default = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWRJbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hbWVzcGFjZUFwcGxpY2F0aW9uIiwiY29uZmlnIiwiaW5zdGFuY2UiLCJrZXkiLCJjb25maWd1cmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJ1cmwiLCJtb2RlIiwiZGVidWciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsInJlZ2lzdGVyIiwiZXh0ZW5zaW9uIiwiZGVwZW5kZW5jeSIsInJvdXRlIiwic3RhdGUiLCJDb29raWUiLCJuYW1lIiwidmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZXQiLCJnZXQiLCJjbGVhciIsInJlbW92ZSIsIm9wdGlvbnMiLCJ0eXBlSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleHBpcmVzIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJlbmNvZGUiLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoZXMiLCJtYXRjaCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkYXRhSnNvbiIsInBhcnNlIiwib3B0aW9uIiwic3RyIiwiZGVjb2RlIiwiY29va2llcyIsInNwbGl0IiwicGFydHMiLCJ0cmltIiwibGlzdCIsImNvbXAiLCJjcmVhdGUiLCJpbml0IiwiaW5pdGlhbGl6ZWQiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImNhbGwiLCJ0ZW1wbGF0ZSIsIm92ZXJyaWRlIiwiY29udGV4dCIsImZvcmNlIiwic291cmNlcyIsImNzcyIsImpzIiwiZWxlbWVudHMiLCJsb2FkIiwibWF4Iiwic3JjcyIsImkiLCJsb2FkQ1NTIiwibG9hZEpTIiwic3JjIiwicHVzaCIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY2FsbGJhY2siLCJzb3VyY2UiLCJjcmVhdGVTb3VyY2UiLCJzb3VyY2VkYXRhIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldENhc2UiLCJQcm94eSIsIm9iaiIsInByb3AiLCJEYXRldGltZSIsIk1TX0lOX0RBWSIsIk1TX0lOX0hPVVIiLCJNU19JTl9NSU4iLCJ0aW1lIiwiYWRkRGF5cyIsImRheSIsImRhdGVTdGFydCIsImJldHdlZW5EYXRlcyIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiZGlmZk1zIiwiZGlmZkRheXMiLCJNYXRoIiwicm91bmQiLCJkaWZmSHJzIiwiZGlmZk1pbiIsImhvdXIiLCJtaW51dGUiLCJzdHJUb0RhdGUiLCJmb3JtYXQiLCJ1dGMiLCJ0ZW1wIiwibWFzayIsInRvTG93ZXJDYXNlIiwiVVRDIiwiRG9tIiwic2VsZWN0b3IiLCIkIiwic2VsZWN0ZWQiLCJfc2V0X3JlYWxfZGlzcGxheV9zdHlsZSIsIm1hcCIsInN0eWxlIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJvbmUiLCJhbGwiLCJhdHRyIiwiaW5qZWN0IiwiYXBwZW5kIiwidG8iLCJzZWFyY2giLCJmcm9tIiwicGFyZW50IiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsIm9uIiwiZXZlbnROYW1lIiwiYnViYmxlIiwibG9hZGVkIiwiZG9tTG9hZGVkIiwic3RyMm5vZGUiLCJxdWVyeUFsbCIsInF1ZXJ5IiwiY3JlYXRlRWxlbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRnJhZ21lbnQiLCJub2RlMnN0ciIsIkVtbWV0IiwidGVtcElubmVyVGV4dHMiLCJ0ZW1wRXNjYXBlZCIsInJlIiwiZXhjbHVkZXMiLCJjbGFzc2VzIiwidGFnIiwiaW5kZXhlcyIsImVzY2FwZSIsImlubmVyVGV4dCIsImF0dHJzIiwiZW1tZXQiLCJ0ZXh0IiwiaHRtbE9ubHkiLCJ0cmVlIiwiY3VycmVudCIsImxhc3RFbGVtZW50IiwiY29tbWFuZFRleHQiLCJjb252ZXJ0Q29sbGVjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsInJlc3VsdCIsImZ1bGwiLCJxdW90ZXMiLCJlbGVtZW50VGV4dCIsInNwbGl0dGVyIiwiaW5uZXJIVE1MIiwiSFRNTENvbGxlY3Rpb24iLCJtYXRjaF90YWciLCJtYXRjaF9pZCIsIm1hdGNoX2NsYXNzZXMiLCJtYXRjaF9hdHRycyIsIm1hdGNoX2lubmVyVGV4dCIsInBvcCIsImNsYXNzTmFtZSIsInNsaWNlIiwiam9pbiIsInVuZXNjYXBlIiwic2hpZnQiLCJjaHVua1BhcmFtIiwiY2h1bmsiLCJhdHRyUGFyYW0iLCJzZXRBdHRyaWJ1dGUiLCJFdmVudE1hbmFnZXIiLCJldmVudEZyYWdtZW50IiwidmVyc2lvbiIsImV2ZW50c1R5cGUiLCJhZGRFdmVudCIsImRldGFpbHMiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBlIiwibGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJodHRwUmVxdWVzdCIsInRoaXNJbnN0YW5jZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaHJlZiIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwicGFyYW1zIiwic2VuZERhdGEiLCJpbmRleE9mIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsIndpbmRvdyIsIlV0aWwiLCJTdG9yYWdlIiwiVGltZXIiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsInR5cGVfZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNvcHkiLCJhZGRQcm9wZXJ0aWVzIiwiY2xvbmVOb2RlIiwiYmluZCIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsInByb3BlcnRpZXMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsInN1YnN0cmluZyIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwidG1wIiwiQXJyYXkiLCJpdGVtIiwiY2hpbGROb2RlcyIsImZpbHRlciIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZWxlbSIsImV4dGVuZCIsImRlc3RpbmF0aW9uIiwicGFyYW0iLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwidmFsdWVzIiwiYXR0clZhbHVlIiwiZmluZE9iamVjdHMiLCJzdHJpbmciLCJyZWciLCJpc0FycmF5IiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJFcnJvciIsImdldExvY2F0aW9uIiwidGV4dENvbnRlbnQiLCJpc0VtcHR5IiwiaXNOYU4iLCJpc05vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJsaW5rIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJyZWwiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwibG9hZEpTU3luYyIsIml0ZXJhdG9yIiwic2NyaXB0cyIsImUiLCJtZXJnZSIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwibnVtYmVyMnN0cmluZyIsImFicyIsInBvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsInBvc2l0aW9uTW91c2UiLCJNb3VzZUV2ZW50IiwiY29uc29sZSIsImNsaWVudFgiLCJjbGllbnRZIiwiZnJvbUNhbGxiYWNrIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsImZsb29yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJyYW5kb21OdW1iZXIiLCJzaXplIiwiY2VpbCIsInJlcyIsImZpbGwiLCJyYW5kb21TdHJpbmciLCJyYW5kb21JdGVtIiwiYXJyIiwicmVkaXJlY3QiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInR5cGVPZiIsInNpbXBsZVR5cGVzIiwidCIsInR5cGVPZlN0cmljdCIsInVyaSIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsImRlbGF5IiwicmVwZWF0Iiwic2VsZiIsImh0IiwiaGMiLCJzdG9wIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsInBhdXNlIiwicmVzZXQiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsIm1zIiwidGhpc0luc3QiLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWwiLCJ0aW1lb3V0U3RvcCIsImNsZWFyVGltZW91dCIsImludGVydmFsU3RvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1BLG9CLEdBRUYsOEJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBSUQscUJBQXFCRSxRQUF6QixFQUNJLE9BQU9GLHFCQUFxQkUsUUFBNUI7O0FBRUosU0FBS0QsTUFBTCxHQUFjLFVBQUNFLEdBQUQ7QUFBQSxlQUFTLE1BQUtDLGFBQUwsQ0FBbUJELEdBQW5CLENBQVQ7QUFBQSxLQUFkO0FBQ0EsU0FB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O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1GLE9BQU87QUFDVG5ILHdCQURTO0FBRVR3QiwwQ0FGUztBQUdURSw0Q0FIUztBQUlUekYsc0JBSlM7QUFLVG1GLGtDQUxTO0FBTVRuQiw0QkFOUztBQU9Ub0IsZ0NBUFM7QUFRVE0sZ0NBUlM7QUFTVEosMEJBVFM7QUFVVG5CLDRCQVZTO0FBV1RvRixzQ0FYUztBQVlUMEQsOEJBWlM7QUFhVEMsa0NBYlM7QUFjVGEsNEJBZFM7QUFlVE0sNENBZlM7QUFnQlRmLHdCQWhCUztBQWlCVGlCLG9DQWpCUztBQWtCVEcsc0NBbEJTO0FBbUJUNUwsNEJBbkJTO0FBb0JUcU0sOEJBcEJTO0FBcUJURSw0QkFyQlM7QUFzQlQ5Tyw4QkF0QlM7QUF1QlRDLDRCQXZCUztBQXdCVDhQLG9DQXhCUztBQXlCVEksMEJBekJTO0FBMEJUSSwwQ0ExQlM7QUEyQlQvTCxvQkEzQlM7QUE0QlRSLGdDQTVCUztBQTZCVDROLDBDQTdCUztBQThCVHBDLDRCQTlCUztBQStCVDZDLG9DQS9CUztBQWdDVFMsa0NBaENTO0FBaUNUTixzQ0FqQ1M7QUFrQ1RLLHNDQWxDUztBQW1DVEcsZ0NBbkNTO0FBb0NUSyw0QkFwQ1M7QUFxQ1RHLHdDQXJDUztBQXNDVEMsc0JBdENTO0FBdUNUbkk7QUF2Q1MsQ0FBYjs7a0JBMENlWCxJIiwiZmlsZSI6Im5hLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudFwiO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tIFwiLi9jb3JlL2V4dGVuc2lvblwiO1xuaW1wb3J0IGRlcGVuZGVuY3kgZnJvbSBcIi4vY29yZS9kZXBlbmRlbmN5XCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vY29yZS9yb3V0ZVwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuL2NvcmUvc3RhdGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL3N0YXRpYy9kZWZpbmVkXCI7XG5cbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uXG57XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGlmIChOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IChrZXkpID0+IHRoaXMuY29uZmlndXJhdGlvbltrZXldO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWJ1ZzogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uO1xuICAgICAgICB0aGlzLmV4dGVuc2lvbi5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxufVxuXG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xuIiwiXG5cbi8qKlxuICogTG9jYWxTdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gb3B0aW9uXG4gKiBAcmV0dXJucyB7e3NldDogKFN0b3JhZ2Uuc2V0fCopLCBnZXQ6IChTdG9yYWdlLmdldHwqKSwga2V5OiAoU3RvcmFnZS5rZXl8KiksIGNsZWFyOiAoU3RvcmFnZS5jbGVhcnwqKSwgcmVtb3ZlOiAoU3RvcmFnZS5yZW1vdmV8KiksIGxlbmd0aDogKFN0b3JhZ2UubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb29raWUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KG5hbWUpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFNldCBDb29raWUga2V5LCB2YWx1ZVxuICogIGV4cGlyZXMgLSBtcywgRGF0ZSwgLTEsIDBcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSB7e319IG9wdGlvbnMgICB7ZXhwaXJlczogMCwgcGF0aDogJy8nLCBkb21haW46ICdzaXRlLmNvbScsIHNlY3VyZTogZmFsc2V9XG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMsIHR5cGVKc29uID0gdHJ1ZSlcbntcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXG4gICAgaWYgKENvb2tpZS50eXBlSnNvbikge31cbiAgICBpZiAodHlwZUpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBsZXQgZGF0YSA9IG5hbWUgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgcGFyc2VJbnQob3B0aW9ucy5leHBpcmVzKSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSArPSBlbmNvZGUob3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuY29va2llID0gZGF0YTtcbn07XG5cbi8qKlxuICogR2V0IENvb2tpZSB2YWx1ZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGdldCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlSnNvbiA9IHRydWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXG4gICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuICAgICkpO1xuXG4gICAgbGV0IGRhdGEgPSBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xuXG5cbiAgICBpZiAoQ29va2llLmRhdGFKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbiAmJiBkYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuXG4gICAgcmV0dXJuIGRhdGFcbn07XG5cbi8qKlxuICogUmVtb3ZlIENvb2tpZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gb3B0aW9uXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge2V4cGlyZXM6IC0xfTtcbiAgICBzZXQobmFtZSwgXCJcIiwgb3B0aW9uKTtcbn07XG5cbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICcnO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCB0byB1cmkgZ2V0IHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICAgIGV4YW1wbGU6IHtleHBpcmVzOiAwLCBwYXRoOiAnLycsIGRvbWFpbjogJ215LXNpdGUuY29tJywgc2VjdXJlOiBmYWxzZX1cbiAqIEByZXR1cm5zIHtzdHJpbmd9ICAgICAgICBleGFtcGxlOiBcImV4cGlyZXM9MDtwYXRoPS87ZG9tYWluPXNpdGUuY29tO3NlY3VyZT1mYWxzZVwiO1xuICovXG5jb25zdCBlbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAoc3RyID8gJzsnIDogJycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgICAgICkpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge30sXG4gICAgICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpO1xuXG4gICAgICAgIGNvb2tpZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBkYXRhW3BhcnRzWzBdLnRyaW0oKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn07XG5cbkNvb2tpZS5zZXQgPSBzZXQ7XG5Db29raWUuZ2V0ID0gZ2V0O1xuQ29va2llLnJlbW92ZSA9IHJlbW92ZTtcbkNvb2tpZS5jbGVhciA9IGNsZWFyO1xuQ29va2llLmVuY29kZSA9IGVuY29kZTtcbkNvb2tpZS5kZWNvZGUgPSBkZWNvZGU7XG5Db29raWUuZGF0YUpzb24gPSB0cnVlO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGVuY29kZSxcbiAgICBkZWNvZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkICYmIHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbil7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgIH1cbn07XG5cbmNvbXBvbmVudC5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSlcbntcbiAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICBPYmplY3Qua2V5cyhjb21wb25lbnQubGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gY29tcG9uZW50Lmxpc3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChjb21wLmNvbXBsZXRlICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb21wb25lbnQubGlzdCA9IHt9O1xuXG5jb21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGwsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb250ZXh0OiBmYWxzZSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiIsImltcG9ydCBsb2FkSlMgZnJvbSAnLi4vc3RhdGljL2xvYWRKUyc7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cblxuY29uc3QgZGVwZW5kZW5jeSA9IGZ1bmN0aW9uIChjb25maWcsIGZvcmNlID0gdHJ1ZSlcbntcbiAgICBjb25zdCBzb3VyY2VzID0gbWVyZ2Uoe1xuICAgICAgICBjc3M6IFtdLFxuICAgICAgICBqczogW10sXG4gICAgICAgIGVsZW1lbnRzOiBbXSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9LCBjb25maWcpO1xuXG4gICAgaWYgKGZvcmNlKVxuICAgICAgICBkZXBlbmRlbmN5LmxvYWQoc291cmNlcyk7XG5cbiAgICByZXR1cm4gc291cmNlcztcbn07XG5cbmRlcGVuZGVuY3kubG9hZCA9IChzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgbWF4ID1cbiAgICAgICAgKHNvdXJjZXMuY3NzID8gc291cmNlcy5jc3MubGVuZ3RoIDogMCkgK1xuICAgICAgICAoc291cmNlcy5qcyA/IHNvdXJjZXMuanMubGVuZ3RoIDogMCk7XG4gICAgY29uc3Qgc3JjcyA9IG1lcmdlKHtjc3M6IHNvdXJjZXMuY3NzfSx7anM6IHNvdXJjZXMuanN9KTtcblxuICAgIGxldCBpID0gMDtcbiAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZCA9IGtleSA9PT0gJ2NzcycgPyBsb2FkQ1NTIDogbG9hZEpTO1xuICAgICAgICBzcmNzW2tleV0uZm9yRWFjaCgoc3JjKSA9PiB7XG4gICAgICAgICAgICAgICAgc291cmNlcy5lbGVtZW50cy5wdXNoKGxvYWQoc3JjLCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSArKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2VzLmNvbXBsZXRlKHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgIH0sIHNvdXJjZXMuZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5kZXBlbmRlbmN5LnJlbW92ZSA9IGZ1bmN0aW9uIChzb3VyY2VzKVxue1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc291cmNlcyAmJiBzb3VyY2VzLmVsZW1lbnRzID8gc291cmNlcy5lbGVtZW50cyA6IFtdO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgc291cmNlcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3k7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGV4dGVuc2lvbiA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBleHRlbnNpb24ubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24uY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCAmJiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pe1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuc2lvbi5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICB9XG59O1xuXG5leHRlbnNpb24ucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpXG57XG4gICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZXh0ZW5zaW9uLmxpc3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcCA9IGV4dGVuc2lvbi5saXN0W2tleV07XG4gICAgICAgICAgICBpZiAoY29tcC5jb21wbGV0ZSAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLmxpc3QgPSB7fTtcblxuZXh0ZW5zaW9uLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29udGV4dDogZmFsc2UsXG4gICAgfSwgY29uZmlnKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBleHRlbnNpb247XG4iLCJcbmNvbnN0IHJvdXRlID0gZnVuY3Rpb24gKHVybCwgY29tcG9uZW50KSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1cmwpIHtcbiAgICAgICAgdGhpc1tjb21wb25lbnRdKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuLi9zdGF0aWMvdHlwZU9mJztcblxuXG5jb25zdCBzdGF0ZSA9IGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID8gc3RhdGUuZ2V0KGtleSkgOiBzdGF0ZS5zZXQoa2V5LCBkYXRhKTtcbn07XG5cbnN0YXRlLmNhbGxiYWNrID0ge307XG5zdGF0ZS5zb3VyY2UgPSBjcmVhdGVTb3VyY2UoKTtcbnN0YXRlLnNvdXJjZWRhdGEgPSB7fTtcbnN0YXRlLmFjdGlvbiA9IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgc3RhdGUuY2FsbGJhY2tba2V5XSA9IGNhbGxiYWNrO1xufTtcblxuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0eXBlT2Yoa2V5LCAnc3RyaW5nJylcbiAgICAgICAgPyBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gfHwgc3RhdGUuc291cmNlW2tleV1cbiAgICAgICAgOiBrZXkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IHN0YXRlLnNvdXJjZWRhdGEgO1xufTtcblxuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNldENhc2Uoe1trZXldOiBwYXlsb2FkfSk7XG59O1xuXG5zdGF0ZS5zZXRDYXNlID0gZnVuY3Rpb24gKHBheWxvYWQgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzdGF0ZS5zb3VyY2Vba2V5XSA9IHN0YXRlLnNvdXJjZWRhdGFba2V5XSA9IHBheWxvYWRba2V5XTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZSAocGF5bG9hZCA9IHt9KSB7XG4gICAgc3RhdGUuc291cmNlZGF0YSA9IHBheWxvYWQ7XG4gICAgcmV0dXJuIG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OihvYmosIHByb3AsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY2FsbGJhY2tbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYWxsYmFja1twcm9wXS5jYWxsKHt9LCBzdGF0ZS5zb3VyY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XG4iLCJjb25zdCBEYXRldGltZSA9IHt9O1xuRGF0ZXRpbWUuTVNfSU5fREFZID0gODY0ZTU7XG5EYXRldGltZS5NU19JTl9IT1VSID0gMzZlNTtcbkRhdGV0aW1lLk1TX0lOX01JTiA9IDZlNDtcblxuLyoqXG4gKiBSZXR1cm4gdGltZXN0YW1wXG4gKiBAcGFyYW0gZGF0ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuRGF0ZXRpbWUudGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZS5nZXRUaW1lKCkgOiAobmV3IERhdGUpLmdldFRpbWUoKVxufTtcblxuLyoqXG4gKiBBZGQgZGF5cyB0byBzb21lIGRhdGVcbiAqIEBwYXJhbSBkYXkgICAgICAgICAgIG51bWJlciBvZiBkYXlzLiAwLjA0IC0gMSBob3VyLCAwLjUgLSAxMiBob3VyLCAxIC0gMSBkYXlcbiAqIEBwYXJhbSBkYXRlU3RhcnQgICAgIHR5cGUgRGF0ZSwgc3RhcnQgZGF0ZVxuICogQHJldHVybnMgeyp9ICB0eXBlIERhdGVcbiAqL1xuRGF0ZXRpbWUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXksIGRhdGVTdGFydCkge1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlU3RhcnQgPyBuZXcgRGF0ZShkYXRlU3RhcnQpIDogbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5ICogODY0MDAwMDApKTtcbiAgICByZXR1cm4gZGF0ZTtcbn07XG5cbi8qKlxuICogVGltZSBiZXR3ZWVuIERhdGVzXG4gKiA8cHJlPlxuICogICAgIHZhciBmcm9tID0gbmV3IERhdGUoJzIwMTYtMDgtMDEgMjA6MzAnKTtcbiAqICAgICB2YXIgdG8gPSBuZXcgRGF0ZSgnMjAxNi0wOC0xMCAwNzo1NScpO1xuICogICAgIC5EYXRlLmJldHdlZW5EYXRlcyhmcm9tLCB0byk7IC8vIE9iamVjdCB7IGRheTogOCwgaG91cjogMTEsIG1pbnV0ZTogMjUgfVxuICogPC9wcmU+XG4gKiBAcGFyYW0gZGF0ZUZyb21cbiAqIEBwYXJhbSBkYXRlVG9cbiAqIEByZXR1cm5zIHt7ZGF5OiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXJ9fVxuICovXG5EYXRldGltZS5iZXR3ZWVuRGF0ZXMgPSBmdW5jdGlvbiAoZGF0ZUZyb20sIGRhdGVUbykge1xuICAgIGRhdGVGcm9tID0gZGF0ZUZyb20gfHwgbmV3IERhdGUoKTtcbiAgICBkYXRlVG8gPSBkYXRlVG8gfHwgbmV3IERhdGUoKTtcbiAgICBsZXQgZGlmZk1zID0gKGRhdGVUbyAtIGRhdGVGcm9tKSxcbiAgICAgICAgZGlmZkRheXMgPSBNYXRoLnJvdW5kKGRpZmZNcyAvIDg2NGU1KSxcbiAgICAgICAgZGlmZkhycyA9IE1hdGgucm91bmQoKGRpZmZNcyAlIDg2NGU1KSAvIDM2ZTUpLFxuICAgICAgICBkaWZmTWluID0gTWF0aC5yb3VuZCgoKGRpZmZNcyAlIDg2NGU1KSAlIDM2ZTUpIC8gNmU0KTtcbiAgICByZXR1cm4ge2RheTogZGlmZkRheXMsIGhvdXI6IGRpZmZIcnMsIG1pbnV0ZTogZGlmZk1pbn07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgZGF0ZSBzdHJpbmcgdG8gRGF0ZSBPYmplY3RcbiAqIHl5IC0gdGhlIHllYXIgYXMgYSB0d28tZGlnaXQgbnVtYmVyICggMDAgdG8gOTkgKTtcbiAqIFlZIC0gdGhlIHllYXIgYXMgYSBmb3VyLWRpZ2l0IG51bWJlciAoIDE5MDAtOTk5OSApO1xuICogbW0gLSB0aGUgbW9udGggYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDEyICkgKCAxIHRvIDEyICk7XG4gKiBkZCAtIHRoZSBkYXkgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDMxICkgKCAxIHRvIDMxICk7XG4gKiBoaCBISCAtIHRoZSBob3VyICggMDAgdG8gMTEgKSAoIDAwIHRvIDIzICkgKCAxIHRvIDEyICkgKCAwIHRvIDIzICk7XG4gKiBpaSAtIHRoZSBtaW51dGUgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBzcyAtIHRoZSBzZWNvbmQgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBhYSAtIGRpc3BsYXlzIGFtIChmb3IgdGltZXMgZnJvbSBtaWRuaWdodCB1bnRpbCBub29uKSBhbmQgcG0gKGZvciB0aW1lcyBmcm9tIG5vb24gdW50aWwgbWlkbmlnaHQpO1xuICpcbiAqIC5zdHJUb0RhdGUoJzEyLjA1LjIwMTcgMTI6MzA6MjUnLCAnbW0uZGQuWVkgSEg6aWk6c3MnKVxuICogLnN0clRvRGF0ZSgnMTIvMDUvMjAxNycsICdtbS9kZC9ZWScpXG4gKiAuc3RyVG9EYXRlKCcxMi81LzIwMTcnLCAnbW0vZGQvWVknLCB0cnVlKVxuICogQHBhcmFtIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXRcbiAqIEBwYXJhbSB1dGNcbiAqIEByZXR1cm5zIHtEYXRlfVxuICovXG5EYXRldGltZS5zdHJUb0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCB1dGMpIHtcbiAgICBjb25zdCBzZXQgPSBbMCwgMCwgMSwgMCwgMCwgMF07XG4gICAgY29uc3QgdGVtcCA9IGRhdGUubWF0Y2goL1thLXpBLVpdK3xbMC05XSsvZyk7XG4gICAgY29uc3QgbWFzayA9IGZvcm1hdC5tYXRjaCgvW2EtekEtWl17Mn0vZyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAobWFza1tpXSkge1xuICAgICAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgICAgICAgc2V0WzJdID0gdGVtcFtpXSB8fCAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgc2V0WzFdID0gKHRlbXBbaV0gfHwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgICAgICAgc2V0WzBdID0gdGVtcFtpXSAqIDEgKyAodGVtcFtpXSA+IDUwID8gMTkwMCA6IDIwMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgICAgICAgICBzZXRbNF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcbiAgICAgICAgICAgICAgICBzZXRbMF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSBzZXRbM10gJSAxMiArICgodGVtcFtpXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyA/IDAgOiAxMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgICAgICBzZXRbNV0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZXRpbWU7XG5cbi8qXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTVNfSU5fREFZOiBEYXRldGltZS5NU19JTl9EQVksXG4gICAgTVNfSU5fSE9VUjogRGF0ZXRpbWUuTVNfSU5fSE9VUixcbiAgICBNU19JTl9NSU46IERhdGV0aW1lLk1TX0lOX01JTixcbiAgICB0aW1lOiBEYXRldGltZS50aW1lLFxuICAgIGFkZERheXM6IERhdGV0aW1lLmFkZERheXMsXG4gICAgYmV0d2VlbkRhdGVzOiBEYXRldGltZS5iZXR3ZWVuRGF0ZXMsXG4gICAgc3RyVG9EYXRlOiBEYXRldGltZS5zdHJUb0RhdGUsXG59O1xuKi9cbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcblxuZnVuY3Rpb24gRG9tIChzZWxlY3Rvcikge1xuICAgIGNvbnN0ICQgPSB7XG4gICAgICAgIHNlbGVjdG9yOiB0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSA/IHNlbGVjdG9yIDogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWQ6IGlzTm9kZShzZWxlY3RvcikgPyBbc2VsZWN0b3JdIDogcXVlcnlBbGwoc2VsZWN0b3IpLFxuICAgIH07XG5cbiAgICBjb25zdCBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgcXVlcnlBbGwoc3JjKS5tYXAoX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTm9kZShzcmMpICYmIHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzcmMuc3R5bGUuZGlzcGxheSA/IHNyYy5zdHlsZS5kaXNwbGF5IDogZ2V0Q29tcHV0ZWRTdHlsZShzcmMpLmRpc3BsYXk7XG4gICAgICAgICAgICBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID0gKCFzdHlsZSB8fCBzdHlsZSA9PT0gJ25vbmUnKSA/ICdibG9jaycgOiBzdHlsZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLm9uZSA9ICgpID0+ICQuc2VsZWN0ZWQgJiYgJC5zZWxlY3RlZC5sZW5ndGggPyAkLnNlbGVjdGVkWzBdIDogZmFsc2U7XG4gICAgJC5hbGwgPSAoKSA9PiAkLnNlbGVjdGVkO1xuICAgICQuYXR0ciA9IChuYW1lLCB2YWx1ZSkgPT4gZGVmaW5lZCh2YWx1ZSkgPyBhdHRyKCQub25lKCksIG5hbWUsIHZhbHVlKSA6IGF0dHIoJC5vbmUoKSwgbmFtZSk7XG4gICAgJC5pbmplY3QgPSAoZGF0YSwgYXBwZW5kLCB0bykgPT4gaW5qZWN0KCQub25lKCksIGRhdGEsIGFwcGVuZCwgdG8pO1xuICAgICQuYXBwZW5kID0gKGRhdGEpID0+IGluamVjdCgkLm9uZSgpLCBkYXRhLCB0cnVlKTtcbiAgICAkLnNlYXJjaCA9IChhdHRyLCBmcm9tKSA9PiBzZWFyY2goJC5vbmUoKSwgYXR0ciwgZnJvbSk7XG4gICAgJC5wYXJlbnQgPSAoKSA9PiAkLm9uZSgpLnBhcmVudE5vZGU7XG4gICAgJC5jaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgJC5vbmUoKVxuICAgIH07XG4gICAgJC5wb3NpdGlvbiA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpO1xuICAgICQueCA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLng7XG4gICAgJC55ID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkueTtcbiAgICAkLndpZHRoID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkud2lkdGg7XG4gICAgJC5oZWlnaHQgPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS5oZWlnaHQ7XG4gICAgJC5yZW1vdmUgPSAoKSA9PiAkLm9uZSgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJC5vbmUoKSk7XG4gICAgJC5zaG93ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZShzcmMpO1xuICAgICAgICBjc3Moc3JjLCB7ZGlzcGxheTogc3JjICYmIHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gPyBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddIDogJ2Jsb2NrJ30pO1xuICAgIH07XG4gICAgJC5oaWRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZShzcmMpO1xuICAgICAgICBjc3Moc3JjLCB7ZGlzcGxheTogJ25vbmUnfSk7XG4gICAgfTtcbiAgICAkLnRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gJC5vbmUoKTtcbiAgICAgICAgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgcXVlcnlBbGwoc3JjKS5tYXAoRG9tLnRvZ2dsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlKHNyYykpIHtcbiAgICAgICAgICAgIGlmIChzcmMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSBEb20uc2hvdyhzcmMpO1xuICAgICAgICAgICAgZWxzZSBEb20uaGlkZShzcmMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAkLm9uID0gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkgPT4gb24oJC5vbmUoKSwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKTtcblxuICAgIHJldHVybiAkO1xufVxuXG5Eb20uYXR0ciA9IGF0dHI7XG5Eb20uY3NzID0gY3NzO1xuRG9tLmxvYWRlZCA9IGRvbUxvYWRlZDtcbkRvbS5pbmplY3QgPSBpbmplY3Q7XG5Eb20uc3RyMm5vZGUgPSBzdHIybm9kZTtcbkRvbS5zZWFyY2ggPSBzZWFyY2g7XG5Eb20ucXVlcnlBbGwgPSBxdWVyeUFsbDtcbkRvbS5xdWVyeSA9IHF1ZXJ5O1xuRG9tLmNyZWF0ZSA9IGNyZWF0ZUVsZW1lbnQ7XG5Eb20uZnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudDtcbkRvbS5ub2RlMnN0ciA9IG5vZGUyc3RyO1xuRG9tLnN0cjJub2RlID0gc3RyMm5vZGU7XG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsIi8qKlxuICogRW1tZXQgc3ludGF4IGZvciBjcmVhdGluZyBET00gZWxlbWVudHNcbiAqXG4gKiBTeW50YXhcbiAqICAgY29uc3QgZW1tZXQgPSBFbW1ldCgpO1xuICogICBlbW1ldCgnLnRhYmxlID4gZGl2e2xlZnR9ICsgZGl2KGNsYXNzPVwidGV4dC1yaWdodFwiKXtyaWdodH0nKVxuICogICB0YWcjaWQuY2xhc3NlcyhhdHRyaWJ1dGVzPVwiXCIpe2lubmVyIHRleHR9ID4gLm5lc3RlZCBeIC5iYWNrZWQudXAub25lICsgLnNpYmxpbmdcbiAqXG4gKiBBcmd1bWVudHNcbiAqICAgLmVtbWV0KCBzeW50YXggOiBzdHJpbmcsIHJldHVybk9ubHlIVE1MIDogYm9vbGVhbiApXG4gKlxuICogQG5hbWVzcGFjZSBFbW1ldFxuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB0ZXh0ICAgICAgICAgIHN5bnRheFxuICogQHBhcmFtIGh0bWxPbmx5ICAgICAgcmV0dXJuT25seUhUTUxcbiAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAqL1xuY29uc3QgRW1tZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0ICB0ZW1wSW5uZXJUZXh0cyA9IFtdO1xuICAgIGxldCAgdGVtcEVzY2FwZWQgPSBbXTtcbiAgICBjb25zdCByZSA9IHt9O1xuXG4gICAgcmUuZXhjbHVkZXMgPSBcIihbXlxcXFwuI1xcXFwoXFxcXHtdKylcIjtcbiAgICByZS5jbGFzc2VzID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIgKyByZS5leGNsdWRlcywgXCJnXCIpO1xuICAgIHJlLmlkID0gbmV3IFJlZ0V4cChcIiNcIiArIHJlLmV4Y2x1ZGVzLCBcImdcIik7XG4gICAgcmUudGFnID0gbmV3IFJlZ0V4cChcIl5cIiArIHJlLmV4Y2x1ZGVzKTtcbiAgICByZS5pbmRleGVzID0gLyguKz8pKD58XFwrfFxcXnwkKS9nO1xuICAgIHJlLmVzY2FwZSA9IC8oXCJ8JykoW15cXDFdKj8pXFwxL2c7XG4gICAgcmUuaW5uZXJUZXh0ID0gL1xceyhbXn1dKj8pfS9nO1xuICAgIHJlLmF0dHJzID0gL1xcKChbXlxcKV0qKVxcKS9nO1xuXG4gICAgY29uc3QgZW1tZXQgPSBmdW5jdGlvbiAodGV4dCwgaHRtbE9ubHkpIHtcbiAgICAgICAgbGV0IHRyZWUgPSBlbGVtZW50KCksXG4gICAgICAgICAgICBjdXJyZW50ID0gdHJlZSxcbiAgICAgICAgICAgIGxhc3RFbGVtZW50ID0gdHJlZSxcbiAgICAgICAgICAgIGNvbW1hbmRUZXh0ID0gdGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgY29udmVydENvbGxlY3Rpb24gPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNyYy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNyY1swXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgICB0ZW1wSW5uZXJUZXh0cyA9IFtdO1xuICAgICAgICB0ZW1wRXNjYXBlZCA9IFtdO1xuICAgICAgICBjb21tYW5kVGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UocmUuZXNjYXBlLCBmdW5jdGlvbiAoZnVsbCwgcXVvdGVzLCBlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wRXNjYXBlZC5wdXNoKGVzY2FwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlxcXCJcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZShyZS5pbm5lclRleHQsIGZ1bmN0aW9uIChmdWxsLCBpbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wSW5uZXJUZXh0cy5wdXNoKGlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwie31cIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UocmUuaW5kZXhlcywgZnVuY3Rpb24gKGZ1bGwsIGVsZW1lbnRUZXh0LCBzcGxpdHRlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQobGFzdEVsZW1lbnQgPSBlbGVtZW50KGVsZW1lbnRUZXh0KSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSBcIj5cIilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGxhc3RFbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNwbGl0dGVyID09PSBcIl5cIilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJlc3VsdCA9IHRyZWUuY2hpbGRyZW4ubGVuZ3RoID4gMVxuICAgICAgICAgICAgPyB0cmVlLmNoaWxkcmVuXG4gICAgICAgICAgICA6IHRyZWUuY2hpbGRyZW5bMF07XG5cbiAgICAgICAgcmV0dXJuIGh0bWxPbmx5XG4gICAgICAgICAgICA/IHRyZWUuaW5uZXJIVE1MXG4gICAgICAgICAgICA6IChyZXN1bHQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiA/IGNvbnZlcnRDb2xsZWN0aW9uKHJlc3VsdCkgOiByZXN1bHQpO1xuICAgIH07XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgbGV0IGNvbW1hbmRUZXh0ID0gdGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgbWF0Y2hfdGFnID0gY29tbWFuZFRleHQubWF0Y2gocmUudGFnKSxcbiAgICAgICAgICAgIG1hdGNoX2lkID0gY29tbWFuZFRleHQubWF0Y2gocmUuaWQpLFxuICAgICAgICAgICAgbWF0Y2hfY2xhc3NlcyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmNsYXNzZXMpLFxuICAgICAgICAgICAgbWF0Y2hfYXR0cnMgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5hdHRycyksXG4gICAgICAgICAgICBtYXRjaF9pbm5lclRleHQgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5pbm5lclRleHQpLFxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobWF0Y2hfdGFnID8gbWF0Y2hfdGFnWzBdIDogXCJkaXZcIik7XG5cbiAgICAgICAgaWYgKG1hdGNoX2lkKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gbWF0Y2hfaWQucG9wKCkucmVwbGFjZShyZS5pZCwgXCIkMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9jbGFzc2VzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG1hdGNoX2NsYXNzZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lLnNsaWNlKDEpXG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9pbm5lclRleHQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IG1hdGNoX2lubmVyVGV4dC5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmVzY2FwZSh0ZW1wSW5uZXJUZXh0cy5zaGlmdCgpKTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2F0dHJzKSB7XG4gICAgICAgICAgICBtYXRjaF9hdHRycy5tYXAoZnVuY3Rpb24gKGNodW5rUGFyYW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rUGFyYW0ucmVwbGFjZShyZS5hdHRycywgXCIkMVwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgY2h1bmsubWFwKGZ1bmN0aW9uIChhdHRyUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJQYXJhbS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF0dHIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKHVuZXNjYXBlKGF0dHIuam9pbihcIj1cIikpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gZW1tZXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbW1ldDtcbiIsIlxuY29uc3QgRXZlbnRNYW5hZ2VyID0ge1xuXG4gICAgZXZlbnRGcmFnbWVudDogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgIHZlcnNpb246ICcwLjAuMicsXG4gICAgZXZlbnRzVHlwZToge30sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGV0YWlsc1xuICAgICAqIEByZXR1cm5zIHtDdXN0b21FdmVudH1cbiAgICAgKi9cbiAgICBhZGRFdmVudDogZnVuY3Rpb24obmFtZSwgZGV0YWlscykge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7ZGV0YWlsOiBkZXRhaWxzfSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlscyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkZXRhaWxzKVxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZXZlbnRba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlIG9uIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICogQHJldHVybnMge3t0eXBlOiAqLCBsaXN0ZW5lcjogKiwgdXNlQ2FwdHVyZTogKCp8Ym9vbGVhbil9fVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSl7XG4gICAgICAgIHVzZUNhcHR1cmUgPSB1c2VDYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0gaW5zdGFuY2VvZiBDdXN0b21FdmVudClcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LmRpc3BhdGNoRXZlbnQoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWFuYWdlcjtcbiIsIi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldFxuICAgICAgICBrZXksXG4gICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucy5kYXRhKVxuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBOYW1lc3BhY2VBcHBsaWNhdGlvbiBmcm9tIFwiLi9OYW1lc3BhY2VBcHBsaWNhdGlvblwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwiLi9jb29raWVcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBEYXRldGltZSBmcm9tIFwiLi9kYXRldGltZVwiO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmltcG9ydCBFbW1ldCBmcm9tIFwiLi9lbW1ldFwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuL2h0dHAtcmVxdWVzdFwiO1xuaW1wb3J0IERvbSBmcm9tIFwiLi9kb21cIjtcblxuXG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5VdGlsID0gVXRpbDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Db29raWUgPSBDb29raWU7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uU3RvcmFnZSA9IFN0b3JhZ2U7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRGF0ZXRpbWUgPSBEYXRldGltZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5FdmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uVGltZXIgPSBUaW1lcjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5FbW1ldCA9IEVtbWV0O1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLmh0dHBSZXF1ZXN0ID0gaHR0cFJlcXVlc3Q7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRG9tID0gRG9tO1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5cblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGFkZFByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUoISFhZGRQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3JjLmJpbmQoe30pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknIHx8IHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNyYykpO1xuICAgICAgICBpZiAodHlwZU9mKGFkZFByb3BlcnRpZXMsICdvYmplY3QnKSB8fCB0eXBlT2YoYWRkUHJvcGVydGllcywgJ2FycmF5JykpXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhZGRQcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb3B5W2tleV0gPSBhZGRQcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGRlZmluZWQoYWRkUHJvcGVydGllcykgPyBzcmMgKyBhZGRQcm9wZXJ0aWVzIDogc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5lYWNoLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbn07XG5cbmVhY2guZmlsdGVyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGNhbGxiYWNrLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFjaDtcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW10sIGxpc3QgPSB2YWx1ZXMgfHwgW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcbiAgICByZXR1cm4gdG1wO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYXRpb24pXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50KCk7XG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnRFbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9ICdyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcblxuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuXG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tQ2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tQ2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb21DYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbUNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihmcm9tQ2FsbGJhY2spLFxuICAgICAgICBmcm9tID0gZG9jIHx8IGRvY3VtZW50LFxuICAgICAgICBlbGVtZW50cyA9IFtdLFxuICAgICAgICBjYWxsYmFjayA9IG51bGw7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBjYWxsYmFjayA9IGZyb21DYWxsYmFjaztcbiAgICBlbHNlIGlmICh0eXBlID09PSBcInN0cmluZ1wiKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbUNhbGxiYWNrKTtcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiICYmIGlzTm9kZShmcm9tQ2FsbGJhY2spKVxuICAgICAgICBmcm9tID0gZnJvbUNhbGxiYWNrO1xuXG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBOVU1CRVJTfSBmcm9tIFwiLi9hYmNcIjtcblxuXG5leHBvcnQgY29uc3QgcmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgbWluID0gbWluIHx8IDA7XG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gaGV4IGNvbG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJy5zcGxpdCgnJyk7XG4gICAgbGV0IGksIGNvbG9yID0gJyMnO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2OyBpKyspXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICByZXR1cm4gY29sb3I7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgaWYgKHNpemUgPiAxNikge1xuICAgICAgICBsZXQgaSA9IE1hdGguY2VpbChzaXplLzE2KTtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pXG4gICAgICAgICAgICByZXMgKz0gQXJyYXkoMTYpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSAoQUJDICsgTlVNQkVSUykudG9Mb3dlckNhc2UoKS5zcGxpdCgnJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz1cbiAgICAgICAgICAgIGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgaSwgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcblxuICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxID8gZnJhZ21lbnQuZmlyc3RDaGlsZCA6IGZyYWdtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iLCJcblxuLyoqXG4gKiBBZGQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGpzb24gPSB0cnVlKSB7XG4gICAgaWYgKGpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwganNvbiA9IHRydWUpIHtcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKGpzb24gJiYgdmFsdWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKip0cnVlXG4gKiBSZW1vdmUgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICovXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSlcbn07XG5cbi8qKlxuICogR2V0IGl0ZW0gYnkgaW5kZXhcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3Qga2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KGluZGV4KVxufTtcblxuLyoqXG4gKiBXaGVuIGludm9rZWQsIHdpbGwgZW1wdHkgYWxsIGtleXMgb3V0IG9mIHRoZSBzdG9yYWdlLlxuICovXG5jb25zdCBjbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU3RvcmFnZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCBsZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoXG59O1xuXG4vKipcbiAqIExvY2FsU3RvcmFnZSB3cmFwcGVyXG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge3tzZXQ6IChTdG9yYWdlLnNldHwqKSwgZ2V0OiAoU3RvcmFnZS5nZXR8KiksIGtleTogKFN0b3JhZ2Uua2V5fCopLCBjbGVhcjogKFN0b3JhZ2UuY2xlYXJ8KiksIHJlbW92ZTogKFN0b3JhZ2UucmVtb3ZlfCopLCBsZW5ndGg6IChTdG9yYWdlLmxlbmd0aHwqKX19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RvcmFnZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBzZXQsXG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgbGVuZ3RoLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsIi8qKlxuICogU2ltcGxlIHRpbWVyIHJlYWxpc2UuIFJldHVybiBzZWxmLWluc3RhbmNlXG4gKiB0aW1lciA9IG5ldyAuVGltZXIoZnVuY3Rpb24oaXRlcmF0b3IsIHJlcGVhdCl7fSwgMTAwMCwgNSlcbiAqICBJbnN0YW5jZSBtZXRob2RzXG4gKiAgICAgIHRpbWVyLnJlcGVhdFxuICogICAgICB0aW1lci5pdGVyYXRvclxuICogICAgICB0aW1lci5zdGFydCAoKVxuICogICAgICB0aW1lci5zdG9wICgpXG4gKiAgICAgIHRpbWVyLnBhdXNlICgpXG4gKiAgICAgIHRpbWVyLnJlc2V0ICgpXG4gKiAgICAgIHRpbWVyLmNsZWFyICgpXG4gKiAgU3RhdGljIG1ldGhvZHNcbiAqICAgICAgVGltZXIudGltZW91dCAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkgOiB0aW1lb3V0SWRcbiAqICAgICAgVGltZXIuaW50ZXJ2YWwgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogaW50ZXJ2YWxJZFxuICogICAgICBUaW1lci50aW1lb3V0U3RvcCAodGltZW91dElkKVxuICogICAgICBUaW1lci5pbnRlcnZhbFN0b3AgKGludGVydmFsSWQpXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBkZWxheVxuICogQHBhcmFtIHJlcGVhdFxuICogQHBhcmFtIHRoaXNJbnN0YW5jZSAgaWYgbm90IHNldCwgdXNlcyBpbnN0YW5jZSBvZiBUaW1lclxuICogQHJldHVybnMge1dpbmRvdy5UaW1lcnxUaW1lcn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRpbWVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lcihjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKTtcblxuICAgIGRlbGF5ID0gZGVsYXkgIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KGRlbGF5KSA6IDUwMDtcbiAgICByZXBlYXQgPSByZXBlYXQgIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KHJlcGVhdCkgOiAwO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtzZWxmOiB0aGlzLCBjYWxsYmFjazogY2FsbGJhY2ssIGRlbGF5OiBkZWxheSwgcmVwZWF0OiByZXBlYXR9O1xuXG4gICAgbGV0IGh0ID0gbnVsbDtcbiAgICBjb25zdCBoYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uZmlnLnNlbGYuaXRlcmF0b3IrKztcbiAgICAgICAgaWYgKGNvbmZpZy5yZXBlYXQgIT09IDAgJiYgY29uZmlnLnJlcGVhdCA8PSBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGNvbmZpZy5zZWxmLnN0b3AoKTtcbiAgICAgICAgY29uZmlnLmNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHRoaXMsIGNvbmZpZy5zZWxmLml0ZXJhdG9yLCBjb25maWcucmVwZWF0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5yZXBlYXQgPT09IDAgfHwgY29uZmlnLnJlcGVhdCA+IGNvbmZpZy5zZWxmLml0ZXJhdG9yKVxuICAgICAgICAgICAgaHQgPSBzZXRJbnRlcnZhbChoYywgY29uZmlnLmRlbGF5KTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGNvbmZpZy5yZXBlYXQ7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9O1xuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKVxuICAgIH07XG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IDBcbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaHQpXG4gICAgfTtcbn07XG5cblRpbWVyLnRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIudGltZW91dFN0b3AgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuaW50ZXJ2YWxTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtleHRlbmRSZWN1cnNpdmV9ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtyYW5kb21Db2xvciwgcmFuZG9tSXRlbSwgcmFuZG9tTnVtYmVyLCByYW5kb21TdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFV0aWwgPSB7XG4gICAgYXR0cixcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50LFxuICAgIGNzcyxcbiAgICBkb21Mb2FkZWQsXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHNlYXJjaCxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=