document.addEventListener("DOMContentLoaded", () => {
  const close = () => {
    document.body.style.overflow = "unset";
    this.innerHTML = "";
    document.querySelectorAll("div.lightbox")[0].style.display = "none";
  };
  //hide the lightbox
  document.querySelectorAll("div.lightbox")[0].addEventListener("click", close);

  // add keybinding for closing lightbox
  document.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Escape") {
      close();
    }
  });

  //show the lightbox on click
  const elements = document.querySelectorAll("img.timeline-image__image");
  const lightbox = document.querySelectorAll("div.lightbox")[0];

  elements.forEach((element) => {
    element.parentElement.addEventListener("click", (event) => {
      event.preventDefault();
      const openButton = element.previousElementSibling;
      const closeAndFocus = () => {
        close();
        openButton.focus();
      };

      document.body.style.overflow = "hidden";

      const title = element.getAttribute("title");
      const src =
        element
          .getAttribute("src")
          .substring(0, element.getAttribute("src").lastIndexOf("/")) +
        "/" +
        element.getAttribute("title");
      lightbox.innerHTML =
        '<div class="lightbox__container"><button class="lightbox__close"><span class="screen-reader-only">return to timeline</span><img aria-hidden="true" src="/artwork/close.svg" alt=""></button onclick=() >' +
        '<div class="lightbox__image-container"><img class="lightbox__image" src="' +
        src +
        '" alt="' +
        element.getAttribute("alt") +
        '" /></div><span class="lightbox__title">' +
        element.getAttribute("data-caption") +
        "</span></div>";
      lightbox.style.display = "block";
      const closeBtn = lightbox.querySelector(".lightbox__close");
      closeBtn.onclick = closeAndFocus;
      closeBtn.focus();
    });
  });
});
