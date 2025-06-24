/**
 * Datatypes
 * 
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * 
 * Array - []
 * Object - {}
 */

//String

//Variable and Variable Declarators - let, var, const

let myName = "Ibrahim"
console.log(myName)
console.log(typeof(myName))


//Number

let myAge = 20

console.log(myAge)
console.log(typeof(myAge))

//Boolean

let isMarried = false
console.log(isMarried)
console.log(typeof(isMarried))

console.log("User saved successfully: " +myName + " is "+ myAge + " years old")

//DOM MAnipulation

// console.log(document.getElementById("title").textContent)
console.log(document.getElementById("title").innerText)

//Assignment Operator
document.getElementById("title").innerText = myName + " is "+ myAge + " years old"

//Naming Convention
/**
 * PascalCase
 * camelCase
 * kebab-case
 * snake_case
 */