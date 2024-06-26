document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var allContents = document.querySelectorAll('.accordion-content');
            var allArrows = document.querySelectorAll('.accordion-header .arrow');

            allContents.forEach(function(item) {
                if (item !== content) {
                    item.style.maxHeight = '0';
                    item.classList.remove('open');
                }
            });

            allArrows.forEach(function(arrow) {
                if (arrow !== header.querySelector('.arrow')) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            });

            if (content.classList.contains('open')) {
                content.style.maxHeight = '0';
                content.classList.remove('open');
                header.querySelector('.arrow').style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                header.querySelector('.arrow').style.transform = 'rotate(180deg)';
            }
        });
    });
});