(function smoothScroll() {
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
         });

         closeMenu();
      });
   });
   function closeMenu() {
      const burger = document?.querySelector("[data-burger]");
      const menu = document?.querySelector("[data-menu]");
      const body = document.body;

      if (menu.classList.contains("_open")) {
         burger.classList.remove("_active");
         menu.classList.remove("_open");
         body.classList.remove("_no-scroll");
      }
   }
}())
