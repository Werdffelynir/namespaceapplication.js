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

    this.config = function (key, value) {
        return value === undefined ? _this.configuration[key] : _this.configuration[key] = value;
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

    if (this.configuration.id) {
        Object.defineProperty(this, "root", {
            value: document.querySelector(this.configuration.id),
            writable: false
        });
    }

    this.component = _component2.default;
    this.component.register(this);

    this.extension = _extension2.default;
    this.extension.register(this);

    this.dependency = _dependency2.default;
    this.route = _route2.default;
    // this.state = state;

    NamespaceApplication.instance = this;
};

NamespaceApplication.component = _component2.default;
NamespaceApplication.extension = _extension2.default;
NamespaceApplication.MODE_DEBUG = 'debug';

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
 * @returns {{set: (Cookie.set|*), get: (Cookie.get|*), key: (Cookie.key|*), clear: (Cookie.clear|*), remove: (Cookie.remove|*), length: (Cookie.length|*)}}
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
 *  maxAge - s (year 31536000)
 *  SameSite=Strict|Lax
 * @param name
 * @param value
 * @param {{}} options   {expires: 0, path: '/', domain: 'site.com', secure: false, maxAge: 60*60*24*365, sameSite: '' }
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

    if (options.maxAge) {
        options['max-age'] = options.maxAge;
        delete options.maxAge;
    }
    if (options.sameSite) {
        options['samesite'] = options.sameSite;
        delete options.sameSite;
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
        if (data[key] !== undefined) str += ';' + key + '=' + encodeURIComponent(data[key]);
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

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _eventsNames = __webpack_require__(/*! ../event-manager/eventsNames */ "./src/event-manager/eventsNames.js");

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(config) {
    if (typeof config === 'string') {

        return component.list[config];
    } else {
        var comp = component.create(config);
        component.list[comp.id] = comp;

        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
        }

        if (typeof comp.template === 'string') {
            comp.template = (0, _str2node2.default)(comp.template);
        }

        if ((0, _isNode2.default)(comp.template)) {

            if (comp.template.querySelector('[data-node]')) comp.node = (0, _search2.default)('[data-node]', 'data-node', comp.template);

            if (comp.styles) setStyles(comp);

            attributesEventsHandler(comp, 'on', Object.keys(_eventsNames.EVENTS_NAMES_BASIC));
        }

        if (this instanceof NamespaceApplication) {
            injectComponent(comp, this);
            if (!comp.template && this.root) {
                var node = (0, _query2.default)('[data-component="' + comp.id + '"]', this.root);
                if (node) comp.template = node;
            }
        } else {
            if (NamespaceApplication.mode === NamespaceApplication.MODE_DEBUG) throw new Error('"Late Call": Component [' + comp.id + '] can t call completed() and injects');
        }

        if (typeof comp.complete === 'function' && !comp.completed && this instanceof NamespaceApplication) {
            comp.completed = true;
            comp.complete.call(comp, this);
        }
    }
};

component.register = function (instance) {
    if (instance instanceof NamespaceApplication) {
        Object.keys(component.list).forEach(function (key) {
            var comp = component.list[key];

            if (comp.complete && !comp.completed) {
                comp.completed = true;
                comp.complete.call(comp, instance);
                injectComponent(comp, instance);
            }
        });
    }
};

component.list = {};

component.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        props: null,
        styles: null,
        template: false,
        override: false,
        init: function init() {},
        complete: function complete() {},
        methods: {},
        node: {},
        initialized: false,
        completed: false
    }, config);
};

function attributesEventsHandler(comp, prefix, eventsNames) {
    var addEvent = function addEvent(elem, attr, eventName) {
        var method = elem.getAttribute(attr);
        if (typeof comp.methods[method] === "function") {
            elem.removeAttribute(attr);
            elem.addEventListener(eventName, function (e) {
                comp.methods[method].call(comp, e, e.target || e.currentTarget || e.path[0]);
            });
        }
    };

    eventsNames.forEach(function (eventName) {
        var attr = prefix + '-' + eventName;
        if (comp.template.querySelector('[' + attr + ']')) {
            Array.from(comp.template.querySelectorAll('[' + attr + ']')).forEach(function (elem) {
                addEvent(elem, attr, eventName);
            });
        } else if (comp.template.hasAttribute(attr)) {
            addEvent(comp.template, attr, eventName);
        }
    });
}

function injectComponent(comp, instance) {
    var nodes = (0, _queryAll2.default)('[data-component="' + comp.id + '"]', instance.root);

    if (nodes) nodes.forEach(function (node) {
        if (comp.props) {
            comp.props.forEach(function (prop) {
                if (node.hasAttribute(prop)) {
                    Object.defineProperty(comp, prop, {
                        value: node.getAttribute(prop),
                        writable: false
                    });
                    node.removeAttribute(prop);
                }
            });
        }
        if (node !== comp.template) (0, _inject2.default)(node, comp.template);
    });

    return comp;
}

function setStyles(comp, instance) {

    Object.keys(comp.styles).forEach(function (selector) {
        if (selector === 'template' && (0, _isNode2.default)(comp.template)) {
            Object.keys(comp.styles[selector]).forEach(function (key) {
                comp.template.style[key] = comp.styles[selector][key];
            });
        } else (0, _queryAll2.default)(selector, comp.template, function (node) {
            Object.keys(comp.styles[selector]).forEach(function (key) {
                node.style[key] = comp.styles[selector][key];
            });
        });
    });

    return comp;
}

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
state.create = createSource();
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
 * Datetime.strToDate('12.05.2017 12:30:25', 'mm.dd.YY HH:ii:ss')
 * Datetime.strToDate('12/05/2017', 'mm/dd/YY')
 * Datetime.strToDate('12/5/2017', 'mm/dd/YY', true)
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

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

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
    $.query = function (selector) {
        return $.one().querySelector(selector);
    };
    $.queryAll = function (selector) {
        return $.one().querySelectorAll(selector);
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
    $.coords = function () {
        var coords = $.one().getBoundingClientRect();
        return (0, _merge2.default)({ top: coords.top + pageYOffset, left: coords.left + pageXOffset }, coords);
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
Dom.position = _position2.default;

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

/***/ "./src/event-manager/eventsNames.js":
/*!******************************************!*\
  !*** ./src/event-manager/eventsNames.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EVENTS_NAMES = exports.EVENTS_NAMES = {
    copy: 'copy',
    cut: 'cut',
    paste: 'paste',
    abort: 'abort',
    blur: 'blur',
    cancel: 'cancel',
    canplay: 'canplay',
    canplaythrough: 'canplaythrough',
    change: 'change',
    click: 'click',
    close: 'close',
    contextmenu: 'contextmenu',
    cuechange: 'cuechange',
    dblclick: 'dblclick',
    drag: 'drag',
    dragend: 'dragend',
    dragenter: 'dragenter',
    dragleave: 'dragleave',
    dragover: 'dragover',
    dragstart: 'dragstart',
    drop: 'drop',
    durationchange: 'durationchange',
    emptied: 'emptied',
    ended: 'ended',
    error: 'error',
    focus: 'focus',
    input: 'input',
    invalid: 'invalid',
    keydown: 'keydown',
    keypress: 'keypress',
    keyup: 'keyup',
    load: 'load',
    loadeddata: 'loadeddata',
    loadedmetadata: 'loadedmetadata',
    loadstart: 'loadstart',
    mousedown: 'mousedown',
    mouseenter: 'mouseenter',
    mouseleave: 'mouseleave',
    mousemove: 'mousemove',
    mouseout: 'mouseout',
    mouseover: 'mouseover',
    mouseup: 'mouseup',
    mousewheel: 'mousewheel',
    pause: 'pause',
    play: 'play',
    playing: 'playing',
    progress: 'progress',
    ratechange: 'ratechange',
    reset: 'reset',
    resize: 'resize',
    scroll: 'scroll',
    seeked: 'seeked',
    seeking: 'seeking',
    select: 'select',
    stalled: 'stalled',
    submit: 'submit',
    suspend: 'suspend',
    timeupdate: 'timeupdate',
    toggle: 'toggle',
    volumechange: 'volumechange',
    waiting: 'waiting',
    wheel: 'wheel',
    auxclick: 'auxclick',
    gotpointercapture: 'gotpointercapture',
    lostpointercapture: 'lostpointercapture',
    pointerdown: 'pointerdown',
    pointermove: 'pointermove',
    pointerup: 'pointerup',
    pointercancel: 'pointercancel',
    pointerover: 'pointerover',
    pointerout: 'pointerout',
    pointerenter: 'pointerenter',
    pointerleave: 'pointerleave',
    selectstart: 'selectstart',
    selectionchange: 'selectionchange',
    animationend: 'animationend',
    animationiteration: 'animationiteration',
    animationstart: 'animationstart',
    transitionend: 'transitionend'
};

var EVENTS_NAMES_BASIC = exports.EVENTS_NAMES_BASIC = {
    blur: 'blur',
    change: 'change',
    click: 'click',
    dblclick: 'dblclick',
    drag: 'drag',
    dragend: 'dragend',
    dragenter: 'dragenter',
    dragleave: 'dragleave',
    dragover: 'dragover',
    dragstart: 'dragstart',
    drop: 'drop',
    focus: 'focus',
    input: 'input',
    load: 'load',
    mousedown: 'mousedown',
    mouseenter: 'mouseenter',
    mouseleave: 'mouseleave',
    mousemove: 'mousemove',
    mouseout: 'mouseout',
    mouseover: 'mouseover',
    mouseup: 'mouseup',
    mousewheel: 'mousewheel',
    scroll: 'scroll',
    select: 'select',
    submit: 'submit',
    wheel: 'wheel',
    transitionend: 'transitionend'
};

exports.default = EVENTS_NAMES;

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

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./src/session-storage/index.js");

var _sessionStorage2 = _interopRequireDefault(_sessionStorage);

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

var _str = __webpack_require__(/*! ./str */ "./src/str/index.js");

var _str2 = _interopRequireDefault(_str);

var _roxy = __webpack_require__(/*! ./roxy */ "./src/roxy/index.js");

var _roxy2 = _interopRequireDefault(_roxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.NamespaceApplication = _NamespaceApplication2.default;
window.NamespaceApplication.Util = _util2.default;
window.NamespaceApplication.Cookie = _cookie2.default;
window.NamespaceApplication.Storage = _storage2.default;
window.NamespaceApplication.SessionStorage = _sessionStorage2.default;
window.NamespaceApplication.Datetime = _datetime2.default;
window.NamespaceApplication.EventManager = _eventManager2.default;
window.NamespaceApplication.Timer = _timer2.default;
window.NamespaceApplication.Emmet = _emmet2.default;
window.NamespaceApplication.httpRequest = _httpRequest2.default;
window.NamespaceApplication.Dom = _dom2.default;
window.NamespaceApplication.Str = _str2.default;
window.NamespaceApplication.Roxy = _roxy2.default;

/***/ }),

/***/ "./src/roxy/index.js":
/*!***************************!*\
  !*** ./src/roxy/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Roxy = function Roxy(payload) {
    var actions = { default: null };
    var proxy = new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {
            if (actions[prop] && typeof actions[prop] === "function") actions[prop].call({}, prop, value, (0, _copy2.default)(proxy));

            if (typeof actions.default === "function") actions.default.call({}, prop, value, (0, _copy2.default)(proxy));

            obj[prop] = value;
            return true;
        }
    });

    return {
        set: function set(key, payload) {
            var result = void 0;

            if (typeof key === "function" && !payload) {
                result = key.call({}, proxy);
                if (result) this.fill(result);
            } else if (typeof payload === "function") {
                result = payload.call({}, proxy[key]);
                if (result) proxy[key] = result;
            } else proxy[key] = payload;

            return this;
        },
        action: function action(key, callback) {
            if (typeof key === "function" && !callback) {
                actions.default = key;
            } else actions[key] = typeof callback === "function" ? callback : null;

            return this;
        },
        get: function get(key) {
            return key ? proxy[key] : (0, _copy2.default)(proxy);
        },
        fill: function fill(payload, to) {
            Object.keys(payload).forEach(function (key) {
                if (to) {
                    if (!proxy[to]) proxy[to] = {};
                    proxy[to][key] = payload[key];
                } else {
                    proxy[key] = payload[key];
                }
            });

            return this;
        },

        proxy: proxy
    };
};

exports.default = Roxy;

/***/ }),

/***/ "./src/session-storage/index.js":
/*!**************************************!*\
  !*** ./src/session-storage/index.js ***!
  \**************************************/
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
    return window.sessionStorage.setItem(name, value);
};

/**
 * Get item by name
 * @param name
 * @param json
 */
var get = function get(name) {
    var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var value = window.sessionStorage.getItem(name);
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
    return window.sessionStorage.removeItem(name);
};

/**
 * Get item by index
 * @param index
 * @returns {string}
 */
var key = function key(index) {
    return window.sessionStorage.key(index);
};

/**
 * When invoked, will empty all keys out of the SessionStorage.
 */
var clear = function clear() {
    return window.sessionStorage.clear();
};

/**
 * Returns an integer representing the number of data items stored in the SessionStorage object.
 * @returns {number}
 */
var length = function length() {
    return window.sessionStorage.length;
};

/**
 * SessionStorage wrapper
 *
 * @param name
 * @param value
 * @returns {{set: (SessionStorage.set|*), get: (SessionStorage.get|*), key: (SessionStorage.key|*), clear: (SessionStorage.clear|*), remove: (SessionStorage.remove|*), length: (SessionStorage.length|*)}}
 * @constructor
 */
var SessionStorage = function SessionStorage(name, value) {
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

//
SessionStorage.set = set;
SessionStorage.get = get;
SessionStorage.key = key;
SessionStorage.clear = clear;
SessionStorage.remove = remove;
SessionStorage.size = length;

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = SessionStorage;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, instance) {
    if ((0, _isNode2.default)(src)) return src.cloneNode(true);

    if (Array.isArray(src)) return src.slice();

    if (typeof src === 'function') return src.bind(instance || {});

    if ((0, _typeOf2.default)(src, 'object')) {
        var result = {};
        Object.keys(src).forEach(function (key) {
            var value = src[key];
            result[key] = copy(value, typeof value === "function" ? src : {});
        });
        return result;
    }

    return src;
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

/***/ "./src/static/decodeGetQuery.js":
/*!**************************************!*\
  !*** ./src/static/decodeGetQuery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var decodeGetQuery = function decodeGetQuery(query) {
    var result = {};
    var pairs = (query[0] === '?' ? query.substr(1) : query).split('&');
    pairs.forEach(function (item, i) {
        var pair = pairs[i].split('=');
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });
    return result;
};

exports.default = decodeGetQuery;

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

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const each = function (list, callback, tmp) {
    if (list instanceof Array) {
        list.forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    } else if (isNode(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    }
};*/

var each = function each(list, callback, instance) {
    var type = (0, _typeOf2.default)(list);

    switch (type) {
        case 'array':
            list.forEach(function (i, v, a) {
                return callback.call(instance, i, v, a);
            });
            break;
        case 'object':
            if ((0, _isNode2.default)(list)) {
                if (list instanceof NodeList) each(Array.from(list), callback, instance);else each([list], callback, instance);
            } else Object.keys(list).forEach(function (key) {
                return callback.call(instance, list[key], key, list);
            });
            break;
        case 'string':
            each(list.split(""), callback, instance);
            break;
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

/***/ "./src/static/encodeGetQuery.js":
/*!**************************************!*\
  !*** ./src/static/encodeGetQuery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var encodeGetQuery = function encodeGetQuery(params) {
    var result = '';
    Object.keys(params).forEach(function (key) {
        result += (result.length ? '&' : '?') + key + '=' + encodeURIComponent(params[key]);
    });

    return result;
};

exports.default = encodeGetQuery;

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var findObjects = function findObjects(list, attr, attrValue) {
    var i = void 0,
        tmp = [];
    if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === "object") list = Object.values(list);

    if (Array.isArray(list)) for (i = 0; i < list.length; i++) {
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue) tmp.push(list[i]);
    }return tmp;
};

var finds = exports.finds = function finds(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp : false;
};

var find = exports.find = function find(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
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
// import isNode from "./isNode";


var position = function position(elem) {
    var data = { x: 0, y: 0, width: 0, height: 0 };
    if (typeof elem === 'string') elem = document.querySelector(elem);

    if (elem === window || elem === document) {
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

            data.top = rect.top + pageYOffset;
            data.left = rect.left + pageXOffset;
            data.right = rect.right + pageXOffset;
            data.bottom = rect.bottom + pageXOffset;
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
 * @param from
 * @param callback
 * @param thisInstance
 * @returns {Node|boolean}
 */
var query = function query(selector, from, callback, thisInstance) {
  var elements = (0, _queryAll2.default)(selector, from, callback, thisInstance);
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

var queryAll = function queryAll(selector, from, callback, thisInstance) {
    var elements = [];
    from = from || doc;

    if ((0, _isNode2.default)(selector)) return [selector];

    if ((0, _typeOf2.default)(from, 'string')) from = doc.querySelector(from);
    if (from) elements = [].slice.call(from.querySelectorAll(selector));

    if (callback) elements.forEach(function (element) {
        callback.call(thisInstance || {}, element);
    });

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

/***/ "./src/static/str2fragment.js":
/*!************************************!*\
  !*** ./src/static/str2fragment.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var str2fragment = function str2fragment(string) {
    if (document.createRange) return document.createRange().createContextualFragment(string);else {
        var i = void 0,
            fragment = document.createDocumentFragment(),
            container = document.createElement("div");

        container.innerHTML = string;
        while (i = container.firstChild) {
            fragment.appendChild(i);
        }return fragment;
    }
};

exports.default = str2fragment;

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

var _str2fragment = __webpack_require__(/*! ./str2fragment */ "./src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str2node = function str2node(string) {
    var result = void 0;
    var fragment = (0, _str2fragment2.default)(string);

    switch (fragment.childElementCount) {
        case 0:
            break;
        case 1:
            result = fragment.firstElementChild;
            break;
        default:
            var container = document.createElement("span");
            container.appendChild(fragment);
            result = container;
    }
    return result;
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

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeOf = function typeOf(value, type) {
    var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    var t = (0, _typeOfStrict2.default)(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') t = 'object';

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

//
Storage.set = set;
Storage.get = get;
Storage.key = key;
Storage.clear = clear;
Storage.remove = remove;
Storage.size = length;

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = Storage;

/***/ }),

/***/ "./src/str/index.js":
/*!**************************!*\
  !*** ./src/str/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _each = __webpack_require__(/*! ../static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalize = function capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

function Str(string) {
    var $ = {
        string: (0, _typeOf2.default)(string, 'string') ? string : '',
        length: string.length
    };

    $.capitalize = function () {
        return capitalize($.string);
    };
    $.upper = function () {
        return $.string.toUpperCase();
    };
    $.lower = function () {
        return $.string.toLowerCase();
    };
    $.padEnd = function (value) {
        return $.string.padEnd(value);
    };
    $.padStart = function (value) {
        return $.string.padStart(value);
    };
    $.each = function (callback) {
        return callback ? $.string.split('').forEach(callback) : $.string.split('');
    };

    return $;
}

Str.node2str = _node2str2.default;
Str.str2node = _str2node2.default;
Str.capitalize = capitalize;
Str.each = _each2.default;

exports.default = Str;

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

var _str2fragment = __webpack_require__(/*! ../static/str2fragment */ "./src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _encodeGetQuery = __webpack_require__(/*! ../static/encodeGetQuery */ "./src/static/encodeGetQuery.js");

var _encodeGetQuery2 = _interopRequireDefault(_encodeGetQuery);

var _decodeGetQuery = __webpack_require__(/*! ../static/decodeGetQuery */ "./src/static/decodeGetQuery.js");

var _decodeGetQuery2 = _interopRequireDefault(_decodeGetQuery);

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
    str2fragment: _str2fragment2.default,
    node2str: _node2str2.default,
    query: _query2.default,
    queryAll: _queryAll2.default,
    search: _search2.default,
    encodeGetQuery: _encodeGetQuery2.default,
    decodeGetQuery: _decodeGetQuery2.default,
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
    copy: _copy2.default,
    clone: _copy2.default
};

exports.default = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm94eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Vzc2lvbi1zdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMmZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0ci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiXSwibmFtZXMiOlsiTmFtZXNwYWNlQXBwbGljYXRpb24iLCJjb25maWciLCJpbnN0YW5jZSIsImtleSIsInZhbHVlIiwidW5kZWZpbmVkIiwiY29uZmlndXJhdGlvbiIsImlkIiwidXJsIiwibW9kZSIsImRlYnVnIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndyaXRhYmxlIiwiY29tcG9uZW50IiwicmVnaXN0ZXIiLCJleHRlbnNpb24iLCJkZXBlbmRlbmN5Iiwicm91dGUiLCJNT0RFX0RFQlVHIiwiQ29va2llIiwibmFtZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNldCIsImdldCIsImNsZWFyIiwicmVtb3ZlIiwib3B0aW9ucyIsInR5cGVKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsImV4cGlyZXMiLCJEYXRlIiwidG9VVENTdHJpbmciLCJkYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJwYXJzZUludCIsIm1heEFnZSIsInNhbWVTaXRlIiwiZW5jb2RlIiwiY29va2llIiwibWF0Y2hlcyIsIm1hdGNoIiwiUmVnRXhwIiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRhdGFKc29uIiwicGFyc2UiLCJvcHRpb24iLCJzdHIiLCJkZWNvZGUiLCJjb29raWVzIiwic3BsaXQiLCJwYXJ0cyIsInRyaW0iLCJsaXN0IiwiY29tcCIsImNyZWF0ZSIsImluaXQiLCJpbml0aWFsaXplZCIsInRlbXBsYXRlIiwibm9kZSIsInN0eWxlcyIsInNldFN0eWxlcyIsImF0dHJpYnV0ZXNFdmVudHNIYW5kbGVyIiwiRVZFTlRTX05BTUVTX0JBU0lDIiwiaW5qZWN0Q29tcG9uZW50Iiwicm9vdCIsIkVycm9yIiwiY29tcGxldGUiLCJjb21wbGV0ZWQiLCJjYWxsIiwicHJvcHMiLCJvdmVycmlkZSIsIm1ldGhvZHMiLCJwcmVmaXgiLCJldmVudHNOYW1lcyIsImFkZEV2ZW50IiwiZWxlbSIsImF0dHIiLCJldmVudE5hbWUiLCJtZXRob2QiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJwYXRoIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhc0F0dHJpYnV0ZSIsIm5vZGVzIiwicHJvcCIsInNlbGVjdG9yIiwic3R5bGUiLCJmb3JjZSIsInNvdXJjZXMiLCJjc3MiLCJqcyIsImVsZW1lbnRzIiwibG9hZCIsIm1heCIsInNyY3MiLCJpIiwibG9hZENTUyIsImxvYWRKUyIsInNyYyIsInB1c2giLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29udGV4dCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGF0ZSIsImNhbGxiYWNrIiwic291cmNlIiwiY3JlYXRlU291cmNlIiwic291cmNlZGF0YSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRDYXNlIiwiUHJveHkiLCJvYmoiLCJEYXRldGltZSIsIk1TX0lOX0RBWSIsIk1TX0lOX0hPVVIiLCJNU19JTl9NSU4iLCJ0aW1lIiwiYWRkRGF5cyIsImRheSIsImRhdGVTdGFydCIsImJldHdlZW5EYXRlcyIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiZGlmZk1zIiwiZGlmZkRheXMiLCJNYXRoIiwicm91bmQiLCJkaWZmSHJzIiwiZGlmZk1pbiIsImhvdXIiLCJtaW51dGUiLCJzdHJUb0RhdGUiLCJmb3JtYXQiLCJ1dGMiLCJ0ZW1wIiwibWFzayIsInRvTG93ZXJDYXNlIiwiVVRDIiwiRG9tIiwiJCIsInNlbGVjdGVkIiwiX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUiLCJtYXAiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9uZSIsImFsbCIsImluamVjdCIsImFwcGVuZCIsInRvIiwic2VhcmNoIiwicGFyZW50IiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInF1ZXJ5IiwicXVlcnlBbGwiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJvbiIsImJ1YmJsZSIsImNvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0IiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwibG9hZGVkIiwiZG9tTG9hZGVkIiwic3RyMm5vZGUiLCJjcmVhdGVFbGVtZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVGcmFnbWVudCIsIm5vZGUyc3RyIiwiRW1tZXQiLCJ0ZW1wSW5uZXJUZXh0cyIsInRlbXBFc2NhcGVkIiwicmUiLCJleGNsdWRlcyIsImNsYXNzZXMiLCJ0YWciLCJpbmRleGVzIiwiZXNjYXBlIiwiaW5uZXJUZXh0IiwiYXR0cnMiLCJlbW1ldCIsInRleHQiLCJodG1sT25seSIsInRyZWUiLCJjdXJyZW50IiwibGFzdEVsZW1lbnQiLCJjb21tYW5kVGV4dCIsImNvbnZlcnRDb2xsZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwicmVzdWx0IiwiZnVsbCIsInF1b3RlcyIsImVsZW1lbnRUZXh0Iiwic3BsaXR0ZXIiLCJpbm5lckhUTUwiLCJIVE1MQ29sbGVjdGlvbiIsIm1hdGNoX3RhZyIsIm1hdGNoX2lkIiwibWF0Y2hfY2xhc3NlcyIsIm1hdGNoX2F0dHJzIiwibWF0Y2hfaW5uZXJUZXh0IiwicG9wIiwiY2xhc3NOYW1lIiwic2xpY2UiLCJqb2luIiwidW5lc2NhcGUiLCJzaGlmdCIsImNodW5rUGFyYW0iLCJjaHVuayIsImF0dHJQYXJhbSIsInNldEF0dHJpYnV0ZSIsIkVWRU5UU19OQU1FUyIsImNvcHkiLCJjdXQiLCJwYXN0ZSIsImFib3J0IiwiYmx1ciIsImNhbmNlbCIsImNhbnBsYXkiLCJjYW5wbGF5dGhyb3VnaCIsImNoYW5nZSIsImNsaWNrIiwiY2xvc2UiLCJjb250ZXh0bWVudSIsImN1ZWNoYW5nZSIsImRibGNsaWNrIiwiZHJhZyIsImRyYWdlbmQiLCJkcmFnZW50ZXIiLCJkcmFnbGVhdmUiLCJkcmFnb3ZlciIsImRyYWdzdGFydCIsImRyb3AiLCJkdXJhdGlvbmNoYW5nZSIsImVtcHRpZWQiLCJlbmRlZCIsImZvY3VzIiwiaW5wdXQiLCJpbnZhbGlkIiwia2V5ZG93biIsImtleXByZXNzIiwia2V5dXAiLCJsb2FkZWRkYXRhIiwibG9hZGVkbWV0YWRhdGEiLCJsb2Fkc3RhcnQiLCJtb3VzZWRvd24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibW91c2VvdmVyIiwibW91c2V1cCIsIm1vdXNld2hlZWwiLCJwYXVzZSIsInBsYXkiLCJwbGF5aW5nIiwicHJvZ3Jlc3MiLCJyYXRlY2hhbmdlIiwicmVzZXQiLCJyZXNpemUiLCJzY3JvbGwiLCJzZWVrZWQiLCJzZWVraW5nIiwic2VsZWN0Iiwic3RhbGxlZCIsInN1Ym1pdCIsInN1c3BlbmQiLCJ0aW1ldXBkYXRlIiwidm9sdW1lY2hhbmdlIiwid2FpdGluZyIsIndoZWVsIiwiYXV4Y2xpY2siLCJnb3Rwb2ludGVyY2FwdHVyZSIsImxvc3Rwb2ludGVyY2FwdHVyZSIsInBvaW50ZXJkb3duIiwicG9pbnRlcm1vdmUiLCJwb2ludGVydXAiLCJwb2ludGVyY2FuY2VsIiwicG9pbnRlcm92ZXIiLCJwb2ludGVyb3V0IiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwic2VsZWN0c3RhcnQiLCJzZWxlY3Rpb25jaGFuZ2UiLCJhbmltYXRpb25lbmQiLCJhbmltYXRpb25pdGVyYXRpb24iLCJhbmltYXRpb25zdGFydCIsInRyYW5zaXRpb25lbmQiLCJFdmVudE1hbmFnZXIiLCJldmVudEZyYWdtZW50IiwidmVyc2lvbiIsImV2ZW50c1R5cGUiLCJkZXRhaWxzIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlRXZlbnQiLCJ0eXBlIiwibGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJodHRwUmVxdWVzdCIsInRoaXNJbnN0YW5jZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaHJlZiIsInRvVXBwZXJDYXNlIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwicGFyYW1zIiwic2VuZERhdGEiLCJpbmRleE9mIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsIndpbmRvdyIsIlV0aWwiLCJTdG9yYWdlIiwiU2Vzc2lvblN0b3JhZ2UiLCJUaW1lciIsIlN0ciIsIlJveHkiLCJhY3Rpb25zIiwiZGVmYXVsdCIsInByb3h5IiwiZmlsbCIsImpzb24iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4Iiwic2l6ZSIsIkxFVFRFUl9DT05TT05BTlQiLCJMRVRURVJfVk9XRUwiLCJBQkMiLCJOVU1CRVJTIiwiQU1QRVJTQU5EIiwidHlwZV9lbGVtZW50IiwiY2xvbmVOb2RlIiwiaXNBcnJheSIsImJpbmQiLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJwcm9wZXJ0aWVzIiwidHlwZVNlbGVjdG9yIiwidHlwZVByb3BlcnRpZXMiLCJwMSIsInAyIiwicG4iLCJpeCIsIm8iLCJzdWJzdHJpbmciLCJkZWNvZGVHZXRRdWVyeSIsInBhaXJzIiwic3Vic3RyIiwiaXRlbSIsInBhaXIiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb2MiLCJlYWNoIiwidiIsImEiLCJOb2RlTGlzdCIsImZpbHRlciIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInBhcmFtIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZFJlY3Vyc2l2ZSIsInByb3BlcnR5IiwiZmluZE9iamVjdCIsInZhbHVlcyIsImF0dHJWYWx1ZSIsInRtcCIsImZpbmRPYmplY3RzIiwiZmluZHMiLCJmaW5kIiwic3RyaW5nIiwicmVnIiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJnZXRMb2NhdGlvbiIsInRleHRDb250ZW50IiwiaXNFbXB0eSIsImlzTmFOIiwiaXNOb2RlIiwibm9kZVR5cGUiLCJOb2RlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJvbmxvYWQiLCJvbmVycm9yIiwibGluayIsInJhbmRvbSIsInRvU3RyaW5nIiwicmVsIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsImxvYWRKU1N5bmMiLCJpdGVyYXRvciIsInNjcmlwdHMiLCJtZXJnZSIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwibnVtYmVyMnN0cmluZyIsImFicyIsInBvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlY3QiLCJzY3JvbGxUb3AiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsInBvc2l0aW9uTW91c2UiLCJNb3VzZUV2ZW50IiwiY29uc29sZSIsImNsaWVudFgiLCJjbGllbnRZIiwibWluIiwiZmxvb3IiLCJyYW5kb21Db2xvciIsImxldHRlcnMiLCJjb2xvciIsInJhbmRvbU51bWJlciIsImNlaWwiLCJyZXMiLCJyYW5kb21TdHJpbmciLCJyYW5kb21JdGVtIiwiYXJyIiwicmVkaXJlY3QiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwic3RyMmZyYWdtZW50IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiY2hpbGRFbGVtZW50Q291bnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInR5cGVPZiIsInNpbXBsZVR5cGVzIiwidCIsInR5cGVPZlN0cmljdCIsInVyaSIsImxvY2FsU3RvcmFnZSIsImNhcGl0YWxpemUiLCJzIiwiY2hhckF0IiwidXBwZXIiLCJsb3dlciIsInBhZEVuZCIsInBhZFN0YXJ0IiwiZGVsYXkiLCJyZXBlYXQiLCJzZWxmIiwiaHQiLCJoYyIsInN0b3AiLCJzdGFydCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVvdXQiLCJtcyIsInRoaXNJbnN0Iiwic2V0VGltZW91dCIsImludGVy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MENBRlM7QUFHVEUsNENBSFM7QUFJVDNGLHNCQUpTO0FBS1R1RixrQ0FMUztBQU1UekIsNEJBTlM7QUFPVDBCLGdDQVBTO0FBUVRvVCx3Q0FSUztBQVNUaFQsZ0NBVFM7QUFVVHZCLDBCQVZTO0FBV1RDLGdDQVhTO0FBWVRMLDRCQVpTO0FBYVR1UCw0Q0FiUztBQWNUaEIsNENBZFM7QUFlVHBFLHNDQWZTO0FBZ0JUeUUsOEJBaEJTO0FBaUJUQyxrQ0FqQlM7QUFrQlRXLDRCQWxCUztBQW1CVE0sNENBbkJTO0FBb0JUZCx3QkFwQlM7QUFxQlRnQixvQ0FyQlM7QUFzQlRJLHNDQXRCUztBQXVCVHRSLDRCQXZCUztBQXdCVCtSLDhCQXhCUztBQXlCVEUsNEJBekJTO0FBMEJUelUsOEJBMUJTO0FBMkJUQyw0QkEzQlM7QUE0QlR3VixvQ0E1QlM7QUE2QlRHLDBCQTdCUztBQThCVEksMENBOUJTO0FBK0JUelIsb0JBL0JTO0FBZ0NUVixnQ0FoQ1M7QUFpQ1RxVCwwQ0FqQ1M7QUFrQ1QvQiw0QkFsQ1M7QUFtQ1RzQyxvQ0FuQ1M7QUFvQ1RPLGtDQXBDUztBQXFDVEosc0NBckNTO0FBc0NURyxzQ0F0Q1M7QUF1Q1RHLGdDQXZDUztBQXdDVFMsNEJBeENTO0FBeUNURyx3Q0F6Q1M7QUEwQ1RDLHNCQTFDUztBQTJDVDdRLHdCQTNDUztBQTRDVHVTLFdBQU92UztBQTVDRSxDQUFiOztrQkErQ2VxSCxJIiwiZmlsZSI6Im5hLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudFwiO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tIFwiLi9jb3JlL2V4dGVuc2lvblwiO1xuaW1wb3J0IGRlcGVuZGVuY3kgZnJvbSBcIi4vY29yZS9kZXBlbmRlbmN5XCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vY29yZS9yb3V0ZVwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuL2NvcmUvc3RhdGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL3N0YXRpYy9kZWZpbmVkXCI7XG5cbmNsYXNzIE5hbWVzcGFjZUFwcGxpY2F0aW9uXG57XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGlmIChOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHJldHVybiBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IChrZXksIHZhbHVlKSA9PiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jb25maWd1cmF0aW9uW2tleV0gOiB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZWJ1ZzogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbltrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pZCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwicm9vdFwiLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWd1cmF0aW9uLmlkKSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uO1xuICAgICAgICB0aGlzLmV4dGVuc2lvbi5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5O1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICBOYW1lc3BhY2VBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxufVxuXG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5leHRlbnNpb24gPSBleHRlbnNpb247XG5OYW1lc3BhY2VBcHBsaWNhdGlvbi5NT0RFX0RFQlVHID0gJ2RlYnVnJztcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247XG4iLCJcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBvcHRpb25cbiAqIEByZXR1cm5zIHt7c2V0OiAoQ29va2llLnNldHwqKSwgZ2V0OiAoQ29va2llLmdldHwqKSwga2V5OiAoQ29va2llLmtleXwqKSwgY2xlYXI6IChDb29raWUuY2xlYXJ8KiksIHJlbW92ZTogKENvb2tpZS5yZW1vdmV8KiksIGxlbmd0aDogKENvb2tpZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvb2tpZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXQobmFtZSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogU2V0IENvb2tpZSBrZXksIHZhbHVlXG4gKiAgZXhwaXJlcyAtIG1zLCBEYXRlLCAtMSwgMFxuICogIG1heEFnZSAtIHMgKHllYXIgMzE1MzYwMDApXG4gKiAgU2FtZVNpdGU9U3RyaWN0fExheFxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHt7fX0gb3B0aW9ucyAgIHtleHBpcmVzOiAwLCBwYXRoOiAnLycsIGRvbWFpbjogJ3NpdGUuY29tJywgc2VjdXJlOiBmYWxzZSwgbWF4QWdlOiA2MCo2MCoyNCozNjUsIHNhbWVTaXRlOiAnJyB9XG4gKiBAcGFyYW0gdHlwZUpzb24gYm9vbFxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMsIHR5cGVKc29uID0gdHJ1ZSlcbntcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXG4gICAgaWYgKENvb2tpZS50eXBlSnNvbikge31cbiAgICBpZiAodHlwZUpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBsZXQgZGF0YSA9IG5hbWUgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5leHBpcmVzID0gZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgcGFyc2VJbnQob3B0aW9ucy5leHBpcmVzKSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWF4QWdlKSB7XG4gICAgICAgIG9wdGlvbnNbJ21heC1hZ2UnXSA9IG9wdGlvbnMubWF4QWdlO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5tYXhBZ2U7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnNhbWVTaXRlKSB7XG4gICAgICAgIG9wdGlvbnNbJ3NhbWVzaXRlJ10gPSBvcHRpb25zLnNhbWVTaXRlO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5zYW1lU2l0ZTtcbiAgICB9XG5cbiAgICBkYXRhICs9IGVuY29kZShvcHRpb25zKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBkYXRhO1xufTtcblxuLyoqXG4gKiBHZXQgQ29va2llIHZhbHVlIGJ5IGtleVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB0eXBlSnNvbiBib29sXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIHR5cGVKc29uID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcbiAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgKSk7XG5cbiAgICBsZXQgZGF0YSA9IG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoQ29va2llLmRhdGFKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbiAmJiBkYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuXG4gICAgcmV0dXJuIGRhdGFcbn07XG5cbi8qKlxuICogUmVtb3ZlIENvb2tpZSBieSBrZXlcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gb3B0aW9uXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge2V4cGlyZXM6IC0xfTtcbiAgICBzZXQobmFtZSwgXCJcIiwgb3B0aW9uKTtcbn07XG5cbmNvbnN0IGNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9ICcnO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCB0byB1cmkgZ2V0IHN0cmluZ1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgICAgIGV4YW1wbGU6IHtleHBpcmVzOiAwLCBwYXRoOiAnLycsIGRvbWFpbjogJ215LXNpdGUuY29tJywgc2VjdXJlOiBmYWxzZX1cbiAqIEByZXR1cm5zIHtzdHJpbmd9ICAgICAgICBleGFtcGxlOiBcImV4cGlyZXM9MDtwYXRoPS87ZG9tYWluPXNpdGUuY29tO3NlY3VyZT1mYWxzZVwiO1xuICovXG5jb25zdCBlbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc3RyICs9ICc7JyArIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59O1xuXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcbiAgICAgICAgICAgIFwiKD86Xnw7IClcIiArIG5hbWUucmVwbGFjZSgvKFtcXC4kPyp8e31cXChcXClcXFtcXF1cXFxcXFwvXFwrXl0pL2csICdcXFxcJDEnKSArIFwiPShbXjtdKilcIlxuICAgICAgICApKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9LFxuICAgICAgICAgICAgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKTtcblxuICAgICAgICBjb29raWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gdmFsdWUudHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgZGF0YVtwYXJ0c1swXS50cmltKCldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59O1xuXG5Db29raWUuc2V0ID0gc2V0O1xuQ29va2llLmdldCA9IGdldDtcbkNvb2tpZS5yZW1vdmUgPSByZW1vdmU7XG5Db29raWUuY2xlYXIgPSBjbGVhcjtcbkNvb2tpZS5lbmNvZGUgPSBlbmNvZGU7XG5Db29raWUuZGVjb2RlID0gZGVjb2RlO1xuQ29va2llLmRhdGFKc29uID0gdHJ1ZTtcblxuZXhwb3J0IHtcbiAgICBzZXQsXG4gICAgZ2V0LFxuICAgIGNsZWFyLFxuICAgIHJlbW92ZSxcbiAgICBlbmNvZGUsXG4gICAgZGVjb2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llO1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCB7IEVWRU5UU19OQU1FU19CQVNJQyB9IGZyb20gXCIuLi9ldmVudC1tYW5hZ2VyL2V2ZW50c05hbWVzXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuXG5jb25zdCBjb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG5cblxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIGNvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHN0cjJub2RlKGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTm9kZShjb21wLnRlbXBsYXRlKSkge1xuXG4gICAgICAgICAgICBpZiAoY29tcC50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ub2RlXScpKVxuICAgICAgICAgICAgICAgIGNvbXAubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgY29tcC50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wLnN0eWxlcylcbiAgICAgICAgICAgICAgICBzZXRTdHlsZXMoY29tcCk7XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNFdmVudHNIYW5kbGVyKGNvbXAsICdvbicsIE9iamVjdC5rZXlzKEVWRU5UU19OQU1FU19CQVNJQykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgaW5qZWN0Q29tcG9uZW50IChjb21wLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICghY29tcC50ZW1wbGF0ZSAmJiB0aGlzLnJvb3Qpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWVyeSgnW2RhdGEtY29tcG9uZW50PVwiJysgY29tcC5pZCArJ1wiXScsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKE5hbWVzcGFjZUFwcGxpY2F0aW9uLm1vZGUgPT09IE5hbWVzcGFjZUFwcGxpY2F0aW9uLk1PREVfREVCVUcpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkxhdGUgQ2FsbFwiOiBDb21wb25lbnQgWycrY29tcC5pZCsnXSBjYW4gdCBjYWxsIGNvbXBsZXRlZCgpIGFuZCBpbmplY3RzJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH1cbn07XG5cbmNvbXBvbmVudC5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSlcbntcbiAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICBPYmplY3Qua2V5cyhjb21wb25lbnQubGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gY29tcG9uZW50Lmxpc3Rba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaW5qZWN0Q29tcG9uZW50IChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbXBvbmVudC5saXN0ID0ge307XG5cbmNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczogbnVsbCxcbiAgICAgICAgc3R5bGVzOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfSwgY29uZmlnKVxufTtcblxuZnVuY3Rpb24gYXR0cmlidXRlc0V2ZW50c0hhbmRsZXIgKGNvbXAsIHByZWZpeCwgZXZlbnRzTmFtZXMpIHtcbiAgICBjb25zdCBhZGRFdmVudCA9IChlbGVtLCBhdHRyLCBldmVudE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gZWxlbS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW21ldGhvZF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1ttZXRob2RdLmNhbGwoY29tcCwgZSwgZS50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0IHx8IGUucGF0aFswXSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGV2ZW50c05hbWVzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyID0gcHJlZml4ICsgJy0nICsgZXZlbnROYW1lO1xuICAgICAgICBpZiAoY29tcC50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdbJythdHRyKyddJykpIHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oY29tcC50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKCdbJythdHRyKyddJykpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICBhZGRFdmVudChlbGVtLCBhdHRyLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChjb21wLnRlbXBsYXRlLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgYWRkRXZlbnQoY29tcC50ZW1wbGF0ZSwgYXR0ciwgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluamVjdENvbXBvbmVudCAoY29tcCwgaW5zdGFuY2UpIHtcbiAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QWxsKCdbZGF0YS1jb21wb25lbnQ9XCInKyBjb21wLmlkICsnXCJdJywgaW5zdGFuY2Uucm9vdCk7XG5cbiAgICBpZiAobm9kZXMpXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgY29tcC5wcm9wcy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5vZGUuaGFzQXR0cmlidXRlKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcCwgcHJvcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmdldEF0dHJpYnV0ZShwcm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlICE9PSBjb21wLnRlbXBsYXRlKVxuICAgICAgICAgICAgICAgIGluamVjdChub2RlLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcDtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVzKGNvbXAsIGluc3RhbmNlKSB7XG5cbiAgICBPYmplY3Qua2V5cyhjb21wLnN0eWxlcykuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSAndGVtcGxhdGUnICYmIGlzTm9kZShjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5zdHlsZXNbc2VsZWN0b3JdKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlLnN0eWxlW2tleV0gPSBjb21wLnN0eWxlc1tzZWxlY3Rvcl1ba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNlbGVjdG9yLCBjb21wLnRlbXBsYXRlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzW3NlbGVjdG9yXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IGNvbXAuc3R5bGVzW3NlbGVjdG9yXVtrZXldO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50O1xuIiwiaW1wb3J0IGxvYWRKUyBmcm9tICcuLi9zdGF0aWMvbG9hZEpTJztcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBkZXBlbmRlbmN5ID0gZnVuY3Rpb24gKGNvbmZpZywgZm9yY2UgPSB0cnVlKVxue1xuICAgIGNvbnN0IHNvdXJjZXMgPSBtZXJnZSh7XG4gICAgICAgIGNzczogW10sXG4gICAgICAgIGpzOiBbXSxcbiAgICAgICAgZWxlbWVudHM6IFtdLFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7fVxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICBpZiAoZm9yY2UpXG4gICAgICAgIGRlcGVuZGVuY3kubG9hZChzb3VyY2VzKTtcblxuICAgIHJldHVybiBzb3VyY2VzO1xufTtcblxuZGVwZW5kZW5jeS5sb2FkID0gKHNvdXJjZXMpID0+IHtcbiAgICBjb25zdCBtYXggPVxuICAgICAgICAoc291cmNlcy5jc3MgPyBzb3VyY2VzLmNzcy5sZW5ndGggOiAwKSArXG4gICAgICAgIChzb3VyY2VzLmpzID8gc291cmNlcy5qcy5sZW5ndGggOiAwKTtcbiAgICBjb25zdCBzcmNzID0gbWVyZ2Uoe2Nzczogc291cmNlcy5jc3N9LHtqczogc291cmNlcy5qc30pO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkID0ga2V5ID09PSAnY3NzJyA/IGxvYWRDU1MgOiBsb2FkSlM7XG4gICAgICAgIHNyY3Nba2V5XS5mb3JFYWNoKChzcmMpID0+IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VzLmVsZW1lbnRzLnB1c2gobG9hZChzcmMsKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpICsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZXMuY29tcGxldGUoc291cmNlcyk7XG4gICAgICAgICAgICAgICAgfSwgc291cmNlcy5lcnJvcikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmRlcGVuZGVuY3kucmVtb3ZlID0gZnVuY3Rpb24gKHNvdXJjZXMpXG57XG4gICAgY29uc3QgZWxlbWVudHMgPSBzb3VyY2VzICYmIHNvdXJjZXMuZWxlbWVudHMgPyBzb3VyY2VzLmVsZW1lbnRzIDogW107XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBzb3VyY2VzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwZW5kZW5jeTtcbiIsImltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cblxuY29uc3QgZXh0ZW5zaW9uID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuc2lvbi5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcCA9IGV4dGVuc2lvbi5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkICYmIHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbil7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5zaW9uLmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5yZWdpc3RlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSlcbntcbiAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICBPYmplY3Qua2V5cyhleHRlbnNpb24ubGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmxpc3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChjb21wLmNvbXBsZXRlICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHRlbnNpb24ubGlzdCA9IHt9O1xuXG5leHRlbnNpb24uY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGwsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb250ZXh0OiBmYWxzZSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbjtcbiIsIlxuY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAodXJsLCBjb21wb25lbnQpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVybCkge1xuICAgICAgICB0aGlzW2NvbXBvbmVudF0oKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4uL3N0YXRpYy90eXBlT2YnO1xuXG5cbmNvbnN0IHN0YXRlID0gZnVuY3Rpb24gKGtleSwgZGF0YSkge1xuICAgIHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgPyBzdGF0ZS5nZXQoa2V5KSA6IHN0YXRlLnNldChrZXksIGRhdGEpO1xufTtcblxuc3RhdGUuY2FsbGJhY2sgPSB7fTtcbnN0YXRlLnNvdXJjZSA9IGNyZWF0ZVNvdXJjZSgpO1xuc3RhdGUuY3JlYXRlID0gY3JlYXRlU291cmNlKCk7XG5zdGF0ZS5zb3VyY2VkYXRhID0ge307XG5zdGF0ZS5hY3Rpb24gPSBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgIHN0YXRlLmNhbGxiYWNrW2tleV0gPSBjYWxsYmFjaztcbn07XG5cbnN0YXRlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdHlwZU9mKGtleSwgJ3N0cmluZycpXG4gICAgICAgID8gc3RhdGUuc291cmNlZGF0YVtrZXldIHx8IHN0YXRlLnNvdXJjZVtrZXldXG4gICAgICAgIDoga2V5ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiBzdGF0ZS5zb3VyY2VkYXRhIDtcbn07XG5cbnN0YXRlLnNldCA9IGZ1bmN0aW9uIChrZXksIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZXRDYXNlKHtba2V5XTogcGF5bG9hZH0pO1xufTtcblxuc3RhdGUuc2V0Q2FzZSA9IGZ1bmN0aW9uIChwYXlsb2FkID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc3RhdGUuc291cmNlW2tleV0gPSBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gPSBwYXlsb2FkW2tleV07XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2UgKHBheWxvYWQgPSB7fSkge1xuICAgIHN0YXRlLnNvdXJjZWRhdGEgPSBwYXlsb2FkO1xuICAgIHJldHVybiBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQ6IChvYmosIHByb3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDoob2JqLCBwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNhbGxiYWNrW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY2FsbGJhY2tbcHJvcF0uY2FsbCh7fSwgc3RhdGUuc291cmNlLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xuIiwiY29uc3QgRGF0ZXRpbWUgPSB7fTtcbkRhdGV0aW1lLk1TX0lOX0RBWSA9IDg2NGU1O1xuRGF0ZXRpbWUuTVNfSU5fSE9VUiA9IDM2ZTU7XG5EYXRldGltZS5NU19JTl9NSU4gPSA2ZTQ7XG5cbi8qKlxuICogUmV0dXJuIHRpbWVzdGFtcFxuICogQHBhcmFtIGRhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbkRhdGV0aW1lLnRpbWUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGUuZ2V0VGltZSgpIDogKG5ldyBEYXRlKS5nZXRUaW1lKClcbn07XG5cbi8qKlxuICogQWRkIGRheXMgdG8gc29tZSBkYXRlXG4gKiBAcGFyYW0gZGF5ICAgICAgICAgICBudW1iZXIgb2YgZGF5cy4gMC4wNCAtIDEgaG91ciwgMC41IC0gMTIgaG91ciwgMSAtIDEgZGF5XG4gKiBAcGFyYW0gZGF0ZVN0YXJ0ICAgICB0eXBlIERhdGUsIHN0YXJ0IGRhdGVcbiAqIEByZXR1cm5zIHsqfSAgdHlwZSBEYXRlXG4gKi9cbkRhdGV0aW1lLmFkZERheXMgPSBmdW5jdGlvbiAoZGF5LCBkYXRlU3RhcnQpIHtcbiAgICBjb25zdCBkYXRlID0gZGF0ZVN0YXJ0ID8gbmV3IERhdGUoZGF0ZVN0YXJ0KSA6IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheSAqIDg2NDAwMDAwKSk7XG4gICAgcmV0dXJuIGRhdGU7XG59O1xuXG4vKipcbiAqIFRpbWUgYmV0d2VlbiBEYXRlc1xuICogPHByZT5cbiAqICAgICB2YXIgZnJvbSA9IG5ldyBEYXRlKCcyMDE2LTA4LTAxIDIwOjMwJyk7XG4gKiAgICAgdmFyIHRvID0gbmV3IERhdGUoJzIwMTYtMDgtMTAgMDc6NTUnKTtcbiAqICAgICAuRGF0ZS5iZXR3ZWVuRGF0ZXMoZnJvbSwgdG8pOyAvLyBPYmplY3QgeyBkYXk6IDgsIGhvdXI6IDExLCBtaW51dGU6IDI1IH1cbiAqIDwvcHJlPlxuICogQHBhcmFtIGRhdGVGcm9tXG4gKiBAcGFyYW0gZGF0ZVRvXG4gKiBAcmV0dXJucyB7e2RheTogbnVtYmVyLCBob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyfX1cbiAqL1xuRGF0ZXRpbWUuYmV0d2VlbkRhdGVzID0gZnVuY3Rpb24gKGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgICBkYXRlRnJvbSA9IGRhdGVGcm9tIHx8IG5ldyBEYXRlKCk7XG4gICAgZGF0ZVRvID0gZGF0ZVRvIHx8IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRpZmZNcyA9IChkYXRlVG8gLSBkYXRlRnJvbSksXG4gICAgICAgIGRpZmZEYXlzID0gTWF0aC5yb3VuZChkaWZmTXMgLyA4NjRlNSksXG4gICAgICAgIGRpZmZIcnMgPSBNYXRoLnJvdW5kKChkaWZmTXMgJSA4NjRlNSkgLyAzNmU1KSxcbiAgICAgICAgZGlmZk1pbiA9IE1hdGgucm91bmQoKChkaWZmTXMgJSA4NjRlNSkgJSAzNmU1KSAvIDZlNCk7XG4gICAgcmV0dXJuIHtkYXk6IGRpZmZEYXlzLCBob3VyOiBkaWZmSHJzLCBtaW51dGU6IGRpZmZNaW59O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGRhdGUgc3RyaW5nIHRvIERhdGUgT2JqZWN0XG4gKiB5eSAtIHRoZSB5ZWFyIGFzIGEgdHdvLWRpZ2l0IG51bWJlciAoIDAwIHRvIDk5ICk7XG4gKiBZWSAtIHRoZSB5ZWFyIGFzIGEgZm91ci1kaWdpdCBudW1iZXIgKCAxOTAwLTk5OTkgKTtcbiAqIG1tIC0gdGhlIG1vbnRoIGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMSB0byAxMiApICggMSB0byAxMiApO1xuICogZGQgLSB0aGUgZGF5IGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMSB0byAzMSApICggMSB0byAzMSApO1xuICogaGggSEggLSB0aGUgaG91ciAoIDAwIHRvIDExICkgKCAwMCB0byAyMyApICggMSB0byAxMiApICggMCB0byAyMyApO1xuICogaWkgLSB0aGUgbWludXRlIGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMCB0byA1OSApO1xuICogc3MgLSB0aGUgc2Vjb25kIGFzIGEgbnVtYmVyIHdpdGggYSBsZWFkaW5nIHplcm8gKCAwMCB0byA1OSApO1xuICogYWEgLSBkaXNwbGF5cyBhbSAoZm9yIHRpbWVzIGZyb20gbWlkbmlnaHQgdW50aWwgbm9vbikgYW5kIHBtIChmb3IgdGltZXMgZnJvbSBub29uIHVudGlsIG1pZG5pZ2h0KTtcbiAqXG4gKiBEYXRldGltZS5zdHJUb0RhdGUoJzEyLjA1LjIwMTcgMTI6MzA6MjUnLCAnbW0uZGQuWVkgSEg6aWk6c3MnKVxuICogRGF0ZXRpbWUuc3RyVG9EYXRlKCcxMi8wNS8yMDE3JywgJ21tL2RkL1lZJylcbiAqIERhdGV0aW1lLnN0clRvRGF0ZSgnMTIvNS8yMDE3JywgJ21tL2RkL1lZJywgdHJ1ZSlcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0XG4gKiBAcGFyYW0gdXRjXG4gKiBAcmV0dXJucyB7RGF0ZX1cbiAqL1xuRGF0ZXRpbWUuc3RyVG9EYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCwgdXRjKSB7XG4gICAgY29uc3Qgc2V0ID0gWzAsIDAsIDEsIDAsIDAsIDBdO1xuICAgIGNvbnN0IHRlbXAgPSBkYXRlLm1hdGNoKC9bYS16QS1aXSt8WzAtOV0rL2cpO1xuICAgIGNvbnN0IG1hc2sgPSBmb3JtYXQubWF0Y2goL1thLXpBLVpdezJ9L2cpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKG1hc2tbaV0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgICAgIHNldFsyXSA9IHRlbXBbaV0gfHwgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgICAgICAgIHNldFsxXSA9ICh0ZW1wW2ldIHx8IDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgICAgIHNldFswXSA9IHRlbXBbaV0gKiAxICsgKHRlbXBbaV0gPiA1MCA/IDE5MDAgOiAyMDAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICAgICAgc2V0WzNdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgICAgICAgICAgc2V0WzRdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIllZXCI6XG4gICAgICAgICAgICAgICAgc2V0WzBdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgICAgICAgICAgc2V0WzNdID0gc2V0WzNdICUgMTIgKyAoKHRlbXBbaV0gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdhbScgPyAwIDogMTIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNzXCI6XG4gICAgICAgICAgICAgICAgc2V0WzVdID0gdGVtcFtpXSB8fCAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodXRjKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhzZXRbMF0sIHNldFsxXSwgc2V0WzJdLCBzZXRbM10sIHNldFs0XSwgc2V0WzVdKSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShzZXRbMF0sIHNldFsxXSwgc2V0WzJdLCBzZXRbM10sIHNldFs0XSwgc2V0WzVdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGV0aW1lO1xuXG4vKlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIE1TX0lOX0RBWTogRGF0ZXRpbWUuTVNfSU5fREFZLFxuICAgIE1TX0lOX0hPVVI6IERhdGV0aW1lLk1TX0lOX0hPVVIsXG4gICAgTVNfSU5fTUlOOiBEYXRldGltZS5NU19JTl9NSU4sXG4gICAgdGltZTogRGF0ZXRpbWUudGltZSxcbiAgICBhZGREYXlzOiBEYXRldGltZS5hZGREYXlzLFxuICAgIGJldHdlZW5EYXRlczogRGF0ZXRpbWUuYmV0d2VlbkRhdGVzLFxuICAgIHN0clRvRGF0ZTogRGF0ZXRpbWUuc3RyVG9EYXRlLFxufTtcbiovXG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5cbmltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5mdW5jdGlvbiBEb20gKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgJCA9IHtcbiAgICAgICAgc2VsZWN0b3I6IHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpID8gc2VsZWN0b3IgOiBudWxsLFxuICAgICAgICBzZWxlY3RlZDogaXNOb2RlKHNlbGVjdG9yKSA/IFtzZWxlY3Rvcl0gOiBxdWVyeUFsbChzZWxlY3RvciksXG4gICAgfTtcblxuICAgIGNvbnN0IF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBxdWVyeUFsbChzcmMpLm1hcChfc2V0X3JlYWxfZGlzcGxheV9zdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlKHNyYykgJiYgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHNyYy5zdHlsZS5kaXNwbGF5ID8gc3JjLnN0eWxlLmRpc3BsYXkgOiBnZXRDb21wdXRlZFN0eWxlKHNyYykuZGlzcGxheTtcbiAgICAgICAgICAgIHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gPSAoIXN0eWxlIHx8IHN0eWxlID09PSAnbm9uZScpID8gJ2Jsb2NrJyA6IHN0eWxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQub25lID0gKCkgPT4gJC5zZWxlY3RlZCAmJiAkLnNlbGVjdGVkLmxlbmd0aCA/ICQuc2VsZWN0ZWRbMF0gOiBmYWxzZTtcbiAgICAkLmFsbCA9ICgpID0+ICQuc2VsZWN0ZWQ7XG4gICAgJC5hdHRyID0gKG5hbWUsIHZhbHVlKSA9PiBkZWZpbmVkKHZhbHVlKSA/IGF0dHIoJC5vbmUoKSwgbmFtZSwgdmFsdWUpIDogYXR0cigkLm9uZSgpLCBuYW1lKTtcbiAgICAkLmluamVjdCA9IChkYXRhLCBhcHBlbmQsIHRvKSA9PiBpbmplY3QoJC5vbmUoKSwgZGF0YSwgYXBwZW5kLCB0byk7XG4gICAgJC5hcHBlbmQgPSAoZGF0YSkgPT4gaW5qZWN0KCQub25lKCksIGRhdGEsIHRydWUpO1xuICAgICQuc2VhcmNoID0gKGF0dHIsIGZyb20pID0+IHNlYXJjaCgkLm9uZSgpLCBhdHRyLCBmcm9tKTtcbiAgICAkLnBhcmVudCA9ICgpID0+ICQub25lKCkucGFyZW50Tm9kZTtcbiAgICAkLmNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAkLm9uZSgpXG4gICAgfTtcbiAgICAkLnBvc2l0aW9uID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSk7XG4gICAgJC5xdWVyeSA9IChzZWxlY3RvcikgPT4gJC5vbmUoKS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAkLnF1ZXJ5QWxsID0gKHNlbGVjdG9yKSA9PiAkLm9uZSgpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICQueCA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLng7XG4gICAgJC55ID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkueTtcbiAgICAkLndpZHRoID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkud2lkdGg7XG4gICAgJC5oZWlnaHQgPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS5oZWlnaHQ7XG4gICAgJC5yZW1vdmUgPSAoKSA9PiAkLm9uZSgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJC5vbmUoKSk7XG4gICAgJC5zaG93ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZShzcmMpO1xuICAgICAgICBjc3Moc3JjLCB7ZGlzcGxheTogc3JjICYmIHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gPyBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddIDogJ2Jsb2NrJ30pO1xuICAgIH07XG4gICAgJC5oaWRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBfc2V0X3JlYWxfZGlzcGxheV9zdHlsZShzcmMpO1xuICAgICAgICBjc3Moc3JjLCB7ZGlzcGxheTogJ25vbmUnfSk7XG4gICAgfTtcbiAgICAkLnRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gJC5vbmUoKTtcbiAgICAgICAgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgcXVlcnlBbGwoc3JjKS5tYXAoRG9tLnRvZ2dsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNOb2RlKHNyYykpIHtcbiAgICAgICAgICAgIGlmIChzcmMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSBEb20uc2hvdyhzcmMpO1xuICAgICAgICAgICAgZWxzZSBEb20uaGlkZShzcmMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAkLm9uID0gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkgPT4gb24oJC5vbmUoKSwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKTtcbiAgICAkLmNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gJC5vbmUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlKHt0b3A6IGNvb3Jkcy50b3AgKyBwYWdlWU9mZnNldCwgbGVmdDogY29vcmRzLmxlZnQgKyBwYWdlWE9mZnNldH0sIGNvb3Jkcyk7XG4gICAgfTtcbiAgICByZXR1cm4gJDtcbn1cblxuRG9tLmF0dHIgPSBhdHRyO1xuRG9tLmNzcyA9IGNzcztcbkRvbS5sb2FkZWQgPSBkb21Mb2FkZWQ7XG5Eb20uaW5qZWN0ID0gaW5qZWN0O1xuRG9tLnN0cjJub2RlID0gc3RyMm5vZGU7XG5Eb20uc2VhcmNoID0gc2VhcmNoO1xuRG9tLnF1ZXJ5QWxsID0gcXVlcnlBbGw7XG5Eb20ucXVlcnkgPSBxdWVyeTtcbkRvbS5jcmVhdGUgPSBjcmVhdGVFbGVtZW50O1xuRG9tLmZyYWdtZW50ID0gY3JlYXRlRnJhZ21lbnQ7XG5Eb20ubm9kZTJzdHIgPSBub2RlMnN0cjtcbkRvbS5zdHIybm9kZSA9IHN0cjJub2RlO1xuRG9tLnBvc2l0aW9uID0gcG9zaXRpb247XG5cblxuZXhwb3J0IGRlZmF1bHQgRG9tO1xuIiwiLyoqXG4gKiBFbW1ldCBzeW50YXggZm9yIGNyZWF0aW5nIERPTSBlbGVtZW50c1xuICpcbiAqIFN5bnRheFxuICogICBjb25zdCBlbW1ldCA9IEVtbWV0KCk7XG4gKiAgIGVtbWV0KCcudGFibGUgPiBkaXZ7bGVmdH0gKyBkaXYoY2xhc3M9XCJ0ZXh0LXJpZ2h0XCIpe3JpZ2h0fScpXG4gKiAgIHRhZyNpZC5jbGFzc2VzKGF0dHJpYnV0ZXM9XCJcIil7aW5uZXIgdGV4dH0gPiAubmVzdGVkIF4gLmJhY2tlZC51cC5vbmUgKyAuc2libGluZ1xuICpcbiAqIEFyZ3VtZW50c1xuICogICAuZW1tZXQoIHN5bnRheCA6IHN0cmluZywgcmV0dXJuT25seUhUTUwgOiBib29sZWFuIClcbiAqXG4gKiBAbmFtZXNwYWNlIEVtbWV0XG4gKiBAdHlwZSBmdW5jdGlvblxuICogQHBhcmFtIHRleHQgICAgICAgICAgc3ludGF4XG4gKiBAcGFyYW0gaHRtbE9ubHkgICAgICByZXR1cm5Pbmx5SFRNTFxuICogQHJldHVybnMge3N0cmluZ3wqfVxuICovXG5jb25zdCBFbW1ldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgIHRlbXBJbm5lclRleHRzID0gW107XG4gICAgbGV0ICB0ZW1wRXNjYXBlZCA9IFtdO1xuICAgIGNvbnN0IHJlID0ge307XG5cbiAgICByZS5leGNsdWRlcyA9IFwiKFteXFxcXC4jXFxcXChcXFxce10rKVwiO1xuICAgIHJlLmNsYXNzZXMgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIiArIHJlLmV4Y2x1ZGVzLCBcImdcIik7XG4gICAgcmUuaWQgPSBuZXcgUmVnRXhwKFwiI1wiICsgcmUuZXhjbHVkZXMsIFwiZ1wiKTtcbiAgICByZS50YWcgPSBuZXcgUmVnRXhwKFwiXlwiICsgcmUuZXhjbHVkZXMpO1xuICAgIHJlLmluZGV4ZXMgPSAvKC4rPykoPnxcXCt8XFxefCQpL2c7XG4gICAgcmUuZXNjYXBlID0gLyhcInwnKShbXlxcMV0qPylcXDEvZztcbiAgICByZS5pbm5lclRleHQgPSAvXFx7KFtefV0qPyl9L2c7XG4gICAgcmUuYXR0cnMgPSAvXFwoKFteXFwpXSopXFwpL2c7XG5cbiAgICBjb25zdCBlbW1ldCA9IGZ1bmN0aW9uICh0ZXh0LCBodG1sT25seSkge1xuICAgICAgICBsZXQgdHJlZSA9IGVsZW1lbnQoKSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0cmVlLFxuICAgICAgICAgICAgbGFzdEVsZW1lbnQgPSB0cmVlLFxuICAgICAgICAgICAgY29tbWFuZFRleHQgPSB0ZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICBjb252ZXJ0Q29sbGVjdGlvbiA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc3JjLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3JjWzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0O1xuXG4gICAgICAgIHRlbXBJbm5lclRleHRzID0gW107XG4gICAgICAgIHRlbXBFc2NhcGVkID0gW107XG4gICAgICAgIGNvbW1hbmRUZXh0XG4gICAgICAgICAgICAucmVwbGFjZShyZS5lc2NhcGUsIGZ1bmN0aW9uIChmdWxsLCBxdW90ZXMsIGVzY2FwZSkge1xuICAgICAgICAgICAgICAgIHRlbXBFc2NhcGVkLnB1c2goZXNjYXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcXFwiXFxcIlwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmlubmVyVGV4dCwgZnVuY3Rpb24gKGZ1bGwsIGlubmVyVGV4dCkge1xuICAgICAgICAgICAgICAgIHRlbXBJbm5lclRleHRzLnB1c2goaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ7fVwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgICAgICAgICAucmVwbGFjZShyZS5pbmRleGVzLCBmdW5jdGlvbiAoZnVsbCwgZWxlbWVudFRleHQsIHNwbGl0dGVyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCA9IGVsZW1lbnQoZWxlbWVudFRleHQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXR0ZXIgPT09IFwiPlwiKVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gbGFzdEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3BsaXR0ZXIgPT09IFwiXlwiKVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0ID0gdHJlZS5jaGlsZHJlbi5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IHRyZWUuY2hpbGRyZW5cbiAgICAgICAgICAgIDogdHJlZS5jaGlsZHJlblswXTtcblxuICAgICAgICByZXR1cm4gaHRtbE9ubHlcbiAgICAgICAgICAgID8gdHJlZS5pbm5lckhUTUxcbiAgICAgICAgICAgIDogKHJlc3VsdCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uID8gY29udmVydENvbGxlY3Rpb24ocmVzdWx0KSA6IHJlc3VsdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBsZXQgY29tbWFuZFRleHQgPSB0ZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICBtYXRjaF90YWcgPSBjb21tYW5kVGV4dC5tYXRjaChyZS50YWcpLFxuICAgICAgICAgICAgbWF0Y2hfaWQgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5pZCksXG4gICAgICAgICAgICBtYXRjaF9jbGFzc2VzID0gY29tbWFuZFRleHQubWF0Y2gocmUuY2xhc3NlcyksXG4gICAgICAgICAgICBtYXRjaF9hdHRycyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmF0dHJzKSxcbiAgICAgICAgICAgIG1hdGNoX2lubmVyVGV4dCA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmlubmVyVGV4dCksXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtYXRjaF90YWcgPyBtYXRjaF90YWdbMF0gOiBcImRpdlwiKTtcblxuICAgICAgICBpZiAobWF0Y2hfaWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBtYXRjaF9pZC5wb3AoKS5yZXBsYWNlKHJlLmlkLCBcIiQxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2NsYXNzZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gbWF0Y2hfY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWUuc2xpY2UoMSlcbiAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2lubmVyVGV4dCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gbWF0Y2hfaW5uZXJUZXh0Lm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZXNjYXBlKHRlbXBJbm5lclRleHRzLnNoaWZ0KCkpO1xuICAgICAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfYXR0cnMpIHtcbiAgICAgICAgICAgIG1hdGNoX2F0dHJzLm1hcChmdW5jdGlvbiAoY2h1bmtQYXJhbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtQYXJhbS5yZXBsYWNlKHJlLmF0dHJzLCBcIiQxXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBjaHVuay5tYXAoZnVuY3Rpb24gKGF0dHJQYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0clBhcmFtLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXR0ci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEpTT04ucGFyc2UodW5lc2NhcGUoYXR0ci5qb2luKFwiPVwiKSkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBlbW1ldDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtbWV0O1xuIiwiXG5leHBvcnQgY29uc3QgRVZFTlRTX05BTUVTID0ge1xuICAgIGNvcHk6ICdjb3B5JyxcbiAgICBjdXQ6ICdjdXQnLFxuICAgIHBhc3RlOiAncGFzdGUnLFxuICAgIGFib3J0OiAnYWJvcnQnLFxuICAgIGJsdXI6ICdibHVyJyxcbiAgICBjYW5jZWw6ICdjYW5jZWwnLFxuICAgIGNhbnBsYXk6ICdjYW5wbGF5JyxcbiAgICBjYW5wbGF5dGhyb3VnaDogJ2NhbnBsYXl0aHJvdWdoJyxcbiAgICBjaGFuZ2U6ICdjaGFuZ2UnLFxuICAgIGNsaWNrOiAnY2xpY2snLFxuICAgIGNsb3NlOiAnY2xvc2UnLFxuICAgIGNvbnRleHRtZW51OiAnY29udGV4dG1lbnUnLFxuICAgIGN1ZWNoYW5nZTogJ2N1ZWNoYW5nZScsXG4gICAgZGJsY2xpY2s6ICdkYmxjbGljaycsXG4gICAgZHJhZzogJ2RyYWcnLFxuICAgIGRyYWdlbmQ6ICdkcmFnZW5kJyxcbiAgICBkcmFnZW50ZXI6ICdkcmFnZW50ZXInLFxuICAgIGRyYWdsZWF2ZTogJ2RyYWdsZWF2ZScsXG4gICAgZHJhZ292ZXI6ICdkcmFnb3ZlcicsXG4gICAgZHJhZ3N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgICBkcm9wOiAnZHJvcCcsXG4gICAgZHVyYXRpb25jaGFuZ2U6ICdkdXJhdGlvbmNoYW5nZScsXG4gICAgZW1wdGllZDogJ2VtcHRpZWQnLFxuICAgIGVuZGVkOiAnZW5kZWQnLFxuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIGZvY3VzOiAnZm9jdXMnLFxuICAgIGlucHV0OiAnaW5wdXQnLFxuICAgIGludmFsaWQ6ICdpbnZhbGlkJyxcbiAgICBrZXlkb3duOiAna2V5ZG93bicsXG4gICAga2V5cHJlc3M6ICdrZXlwcmVzcycsXG4gICAga2V5dXA6ICdrZXl1cCcsXG4gICAgbG9hZDogJ2xvYWQnLFxuICAgIGxvYWRlZGRhdGE6ICdsb2FkZWRkYXRhJyxcbiAgICBsb2FkZWRtZXRhZGF0YTogJ2xvYWRlZG1ldGFkYXRhJyxcbiAgICBsb2Fkc3RhcnQ6ICdsb2Fkc3RhcnQnLFxuICAgIG1vdXNlZG93bjogJ21vdXNlZG93bicsXG4gICAgbW91c2VlbnRlcjogJ21vdXNlZW50ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZWxlYXZlJyxcbiAgICBtb3VzZW1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIG1vdXNlb3V0OiAnbW91c2VvdXQnLFxuICAgIG1vdXNlb3ZlcjogJ21vdXNlb3ZlcicsXG4gICAgbW91c2V1cDogJ21vdXNldXAnLFxuICAgIG1vdXNld2hlZWw6ICdtb3VzZXdoZWVsJyxcbiAgICBwYXVzZTogJ3BhdXNlJyxcbiAgICBwbGF5OiAncGxheScsXG4gICAgcGxheWluZzogJ3BsYXlpbmcnLFxuICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxuICAgIHJhdGVjaGFuZ2U6ICdyYXRlY2hhbmdlJyxcbiAgICByZXNldDogJ3Jlc2V0JyxcbiAgICByZXNpemU6ICdyZXNpemUnLFxuICAgIHNjcm9sbDogJ3Njcm9sbCcsXG4gICAgc2Vla2VkOiAnc2Vla2VkJyxcbiAgICBzZWVraW5nOiAnc2Vla2luZycsXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICBzdGFsbGVkOiAnc3RhbGxlZCcsXG4gICAgc3VibWl0OiAnc3VibWl0JyxcbiAgICBzdXNwZW5kOiAnc3VzcGVuZCcsXG4gICAgdGltZXVwZGF0ZTogJ3RpbWV1cGRhdGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZScsXG4gICAgdm9sdW1lY2hhbmdlOiAndm9sdW1lY2hhbmdlJyxcbiAgICB3YWl0aW5nOiAnd2FpdGluZycsXG4gICAgd2hlZWw6ICd3aGVlbCcsXG4gICAgYXV4Y2xpY2s6ICdhdXhjbGljaycsXG4gICAgZ290cG9pbnRlcmNhcHR1cmU6ICdnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgbG9zdHBvaW50ZXJjYXB0dXJlOiAnbG9zdHBvaW50ZXJjYXB0dXJlJyxcbiAgICBwb2ludGVyZG93bjogJ3BvaW50ZXJkb3duJyxcbiAgICBwb2ludGVybW92ZTogJ3BvaW50ZXJtb3ZlJyxcbiAgICBwb2ludGVydXA6ICdwb2ludGVydXAnLFxuICAgIHBvaW50ZXJjYW5jZWw6ICdwb2ludGVyY2FuY2VsJyxcbiAgICBwb2ludGVyb3ZlcjogJ3BvaW50ZXJvdmVyJyxcbiAgICBwb2ludGVyb3V0OiAncG9pbnRlcm91dCcsXG4gICAgcG9pbnRlcmVudGVyOiAncG9pbnRlcmVudGVyJyxcbiAgICBwb2ludGVybGVhdmU6ICdwb2ludGVybGVhdmUnLFxuICAgIHNlbGVjdHN0YXJ0OiAnc2VsZWN0c3RhcnQnLFxuICAgIHNlbGVjdGlvbmNoYW5nZTogJ3NlbGVjdGlvbmNoYW5nZScsXG4gICAgYW5pbWF0aW9uZW5kOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBhbmltYXRpb25pdGVyYXRpb246ICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgIGFuaW1hdGlvbnN0YXJ0OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHRyYW5zaXRpb25lbmQ6ICd0cmFuc2l0aW9uZW5kJyxcbn07XG5cbmV4cG9ydCBjb25zdCBFVkVOVFNfTkFNRVNfQkFTSUMgPSB7XG4gICAgYmx1cjogJ2JsdXInLFxuICAgIGNoYW5nZTogJ2NoYW5nZScsXG4gICAgY2xpY2s6ICdjbGljaycsXG4gICAgZGJsY2xpY2s6ICdkYmxjbGljaycsXG4gICAgZHJhZzogJ2RyYWcnLFxuICAgIGRyYWdlbmQ6ICdkcmFnZW5kJyxcbiAgICBkcmFnZW50ZXI6ICdkcmFnZW50ZXInLFxuICAgIGRyYWdsZWF2ZTogJ2RyYWdsZWF2ZScsXG4gICAgZHJhZ292ZXI6ICdkcmFnb3ZlcicsXG4gICAgZHJhZ3N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgICBkcm9wOiAnZHJvcCcsXG4gICAgZm9jdXM6ICdmb2N1cycsXG4gICAgaW5wdXQ6ICdpbnB1dCcsXG4gICAgbG9hZDogJ2xvYWQnLFxuICAgIG1vdXNlZG93bjogJ21vdXNlZG93bicsXG4gICAgbW91c2VlbnRlcjogJ21vdXNlZW50ZXInLFxuICAgIG1vdXNlbGVhdmU6ICdtb3VzZWxlYXZlJyxcbiAgICBtb3VzZW1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIG1vdXNlb3V0OiAnbW91c2VvdXQnLFxuICAgIG1vdXNlb3ZlcjogJ21vdXNlb3ZlcicsXG4gICAgbW91c2V1cDogJ21vdXNldXAnLFxuICAgIG1vdXNld2hlZWw6ICdtb3VzZXdoZWVsJyxcbiAgICBzY3JvbGw6ICdzY3JvbGwnLFxuICAgIHNlbGVjdDogJ3NlbGVjdCcsXG4gICAgc3VibWl0OiAnc3VibWl0JyxcbiAgICB3aGVlbDogJ3doZWVsJyxcbiAgICB0cmFuc2l0aW9uZW5kOiAndHJhbnNpdGlvbmVuZCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFVkVOVFNfTkFNRVM7XG4iLCJcbmNvbnN0IEV2ZW50TWFuYWdlciA9IHtcblxuICAgIGV2ZW50RnJhZ21lbnQ6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICB2ZXJzaW9uOiAnMC4wLjInLFxuICAgIGV2ZW50c1R5cGU6IHt9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRldGFpbHNcbiAgICAgKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgYWRkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIGRldGFpbHMpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge2RldGFpbDogZGV0YWlsc30pO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFpbHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGV0YWlscylcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lmhhc093blByb3BlcnR5KGtleSkpIGV2ZW50W2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W25hbWVdID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50OiBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W25hbWVdKVxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W25hbWVdXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZSBvbiB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqIEByZXR1cm5zIHt7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfX1cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpe1xuICAgICAgICB1c2VDYXB0dXJlID0gdXNlQ2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZXx8ZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYW4gZXZlbnQgdG8gdGhpcyBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uICh0eXBlKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W3R5cGVdIGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5kaXNwYXRjaEV2ZW50KEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50W3R5cGVdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudE1hbmFnZXI7XG4iLCIvKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXRcbiAgICAgICAga2V5LFxuICAgICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMuZGF0YSlcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgTmFtZXNwYWNlQXBwbGljYXRpb24gZnJvbSBcIi4vTmFtZXNwYWNlQXBwbGljYXRpb25cIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcIi4vY29va2llXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgU2Vzc2lvblN0b3JhZ2UgZnJvbSBcIi4vc2Vzc2lvbi1zdG9yYWdlXCI7XG5pbXBvcnQgRGF0ZXRpbWUgZnJvbSBcIi4vZGF0ZXRpbWVcIjtcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSBcIi4vZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XG5pbXBvcnQgRW1tZXQgZnJvbSBcIi4vZW1tZXRcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi9odHRwLXJlcXVlc3RcIjtcbmltcG9ydCBEb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgU3RyIGZyb20gXCIuL3N0clwiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vcm94eVwiO1xuXG5cbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbiA9IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlV0aWwgPSBVdGlsO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkNvb2tpZSA9IENvb2tpZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5TdG9yYWdlID0gU3RvcmFnZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5TZXNzaW9uU3RvcmFnZSA9IFNlc3Npb25TdG9yYWdlO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkRhdGV0aW1lID0gRGF0ZXRpbWU7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlRpbWVyID0gVGltZXI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uRW1tZXQgPSBFbW1ldDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5odHRwUmVxdWVzdCA9IGh0dHBSZXF1ZXN0O1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkRvbSA9IERvbTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5TdHIgPSBTdHI7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uUm94eSA9IFJveHk7XG4iLCJpbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IGFjdGlvbnMgPSB7ZGVmYXVsdDpudWxsfTtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uc1twcm9wXSAmJiB0eXBlb2YgYWN0aW9uc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIGFjdGlvbnNbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25zLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBzZXQgKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIGFjdGlvbnNba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gY2FsbGJhY2sgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA/IHByb3h5W2tleV0gOiBjb3B5KHByb3h5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsIChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgcHJveHksXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJcbi8qKlxuICogQWRkIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBqc29uID0gdHJ1ZSkge1xuICAgIGlmIChqc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwganNvbiA9IHRydWUpIHtcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAoanNvbiAmJiB2YWx1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKnRydWVcbiAqIFJlbW92ZSBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmNvbnN0IHJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IGluZGV4XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGtleSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uua2V5KGluZGV4KVxufTtcblxuLyoqXG4gKiBXaGVuIGludm9rZWQsIHdpbGwgZW1wdHkgYWxsIGtleXMgb3V0IG9mIHRoZSBTZXNzaW9uU3RvcmFnZS5cbiAqL1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpXG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU2Vzc2lvblN0b3JhZ2Ugb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UubGVuZ3RoXG59O1xuXG4vKipcbiAqIFNlc3Npb25TdG9yYWdlIHdyYXBwZXJcbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7e3NldDogKFNlc3Npb25TdG9yYWdlLnNldHwqKSwgZ2V0OiAoU2Vzc2lvblN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTZXNzaW9uU3RvcmFnZS5rZXl8KiksIGNsZWFyOiAoU2Vzc2lvblN0b3JhZ2UuY2xlYXJ8KiksIHJlbW92ZTogKFNlc3Npb25TdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU2Vzc2lvblN0b3JhZ2UubGVuZ3RofCopfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTZXNzaW9uU3RvcmFnZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXQobmFtZSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbi8vXG5TZXNzaW9uU3RvcmFnZS5zZXQgPSBzZXQ7XG5TZXNzaW9uU3RvcmFnZS5nZXQgPSBnZXQ7XG5TZXNzaW9uU3RvcmFnZS5rZXkgPSBrZXk7XG5TZXNzaW9uU3RvcmFnZS5jbGVhciA9IGNsZWFyO1xuU2Vzc2lvblN0b3JhZ2UucmVtb3ZlID0gcmVtb3ZlO1xuU2Vzc2lvblN0b3JhZ2Uuc2l6ZSA9IGxlbmd0aDtcblxuZXhwb3J0IHtcbiAgICBzZXQsXG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgbGVuZ3RoLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvblN0b3JhZ2U7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgbGlzdFtrZXldLCBrZXksIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIGFwcGVuZCwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSAoQUJDICsgTlVNQkVSUykudG9Mb3dlckNhc2UoKS5zcGxpdCgnJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz1cbiAgICAgICAgICAgIGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuY29uc3Qgc3RyMmZyYWdtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cmluZyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBpLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMmZyYWdtZW50O1xuIiwiaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi9zdHIyZnJhZ21lbnRcIjtcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgZnJhZ21lbnQgPSBzdHIyZnJhZ21lbnQoc3RyaW5nKTtcblxuICAgIHN3aXRjaCAoZnJhZ21lbnQuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgY2FzZSAwOiBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZnJhZ21lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIybm9kZTtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iLCJcbi8qKlxuICogQWRkIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBqc29uID0gdHJ1ZSkge1xuICAgIGlmIChqc29uKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBHZXQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIGpzb25cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIGpzb24gPSB0cnVlKSB7XG4gICAgbGV0IHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmIChqc29uICYmIHZhbHVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqdHJ1ZVxuICogUmVtb3ZlIGl0ZW0gYnkgbmFtZVxuICogQHBhcmFtIG5hbWVcbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpXG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IGluZGV4XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IGtleSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmtleShpbmRleClcbn07XG5cbi8qKlxuICogV2hlbiBpbnZva2VkLCB3aWxsIGVtcHR5IGFsbCBrZXlzIG91dCBvZiB0aGUgc3RvcmFnZS5cbiAqL1xuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGF0YSBpdGVtcyBzdG9yZWQgaW4gdGhlIFN0b3JhZ2Ugb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aFxufTtcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHt7c2V0OiAoU3RvcmFnZS5zZXR8KiksIGdldDogKFN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTdG9yYWdlLmtleXwqKSwgY2xlYXI6IChTdG9yYWdlLmNsZWFyfCopLCByZW1vdmU6IChTdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU3RvcmFnZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0b3JhZ2UgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXQ6IHNldCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gZ2V0KG5hbWUpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG4vL1xuU3RvcmFnZS5zZXQgPSBzZXQ7XG5TdG9yYWdlLmdldCA9IGdldDtcblN0b3JhZ2Uua2V5ID0ga2V5O1xuU3RvcmFnZS5jbGVhciA9IGNsZWFyO1xuU3RvcmFnZS5yZW1vdmUgPSByZW1vdmU7XG5TdG9yYWdlLnNpemUgPSBsZW5ndGg7XG5cbmV4cG9ydCB7XG4gICAgc2V0LFxuICAgIGdldCxcbiAgICBrZXksXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGxlbmd0aCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuXG5cbmNvbnN0IGNhcGl0YWxpemUgPSAocykgPT4ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJztcbiAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59O1xuXG5mdW5jdGlvbiBTdHIgKHN0cmluZykge1xuICAgIGNvbnN0ICQgPSB7XG4gICAgICAgIHN0cmluZzogdHlwZU9mKHN0cmluZywgJ3N0cmluZycpID8gc3RyaW5nIDogJycsXG4gICAgICAgIGxlbmd0aDogc3RyaW5nLmxlbmd0aCxcbiAgICB9O1xuXG4gICAgJC5jYXBpdGFsaXplID0gKCkgPT4gY2FwaXRhbGl6ZSgkLnN0cmluZyk7XG4gICAgJC51cHBlciA9ICgpID0+ICQuc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgJC5sb3dlciA9ICgpID0+ICQuc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgJC5wYWRFbmQgPSAodmFsdWUpID0+ICQuc3RyaW5nLnBhZEVuZCh2YWx1ZSk7XG4gICAgJC5wYWRTdGFydCA9ICh2YWx1ZSkgPT4gJC5zdHJpbmcucGFkU3RhcnQodmFsdWUpO1xuICAgICQuZWFjaCA9IChjYWxsYmFjaykgPT4gY2FsbGJhY2sgPyAkLnN0cmluZy5zcGxpdCgnJykuZm9yRWFjaChjYWxsYmFjaykgOiAkLnN0cmluZy5zcGxpdCgnJyk7XG5cbiAgICByZXR1cm4gJDtcbn1cblxuU3RyLm5vZGUyc3RyID0gbm9kZTJzdHI7XG5TdHIuc3RyMm5vZGUgPSBzdHIybm9kZTtcblN0ci5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcblN0ci5lYWNoID0gZWFjaDtcblxuXG5leHBvcnQgZGVmYXVsdCBTdHI7XG4iLCIvKipcbiAqIFNpbXBsZSB0aW1lciByZWFsaXNlLiBSZXR1cm4gc2VsZi1pbnN0YW5jZVxuICogdGltZXIgPSBuZXcgLlRpbWVyKGZ1bmN0aW9uKGl0ZXJhdG9yLCByZXBlYXQpe30sIDEwMDAsIDUpXG4gKiAgSW5zdGFuY2UgbWV0aG9kc1xuICogICAgICB0aW1lci5yZXBlYXRcbiAqICAgICAgdGltZXIuaXRlcmF0b3JcbiAqICAgICAgdGltZXIuc3RhcnQgKClcbiAqICAgICAgdGltZXIuc3RvcCAoKVxuICogICAgICB0aW1lci5wYXVzZSAoKVxuICogICAgICB0aW1lci5yZXNldCAoKVxuICogICAgICB0aW1lci5jbGVhciAoKVxuICogIFN0YXRpYyBtZXRob2RzXG4gKiAgICAgIFRpbWVyLnRpbWVvdXQgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogdGltZW91dElkXG4gKiAgICAgIFRpbWVyLmludGVydmFsIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSA6IGludGVydmFsSWRcbiAqICAgICAgVGltZXIudGltZW91dFN0b3AgKHRpbWVvdXRJZClcbiAqICAgICAgVGltZXIuaW50ZXJ2YWxTdG9wIChpbnRlcnZhbElkKVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gZGVsYXlcbiAqIEBwYXJhbSByZXBlYXRcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2UgIGlmIG5vdCBzZXQsIHVzZXMgaW5zdGFuY2Ugb2YgVGltZXJcbiAqIEByZXR1cm5zIHtXaW5kb3cuVGltZXJ8VGltZXJ9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUaW1lcikpXG4gICAgICAgIHJldHVybiBuZXcgVGltZXIoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSk7XG5cbiAgICBkZWxheSA9IGRlbGF5ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChkZWxheSkgOiA1MDA7XG4gICAgcmVwZWF0ID0gcmVwZWF0ICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChyZXBlYXQpIDogMDtcbiAgICBjb25zdCBjb25maWcgPSB7c2VsZjogdGhpcywgY2FsbGJhY2s6IGNhbGxiYWNrLCBkZWxheTogZGVsYXksIHJlcGVhdDogcmVwZWF0fTtcblxuICAgIGxldCBodCA9IG51bGw7XG4gICAgY29uc3QgaGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbmZpZy5zZWxmLml0ZXJhdG9yKys7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ICE9PSAwICYmIGNvbmZpZy5yZXBlYXQgPD0gY29uZmlnLnNlbGYuaXRlcmF0b3IpXG4gICAgICAgICAgICBjb25maWcuc2VsZi5zdG9wKCk7XG4gICAgICAgIGNvbmZpZy5jYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB0aGlzLCBjb25maWcuc2VsZi5pdGVyYXRvciwgY29uZmlnLnJlcGVhdCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb25maWcucmVwZWF0ID09PSAwIHx8IGNvbmZpZy5yZXBlYXQgPiBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGh0ID0gc2V0SW50ZXJ2YWwoaGMsIGNvbmZpZy5kZWxheSk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBjb25maWcucmVwZWF0O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKClcbiAgICB9O1xuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSAwXG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKGh0KVxuICAgIH07XG59O1xuXG5UaW1lci50aW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5pbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnRpbWVvdXRTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmludGVydmFsU3RvcCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7ZXh0ZW5kUmVjdXJzaXZlfSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7cmFuZG9tQ29sb3IsIHJhbmRvbUl0ZW0sIHJhbmRvbU51bWJlciwgcmFuZG9tU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5jb25zdCBVdGlsID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGluamVjdCxcbiAgICBzdHIybm9kZSxcbiAgICBzdHIyZnJhZ21lbnQsXG4gICAgbm9kZTJzdHIsXG4gICAgcXVlcnksXG4gICAgcXVlcnlBbGwsXG4gICAgc2VhcmNoLFxuICAgIGVuY29kZUdldFF1ZXJ5LFxuICAgIGRlY29kZUdldFF1ZXJ5LFxuICAgIGh0dHBSZXF1ZXN0LFxuICAgIGRlZmluZWQsXG4gICAgZGVmaW5lZEluLFxuICAgIGV4dGVuZCxcbiAgICBleHRlbmRSZWN1cnNpdmUsXG4gICAgZWFjaCxcbiAgICBmaW5kT2JqZWN0LFxuICAgIGZpbmRPYmplY3RzLFxuICAgIGZvcm1hdCxcbiAgICBpc0VtcHR5LFxuICAgIGlzTm9kZSxcbiAgICBsb2FkQ1NTLFxuICAgIGxvYWRKUyxcbiAgICBsb2FkSlNTeW5jLFxuICAgIG1lcmdlLFxuICAgIG51bWJlcjJzdHJpbmcsXG4gICAgb24sXG4gICAgcG9zaXRpb24sXG4gICAgcG9zaXRpb25Nb3VzZSxcbiAgICByYW5kb20sXG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJlZGlyZWN0LFxuICAgIHR5cGVPZixcbiAgICB0eXBlT2ZTdHJpY3QsXG4gICAgdXJpLFxuICAgIGNvcHksXG4gICAgY2xvbmU6IGNvcHksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==