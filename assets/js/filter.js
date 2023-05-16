console.log("this is the filter file");

const filterClosed = document.querySelector(".filter__closed");
const filterOpts = document.querySelector(".filter__opts");
const filterActive = document.querySelector(".filter__active");

filterOpts.style.display = "none";
filterActive.style.display = "none";

const openFilter = (event) => {
  event.preventDefault();
  filterClosed.style.display = "none";
  filterOpts.style.display = "flex";
  console.log("opening");
};
const closeFilter = (event) => {
  event.preventDefault();
  filterClosed.style.display = "block";
  filterOpts.style.display = "none";
  filterActive.style.display = "none";
  console.log("closeing");
};
