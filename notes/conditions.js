// booleans and figuring things out. 

let takenCSharp = false
let takenJava = false

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# or Java')
}

let age = 65
let usCitizenTime = 4
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible to be a senator')
}

// falsy values - undefined, null, empty lists, empty objects, 0, false. just use triple equals.

if (null === 0){
    console.log('the same!')
} else {
    console.log('not the same!')

}
