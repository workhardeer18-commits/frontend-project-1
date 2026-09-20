const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// نمایش اسلاید
function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
    dots[i].classList.toggle('active', i === n);
  });
}

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// کلیک روی نقطه‌ها
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
