let baseline = input.magneticForce(Dimension.Strength)
basic.clearScreen()
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - baseline) > 100) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.clearScreen()
    }
})
