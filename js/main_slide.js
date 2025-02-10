//메인 페이지 메인 슬라이더
const swiperMain = new Swiper('.main-con', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
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
    el: '.swiper-pagination',
    clickable: true,
  },
  // 반응형 브레이크 포인트
  breakpoints: {
    320: {
      spaceBetween: 20,
      pagination: false,
    },

    481: {
      spaceBetween: 40,
      pagination: false,
    },

    769: {
      spaceBetween: 60,
      pagination: false,
    },

    1025: {
      spaceBetween: 60,
    },
  },
});

// 메인 페이지 포트폴리오 슬라이더
const swiperPort = new Swiper('.port-con', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
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
    el: '.swiper-pagination',
    clickable: true,
  },
  // 반응형 브레이크 포인트
  breakpoints: {
    320: {
      spaceBetween: 20,
      pagination: false,
    },

    481: {
      spaceBetween: 60,
      pagination: false,
    },

    769: {
      spaceBetween: 60,
      pagination: false,
    },

    1025: {
      spaceBetween: 60,
    },
  },
});

//메인 페이지 스타일가이드 슬라이더
const swiperStyle = new Swiper('.style-con', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
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
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      pagination: false,
    },

    481: {
      spaceBetween: 60,
      pagination: false,
    },

    769: {
      spaceBetween: 60,
      pagination: false,
    },

    1025: {
      spaceBetween: 60,
    },
  },
});
