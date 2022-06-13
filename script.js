const iconMenu = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.header__menu');
if (iconMenu) {
   iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuHeader.classList.toggle('active');
   });
}

const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
   if (scrollY > 0) {
      header.classList.add('scroll');
   }
   else {
      header.classList.remove('scroll');
   }
})

