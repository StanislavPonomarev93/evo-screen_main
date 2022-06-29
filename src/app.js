const navLinks = document.querySelectorAll('.nav__link');
const iconMenu = document.querySelector('.icon-menu');
const navMob = document.querySelector('.nav_mobile');
const wrapper = document.querySelector('.wrapper');


let swipeX;
let wrapperX;

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.nav__link-active').classList.remove('nav__link-active');
    link.classList.add('nav__link-active');
    wrapper.style.transform = 'translateX(0)';
    navMob.style.transform = 'translateX(-100%)';
    document.getElementById(link.getAttribute('href').substring(1)).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const swiper_j = new Swiper('.swiper-j', {
  navigation: {
    nextEl: '.icon_next',
    prevEl: '.icon_prev',
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: 1.37,
});

const swiper_f = new Swiper('.swiper-f', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 20,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

if (iconMenu) {
  iconMenu.addEventListener('click', (e) => {
    wrapper.style.transform = 'translateX(70%)';
    navMob.style.transform = 'translateX(0)';
  });

  navMob.addEventListener('touchstart', (e) => {
    swipeX = e.targetTouches[0].pageX;
    wrapperX = wrapper.getBoundingClientRect().x;
  });

  navMob.addEventListener('touchmove', (e) => {
    if (e.targetTouches[0].pageX <= swipeX) {
      wrapper.style.transform = `translateX(${wrapperX - (swipeX - e.targetTouches[0].pageX)}px)`;
      navMob.style.transform = `translateX(-${swipeX - e.targetTouches[0].pageX}px)`;
    }
  });

  navMob.addEventListener('touchend', (e) => {
    if (e.changedTouches[0].pageX < swipeX - 50) {
      wrapper.style.transform = 'translateX(0)';
      navMob.style.transform = 'translateX(-100%)';
    } else {
      wrapper.style.transform = 'translateX(70%)';
      navMob.style.transform = 'translateX(0)';
    }
  });
}