## Timer(callback, delay, repeat, thisInstance)
```javascript

interval: ƒ (e,t,n)
intervalStop: ƒ (e)
timeout: ƒ (e,t,n)
timeoutStop: ƒ (e)
```

```
timer = new Timer(function(iterator, repeat){}, 1000, 5)
Instance methods
    timer.repeat
    timer.iterator
    timer.start ()
    timer.stop ()
    timer.pause ()
    timer.reset ()
    timer.clear ()
Static methods
    Timer.timeout (callback, ms, thisInst) : timeoutId
    Timer.interval (callback, ms, thisInst) : intervalId
    Timer.timeoutStop (timeoutId)
    Timer.intervalStop (intervalId)
```