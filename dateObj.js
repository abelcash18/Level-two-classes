function showTimer(){
    let name = document.getElementById("name").value
    let dob = document.getElementById("dob").value
    let date = new Date()

    let birthDay =  new Date(dob)

    let difference = birthDay - date

    if(dob == "" || name == ""){
        alert("Please check your input")
    }
    else if(difference < 0){
        document.getElementById("display").innerHTML = `Hi ${name}. not a valid date`
    }
    else{
        let getDays =  Math.floor (difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("display").innerHTML = `<h3> Hi ${name}, your birthday is in ${getDays} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s) from today </h3>`
    }

    console.log(name)
    console.log(dob)
    console.log({getDays, hours, minutes, seconds})
}