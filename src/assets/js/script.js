let mobileBtn = document.querySelector('.mobile-btn');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');
let overlay = document.querySelector('.overlay');

mobileBtn.addEventListener('click', function() {
    menu.className += ' open';
    overlay.className += ' open';
});

closeBtn.addEventListener('click', function() {
    menu.className = 'menu';
    overlay.className = 'overlay';
});

window.addEventListener('click', function(event) {
    if (event.target === overlay) {
        menu.className = 'menu';
        overlay.className = 'overlay';
    }
})

