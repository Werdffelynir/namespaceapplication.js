import getLocation from "./getLocation";
import getWindow from './getWindow';

const loc = getLocation();
const win = getWindow();

const routePath = function (hash, query) {
    let path = loc.pathname;
    if (hash)
        path += loc.hash;
    if (query)
        path += win.search;
    if (this.url && path.indexOf(this.url) === 0) {
        path = path.substr(this.url.length);
        if (path.slice(0, 1) !== '/') path = '/' + path;
    }
    return path;
};

export default routePath;
