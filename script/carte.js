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
    markerParis.bindPopup("<b>Promenade1</b><br>Grand parcs").openPopup();
  });
  
  
  //apprendre les fonction de leaflet.js pourpouvoir personnaliser la carte (chemin, filtre,etc ...)