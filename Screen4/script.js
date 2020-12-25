var slideNo = 1;
Carousel(slideNo);

function Carousel(n){
  var slides = document.getElementsByClassName("image-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideNo - 1].className += " active";

}
function newSlide(n){
  Carousel(slideNo += n);
}
function currentSlide(n){
  Carousel(slideNo = n);
}
