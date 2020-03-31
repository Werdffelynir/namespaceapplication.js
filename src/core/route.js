
const route = function (url, component) {
    if (location.pathname === url) {
        this[component]();
    }
};

export default route;