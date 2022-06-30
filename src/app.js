const navLinks = document.querySelectorAll('.nav__link');
const iconMenu = document.querySelector('.icon-menu');
const navMob = document.querySelector('.nav_mobile');
const wrapper = document.querySelector('.wrapper');


let swipeX;

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.nav__link-active').classList.remove('nav__link-active');
    link.classList.add('nav__link-active');
    navMob.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.getElementById(link.getAttribute('href').substring(1)).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 500)

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
    navMob.style.transform = 'translateX(0)';
  });

  navMob.addEventListener('touchstart', (e) => {
    swipeX = e.targetTouches[0].pageX;
  });

  navMob.addEventListener('touchmove', (e) => {
    if (e.targetTouches[0].pageX >= swipeX) {
      navMob.style.transform = `translateX(${e.targetTouches[0].pageX - swipeX}px)`;
    }
  });

  navMob.addEventListener('touchend', (e) => {
    if (e.changedTouches[0].pageX - swipeX > 10) {
      navMob.style.transform = 'translateX(100%)';
    } else {
      navMob.style.transform = 'translateX(0)';
    }
  });
}