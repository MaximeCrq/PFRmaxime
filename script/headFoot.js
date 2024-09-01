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