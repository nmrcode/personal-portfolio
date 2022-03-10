(function windowScroll() {
   const header = document.querySelector(".header");
   const scrollTop = document.querySelector(".scrollTop");
   window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > 0) {
         header.classList.add("_scrolled");
         scrollTop.classList.add("_visible");
      } else {
         header.classList.remove("_scrolled");
         scrollTop.classList.remove("_visible");
      }
   });
}())
