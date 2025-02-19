const swiper = new Swiper(".best_wrap", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {},
    1441: {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
    },
  },
});
