let lightmode = localStorage.getItem("light-mode");
let navmenu = localStorage.getItem("nav-bar");
let focused = false;

if (lightmode == "true"){
    document.getElementById("ball").style.transitionDuration = "0s";
    enablelightmode();
} else {
    disablelightmode();
}

if (navmenu == "visible"){
    document.getElementById("menujs").style.transitionDuration = "0s";
    enablenavmenu();
} else {
    disablenavmenu();
}

function enablenavmenu(){
    document.querySelector(".menu").classList.add("show");
}

function disablenavmenu(){
    document.querySelector(".menu").classList.remove("show");
}

function enablelightmode(){
    document.body.classList.add("light-theme");
    document.getElementById("check").checked = true;
    localStorage.setItem("light-mode", "true");
    document.getElementById("fa-moon").style.color = "#e8eaec";
    document.getElementById("fa-moon").classList.remove("fa-sun");
    document.getElementById("fa-moon").classList.add("fa-moon");

    document.getElementById("fa-moonphone").style.color = "#e8eaec";
    document.getElementById("fa-moonphone").classList.remove("fa-sun");
    document.getElementById("fa-moonphone").classList.add("fa-moon");
}

function disablelightmode(){
    document.body.classList.remove("light-theme");
    document.getElementById("check").checked = false;
    localStorage.setItem("light-mode", "false");
    document.getElementById("fa-moon").style.color = "#1E1F22";
    document.getElementById("fa-moon").classList.remove("fa-moon");
    document.getElementById("fa-moon").classList.add("fa-sun");

    document.getElementById("fa-moonphone").style.color = "#1E1F22";
    document.getElementById("fa-moonphone").classList.remove("fa-moon");
    document.getElementById("fa-moonphone").classList.add("fa-sun");
}

document.getElementById("check").addEventListener("change", ()=>{
    document.getElementById("ball").style.transitionDuration = "0.3s";
    console.log(this.checked);
    if (localStorage.getItem("light-mode") == "false") {
        enablelightmode();
    } else {
        disablelightmode();
    }
})

document.getElementById("checkphone").addEventListener("change", ()=>{
    document.getElementById("ballphone").style.transitionDuration = "0.3s";
    console.log(this.checked);
    if (localStorage.getItem("light-mode") == "false") {
        enablelightmode();
    } else {
        disablelightmode();
    }
})

document.getElementById("joindiscordbutton").addEventListener("click", ()=>{
    window.open("https://discord.gg/cZdxhc2Q");
})

document.addEventListener("DOMContentLoaded", ()=>{
    if (document.querySelector(".titre").textContent == "Home"){
        document.querySelectorAll(".menu-link")[0].classList.add("currentpage");
    }
    if (document.querySelector(".titre").textContent == "Suggestions"){
        document.querySelectorAll(".menu-link")[3].classList.add("currentpage");
    }
})

document.getElementById("logo").addEventListener("mouseover", ()=>{
    document.getElementById("logo").classList.add("scaleuplogo");
    document.getElementById("logo").classList.remove("downscallogo");
})

document.getElementById("logo").addEventListener("mouseout", ()=>{
    document.getElementById("logo").classList.remove("scaleuplogo");
    document.getElementById("logo").classList.add("downscallogo");
})

document.querySelectorAll("#card-container").forEach((c,i)=>{
    c.addEventListener("mouseover", ()=>{
        document.querySelectorAll("#card-container")[i].classList.add("scaleupcardcontainer");
        document.querySelectorAll("#card-container")[i].classList.remove("downscalecardcontainer");
    })
    c.addEventListener("mouseout", ()=>{
        document.querySelectorAll("#card-container")[i].classList.remove("scaleupcardcontainer");
        document.querySelectorAll("#card-container")[i].classList.add("downscalecardcontainer");
    })
})

document.getElementById("joindiscordbutton").addEventListener("click", ()=>{
    window.open("https://discord.gg/cZdxhc2Q");
});

document.getElementById("dropdownmenu").addEventListener("click", ()=>{
    document.getElementById("menujs").style.transitionDuration = "0.5s";
    document.querySelector(".menu").classList.toggle("show");
    if (localStorage.getItem("nav-bar") == "visible"){
        localStorage.setItem("nav-bar", "nonvisible");
    } else {
        localStorage.setItem("nav-bar", "visible");
    }
})

document.getElementById("searchcontainer").addEventListener("click", ()=>{
    if (focused == true) {
        focused = false;
    } else {
        focused = true;
    }
    if (focused){
        document.getElementById("searchbarphone").focus();
    } else {
        document.getElementById("searchbarphone").blur();
        document.getElementById("searchbarphone").value = "";
    }
    document.querySelector(".searchbarphonecontainer").classList.toggle("searchbarphonecontainer-open");
})