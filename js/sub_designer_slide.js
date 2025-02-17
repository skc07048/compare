const swiper = new Swiper(".placestyle_con", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
    1441: {},
  },
});
