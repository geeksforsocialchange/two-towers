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
  const image = document.getElementById("lightbox__image");
  const title = document.getElementById("lightbox__title");

  elements.forEach((element) => {
    element.parentElement.addEventListener("click", (event) => {
      event.preventDefault();
      const openButton = element.previousElementSibling;
      const closeAndFocus = () => {
        close();
        openButton.focus();
      };
      lightbox.style.display = "block";

      document.body.style.overflow = "hidden";
      image.src =
        element
          .getAttribute("src")
          .substring(0, element.getAttribute("src").lastIndexOf("/")) +
        "/" +
        element.getAttribute("title");
      image.alt = element.getAttribute("alt");
      title.textContent = element.getAttribute("data-caption");
      const closeBtn = lightbox.querySelector(".lightbox__close");
      closeBtn.onclick = closeAndFocus;
      closeBtn.focus();
    });
  });
});
