function toggleMenu(btn) {
  btn.classList.toggle("active");
  document.getElementById("menu").classList.toggle("active");
}


// Scroll animation for logo
const logo = document.querySelector(".logo");

function checkScroll() {
  const triggerPoint = window.innerHeight * 0.9;
  const logoTop = logo.getBoundingClientRect().top;
  if (logoTop < triggerPoint) {
    logo.classList.add("animate");
  }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
const phrases = [
  "Hi",
  "It's Dhriti here",
  "I'm",
  "Graphic Designer",
];

const typingEl = document.getElementById("typing");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingEl.textContent = currentPhrase.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  } else {
    typingEl.textContent = currentPhrase.substring(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200); // pause before deleting
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
const skillElements = document.querySelectorAll(".skill");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.3
});

skillElements.forEach(skill => {
  skillObserver.observe(skill);
});
// Preloader
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
});

// Reveal animation for project cards
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

projectCards.forEach(card => {
  projectObserver.observe(card);
});
