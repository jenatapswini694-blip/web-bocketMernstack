// let URL =  "https://jsonplaceholder.typicode.com/users"


function getUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resoponse => Response.json()) // correct
    .then(data =>{
        let list = document.getElementById("userList");

        list.innerHTML = "";

        data.forEach(user => { // user- another variable
            let li= document.createElement("li");
            li.textContent= user.email;
            list.appendChild(li);
        });
    })

    .catch(err => {
        console.log("Error:",err)
    });
}

getUser();

