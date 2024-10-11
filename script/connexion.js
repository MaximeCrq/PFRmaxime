//CONNEXION


document.addEventListener("DOMContentLoaded", function() {
    const submitButtonConnexion = document.getElementById('submitButtonConnexion');
    if (submitButtonConnexion) {
        submitButtonConnexion.disabled = true;
    }
});



const loginInputConnexion = document.querySelector('#inputEmailConnexion');
const passwordInputConnexion = document.querySelector('#inputPasswordConnexion');


// Fonction pour valider l'email
function validateEmailConnexion() {
    const email = loginInputConnexion.value;
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    let isValid = true;

    if (!regexEmail.test(email)) {
        isValid = false;
    }

    if (email.length <= 4) {
        isValid = false;
    }

    if (email.length > 30) {
        isValid = false;
    }

    if (email.toLowerCase().includes('script')) {
        alert("C'est pas gentil d'être méchant");
        location.reload();
        isValid = false;
    }

    return isValid;
}


// Fonction pour vérifier toutes les conditions et activer/désactiver le bouton
function validateFormConnexion() {
    const emailIsValid = validateEmailConnexion();
    const passwordIsValid = validatePasswordConnexion();

    submitButtonConnexion.disabled = !(emailIsValid && passwordIsValid);
}

function validatePasswordConnexion() {
    const password = passwordInputConnexion.value;
    let isValid = true;

    if (password.length <= 5) {
        isValid = false;
    }

    if (password.length > 15) {
        isValid = false;
    }

    if (!/^\S*$/.test(password)) {
        isValid = false;
    }

    if (password.toLowerCase().includes('script')) {
        alert("C'est pas gentil d'être méchant");
        location.reload();
        isValid = false;
    }

    return isValid;
}

// Ajouter les événements `keyup` pour chaque champ d'entrée
loginInputConnexion.addEventListener('keyup', validateFormConnexion);
passwordInputConnexion.addEventListener('keyup', validateFormConnexion);