const openMenu = document.getElementById('open_menu');
const closeMenu = document.getElementById('close_menu');


const mobileNav = document.getElementById('mobile_nav');
const body = document.getElementsByTagName('body')[0];
closeMenu.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    closeMenu.style.display = 'none';
    body.style = 'overflow: scroll'
})

openMenu.addEventListener('click', function(){
    mobileNav.style.display = 'block';
    closeMenu.style.display = 'block';
    body.style = 'overflow: hidden'
})