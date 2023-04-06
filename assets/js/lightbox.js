document.addEventListener("DOMContentLoaded", function() {

    //hide the lightbox
    document.querySelectorAll('div.lightbox')[0].addEventListener("click", function(event) {
        this.innerHTML = '';
        document.querySelectorAll('div.lightbox')[0].style.display = 'none';
    });

    //show the lightbox on click
    const elements = document.querySelectorAll('img.lightbox-image');
    const lightbox = document.querySelectorAll('div.lightbox')[0];
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            lightbox.innerHTML = '<a class="lightbox__close"></a><div class="lightbox__image" style="background: url(\''+this.getAttribute('src')+'\') center center / contain no-repeat;" title="'+this.getAttribute('title')+'" ><img class="lightbox__hidden-image" src="'+this.getAttribute('src')+'" alt="'+this.getAttribute('alt')+'" /></div><span class="lightbox__title">'+this.getAttribute('title')+'</span>';
            lightbox.style.display = 'block';
        });
    });

});