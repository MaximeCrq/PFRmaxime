
var btnLogo = document.getElementById("logo-accueil");
var btnAccueil = document.getElementById("btn-accueil");
var btnCarte = document.getElementById("btn-carte");
var btnConseille = document.getElementById("btn-conseille");
var btnPhoto = document.getElementById("btn-photo");
var btnFAQ = document.getElementById("btn-faq");
var btnInscription = document.getElementById("btn-inscription");
var btnConnexion = document.getElementById("btn-connexion");

btnLogo.addEventListener("click", function() {
    window.location.href = "../index.html";
});

btnAccueil.addEventListener("click", function() {
    window.location.href = "../index.html";
});

btnCarte.addEventListener("click", function() {
    window.location.href = "./page/carte.html";
});

btnConseille.addEventListener("click", function() {
    window.location.href = "./page/conseille.html";
});

btnPhoto.addEventListener("click", function() {
    window.location.href = "./page/photo.html";
});

btnFAQ.addEventListener("click", function() {
    window.location.href = "./page/FAQ.html";
});

btnInscription.addEventListener("click", function() {
    window.location.href = "./page/inscription.html";
});

btnConnexion.addEventListener("click", function() {
    window.location.href = "./page/connexion.html";
});