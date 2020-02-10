import typeOf from "./typeOf";
import isNode from "./isNode";
import defined from "./defined";


const copy = function (src, addProperties) {
    const type = typeOf(src);

    if (type === 'object' && isNode(src)) {
        return src.cloneNode(!!addProperties);
    }
    else if (type === 'function') {
        return src.bind({});
    }
    else if (type === 'array' || type === 'object') {
        const copy = JSON.parse(JSON.stringify(src));
        if (typeOf(addProperties, 'object') || typeOf(addProperties, 'array'))
            Object.keys(addProperties).forEach((key) => {
                copy[key] = addProperties[key];
            });
        return copy;
    }
    else
        return defined(addProperties) ? src + addProperties : src;
};

export default copy;
