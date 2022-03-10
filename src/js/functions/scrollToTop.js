(function scrollToTop() {
   const scrollTop = document.querySelector(".scrollTop");
   scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   });
}())
