const navList = document.querySelector(".timeline-navigation__list");
const navBtn = document.querySelector(".timeline-navigation__btn");
const plus = document.querySelector(".timeline-navigation__btn__closed");
const minus = document.querySelector(".timeline-navigation__btn__open");

const hideShowNav = () => {
  navList.classList.toggle("timeline-navigation__list--hidden");
  plus.classList.toggle("timeline-navigation__btn__closed--hidden");
  minus.classList.toggle("timeline-navigation__btn__closed--hidden");
};

hideShowNav();

navBtn.onclick = hideShowNav;
