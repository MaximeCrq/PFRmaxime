const allContainer = document.getElementsByClassName('container');
const allButton = document.getElementsByClassName('button');

const arrayAllContainer = Array.from(allContainer);
const arrayAllButton = Array.from(allButton);

function classDisplayNone(i) {
    arrayAllContainer[i].style.display = 'none';
}

function classDisplayBlock(i) {
    arrayAllContainer[i].style.display = 'block';
}

arrayAllButton.forEach((button, index) => {
    button.addEventListener('click', function() {

        arrayAllContainer.forEach((container, i) => {
            classDisplayNone(i);
        });

        classDisplayBlock(index);
    });
});
