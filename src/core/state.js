import typeOf from '../static/typeOf';


const state = function (key, data) {
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
    return typeOf(key, 'string')
        ? state.sourcedata[key] || state.source[key]
        : key === undefined
            ? null
            : state.sourcedata ;
};

state.set = function (key, payload) {
    state.setCase({[key]: payload});
};

state.setCase = function (payload = {}) {
    Object.keys(payload).forEach((key) => {
        state.source[key] = state.sourcedata[key] = payload[key];
    });
};

function createSource (payload = {}) {
    state.sourcedata = payload;
    return new Proxy(payload, {
        get: (obj, prop) => {
            return prop in obj ? obj[prop] : null;
        },
        set:(obj, prop, value) => {
            if (state.callback[prop]) {
                state.callback[prop].call({}, state.source, value)
            }
            return true;
        }
    });
}

export default state;
