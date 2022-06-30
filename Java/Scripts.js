

window,onload = function() {







    let slideindices = {};
    showSlides('.slideshow-container1');
    function showSlides(selector) {
        let i;
        let slides = document.querySelectorAll(`${selector} .mySlides.fade`);
        let dots = document.querySelectorAll(`${selector} .dot`);
        if (!slides.length || !dots.length) {
            return;
        }
        slideindices[selector] = slideindices[selector] || 0;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideindices[selector]++;
        if (slideindices[selector] > slides.length) {slideindices[selector] = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideindices[selector]-1].style.display = "block";
        dots[slideindices[selector]-1].className += " active";
        setTimeout(showSlides, 15000, selector); // Change image every 5 seconds
    }

    showSlides2('.slideshow-container2');
    function showSlides2(selector) {
        let i;
        let slides = document.querySelectorAll(`${selector} .mySlides.fade`);
        let dots = document.querySelectorAll(`${selector} .dot`);
        if (!slides.length || !dots.length) {
            return;
        }
        slideindices[selector] = slideindices[selector] || 0;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideindices[selector]++;
        if (slideindices[selector] > slides.length) {slideindices[selector] = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideindices[selector]-1].style.display = "block";
        dots[slideindices[selector]-1].className += " active";
        setTimeout(showSlides, 10000, selector); // Change image every 5 seconds
    }

    showSlides('.slideshow-container3');
    function showSlides(selector) {
        let i;
        let slides = document.querySelectorAll(`${selector} .mySlides.fade`);
        let dots = document.querySelectorAll(`${selector} .dot`);
        if (!slides.length || !dots.length) {
            return;
        }
        slideindices[selector] = slideindices[selector] || 0;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideindices[selector]++;
        if (slideindices[selector] > slides.length) {slideindices[selector] = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideindices[selector]-1].style.display = "block";
        dots[slideindices[selector]-1].className += " active";
        setTimeout(showSlides, 15000, selector); // Change image every 5 seconds
    }
};