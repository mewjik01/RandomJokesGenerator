let url = "https://official-joke-api.appspot.com/random_joke"
let para = document.querySelector(".para")
let para2 = document.querySelector(".para2")
let btn = document.querySelector(".btn")
let setup = document.querySelector(".setup")
let punch = document.querySelector(".punch")
function getData(){
    fetch(url).then((data)=>{
        data.json().then((dataVal)=>{
            setup.classList.remove("hide")
            para.innerHTML= (dataVal.setup)
            punch.classList.remove("hide")
            para2.innerHTML= (dataVal.punchline)
        })
    })
}
btn.addEventListener("click",getData)




