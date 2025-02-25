"use strict";

const swiper = new Swiper(".best_wrap", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1441: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
