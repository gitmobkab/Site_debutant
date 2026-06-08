const minuscules = "abcdefghijklmnopqrstuvwxyz"
const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const chiffres = "0123456789"
const symboles = "!@#$%^&*()_+-=[]{}"
const emojis = "\uD83D\uDE00\uD83D\uDE02\uD83D\uDD25\uD83D\uDC80\uD83C\uDF89"

function make_password() {
    let pool = ""

    if (document.getElementById("minuscules").checked) pool += minuscules
    if (document.getElementById("majuscules").checked) pool += majuscules
    if (document.getElementById("chiffres").checked) pool += chiffres
    if (document.getElementById("symboles").checked) pool += symboles
    if (document.getElementById("emojis").checked) pool += emojis

    if (pool === "") {
        alert("Veuillez sélectionner au moins un type de caractère")
        return
    }

    let nombre = parseInt(document.getElementById("pass_length").value)
    if (isNaN(nombre)) {
        alert("Veuillez entrer un nombre de caractères valide")
        return
    }

    let result = ""
    for (let i = 0; i < nombre; i++) {
        result += pool[Math.floor(Math.random() * pool.length)]
    }

    document.getElementById("passwd").value = result
}

function display_option() {
    let overlay = document.getElementById("menu_overlay")
    if (overlay.style.display === "none") {
        overlay.style.display = "flex"
    } else {
        overlay.style.display = "none"
    }
}