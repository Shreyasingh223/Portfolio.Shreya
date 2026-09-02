// console.log("Script loaded successfully!");

// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#7D0921",
//   "#941638",
//   "#A91E45",
//   "#BD3157",
//   "#D45A78",
//   "#E58BA3",
// ];

// circles.forEach(function (circle, index) {
//   circle.x = 0;
//   circle.y = 0;

//   circle.style.backgroundColor = colors[index % colors.length];
// });

// window.addEventListener("pointermove", function (e) {
//   coords.x = e.clientX;
//   coords.y = e.clientY;
// });

// function animCircles() {
//   let x = coords.x;
//   let y = coords.y;

//   circles.forEach(function (circle, index) {
//     circle.x += (x - circle.x) * 0.35;
//     circle.y += (y - circle.y) * 0.35;

//     circle.style.left = circle.x - 10 + "px";
//     circle.style.top = circle.y - 10 + "px";

//     const scale = (circles.length - index) / circles.length;

//     circle.style.transform = `scale(${scale})`;

//     x = circle.x;
//     y = circle.y;
//   });

//   requestAnimationFrame(animCircles);
// }

// animCircles();

// const navToggle = document.getElementById("nav-toggle");
// const navLinks = document.getElementById("nav-links");

// navToggle.addEventListener("click", () => {
//   navToggle.classList.toggle("active");
//   navLinks.classList.toggle("active");
// });

// const text = "Shreya Singh";
// const typingText = document.getElementById("typing-text");

// let index = 0;

// function typeEffect() {
//   if (index < text.length) {
//     typingText.textContent += text.charAt(index);
//     index++;

//     setTimeout(typeEffect, 150);
//   } else {
//     setTimeout(() => {
//       typingText.textContent = "";
//       index = 0;
//       typeEffect();
//     }, 1500);
//   }
// }

// typeEffect();

// const carousel = document.querySelector(".projects-grid");
// const cards = document.querySelectorAll(".project-card");
// const dots = document.querySelectorAll(".dot");

// carousel.addEventListener("scroll", () => {
//   const scrollPosition = carousel.scrollLeft;

//   const cardWidth = cards[0].offsetWidth + 20;

//   const currentIndex = Math.round(scrollPosition / cardWidth);

//   dots.forEach((dot, index) => {
//     dot.classList.toggle("active", index === currentIndex);
//   });
// });

console.log("Script loaded successfully!");

/* =========================
   CURSOR CIRCLES
========================= */

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#7D0921",
  "#941638",
  "#A91E45",
  "#BD3157",
  "#D45A78",
  "#E58BA3",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;

  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("pointermove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.x += (x - circle.x) * 0.35;
    circle.y += (y - circle.y) * 0.35;

    circle.style.left = circle.x - 10 + "px";
    circle.style.top = circle.y - 10 + "px";

    const scale = (circles.length - index) / circles.length;

    circle.style.transform = `scale(${scale})`;

    x = circle.x;
    y = circle.y;
  });

  requestAnimationFrame(animCircles);
}

animCircles();

/* =========================
   MOBILE NAVIGATION
========================= */

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

/* =========================
   TYPING EFFECT
========================= */

const text = "Shreya Singh";
const typingText = document.getElementById("typing-text");

let index = 0;

if (typingText) {
  function typeEffect() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;

      setTimeout(typeEffect, 150);
    } else {
      setTimeout(() => {
        typingText.textContent = "";
        index = 0;
        typeEffect();
      }, 1500);
    }
  }

  typeEffect();
}

/* =========================
   PROJECT CAROUSEL
========================= */

const carousel = document.querySelector(".projects-grid");
const cards = document.querySelectorAll(".project-card");
const dots = document.querySelectorAll(".dot");

if (carousel && cards.length > 0 && dots.length > 0) {
  carousel.addEventListener("scroll", () => {
    const scrollPosition = carousel.scrollLeft;

    const cardWidth = cards[0].offsetWidth + 20;

    const currentIndex = Math.round(scrollPosition / cardWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  });
}

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Portfolio Contact from ${name}`;

    const body =
      `Hello Shreya,%0D%0A%0D%0A` +
      `${message}%0D%0A%0D%0A` +
      `From: ${name}%0D%0A` +
      `Email: ${email}`;

    window.location.href = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}
