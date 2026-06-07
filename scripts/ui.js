function setMenuDisplay(newDisplay = "block") {
    const menu = document.getElementById("menu_overlay");
    const oldDisplay = menu.style.display;
    if (oldDisplay === newDisplay) {
        return;
    }
    menu.style.display = newDisplay;
}

const LETTRES = "abcdefghijklmnopqrstuvwxyz"

function make_password(length = 12) {
    let result = ""
    for (let i = 0; i < length; i++) {
        result += LETTRES[Math.floor(Math.random() * LETTRES.length)]

    }
    return result
} 

document.getElementById("passwd_btn").addEventListener("click", function() {
    const PASSWORD_LENGTH = parseInt(document.getElementById("pass_length").value);
    const newPassword = make_password(PASSWORD_LENGTH);
    document.getElementById("passwd").value = newPassword;
});

document.getElementById("settings_btn").addEventListener("click", function() {
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
