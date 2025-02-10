//메인 페이지 메인 슬라이더
const swiperMain = new Swiper(".main-con", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 반응형 브레이크 포인트
  breakpoints: {
    320: {
      spaceBetween: 20,
      pagination: false,
    },

    481: {
      slidesPerView: "1",
      effect: "none",
      slidesPerView: "1",
      pagination: false,
      autoplay: false,
    },

    769: {
      slidesPerView: "3",
      effect: "none",
      pagination: false,
      spaceBetween: 20,
      autoplay: false,
    },

    1025: {
      slidesPerView: "auto",
      effect: "coverflow",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 20,
    },
  },
});

// 메인 페이지 포트폴리오 슬라이더
const swiperPort = new Swiper(".port-con", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 반응형 브레이크 포인트
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 50,
      pagination: false,
    },
    1024: {},
  },
});

//메인 페이지 스타일가이드 슬라이더
const swiperStyle = new Swiper(".style-con", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      effect: "coverflow",
      slidesPerView: "auto",
      spaceBetween: 50,
      pagination: false,
    },
  },
});
