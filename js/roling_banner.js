"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const cmt = document.querySelectorAll(".comment_move");
  const cmtBox = document.querySelectorAll(".comment_box");

  cmt.forEach((el, index) => {
    gsap.to(el, {
      xPercent: -57.8,
      duration: 20 + index * 2,
      ease: "none",
      repeat: -1,
    });
  });

  cmtBox.forEach((el) => {
    el.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
    el.addEventListener("mouseleave", () => gsap.globalTimeline.resume());
  });

  const deskCmt = window.matchMedia("(min-width: 1441px)");

  function screensizeDesk() {
    cmt.forEach((el, index) => {
      gsap.to(el, {
        xPercent: -57.8,
        duration: 20 + index * 2,
        ease: "none",
        repeat: -1,
      });
    });
  }

  screensizeDesk(deskCmt);

  deskCmt.addEventListener("change", screensizeDesk);
});
