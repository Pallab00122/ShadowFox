// ====menu icon navbar ======
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


//=======        scrool sections active-======
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


  //========Sticky Navber========== 

  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // ============remove menu icon navbar when click navbar ==============

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

//========== Swiper ==========
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// dark light mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};


//===scroll reveal===

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

//;kg
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });