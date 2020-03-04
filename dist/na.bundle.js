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

var _store = __webpack_require__(/*! ./store */ "./src/store/index.js");

var _store2 = _interopRequireDefault(_store);

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
window.NamespaceApplication.Store = _store2.default;
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
    //if (isNode(value))
    //    t = 'node';
    //else
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

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
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
 * Returns an integer representing the number of data items stored in the Store object.
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
 * @returns {{set: (Store.set|*), get: (Store.get|*), key: (Store.key|*), clear: (Store.clear|*), remove: (Store.remove|*), length: (Store.length|*)}}
 * @constructor
 */
var Store = function Store(name, value) {
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
Store.set = set;
Store.get = get;
Store.key = key;
Store.clear = clear;
Store.remove = remove;
Store.size = length;

exports.set = set;
exports.get = get;
exports.key = key;
exports.clear = clear;
exports.remove = remove;
exports.length = length;
exports.default = Store;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm94eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYW1lc3BhY2VBcHBsaWNhdGlvbiIsImNvbmZpZyIsImluc3RhbmNlIiwia2V5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb25maWd1cmF0aW9uIiwiaWQiLCJ1cmwiLCJtb2RlIiwiZGVidWciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImRlZmluZVByb3BlcnR5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JpdGFibGUiLCJjb21wb25lbnQiLCJyZWdpc3RlciIsImV4dGVuc2lvbiIsImRlcGVuZGVuY3kiLCJyb3V0ZSIsIk1PREVfREVCVUciLCJDb29raWUiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2V0IiwiZ2V0IiwiY2xlYXIiLCJyZW1vdmUiLCJvcHRpb25zIiwidHlwZUpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhwaXJlcyIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInBhcnNlSW50IiwibWF4QWdlIiwic2FtZVNpdGUiLCJlbmNvZGUiLCJjb29raWUiLCJtYXRjaGVzIiwibWF0Y2giLCJSZWdFeHAiLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGF0YUpzb24iLCJwYXJzZSIsIm9wdGlvbiIsInN0ciIsImRlY29kZSIsImNvb2tpZXMiLCJzcGxpdCIsInBhcnRzIiwidHJpbSIsImxpc3QiLCJjb21wIiwiY3JlYXRlIiwiaW5pdCIsImluaXRpYWxpemVkIiwidGVtcGxhdGUiLCJub2RlIiwic3R5bGVzIiwic2V0U3R5bGVzIiwiYXR0cmlidXRlc0V2ZW50c0hhbmRsZXIiLCJFVkVOVFNfTkFNRVNfQkFTSUMiLCJpbmplY3RDb21wb25lbnQiLCJyb290IiwiRXJyb3IiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImNhbGwiLCJwcm9wcyIsIm92ZXJyaWRlIiwibWV0aG9kcyIsInByZWZpeCIsImV2ZW50c05hbWVzIiwiYWRkRXZlbnQiLCJlbGVtIiwiYXR0ciIsImV2ZW50TmFtZSIsIm1ldGhvZCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBhdGgiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFzQXR0cmlidXRlIiwibm9kZXMiLCJwcm9wIiwic2VsZWN0b3IiLCJzdHlsZSIsImZvcmNlIiwic291cmNlcyIsImNzcyIsImpzIiwiZWxlbWVudHMiLCJsb2FkIiwibWF4Iiwic3JjcyIsImkiLCJsb2FkQ1NTIiwibG9hZEpTIiwic3JjIiwicHVzaCIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb250ZXh0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXRlIiwiY2FsbGJhY2siLCJzb3VyY2UiLCJjcmVhdGVTb3VyY2UiLCJzb3VyY2VkYXRhIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldENhc2UiLCJQcm94eSIsIm9iaiIsIkRhdGV0aW1lIiwiTVNfSU5fREFZIiwiTVNfSU5fSE9VUiIsIk1TX0lOX01JTiIsInRpbWUiLCJhZGREYXlzIiwiZGF5IiwiZGF0ZVN0YXJ0IiwiYmV0d2VlbkRhdGVzIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJkaWZmTXMiLCJkaWZmRGF5cyIsIk1hdGgiLCJyb3VuZCIsImRpZmZIcnMiLCJkaWZmTWluIiwiaG91ciIsIm1pbnV0ZSIsInN0clRvRGF0ZSIsImZvcm1hdCIsInV0YyIsInRlbXAiLCJtYXNrIiwidG9Mb3dlckNhc2UiLCJVVEMiLCJEb20iLCIkIiwic2VsZWN0ZWQiLCJfc2V0X3JlYWxfZGlzcGxheV9zdHlsZSIsIm1hcCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwib25lIiwiYWxsIiwiaW5qZWN0IiwiYXBwZW5kIiwidG8iLCJzZWFyY2giLCJwYXJlbnQiLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwicXVlcnkiLCJxdWVyeUFsbCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsIm9uIiwiYnViYmxlIiwiY29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJsb2FkZWQiLCJkb21Mb2FkZWQiLCJzdHIybm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnbWVudCIsImNyZWF0ZUZyYWdtZW50Iiwibm9kZTJzdHIiLCJFbW1ldCIsInRlbXBJbm5lclRleHRzIiwidGVtcEVzY2FwZWQiLCJyZSIsImV4Y2x1ZGVzIiwiY2xhc3NlcyIsInRhZyIsImluZGV4ZXMiLCJlc2NhcGUiLCJpbm5lclRleHQiLCJhdHRycyIsImVtbWV0IiwidGV4dCIsImh0bWxPbmx5IiwidHJlZSIsImN1cnJlbnQiLCJsYXN0RWxlbWVudCIsImNvbW1hbmRUZXh0IiwiY29udmVydENvbGxlY3Rpb24iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZXN1bHQiLCJmdWxsIiwicXVvdGVzIiwiZWxlbWVudFRleHQiLCJzcGxpdHRlciIsImlubmVySFRNTCIsIkhUTUxDb2xsZWN0aW9uIiwibWF0Y2hfdGFnIiwibWF0Y2hfaWQiLCJtYXRjaF9jbGFzc2VzIiwibWF0Y2hfYXR0cnMiLCJtYXRjaF9pbm5lclRleHQiLCJwb3AiLCJjbGFzc05hbWUiLCJzbGljZSIsImpvaW4iLCJ1bmVzY2FwZSIsInNoaWZ0IiwiY2h1bmtQYXJhbSIsImNodW5rIiwiYXR0clBhcmFtIiwic2V0QXR0cmlidXRlIiwiRVZFTlRTX05BTUVTIiwiY29weSIsImN1dCIsInBhc3RlIiwiYWJvcnQiLCJibHVyIiwiY2FuY2VsIiwiY2FucGxheSIsImNhbnBsYXl0aHJvdWdoIiwiY2hhbmdlIiwiY2xpY2siLCJjbG9zZSIsImNvbnRleHRtZW51IiwiY3VlY2hhbmdlIiwiZGJsY2xpY2siLCJkcmFnIiwiZHJhZ2VuZCIsImRyYWdlbnRlciIsImRyYWdsZWF2ZSIsImRyYWdvdmVyIiwiZHJhZ3N0YXJ0IiwiZHJvcCIsImR1cmF0aW9uY2hhbmdlIiwiZW1wdGllZCIsImVuZGVkIiwiZm9jdXMiLCJpbnB1dCIsImludmFsaWQiLCJrZXlkb3duIiwia2V5cHJlc3MiLCJrZXl1cCIsImxvYWRlZGRhdGEiLCJsb2FkZWRtZXRhZGF0YSIsImxvYWRzdGFydCIsIm1vdXNlZG93biIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibW91c2Vtb3ZlIiwibW91c2VvdXQiLCJtb3VzZW92ZXIiLCJtb3VzZXVwIiwibW91c2V3aGVlbCIsInBhdXNlIiwicGxheSIsInBsYXlpbmciLCJwcm9ncmVzcyIsInJhdGVjaGFuZ2UiLCJyZXNldCIsInJlc2l6ZSIsInNjcm9sbCIsInNlZWtlZCIsInNlZWtpbmciLCJzZWxlY3QiLCJzdGFsbGVkIiwic3VibWl0Iiwic3VzcGVuZCIsInRpbWV1cGRhdGUiLCJ2b2x1bWVjaGFuZ2UiLCJ3YWl0aW5nIiwid2hlZWwiLCJhdXhjbGljayIsImdvdHBvaW50ZXJjYXB0dXJlIiwibG9zdHBvaW50ZXJjYXB0dXJlIiwicG9pbnRlcmRvd24iLCJwb2ludGVybW92ZSIsInBvaW50ZXJ1cCIsInBvaW50ZXJjYW5jZWwiLCJwb2ludGVyb3ZlciIsInBvaW50ZXJvdXQiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJzZWxlY3RzdGFydCIsInNlbGVjdGlvbmNoYW5nZSIsImFuaW1hdGlvbmVuZCIsImFuaW1hdGlvbml0ZXJhdGlvbiIsImFuaW1hdGlvbnN0YXJ0IiwidHJhbnNpdGlvbmVuZCIsIkV2ZW50TWFuYWdlciIsImV2ZW50RnJhZ21lbnQiLCJ2ZXJzaW9uIiwiZXZlbnRzVHlwZSIsImRldGFpbHMiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVFdmVudCIsInR5cGUiLCJsaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsImh0dHBSZXF1ZXN0IiwidGhpc0luc3RhbmNlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJocmVmIiwidG9VcHBlckNhc2UiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJwYXJhbXMiLCJzZW5kRGF0YSIsImluZGV4T2YiLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwid2luZG93IiwiVXRpbCIsIlN0b3JlIiwiVGltZXIiLCJTdHIiLCJSb3h5IiwiYWN0aW9ucyIsImRlZmF1bHQiLCJwcm94eSIsImZpbGwiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsInR5cGVfZWxlbWVudCIsImNsb25lTm9kZSIsImlzQXJyYXkiLCJiaW5kIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJrIiwicHJvcGVydGllcyIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwic3Vic3RyaW5nIiwiZGVjb2RlR2V0UXVlcnkiLCJwYWlycyIsInN1YnN0ciIsIml0ZW0iLCJwYWlyIiwiZGVmaW5lZCIsImRlZmluZWRJbiIsInN0YWNrIiwiZG9jIiwiZWFjaCIsInYiLCJhIiwiTm9kZUxpc3QiLCJmaWx0ZXIiLCJsb29wcyIsImdldFBhcmVudCIsImVuY29kZUdldFF1ZXJ5IiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJwYXJhbSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJleHRlbmRSZWN1cnNpdmUiLCJwcm9wZXJ0eSIsImZpbmRPYmplY3QiLCJ2YWx1ZXMiLCJhdHRyVmFsdWUiLCJ0bXAiLCJmaW5kT2JqZWN0cyIsImZpbmRzIiwiZmluZCIsInN0cmluZyIsInJlZyIsIm51bWJlciIsImdldERvY3VtZW50IiwiZ2V0TG9jYXRpb24iLCJ0ZXh0Q29udGVudCIsImlzRW1wdHkiLCJpc05hTiIsImlzTm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwib25sb2FkIiwib25lcnJvciIsImxpbmsiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJlbCIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJsb2FkSlNTeW5jIiwiaXRlcmF0b3IiLCJzY3JpcHRzIiwibWVyZ2UiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsIm51bWJlcjJzdHJpbmciLCJhYnMiLCJwb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZWN0Iiwic2Nyb2xsVG9wIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJwb3NpdGlvbk1vdXNlIiwiTW91c2VFdmVudCIsImNvbnNvbGUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1pbiIsImZsb29yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJyYW5kb21OdW1iZXIiLCJzaXplIiwiY2VpbCIsInJlcyIsInJhbmRvbVN0cmluZyIsInJhbmRvbUl0ZW0iLCJhcnIiLCJyZWRpcmVjdCIsImxvYyIsInF1ZXJ5RWxlbWVudHMiLCJzdHIyZnJhZ21lbnQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImZpcnN0Q2hpbGQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImZpcnN0RWxlbWVudENoaWxkIiwidHlwZU9mIiwic2ltcGxlVHlwZXMiLCJ0IiwidHlwZU9mU3RyaWN0IiwidXJpIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4IiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ1cHBlciIsImxvd2VyIiwicGFkRW5kIiwicGFkU3RhcnQiLCJkZWxheSIsInJlcGVhdCIsInNlbGYiLCJodCIsImhjIiwic3RvcCIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsIm1zIiwidGhpc0luc3QiLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWwiLCJ0aW1lb3V0U3RvcCIsImNsZWFyVGltZW91dCIsImludGVydmFsU3RvcCIsImNsb25lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7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UztBQUlUM0Ysc0JBSlM7QUFLVHVGLGtDQUxTO0FBTVR6Qiw0QkFOUztBQU9UMEIsZ0NBUFM7QUFRVDZTLHdDQVJTO0FBU1R6UyxnQ0FUUztBQVVUdkIsMEJBVlM7QUFXVEMsZ0NBWFM7QUFZVEwsNEJBWlM7QUFhVCtPLDRDQWJTO0FBY1RoQiw0Q0FkUztBQWVUNUQsc0NBZlM7QUFnQlRpRSw4QkFoQlM7QUFpQlRDLGtDQWpCUztBQWtCVFcsNEJBbEJTO0FBbUJUTSw0Q0FuQlM7QUFvQlRkLHdCQXBCUztBQXFCVGdCLG9DQXJCUztBQXNCVEksc0NBdEJTO0FBdUJUOVEsNEJBdkJTO0FBd0JUdVIsOEJBeEJTO0FBeUJURSw0QkF6QlM7QUEwQlRqVSw4QkExQlM7QUEyQlRDLDRCQTNCUztBQTRCVGdWLG9DQTVCUztBQTZCVEcsMEJBN0JTO0FBOEJUSSwwQ0E5QlM7QUErQlRqUixvQkEvQlM7QUFnQ1RWLGdDQWhDUztBQWlDVDZTLDBDQWpDUztBQWtDVC9CLDRCQWxDUztBQW1DVHNDLG9DQW5DUztBQW9DVFEsa0NBcENTO0FBcUNUTCxzQ0FyQ1M7QUFzQ1RJLHNDQXRDUztBQXVDVEcsZ0NBdkNTO0FBd0NUUyw0QkF4Q1M7QUF5Q1RHLHdDQXpDUztBQTBDVEMsc0JBMUNTO0FBMkNUdFEsd0JBM0NTO0FBNENUcVMsV0FBT3JTO0FBNUNFLENBQWI7O2tCQStDZXFILEkiLCJmaWxlIjoibmEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvcmUvY29tcG9uZW50XCI7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gXCIuL2NvcmUvZXh0ZW5zaW9uXCI7XG5pbXBvcnQgZGVwZW5kZW5jeSBmcm9tIFwiLi9jb3JlL2RlcGVuZGVuY3lcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9jb3JlL3JvdXRlXCI7XG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vY29yZS9zdGF0ZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vc3RhdGljL2RlZmluZWRcIjtcblxuY2xhc3MgTmFtZXNwYWNlQXBwbGljYXRpb25cbntcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgaWYgKE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgcmV0dXJuIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gKGtleSwgdmFsdWUpID0+IHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA6IHRoaXMuY29uZmlndXJhdGlvbltrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlYnVnOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uW2tleV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmlkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb290XCIsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZ3VyYXRpb24uaWQpLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVnaXN0ZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBleHRlbnNpb247XG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uLnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeSA9IGRlcGVuZGVuY3k7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgLy8gdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG59XG5cbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLk1PREVfREVCVUcgPSAnZGVidWcnO1xuXG5leHBvcnQgZGVmYXVsdCBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcbiIsIlxuXG4vKipcbiAqIExvY2FsU3RvcmFnZSB3cmFwcGVyXG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIG9wdGlvblxuICogQHJldHVybnMge3tzZXQ6IChDb29raWUuc2V0fCopLCBnZXQ6IChDb29raWUuZ2V0fCopLCBrZXk6IChDb29raWUua2V5fCopLCBjbGVhcjogKENvb2tpZS5jbGVhcnwqKSwgcmVtb3ZlOiAoQ29va2llLnJlbW92ZXwqKSwgbGVuZ3RoOiAoQ29va2llLmxlbmd0aHwqKX19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29va2llID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0OiBzZXQsXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXQgQ29va2llIGtleSwgdmFsdWVcbiAqICBleHBpcmVzIC0gbXMsIERhdGUsIC0xLCAwXG4gKiAgbWF4QWdlIC0gcyAoeWVhciAzMTUzNjAwMClcbiAqICBTYW1lU2l0ZT1TdHJpY3R8TGF4XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0ge3t9fSBvcHRpb25zICAge2V4cGlyZXM6IDAsIHBhdGg6ICcvJywgZG9tYWluOiAnc2l0ZS5jb20nLCBzZWN1cmU6IGZhbHNlLCBtYXhBZ2U6IDYwKjYwKjI0KjM2NSwgc2FtZVNpdGU6ICcnIH1cbiAqIEBwYXJhbSB0eXBlSnNvbiBib29sXG4gKi9cbmNvbnN0IHNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucywgdHlwZUpzb24gPSB0cnVlKVxue1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cbiAgICBpZiAoQ29va2llLnR5cGVKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGxldCBkYXRhID0gbmFtZSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIGlmIChvcHRpb25zLmV4cGlyZXMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBwYXJzZUludChvcHRpb25zLmV4cGlyZXMpICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tYXhBZ2UpIHtcbiAgICAgICAgb3B0aW9uc1snbWF4LWFnZSddID0gb3B0aW9ucy5tYXhBZ2U7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLm1heEFnZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc2FtZVNpdGUpIHtcbiAgICAgICAgb3B0aW9uc1snc2FtZXNpdGUnXSA9IG9wdGlvbnMuc2FtZVNpdGU7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLnNhbWVTaXRlO1xuICAgIH1cblxuICAgIGRhdGEgKz0gZW5jb2RlKG9wdGlvbnMpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGRhdGE7XG59O1xuXG4vKipcbiAqIEdldCBDb29raWUgdmFsdWUgYnkga2V5XG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHR5cGVKc29uIGJvb2xcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZUpzb24gPSB0cnVlKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcbiAgICApKTtcblxuICAgIGxldCBkYXRhID0gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChDb29raWUuZGF0YUpzb24pIHt9XG4gICAgaWYgKHR5cGVKc29uICYmIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG5cbiAgICByZXR1cm4gZGF0YVxufTtcblxuLyoqXG4gKiBSZW1vdmUgQ29va2llIGJ5IGtleVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBvcHRpb25cbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7ZXhwaXJlczogLTF9O1xuICAgIHNldChuYW1lLCBcIlwiLCBvcHRpb24pO1xufTtcblxuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gJyc7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IHRvIHVyaSBnZXQgc3RyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgICAgZXhhbXBsZToge2V4cGlyZXM6IDAsIHBhdGg6ICcvJywgZG9tYWluOiAnbXktc2l0ZS5jb20nLCBzZWN1cmU6IGZhbHNlfVxuICogQHJldHVybnMge3N0cmluZ30gICAgICAgIGV4YW1wbGU6IFwiZXhwaXJlcz0wO3BhdGg9Lztkb21haW49c2l0ZS5jb207c2VjdXJlPWZhbHNlXCI7XG4gKi9cbmNvbnN0IGVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzdHIgKz0gJzsnICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKFxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgICAgICkpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVzWzFdKSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge30sXG4gICAgICAgICAgICBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpO1xuXG4gICAgICAgIGNvb2tpZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBkYXRhW3BhcnRzWzBdLnRyaW0oKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn07XG5cbkNvb2tpZS5zZXQgPSBzZXQ7XG5Db29raWUuZ2V0ID0gZ2V0O1xuQ29va2llLnJlbW92ZSA9IHJlbW92ZTtcbkNvb2tpZS5jbGVhciA9IGNsZWFyO1xuQ29va2llLmVuY29kZSA9IGVuY29kZTtcbkNvb2tpZS5kZWNvZGUgPSBkZWNvZGU7XG5Db29raWUuZGF0YUpzb24gPSB0cnVlO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAgY2xlYXIsXG4gICAgcmVtb3ZlLFxuICAgIGVuY29kZSxcbiAgICBkZWNvZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWU7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHsgRVZFTlRTX05BTUVTX0JBU0lDIH0gZnJvbSBcIi4uL2V2ZW50LW1hbmFnZXIvZXZlbnRzTmFtZXNcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5cbmNvbnN0IGNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcblxuXG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgY29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG5cbiAgICAgICAgICAgIGlmIChjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5vZGVdJykpXG4gICAgICAgICAgICAgICAgY29tcC5ub2RlID0gc2VhcmNoKCdbZGF0YS1ub2RlXScsICdkYXRhLW5vZGUnLCBjb21wLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbXAuc3R5bGVzKVxuICAgICAgICAgICAgICAgIHNldFN0eWxlcyhjb21wKTtcblxuICAgICAgICAgICAgYXR0cmlidXRlc0V2ZW50c0hhbmRsZXIoY29tcCwgJ29uJywgT2JqZWN0LmtleXMoRVZFTlRTX05BTUVTX0JBU0lDKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICBpbmplY3RDb21wb25lbnQgKGNvbXAsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFjb21wLnRlbXBsYXRlICYmIHRoaXMucm9vdCl7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXJ5KCdbZGF0YS1jb21wb25lbnQ9XCInKyBjb21wLmlkICsnXCJdJywgdGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSlcbiAgICAgICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoTmFtZXNwYWNlQXBwbGljYXRpb24ubW9kZSA9PT0gTmFtZXNwYWNlQXBwbGljYXRpb24uTU9ERV9ERUJVRylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiTGF0ZSBDYWxsXCI6IENvbXBvbmVudCBbJytjb21wLmlkKyddIGNhbiB0IGNhbGwgY29tcGxldGVkKCkgYW5kIGluamVjdHMnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCAmJiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuY29tcG9uZW50LnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudC5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBjb21wb25lbnQubGlzdFtrZXldO1xuXG4gICAgICAgICAgICBpZiAoY29tcC5jb21wbGV0ZSAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBpbmplY3RDb21wb25lbnQgKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29tcG9uZW50Lmxpc3QgPSB7fTtcblxuY29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiBudWxsLFxuICAgICAgICBzdHlsZXM6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlciAoY29tcCwgcHJlZml4LCBldmVudHNOYW1lcykge1xuICAgIGNvbnN0IGFkZEV2ZW50ID0gKGVsZW0sIGF0dHIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBlbGVtLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW21ldGhvZF0uY2FsbChjb21wLCBlLCBlLnRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQgfHwgZS5wYXRoWzBdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZXZlbnRzTmFtZXMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBwcmVmaXggKyAnLScgKyBldmVudE5hbWU7XG4gICAgICAgIGlmIChjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ1snK2F0dHIrJ10nKSkge1xuICAgICAgICAgICAgQXJyYXkuZnJvbShjb21wLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1snK2F0dHIrJ10nKSkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGVsZW0sIGF0dHIsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXAudGVtcGxhdGUuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICBhZGRFdmVudChjb21wLnRlbXBsYXRlLCBhdHRyLCBldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5qZWN0Q29tcG9uZW50IChjb21wLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IG5vZGVzID0gcXVlcnlBbGwoJ1tkYXRhLWNvbXBvbmVudD1cIicrIGNvbXAuaWQgKydcIl0nLCBpbnN0YW5jZS5yb290KTtcblxuICAgIGlmIChub2RlcylcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXAucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjb21wLnByb3BzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYobm9kZS5oYXNBdHRyaWJ1dGUocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZ2V0QXR0cmlidXRlKHByb3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUgIT09IGNvbXAudGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgaW5qZWN0KG5vZGUsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZXMoY29tcCwgaW5zdGFuY2UpIHtcblxuICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzKS5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICd0ZW1wbGF0ZScgJiYgaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLnN0eWxlc1tzZWxlY3Rvcl0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuc3R5bGVba2V5XSA9IGNvbXAuc3R5bGVzW3NlbGVjdG9yXVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcXVlcnlBbGwoc2VsZWN0b3IsIGNvbXAudGVtcGxhdGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5zdHlsZXNbc2VsZWN0b3JdKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gY29tcC5zdHlsZXNbc2VsZWN0b3JdW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG4iLCJpbXBvcnQgbG9hZEpTIGZyb20gJy4uL3N0YXRpYy9sb2FkSlMnO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGRlcGVuZGVuY3kgPSBmdW5jdGlvbiAoY29uZmlnLCBmb3JjZSA9IHRydWUpXG57XG4gICAgY29uc3Qgc291cmNlcyA9IG1lcmdlKHtcbiAgICAgICAgY3NzOiBbXSxcbiAgICAgICAganM6IFtdLFxuICAgICAgICBlbGVtZW50czogW10sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHt9XG4gICAgfSwgY29uZmlnKTtcblxuICAgIGlmIChmb3JjZSlcbiAgICAgICAgZGVwZW5kZW5jeS5sb2FkKHNvdXJjZXMpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXM7XG59O1xuXG5kZXBlbmRlbmN5LmxvYWQgPSAoc291cmNlcykgPT4ge1xuICAgIGNvbnN0IG1heCA9XG4gICAgICAgIChzb3VyY2VzLmNzcyA/IHNvdXJjZXMuY3NzLmxlbmd0aCA6IDApICtcbiAgICAgICAgKHNvdXJjZXMuanMgPyBzb3VyY2VzLmpzLmxlbmd0aCA6IDApO1xuICAgIGNvbnN0IHNyY3MgPSBtZXJnZSh7Y3NzOiBzb3VyY2VzLmNzc30se2pzOiBzb3VyY2VzLmpzfSk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWQgPSBrZXkgPT09ICdjc3MnID8gbG9hZENTUyA6IGxvYWRKUztcbiAgICAgICAgc3Jjc1trZXldLmZvckVhY2goKHNyYykgPT4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZXMuZWxlbWVudHMucHVzaChsb2FkKHNyYywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXggPT09IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlcy5jb21wbGV0ZShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB9LCBzb3VyY2VzLmVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZGVwZW5kZW5jeS5yZW1vdmUgPSBmdW5jdGlvbiAoc291cmNlcylcbntcbiAgICBjb25zdCBlbGVtZW50cyA9IHNvdXJjZXMgJiYgc291cmNlcy5lbGVtZW50cyA/IHNvdXJjZXMuZWxlbWVudHMgOiBbXTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHNvdXJjZXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5O1xuIiwiaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcblxuXG5jb25zdCBleHRlbnNpb24gPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uLmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb21wID0gZXh0ZW5zaW9uLmNyZWF0ZShjb25maWcpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQgJiYgdGhpcyBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKXtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbnNpb24ubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKVxue1xuICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIE5hbWVzcGFjZUFwcGxpY2F0aW9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGV4dGVuc2lvbi5saXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24ubGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKGNvbXAuY29tcGxldGUgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4dGVuc2lvbi5saXN0ID0ge307XG5cbmV4dGVuc2lvbi5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGZhbHNlLFxuICAgIH0sIGNvbmZpZylcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5zaW9uO1xuIiwiXG5jb25zdCByb3V0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbXBvbmVudCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdXJsKSB7XG4gICAgICAgIHRoaXNbY29tcG9uZW50XSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlOyIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi4vc3RhdGljL3R5cGVPZic7XG5cblxuY29uc3Qgc3RhdGUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/IHN0YXRlLmdldChrZXkpIDogc3RhdGUuc2V0KGtleSwgZGF0YSk7XG59O1xuXG5zdGF0ZS5jYWxsYmFjayA9IHt9O1xuc3RhdGUuc291cmNlID0gY3JlYXRlU291cmNlKCk7XG5zdGF0ZS5jcmVhdGUgPSBjcmVhdGVTb3VyY2UoKTtcbnN0YXRlLnNvdXJjZWRhdGEgPSB7fTtcbnN0YXRlLmFjdGlvbiA9IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgc3RhdGUuY2FsbGJhY2tba2V5XSA9IGNhbGxiYWNrO1xufTtcblxuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0eXBlT2Yoa2V5LCAnc3RyaW5nJylcbiAgICAgICAgPyBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gfHwgc3RhdGUuc291cmNlW2tleV1cbiAgICAgICAgOiBrZXkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IHN0YXRlLnNvdXJjZWRhdGEgO1xufTtcblxuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNldENhc2Uoe1trZXldOiBwYXlsb2FkfSk7XG59O1xuXG5zdGF0ZS5zZXRDYXNlID0gZnVuY3Rpb24gKHBheWxvYWQgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzdGF0ZS5zb3VyY2Vba2V5XSA9IHN0YXRlLnNvdXJjZWRhdGFba2V5XSA9IHBheWxvYWRba2V5XTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZSAocGF5bG9hZCA9IHt9KSB7XG4gICAgc3RhdGUuc291cmNlZGF0YSA9IHBheWxvYWQ7XG4gICAgcmV0dXJuIG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OihvYmosIHByb3AsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY2FsbGJhY2tbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYWxsYmFja1twcm9wXS5jYWxsKHt9LCBzdGF0ZS5zb3VyY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XG4iLCJjb25zdCBEYXRldGltZSA9IHt9O1xuRGF0ZXRpbWUuTVNfSU5fREFZID0gODY0ZTU7XG5EYXRldGltZS5NU19JTl9IT1VSID0gMzZlNTtcbkRhdGV0aW1lLk1TX0lOX01JTiA9IDZlNDtcblxuLyoqXG4gKiBSZXR1cm4gdGltZXN0YW1wXG4gKiBAcGFyYW0gZGF0ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuRGF0ZXRpbWUudGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZS5nZXRUaW1lKCkgOiAobmV3IERhdGUpLmdldFRpbWUoKVxufTtcblxuLyoqXG4gKiBBZGQgZGF5cyB0byBzb21lIGRhdGVcbiAqIEBwYXJhbSBkYXkgICAgICAgICAgIG51bWJlciBvZiBkYXlzLiAwLjA0IC0gMSBob3VyLCAwLjUgLSAxMiBob3VyLCAxIC0gMSBkYXlcbiAqIEBwYXJhbSBkYXRlU3RhcnQgICAgIHR5cGUgRGF0ZSwgc3RhcnQgZGF0ZVxuICogQHJldHVybnMgeyp9ICB0eXBlIERhdGVcbiAqL1xuRGF0ZXRpbWUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXksIGRhdGVTdGFydCkge1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlU3RhcnQgPyBuZXcgRGF0ZShkYXRlU3RhcnQpIDogbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5ICogODY0MDAwMDApKTtcbiAgICByZXR1cm4gZGF0ZTtcbn07XG5cbi8qKlxuICogVGltZSBiZXR3ZWVuIERhdGVzXG4gKiA8cHJlPlxuICogICAgIHZhciBmcm9tID0gbmV3IERhdGUoJzIwMTYtMDgtMDEgMjA6MzAnKTtcbiAqICAgICB2YXIgdG8gPSBuZXcgRGF0ZSgnMjAxNi0wOC0xMCAwNzo1NScpO1xuICogICAgIC5EYXRlLmJldHdlZW5EYXRlcyhmcm9tLCB0byk7IC8vIE9iamVjdCB7IGRheTogOCwgaG91cjogMTEsIG1pbnV0ZTogMjUgfVxuICogPC9wcmU+XG4gKiBAcGFyYW0gZGF0ZUZyb21cbiAqIEBwYXJhbSBkYXRlVG9cbiAqIEByZXR1cm5zIHt7ZGF5OiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXJ9fVxuICovXG5EYXRldGltZS5iZXR3ZWVuRGF0ZXMgPSBmdW5jdGlvbiAoZGF0ZUZyb20sIGRhdGVUbykge1xuICAgIGRhdGVGcm9tID0gZGF0ZUZyb20gfHwgbmV3IERhdGUoKTtcbiAgICBkYXRlVG8gPSBkYXRlVG8gfHwgbmV3IERhdGUoKTtcbiAgICBsZXQgZGlmZk1zID0gKGRhdGVUbyAtIGRhdGVGcm9tKSxcbiAgICAgICAgZGlmZkRheXMgPSBNYXRoLnJvdW5kKGRpZmZNcyAvIDg2NGU1KSxcbiAgICAgICAgZGlmZkhycyA9IE1hdGgucm91bmQoKGRpZmZNcyAlIDg2NGU1KSAvIDM2ZTUpLFxuICAgICAgICBkaWZmTWluID0gTWF0aC5yb3VuZCgoKGRpZmZNcyAlIDg2NGU1KSAlIDM2ZTUpIC8gNmU0KTtcbiAgICByZXR1cm4ge2RheTogZGlmZkRheXMsIGhvdXI6IGRpZmZIcnMsIG1pbnV0ZTogZGlmZk1pbn07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgZGF0ZSBzdHJpbmcgdG8gRGF0ZSBPYmplY3RcbiAqIHl5IC0gdGhlIHllYXIgYXMgYSB0d28tZGlnaXQgbnVtYmVyICggMDAgdG8gOTkgKTtcbiAqIFlZIC0gdGhlIHllYXIgYXMgYSBmb3VyLWRpZ2l0IG51bWJlciAoIDE5MDAtOTk5OSApO1xuICogbW0gLSB0aGUgbW9udGggYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDEyICkgKCAxIHRvIDEyICk7XG4gKiBkZCAtIHRoZSBkYXkgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDMxICkgKCAxIHRvIDMxICk7XG4gKiBoaCBISCAtIHRoZSBob3VyICggMDAgdG8gMTEgKSAoIDAwIHRvIDIzICkgKCAxIHRvIDEyICkgKCAwIHRvIDIzICk7XG4gKiBpaSAtIHRoZSBtaW51dGUgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBzcyAtIHRoZSBzZWNvbmQgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBhYSAtIGRpc3BsYXlzIGFtIChmb3IgdGltZXMgZnJvbSBtaWRuaWdodCB1bnRpbCBub29uKSBhbmQgcG0gKGZvciB0aW1lcyBmcm9tIG5vb24gdW50aWwgbWlkbmlnaHQpO1xuICpcbiAqIC5zdHJUb0RhdGUoJzEyLjA1LjIwMTcgMTI6MzA6MjUnLCAnbW0uZGQuWVkgSEg6aWk6c3MnKVxuICogLnN0clRvRGF0ZSgnMTIvMDUvMjAxNycsICdtbS9kZC9ZWScpXG4gKiAuc3RyVG9EYXRlKCcxMi81LzIwMTcnLCAnbW0vZGQvWVknLCB0cnVlKVxuICogQHBhcmFtIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXRcbiAqIEBwYXJhbSB1dGNcbiAqIEByZXR1cm5zIHtEYXRlfVxuICovXG5EYXRldGltZS5zdHJUb0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCB1dGMpIHtcbiAgICBjb25zdCBzZXQgPSBbMCwgMCwgMSwgMCwgMCwgMF07XG4gICAgY29uc3QgdGVtcCA9IGRhdGUubWF0Y2goL1thLXpBLVpdK3xbMC05XSsvZyk7XG4gICAgY29uc3QgbWFzayA9IGZvcm1hdC5tYXRjaCgvW2EtekEtWl17Mn0vZyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAobWFza1tpXSkge1xuICAgICAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgICAgICAgc2V0WzJdID0gdGVtcFtpXSB8fCAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgc2V0WzFdID0gKHRlbXBbaV0gfHwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgICAgICAgc2V0WzBdID0gdGVtcFtpXSAqIDEgKyAodGVtcFtpXSA+IDUwID8gMTkwMCA6IDIwMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgICAgICAgICBzZXRbNF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcbiAgICAgICAgICAgICAgICBzZXRbMF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSBzZXRbM10gJSAxMiArICgodGVtcFtpXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyA/IDAgOiAxMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgICAgICBzZXRbNV0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZXRpbWU7XG5cbi8qXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTVNfSU5fREFZOiBEYXRldGltZS5NU19JTl9EQVksXG4gICAgTVNfSU5fSE9VUjogRGF0ZXRpbWUuTVNfSU5fSE9VUixcbiAgICBNU19JTl9NSU46IERhdGV0aW1lLk1TX0lOX01JTixcbiAgICB0aW1lOiBEYXRldGltZS50aW1lLFxuICAgIGFkZERheXM6IERhdGV0aW1lLmFkZERheXMsXG4gICAgYmV0d2VlbkRhdGVzOiBEYXRldGltZS5iZXR3ZWVuRGF0ZXMsXG4gICAgc3RyVG9EYXRlOiBEYXRldGltZS5zdHJUb0RhdGUsXG59O1xuKi9cbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cbmZ1bmN0aW9uIERvbSAoc2VsZWN0b3IpIHtcbiAgICBjb25zdCAkID0ge1xuICAgICAgICBzZWxlY3RvcjogdHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykgPyBzZWxlY3RvciA6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkOiBpc05vZGUoc2VsZWN0b3IpID8gW3NlbGVjdG9yXSA6IHF1ZXJ5QWxsKHNlbGVjdG9yKSxcbiAgICB9O1xuXG4gICAgY29uc3QgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3JjLnN0eWxlLmRpc3BsYXkgPyBzcmMuc3R5bGUuZGlzcGxheSA6IGdldENvbXB1dGVkU3R5bGUoc3JjKS5kaXNwbGF5O1xuICAgICAgICAgICAgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA9ICghc3R5bGUgfHwgc3R5bGUgPT09ICdub25lJykgPyAnYmxvY2snIDogc3R5bGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5vbmUgPSAoKSA9PiAkLnNlbGVjdGVkICYmICQuc2VsZWN0ZWQubGVuZ3RoID8gJC5zZWxlY3RlZFswXSA6IGZhbHNlO1xuICAgICQuYWxsID0gKCkgPT4gJC5zZWxlY3RlZDtcbiAgICAkLmF0dHIgPSAobmFtZSwgdmFsdWUpID0+IGRlZmluZWQodmFsdWUpID8gYXR0cigkLm9uZSgpLCBuYW1lLCB2YWx1ZSkgOiBhdHRyKCQub25lKCksIG5hbWUpO1xuICAgICQuaW5qZWN0ID0gKGRhdGEsIGFwcGVuZCwgdG8pID0+IGluamVjdCgkLm9uZSgpLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAkLmFwcGVuZCA9IChkYXRhKSA9PiBpbmplY3QoJC5vbmUoKSwgZGF0YSwgdHJ1ZSk7XG4gICAgJC5zZWFyY2ggPSAoYXR0ciwgZnJvbSkgPT4gc2VhcmNoKCQub25lKCksIGF0dHIsIGZyb20pO1xuICAgICQucGFyZW50ID0gKCkgPT4gJC5vbmUoKS5wYXJlbnROb2RlO1xuICAgICQuY2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgICQub25lKClcbiAgICB9O1xuICAgICQucG9zaXRpb24gPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKTtcbiAgICAkLnF1ZXJ5ID0gKHNlbGVjdG9yKSA9PiAkLm9uZSgpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICQucXVlcnlBbGwgPSAoc2VsZWN0b3IpID0+ICQub25lKCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgJC54ID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkueDtcbiAgICAkLnkgPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS55O1xuICAgICQud2lkdGggPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS53aWR0aDtcbiAgICAkLmhlaWdodCA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLmhlaWdodDtcbiAgICAkLnJlbW92ZSA9ICgpID0+ICQub25lKCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkLm9uZSgpKTtcbiAgICAkLnNob3cgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9ICQub25lKCk7XG4gICAgICAgIF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKHNyYyk7XG4gICAgICAgIGNzcyhzcmMsIHtkaXNwbGF5OiBzcmMgJiYgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA/IHNyY1sncmVhbC1kaXNwbGF5LXN0eWxlJ10gOiAnYmxvY2snfSk7XG4gICAgfTtcbiAgICAkLmhpZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9ICQub25lKCk7XG4gICAgICAgIF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKHNyYyk7XG4gICAgICAgIGNzcyhzcmMsIHtkaXNwbGF5OiAnbm9uZSd9KTtcbiAgICB9O1xuICAgICQudG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSAkLm9uZSgpO1xuICAgICAgICBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBxdWVyeUFsbChzcmMpLm1hcChEb20udG9nZ2xlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSkge1xuICAgICAgICAgICAgaWYgKHNyYy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIERvbS5zaG93KHNyYyk7XG4gICAgICAgICAgICBlbHNlIERvbS5oaWRlKHNyYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICQub24gPSAoZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSA9PiBvbigkLm9uZSgpLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpO1xuICAgICQuY29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSAkLm9uZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gbWVyZ2Uoe3RvcDogY29vcmRzLnRvcCArIHBhZ2VZT2Zmc2V0LCBsZWZ0OiBjb29yZHMubGVmdCArIHBhZ2VYT2Zmc2V0fSwgY29vcmRzKTtcbiAgICB9O1xuICAgIHJldHVybiAkO1xufVxuXG5Eb20uYXR0ciA9IGF0dHI7XG5Eb20uY3NzID0gY3NzO1xuRG9tLmxvYWRlZCA9IGRvbUxvYWRlZDtcbkRvbS5pbmplY3QgPSBpbmplY3Q7XG5Eb20uc3RyMm5vZGUgPSBzdHIybm9kZTtcbkRvbS5zZWFyY2ggPSBzZWFyY2g7XG5Eb20ucXVlcnlBbGwgPSBxdWVyeUFsbDtcbkRvbS5xdWVyeSA9IHF1ZXJ5O1xuRG9tLmNyZWF0ZSA9IGNyZWF0ZUVsZW1lbnQ7XG5Eb20uZnJhZ21lbnQgPSBjcmVhdGVGcmFnbWVudDtcbkRvbS5ub2RlMnN0ciA9IG5vZGUyc3RyO1xuRG9tLnN0cjJub2RlID0gc3RyMm5vZGU7XG5Eb20ucG9zaXRpb24gPSBwb3NpdGlvbjtcblxuXG5leHBvcnQgZGVmYXVsdCBEb207XG4iLCIvKipcbiAqIEVtbWV0IHN5bnRheCBmb3IgY3JlYXRpbmcgRE9NIGVsZW1lbnRzXG4gKlxuICogU3ludGF4XG4gKiAgIGNvbnN0IGVtbWV0ID0gRW1tZXQoKTtcbiAqICAgZW1tZXQoJy50YWJsZSA+IGRpdntsZWZ0fSArIGRpdihjbGFzcz1cInRleHQtcmlnaHRcIil7cmlnaHR9JylcbiAqICAgdGFnI2lkLmNsYXNzZXMoYXR0cmlidXRlcz1cIlwiKXtpbm5lciB0ZXh0fSA+IC5uZXN0ZWQgXiAuYmFja2VkLnVwLm9uZSArIC5zaWJsaW5nXG4gKlxuICogQXJndW1lbnRzXG4gKiAgIC5lbW1ldCggc3ludGF4IDogc3RyaW5nLCByZXR1cm5Pbmx5SFRNTCA6IGJvb2xlYW4gKVxuICpcbiAqIEBuYW1lc3BhY2UgRW1tZXRcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gdGV4dCAgICAgICAgICBzeW50YXhcbiAqIEBwYXJhbSBodG1sT25seSAgICAgIHJldHVybk9ubHlIVE1MXG4gKiBAcmV0dXJucyB7c3RyaW5nfCp9XG4gKi9cbmNvbnN0IEVtbWV0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCAgdGVtcElubmVyVGV4dHMgPSBbXTtcbiAgICBsZXQgIHRlbXBFc2NhcGVkID0gW107XG4gICAgY29uc3QgcmUgPSB7fTtcblxuICAgIHJlLmV4Y2x1ZGVzID0gXCIoW15cXFxcLiNcXFxcKFxcXFx7XSspXCI7XG4gICAgcmUuY2xhc3NlcyA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiICsgcmUuZXhjbHVkZXMsIFwiZ1wiKTtcbiAgICByZS5pZCA9IG5ldyBSZWdFeHAoXCIjXCIgKyByZS5leGNsdWRlcywgXCJnXCIpO1xuICAgIHJlLnRhZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZS5leGNsdWRlcyk7XG4gICAgcmUuaW5kZXhlcyA9IC8oLis/KSg+fFxcK3xcXF58JCkvZztcbiAgICByZS5lc2NhcGUgPSAvKFwifCcpKFteXFwxXSo/KVxcMS9nO1xuICAgIHJlLmlubmVyVGV4dCA9IC9cXHsoW159XSo/KX0vZztcbiAgICByZS5hdHRycyA9IC9cXCgoW15cXCldKilcXCkvZztcblxuICAgIGNvbnN0IGVtbWV0ID0gZnVuY3Rpb24gKHRleHQsIGh0bWxPbmx5KSB7XG4gICAgICAgIGxldCB0cmVlID0gZWxlbWVudCgpLFxuICAgICAgICAgICAgY3VycmVudCA9IHRyZWUsXG4gICAgICAgICAgICBsYXN0RWxlbWVudCA9IHRyZWUsXG4gICAgICAgICAgICBjb21tYW5kVGV4dCA9IHRleHQgfHwgXCJcIixcbiAgICAgICAgICAgIGNvbnZlcnRDb2xsZWN0aW9uID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzcmMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzcmNbMF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgICAgdGVtcElubmVyVGV4dHMgPSBbXTtcbiAgICAgICAgdGVtcEVzY2FwZWQgPSBbXTtcbiAgICAgICAgY29tbWFuZFRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmVzY2FwZSwgZnVuY3Rpb24gKGZ1bGwsIHF1b3RlcywgZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgdGVtcEVzY2FwZWQucHVzaChlc2NhcGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlxcXCJcXFwiXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UocmUuaW5uZXJUZXh0LCBmdW5jdGlvbiAoZnVsbCwgaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGVtcElubmVyVGV4dHMucHVzaChpbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcInt9XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLmluZGV4ZXMsIGZ1bmN0aW9uIChmdWxsLCBlbGVtZW50VGV4dCwgc3BsaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmFwcGVuZENoaWxkKGxhc3RFbGVtZW50ID0gZWxlbWVudChlbGVtZW50VGV4dCkpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlciA9PT0gXCI+XCIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBsYXN0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzcGxpdHRlciA9PT0gXCJeXCIpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHQgPSB0cmVlLmNoaWxkcmVuLmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gdHJlZS5jaGlsZHJlblxuICAgICAgICAgICAgOiB0cmVlLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIHJldHVybiBodG1sT25seVxuICAgICAgICAgICAgPyB0cmVlLmlubmVySFRNTFxuICAgICAgICAgICAgOiAocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gPyBjb252ZXJ0Q29sbGVjdGlvbihyZXN1bHQpIDogcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGxldCBjb21tYW5kVGV4dCA9IHRleHQgfHwgXCJcIixcbiAgICAgICAgICAgIG1hdGNoX3RhZyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLnRhZyksXG4gICAgICAgICAgICBtYXRjaF9pZCA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmlkKSxcbiAgICAgICAgICAgIG1hdGNoX2NsYXNzZXMgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5jbGFzc2VzKSxcbiAgICAgICAgICAgIG1hdGNoX2F0dHJzID0gY29tbWFuZFRleHQubWF0Y2gocmUuYXR0cnMpLFxuICAgICAgICAgICAgbWF0Y2hfaW5uZXJUZXh0ID0gY29tbWFuZFRleHQubWF0Y2gocmUuaW5uZXJUZXh0KSxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1hdGNoX3RhZyA/IG1hdGNoX3RhZ1swXSA6IFwiZGl2XCIpO1xuXG4gICAgICAgIGlmIChtYXRjaF9pZCkge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IG1hdGNoX2lkLnBvcCgpLnJlcGxhY2UocmUuaWQsIFwiJDFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfY2xhc3Nlcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBtYXRjaF9jbGFzc2VzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5zbGljZSgxKVxuICAgICAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hfaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBtYXRjaF9pbm5lclRleHQubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5lc2NhcGUodGVtcElubmVyVGV4dHMuc2hpZnQoKSk7XG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9hdHRycykge1xuICAgICAgICAgICAgbWF0Y2hfYXR0cnMubWFwKGZ1bmN0aW9uIChjaHVua1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua1BhcmFtLnJlcGxhY2UocmUuYXR0cnMsIFwiJDFcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIGNodW5rLm1hcChmdW5jdGlvbiAoYXR0clBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyUGFyYW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhdHRyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZSh1bmVzY2FwZShhdHRyLmpvaW4oXCI9XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGVtbWV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1tZXQ7XG4iLCJcbmV4cG9ydCBjb25zdCBFVkVOVFNfTkFNRVMgPSB7XG4gICAgY29weTogJ2NvcHknLFxuICAgIGN1dDogJ2N1dCcsXG4gICAgcGFzdGU6ICdwYXN0ZScsXG4gICAgYWJvcnQ6ICdhYm9ydCcsXG4gICAgYmx1cjogJ2JsdXInLFxuICAgIGNhbmNlbDogJ2NhbmNlbCcsXG4gICAgY2FucGxheTogJ2NhbnBsYXknLFxuICAgIGNhbnBsYXl0aHJvdWdoOiAnY2FucGxheXRocm91Z2gnLFxuICAgIGNoYW5nZTogJ2NoYW5nZScsXG4gICAgY2xpY2s6ICdjbGljaycsXG4gICAgY2xvc2U6ICdjbG9zZScsXG4gICAgY29udGV4dG1lbnU6ICdjb250ZXh0bWVudScsXG4gICAgY3VlY2hhbmdlOiAnY3VlY2hhbmdlJyxcbiAgICBkYmxjbGljazogJ2RibGNsaWNrJyxcbiAgICBkcmFnOiAnZHJhZycsXG4gICAgZHJhZ2VuZDogJ2RyYWdlbmQnLFxuICAgIGRyYWdlbnRlcjogJ2RyYWdlbnRlcicsXG4gICAgZHJhZ2xlYXZlOiAnZHJhZ2xlYXZlJyxcbiAgICBkcmFnb3ZlcjogJ2RyYWdvdmVyJyxcbiAgICBkcmFnc3RhcnQ6ICdkcmFnc3RhcnQnLFxuICAgIGRyb3A6ICdkcm9wJyxcbiAgICBkdXJhdGlvbmNoYW5nZTogJ2R1cmF0aW9uY2hhbmdlJyxcbiAgICBlbXB0aWVkOiAnZW1wdGllZCcsXG4gICAgZW5kZWQ6ICdlbmRlZCcsXG4gICAgZXJyb3I6ICdlcnJvcicsXG4gICAgZm9jdXM6ICdmb2N1cycsXG4gICAgaW5wdXQ6ICdpbnB1dCcsXG4gICAgaW52YWxpZDogJ2ludmFsaWQnLFxuICAgIGtleWRvd246ICdrZXlkb3duJyxcbiAgICBrZXlwcmVzczogJ2tleXByZXNzJyxcbiAgICBrZXl1cDogJ2tleXVwJyxcbiAgICBsb2FkOiAnbG9hZCcsXG4gICAgbG9hZGVkZGF0YTogJ2xvYWRlZGRhdGEnLFxuICAgIGxvYWRlZG1ldGFkYXRhOiAnbG9hZGVkbWV0YWRhdGEnLFxuICAgIGxvYWRzdGFydDogJ2xvYWRzdGFydCcsXG4gICAgbW91c2Vkb3duOiAnbW91c2Vkb3duJyxcbiAgICBtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZScsXG4gICAgbW91c2VvdXQ6ICdtb3VzZW91dCcsXG4gICAgbW91c2VvdmVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZXVwOiAnbW91c2V1cCcsXG4gICAgbW91c2V3aGVlbDogJ21vdXNld2hlZWwnLFxuICAgIHBhdXNlOiAncGF1c2UnLFxuICAgIHBsYXk6ICdwbGF5JyxcbiAgICBwbGF5aW5nOiAncGxheWluZycsXG4gICAgcHJvZ3Jlc3M6ICdwcm9ncmVzcycsXG4gICAgcmF0ZWNoYW5nZTogJ3JhdGVjaGFuZ2UnLFxuICAgIHJlc2V0OiAncmVzZXQnLFxuICAgIHJlc2l6ZTogJ3Jlc2l6ZScsXG4gICAgc2Nyb2xsOiAnc2Nyb2xsJyxcbiAgICBzZWVrZWQ6ICdzZWVrZWQnLFxuICAgIHNlZWtpbmc6ICdzZWVraW5nJyxcbiAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIHN0YWxsZWQ6ICdzdGFsbGVkJyxcbiAgICBzdWJtaXQ6ICdzdWJtaXQnLFxuICAgIHN1c3BlbmQ6ICdzdXNwZW5kJyxcbiAgICB0aW1ldXBkYXRlOiAndGltZXVwZGF0ZScsXG4gICAgdG9nZ2xlOiAndG9nZ2xlJyxcbiAgICB2b2x1bWVjaGFuZ2U6ICd2b2x1bWVjaGFuZ2UnLFxuICAgIHdhaXRpbmc6ICd3YWl0aW5nJyxcbiAgICB3aGVlbDogJ3doZWVsJyxcbiAgICBhdXhjbGljazogJ2F1eGNsaWNrJyxcbiAgICBnb3Rwb2ludGVyY2FwdHVyZTogJ2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICBsb3N0cG9pbnRlcmNhcHR1cmU6ICdsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgIHBvaW50ZXJkb3duOiAncG9pbnRlcmRvd24nLFxuICAgIHBvaW50ZXJtb3ZlOiAncG9pbnRlcm1vdmUnLFxuICAgIHBvaW50ZXJ1cDogJ3BvaW50ZXJ1cCcsXG4gICAgcG9pbnRlcmNhbmNlbDogJ3BvaW50ZXJjYW5jZWwnLFxuICAgIHBvaW50ZXJvdmVyOiAncG9pbnRlcm92ZXInLFxuICAgIHBvaW50ZXJvdXQ6ICdwb2ludGVyb3V0JyxcbiAgICBwb2ludGVyZW50ZXI6ICdwb2ludGVyZW50ZXInLFxuICAgIHBvaW50ZXJsZWF2ZTogJ3BvaW50ZXJsZWF2ZScsXG4gICAgc2VsZWN0c3RhcnQ6ICdzZWxlY3RzdGFydCcsXG4gICAgc2VsZWN0aW9uY2hhbmdlOiAnc2VsZWN0aW9uY2hhbmdlJyxcbiAgICBhbmltYXRpb25lbmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIGFuaW1hdGlvbml0ZXJhdGlvbjogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgYW5pbWF0aW9uc3RhcnQ6ICdhbmltYXRpb25zdGFydCcsXG4gICAgdHJhbnNpdGlvbmVuZDogJ3RyYW5zaXRpb25lbmQnLFxufTtcblxuZXhwb3J0IGNvbnN0IEVWRU5UU19OQU1FU19CQVNJQyA9IHtcbiAgICBibHVyOiAnYmx1cicsXG4gICAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgICBjbGljazogJ2NsaWNrJyxcbiAgICBkYmxjbGljazogJ2RibGNsaWNrJyxcbiAgICBkcmFnOiAnZHJhZycsXG4gICAgZHJhZ2VuZDogJ2RyYWdlbmQnLFxuICAgIGRyYWdlbnRlcjogJ2RyYWdlbnRlcicsXG4gICAgZHJhZ2xlYXZlOiAnZHJhZ2xlYXZlJyxcbiAgICBkcmFnb3ZlcjogJ2RyYWdvdmVyJyxcbiAgICBkcmFnc3RhcnQ6ICdkcmFnc3RhcnQnLFxuICAgIGRyb3A6ICdkcm9wJyxcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBpbnB1dDogJ2lucHV0JyxcbiAgICBsb2FkOiAnbG9hZCcsXG4gICAgbW91c2Vkb3duOiAnbW91c2Vkb3duJyxcbiAgICBtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG4gICAgbW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZScsXG4gICAgbW91c2VvdXQ6ICdtb3VzZW91dCcsXG4gICAgbW91c2VvdmVyOiAnbW91c2VvdmVyJyxcbiAgICBtb3VzZXVwOiAnbW91c2V1cCcsXG4gICAgbW91c2V3aGVlbDogJ21vdXNld2hlZWwnLFxuICAgIHNjcm9sbDogJ3Njcm9sbCcsXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICBzdWJtaXQ6ICdzdWJtaXQnLFxuICAgIHdoZWVsOiAnd2hlZWwnLFxuICAgIHRyYW5zaXRpb25lbmQ6ICd0cmFuc2l0aW9uZW5kJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVWRU5UU19OQU1FUztcbiIsIlxuY29uc3QgRXZlbnRNYW5hZ2VyID0ge1xuXG4gICAgZXZlbnRGcmFnbWVudDogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgIHZlcnNpb246ICcwLjAuMicsXG4gICAgZXZlbnRzVHlwZToge30sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGV0YWlsc1xuICAgICAqIEByZXR1cm5zIHtDdXN0b21FdmVudH1cbiAgICAgKi9cbiAgICBhZGRFdmVudDogZnVuY3Rpb24obmFtZSwgZGV0YWlscykge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7ZGV0YWlsOiBkZXRhaWxzfSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlscyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkZXRhaWxzKVxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZXZlbnRba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbbmFtZV1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlIG9uIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICogQHJldHVybnMge3t0eXBlOiAqLCBsaXN0ZW5lcjogKiwgdXNlQ2FwdHVyZTogKCp8Ym9vbGVhbil9fVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSl7XG4gICAgICAgIHVzZUNhcHR1cmUgPSB1c2VDYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0gaW5zdGFuY2VvZiBDdXN0b21FdmVudClcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LmRpc3BhdGNoRXZlbnQoRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnRbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWFuYWdlcjtcbiIsIi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldFxuICAgICAgICBrZXksXG4gICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucy5kYXRhKVxuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBOYW1lc3BhY2VBcHBsaWNhdGlvbiBmcm9tIFwiLi9OYW1lc3BhY2VBcHBsaWNhdGlvblwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwiLi9jb29raWVcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IERhdGV0aW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2V2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IEVtbWV0IGZyb20gXCIuL2VtbWV0XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4vaHR0cC1yZXF1ZXN0XCI7XG5pbXBvcnQgRG9tIGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IFN0ciBmcm9tIFwiLi9zdHJcIjtcbmltcG9ydCBSb3h5IGZyb20gXCIuL3JveHlcIjtcblxuXG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24gPSBOYW1lc3BhY2VBcHBsaWNhdGlvbjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5VdGlsID0gVXRpbDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Db29raWUgPSBDb29raWU7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uU3RvcmUgPSBTdG9yZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5EYXRldGltZSA9IERhdGV0aW1lO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlcjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5UaW1lciA9IFRpbWVyO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkVtbWV0ID0gRW1tZXQ7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uaHR0cFJlcXVlc3QgPSBodHRwUmVxdWVzdDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Eb20gPSBEb207XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uU3RyID0gU3RyO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlJveHkgPSBSb3h5O1xuIiwiaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBhY3Rpb25zID0ge2RlZmF1bHQ6bnVsbH07XG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGFjdGlvbnNbcHJvcF0gJiYgdHlwZW9mIGFjdGlvbnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBhY3Rpb25zW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aW9ucy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5kZWZhdWx0LmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgc2V0IChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFjdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBhY3Rpb25zW2tleV0gPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGNhbGxiYWNrIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbCAocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5LFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5O1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGluc3RhbmNlKVxue1xuICAgIGlmIChpc05vZGUoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLnNsaWNlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKGluc3RhbmNlIHx8IHt9KTtcblxuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvcHkodmFsdWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gc3JjIDoge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBlYWNoKEFycmF5LmZyb20obGlzdCksIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGxpc3Rba2V5XSwga2V5LCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAobGlzdCwgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IGksIHRtcCA9IFtdO1xuICAgIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSBcIm9iamVjdFwiKVxuICAgICAgICBsaXN0ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICAgICAgdG1wLnB1c2gobGlzdFtpXSk7XG5cbiAgICByZXR1cm4gdG1wIDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kcyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXAgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9jYXRpb24pXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50KCk7XG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnRFbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9ICdyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuY29uc3QgcG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJylcbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gKEFCQyArIE5VTUJFUlMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9XG4gICAgICAgICAgICBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vaWYgKGlzTm9kZSh2YWx1ZSkpXG4gICAgLy8gICAgdCA9ICdub2RlJztcbiAgICAvL2Vsc2VcbiAgICBpZiAoc2ltcGxlVHlwZXMuaW5kZXhPZih0KSA9PT0gLTEgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgdCA9ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2Y7XG4iLCJcbmNvbnN0IHR5cGVPZlN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2ZTdHJpY3Q7XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcblxuXG5jb25zdCB1cmkgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICB1cmkgPSB1cmkgfHwgbG9jLnBhdGhuYW1lO1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC8rL2lnLCAnLycpO1xuICAgIHJldHVybiB1cmkubGVuZ3RoID4gMSAmJiB1cmkuc2xpY2UoMCwgMSkgIT09ICcvJyA/ICcvJyArIHVyaSA6IHVyaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVyaTtcbiIsIlxuLyoqXG4gKiBBZGQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGpzb24gPSB0cnVlKSB7XG4gICAgaWYgKGpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwganNvbiA9IHRydWUpIHtcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKGpzb24gJiYgdmFsdWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKip0cnVlXG4gKiBSZW1vdmUgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICovXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSlcbn07XG5cbi8qKlxuICogR2V0IGl0ZW0gYnkgaW5kZXhcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3Qga2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KGluZGV4KVxufTtcblxuLyoqXG4gKiBXaGVuIGludm9rZWQsIHdpbGwgZW1wdHkgYWxsIGtleXMgb3V0IG9mIHRoZSBzdG9yYWdlLlxuICovXG5jb25zdCBjbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU3RvcmUgb2JqZWN0LlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aFxufTtcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHt7c2V0OiAoU3RvcmUuc2V0fCopLCBnZXQ6IChTdG9yZS5nZXR8KiksIGtleTogKFN0b3JlLmtleXwqKSwgY2xlYXI6IChTdG9yZS5jbGVhcnwqKSwgcmVtb3ZlOiAoU3RvcmUucmVtb3ZlfCopLCBsZW5ndGg6IChTdG9yZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0b3JlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0OiBzZXQsXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuLy9cblN0b3JlLnNldCA9IHNldDtcblN0b3JlLmdldCA9IGdldDtcblN0b3JlLmtleSA9IGtleTtcblN0b3JlLmNsZWFyID0gY2xlYXI7XG5TdG9yZS5yZW1vdmUgPSByZW1vdmU7XG5TdG9yZS5zaXplID0gbGVuZ3RoO1xuXG5leHBvcnQge1xuICAgIHNldCxcbiAgICBnZXQsXG4gICAga2V5LFxuICAgIGNsZWFyLFxuICAgIHJlbW92ZSxcbiAgICBsZW5ndGgsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5cblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnO1xuICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn07XG5cbmZ1bmN0aW9uIFN0ciAoc3RyaW5nKSB7XG4gICAgY29uc3QgJCA9IHtcbiAgICAgICAgc3RyaW5nOiB0eXBlT2Yoc3RyaW5nLCAnc3RyaW5nJykgPyBzdHJpbmcgOiAnJyxcbiAgICAgICAgbGVuZ3RoOiBzdHJpbmcubGVuZ3RoLFxuICAgIH07XG5cbiAgICAkLmNhcGl0YWxpemUgPSAoKSA9PiBjYXBpdGFsaXplKCQuc3RyaW5nKTtcbiAgICAkLnVwcGVyID0gKCkgPT4gJC5zdHJpbmcudG9VcHBlckNhc2UoKTtcbiAgICAkLmxvd2VyID0gKCkgPT4gJC5zdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAkLnBhZEVuZCA9ICh2YWx1ZSkgPT4gJC5zdHJpbmcucGFkRW5kKHZhbHVlKTtcbiAgICAkLnBhZFN0YXJ0ID0gKHZhbHVlKSA9PiAkLnN0cmluZy5wYWRTdGFydCh2YWx1ZSk7XG4gICAgJC5lYWNoID0gKGNhbGxiYWNrKSA9PiBjYWxsYmFjayA/ICQuc3RyaW5nLnNwbGl0KCcnKS5mb3JFYWNoKGNhbGxiYWNrKSA6ICQuc3RyaW5nLnNwbGl0KCcnKTtcblxuICAgIHJldHVybiAkO1xufVxuXG5TdHIubm9kZTJzdHIgPSBub2RlMnN0cjtcblN0ci5zdHIybm9kZSA9IHN0cjJub2RlO1xuU3RyLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuU3RyLmVhY2ggPSBlYWNoO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN0cjtcbiIsIi8qKlxuICogU2ltcGxlIHRpbWVyIHJlYWxpc2UuIFJldHVybiBzZWxmLWluc3RhbmNlXG4gKiB0aW1lciA9IG5ldyAuVGltZXIoZnVuY3Rpb24oaXRlcmF0b3IsIHJlcGVhdCl7fSwgMTAwMCwgNSlcbiAqICBJbnN0YW5jZSBtZXRob2RzXG4gKiAgICAgIHRpbWVyLnJlcGVhdFxuICogICAgICB0aW1lci5pdGVyYXRvclxuICogICAgICB0aW1lci5zdGFydCAoKVxuICogICAgICB0aW1lci5zdG9wICgpXG4gKiAgICAgIHRpbWVyLnBhdXNlICgpXG4gKiAgICAgIHRpbWVyLnJlc2V0ICgpXG4gKiAgICAgIHRpbWVyLmNsZWFyICgpXG4gKiAgU3RhdGljIG1ldGhvZHNcbiAqICAgICAgVGltZXIudGltZW91dCAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkgOiB0aW1lb3V0SWRcbiAqICAgICAgVGltZXIuaW50ZXJ2YWwgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogaW50ZXJ2YWxJZFxuICogICAgICBUaW1lci50aW1lb3V0U3RvcCAodGltZW91dElkKVxuICogICAgICBUaW1lci5pbnRlcnZhbFN0b3AgKGludGVydmFsSWQpXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBkZWxheVxuICogQHBhcmFtIHJlcGVhdFxuICogQHBhcmFtIHRoaXNJbnN0YW5jZSAgaWYgbm90IHNldCwgdXNlcyBpbnN0YW5jZSBvZiBUaW1lclxuICogQHJldHVybnMge1dpbmRvdy5UaW1lcnxUaW1lcn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRpbWVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lcihjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKTtcblxuICAgIGRlbGF5ID0gZGVsYXkgIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KGRlbGF5KSA6IDUwMDtcbiAgICByZXBlYXQgPSByZXBlYXQgIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KHJlcGVhdCkgOiAwO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtzZWxmOiB0aGlzLCBjYWxsYmFjazogY2FsbGJhY2ssIGRlbGF5OiBkZWxheSwgcmVwZWF0OiByZXBlYXR9O1xuXG4gICAgbGV0IGh0ID0gbnVsbDtcbiAgICBjb25zdCBoYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uZmlnLnNlbGYuaXRlcmF0b3IrKztcbiAgICAgICAgaWYgKGNvbmZpZy5yZXBlYXQgIT09IDAgJiYgY29uZmlnLnJlcGVhdCA8PSBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGNvbmZpZy5zZWxmLnN0b3AoKTtcbiAgICAgICAgY29uZmlnLmNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHRoaXMsIGNvbmZpZy5zZWxmLml0ZXJhdG9yLCBjb25maWcucmVwZWF0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5yZXBlYXQgPT09IDAgfHwgY29uZmlnLnJlcGVhdCA+IGNvbmZpZy5zZWxmLml0ZXJhdG9yKVxuICAgICAgICAgICAgaHQgPSBzZXRJbnRlcnZhbChoYywgY29uZmlnLmRlbGF5KTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGNvbmZpZy5yZXBlYXQ7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9O1xuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKVxuICAgIH07XG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IDBcbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaHQpXG4gICAgfTtcbn07XG5cblRpbWVyLnRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIudGltZW91dFN0b3AgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuaW50ZXJ2YWxTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtleHRlbmRSZWN1cnNpdmV9ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtyYW5kb21Db2xvciwgcmFuZG9tSXRlbSwgcmFuZG9tTnVtYmVyLCByYW5kb21TdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFV0aWwgPSB7XG4gICAgYXR0cixcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50LFxuICAgIGNzcyxcbiAgICBkb21Mb2FkZWQsXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbiAgICBjbG9uZTogY29weSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iXSwic291cmNlUm9vdCI6IiJ9