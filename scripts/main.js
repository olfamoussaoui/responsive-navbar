

let backdrop = document.querySelector(".backdrop"),
    menu = document.querySelector('#menu'),
    nav = document.querySelector('#nav-links'),
    exit = document.querySelector('#exit')

// Adding sidebar
menu.addEventListener('click', function (e) {
    // toggle navbar
    nav.classList.toggle('hide-mobile');
    backdrop.style.display = 'block';
});
exit.addEventListener('click', function (e) {
    // toggle navbar
    nav.classList.add('hide-mobile');
    backdrop.style.display = 'none';
});


backdrop.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    backdrop.style.display = 'none';
});

