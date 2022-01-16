export const elements = {
  header: document.querySelector(".header"),
  menu: document.querySelector(".header__menu"),
  overlay: document.querySelector(".header__overlay"),

  btns: document.querySelectorAll(".tab-btn"),
  about: document.querySelector(".attraction__about"),
  articles: document.querySelectorAll(".attraction__about-content__info"),
  img: document.querySelectorAll(".attraction__about-center--img"),

  btnsTradition: document.querySelectorAll(".tab-btns"),
  aboutTraditions: document.querySelector(".traditions__container--btn"),
  articlesTraditions: document.querySelectorAll(
    ".traditions__container-content__info"
  ),
  imgTraditions: document.querySelectorAll(
    ".traditions__container-center--holder-img"
  ),

  //navigation selectors
  navToggle: document.querySelector(".header__menu"),
  linksContainer: document.querySelector(".header__nav--links-container"),
  links: document.querySelector("header__nav--links-a"),
  scrollLinks: document.querySelectorAll(".scroll-link"),
  navbar: document.getElementById("nav"),
  topLink: document.querySelector(".top-link"),
};
