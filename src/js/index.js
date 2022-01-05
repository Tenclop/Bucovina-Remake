import "D:/LearnDev/Practice-js/Small-Projects-master/Bukovina/src/sass/main.scss";

import { elements } from "./base";

elements.menu.addEventListener("click", () => {
  elements.menu.classList.toggle("open");
  elements.header.classList.toggle("open");
  elements.overlay.classList.toggle("open");
});

elements.about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  // const idIMG = e.target.dataset.idIMG;

  if (id) {
    //remove active from other buttons
    elements.btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    elements.articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");

    //hide other imgs
    elements.img.forEach((image) => {
      image.classList.remove("active");
    });

    if (id === "fortress") {
      elements.img[0].classList.add("active");
    } else if (id === "train") {
      elements.img[1].classList.add("active");
    } else if (id === "monastary") {
      elements.img[2].classList.add("active");
    } else if (id === "pottery") {
      elements.img[3].classList.add("active");
    }
  }
});

console.log(elements.img);
console.log(elements.btns);
