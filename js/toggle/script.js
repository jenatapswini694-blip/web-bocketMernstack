let newBtn = document.querySelector("#mode")
let currMode="light" //initial state

newBtn.addEventListener("click",()=>{
     if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black"
     } else {
        currMode="light"
        document.querySelector("body").style.backgroundcolor="white"
     }
     console.log(currMode)
})