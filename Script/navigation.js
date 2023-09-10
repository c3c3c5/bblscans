let lightmode = localStorage.getItem("light-mode");

if (lightmode == "true"){
    enablelightmode();
} else {
    disablelightmode();
}

function enablelightmode(){
    document.body.classList.add("light-theme");
    document.getElementById("check").checked = true;
    localStorage.setItem("light-mode", "true");
    document.getElementById("fa-moon").style.color = "#e8eaec";
    document.getElementById("fa-moon").classList.remove("fa-sun");
    document.getElementById("fa-moon").classList.add("fa-moon");
    document.getElementById("imgbutton").src = "./img/discord-button-lighttheme.png"
}

function disablelightmode(){
    document.body.classList.remove("light-theme");
    document.getElementById("check").checked = false;
    localStorage.setItem("light-mode", "false");
    document.getElementById("fa-moon").style.color = "#1E1F22";
    document.getElementById("fa-moon").classList.remove("fa-moon");
    document.getElementById("fa-moon").classList.add("fa-sun");
    document.getElementById("imgbutton").setAttribute("src", "/img/discord-button.png")
}

document.getElementById("check").addEventListener("change", ()=>{
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

document.getElementById("search").addEventListener("focus", ()=>{
    document.querySelector(".searchbar-container").classList.add("focusinput");
    console.log("input focused");
})

document.getElementById("search").addEventListener("focusout", ()=>{
    document.querySelector(".searchbar-container").classList.remove("focusinput");
    console.log("notfocused");
})

document.getElementById("discord-logo").addEventListener("mouseover", ()=>{
    document.getElementById("discord-logo").classList.add("discordlogscaleup");
    document.getElementById("discord-logo").classList.remove("discordlogoscaledown");
    document.getElementById("discordanimation").classList.add("discordanimationactive");
})

document.getElementById("discord-logo").addEventListener("mouseout", ()=>{
    document.getElementById("discord-logo").classList.remove("discordlogscaleup");
    document.getElementById("discord-logo").classList.add("discordlogoscaledown");
});

document.getElementById("joindiscordbutton").addEventListener("click", ()=>{
    window.open("https://discord.gg/cZdxhc2Q");
});

document.getElementById("dropdownmenu").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.toggle("show");
})