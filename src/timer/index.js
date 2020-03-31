/**
 * Simple timer realise. Return self-instance
 * timer = new .Timer(function(iterator, repeat){}, 1000, 5)
 *  Instance methods
 *      timer.repeat
 *      timer.iterator
 *      timer.start ()
 *      timer.stop ()
 *      timer.pause ()
 *      timer.reset ()
 *      timer.clear ()
 *  Static methods
 *      Timer.timeout (callback, ms, thisInst) : timeoutId
 *      Timer.interval (callback, ms, thisInst) : intervalId
 *      Timer.timeoutStop (timeoutId)
 *      Timer.intervalStop (intervalId)
 * @param callback
 * @param delay
 * @param repeat
 * @param thisInstance  if not set, uses instance of Timer
 * @returns {Window.Timer|Timer}
 * @constructor
 */
const Timer = function (callback, delay, repeat, thisInstance) {
    if (!(this instanceof Timer))
        return new Timer(callback, delay, repeat, thisInstance);

    delay = delay !== undefined ? parseInt(delay) : 500;
    repeat = repeat !== undefined ? parseInt(repeat) : 0;
    const config = {self: this, callback: callback, delay: delay, repeat: repeat};

    let ht = null;
    const hc = function () {
        config.self.iterator++;
        if (config.repeat !== 0 && config.repeat <= config.self.iterator)
            config.self.stop();
        config.callback.call(thisInstance || this, config.self.iterator, config.repeat);
    };

    this.repeat = repeat;
    this.iterator = 0;
    this.start = function () {
        if (config.repeat === 0 || config.repeat > config.self.iterator)
            ht = setInterval(hc, config.delay);
    };
    this.stop = function () {
        this.iterator = config.repeat;
        this.clear();
    };
    this.pause = function () {
        this.clear()
    };
    this.reset = function () {
        this.iterator = 0
    };
    this.clear = function () {
        clearInterval(ht)
    };
};

Timer.timeout = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = typeof thisInst === 'object' ? thisInst : {};
        return setTimeout(function () {
            callback.call(thisInst)
        }, ms)
    }
};
Timer.interval = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = typeof thisInst === 'object' ? thisInst : {};
        return setInterval(function () {
            callback.call(thisInst)
        }, ms)
    }
};
Timer.timeoutStop = function (id) {
    clearTimeout(id)
};
Timer.intervalStop = function (id) {
    clearInterval(id)
};


export default Timer;