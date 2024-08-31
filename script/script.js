//------------Ajout du header et du footer sur les pages------------
document.addEventListener("DOMContentLoaded", function() {
    fetch('./autre/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            loadCSS('../css/header.css');
        })
        .catch(error => console.error('Erreur lors du chargement du header:', error));

    fetch('./autre/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            loadCSS('../css/footer.css');
        })
        .catch(error => console.error('Erreur lors du chargement du footer:', error));
});
//chargement des fichiers CSS
function loadCSS(href) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}



//------------------------ACCORDION(conseil)-----------------------
const accordion = document.getElementsByClassName('accordion-item');
const panel = document.getElementsByClassName('panel');

//Initialiser en display none tout les paragraphes
for (let i=0 ; i<panel.length ; i++) {
  panel[i].style.display = 'none';
}

//
for (let i=0 ; i<panel.length ; i++) {
  accordion[i].addEventListener('click', function(){
    if (panel[i].style.display == 'none') {
      panel[i].style.display = 'block';
    } else {
      panel[i].style.display = 'none';
    }
  })
}



//-----------------------CARTE-------------------------
document.addEventListener("DOMContentLoaded", function() {
  //Initialisation de la carte à Paris
  //définition de la position centrale et du niveau de zoom
  const map = L.map('map').setView([48.8566, 2.3522], 13);

  // Ajout de la couche de tuiles OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  //ajout marqueur
  const markerParis = L.marker([48.8566, 2.3522]).addTo(map);

  //ajout popup au marqueur
  markerParis.bindPopup("<b>NOM</b><br>sous-titre").openPopup();
});


//apprendre les fonction de leaflet.js pourpouvoir personnaliser la carte (chemin, filtre,etc ...)




//-----------------CONNEXION/INSCRIPTION------------------





//INSCRIPTION

// Sélection des éléments du DOM
const submitButtonInscription = document.getElementById('submitButtonInscription');

const pseudoInputInscription = document.querySelector('#inputPseudoInscription');
const loginInputInscription = document.querySelector('#inputEmailInscription');
const passwordInputInscription = document.querySelector('#inputPasswordInscription');
const passwordInputConfirmInscription = document.querySelector('#inputPasswordConfirmInscription');

const conditionMessages = document.querySelector('#listeConditionPassword').querySelectorAll('p');

// Désactiver le bouton de soumission au départ
submitButtonInscription.disabled = true;


// Fonction pour valider le pseudo
function validatePseudo() {
  const pseudo = pseudoInputInscription.value;
  const maxLength = 15;
  const allowedSpecialChars = /^[a-zA-Z0-9&!_-]+$/;
  
  // Vérifier la longueur du pseudo
  if (pseudo.length > maxLength) {
      pseudoInputInscription.style.borderColor = 'red';
      return false;
  }

  // Vérifier les caractères spéciaux autorisés
  if (!allowedSpecialChars.test(pseudo)) {
      pseudoInputInscription.style.borderColor = 'red';
      return false;
  }

  // Interdire l'utilisation du mot "script"
  if (pseudo.toLowerCase().includes('script')) {
      alert("C'est pas gentil d'être méchant");
      location.reload();
      return false;
  }

  // Si toutes les conditions sont remplies
  pseudoInputInscription.style.borderColor = 'green';
  return true;
}

// Fonction pour valider l'email
function validateEmail() {
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if (regexEmail.test(loginInputInscription.value)) {
        loginInputInscription.style.borderColor = 'green';
        return true;
    } else {
        loginInputInscription.style.borderColor = 'red';
        return false;
    }
}

// Fonction pour valider le mot de passe
function validatePassword() {
    const password = passwordInputInscription.value;
    let isValid = true;

    if (password.length >= 6) {
        conditionMessages[0].style.color = 'green';
    } else {
        conditionMessages[0].style.color = 'red';
        isValid = false;
    }

    if (password.length <= 15) {
        conditionMessages[1].style.color = 'green';
    } else {
        conditionMessages[1].style.color = 'red';
        isValid = false;
    }

    if (/\d/.test(password)) {
        conditionMessages[2].style.color = 'green';
    } else {
        conditionMessages[2].style.color = 'red';
        isValid = false;
    }

    if (/[$&@!-_]/.test(password)) {
        conditionMessages[3].style.color = 'green';
    } else {
        conditionMessages[3].style.color = 'red';
        isValid = false;
    }

    if (/[A-Z]/.test(password)) {
        conditionMessages[4].style.color = 'green';
    } else {
        conditionMessages[4].style.color = 'red';
        isValid = false;
    }

    if (/^\S*$/.test(password)) {
        conditionMessages[5].style.color = 'green';
    } else {
        conditionMessages[5].style.color = 'red';
        isValid = false;
    }

    if (!["password", "123456", "qwerty", "azerty"].some(word => password.toLowerCase().includes(word))) {
        conditionMessages[6].style.color = 'green';
    } else {
        conditionMessages[6].style.color = 'red';
        isValid = false;
    }

    if (!password.toLowerCase().includes('script')) {
        passwordInputInscription.style.borderColor = isValid ? 'green' : 'red';
    } else {
        alert("C'est pas gentil d'être méchant");
        location.reload();
        isValid = false;
    }

    return isValid;
}

// Fonction pour valider la confirmation du mot de passe
function validateConfirmPassword() {
    const password = passwordInputInscription.value;
    const confirmPassword = passwordInputConfirmInscription.value;

    if (password !== "" && confirmPassword === password && confirmPassword.length <= 15 && /^\S*$/.test(confirmPassword)) {
        passwordInputConfirmInscription.style.borderColor = 'green';
        return true;
    } else {
        passwordInputConfirmInscription.style.borderColor = 'red';
        return false;
    }
}

// Fonction pour vérifier toutes les conditions et activer/désactiver le bouton
function validateForm() {
    const pseudoIsValid = validatePseudo();
    const emailIsValid = validateEmail();
    const passwordIsValid = validatePassword();
    const confirmPasswordIsValid = passwordIsValid && validateConfirmPassword();


    submitButtonInscription.disabled = !(pseudoIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid);
}

// Ajouter les événements `keyup` pour chaque champ d'entrée
pseudoInputInscription.addEventListener('keyup', validateForm);
loginInputInscription.addEventListener('keyup', validateForm);
passwordInputInscription.addEventListener('keyup', validateForm);
passwordInputConfirmInscription.addEventListener('keyup', validateForm);

// Apparition/disparition des conditions en fonction du focus
passwordInputInscription.addEventListener('focus', function() {
    document.getElementById('userMessageInscription').style.opacity = 1;
});

passwordInputInscription.addEventListener('blur', function() {
    document.getElementById('userMessageInscription').style.opacity = 0;
});




