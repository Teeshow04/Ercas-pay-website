
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("header");
    const  navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const currencyOptions = document.querySelectorAll(".currency-option");
    const amountInput = document.querySelector(".amount-input");
    const payBtn = document.querySelector(".pay-btn");
  

    
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
      });

      // Function to set the default state
  const setDefault = () => {
    const defaultCurrency = document.querySelector(".currency-option.active");
    if (defaultCurrency) {
      const selectedCurrency = defaultCurrency.getAttribute("data-currency");
      if (selectedCurrency === "NGN") {
        amountInput.value = 100;
        payBtn.textContent = 'Pay 100 NGN';
      }
    }
  };
        // Handle click events on currency options
  currencyOptions.forEach(option => {
    option.addEventListener("click", () => {

      // Remove active class from all options
      currencyOptions.forEach(opt => opt.classList.remove("active"));

      // Add active class to clicked option
      option.classList.add("active");

      // Get selected currency
      const selectedCurrency = option.getAttribute("data-currency");

      // Update the amount input and pay button dynamically
      if (selectedCurrency === "NGN") {
        amountInput.value = 100;
        payBtn.textContent = `Pay NGN 100`;
      } else {
        amountInput.value = 5;
        payBtn.textContent = `Pay ${selectedCurrency} 5.00`;
      }
    });
    }); 
});
