// JS Data types
// comments in JS are single line comments

//! Variables in JS
//* let and const

//* const is constant, you can't change the data type
const myName = 'Dan'
const myLastName = 'Monaghan'

const myMiddleName = 'James'

//* let, "lets you change it" to what ever you like
let myAge = 32
console.log(myAge)

// if its my birthday
// REASSIGN the value
myAge = myAge + 1
console.log(myAge)

//* Template Literal / Template String
// good choice for adding strings together
const myFullName = `${myName} ${myMiddleName} ${myLastName}`

// concatenation (adding strings to strings)
// known as a bad choice for this job
const myBadFullName = myName + ' ' + myMiddleName + ' ' + myLastName

// console.log log's things to the console/terminal
console.log(myFullName) // general logging
console.warn(myFullName) // for warnings
console.error(myFullName) // for errors
console.info(myFullName) // informative

//! Data Types

//* Basic Data Types
const myString = "I'm a string, papa"

//? Whole number
const myIntegerNumber = 23
//? decimal number
const myFloatNumber = 23.5

const myBool = true
const myOtherBool = false

//* Cool Data types

// Array / List
// items have a "item number" called an index that starts at 0
//                         0       1        2
const myArrayOfColors = ['Red', 'Green', 'Blue'] // array of strings
const myMixedArray = [
    true,
    23,
    42.5,
    'Wow',
    {
        name: 'Clint',
        job: 'cowboy',
    },
]

// use square brackets to access the items
// in the array based on the index of the items
console.log(myArrayOfColors[0])
console.log(myArrayOfColors[1])
console.log(myArrayOfColors[2])
// length built in property returns the length of
// the array aka "number of items in the list"
console.log(myArrayOfColors.length)

// Generic Object
const myPlayerObject = {
    name: 'Link',
    hearts: 3,
    inventory: ['sword', 'sheild', { name: 'lesser sword', damage: 75 }],
    isAlive: true,
}
console.log(myPlayerObject.name)

console.log(myPlayerObject['name']) // using a string
// use a variable to aaccess a value
const propIWant = 'hearts'
console.log(myPlayerObject[propIWant]) // the benefit of square brakets access

//! Built-in Methods
// console.log(myFullName.length) // a built in method for getting the length of a string
