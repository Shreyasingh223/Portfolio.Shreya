console.log("Script loaded successfully!");

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#7D0921",
    "#941638",
    "#A91E45",
    "#BD3157",
    "#D45A78",
    "#E58BA3"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;

    circle.style.backgroundColor =
        colors[index % colors.length];
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

        const scale =
            (circles.length - index) / circles.length;

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