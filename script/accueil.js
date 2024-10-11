//--------------------CAROUSEL--------------------------
const bPrev = document.querySelector('#prev-button');
const bNext = document.querySelector('#next-button');


//------------------------------------------------
//WARNING, mettre a jour la variable nbrImg 
//et le HTML (rajouter/enlever) article (carousel-item-?)
let nbrImg = 5;
//------------------------------------------------
//Valeur du décalage entre les images (donc de leur width)
const gapImg = 600;


let tab = [];
for (let i=1 ; i<=nbrImg ; i++){
    tab.push(document.querySelector(`#carousel-item-${i}`));
}

let limiteDeplacement=0;
let positionIni=0;//start positionnement des images
let positionImages = 0;//valeur du positionnement actuelle des images

position();
bPrev.addEventListener('click', prev);
bNext.addEventListener('click', next);



function position() {
    for (let i=1 ; i<=nbrImg ; i++){
        document.querySelector(`#carousel-item-${i}`).style.left = `${positionIni}px`;
        positionIni=positionIni+gapImg;
    }
    return positionIni = 0;
}


function next(){//fonction permettant de déplacer le carousel vers la gauche
    if(limiteDeplacement<nbrImg-1){
        let x = positionImages;
        positionImages=positionImages-gapImg;
        for (let i=1 ; i<=nbrImg ; i++){
            document.querySelector(`#carousel-item-${i}`).style.left = `${positionImages}px`;
            positionImages=positionImages+gapImg;
        }
        positionImages = x - gapImg;

        //modif couleur bouton indicators
        for (let j=1 ; j<=nbrImg ; j++){
            document.querySelector(`.indicator-button-image${j}`).style.backgroundColor = 'black';
        }
        document.querySelector(`.indicator-button-image${1+(limiteDeplacement+1)}`).style.backgroundColor = 'white';

        return limiteDeplacement++;
    }
}

function prev(){//fonction permettant de déplacer le carousel vers la droite
    if(0< limiteDeplacement){
        let x = positionImages;
        positionImages=positionImages+gapImg;
        for (let i=1 ; i<=nbrImg ; i++){
            document.querySelector(`#carousel-item-${i}`).style.left = `${positionImages}px`;
            positionImages=positionImages+gapImg;
        }
        positionImages = x + gapImg;

        //modif couleur bouton indicators
        for (let j=1 ; j<=nbrImg ; j++){
            document.querySelector(`.indicator-button-image${j}`).style.backgroundColor = 'black';
        }
        document.querySelector(`.indicator-button-image${(limiteDeplacement)}`).style.backgroundColor = 'white';
        
        return limiteDeplacement--;
    }
}

//-----INDICATORS-BUTTON-------

//---Creation du nombre de bouton en fonction du nombre d'image---
const carouselI = document.querySelector('#carousel-indicators');

for (i=1 ; i<=nbrImg ; i++) {
    let createButtonIndicator = document.createElement('button');
    carouselI.append(createButtonIndicator);
}

const buttonI = document.querySelectorAll('button');

for (i=0 ; i<nbrImg ; i++) {
    buttonI[i].className = `indicator-button indicator-button-image${i+1}`;
}

//initialisation de la couleur du bouton indicator
document.querySelector(`.indicator-button-image${1}`).style.backgroundColor = 'white';

//----fonction des boutons indicators----

//fonction 1 -- modif position image
for (let i=1 ; i<=nbrImg ; i++){
    document.querySelector(`.indicator-button-image${i}`).addEventListener('click', function() {
        let pos = (-gapImg)*(i-1);
        for (let i=1 ; i<=nbrImg ; i++){
            document.querySelector(`#carousel-item-${i}`).style.left = `${pos}px`;
            pos = pos+gapImg;
        }
        positionImages = (-gapImg)*(i-1);
        limiteDeplacement= i-1;
    })
}

//fonction 2 -- modif couleur bouton
for (let i=1 ; i<=nbrImg ; i++){
    document.querySelector(`.indicator-button-image${i}`).addEventListener('click', function() {
        for (let j=1 ; j<=nbrImg ; j++){
            document.querySelector(`.indicator-button-image${j}`).style.backgroundColor = 'black';
        }
        document.querySelector(`.indicator-button-image${i}`).style.backgroundColor = 'white';
    })
}