document.addEventListener("DOMContentLoaded", () => {
  //hide the lightbox
  document.querySelectorAll("div.lightbox")[0].addEventListener("click", () => {
    this.innerHTML = "";
    document.querySelectorAll("div.lightbox")[0].style.display = "none";
  });

  //show the lightbox on click
  const elements = document.querySelectorAll("img.timeline-image__image");
  const lightbox = document.querySelectorAll("div.lightbox")[0];
  elements.forEach((element) => {
    element.parentElement.addEventListener("click", (event) => {
      event.preventDefault();
      lightbox.innerHTML =
        '<a class="lightbox__close"></a><div class="lightbox__image" style="background: url(\'' +
        element.getAttribute("src") +
        '\') center center / contain no-repeat;" title="' +
        element.getAttribute("title") +
        '" ><img class="lightbox__hidden-image" src="' +
        element.getAttribute("src") +
        '" alt="' +
        element.getAttribute("alt") +
        '" /></div><span class="lightbox__title">' +
        element.getAttribute("title") +
        "</span>";
      lightbox.style.display = "block";
    });
  });
});
