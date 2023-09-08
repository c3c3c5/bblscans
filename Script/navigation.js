let lightmode = false;

document.getElementById("joindiscordbutton").addEventListener("click", ()=>{
    window.open("https://discord.gg/cZdxhc2Q");
})

document.getElementById("night-light-mode").addEventListener("click", ()=>{
    if (lightmode) {
        lightmode = false;
    } else {
        lightmode = true;
    }
    document.body.classList.toggle("light-theme");
    if (lightmode) {
        document.getElementById("night-light-mode").style.backgroundColor = "white";
        document.getElementById("night-light-mode").style.borderColor = "black";
        document.getElementById("fa-moon").style.color = "black";
        document.getElementById("fa-moon").classList.remove("fa-sun");
        document.getElementById("fa-moon").classList.add("fa-moon");
        document.getElementById("imgbutton").src = "./img/discord-button-lighttheme.png"
    } else {
        document.getElementById("night-light-mode").style.backgroundColor = "black";
        document.getElementById("night-light-mode").style.borderColor = "white";
        document.getElementById("fa-moon").style.color = "white";
        document.getElementById("fa-moon").classList.remove("fa-moon");
        document.getElementById("fa-moon").classList.add("fa-sun");
        document.getElementById("imgbutton").setAttribute("src", "/img/discord-button.png")
    }

})