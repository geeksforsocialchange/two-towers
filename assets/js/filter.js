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
  filterActive.style.display = "flex";
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
  timelineItems.forEach((el) => {
    if (el.getAttribute(attribute) === val) el.style.display = "block";
  });
  displayActiveState();
};
