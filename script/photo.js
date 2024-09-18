// const photo1 = document.getElementById('image1');
// const photo2 = document.getElementById('image2');
// const photo3 = document.getElementById('image3');
// const photo4 = document.getElementById('image4');
// const photo5 = document.getElementById('image5');

// //NOMBRE de photo, à modifier en fonction !!!
// const nbrPhoto = 5;


// //fonction mettre les photos dans un tableau
// let tabPhoto = [];

// for (i=1 ; i<=nbrPhoto ; i++) {
//     const photoI = document.querySelector(`#photo${i}`);
//     tabPhoto.push(photoI)
// }

// //fonction pour voir le nom des facteur de l'élements (taille, autre)
// const aze = document.getElementsByClassName('section-photo');
// console.log(aze);

// //fonction déterminer le type de photo (1, 2, ou 3)
// for (i=1 ; i<=nbrPhoto ; i++) {
//     //initialisation du type
//     let type = 0;

//     const photoI = document.querySelector(`#photo${i}`);

//     //vérification du type 1
//     if ((photoI.clientHeight + (photoI.clientWidth/10) ) < photoI.clientWidth) {
//         type = 1;
//     }

//     //vérification du type 2
//     if (photoI.clientHeight > (photoI.clientWidth + (photoI.clientHeight/10) )) {
//         type = 2;
//     }

//     //vérification du type 3
//     //condition de 10%
//     let c1 = 0;
//     let c2 = 0;

//     if (photoI.clientHeight-photoI.clientWidth < 0) {
//         c1 = -(photoI.clientHeight-photoI.clientWidth);
//     } else {
//         c1 = photoI.clientHeight-photoI.clientWidth;
//     }
//     if (photoI.clientHeight > photoI.clientWidth) {
//         c2 = photoI.clientHeight;
//     }   else {
//         c2 = photoI.clientWidth;
//     }
//     if (
//         photoI.clientHeight == photoI.clientWidth ||
//         c1 < (c2/10)
//     ) 
//         {
//         type = 3;
//     }
//     //Affichage taille/type photo
//     console.log(photoI.clientHeight, photoI.clientWidth, type);

//     let posX = 0;
//     let posY = 0
//     if (type = 1) {
        
//     }
// }