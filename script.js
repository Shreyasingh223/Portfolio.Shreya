console.log("Script loaded successfully!");

// ================================
// Smooth navigation
// ================================

// 

// const coords = { x: 0, y: 0 };
// const circles = document.querySelectorAll(".circle");

// const colors = [
//     "#7D0921",
//     "linear-gradient(90deg, rgba(125, 9, 33, 1) 0%, rgba(250, 222, 247, 1) 100%)"
// ];

// circles.forEach(function (circle, index) {
//     circle.x = 0;
//     circle.y = 0;

//     if (colors[index % colors.length].includes("gradient")) {
//         circle.style.backgroundImage = colors[index % colors.length];
//     } else {
//         circle.style.backgroundColor = colors[index % colors.length];
//     }
// });

// window.addEventListener("pointermove", function (e) {
//     coords.x = e.clientX;
//     coords.y = e.clientY;
// });

// function animCircles() {
//     let x = coords.x;
//     let y = coords.y;

//     circles.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.scale =
//             (circles.length - index) / circles.length;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];

//         x += (nextCircle.x - x) * 0.3;
//         y += (nextCircle.y - y) * 0.3;
//     });

//     requestAnimationFrame(animCircles);
// }

// animCircles();

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


const navigationLinks =
    document.querySelectorAll(".navbar a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            event.preventDefault();

            const target =
                document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        }

    });

});

