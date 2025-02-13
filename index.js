

function aos(){
    
    AOS.init({duration:1000,});
}

aos()

let body=document.querySelector("body")
let nav =document.querySelector("nav")
let h =document.querySelector("#bigname")
// let span =document.querySelector("span")

let darkmode=localStorage.getItem("DarkMode")

if(darkmode == "enable"){
    body.style.background="#0b0b0b"
    nav.style.background="black"
    // span.style.background="black"
    body.style.color="white"
    h.style.color="white"
}

function Darkmode(e){

// alert("dark")
let el=event.target

el.classList.toggle("bi-moon")

if(body.style.background === "black"){
    // #f2f2f2
    body.style.background="#f2f2f2"
    body.style.color="black"
    nav.style.background="white"
    // span.style.background="black"
     h.style.color="black"
     localStorage.setItem("DarkMode" , "disable" )
     
}else{

    body.style.background="black"
    nav.style.background="#262729"
    // span.style.background="black"
    body.style.color="white"
    h.style.color="white"
    localStorage.setItem("DarkMode" , "enable" )
    

}


}
