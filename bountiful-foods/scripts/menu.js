var iconMenu = document.querySelector('.menu__icon'),
    menu = document.querySelector('.menu__list'),
    menuLink = document.querySelectorAll('.menu__link');

iconMenu.addEventListener('click', openMenu);

menuLink.forEach(function(el) {
  el.addEventListener('click', openSubmenu);
});

function openMenu() {
  
  if(menu.classList.contains('open')) {
    menu.classList.add('close');
    iconMenu.classList.remove('menu__icon__closed');
    
    setTimeout(function(){ menu.classList.remove('open'); }, 1300);
    
  } else {
    menu.classList.remove('close');
    menu.classList.add('open');
    iconMenu.classList.add('menu__icon__closed');
  } 
}