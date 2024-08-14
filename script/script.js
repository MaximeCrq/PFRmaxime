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