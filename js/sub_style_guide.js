const swiperBest = new Swiper(".best-con", {
  slidesPerView: 3.7,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 0,
      freeMode: false,
      loop: true,
    },
    480: {
      slidesPerView: 1.2,
      spaceBetween: 0,
      freeMode: false,
      loop: true,
    },
    769: {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: true,
      loop: true,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: true,
      loop: true,
    },
    1441: {
      slidesPerView: 3.7,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
    },
  },
});

const swiperTop = new Swiper(".style_top", {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: false,
      loop: true,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: false,
      loop: true,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
    },
    1441: {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
    },
  },
});

const swiperBottom = new Swiper(".style_bottom", {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: false,
      loop: true,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: false,
      loop: true,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
    },
    1441: {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
    },
  },
});

const swiperLook = new Swiper(".lookbook_slide_con", {
  slidesPerView: 1.8,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: false,
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
    },
    1441: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
  },
});

document.addEventListener("scroll", function () {
  const top = document.querySelector(".style_top");
  const trg = window.innerHeight * 2.2;

  if (window.scrollY > trg) {
    top.classList.add("show");
  }
});

document.addEventListener("scroll", function () {
  const bottom = document.querySelector(".style_bottom");
  const trigger = window.innerHeight * 2.2;

  if (window.scrollY > trigger) {
    bottom.classList.add("show");
  }
});
