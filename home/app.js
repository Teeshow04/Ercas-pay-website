
document.addEventListener('DOMContentLoaded', () => {
const header = document.querySelector("header");
const  navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        header.classList.remove("default");
    } else {
        header.classList.remove("scrolled");
        header.classList.add("default");
    }
});

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("active");

    // Toggle between the hamburger and close icons
    const toggleIcon = navToggle.querySelector("i");
    if (navbar.classList.contains("active")) {
      toggleIcon.classList.remove("fa-bars");
      toggleIcon.classList.add("fa-times");
    } else {
      toggleIcon.classList.remove("fa-times");
      toggleIcon.classList.add("fa-bars");
    }
  });
});



