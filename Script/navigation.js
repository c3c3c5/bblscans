let lightmode = localStorage.getItem("light-mode");

if (lightmode === "true"){
    enablelightmode();
} else {
    disablelightmode();
}

function enablelightmode(){
    document.body.classList.add("light-theme");
    localStorage.setItem("light-mode", "true");
}

function disablelightmode(){
    document.body.classList.remove("light-theme");
    localStorage.setItem("light-mode", "false");
}

document.getElementById("joindiscordbutton").addEventListener("click", ()=>{
    window.open("https://discord.gg/cZdxhc2Q");
})

document.getElementById("night-light-mode").addEventListener("click", ()=>{
    if (localStorage.getItem("light-mode") === "true") {
        enablelightmode();
        document.getElementById("night-light-mode").style.backgroundColor = "white";
        document.getElementById("night-light-mode").style.borderColor = "black";
        document.getElementById("fa-moon").style.color = "black";
        document.getElementById("fa-moon").classList.remove("fa-sun");
        document.getElementById("fa-moon").classList.add("fa-moon");
        document.getElementById("imgbutton").src = "./img/discord-button-lighttheme.png"
    } else {
        disablelightmode();
        document.getElementById("night-light-mode").style.backgroundColor = "black";
        document.getElementById("night-light-mode").style.borderColor = "white";
        document.getElementById("fa-moon").style.color = "white";
        document.getElementById("fa-moon").classList.remove("fa-moon");
        document.getElementById("fa-moon").classList.add("fa-sun");
        document.getElementById("imgbutton").setAttribute("src", "/img/discord-button.png")
    }

})