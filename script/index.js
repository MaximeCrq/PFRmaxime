//CAROUSELLE (en cours d'ecriture)
// const createImg = document.createElement('img');
// const createImg2 = document.createElement('img');

// document.body.append(createImg, createImg2);

// createImg.src = './image-jeux.png';
// createImg.style.width = '100px';
// createImg.style.position = 'absolute';
// createImg.style.top = '100px';
// createImg.style.left = '100px';
// createImg.style.display = 'none';

// createImg2.src = './image-sport.png';
// createImg2.style.width = '100px';
// createImg2.style.position = 'absolute';
// createImg2.style.top = '100px';
// createImg2.style.left = '100px';


// console.log(createImg);
// console.log(createImg2);

// const createB = document.createElement('button');
// document.body.append(createB);
// createB.innerText = 'button';

// let x = 0;
// createB.addEventListener('click', function(){
//     let a = 100;
//     let b = 300; 
//     if (x == 0) {
//         const setOut1 = setInterval(function(){
//             if (a>-100) {
//                 a = a -10;
//                 b = b -10;
//                 createImg2.style.left = `${a}px`;
//                 createImg.style.display = 'block';
//                 createImg.style.left = `${b}px`;
//             } else {
//                 x = 1; 
//                 clearInterval(setOut1);
//             }
//         },20)
//     } else {
//         const setOut2 = setInterval(function(){
//             if (a>-100) {
//                 a = a -10;
//                 b = b -10;
//                 createImg.style.left = `${a}px`;
//                 createImg2.style.display = 'block';
//                 createImg2.style.left = `${b}px`;
//             } else {
//                 x = 0;
//                 clearInterval(setOut2);
//             }
//         },20)
//     } 
// })


// créer une fonction qui s'adapte toute seul, dans un certain dossier "carrousel-image", je mets x nombre d'image, la fonction prend les x images et créer un carousel avec (+ adapte le nombre d'indicateur)