import "D:/LearnDev/Practice-js/Small-Projects-master/Bukovina/src/sass/main.scss";

import { elements } from "./base";
import gsap from "gsap";

elements.menu.addEventListener("click", () => {
  elements.menu.classList.toggle("open");
  elements.header.classList.toggle("open");
  elements.overlay.classList.toggle("open");
});

//about section
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

//tradition section
elements.aboutTraditions.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  // const idIMG = e.target.dataset.idIMG;

  if (id) {
    //remove active from other buttons
    elements.btnsTradition.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    elements.articlesTraditions.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");

    //hide other imgs
    elements.imgTraditions.forEach((image) => {
      image.classList.remove("active");
    });

    if (id === "christmas") {
      elements.imgTraditions[0].classList.add("active");
    } else if (id === "easter") {
      elements.imgTraditions[1].classList.add("active");
    }
  }
});

// ********** scroll to top ************

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    elements.topLink.classList.add("show-link");
  } else {
    elements.topLink.classList.remove("show-link");
  }
});

// ********** close links ************ and get height auto dinamic
elements.scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //prevent default click
    e.preventDefault();
    //navigate to the specific supports
    const id = e.currentTarget.getAttribute("href").slice(1);
    const elementItem = document.getElementById(id);
    /* Calculate the hights 
    Height of nav*/

    const navHeight = elements.navbar.getBoundingClientRect().height;
    let position = elementItem.offsetTop - navHeight;

    //Height of links
    const containerHeight =
      elements.linksContainer.getBoundingClientRect().height;

    if (navHeight) {
      position = position + containerHeight;
    }

    if (window.innerWidth < 800) {
      //Height of links for responsive positioning
      position = position + (navHeight - containerHeight);
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    elements.menu.classList.remove("open");
    elements.header.classList.remove("open");
    elements.overlay.classList.remove("open");
  });
});

//gsap intro
const timeLine = gsap.timeline({ defaults: { ease: "power1.out" } });

timeLine.to(".header__intro--text-hide-text", {
  y: "0%",
  duration: 1,
  stagger: 0.25,
});

timeLine.to(".header__slider", { y: "-100%", duration: 1.5, delay: 0.5 });
timeLine.to(".header__intro", { y: "-100%", duration: 1 }, "-=1");
timeLine.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
timeLine.fromTo(
  ".hero__textHolder",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=1"
);
