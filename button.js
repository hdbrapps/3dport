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

var bar = new ProgressBar.Circle(progress, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.2); // A porcentagem de progresso a ser exibida, neste caso 90%
