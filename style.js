// ================================
// Smooth navigation
// ================================

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


// ================================
// Logo scrolls to home
// ================================

const logo =
    document.querySelector(".logo");


logo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});