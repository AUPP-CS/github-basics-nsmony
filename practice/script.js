let name = prompt("Input your name ")
let year = prompt("Input your year ")
let major = prompt("Input your major")

let now = new Date()
let month = now.getMonth()+1 < 10? `0${now.getMonth()+1}` : `${now.getMonth()+1}`
alert(`My name is ${name}. I am a ${year}. I major in ${major}. 
    Today is ${now.getDate()}-${month}-${now.getFullYear()}`)