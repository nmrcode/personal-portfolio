import { gsap } from "gsap";

window.addEventListener("load", () => {
   gsap.from(".hero__title", {
      x: "-100%",
      opacity: 0,
      delay: 0.5,
   });

   gsap.from(".hero__btn", {
      x: "-100%",
      opacity: 0,
      delay: 1,
   });

   gsap.from(".header__nav", {
      y: "-100%",
      opacity: 0,
      delay: 0.5,
   });

   gsap.from(".hero__text", {
      x: "100%",
      opacity: 0,
      delay: 0.8,
   });
   gsap.from(".hero__social-list", {
      x: "100%",
      opacity: 0,
      delay: 0.8,
   });
});
