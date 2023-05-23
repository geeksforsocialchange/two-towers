const navList = document.querySelector(".timeline-navigation__list");
const navBtn = document.querySelector(".timeline-navigation__btn");

const hideShowNav = () => {
  navList.classList.toggle("timeline-navigation__list--hidden");
};

hideShowNav();

navBtn.onclick = hideShowNav;
