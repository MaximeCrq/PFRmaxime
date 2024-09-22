const containerP = document.getElementById('section-photo');
const tabP = containerP.querySelectorAll('img');
const tabPArray = Array.from(tabP);



tabPArray.forEach(img => {
    img.addEventListener('mouseover', () => {
        //autre img
        const otherImages = tabPArray.filter(image => image !== img);
        // Definition filter() :
        //filter() est une méthode des tableaux en JavaScript.
        // Elle prend une fonction de rappel (callback function)
        // comme argument et crée un nouveau tableau avec tous
        // les éléments qui passent un test

        otherImages.forEach(otherImg => {
            otherImg.style.opacity = '0.5'; 
        });
    });

    img.addEventListener('mouseout', () => {
        //restauration parametre autre img
        tabPArray.forEach(otherImg => {
            otherImg.style.opacity = '1';
        });
    });
});