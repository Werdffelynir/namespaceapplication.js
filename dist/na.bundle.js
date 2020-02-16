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
            comp.template = (0, _str2node2.default)(comp.template).firstElementChild;
        }

        if (!comp.template && app.root) {
            var node = (0, _query2.default)('[data-component="' + comp.id + '"]', app.root);

            if (node) comp.template = node;
        }

        if ((0, _isNode2.default)(comp.template)) {

            if (comp.template.querySelector('[data-node]')) comp.node = (0, _search2.default)('[data-node]', 'data-node', comp.template);

            if (comp.styles) setStyles(comp);

            attributesEventsHandler(comp, 'on', Object.keys(_eventsNames.EVENTS_NAMES_BASIC));
        }

        if (this instanceof NamespaceApplication) {

            injectComponent(comp, this);
        } else {
            throw new Error('"Late Call": Component [' + comp.id + '] can t call completed() and injects');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZUFwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2RlcGVuZGVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRldGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbW1ldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQtbWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC1yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWRJbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hbWVzcGFjZUFwcGxpY2F0aW9uIiwiY29uZmlnIiwiaW5zdGFuY2UiLCJrZXkiLCJjb25maWd1cmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJ1cmwiLCJtb2RlIiwiZGVidWciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cml0YWJsZSIsImNvbXBvbmVudCIsInJlZ2lzdGVyIiwiZXh0ZW5zaW9uIiwiZGVwZW5kZW5jeSIsInJvdXRlIiwic3RhdGUiLCJDb29raWUiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2V0IiwiZ2V0IiwiY2xlYXIiLCJyZW1vdmUiLCJvcHRpb25zIiwidHlwZUpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhwaXJlcyIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInBhcnNlSW50IiwiZW5jb2RlIiwiY29va2llIiwibWF0Y2hlcyIsIm1hdGNoIiwiUmVnRXhwIiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRhdGFKc29uIiwicGFyc2UiLCJvcHRpb24iLCJzdHIiLCJkZWNvZGUiLCJjb29raWVzIiwic3BsaXQiLCJwYXJ0cyIsInRyaW0iLCJsaXN0IiwiY29tcCIsImNyZWF0ZSIsImluaXQiLCJpbml0aWFsaXplZCIsInRlbXBsYXRlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhcHAiLCJyb290Iiwibm9kZSIsInN0eWxlcyIsInNldFN0eWxlcyIsImF0dHJpYnV0ZXNFdmVudHNIYW5kbGVyIiwiRVZFTlRTX05BTUVTX0JBU0lDIiwiaW5qZWN0Q29tcG9uZW50IiwiRXJyb3IiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImNhbGwiLCJwcm9wcyIsIm92ZXJyaWRlIiwibWV0aG9kcyIsInByZWZpeCIsImV2ZW50c05hbWVzIiwiYWRkRXZlbnQiLCJlbGVtIiwiYXR0ciIsImV2ZW50TmFtZSIsIm1ldGhvZCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBhdGgiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFzQXR0cmlidXRlIiwibm9kZXMiLCJwcm9wIiwic2VsZWN0b3IiLCJzdHlsZSIsImZvcmNlIiwic291cmNlcyIsImNzcyIsImpzIiwiZWxlbWVudHMiLCJsb2FkIiwibWF4Iiwic3JjcyIsImkiLCJsb2FkQ1NTIiwibG9hZEpTIiwic3JjIiwicHVzaCIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb250ZXh0IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNhbGxiYWNrIiwic291cmNlIiwiY3JlYXRlU291cmNlIiwic291cmNlZGF0YSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRDYXNlIiwiUHJveHkiLCJvYmoiLCJEYXRldGltZSIsIk1TX0lOX0RBWSIsIk1TX0lOX0hPVVIiLCJNU19JTl9NSU4iLCJ0aW1lIiwiYWRkRGF5cyIsImRheSIsImRhdGVTdGFydCIsImJldHdlZW5EYXRlcyIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiZGlmZk1zIiwiZGlmZkRheXMiLCJNYXRoIiwicm91bmQiLCJkaWZmSHJzIiwiZGlmZk1pbiIsImhvdXIiLCJtaW51dGUiLCJzdHJUb0RhdGUiLCJmb3JtYXQiLCJ1dGMiLCJ0ZW1wIiwibWFzayIsInRvTG93ZXJDYXNlIiwiVVRDIiwiRG9tIiwiJCIsInNlbGVjdGVkIiwiX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUiLCJtYXAiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9uZSIsImFsbCIsImluamVjdCIsImFwcGVuZCIsInRvIiwic2VhcmNoIiwicGFyZW50IiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsIm9uIiwiYnViYmxlIiwiY29vcmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJsb2FkZWQiLCJkb21Mb2FkZWQiLCJzdHIybm9kZSIsInF1ZXJ5QWxsIiwicXVlcnkiLCJjcmVhdGVFbGVtZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVGcmFnbWVudCIsIm5vZGUyc3RyIiwiRW1tZXQiLCJ0ZW1wSW5uZXJUZXh0cyIsInRlbXBFc2NhcGVkIiwicmUiLCJleGNsdWRlcyIsImNsYXNzZXMiLCJ0YWciLCJpbmRleGVzIiwiZXNjYXBlIiwiaW5uZXJUZXh0IiwiYXR0cnMiLCJlbW1ldCIsInRleHQiLCJodG1sT25seSIsInRyZWUiLCJjdXJyZW50IiwibGFzdEVsZW1lbnQiLCJjb21tYW5kVGV4dCIsImNvbnZlcnRDb2xsZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwicmVzdWx0IiwiZnVsbCIsInF1b3RlcyIsImVsZW1lbnRUZXh0Iiwic3BsaXR0ZXIiLCJpbm5lckhUTUwiLCJIVE1MQ29sbGVjdGlvbiIsIm1hdGNoX3RhZyIsIm1hdGNoX2lkIiwibWF0Y2hfY2xhc3NlcyIsIm1hdGNoX2F0dHJzIiwibWF0Y2hfaW5uZXJUZXh0IiwicG9wIiwiY2xhc3NOYW1lIiwic2xpY2UiLCJqb2luIiwidW5lc2NhcGUiLCJzaGlmdCIsImNodW5rUGFyYW0iLCJjaHVuayIsImF0dHJQYXJhbSIsInNldEF0dHJpYnV0ZSIsIkVWRU5UU19OQU1FUyIsImNvcHkiLCJjdXQiLCJwYXN0ZSIsImFib3J0IiwiYmx1ciIsImNhbmNlbCIsImNhbnBsYXkiLCJjYW5wbGF5dGhyb3VnaCIsImNoYW5nZSIsImNsaWNrIiwiY2xvc2UiLCJjb250ZXh0bWVudSIsImN1ZWNoYW5nZSIsImRibGNsaWNrIiwiZHJhZyIsImRyYWdlbmQiLCJkcmFnZW50ZXIiLCJkcmFnbGVhdmUiLCJkcmFnb3ZlciIsImRyYWdzdGFydCIsImRyb3AiLCJkdXJhdGlvbmNoYW5nZSIsImVtcHRpZWQiLCJlbmRlZCIsImZvY3VzIiwiaW5wdXQiLCJpbnZhbGlkIiwia2V5ZG93biIsImtleXByZXNzIiwia2V5dXAiLCJsb2FkZWRkYXRhIiwibG9hZGVkbWV0YWRhdGEiLCJsb2Fkc3RhcnQiLCJtb3VzZWRvd24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm1vdXNlbW92ZSIsIm1vdXNlb3V0IiwibW91c2VvdmVyIiwibW91c2V1cCIsIm1vdXNld2hlZWwiLCJwYXVzZSIsInBsYXkiLCJwbGF5aW5nIiwicHJvZ3Jlc3MiLCJyYXRlY2hhbmdlIiwicmVzZXQiLCJyZXNpemUiLCJzY3JvbGwiLCJzZWVrZWQiLCJzZWVraW5nIiwic2VsZWN0Iiwic3RhbGxlZCIsInN1Ym1pdCIsInN1c3BlbmQiLCJ0aW1ldXBkYXRlIiwidm9sdW1lY2hhbmdlIiwid2FpdGluZyIsIndoZWVsIiwiYXV4Y2xpY2siLCJnb3Rwb2ludGVyY2FwdHVyZSIsImxvc3Rwb2ludGVyY2FwdHVyZSIsInBvaW50ZXJkb3duIiwicG9pbnRlcm1vdmUiLCJwb2ludGVydXAiLCJwb2ludGVyY2FuY2VsIiwicG9pbnRlcm92ZXIiLCJwb2ludGVyb3V0IiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwic2VsZWN0c3RhcnQiLCJzZWxlY3Rpb25jaGFuZ2UiLCJhbmltYXRpb25lbmQiLCJhbmltYXRpb25pdGVyYXRpb24iLCJhbmltYXRpb25zdGFydCIsInRyYW5zaXRpb25lbmQiLCJFdmVudE1hbmFnZXIiLCJldmVudEZyYWdtZW50IiwidmVyc2lvbiIsImV2ZW50c1R5cGUiLCJkZXRhaWxzIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlRXZlbnQiLCJ0eXBlIiwibGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJodHRwUmVxdWVzdCIsInRoaXNJbnN0YW5jZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaHJlZiIsInRvVXBwZXJDYXNlIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwicGFyYW1zIiwic2VuZERhdGEiLCJpbmRleE9mIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsIndpbmRvdyIsIlV0aWwiLCJTdG9yYWdlIiwiVGltZXIiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsInR5cGVfZWxlbWVudCIsImFkZFByb3BlcnRpZXMiLCJjbG9uZU5vZGUiLCJiaW5kIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJrIiwicHJvcGVydGllcyIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwic3Vic3RyaW5nIiwiZGVmaW5lZCIsImRlZmluZWRJbiIsInN0YWNrIiwiZG9jIiwiZWFjaCIsInRtcCIsIml0ZW0iLCJjaGlsZE5vZGVzIiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInBhcmFtIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImV4dGVuZFJlY3Vyc2l2ZSIsInByb3BlcnR5IiwiZmluZE9iamVjdCIsInZhbHVlcyIsImF0dHJWYWx1ZSIsImZpbmRPYmplY3RzIiwic3RyaW5nIiwicmVnIiwiaXNBcnJheSIsIm51bWJlciIsImdldERvY3VtZW50IiwiZ2V0TG9jYXRpb24iLCJ0ZXh0Q29udGVudCIsImlzRW1wdHkiLCJpc05hTiIsImlzTm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwib25sb2FkIiwib25lcnJvciIsImxpbmsiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInJlbCIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJsb2FkSlNTeW5jIiwiaXRlcmF0b3IiLCJzY3JpcHRzIiwibWVyZ2UiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsIm51bWJlcjJzdHJpbmciLCJhYnMiLCJwb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZWN0Iiwic2Nyb2xsVG9wIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJwb3NpdGlvbk1vdXNlIiwiTW91c2VFdmVudCIsImNvbnNvbGUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1pbiIsImZsb29yIiwicmFuZG9tQ29sb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJyYW5kb21OdW1iZXIiLCJzaXplIiwiY2VpbCIsInJlcyIsImZpbGwiLCJyYW5kb21TdHJpbmciLCJyYW5kb21JdGVtIiwiYXJyIiwicmVkaXJlY3QiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiZmlyc3RDaGlsZCIsInR5cGVPZiIsInNpbXBsZVR5cGVzIiwidCIsInR5cGVPZlN0cmljdCIsInVyaSIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsImRlbGF5IiwicmVwZWF0Iiwic2VsZiIsImh0IiwiaGMiLCJzdG9wIiwic3RhcnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lb3V0IiwibXMiLCJ0aGlzSW5zdCIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsInRpbWVvdXRTdG9wIiwiY2xlYXJUaW1lb3V0IiwiaW50ZXJ2YWxTdG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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QUFFVDRHLDBDQUZTO0FBR1RFLDRDQUhTO0FBSVQxRixzQkFKUztBQUtUb0Ysa0NBTFM7QUFNVHZCLDRCQU5TO0FBT1R3QixnQ0FQUztBQVFUTSxnQ0FSUztBQVNUSiwwQkFUUztBQVVUdkIsNEJBVlM7QUFXVG1LLHNDQVhTO0FBWVRzRCw4QkFaUztBQWFUQyxrQ0FiUztBQWNUVSw0QkFkUztBQWVUTSw0Q0FmUztBQWdCVGIsd0JBaEJTO0FBaUJUZSxvQ0FqQlM7QUFrQlRHLHNDQWxCUztBQW1CVGpRLDRCQW5CUztBQW9CVHlRLDhCQXBCUztBQXFCVEUsNEJBckJTO0FBc0JUbFQsOEJBdEJTO0FBdUJUQyw0QkF2QlM7QUF3QlRrVSxvQ0F4QlM7QUF5QlRHLDBCQXpCUztBQTBCVEksMENBMUJTO0FBMkJUdFEsb0JBM0JTO0FBNEJUUixnQ0E1QlM7QUE2QlRnUywwQ0E3QlM7QUE4QlRoQyw0QkE5QlM7QUErQlR1QyxvQ0EvQlM7QUFnQ1RTLGtDQWhDUztBQWlDVE4sc0NBakNTO0FBa0NUSyxzQ0FsQ1M7QUFtQ1RHLGdDQW5DUztBQW9DVEksNEJBcENTO0FBcUNURyx3Q0FyQ1M7QUFzQ1RDLHNCQXRDUztBQXVDVHJQO0FBdkNTLENBQWI7O2tCQTBDZXFILEkiLCJmaWxlIjoibmEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvcmUvY29tcG9uZW50XCI7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gXCIuL2NvcmUvZXh0ZW5zaW9uXCI7XG5pbXBvcnQgZGVwZW5kZW5jeSBmcm9tIFwiLi9jb3JlL2RlcGVuZGVuY3lcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9jb3JlL3JvdXRlXCI7XG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vY29yZS9zdGF0ZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vc3RhdGljL2RlZmluZWRcIjtcblxuY2xhc3MgTmFtZXNwYWNlQXBwbGljYXRpb25cbntcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgaWYgKE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgcmV0dXJuIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gKGtleSkgPT4gdGhpcy5jb25maWd1cmF0aW9uW2tleV07XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1vZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlYnVnOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uW2tleV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25ba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmlkKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb290XCIsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZ3VyYXRpb24uaWQpLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucmVnaXN0ZXIodGhpcyk7XG5cbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBleHRlbnNpb247XG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uLnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeSA9IGRlcGVuZGVuY3k7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG59XG5cbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbk5hbWVzcGFjZUFwcGxpY2F0aW9uLmV4dGVuc2lvbiA9IGV4dGVuc2lvbjtcblxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlQXBwbGljYXRpb247XG4iLCJcblxuLyoqXG4gKiBMb2NhbFN0b3JhZ2Ugd3JhcHBlclxuICpcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBvcHRpb25cbiAqIEByZXR1cm5zIHt7c2V0OiAoU3RvcmFnZS5zZXR8KiksIGdldDogKFN0b3JhZ2UuZ2V0fCopLCBrZXk6IChTdG9yYWdlLmtleXwqKSwgY2xlYXI6IChTdG9yYWdlLmNsZWFyfCopLCByZW1vdmU6IChTdG9yYWdlLnJlbW92ZXwqKSwgbGVuZ3RoOiAoU3RvcmFnZS5sZW5ndGh8Kil9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvb2tpZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXQobmFtZSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXQobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogU2V0IENvb2tpZSBrZXksIHZhbHVlXG4gKiAgZXhwaXJlcyAtIG1zLCBEYXRlLCAtMSwgMFxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIHt7fX0gb3B0aW9ucyAgIHtleHBpcmVzOiAwLCBwYXRoOiAnLycsIGRvbWFpbjogJ3NpdGUuY29tJywgc2VjdXJlOiBmYWxzZX1cbiAqIEBwYXJhbSB0eXBlSnNvbiBib29sXG4gKi9cbmNvbnN0IHNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucywgdHlwZUpzb24gPSB0cnVlKVxue1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cbiAgICBpZiAoQ29va2llLnR5cGVKc29uKSB7fVxuICAgIGlmICh0eXBlSnNvbilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGxldCBkYXRhID0gbmFtZSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIGlmIChvcHRpb25zLmV4cGlyZXMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBwYXJzZUludChvcHRpb25zLmV4cGlyZXMpICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhICs9IGVuY29kZShvcHRpb25zKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBkYXRhO1xufTtcblxuLyoqXG4gKiBHZXQgQ29va2llIHZhbHVlIGJ5IGtleVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB0eXBlSnNvbiBib29sXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKG5hbWUsIHR5cGVKc29uID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcbiAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXG4gICAgKSk7XG5cbiAgICBsZXQgZGF0YSA9IG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG5cblxuICAgIGlmIChDb29raWUuZGF0YUpzb24pIHt9XG4gICAgaWYgKHR5cGVKc29uICYmIGRhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG5cbiAgICByZXR1cm4gZGF0YVxufTtcblxuLyoqXG4gKiBSZW1vdmUgQ29va2llIGJ5IGtleVxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBvcHRpb25cbiAqL1xuY29uc3QgcmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7ZXhwaXJlczogLTF9O1xuICAgIHNldChuYW1lLCBcIlwiLCBvcHRpb24pO1xufTtcblxuY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gJyc7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IHRvIHVyaSBnZXQgc3RyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgICAgZXhhbXBsZToge2V4cGlyZXM6IDAsIHBhdGg6ICcvJywgZG9tYWluOiAnbXktc2l0ZS5jb20nLCBzZWN1cmU6IGZhbHNlfVxuICogQHJldHVybnMge3N0cmluZ30gICAgICAgIGV4YW1wbGU6IFwiZXhwaXJlcz0wO3BhdGg9Lztkb21haW49c2l0ZS5jb207c2VjdXJlPWZhbHNlXCI7XG4gKi9cbmNvbnN0IGVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZGF0YVtrZXldICE9PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9IChzdHIgPyAnOycgOiAnJykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBcIig/Ol58OyApXCIgKyBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCAnXFxcXCQxJykgKyBcIj0oW147XSopXCJcbiAgICAgICAgKSk7XG4gICAgICAgIHJldHVybiBtYXRjaGVzID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoZXNbMV0pIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fSxcbiAgICAgICAgICAgIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJyk7XG5cbiAgICAgICAgY29va2llcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHZhbHVlLnRyaW0oKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGRhdGFbcGFydHNbMF0udHJpbSgpXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSkudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufTtcblxuQ29va2llLnNldCA9IHNldDtcbkNvb2tpZS5nZXQgPSBnZXQ7XG5Db29raWUucmVtb3ZlID0gcmVtb3ZlO1xuQ29va2llLmNsZWFyID0gY2xlYXI7XG5Db29raWUuZW5jb2RlID0gZW5jb2RlO1xuQ29va2llLmRlY29kZSA9IGRlY29kZTtcbkNvb2tpZS5kYXRhSnNvbiA9IHRydWU7XG5cbmV4cG9ydCB7XG4gICAgc2V0LFxuICAgIGdldCxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgZW5jb2RlLFxuICAgIGRlY29kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcbiIsImltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgeyBFVkVOVFNfTkFNRVNfQkFTSUMgfSBmcm9tIFwiLi4vZXZlbnQtbWFuYWdlci9ldmVudHNOYW1lc1wiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuXG5cbmNvbnN0IGNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcbiAgICAgICAgY29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcC50ZW1wbGF0ZSAmJiBhcHAucm9vdCApe1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXJ5KCdbZGF0YS1jb21wb25lbnQ9XCInKyBjb21wLmlkICsnXCJdJywgYXBwLnJvb3QpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSlcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcblxuICAgICAgICAgICAgaWYgKGNvbXAudGVtcGxhdGUucXVlcnlTZWxlY3RvcignW2RhdGEtbm9kZV0nKSlcbiAgICAgICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICBpZiAoY29tcC5zdHlsZXMpXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVzKGNvbXApO1xuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzRXZlbnRzSGFuZGxlcihjb21wLCAnb24nLCBPYmplY3Qua2V5cyhFVkVOVFNfTkFNRVNfQkFTSUMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcblxuICAgICAgICAgICAgaW5qZWN0Q29tcG9uZW50IChjb21wLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignXCJMYXRlIENhbGxcIjogQ29tcG9uZW50IFsnK2NvbXAuaWQrJ10gY2FuIHQgY2FsbCBjb21wbGV0ZWQoKSBhbmQgaW5qZWN0cycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkICYmIHRoaXMgaW5zdGFuY2VvZiBOYW1lc3BhY2VBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9XG59O1xuXG5jb21wb25lbnQucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpXG57XG4gICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50Lmxpc3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcCA9IGNvbXBvbmVudC5saXN0W2tleV07XG5cbiAgICAgICAgICAgIGlmIChjb21wLmNvbXBsZXRlICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGluamVjdENvbXBvbmVudCAoY29tcCwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb21wb25lbnQubGlzdCA9IHt9O1xuXG5jb21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IG51bGwsXG4gICAgICAgIHN0eWxlczogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNFdmVudHNIYW5kbGVyIChjb21wLCBwcmVmaXgsIGV2ZW50c05hbWVzKSB7XG4gICAgY29uc3QgYWRkRXZlbnQgPSAoZWxlbSwgYXR0ciwgZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGVsZW0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1ttZXRob2RdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wLm1ldGhvZHNbbWV0aG9kXS5jYWxsKGNvbXAsIGUsIGUudGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldCB8fCBlLnBhdGhbMF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBldmVudHNOYW1lcy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYXR0ciA9IHByZWZpeCArICctJyArIGV2ZW50TmFtZTtcbiAgICAgICAgaWYgKGNvbXAudGVtcGxhdGUucXVlcnlTZWxlY3RvcignWycrYXR0cisnXScpKSB7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGNvbXAudGVtcGxhdGUucXVlcnlTZWxlY3RvckFsbCgnWycrYXR0cisnXScpKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoZWxlbSwgYXR0ciwgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50KGNvbXAudGVtcGxhdGUsIGF0dHIsIGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbmplY3RDb21wb25lbnQgKGNvbXAsIGluc3RhbmNlKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBxdWVyeUFsbCgnW2RhdGEtY29tcG9uZW50PVwiJysgY29tcC5pZCArJ1wiXScsIGluc3RhbmNlLnJvb3QpO1xuXG4gICAgaWYgKG5vZGVzKVxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcC5wcm9wcykge1xuICAgICAgICAgICAgICAgIGNvbXAucHJvcHMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihub2RlLmhhc0F0dHJpYnV0ZShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXAsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5nZXRBdHRyaWJ1dGUocHJvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSAhPT0gY29tcC50ZW1wbGF0ZSlcbiAgICAgICAgICAgICAgICBpbmplY3Qobm9kZSwgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlcyhjb21wLCBpbnN0YW5jZSkge1xuXG4gICAgT2JqZWN0LmtleXMoY29tcC5zdHlsZXMpLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gJ3RlbXBsYXRlJyAmJiBpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuc3R5bGVzW3NlbGVjdG9yXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS5zdHlsZVtrZXldID0gY29tcC5zdHlsZXNbc2VsZWN0b3JdW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBxdWVyeUFsbChzZWxlY3RvciwgY29tcC50ZW1wbGF0ZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLnN0eWxlc1tzZWxlY3Rvcl0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2tleV0gPSBjb21wLnN0eWxlc1tzZWxlY3Rvcl1ba2V5XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudDtcbiIsImltcG9ydCBsb2FkSlMgZnJvbSAnLi4vc3RhdGljL2xvYWRKUyc7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cblxuY29uc3QgZGVwZW5kZW5jeSA9IGZ1bmN0aW9uIChjb25maWcsIGZvcmNlID0gdHJ1ZSlcbntcbiAgICBjb25zdCBzb3VyY2VzID0gbWVyZ2Uoe1xuICAgICAgICBjc3M6IFtdLFxuICAgICAgICBqczogW10sXG4gICAgICAgIGVsZW1lbnRzOiBbXSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBlcnJvcjogKCkgPT4ge31cbiAgICB9LCBjb25maWcpO1xuXG4gICAgaWYgKGZvcmNlKVxuICAgICAgICBkZXBlbmRlbmN5LmxvYWQoc291cmNlcyk7XG5cbiAgICByZXR1cm4gc291cmNlcztcbn07XG5cbmRlcGVuZGVuY3kubG9hZCA9IChzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgbWF4ID1cbiAgICAgICAgKHNvdXJjZXMuY3NzID8gc291cmNlcy5jc3MubGVuZ3RoIDogMCkgK1xuICAgICAgICAoc291cmNlcy5qcyA/IHNvdXJjZXMuanMubGVuZ3RoIDogMCk7XG4gICAgY29uc3Qgc3JjcyA9IG1lcmdlKHtjc3M6IHNvdXJjZXMuY3NzfSx7anM6IHNvdXJjZXMuanN9KTtcblxuICAgIGxldCBpID0gMDtcbiAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZCA9IGtleSA9PT0gJ2NzcycgPyBsb2FkQ1NTIDogbG9hZEpTO1xuICAgICAgICBzcmNzW2tleV0uZm9yRWFjaCgoc3JjKSA9PiB7XG4gICAgICAgICAgICAgICAgc291cmNlcy5lbGVtZW50cy5wdXNoKGxvYWQoc3JjLCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSArKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2VzLmNvbXBsZXRlKHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgIH0sIHNvdXJjZXMuZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5kZXBlbmRlbmN5LnJlbW92ZSA9IGZ1bmN0aW9uIChzb3VyY2VzKVxue1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc291cmNlcyAmJiBzb3VyY2VzLmVsZW1lbnRzID8gc291cmNlcy5lbGVtZW50cyA6IFtdO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgc291cmNlcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlcGVuZGVuY3k7XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuXG5cbmNvbnN0IGV4dGVuc2lvbiA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBleHRlbnNpb24ubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXAgPSBleHRlbnNpb24uY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCAmJiB0aGlzIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pe1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGV4dGVuc2lvbi5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICB9XG59O1xuXG5leHRlbnNpb24ucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpXG57XG4gICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgTmFtZXNwYWNlQXBwbGljYXRpb24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZXh0ZW5zaW9uLmxpc3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcCA9IGV4dGVuc2lvbi5saXN0W2tleV07XG4gICAgICAgICAgICBpZiAoY29tcC5jb21wbGV0ZSAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXh0ZW5zaW9uLmxpc3QgPSB7fTtcblxuZXh0ZW5zaW9uLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29udGV4dDogZmFsc2UsXG4gICAgfSwgY29uZmlnKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBleHRlbnNpb247XG4iLCJcbmNvbnN0IHJvdXRlID0gZnVuY3Rpb24gKHVybCwgY29tcG9uZW50KSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1cmwpIHtcbiAgICAgICAgdGhpc1tjb21wb25lbnRdKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuLi9zdGF0aWMvdHlwZU9mJztcblxuXG5jb25zdCBzdGF0ZSA9IGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID8gc3RhdGUuZ2V0KGtleSkgOiBzdGF0ZS5zZXQoa2V5LCBkYXRhKTtcbn07XG5cbnN0YXRlLmNhbGxiYWNrID0ge307XG5zdGF0ZS5zb3VyY2UgPSBjcmVhdGVTb3VyY2UoKTtcbnN0YXRlLnNvdXJjZWRhdGEgPSB7fTtcbnN0YXRlLmFjdGlvbiA9IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgc3RhdGUuY2FsbGJhY2tba2V5XSA9IGNhbGxiYWNrO1xufTtcblxuc3RhdGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0eXBlT2Yoa2V5LCAnc3RyaW5nJylcbiAgICAgICAgPyBzdGF0ZS5zb3VyY2VkYXRhW2tleV0gfHwgc3RhdGUuc291cmNlW2tleV1cbiAgICAgICAgOiBrZXkgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IHN0YXRlLnNvdXJjZWRhdGEgO1xufTtcblxuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNldENhc2Uoe1trZXldOiBwYXlsb2FkfSk7XG59O1xuXG5zdGF0ZS5zZXRDYXNlID0gZnVuY3Rpb24gKHBheWxvYWQgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzdGF0ZS5zb3VyY2Vba2V5XSA9IHN0YXRlLnNvdXJjZWRhdGFba2V5XSA9IHBheWxvYWRba2V5XTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZSAocGF5bG9hZCA9IHt9KSB7XG4gICAgc3RhdGUuc291cmNlZGF0YSA9IHBheWxvYWQ7XG4gICAgcmV0dXJuIG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OihvYmosIHByb3AsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY2FsbGJhY2tbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYWxsYmFja1twcm9wXS5jYWxsKHt9LCBzdGF0ZS5zb3VyY2UsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XG4iLCJjb25zdCBEYXRldGltZSA9IHt9O1xuRGF0ZXRpbWUuTVNfSU5fREFZID0gODY0ZTU7XG5EYXRldGltZS5NU19JTl9IT1VSID0gMzZlNTtcbkRhdGV0aW1lLk1TX0lOX01JTiA9IDZlNDtcblxuLyoqXG4gKiBSZXR1cm4gdGltZXN0YW1wXG4gKiBAcGFyYW0gZGF0ZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuRGF0ZXRpbWUudGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZS5nZXRUaW1lKCkgOiAobmV3IERhdGUpLmdldFRpbWUoKVxufTtcblxuLyoqXG4gKiBBZGQgZGF5cyB0byBzb21lIGRhdGVcbiAqIEBwYXJhbSBkYXkgICAgICAgICAgIG51bWJlciBvZiBkYXlzLiAwLjA0IC0gMSBob3VyLCAwLjUgLSAxMiBob3VyLCAxIC0gMSBkYXlcbiAqIEBwYXJhbSBkYXRlU3RhcnQgICAgIHR5cGUgRGF0ZSwgc3RhcnQgZGF0ZVxuICogQHJldHVybnMgeyp9ICB0eXBlIERhdGVcbiAqL1xuRGF0ZXRpbWUuYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXksIGRhdGVTdGFydCkge1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlU3RhcnQgPyBuZXcgRGF0ZShkYXRlU3RhcnQpIDogbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5ICogODY0MDAwMDApKTtcbiAgICByZXR1cm4gZGF0ZTtcbn07XG5cbi8qKlxuICogVGltZSBiZXR3ZWVuIERhdGVzXG4gKiA8cHJlPlxuICogICAgIHZhciBmcm9tID0gbmV3IERhdGUoJzIwMTYtMDgtMDEgMjA6MzAnKTtcbiAqICAgICB2YXIgdG8gPSBuZXcgRGF0ZSgnMjAxNi0wOC0xMCAwNzo1NScpO1xuICogICAgIC5EYXRlLmJldHdlZW5EYXRlcyhmcm9tLCB0byk7IC8vIE9iamVjdCB7IGRheTogOCwgaG91cjogMTEsIG1pbnV0ZTogMjUgfVxuICogPC9wcmU+XG4gKiBAcGFyYW0gZGF0ZUZyb21cbiAqIEBwYXJhbSBkYXRlVG9cbiAqIEByZXR1cm5zIHt7ZGF5OiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXJ9fVxuICovXG5EYXRldGltZS5iZXR3ZWVuRGF0ZXMgPSBmdW5jdGlvbiAoZGF0ZUZyb20sIGRhdGVUbykge1xuICAgIGRhdGVGcm9tID0gZGF0ZUZyb20gfHwgbmV3IERhdGUoKTtcbiAgICBkYXRlVG8gPSBkYXRlVG8gfHwgbmV3IERhdGUoKTtcbiAgICBsZXQgZGlmZk1zID0gKGRhdGVUbyAtIGRhdGVGcm9tKSxcbiAgICAgICAgZGlmZkRheXMgPSBNYXRoLnJvdW5kKGRpZmZNcyAvIDg2NGU1KSxcbiAgICAgICAgZGlmZkhycyA9IE1hdGgucm91bmQoKGRpZmZNcyAlIDg2NGU1KSAvIDM2ZTUpLFxuICAgICAgICBkaWZmTWluID0gTWF0aC5yb3VuZCgoKGRpZmZNcyAlIDg2NGU1KSAlIDM2ZTUpIC8gNmU0KTtcbiAgICByZXR1cm4ge2RheTogZGlmZkRheXMsIGhvdXI6IGRpZmZIcnMsIG1pbnV0ZTogZGlmZk1pbn07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgZGF0ZSBzdHJpbmcgdG8gRGF0ZSBPYmplY3RcbiAqIHl5IC0gdGhlIHllYXIgYXMgYSB0d28tZGlnaXQgbnVtYmVyICggMDAgdG8gOTkgKTtcbiAqIFlZIC0gdGhlIHllYXIgYXMgYSBmb3VyLWRpZ2l0IG51bWJlciAoIDE5MDAtOTk5OSApO1xuICogbW0gLSB0aGUgbW9udGggYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDEyICkgKCAxIHRvIDEyICk7XG4gKiBkZCAtIHRoZSBkYXkgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAxIHRvIDMxICkgKCAxIHRvIDMxICk7XG4gKiBoaCBISCAtIHRoZSBob3VyICggMDAgdG8gMTEgKSAoIDAwIHRvIDIzICkgKCAxIHRvIDEyICkgKCAwIHRvIDIzICk7XG4gKiBpaSAtIHRoZSBtaW51dGUgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBzcyAtIHRoZSBzZWNvbmQgYXMgYSBudW1iZXIgd2l0aCBhIGxlYWRpbmcgemVybyAoIDAwIHRvIDU5ICk7XG4gKiBhYSAtIGRpc3BsYXlzIGFtIChmb3IgdGltZXMgZnJvbSBtaWRuaWdodCB1bnRpbCBub29uKSBhbmQgcG0gKGZvciB0aW1lcyBmcm9tIG5vb24gdW50aWwgbWlkbmlnaHQpO1xuICpcbiAqIC5zdHJUb0RhdGUoJzEyLjA1LjIwMTcgMTI6MzA6MjUnLCAnbW0uZGQuWVkgSEg6aWk6c3MnKVxuICogLnN0clRvRGF0ZSgnMTIvMDUvMjAxNycsICdtbS9kZC9ZWScpXG4gKiAuc3RyVG9EYXRlKCcxMi81LzIwMTcnLCAnbW0vZGQvWVknLCB0cnVlKVxuICogQHBhcmFtIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXRcbiAqIEBwYXJhbSB1dGNcbiAqIEByZXR1cm5zIHtEYXRlfVxuICovXG5EYXRldGltZS5zdHJUb0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCB1dGMpIHtcbiAgICBjb25zdCBzZXQgPSBbMCwgMCwgMSwgMCwgMCwgMF07XG4gICAgY29uc3QgdGVtcCA9IGRhdGUubWF0Y2goL1thLXpBLVpdK3xbMC05XSsvZyk7XG4gICAgY29uc3QgbWFzayA9IGZvcm1hdC5tYXRjaCgvW2EtekEtWl17Mn0vZyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAobWFza1tpXSkge1xuICAgICAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgICAgICAgc2V0WzJdID0gdGVtcFtpXSB8fCAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgc2V0WzFdID0gKHRlbXBbaV0gfHwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgICAgICAgICAgc2V0WzBdID0gdGVtcFtpXSAqIDEgKyAodGVtcFtpXSA+IDUwID8gMTkwMCA6IDIwMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgICAgICAgICBzZXRbNF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWVlcIjpcbiAgICAgICAgICAgICAgICBzZXRbMF0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgICAgICAgICBzZXRbM10gPSBzZXRbM10gJSAxMiArICgodGVtcFtpXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ2FtJyA/IDAgOiAxMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgICAgICBzZXRbNV0gPSB0ZW1wW2ldIHx8IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNldFswXSwgc2V0WzFdLCBzZXRbMl0sIHNldFszXSwgc2V0WzRdLCBzZXRbNV0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZXRpbWU7XG5cbi8qXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTVNfSU5fREFZOiBEYXRldGltZS5NU19JTl9EQVksXG4gICAgTVNfSU5fSE9VUjogRGF0ZXRpbWUuTVNfSU5fSE9VUixcbiAgICBNU19JTl9NSU46IERhdGV0aW1lLk1TX0lOX01JTixcbiAgICB0aW1lOiBEYXRldGltZS50aW1lLFxuICAgIGFkZERheXM6IERhdGV0aW1lLmFkZERheXMsXG4gICAgYmV0d2VlbkRhdGVzOiBEYXRldGltZS5iZXR3ZWVuRGF0ZXMsXG4gICAgc3RyVG9EYXRlOiBEYXRldGltZS5zdHJUb0RhdGUsXG59O1xuKi9cbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5cbmZ1bmN0aW9uIERvbSAoc2VsZWN0b3IpIHtcbiAgICBjb25zdCAkID0ge1xuICAgICAgICBzZWxlY3RvcjogdHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykgPyBzZWxlY3RvciA6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkOiBpc05vZGUoc2VsZWN0b3IpID8gW3NlbGVjdG9yXSA6IHF1ZXJ5QWxsKHNlbGVjdG9yKSxcbiAgICB9O1xuXG4gICAgY29uc3QgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKF9zZXRfcmVhbF9kaXNwbGF5X3N0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc05vZGUoc3JjKSAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3JjLnN0eWxlLmRpc3BsYXkgPyBzcmMuc3R5bGUuZGlzcGxheSA6IGdldENvbXB1dGVkU3R5bGUoc3JjKS5kaXNwbGF5O1xuICAgICAgICAgICAgc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA9ICghc3R5bGUgfHwgc3R5bGUgPT09ICdub25lJykgPyAnYmxvY2snIDogc3R5bGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5vbmUgPSAoKSA9PiAkLnNlbGVjdGVkICYmICQuc2VsZWN0ZWQubGVuZ3RoID8gJC5zZWxlY3RlZFswXSA6IGZhbHNlO1xuICAgICQuYWxsID0gKCkgPT4gJC5zZWxlY3RlZDtcbiAgICAkLmF0dHIgPSAobmFtZSwgdmFsdWUpID0+IGRlZmluZWQodmFsdWUpID8gYXR0cigkLm9uZSgpLCBuYW1lLCB2YWx1ZSkgOiBhdHRyKCQub25lKCksIG5hbWUpO1xuICAgICQuaW5qZWN0ID0gKGRhdGEsIGFwcGVuZCwgdG8pID0+IGluamVjdCgkLm9uZSgpLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAkLmFwcGVuZCA9IChkYXRhKSA9PiBpbmplY3QoJC5vbmUoKSwgZGF0YSwgdHJ1ZSk7XG4gICAgJC5zZWFyY2ggPSAoYXR0ciwgZnJvbSkgPT4gc2VhcmNoKCQub25lKCksIGF0dHIsIGZyb20pO1xuICAgICQucGFyZW50ID0gKCkgPT4gJC5vbmUoKS5wYXJlbnROb2RlO1xuICAgICQuY2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgICQub25lKClcbiAgICB9O1xuICAgICQucG9zaXRpb24gPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKTtcbiAgICAkLnggPSAoKSA9PiBwb3NpdGlvbigkLm9uZSgpKS54O1xuICAgICQueSA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLnk7XG4gICAgJC53aWR0aCA9ICgpID0+IHBvc2l0aW9uKCQub25lKCkpLndpZHRoO1xuICAgICQuaGVpZ2h0ID0gKCkgPT4gcG9zaXRpb24oJC5vbmUoKSkuaGVpZ2h0O1xuICAgICQucmVtb3ZlID0gKCkgPT4gJC5vbmUoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCQub25lKCkpO1xuICAgICQuc2hvdyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gJC5vbmUoKTtcbiAgICAgICAgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUoc3JjKTtcbiAgICAgICAgY3NzKHNyYywge2Rpc3BsYXk6IHNyYyAmJiBzcmNbJ3JlYWwtZGlzcGxheS1zdHlsZSddID8gc3JjWydyZWFsLWRpc3BsYXktc3R5bGUnXSA6ICdibG9jayd9KTtcbiAgICB9O1xuICAgICQuaGlkZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gJC5vbmUoKTtcbiAgICAgICAgX3NldF9yZWFsX2Rpc3BsYXlfc3R5bGUoc3JjKTtcbiAgICAgICAgY3NzKHNyYywge2Rpc3BsYXk6ICdub25lJ30pO1xuICAgIH07XG4gICAgJC50b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9ICQub25lKCk7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIHF1ZXJ5QWxsKHNyYykubWFwKERvbS50b2dnbGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTm9kZShzcmMpKSB7XG4gICAgICAgICAgICBpZiAoc3JjLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgRG9tLnNob3coc3JjKTtcbiAgICAgICAgICAgIGVsc2UgRG9tLmhpZGUoc3JjKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgJC5vbiA9IChldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpID0+IG9uKCQub25lKCksIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSk7XG4gICAgJC5jb29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9ICQub25lKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiBtZXJnZSh7dG9wOiBjb29yZHMudG9wICsgcGFnZVlPZmZzZXQsIGxlZnQ6IGNvb3Jkcy5sZWZ0ICsgcGFnZVhPZmZzZXR9LCBjb29yZHMpO1xuICAgIH07XG4gICAgcmV0dXJuICQ7XG59XG5cbkRvbS5hdHRyID0gYXR0cjtcbkRvbS5jc3MgPSBjc3M7XG5Eb20ubG9hZGVkID0gZG9tTG9hZGVkO1xuRG9tLmluamVjdCA9IGluamVjdDtcbkRvbS5zdHIybm9kZSA9IHN0cjJub2RlO1xuRG9tLnNlYXJjaCA9IHNlYXJjaDtcbkRvbS5xdWVyeUFsbCA9IHF1ZXJ5QWxsO1xuRG9tLnF1ZXJ5ID0gcXVlcnk7XG5Eb20uY3JlYXRlID0gY3JlYXRlRWxlbWVudDtcbkRvbS5mcmFnbWVudCA9IGNyZWF0ZUZyYWdtZW50O1xuRG9tLm5vZGUyc3RyID0gbm9kZTJzdHI7XG5Eb20uc3RyMm5vZGUgPSBzdHIybm9kZTtcbkRvbS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG5cbmV4cG9ydCBkZWZhdWx0IERvbTtcbiIsIi8qKlxuICogRW1tZXQgc3ludGF4IGZvciBjcmVhdGluZyBET00gZWxlbWVudHNcbiAqXG4gKiBTeW50YXhcbiAqICAgY29uc3QgZW1tZXQgPSBFbW1ldCgpO1xuICogICBlbW1ldCgnLnRhYmxlID4gZGl2e2xlZnR9ICsgZGl2KGNsYXNzPVwidGV4dC1yaWdodFwiKXtyaWdodH0nKVxuICogICB0YWcjaWQuY2xhc3NlcyhhdHRyaWJ1dGVzPVwiXCIpe2lubmVyIHRleHR9ID4gLm5lc3RlZCBeIC5iYWNrZWQudXAub25lICsgLnNpYmxpbmdcbiAqXG4gKiBBcmd1bWVudHNcbiAqICAgLmVtbWV0KCBzeW50YXggOiBzdHJpbmcsIHJldHVybk9ubHlIVE1MIDogYm9vbGVhbiApXG4gKlxuICogQG5hbWVzcGFjZSBFbW1ldFxuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB0ZXh0ICAgICAgICAgIHN5bnRheFxuICogQHBhcmFtIGh0bWxPbmx5ICAgICAgcmV0dXJuT25seUhUTUxcbiAqIEByZXR1cm5zIHtzdHJpbmd8Kn1cbiAqL1xuY29uc3QgRW1tZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0ICB0ZW1wSW5uZXJUZXh0cyA9IFtdO1xuICAgIGxldCAgdGVtcEVzY2FwZWQgPSBbXTtcbiAgICBjb25zdCByZSA9IHt9O1xuXG4gICAgcmUuZXhjbHVkZXMgPSBcIihbXlxcXFwuI1xcXFwoXFxcXHtdKylcIjtcbiAgICByZS5jbGFzc2VzID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIgKyByZS5leGNsdWRlcywgXCJnXCIpO1xuICAgIHJlLmlkID0gbmV3IFJlZ0V4cChcIiNcIiArIHJlLmV4Y2x1ZGVzLCBcImdcIik7XG4gICAgcmUudGFnID0gbmV3IFJlZ0V4cChcIl5cIiArIHJlLmV4Y2x1ZGVzKTtcbiAgICByZS5pbmRleGVzID0gLyguKz8pKD58XFwrfFxcXnwkKS9nO1xuICAgIHJlLmVzY2FwZSA9IC8oXCJ8JykoW15cXDFdKj8pXFwxL2c7XG4gICAgcmUuaW5uZXJUZXh0ID0gL1xceyhbXn1dKj8pfS9nO1xuICAgIHJlLmF0dHJzID0gL1xcKChbXlxcKV0qKVxcKS9nO1xuXG4gICAgY29uc3QgZW1tZXQgPSBmdW5jdGlvbiAodGV4dCwgaHRtbE9ubHkpIHtcbiAgICAgICAgbGV0IHRyZWUgPSBlbGVtZW50KCksXG4gICAgICAgICAgICBjdXJyZW50ID0gdHJlZSxcbiAgICAgICAgICAgIGxhc3RFbGVtZW50ID0gdHJlZSxcbiAgICAgICAgICAgIGNvbW1hbmRUZXh0ID0gdGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgY29udmVydENvbGxlY3Rpb24gPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNyYy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHNyY1swXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgICB0ZW1wSW5uZXJUZXh0cyA9IFtdO1xuICAgICAgICB0ZW1wRXNjYXBlZCA9IFtdO1xuICAgICAgICBjb21tYW5kVGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UocmUuZXNjYXBlLCBmdW5jdGlvbiAoZnVsbCwgcXVvdGVzLCBlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB0ZW1wRXNjYXBlZC5wdXNoKGVzY2FwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlxcXCJcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZShyZS5pbm5lclRleHQsIGZ1bmN0aW9uIChmdWxsLCBpbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wSW5uZXJUZXh0cy5wdXNoKGlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwie31cIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UocmUuaW5kZXhlcywgZnVuY3Rpb24gKGZ1bGwsIGVsZW1lbnRUZXh0LCBzcGxpdHRlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQobGFzdEVsZW1lbnQgPSBlbGVtZW50KGVsZW1lbnRUZXh0KSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0dGVyID09PSBcIj5cIilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGxhc3RFbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNwbGl0dGVyID09PSBcIl5cIilcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJlc3VsdCA9IHRyZWUuY2hpbGRyZW4ubGVuZ3RoID4gMVxuICAgICAgICAgICAgPyB0cmVlLmNoaWxkcmVuXG4gICAgICAgICAgICA6IHRyZWUuY2hpbGRyZW5bMF07XG5cbiAgICAgICAgcmV0dXJuIGh0bWxPbmx5XG4gICAgICAgICAgICA/IHRyZWUuaW5uZXJIVE1MXG4gICAgICAgICAgICA6IChyZXN1bHQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiA/IGNvbnZlcnRDb2xsZWN0aW9uKHJlc3VsdCkgOiByZXN1bHQpO1xuICAgIH07XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgbGV0IGNvbW1hbmRUZXh0ID0gdGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgbWF0Y2hfdGFnID0gY29tbWFuZFRleHQubWF0Y2gocmUudGFnKSxcbiAgICAgICAgICAgIG1hdGNoX2lkID0gY29tbWFuZFRleHQubWF0Y2gocmUuaWQpLFxuICAgICAgICAgICAgbWF0Y2hfY2xhc3NlcyA9IGNvbW1hbmRUZXh0Lm1hdGNoKHJlLmNsYXNzZXMpLFxuICAgICAgICAgICAgbWF0Y2hfYXR0cnMgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5hdHRycyksXG4gICAgICAgICAgICBtYXRjaF9pbm5lclRleHQgPSBjb21tYW5kVGV4dC5tYXRjaChyZS5pbm5lclRleHQpLFxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobWF0Y2hfdGFnID8gbWF0Y2hfdGFnWzBdIDogXCJkaXZcIik7XG5cbiAgICAgICAgaWYgKG1hdGNoX2lkKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gbWF0Y2hfaWQucG9wKCkucmVwbGFjZShyZS5pZCwgXCIkMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9jbGFzc2VzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG1hdGNoX2NsYXNzZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lLnNsaWNlKDEpXG4gICAgICAgICAgICB9KS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaF9pbm5lclRleHQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IG1hdGNoX2lubmVyVGV4dC5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmVzY2FwZSh0ZW1wSW5uZXJUZXh0cy5zaGlmdCgpKTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoX2F0dHJzKSB7XG4gICAgICAgICAgICBtYXRjaF9hdHRycy5tYXAoZnVuY3Rpb24gKGNodW5rUGFyYW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rUGFyYW0ucmVwbGFjZShyZS5hdHRycywgXCIkMVwiKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgY2h1bmsubWFwKGZ1bmN0aW9uIChhdHRyUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJQYXJhbS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGF0dHIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKHVuZXNjYXBlKGF0dHIuam9pbihcIj1cIikpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gZW1tZXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbW1ldDtcbiIsIlxuZXhwb3J0IGNvbnN0IEVWRU5UU19OQU1FUyA9IHtcbiAgICBjb3B5OiAnY29weScsXG4gICAgY3V0OiAnY3V0JyxcbiAgICBwYXN0ZTogJ3Bhc3RlJyxcbiAgICBhYm9ydDogJ2Fib3J0JyxcbiAgICBibHVyOiAnYmx1cicsXG4gICAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgICBjYW5wbGF5OiAnY2FucGxheScsXG4gICAgY2FucGxheXRocm91Z2g6ICdjYW5wbGF5dGhyb3VnaCcsXG4gICAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgICBjbGljazogJ2NsaWNrJyxcbiAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICBjb250ZXh0bWVudTogJ2NvbnRleHRtZW51JyxcbiAgICBjdWVjaGFuZ2U6ICdjdWVjaGFuZ2UnLFxuICAgIGRibGNsaWNrOiAnZGJsY2xpY2snLFxuICAgIGRyYWc6ICdkcmFnJyxcbiAgICBkcmFnZW5kOiAnZHJhZ2VuZCcsXG4gICAgZHJhZ2VudGVyOiAnZHJhZ2VudGVyJyxcbiAgICBkcmFnbGVhdmU6ICdkcmFnbGVhdmUnLFxuICAgIGRyYWdvdmVyOiAnZHJhZ292ZXInLFxuICAgIGRyYWdzdGFydDogJ2RyYWdzdGFydCcsXG4gICAgZHJvcDogJ2Ryb3AnLFxuICAgIGR1cmF0aW9uY2hhbmdlOiAnZHVyYXRpb25jaGFuZ2UnLFxuICAgIGVtcHRpZWQ6ICdlbXB0aWVkJyxcbiAgICBlbmRlZDogJ2VuZGVkJyxcbiAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBpbnB1dDogJ2lucHV0JyxcbiAgICBpbnZhbGlkOiAnaW52YWxpZCcsXG4gICAga2V5ZG93bjogJ2tleWRvd24nLFxuICAgIGtleXByZXNzOiAna2V5cHJlc3MnLFxuICAgIGtleXVwOiAna2V5dXAnLFxuICAgIGxvYWQ6ICdsb2FkJyxcbiAgICBsb2FkZWRkYXRhOiAnbG9hZGVkZGF0YScsXG4gICAgbG9hZGVkbWV0YWRhdGE6ICdsb2FkZWRtZXRhZGF0YScsXG4gICAgbG9hZHN0YXJ0OiAnbG9hZHN0YXJ0JyxcbiAgICBtb3VzZWRvd246ICdtb3VzZWRvd24nLFxuICAgIG1vdXNlZW50ZXI6ICdtb3VzZWVudGVyJyxcbiAgICBtb3VzZWxlYXZlOiAnbW91c2VsZWF2ZScsXG4gICAgbW91c2Vtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBtb3VzZW91dDogJ21vdXNlb3V0JyxcbiAgICBtb3VzZW92ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNldXA6ICdtb3VzZXVwJyxcbiAgICBtb3VzZXdoZWVsOiAnbW91c2V3aGVlbCcsXG4gICAgcGF1c2U6ICdwYXVzZScsXG4gICAgcGxheTogJ3BsYXknLFxuICAgIHBsYXlpbmc6ICdwbGF5aW5nJyxcbiAgICBwcm9ncmVzczogJ3Byb2dyZXNzJyxcbiAgICByYXRlY2hhbmdlOiAncmF0ZWNoYW5nZScsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgcmVzaXplOiAncmVzaXplJyxcbiAgICBzY3JvbGw6ICdzY3JvbGwnLFxuICAgIHNlZWtlZDogJ3NlZWtlZCcsXG4gICAgc2Vla2luZzogJ3NlZWtpbmcnLFxuICAgIHNlbGVjdDogJ3NlbGVjdCcsXG4gICAgc3RhbGxlZDogJ3N0YWxsZWQnLFxuICAgIHN1Ym1pdDogJ3N1Ym1pdCcsXG4gICAgc3VzcGVuZDogJ3N1c3BlbmQnLFxuICAgIHRpbWV1cGRhdGU6ICd0aW1ldXBkYXRlJyxcbiAgICB0b2dnbGU6ICd0b2dnbGUnLFxuICAgIHZvbHVtZWNoYW5nZTogJ3ZvbHVtZWNoYW5nZScsXG4gICAgd2FpdGluZzogJ3dhaXRpbmcnLFxuICAgIHdoZWVsOiAnd2hlZWwnLFxuICAgIGF1eGNsaWNrOiAnYXV4Y2xpY2snLFxuICAgIGdvdHBvaW50ZXJjYXB0dXJlOiAnZ290cG9pbnRlcmNhcHR1cmUnLFxuICAgIGxvc3Rwb2ludGVyY2FwdHVyZTogJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgcG9pbnRlcmRvd246ICdwb2ludGVyZG93bicsXG4gICAgcG9pbnRlcm1vdmU6ICdwb2ludGVybW92ZScsXG4gICAgcG9pbnRlcnVwOiAncG9pbnRlcnVwJyxcbiAgICBwb2ludGVyY2FuY2VsOiAncG9pbnRlcmNhbmNlbCcsXG4gICAgcG9pbnRlcm92ZXI6ICdwb2ludGVyb3ZlcicsXG4gICAgcG9pbnRlcm91dDogJ3BvaW50ZXJvdXQnLFxuICAgIHBvaW50ZXJlbnRlcjogJ3BvaW50ZXJlbnRlcicsXG4gICAgcG9pbnRlcmxlYXZlOiAncG9pbnRlcmxlYXZlJyxcbiAgICBzZWxlY3RzdGFydDogJ3NlbGVjdHN0YXJ0JyxcbiAgICBzZWxlY3Rpb25jaGFuZ2U6ICdzZWxlY3Rpb25jaGFuZ2UnLFxuICAgIGFuaW1hdGlvbmVuZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICBhbmltYXRpb25zdGFydDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB0cmFuc2l0aW9uZW5kOiAndHJhbnNpdGlvbmVuZCcsXG59O1xuXG5leHBvcnQgY29uc3QgRVZFTlRTX05BTUVTX0JBU0lDID0ge1xuICAgIGJsdXI6ICdibHVyJyxcbiAgICBjaGFuZ2U6ICdjaGFuZ2UnLFxuICAgIGNsaWNrOiAnY2xpY2snLFxuICAgIGRibGNsaWNrOiAnZGJsY2xpY2snLFxuICAgIGRyYWc6ICdkcmFnJyxcbiAgICBkcmFnZW5kOiAnZHJhZ2VuZCcsXG4gICAgZHJhZ2VudGVyOiAnZHJhZ2VudGVyJyxcbiAgICBkcmFnbGVhdmU6ICdkcmFnbGVhdmUnLFxuICAgIGRyYWdvdmVyOiAnZHJhZ292ZXInLFxuICAgIGRyYWdzdGFydDogJ2RyYWdzdGFydCcsXG4gICAgZHJvcDogJ2Ryb3AnLFxuICAgIGZvY3VzOiAnZm9jdXMnLFxuICAgIGlucHV0OiAnaW5wdXQnLFxuICAgIGxvYWQ6ICdsb2FkJyxcbiAgICBtb3VzZWRvd246ICdtb3VzZWRvd24nLFxuICAgIG1vdXNlZW50ZXI6ICdtb3VzZWVudGVyJyxcbiAgICBtb3VzZWxlYXZlOiAnbW91c2VsZWF2ZScsXG4gICAgbW91c2Vtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBtb3VzZW91dDogJ21vdXNlb3V0JyxcbiAgICBtb3VzZW92ZXI6ICdtb3VzZW92ZXInLFxuICAgIG1vdXNldXA6ICdtb3VzZXVwJyxcbiAgICBtb3VzZXdoZWVsOiAnbW91c2V3aGVlbCcsXG4gICAgc2Nyb2xsOiAnc2Nyb2xsJyxcbiAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIHN1Ym1pdDogJ3N1Ym1pdCcsXG4gICAgd2hlZWw6ICd3aGVlbCcsXG4gICAgdHJhbnNpdGlvbmVuZDogJ3RyYW5zaXRpb25lbmQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTX05BTUVTO1xuIiwiXG5jb25zdCBFdmVudE1hbmFnZXIgPSB7XG5cbiAgICBldmVudEZyYWdtZW50OiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgdmVyc2lvbjogJzAuMC4yJyxcbiAgICBldmVudHNUeXBlOiB7fSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZXRhaWxzXG4gICAgICogQHJldHVybnMge0N1c3RvbUV2ZW50fVxuICAgICAqL1xuICAgIGFkZEV2ZW50OiBmdW5jdGlvbihuYW1lLCBkZXRhaWxzKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtkZXRhaWw6IGRldGFpbHN9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGRldGFpbHMpXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBldmVudFtrZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgICBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFtuYW1lXSA9IGV2ZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFtuYW1lXSlcbiAgICAgICAgICAgIGRlbGV0ZSBFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFtuYW1lXVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IHR5cGUgb24gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKiBAcmV0dXJucyB7e3R5cGU6ICosIGxpc3RlbmVyOiAqLCB1c2VDYXB0dXJlOiAoKnxib29sZWFuKX19XG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKXtcbiAgICAgICAgdXNlQ2FwdHVyZSA9IHVzZUNhcHR1cmUgfHwgZmFsc2U7XG4gICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gICAgICAgIEV2ZW50TWFuYWdlci5ldmVudEZyYWdtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmV8fGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFuIGV2ZW50IHRvIHRoaXMgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAodHlwZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFt0eXBlXSBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KVxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmV2ZW50RnJhZ21lbnQuZGlzcGF0Y2hFdmVudChFdmVudE1hbmFnZXIuZXZlbnRGcmFnbWVudFt0eXBlXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRNYW5hZ2VyO1xuIiwiLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcblxuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0XG4gICAgICAgIGtleSxcbiAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvcHRpb25zLmRhdGEpXG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IE5hbWVzcGFjZUFwcGxpY2F0aW9uIGZyb20gXCIuL05hbWVzcGFjZUFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCIuL2Nvb2tpZVwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IERhdGV0aW1lIGZyb20gXCIuL2RhdGV0aW1lXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2V2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IEVtbWV0IGZyb20gXCIuL2VtbWV0XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4vaHR0cC1yZXF1ZXN0XCI7XG5pbXBvcnQgRG9tIGZyb20gXCIuL2RvbVwiO1xuXG5cbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbiA9IE5hbWVzcGFjZUFwcGxpY2F0aW9uO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLlV0aWwgPSBVdGlsO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkNvb2tpZSA9IENvb2tpZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5TdG9yYWdlID0gU3RvcmFnZTtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5EYXRldGltZSA9IERhdGV0aW1lO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlcjtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5UaW1lciA9IFRpbWVyO1xud2luZG93Lk5hbWVzcGFjZUFwcGxpY2F0aW9uLkVtbWV0ID0gRW1tZXQ7XG53aW5kb3cuTmFtZXNwYWNlQXBwbGljYXRpb24uaHR0cFJlcXVlc3QgPSBodHRwUmVxdWVzdDtcbndpbmRvdy5OYW1lc3BhY2VBcHBsaWNhdGlvbi5Eb20gPSBEb207XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcblxuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgYWRkUHJvcGVydGllcykge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcblxuICAgIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSkge1xuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSghIWFkZFByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzcmMuYmluZCh7fSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScgfHwgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3JjKSk7XG4gICAgICAgIGlmICh0eXBlT2YoYWRkUHJvcGVydGllcywgJ29iamVjdCcpIHx8IHR5cGVPZihhZGRQcm9wZXJ0aWVzLCAnYXJyYXknKSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFkZFByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvcHlba2V5XSA9IGFkZFByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZGVmaW5lZChhZGRQcm9wZXJ0aWVzKSA/IHNyYyArIGFkZFByb3BlcnRpZXMgOiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXSwgbGlzdCA9IHZhbHVlcyB8fCBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuICAgIHJldHVybiB0bXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIGFwcGVuZCwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKVxuICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSAoQUJDICsgTlVNQkVSUykudG9Mb3dlckNhc2UoKS5zcGxpdCgnJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz1cbiAgICAgICAgICAgIGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgaSwgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcblxuICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxID8gZnJhZ21lbnQuZmlyc3RDaGlsZCA6IGZyYWdtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iLCJcblxuLyoqXG4gKiBBZGQgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGpzb24gPSB0cnVlKSB7XG4gICAgaWYgKGpzb24pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEdldCBpdGVtIGJ5IG5hbWVcbiAqIEBwYXJhbSBuYW1lXG4gKiBAcGFyYW0ganNvblxuICovXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAobmFtZSwganNvbiA9IHRydWUpIHtcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKGpzb24gJiYgdmFsdWUpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKip0cnVlXG4gKiBSZW1vdmUgaXRlbSBieSBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICovXG5jb25zdCByZW1vdmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSlcbn07XG5cbi8qKlxuICogR2V0IGl0ZW0gYnkgaW5kZXhcbiAqIEBwYXJhbSBpbmRleFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3Qga2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KGluZGV4KVxufTtcblxuLyoqXG4gKiBXaGVuIGludm9rZWQsIHdpbGwgZW1wdHkgYWxsIGtleXMgb3V0IG9mIHRoZSBzdG9yYWdlLlxuICovXG5jb25zdCBjbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBkYXRhIGl0ZW1zIHN0b3JlZCBpbiB0aGUgU3RvcmFnZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCBsZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoXG59O1xuXG4vKipcbiAqIExvY2FsU3RvcmFnZSB3cmFwcGVyXG4gKlxuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge3tzZXQ6IChTdG9yYWdlLnNldHwqKSwgZ2V0OiAoU3RvcmFnZS5nZXR8KiksIGtleTogKFN0b3JhZ2Uua2V5fCopLCBjbGVhcjogKFN0b3JhZ2UuY2xlYXJ8KiksIHJlbW92ZTogKFN0b3JhZ2UucmVtb3ZlfCopLCBsZW5ndGg6IChTdG9yYWdlLmxlbmd0aHwqKX19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RvcmFnZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogc2V0LFxuICAgICAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldChuYW1lKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBzZXQsXG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBjbGVhcixcbiAgICByZW1vdmUsXG4gICAgbGVuZ3RoLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsIi8qKlxuICogU2ltcGxlIHRpbWVyIHJlYWxpc2UuIFJldHVybiBzZWxmLWluc3RhbmNlXG4gKiB0aW1lciA9IG5ldyAuVGltZXIoZnVuY3Rpb24oaXRlcmF0b3IsIHJlcGVhdCl7fSwgMTAwMCwgNSlcbiAqICBJbnN0YW5jZSBtZXRob2RzXG4gKiAgICAgIHRpbWVyLnJlcGVhdFxuICogICAgICB0aW1lci5pdGVyYXRvclxuICogICAgICB0aW1lci5zdGFydCAoKVxuICogICAgICB0aW1lci5zdG9wICgpXG4gKiAgICAgIHRpbWVyLnBhdXNlICgpXG4gKiAgICAgIHRpbWVyLnJlc2V0ICgpXG4gKiAgICAgIHRpbWVyLmNsZWFyICgpXG4gKiAgU3RhdGljIG1ldGhvZHNcbiAqICAgICAgVGltZXIudGltZW91dCAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkgOiB0aW1lb3V0SWRcbiAqICAgICAgVGltZXIuaW50ZXJ2YWwgKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIDogaW50ZXJ2YWxJZFxuICogICAgICBUaW1lci50aW1lb3V0U3RvcCAodGltZW91dElkKVxuICogICAgICBUaW1lci5pbnRlcnZhbFN0b3AgKGludGVydmFsSWQpXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBkZWxheVxuICogQHBhcmFtIHJlcGVhdFxuICogQHBhcmFtIHRoaXNJbnN0YW5jZSAgaWYgbm90IHNldCwgdXNlcyBpbnN0YW5jZSBvZiBUaW1lclxuICogQHJldHVybnMge1dpbmRvdy5UaW1lcnxUaW1lcn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRpbWVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lcihjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKTtcblxuICAgIGRlbGF5ID0gZGVsYXkgIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KGRlbGF5KSA6IDUwMDtcbiAgICByZXBlYXQgPSByZXBlYXQgIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KHJlcGVhdCkgOiAwO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtzZWxmOiB0aGlzLCBjYWxsYmFjazogY2FsbGJhY2ssIGRlbGF5OiBkZWxheSwgcmVwZWF0OiByZXBlYXR9O1xuXG4gICAgbGV0IGh0ID0gbnVsbDtcbiAgICBjb25zdCBoYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uZmlnLnNlbGYuaXRlcmF0b3IrKztcbiAgICAgICAgaWYgKGNvbmZpZy5yZXBlYXQgIT09IDAgJiYgY29uZmlnLnJlcGVhdCA8PSBjb25maWcuc2VsZi5pdGVyYXRvcilcbiAgICAgICAgICAgIGNvbmZpZy5zZWxmLnN0b3AoKTtcbiAgICAgICAgY29uZmlnLmNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHRoaXMsIGNvbmZpZy5zZWxmLml0ZXJhdG9yLCBjb25maWcucmVwZWF0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5yZXBlYXQgPT09IDAgfHwgY29uZmlnLnJlcGVhdCA+IGNvbmZpZy5zZWxmLml0ZXJhdG9yKVxuICAgICAgICAgICAgaHQgPSBzZXRJbnRlcnZhbChoYywgY29uZmlnLmRlbGF5KTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGNvbmZpZy5yZXBlYXQ7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9O1xuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKVxuICAgIH07XG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IDBcbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaHQpXG4gICAgfTtcbn07XG5cblRpbWVyLnRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIudGltZW91dFN0b3AgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuaW50ZXJ2YWxTdG9wID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtleHRlbmRSZWN1cnNpdmV9ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtyYW5kb21Db2xvciwgcmFuZG9tSXRlbSwgcmFuZG9tTnVtYmVyLCByYW5kb21TdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFV0aWwgPSB7XG4gICAgYXR0cixcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50LFxuICAgIGNzcyxcbiAgICBkb21Mb2FkZWQsXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHNlYXJjaCxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=