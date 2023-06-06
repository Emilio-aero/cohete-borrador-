input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (pins.digitalReadPin(DigitalPin.P1)))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.analogWritePin(AnalogPin.P1, 1023)
})
