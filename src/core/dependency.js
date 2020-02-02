import loadJS from '../static/loadJS';
import loadCSS from "../static/loadCSS";
import merge from "../static/merge";


const dependency = function (config, force = true)
{
    const sources = merge({
        css: [],
        js: [],
        elements: [],
        complete: () => {},
        error: () => {}
    }, config);

    if (force)
        dependency.load(sources);

    return sources;
};

dependency.load = (sources) => {
    const max =
        (sources.css ? sources.css.length : 0) +
        (sources.js ? sources.js.length : 0);
    const srcs = merge({css: sources.css},{js: sources.js});

    let i = 0;
    Object.keys(srcs).forEach((key) => {
        const load = key === 'css' ? loadCSS : loadJS;
        srcs[key].forEach((src) => {
                sources.elements.push(load(src,() => {
                    i ++;
                    if (max === i)
                        return sources.complete(sources);
                }, sources.error));
        });
    });
};

dependency.remove = function (sources)
{
    const elements = sources && sources.elements ? sources.elements : [];
    if (elements.length) {
        sources.elements.forEach((element) => {
            element.parentNode.removeChild(element);
        });
    }
};

export default dependency;
