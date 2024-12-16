
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("header");
    const  navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const checkoutNav = document.querySelector(".checkout-link");
  const payinsNav = document.querySelector(".payins-link");
  const settlementNav = document.querySelector(".settlement-link");
    
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
  

  const checkoutSection = document.getElementById("checkout");
  const payinsSection = document.getElementById("payins");
  const settlementSection = document.getElementById("settlement");

  // Function to hide all sections and remove active class from all nav links
  const hideAllSections = () => {
    checkoutSection.style.display = "none";
    payinsSection.style.display = "none";
    settlementSection.style.display = "none";

    checkoutNav.classList.remove("active");
    payinsNav.classList.remove("active");
    settlementNav.classList.remove("active");
  };

  // Event listener for Checkout navigation
  checkoutNav.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    hideAllSections(); // Hide all sections
    checkoutSection.style.display = "flex"; // Show Checkout section
    checkoutNav.classList.add("active"); // Highlight Checkout nav
  });
   // Event listener for Pay-ins navigation
   payinsNav.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    hideAllSections(); // Hide all sections
    payinsSection.style.display = "flex"; // Show Pay-ins section
    payinsNav.classList.add("active"); // Highlight Pay-ins nav
  });

  // Event listener for Settlement navigation
  settlementNav.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    hideAllSections(); // Hide all sections
    settlementSection.style.display = "flex"; // Show Settlement section
    settlementNav.classList.add("active"); // Highlight Settlement nav
  });

  // Set default view to Checkout on page load
  hideAllSections(); // Hide all sections initially
  checkoutSection.style.display = "flex"; // Show Checkout section
  checkoutNav.classList.add("active"); // Set Checkout nav as ac
});
    

