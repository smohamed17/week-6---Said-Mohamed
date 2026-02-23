// adding all types of functions.

function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!!'
    return shouty_text
}
console.log(shout('Hello World'))

let message = shout('Hello World Class players')
console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 /9
    if (decimalPlaces) { //undefined values are considered to be false or falsy.
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }

}

let todayTemp = 75
todayCelsis = f_to_c(todayTemp, 2)
console.log(todayCelsis)

function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}`
    return address
}
console.log(cityStateAddress('Minneapolis', 'mn'))

let address = cityStateAddress('San Diego', 'CA')
console.log(address)


function isMinnesotaZip(code) {
    // zip codes of MN 55001 and 56763
    if (code >= 55001 && code <= 56763 ) {
        return true
    } else {
        return false
    }
}
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(96342))
console.log(isMinnesotaZip(55417))
console.log(isMinnesotaZip(64734))

function testingGPA(coded) {
    return (coded >= 0 && coded <= 4)
}

console.log(testingGPA(2.5))
console.log(testingGPA(4.1))
console.log(testingGPA(-3))
console.log(testingGPA(4))


