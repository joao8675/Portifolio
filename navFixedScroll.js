document.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var scrolled = window.scrollY > 0;

    if (scrolled) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
});