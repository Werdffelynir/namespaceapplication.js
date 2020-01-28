

const findObjects = function (values, attr, attrValue) {
    let i, tmp = [], list = values || [];
    for (i = 0; i < list.length; i++)
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue)
            tmp.push(list[i]);
    return tmp;
};

export default findObjects;
