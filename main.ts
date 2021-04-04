input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.LogoUp, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(randint(1, 9))
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(input.temperature())
    music.playMelody("C C E E G F E D ", 420)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(input.temperature())
})
basic.showLeds(`
    # # # # #
    . . . . .
    # . # . #
    . . . . .
    # # # # #
    `)
input.setSoundThreshold(SoundThreshold.Loud, 202)
