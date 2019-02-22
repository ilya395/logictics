/*
var slides = document.getElementsByClassName ('block-view');
var dots = document.getElementsByClassName ('control-dots__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
	slides[currentSlide].className = 'block-view';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].className = 'block-view active';

	dots[currentSlide].className = 'control-dots__item';
	currentSlide = (currentSlide + 1) % slides.length;
	dots[currentSlide].className = 'control-dots__item active';	
}
*/

var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
}
function previousSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("block-view");
	var dots = document.getElementsByClassName("control-dots__item");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}