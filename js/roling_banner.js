"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const cmt = document.querySelectorAll(".comment_move");
  const cmtBox = document.querySelector(".comment_box");

  gsap.to(cmt, {
    xPercent: -100 * cmt.length,
    duration: 100,
    ease: "none",
    repeat: -1,
  });

  cmtBox.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
  cmtBox.addEventListener("mouseleave", () => gsap.globalTimeline.resume());
});
