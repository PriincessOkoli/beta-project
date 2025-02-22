window.addEventListener("scroll", function() {
    let navbar = document.getElementById("btm-nav");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector("#back-to-top");
    const footer = document.querySelector("footer");

    window.addEventListener("scroll", function () {
        // Get the footer position
        const footerRect = footer.getBoundingClientRect();

        // Show button only when footer is visible
        if (footerRect.top < window.innerHeight) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scroll to top on click
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



