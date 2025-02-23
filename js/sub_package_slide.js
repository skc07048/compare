const swiperDesigner = new Swiper(".designer-image-con", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1441: {},
  },
});

const swiperStyle = new Swiper(".style_image_con", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1441: {},
  },
});

document.addEventListener("scroll", function () {
  const designer = document.querySelector(".designer-image-con");
  const trg = window.innerHeight * 1;

  if (window.scrollY > trg) {
    designer.classList.add("show");
  }
});

document.addEventListener("scroll", function () {
  const style = document.querySelector(".style_image_con");
  const trgPoint = window.innerHeight * 2;

  if (window.scrollY > trgPoint) {
    style.classList.add("show");
  }
});
