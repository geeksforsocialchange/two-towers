const filterClosed = document.querySelector(".filter__closed");
const filterOpts = document.querySelector(".filter__opts");
const filterActive = document.querySelector(".filter__active");
const timelineItems = document.querySelectorAll(".timeline__entry");
const activeFilter = document.querySelector(".filter__active__text--inner");
const activeFilterCount = document.querySelector(
  ".filter__active__text--story-count"
);

filterOpts.style.display = "none";
filterActive.style.display = "none";

const openFilter = (event) => {
  event.preventDefault();
  filterClosed.style.display = "none";
  filterOpts.style.display = "flex";
};
const closeFilter = (event) => {
  event.preventDefault();
  hideActiveFilter();
  filterClosed.style.display = "block";
  filterOpts.style.display = "none";
  filterActive.style.display = "none";
  activeFilterCount.textContent = "";
  activeFilter.textContent = "";
  showAll();
};

const displayActiveState = () => {
  filterClosed.style.display = "none";
  filterOpts.style.display = "none";
  filterActive.style.display = "flex";
};

const showActiveFilter = (attribute, selectedFilter, count) => {
  activeFilter.textContent = selectedFilter.replace("_", " ");

  if (attribute === "data-type") {
    activeFilter.classList.add(
      `filter__active__text--type`,
      `filter__type-button--${selectedFilter}`
    );
  } else {
    activeFilterCount.textContent = ` (${count} stories)`;
    activeFilter.classList.add(`filter__active__text--contributor`);
  }
};

const hideActiveFilter = () => {
  activeFilter.className = "filter__active__text--inner";
  activeFilter.textContent = "";
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

const filter = (attribute, val, count) => {
  hideAll();
  let firstGroupisFound = false;
  timelineItems.forEach((el) => {
    if (el.getAttribute(attribute) === val) {
      el.style.display = "block";
      if (!firstGroupisFound) {
        firstGroupisFound = true;
        showActiveFilter(attribute, val, count);
        displayActiveState();
        const y = el.getBoundingClientRect().top + window.pageYOffset - 192;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
};
