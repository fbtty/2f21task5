input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 25; index++) {
        led.plot(index / 4, index % 5)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
