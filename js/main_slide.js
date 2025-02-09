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
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // 반응형 브레이크 포인트
  breakpoints: {
    319: {
      spaceBetween: 20,
      pagination: false,
      autoplay: false,
    },

    481: {
      slidesPerView: '1',
      effect: 'none',
      slidesPerView: '1',
      pagination: false,
      autoplay: false,
    },

    769: {
      slidesPerView: '3',
      effect: 'none',
      pagination: false,
      spaceBetween: 20,
      autoplay: false,
    },

    1025: {
      slidesPerView: 'auto',
      effect: 'coverflow',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 20,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    },
  },
});

// 메인 페이지 포트폴리오 슬라이더
const swiperPort = new Swiper('.port-con', {
  effect: 'cards',
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
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
      autoplay: false,
    },
  },
});
//메인 페이지 포트폴리오 슬라이더 클래스 추가
const swiperSlide = new Swiper('.port-con', {
  on: {
    slideChange: function () {
      this.slides[this.activeIndex].classList.add('custom-active');
    },
  },
});
const swiperWrapper = new Swiper('.port-con', {
  on: {
    init: function () {
      this.wrapperEl.classList.add('custom-wrapper');
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
    delay: 4500,
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
});
const swiperStyleSlide = new Swiper('.style-con', {
  on: {
    slideChange: function () {
      this.slides[this.activeIndex].classList.add('style-card');
    },
  },
});
const swiperStyleWrapper = new Swiper('.style-con', {
  on: {
    init: function () {
      this.wrapperEl.classList.add('style-wrapper');
    },
  },
});
