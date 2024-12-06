const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        header.classList.remove("default");
    } else {
        header.classList.remove("scrolled");
        header.classList.add("default");
    }
});




