import typeOf from '../static/typeOf';

let source = createSource();
let sourceData = {};
let actionsCallback = {};

const state = function (key, data = null) {
    return data ? state.set(key, data) : state.get(key)
};

state.init = function (thisInstance) {

};

state.action = function (key, callback) {
    actionsCallback[key] = callback;
};

state.get = function (key) {
    return typeOf(key, 'string')
        ? sourceData[key] || source[key]
        : key
            ? null
            : sourceData ;
};

state.set = function (key, payload) {
    state.push({[key]: payload});
};

state.push = function (payload = {}) {
    Object.keys(payload).forEach((key) => {
        source[key] = sourceData[key] = payload[key];
    });
};

function createSource (payload = {}) {
    sourceData = payload;
    return new Proxy(payload, {
        get: (obj, prop) => {
            return prop in obj ? obj[prop] : null;
        },
        set:(obj, prop, value) => {
            if (actionsCallback[prop]) {
                actionsCallback[prop].call({}, state.source, value)
            }
            return true;
        }
    });
}

export default state;
