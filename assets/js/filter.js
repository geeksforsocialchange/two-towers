const filterClosed = document.querySelector(".filter__closed");
const filterOpts = document.querySelector(".filter__opts");
const filterActive = document.querySelector(".filter__active");
const timelineItems = document.querySelectorAll(".timeline__entry");

filterOpts.style.display = "none";
filterActive.style.display = "none";

const openFilter = (event) => {
  event.preventDefault();
  filterClosed.style.display = "none";
  filterOpts.style.display = "flex";
};
const closeFilter = (event) => {
  event.preventDefault();
  filterClosed.style.display = "block";
  filterOpts.style.display = "none";
  filterActive.style.display = "none";
  showAll();
};

const displayActiveState = () => {
  filterClosed.style.display = "none";
  filterOpts.style.display = "none";
  filterActive.style.display = "grid";
};

const hideAll = () => {
  timelineItems.forEach((el) => {
    el.style.display = "none";
  });
};

const showAll = () => {
  timelineItems.forEach((el) => {
    el.style.display = "block";
  });
};

const filter = (attribute, val) => {
  hideAll();
  let firstGroupisFound = false;
  timelineItems.forEach((el) => {
    if (el.getAttribute(attribute) === val) {
      el.style.display = "block";
      if (!firstGroupisFound) {
        firstGroupisFound = true;
        displayActiveState();
        const y = el.getBoundingClientRect().top + window.pageYOffset - 192;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
};
