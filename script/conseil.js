//------------------------ACCORDION(conseil)-----------------------
const accordion = document.getElementsByClassName('accordion-item');
const panel = document.getElementsByClassName('panel');
const span = document.getElementsByClassName('indiceEtat');

//Initialiser en display none tout les paragraphes
for (let i=0 ; i<panel.length ; i++) {
  panel[i].style.display = 'none';
}
//Initialisation de l'indice de l'etat du panel
for (let j = 0 ; j<span.length ; j++) {
    span[j].innerText = '+';
}
//
for (let i=0 ; i<panel.length ; i++) {
  accordion[i].addEventListener('click', function(){
    if (panel[i].style.display == 'none') {
      panel[i].style.display = 'block';
      span[i].innerText = '-';
    } else {
      panel[i].style.display = 'none';
      span[i].innerText = '+';
    }
  })
}