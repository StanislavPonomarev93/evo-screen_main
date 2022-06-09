import Swiper, { Navigation } from 'swiper';
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.nav__link-active').classList.remove('nav__link-active');
    link.classList.add('nav__link-active');
    document.getElementById(link.getAttribute('href').substring(1)).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const swiper_1 = new Swiper('.swiper-1', {
  modules: [Navigation],
  navigation: {
    nextEl: '.icon_next',
    prevEl: '.icon_prev',
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: 1.37,
  
});