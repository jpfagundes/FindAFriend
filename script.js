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


const rootNode = document.querySelector('.embla')
const viewportNode = rootNode.querySelector('.embla-viewport')
const options = { loop : false }

const embla = EmblaCarousel(viewportNode, options)

const prevButtonNode = rootNode.querySelector('.embla-prev')
const nextButtonNode = rootNode.querySelector('.embla-next')


prevButtonNode.addEventListener('click', embla.scrollPrev, true)
nextButtonNode.addEventListener('click', embla.scrollNext, true)