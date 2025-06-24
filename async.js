/**
 * Synchronous Prograamming
 * 
 * 
 */

// console.log("Start")
// setTimeout(()=>{
//     console.log("Wait for 3 sec")
// }, 1000)
// console.log("End")

const runEvent = () =>{
    setTimeout(()=>{
        console.log("Start")
        setTimeout(()=>{
            console.log("Keep running")
            setTimeout(()=>{
                console.log("End")
            }, 1000)
        }, 1000)
    }, 1000)
}

runEvent()

const endpoint = "https://jsonplaceholder.typicode.com/users"

async function fetchUser(){
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)

    // for(let index in data){
    //     console.log(data[index])
    //     let user = data[index]
    //     display.innerHTML += 
    //     `
    //         <h1>${user.name}</h1>
    //         <p>${user.username}</p>
    //         <p>${user.email}</p>
    //     `
    // }
//     data.map((user)=>{
//         display.innerHTML += 
//         `
//             <h1>${user.name}</h1>
//             <p>${user.username}</p>
//             <p>${user.email}</p>
//         `
//     })
}

// fetchUser()

//Weather App



async function fetchWeather(){
    let city = document.getElementById("city").value

    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00a583039c2b98acba10e13bc56325be`
    const response = await fetch(weatherApi)
    const data = await response.json()

    console.log(data)
    console.log(data.name)
    console.log(data.main.temp)
    console.log(data.weather[0].description)
    display.innerHTML = 
    `
        <div class="mx-auto rounded p-3 border-dark text-center">
        <h2>Weather Information</h2>
        <h1 class="text-primary"> City: ${data.name}</h1>
        <p class="fs-4 text-info">Weather: ${data.weather[0].description}</p>
        <p class="fs-4 text-warning">Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
    `
}


// const fetchData = async ()=>{
//     const response = await fetch(weatherApi)
//     const data = await response.json()

//     console.log(data)

    
// }

// fetchData()