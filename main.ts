let y = 0
let x = 2
led.plot(x, y)
basic.forever(function () {
    while (y > 0) {
        basic.pause(1000)
        led.plot(0, 0)
    }
    while (y < 4) {
        basic.pause(1000)
        led.plot(0, 0)
    }
})
