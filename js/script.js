window.addEventListener("scroll", function() {
    let navbar = document.getElementById("btm-nav");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});


