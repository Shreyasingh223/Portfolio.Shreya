console.log("Script loaded successfully!");

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

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const text = "Shreya Singh";
const typingText = document.getElementById("typing-text");

let index = 0;

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

const carousel = document.querySelector(".projects-grid");
const cards = document.querySelectorAll(".project-card");
const dots = document.querySelectorAll(".dot");

carousel.addEventListener("scroll", () => {
  const scrollPosition = carousel.scrollLeft;

  const cardWidth = cards[0].offsetWidth + 20;

  const currentIndex = Math.round(scrollPosition / cardWidth);

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
});
