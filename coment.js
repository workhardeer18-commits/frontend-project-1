

// همه‌ی نظرات را انتخاب می‌کنیم
const testimonials = document.querySelectorAll('.testimonial');

// عددی برای نگهداری اینکه الان کدوم نظر نمایش داده میشه
let current = 0;

// تابع برای رفتن به نظر بعدی
function showNextTestimonial() {
  // نظر فعلی را غیر فعال می‌کنیم
  testimonials[current].classList.remove('active');

  // به نظر بعدی می‌رویم، و اگر آخرین نظر بود به اول برمی‌گردیم
  current = (current + 1) % testimonials.length;

  // نظر جدید را فعال می‌کنیم
  testimonials[current].classList.add('active');
}

// اجرای خودکار هر ۵ ثانیه
setInterval(showNextTestimonial, 5000);