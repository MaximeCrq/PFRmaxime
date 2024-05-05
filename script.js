// document.getElementById("accueil").addEventListener("click", function() {
//     // Redirection vers une nouvelle page HTML
//     window.location.href = "carte.html";
// });

var btnlogo = document.getElementById("accueil");
var btn1 = document.getElementById("accueil");
var btn2 = document.getElementById("carte");
var btn3 = document.getElementById("conseille");

btnlogo.addEventListener("click", function() {
    window.location.href = "index.html";
});

btn1.addEventListener("click", function() {
    window.location.href = "index.html";
});

btn2.addEventListener("click", function() {
    window.location.href = "carte.html";
});

btn3.addEventListener("click", function() {
    window.location.href = "conseille.html";
});