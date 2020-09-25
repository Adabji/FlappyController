input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showAnimation(light.sparkleAnimation, 500)
})
forever(function () {
    let dead = 0
    let win = 0
    makerController.player1.setButton(ArcadeButton.A, false)
    if (win) {
        music.baDing.play()
    }
    if (dead) {
        music.pewPew.play()
    }
})
