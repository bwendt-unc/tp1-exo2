let y = 0
let x = 2
led.plot(x, y)
basic.forever(function () {
    while (y > 0) {
        led.plot(0, 0)
    }
    while (y < 4) {
        led.plot(0, 0)
    }
})
