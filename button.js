const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 8000);

// Remova o preloader após o carregamento da página
window.addEventListener('load', function(){
  var loader = document.getElementById('loading');
  loader.style.display = 'none';
});
