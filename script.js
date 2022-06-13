//=======================burger=====

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

//=============прокрутка при клике===========

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
console.log(menuLinks.length)
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').clientHeight + 60;

         if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuHeader.classList.remove('active');
         }

         window.scrollTo
            ({
               top: gotoBlockValue,
               behavior: "smooth"
            });
         e.preventDefault();
      }
   }
};

