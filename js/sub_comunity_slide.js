const swiper = new Swiper(".best_wrap", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {},
    769: {},
    1024: {},
    1441: {},
  },
});
