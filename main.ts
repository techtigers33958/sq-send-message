radio.onReceivedString(function (receivedString) {
    // Checks if receivedString = "START"
    //
    // -if yes, program resets
    //
    // -does this if challenge is left half done
    //
    //
    // Else, checks if
    //
    // receivedString = targetString
    //
    // -if yes, shows check icon and releases ball
    //
    // -if no, shows "x" icon and displays message: GOT:
    // START, WANTED: HELLO WORLD.
    if (receivedString == "START") {
        reset()
    } else if (receivedString == targetString) {
        basic.showIcon(IconNames.Yes)
        releaseBall()
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("GOT:" + receivedString + "WANTED:" + targetString)
    }
})
// Drops the ball:
//
// -pushes ball
//
// -waits 1 sec
//
// -moves motor back
function releaseBall () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
// For manual control:
//
// -resets the program on demand
input.onButtonPressed(Button.B, function () {
    reset()
})
// Resets the program:
//
// -sets targetString to "hello world"
//
// -sets icon to diamond
function reset () {
    targetString = "HELLO WORLD"
    basic.showIcon(IconNames.Diamond)
}
// For manual control:
//
// -releases the ball on demand if it jams in tube.
input.onButtonPressed(Button.A, function () {
    releaseBall()
})
let targetString = ""
radio.setGroup(10)
pins.analogSetPeriod(AnalogPin.P4, 20000)
pins.servoSetPulse(AnalogPin.P4, 2000)
reset()
