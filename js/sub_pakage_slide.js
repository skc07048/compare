const swiperDesigner = new Swiper(".designer-image-con", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
});

const swiperStyle = new Swiper(".style_image_con", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
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
