document.addEventListener("DOMContentLoaded", () => {
  console.log("AlotoSkin website loaded successfully");
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".product-slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
});


const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});

