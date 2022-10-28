input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 5; index++) {
        led.plot(index, 25 % 5)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
