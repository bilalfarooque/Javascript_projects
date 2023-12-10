var settingsmenu = document.querySelector(".settings-menu")
var darkBtn = document.getElementById("dark-btn")


const displaySettings = ()=>{
    settingsmenu.classList.toggle("settings-menu-display")
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}