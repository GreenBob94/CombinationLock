input.onButtonPressed(Button.A, function () {
    temp = "" + user_key + "A"
    check_key()
})
function check_key () {
    user_key = temp
    serial.writeLine(user_key)
    if (user_key == key) {
        basic.showNumber(secret)
    }
}
input.onButtonPressed(Button.B, function () {
    temp = "" + user_key + "B"
    check_key()
})
let temp = ""
let user_key = ""
let key = ""
let secret = 0
secret = randint(1, 9999)
key = "ABAABB"
user_key = ""
