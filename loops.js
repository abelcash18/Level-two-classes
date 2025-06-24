// let number = 5

// initial value or starting point
// breakpoint or ending point
// instruction

// for(let i = 0; i <= 5; i++){
//     console.log("Hello World", i);
//     console.log("Increase number for me", number++)
// }

// function showLoop(){
//     let start = document.getElementById("start").value
//     let end = document.getElementById("end").value
//     console.log(start, end)

//     for(let i = Number(start); i <= Number(end); i++){
//         console.log(i)
//         document.getElementById("display").innerHTML += 
//         `<table>
//         <tbody>
//         <tr>
//         <td>${i}</td>
//         </tr>
//         </tbody>
//         </table>` ;
//     }
// }

// function nestedLoop(){
//     for(let i = 1; i <= 5; i++){
//         console.log("This is " +i)
//         for(let j = 1; j <=12; j++){
//             console.log("This is j", i * j);

//             document.getElementById("display").innerHTML += 
//             `<table>
//             <tr>
//             <td>${i * j}</td>
//             </tr>
//             </table>`
//         }
//     }
// }


let arrayOfCars = ["Benz", "Honda", "Tesla", "BMW", "Volkswagen", "Volvo", "Porsche", "Toyota", "Bugattti", "Korope"]

console.log(arrayOfCars)

function displayArray(){
    for(let i=0; i < arrayOfCars.length; i++){
        console.log(arrayOfCars[i])
        document.getElementById("display").innerHTML +=  `<li>My Favourite Car is ${arrayOfCars[i]} </li>`
    }
}

function nestedLoop(){
    let show = ""
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let row = document.getElementById("row").value
    for(let i = start; i <= end; i++){
        show += 
        `<td><table><tr><th>${i} times table </th></tr></table><table>`
        for(let j = 1; j <= row; j++){
            console.log(`${i} x ${j} = ${i*j} `)    
            show +=
            `<tr><td>${i} x ${j} = ${i*j}</td></tr>`
        }
        show += `</table></td>`
    }
    document.getElementById("display-table").innerHTML = show
}

// whileLoop()

function whileLoop(){
    let index = 0
    while(index < 5){
        console.log(index)
        index++
    }
}

function doWhileLoop(){
    let index = 0
    do{
        console.log(index)
        index++
    }while(index < 10)
}

// break

function breakLoop(){
    for(let i = 0; i <= 10; i++){
        console.log(i)
        if(i == 5){
            break;
        }
    } 
}

function continueLoop(){
    for(let i = 0; i <= 10; i++){
        console.log(i)
        if(i == 5){
            console.log("Continue")
            continue;
        }
    } 
}