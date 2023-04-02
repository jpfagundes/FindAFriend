const menu = document.querySelector('.menu-mobile');
const menuDesktop = document.querySelector('.card .menu-desktop');
const divider = document.querySelector('.divider')
const menuOpenMobile = document.querySelector('.btn-menu .menu-open');
const menuClosedMobile = document.querySelector('.btn-menu .menu-closed');


function clickMenu() {
  menu.classList.toggle('element-hidden');
  menuDesktop.classList.toggle('element-hidden');
  menuOpenMobile.classList.toggle('element-hidden');
  menuClosedMobile.classList.toggle('element-hidden');
}


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  mousewheel: true,
  keyboard: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});