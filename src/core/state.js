
const state = function (key, data = null) {
    return data ? state.set(key, data) : state.get(key)
};

state.source = new Proxy({}, {
    get: (obj, prop) => {
        return prop in obj ? obj[prop] : null;
    },
    set:(obj, prop, value) => {
        if (state.actionsCallback[prop]) {
            state.actionsCallback[prop].call({}, state.source, value)
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

export default state;
