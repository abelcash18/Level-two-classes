/**
 * 
 * Array Methods
 * 
 * length
 * splice
 * slice
 * pop
 * push
 * shift
 * unshift
 * at
 * toString
 * join
 * concat
 * flat
 * 
 */

let arrayOfFood = ["Beans", "Yam", "Egg", "Rice", "Noodles"]

console.log(arrayOfFood)
console.log(arrayOfFood.length)

let popArray = arrayOfFood.pop()
console.log(popArray)

console.log(arrayOfFood)

let pushArray = arrayOfFood.push("Bread", "Amala")

console.log(arrayOfFood)

let unshiftArray = arrayOfFood.unshift("Spag")

console.log(arrayOfFood)

let shiftArray =  arrayOfFood.shift()
console.log(arrayOfFood)

//at

let atIndex = arrayOfFood.at(2)
console.log(atIndex)
console.log(arrayOfFood[1])

let arrayToString = arrayOfFood.toString()

console.log(arrayToString)

//slice

let sliceArray = arrayOfFood.slice(0,2)
console.log(sliceArray)

// let spliceArray = arrayOfFood.splice(0,3)
// console.log(spliceArray)
console.log(arrayOfFood)

let joinArray = arrayOfFood.join(" $$ ")
console.log(joinArray)
let firstArray = ["Benz", "Toyota"]
let secondArray = ["Honda", "Nissan", "Tesla", "Micra"]

let concatArray = firstArray.concat(secondArray)
console.log(concatArray)