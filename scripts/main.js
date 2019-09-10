

let backdrop = document.querySelector('.backdrop'),
    menu = document.querySelector('#menu'),
    nav = document.querySelector('#nav-links'),
    exit = document.querySelector('#exit'),
    profileBtn =  document.querySelector('.cta'),
    modal = document.querySelector('.modal'),
    exitModal = document.querySelector('.closeBtn')

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
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});

// Adding Modal
profileBtn.addEventListener('click', function(e){
    modal.style.display = 'block'
    backdrop.style.display = 'block'
})
exitModal.addEventListener('click', function(e){
    modal.style.display = 'none'
    backdrop.style.display = 'none'
})
