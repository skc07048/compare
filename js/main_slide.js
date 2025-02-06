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
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 메인 페이지 포트폴리오 슬라이더
const swiperPort = new Swiper(".port-con", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//메인 페이지 포트폴리오 슬라이더 클래스 추가
const swiperSlide = new Swiper(".port-con", {
  on: {
    slideChange: function () {
      this.slides.forEach((slide) => slide.classList.remove("custom-active"));
      this.slides[this.activeIndex].classList.add("custom-active");
    },
  },
});
const swiperWrapper = new Swiper(".port-con", {
  on: {
    init: function () {
      this.wrapperEl.classList.add("custom-wrapper");
    },
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
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperStyleSlide = new Swiper(".style-con", {
  on: {
    slideChange: function () {
      this.slides[this.activeIndex].classList.add("style-card");
    },
  },
});
const swiperStyleWrapper = new Swiper(".style-con", {
  on: {
    init: function () {
      this.wrapperEl.classList.add("style-wrapper");
    },
  },
});
