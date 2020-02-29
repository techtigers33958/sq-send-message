function release_ball () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "START") {
        reset()
    } else if (receivedString == targetString) {
        basic.showIcon(IconNames.Yes)
        release_ball()
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("GOT:" + receivedString + "WANTED:" + targetString)
    }
})
input.onButtonPressed(Button.B, function () {
    reset()
})
function reset () {
    targetString = "hello world"
    basic.showIcon(IconNames.Square)
}
input.onButtonPressed(Button.A, function () {
    release_ball()
})
let targetString = ""
radio.setGroup(10)
pins.analogSetPeriod(AnalogPin.P4, 20000)
pins.servoSetPulse(AnalogPin.P4, 2000)
reset()
