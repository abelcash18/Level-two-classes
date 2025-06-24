function greetUser(){
    // let userName = "Khalid"
    let userName = document.getElementById("username").value

    let date = new Date()
    let time = date.getHours()

    console.log(time)

    // let time = 10

    if(time < 10){
        console.log("Good Morning " + userName)
        document.getElementById("display").innerText = "Good Morning " + userName
    }
    else if(time < 18){
        console.log("Good Afternoon " + userName)
        document.getElementById("display").innerText = "Good Afternoon " + userName
    }
    else if(time < 22){
        console.log("Good Evening " + userName)
        document.getElementById("display").innerText = "Good Evening " + userName
    }
    else{
        console.log("Good Night " + userName)
        document.getElementById("display").innerText = "Good Night " + userName
    }
}

function gradeUser(){
    let score = document.getElementById("score").value

    if(score > 75 && score <= 100){
        document.getElementById("show").innerText = "Excellent"
        alert("Excellent")
    }
    else if(score > 60 && score < 75){
        document.getElementById("show").innerText = "Good"
        alert("Good")
    }
    else if(score > 40 && score < 60){
        document.getElementById("show").innerText = "Pass"
        alert("Pass")
    }
    else if(score < 40 && score >= 0){
        document.getElementById("show").innerText = "Fail"
        alert("Fail")
    }
    else{
        document.getElementById("show").innerText = "Please check your input"
        alert("Please check your input")
    }
}

function testNumber(){
    let number = document.getElementById("number").value
    console.log(number)

    if(number%2 == 0 && number > 0){
        document.getElementById("disp").innerText = "This is a positive even number"
    }
    else if(number%2 == 0 && number < 0){
        document.getElementById("disp").innerText = "This is a negative even number"
    }
    else if(number%2 != 0 && number > 0){
        document.getElementById("disp").innerText = "This is a positive odd number"
    }
    else if(number%2 != 0 && number < 0){
        document.getElementById("disp").innerText = "This is a negative odd number"
    }
    else{
        document.getElementById("disp").innerText = "Please check your input"
    }
}