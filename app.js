// Selecting
var menu = document.querySelector(".menu");
var close = document.querySelector(".close");
var nav = document.querySelector(".nav-bar");
var body = document.querySelector("body");
var header = document.querySelector(".header");


// Add event-listners

menu.addEventListener("click",function(){
    nav.style.display = "flex";
    console.log("working")
})

close.addEventListener("click",function(){
    nav.style.display = "none";
})

function activeScroll(){
    if(window.screenY > 100){
        header.classList.add("overlay");
    }
    else{
        header.classList.remove("overlay");
    }
}

activeScroll();