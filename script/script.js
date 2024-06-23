document.addEventListener("DOMContentLoaded", function() {
    fetch('./page/autre/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            loadCSS('./css/header.css');
        })
        .catch(error => console.error('Erreur lors du chargement du header:', error));

    fetch('./page/autre/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            loadCSS('./css/footer.css');
        })
        .catch(error => console.error('Erreur lors du chargement du footer:', error));
});

