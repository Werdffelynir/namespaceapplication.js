const midNumber = function (numbers) {
    const min = Math.min(...numbers)
    return (Math.max(...numbers) - min) / 2 + min;
}

export default midNumber;
