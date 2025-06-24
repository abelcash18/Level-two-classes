/**
 * Faceook Register Page
 */

// let arrayOfUsers = [
//     {
//         firstName : "Khalid", 
//         lastName : "Akiode", 
//         dob : "13/05/1999", 
//         gender : "Male", 
//         phoneNumber : "08002102124", 
//         password : "Akiode@123",
//         date : Date.now()
//     }
// ]

// console.log(arrayOfUsers)
let arrayOfUsers = []

function registerUser(){
    let firstName = 
    document.getElementById("firstname").value
    let lastName = document.getElementById("lastname").value
    let dob = document.getElementById("dob").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let gender = document.getElementById("gender").value

    let userObject = {firstName, lastName, dob, gender, email, password, date: new Date().toLocaleDateString()}

    arrayOfUsers.push(userObject)
    
    let strignifyUser = JSON.stringify(arrayOfUsers)

    localStorage.setItem("fbUser", strignifyUser)
}

function displayUser(parseUser){
    let show = "";
    for(let index = 0; index < arrayOfUsers.length; index++){
        console.log(arrayOfUsers[index])
        let user = arrayOfUsers[index]

        show += 
        `
        <tr>
        <td>${index + 1}</td>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.dob}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
        <td>${user.date}</td>
        <td><button onclick="event.stopPropagation(); showUserModal(${index})" class="btn btn-primary btn-sm">View</button></td>
        <td><button onclick="editUser(${index})" class="btn btn-warning btn-sm">Edit</button></td>
        <td><button onclick="deleteUser(${index})" class="btn btn-danger btn-sm">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("display").innerHTML = show
}

function showUserModal(index){
    const user = arrayOfUsers[index];

    const detailHTML = `
    <p><strong>Full name:</strong> ${user.firstName} ${user.lastName}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Date Of Birth:</strong> ${user.dob}</p>
    <p><strong>Gender:</strong> ${user.gender}</p>
    <p><strong>Registration Date:</strong> ${user.date}</p>
    `
    document.getElementById("modalBody").innerHTML = detailHTML;

    const myModal = new bootstrap.Modal(document.getElementById('userModal'));
    myModal.show();
}

function deleteUser(index){
    confirmDelete = confirm(`Are you sure you want to delete ${arrayOfUsers[index].firstName}`)

    if(confirmDelete){
        arrayOfUsers.splice(index, 1)
        displayUser()
        console.log(arrayOfUsers)
    }
}

updateIndex = null;

function editUser(index){

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";

    document.getElementById("firstname").value = arrayOfUsers[index].firstName
    document.getElementById("lastname").value = arrayOfUsers[index].lastName
    document.getElementById("email").value = arrayOfUsers[index].email
    document.getElementById("dob").value = arrayOfUsers[index].dob
    document.getElementById("password").value = arrayOfUsers[index].password
    document.getElementById("gender").value = arrayOfUsers[index].gender

    updateIndex = index
}

function updateUser(){
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";

    arrayOfUsers[updateIndex].firstName = document.getElementById("firstname").value
    arrayOfUsers[updateIndex].lastName = document.getElementById("lastname").value
    arrayOfUsers[updateIndex].email = document.getElementById("email").value
    arrayOfUsers[updateIndex].dob = document.getElementById("dob").value
    arrayOfUsers[updateIndex].password = document.getElementById("password").value
    arrayOfUsers[updateIndex].gender = document.getElementById("gender").value

    console.log(arrayOfUsers)

    displayUser()
}

function getAllUsers(){
    let getUser = localStorage.getItem("fbUser")
    let parseUser = JSON.parse(getUser)

    displayUser(parseUser)
}