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

const loginInput = document.querySelector('#inputEmail');
const passwordInput = document.querySelector('#inputPassword');
const userMessage = document.querySelector('#userMessage');

//vérification email
loginInput.addEventListener('keyup',()=>{ 
// Ajoute un écouteur d'événements pour détecter les frappes de touches sur le champ de saisie de l'email
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
// Définit une expression régulière pour valider le format de l'email
    if (regex.test(loginInput.value)) { 
// Vérifie si la valeur saisie correspond à l'expression régulière
        loginInput.style.backgroundColor = 'green'; 
// Change la couleur de fond en vert si l'email est valide
    }   else { // Si l'email est invalide
        loginInput.style.backgroundColor = 'red'; 
        // Change la couleur de fond en rouge
    }
})


const conditionPassword1 = document.querySelector('#listeCondition').querySelectorAll('p');
const arrayConditionPassword1 = Array.from(conditionPassword1);

passwordInput.addEventListener('keyup',()=>{
  const charDecimal = /\d/;
  const charSpecial = /[$&@!-]/;
  const charUpperCase = /[A-Z]/;
  const noSpaces = /^\S*$/;
  const forbiddenWords = ["password", "123456", "qwerty","azerty"];
  const maxLength = 15;
  //taille minimum du mdp
  if(passwordInput.value.length<6){
    arrayConditionPassword1[0].style.color = 'red';
  } else {
    arrayConditionPassword1[0].style.color = 'green';
  }
  //limiter le nombre de valeur
  if(passwordInput.value.length > maxLength){
    arrayConditionPassword1[1].style.color = 'red';
  } else {
    arrayConditionPassword1[1].style.color = 'green';
  }
  //mdp doit contenir 1 chiffre min
  if(!passwordInput.value.match(charDecimal)){
    arrayConditionPassword1[2].style.color = 'red';
  } else {
    arrayConditionPassword1[2].style.color = 'green';
  }
  //mdp doit contenir un caractere special min
  if(!passwordInput.value.match(charSpecial)){
    arrayConditionPassword1[3].style.color = 'red';
  } else {
    arrayConditionPassword1[3].style.color = 'green';
  }
  //mdp doit contenir au moins une majuscule
  if(!passwordInput.value.match(charUpperCase)){
    arrayConditionPassword1[4].style.color = 'red';
  } else {
    arrayConditionPassword1[4].style.color = 'green';
  }
  //mdp ne doit pas contenir d'espaces
  if(!passwordInput.value.match(noSpaces)){
    arrayConditionPassword1[5].style.color = 'red';
  } else {
    arrayConditionPassword1[5].style.color = 'green';
  }
  //mdp ne doit pas contenir des mots courants interdits
  if(forbiddenWords.some(word => passwordInput.value.toLowerCase().includes(word))){
    arrayConditionPassword1[6].style.color = 'red';
  } else {
    arrayConditionPassword1[6].style.color = 'green';
  }

  //ajout de sécurité :
  if(passwordInput.value.toLowerCase().includes('script')) {
    alert("C'est pas gentil d'être méchant");
    location.reload();
  }
});


//apparition/disparition des conditions en fonction du focus


passwordInput.addEventListener('focus', function() {
  userMessage.style.opacity = 1;
});

passwordInput.addEventListener('blur', function() {
  userMessage.style.opacity = 0;
});