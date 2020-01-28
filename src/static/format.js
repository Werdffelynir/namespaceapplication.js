

const format = function (string, formated) {
    let reg;
    if (Array.isArray(formated))
        reg = new RegExp(/{(\d+)}/g);
    else if (formated && typeof formated === 'object')
        reg = new RegExp(/{(\w+)}/g);

    return string.replace(reg, function (match, number) {
        return typeof formated[number] !== undefined ? formated[number] : match;
    });
};

export default format;
