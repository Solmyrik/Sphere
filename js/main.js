const iconMenu = document.querySelector('.header__burger');
const iconsClose = document.querySelector('.header__close');
const menuBody = document.querySelector('.menu__body');
console.log(iconMenu);
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    console.log('click');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('active');
  });
}
if (iconsClose) {
  iconsClose.addEventListener('click', function (e) {
    console.log('click');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('nav__menu--active');
    menuBody.classList.remove('active');
  }
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

//anime

// const animItems = document.querySelectorAll('._anim');
// if (animItems.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let i = 0; i < animItems.length; i++) {
//       const animItem = animItems[i];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animItemOffset - animItemPoint &&
//         pageYOffset < animItemOffset + animItemHeight
//       ) {
//         animItem.classList.add('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }
//   animOnScroll();
// }

// // to top
// const toTop = document.querySelector('.footer__top');

// toTop.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//   });
// });
