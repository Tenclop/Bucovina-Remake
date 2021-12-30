import "D:/LearnDev/Practice-js/Small-Projects-master/Bukovina/src/sass/main.scss";

import {elements} from "./base";



elements.menu.addEventListener("click", () => {
  elements.menu.classList.toggle("open");
  elements.header.classList.toggle("open");
  elements.overlay.classList.toggle("open");
});