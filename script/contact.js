const submitButtonContact = document.getElementById('submitButtonContact');

submitButtonContact.disabled = true;

const loginInputContact = document.querySelector('#inputEmailContact');
const objetInputContact = document.querySelector('#inputObjetContact');
const descriptionInputContact = document.querySelector('#inputDescriptionContact')



// Fonction pour valider l'email
function validateEmail() {
    const login = loginInputContact.value;
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    //Vérifier les caractères spéciaux autorisés
    if (!regexEmail.test(login)) {
        loginInputContact.style.borderColor = 'red';
        return false;
    }

    //Interdire l'utilisation du mot "script"
    if (login.toLowerCase().includes('script')) {
        alert("C'est pas gentil d'être méchant");
        location.reload();
        return false;
    }

    //Si toutes les conditions sont remplies
    return true;
}


//Fonction pour valider Objet
function validateObjet() {
    const objet = objetInputContact.value;
    const maxLength = 30;
    const allowedSpecialChars = /^[a-zA-Z+-/_-]+$/;

    //Vérifier la longueur de l'objet
    if (objet.length > maxLength) {
        objetInputContact.style.borderColor = 'red';
        return false;
    }

    //Vérifier les caractères spéciaux autorisés
    if (!allowedSpecialChars.test(objet)) {
        objetInputContact.style.borderColor = 'red';
        return false;
    }

    //Interdire l'utilisation du mot "script"
    if (objet.toLowerCase().includes('script')) {
        alert("C'est pas gentil d'être méchant");
        location.reload();
        return false;
    }

    //Si toutes les conditions sont remplies
    return true;
}


//Fonction pour valider Description
function validateDescription() {
    const description = descriptionInputContact.value;
    const maxLength = 1000;
    const allowedSpecialChars = /^[a-zA-Z0-9.,;:!?'"çèéùà^¨*()+-/_-]+$/;

    //Vérifier la longueur de l'description
    if (description.length > maxLength) {
        descriptionInputContact.style.borderColor = 'red';
        return false;
    }

    //Vérifier les caractères spéciaux autorisés
    if (!allowedSpecialChars.test(description)) {
        descriptionInputContact.style.borderColor = 'red';
        return false;
    }

    //Interdire l'utilisation du mot "script"
    if (description.toLowerCase().includes('script')) {
        alert("C'est pas gentil d'être méchant");
        location.reload();
        return false;
    }

    //Si toutes les conditions sont remplies
    return true;
}


// Fonction pour vérifier toutes les conditions et activer/désactiver le bouton
function validateFormContact() {
    const loginIsValid = validateLogin();
    const emailIsValid = validateEmail();
    const descriptionIsValid = validateDescription();

    submitButtonContact.disabled = !(loginIsValid && emailIsValid && descriptionIsValid);
}

pseudo