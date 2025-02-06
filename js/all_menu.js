const allMenuBtn = document.querySelector(".all_menu_btn");
const allMenu = document.querySelector(".all_menu");

document.querySelector(".all_menu_btn").addEventListener("click", function () {
  document.querySelector(".all_menu").classList.toggle("open");
  this.classList.toggle("active");
});

document.querySelectorAll(".all_menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".all_menu").classList.remove("open");
    allMenuBtn.classList.remove("active");
  });
});
