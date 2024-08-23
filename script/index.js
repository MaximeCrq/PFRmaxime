//--------------------CAROUSEL--------------------------
const bPrev = document.querySelector('#prev-button');
const bNext = document.querySelector('#next-button');


//------------------------------------------------
//WARNING, mettre a jour la variable nbrImg !!!!!!!
let nbrImg = 3;
//------------------------------------------------


let tab = [];
for (let i=1 ; i<=nbrImg ; i++){
    tab.push(document.querySelector(`#carousel-item-${i}`));
}

let limiteDeplacement=0;
let positionIni=0;//start positionnement des images

position();
bPrev.addEventListener('click', prev);
bNext.addEventListener('click', next);



function position() {
    for (let i=1 ; i<=nbrImg ; i++){
        document.querySelector(`#carousel-item-${i}`).style.left = `${positionIni}px`;
        positionIni=positionIni+600;
    }
    return positionIni = 0;
}


function next(){//fonction permettant de déplacer le carousel vers la gauche
    if(limiteDeplacement<nbrImg-1){
        let x = positionIni;
        positionIni=positionIni-600;
        for (let i=1 ; i<=nbrImg ; i++){
            document.querySelector(`#carousel-item-${i}`).style.left = `${positionIni}px`;
            positionIni=positionIni+600;
        }
        positionIni = x - 600;
        return limiteDeplacement++;
    }
}

function prev(){//fonction permettant de déplacer le carousel vers la droite
    if(0< limiteDeplacement){
        let x = positionIni;
        positionIni=positionIni+600;
        for (let i=1 ; i<=nbrImg ; i++){
            document.querySelector(`#carousel-item-${i}`).style.left = `${positionIni}px`;
            positionIni=positionIni+600;
        }
        positionIni = x + 600;
        return limiteDeplacement--;
    }
}

//-----INDICATORS-BUTTON-------

//---Creation du nombre de bouton en fonction du nombre d'image
const carouselI = document.querySelector('#carousel-indicators');

for (i=1 ; i<=nbrImg ; i++) {
    let createButtonIndicator = document.createElement('button');
    carouselI.append(createButtonIndicator);
}

const buttonI = document.querySelectorAll('button');

for (i=0 ; i<nbrImg ; i++) {
    buttonI[i].className = `indicator-button indicator-button-image${i+1}`;
}

//----fonction des boutons----

function button () {
    
}