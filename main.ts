bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    message = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma))
    if (message == "start") {
        basic.showIcon(IconNames.Target)
    }
})
let message = ""
bluetooth.startUartService()
message = ""
basic.showIcon(IconNames.No)
