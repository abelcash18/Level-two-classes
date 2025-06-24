const fetchUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users").then(async(response) => {
if(response.ok) {
            let data = await response.json();
            console.log(data);
        }
    }).catch((error) => {
        console.error("Error fetching data:", error);
    })
}
