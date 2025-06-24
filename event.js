// function clickMe() {
//   console.log("Helooo");
// }

// function mouseEnterEvent() {
//   console.log("Mouse don enter");
//     document.getElementById("container").style.backgroundColor = "yellow";
// }

// function mouseLeaveEvent() {
//   console.log("Mouse don comot");
//     document.getElementById("container").style.backgroundColor = "red";
// }

// document.getElementById("container").addEventListener("mousedown", (event)=>{
//     console.log(event)
//     console.log("I don click mouse down");
// })

// document.getElementById("container").addEventListener("mouseup", (event)=>{
//     console.log(event)
//     console.log("I don remove my hand");
// })

// let userInput = document.getElementById("input").value;

// document.getElementById("input").addEventListener("input", (e) => {
//     console.log(e);
//     if(event.key == "a"){
//       container.style.background = "red";
//     }else{
//       container.style.background = "blue";
//     }
//   });
// // const receiveInput =() => {
    
// // }
// document.getElementById("input").addEventListener("keypress", (event) => {
//     console.log(event.key);
// });

// firstname.addEventListener("focus", () => {
//     console.log("Input field is focused");
//     firstname.style.border = "1px solid blue";
// });

let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", () => {
        console.log("Input field lost focus");
        if (inputs[i].value === "") {
            inputs[i].style.border = "2px solid red";
        }
        else {
            inputs[i].style.border = "2px solid green";
        }
    });
}