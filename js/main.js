/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/example */ "./src/js/components/example.js");
/* harmony import */ var _components_example__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_example__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_projectFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/projectFilter */ "./src/js/components/projectFilter.js");
/* harmony import */ var _components_projectFilter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_projectFilter__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_windowScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/windowScroll */ "./src/js/functions/windowScroll.js");
/* harmony import */ var _functions_windowScroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_windowScroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/smoothScroll */ "./src/js/functions/smoothScroll.js");
/* harmony import */ var _functions_smoothScroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions_smoothScroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/scrollToTop */ "./src/js/functions/scrollToTop.js");
/* harmony import */ var _functions_scrollToTop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_functions_scrollToTop__WEBPACK_IMPORTED_MODULE_3__);
//Подробная документация внутри каждой функции/библиотеки
//Бургер меню
 //Проверка на тип устройства
// import "./functions/isMobile";



 //Проверка разрешения экрана (см.доку внутри модуля)
// import { * } from "./functions/viewportCheck";

/***/ }),

/***/ "./src/js/_libs.js":
/*!*************************!*\
  !*** ./src/js/_libs.js ***!
  \*************************/
/***/ (function() {

//Подробная документация внутри каждой функции/библиотеки
// Свайпер
// import "./libs/swiper";
// Tippy
// import "./libs/tippy";

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  htmlEl: document.documentElement,
  bodyEl: document.body,
  header: document.querySelector(".header")
});

/***/ }),

/***/ "./src/js/components/example.js":
/*!**************************************!*\
  !*** ./src/js/components/example.js ***!
  \**************************************/
/***/ (function() {

console.log("gulp-starter by nmcode");

/***/ }),

/***/ "./src/js/components/projectFilter.js":
/*!********************************************!*\
  !*** ./src/js/components/projectFilter.js ***!
  \********************************************/
/***/ (function() {

(function projectFilter() {
  var buttons = document.querySelectorAll(".tabs-projects__tab");
  var projectItem = document.querySelectorAll(".projects__item");
  buttons.forEach(function (el) {
    el.addEventListener("click", function () {
      buttons.forEach(function (i) {
        i.classList.remove("_active");
      });
      var filterValue = el.getAttribute("data-filter").toLowerCase();
      el.classList.add("_active");
      projectItem.forEach(function (item) {
        var projectFilterValue = item.getAttribute("data-filter-value");

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
})();

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");
/*
Бургер
Документация:
Для бургера надо добавить атрибут data-burger
При нажатии добавляет себе класс _active
Для меню добавить атрибут data-menu
При нажатии добавляет класс _open
Стили хранятся в миксине scss/mixins/_burger
Сниппет бургера: n-burg
Сниппет меню: n-nav
*/


(function burger() {
  var burger = document.querySelector("[data-burger]");
  var menu = document.querySelector("[data-menu]");

  if (burger && menu) {
    burger.addEventListener("click", function (e) {
      burger.classList.toggle("_active");
      menu.classList.toggle("_open");
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.toggle("_no-scroll");
    });
  }
})();

/***/ }),

/***/ "./src/js/functions/scrollToTop.js":
/*!*****************************************!*\
  !*** ./src/js/functions/scrollToTop.js ***!
  \*****************************************/
/***/ (function() {

(function scrollToTop() {
  var scrollTop = document.querySelector(".scrollTop");
  scrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/smoothScroll.js":
/*!******************************************!*\
  !*** ./src/js/functions/smoothScroll.js ***!
  \******************************************/
/***/ (function() {

(function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
      closeMenu();
    });
  });

  function closeMenu() {
    var _document, _document2;

    var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector("[data-burger]");
    var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector("[data-menu]");
    var body = document.body;

    if (menu.classList.contains("_open")) {
      burger.classList.remove("_active");
      menu.classList.remove("_open");
      body.classList.remove("_no-scroll");
    }
  }
})();

/***/ }),

/***/ "./src/js/functions/windowScroll.js":
/*!******************************************!*\
  !*** ./src/js/functions/windowScroll.js ***!
  \******************************************/
/***/ (function() {

(function windowScroll() {
  var header = document.querySelector(".header");
  var scrollTop = document.querySelector(".scrollTop");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;

    if (y > 0) {
      header.classList.add("_scrolled");
      scrollTop.classList.add("_visible");
    } else {
      header.classList.remove("_scrolled");
      scrollTop.classList.remove("_visible");
    }
  });
})();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_libs */ "./src/js/_libs.js");
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/_components.js");
/******/ 	__webpack_require__("./src/js/_functions.js");
/******/ 	__webpack_require__("./src/js/_libs.js");
/******/ 	__webpack_require__("./src/js/_vars.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map