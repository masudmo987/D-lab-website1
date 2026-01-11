// Carousel Auto-Slide and Navigation
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Manual Navigation
document.querySelector(".carousel-prev").addEventListener("click", function() {
  plusSlides(-1);
});

document.querySelector(".carousel-next").addEventListener("click", function() {
  plusSlides(1);
});

function plusSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Dynamic Copyright Year
document.addEventListener("DOMContentLoaded", function() {
  const copyright = document.getElementById("copyright");
  if (copyright) {
    copyright.textContent = `@${new Date().getFullYear()} The Field Lab NPC 273-412 NPO. All rights reserved.`;
  }
});