const photo1 = document.getElementById('image1');
const aze = document.getElementsByClassName('photo');
console.log(aze);

if ((photo1.clientHeight + (photo1.clientWidth/10) ) < photo1.clientWidth) {
    console.log('type A')
}

if (photo1.clientHeight > (photo1.clientwidth + (photo1.clientHeight/10) )) {
    console.log('type B')
}

if (
    photo1.clientHeight == photo1.clientWidth ||
    photo1.clientWidth - photo1.clientHeight < (photo1.clientWidth/10) ||
    -(photo1.clientWidth - photo1.clientHeight) < (photo1.clientHeight/10)
) {
    console.log('type C')
}

console.log(photo1.clientHeight)
console.log(photo1.clientWidth)