let obstacle1 = false
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        obstacle1 = Math.randomBoolean()
        if (obstacle1 == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (obstacle1 == false) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 160)
    }
})
