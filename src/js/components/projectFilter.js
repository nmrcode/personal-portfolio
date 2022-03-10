( function projectFilter() {
   const buttons = document.querySelectorAll(".tabs-projects__tab");
   const projectItem = document.querySelectorAll(".projects__item");
   buttons.forEach((el) => {
      el.addEventListener("click", () => {
         buttons.forEach((i) => {
            i.classList.remove("_active");
         });
         const filterValue = el.getAttribute("data-filter").toLowerCase();
         el.classList.add("_active");
         projectItem.forEach((item) => {
            const projectFilterValue = item.getAttribute("data-filter-value");

            if (projectFilterValue != filterValue) {
               item.style.display = "none";
            } else {
               item.style = "flex";
            }
            if (filterValue === "all") {
               item.style.display = "flex";
            }
         });
      });
   });
}())
