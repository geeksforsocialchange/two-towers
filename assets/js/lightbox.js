document.addEventListener("DOMContentLoaded", function () {
  //hide the lightbox
  document
    .querySelectorAll("div.lightbox")[0]
    .addEventListener("click", function (event) {
      this.innerHTML = "";
      document.querySelectorAll("div.lightbox")[0].style.display = "none";
    });

  //show the lightbox on click
  const elements = document.querySelectorAll("img.lightbox-image");
  const lightbox = document.querySelectorAll("div.lightbox")[0];
  elements.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      const title = this.getAttribute("title");
      const src =
        this.getAttribute("src").substr(
          0,
          this.getAttribute("src").lastIndexOf("/")
        ) +
        "/" +
        this.getAttribute("title");
      lightbox.innerHTML =
        '<a class="lightbox__close"></a><div class="lightbox__image" style="background: url(\'' +
        src +
        '\') center center / contain no-repeat;" title="' +
        title +
        '" ><img class="lightbox__hidden-image" src="' +
        src +
        '" alt="' +
        this.getAttribute("alt") +
        '" /></div><span class="lightbox__title">' +
        title.substr(0, title.lastIndexOf(".")) +
        "</span>";
      lightbox.style.display = "block";
    });
  });
});
