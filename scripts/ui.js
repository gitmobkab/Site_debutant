function setMenuDisplay(newDisplay = "block") {
    const menu = document.getElementById("menu_overlay");
    const oldDisplay = menu.style.display;
    if (oldDisplay === newDisplay) {
        return;
    }
    menu.style.display = newDisplay;
}

document.getElementById("passwd_btn").addEventListener("click", function() {
    // Générer un mot de passe aléatoire
});

document.getElementById("setting_btn").addEventListener("click", function() {
    setMenuDisplay("block");
});

document.getElementById("close_btn").addEventListener("click", function() {
    setMenuDisplay("none");
});

document.getElementById("menu_overlay").addEventListener("click", function(event) {
    const menu = document.getElementById("settings_menu");
    if (!menu.contains(event.target)) {
        setMenuDisplay("none");
        console.debug("Clicked outside the menu, closing it.");
    }
});
