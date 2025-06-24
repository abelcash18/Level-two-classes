/**
 * 
 * String Method
 * 
 * lowercase
 * uppercase
 * length
 * at
 * charAT
 * concat
 * replace
 * toString
 * slice
 * split
 * trimstart
 * trimEnd
 * trim
 * 
 */

let username = "Khaleed SQI"
let firstName = "Bukunmi"
let lastName = "SQI"
let number = 4509

let trimStart = username.trimStart()
console.log(trimStart)

let concatName = firstName.concat(lastName)
console.log(concatName)

let replaceText = username.replace("SQI", "Oladele")
console.log(replaceText)

let toStringValue = number.toString()
console.log(toStringValue)
console.log(typeof(toStringValue))

let typeOfValue = typeof(username)

console.log(username)
console.log(typeOfValue)

let lowerCase = username.toLowerCase()
console.log(lowerCase)

let upperCase = username.toUpperCase()
console.log(upperCase)

let lengthOfValue = username.length
console.log(lengthOfValue)

// let indexAt = username.at(3)
let indexAt = username.charAt(2)
console.log(indexAt)

let word = "i am trying to understand Javascript"

let sliceWord = word.slice(2,7)
console.log(sliceWord)

let splitWord = word.split(" ")
console.log(splitWord)

for(let i=0; i < splitWord.length; i++){
    console.log(splitWord[i])
    document.getElementById("display").innerHTML = 
    `<p>${splitWord[i]}</p>`
}

function changeName(){
    let name = document.getElementById("name").value
    console.log(name.length)
    for(let i = 0;i <= name.length-1; i++){
        console.log(name[i])
        if(i % 2 == 0){
            document.getElementById("show").innerHTML += name[i].toUpperCase()
            // console.log(name[i].toUpperCase())
        }else{
            document.getElementById("show").innerHTML += name[i].toLowerCase()
            // console.log(name[i].toLowerCase())
        }
    }
}