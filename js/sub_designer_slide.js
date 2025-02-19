const swiper = new Swiper(".placestyle_con", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
    },
    480: {
      slidesPerView: 1,
      loop: true,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 30,
    },
    1441: {},
  },
});
