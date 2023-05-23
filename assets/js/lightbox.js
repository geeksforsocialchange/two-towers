document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.querySelectorAll("div.lightbox")[0];

    const close = () => {
	this.innerHTML = "";
	lightbox.style.display = "none";
    };
    
    //hide the lightbox
    lightbox.addEventListener("click", close);

    // add keybinding for closing lightbox
    document.addEventListener("keyup", (event) => {
	event.preventDefault();
	if (event.key === "Escape") { 
	    close();
	}
    });

    //show the lightbox on click
    const elements = document.querySelectorAll("img.timeline-image__image");
    elements.forEach((element) => {
	element.parentElement.addEventListener("click", (event) => {
	    event.preventDefault();
	    
	    const title = element.getAttribute("title");
	    const src = element.getAttribute("src");
	    const alt = element.getAttribute("alt");
	    const caption = element.getAttribute("data-caption");
	    
	    const imgPath = src.substring(0, src.lastIndexOf("/")) + "/" + title;

	    let closeHTML = '<a class="lightbox__close"></a>';
	    let captionHTML = `<span class="lightbox__title">${caption}</span>`;
	    let imgHTML = `<img class="lightbox__hidden-image" src="${imgPath}" alt="${caption}" />`;
	    let imageDiv = `<div class="lightbox__image" style="background: url('${imgPath}')" title="${title}">`;
	    
	    let html
		= '<div class="lightbox__container">'
		+   imageDiv
	    	+     closeHTML
		+     imgHTML
		+   "</div>"
		+   captionHTML
		+ "</div>";
	    
	    lightbox.innerHTML = html;

	    lightbox.style.display = "block";
	});
    });
});
