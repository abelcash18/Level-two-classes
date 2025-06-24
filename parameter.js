function runParameter(param){
    console.log("Hello " + param)
    alert(`Welcome ${param}`)
    document.getElementById("display").innerText = `Welcome ${param}`
}

function defaultParameter(value = "Feranmi"){
    console.log("Hello " + value)
    alert(`Welcome ${value}`)
    document.getElementById("display").innerHTML = `Welcome ${value}`
}

function multipleParameter(){}

function addValues(){
    let userInput1 = parseInt(document.getElementById("userInput1").value)
    let userInput2 = parseInt(document.getElementById("userInput2").value)

    let addition = userInput1 + userInput2
    console.log(addition)
}

function subValues(){
    let userInput1 = parseInt(document.getElementById("userInput1").value)
    let userInput2 = parseInt(document.getElementById("userInput2").value)

    let subtraction = userInput1 - userInput2
    console.log(subtraction)
}

function displayNumber(value){
    console.log(value)
    document.getElementById("userInput1").value += value
}

function evaluateValue(){
    let rceivedInput = document.getElementById("userInput1").value

    let evaluateInput = eval(rceivedInput)

    console.log(evaluateInput)

    document.getElementById("userInput1").value = evaluateInput

    document.getElementById("answer").innerHTML = `<h1>${evaluateInput}</h1>`
}