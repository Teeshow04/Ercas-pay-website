
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header");
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector('.menu');
  const currencyOptions = document.querySelectorAll(".currency-option");
  const amountInput = document.querySelector(".amount-input");
  const payBtn = document.querySelector(".pay-btn");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");


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

  // Get error message spans
  const firstNameRequiredMessage = document.getElementById("first-name-required");
  const firstNameLengthMessage = document.getElementById("first-name-length");

  const lastNameRequiredMessage = document.getElementById("last");
  const lastNameLengthMessage = document.getElementById("last-name-length");

  const emailRequiredMessage = document.getElementById("required");
  const emailInvalidMessage = document.getElementById("email-invalid");

  // Validation patterns
  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Helper function to toggle error visibility
  function showError(input, messageElement, isError) {
    if (isError) {
      messageElement.classList.remove("hidden"); // Show the error message
      input.style.border = "2px solid #dc2626"; // Add red border for error
    } else {
      messageElement.classList.add("hidden"); // Hide the error message
      input.style.border = ""; // Reset border to default
    }
  }

  // First Name Validation
  function validateFirstName() {
    const value = firstNameInput.value.trim();

    if (value === "") {
      showError(firstNameInput, firstNameRequiredMessage, true);
      showError(firstNameInput, firstNameLengthMessage, false);
      return false;
    } else if (value.length < 3) {
      showError(firstNameInput, firstNameRequiredMessage, false);
      showError(firstNameInput, firstNameLengthMessage, true);
      return false;
    }

    showError(firstNameInput, firstNameRequiredMessage, false);
    showError(firstNameInput, firstNameLengthMessage, false);
    return true;
  }

  // Last Name Validation
  function validateLastName() {
    const value = lastNameInput.value.trim();

    if (value === "") {
      showError(lastNameInput, lastNameRequiredMessage, true);
      showError(lastNameInput, lastNameLengthMessage, false);
      return false;
    } else if (value.length < 3) {
      showError(lastNameInput, lastNameRequiredMessage, false);
      showError(lastNameInput, lastNameLengthMessage, true);
      return false;
    }

    showError(lastNameInput, lastNameRequiredMessage, false);
    showError(lastNameInput, lastNameLengthMessage, false);
    return true;
  }

  // Email Validation
  function validateEmail() {
    const value = emailInput.value.trim();

    if (value === "") {
      showError(emailInput, emailRequiredMessage, true);
      showError(emailInput, emailInvalidMessage, false);
      return false;
    } else if (!emailPattern.test(value)) {
      showError(emailInput, emailRequiredMessage, false);
      showError(emailInput, emailInvalidMessage, true);
      return false;
    }

    showError(emailInput, emailRequiredMessage, false);
    showError(emailInput, emailInvalidMessage, false);
    return true;
  }

  // Validate all fields on form submission
  const form = document.getElementById("paymentForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();

    if (isFirstNameValid && isLastNameValid && isEmailValid) {
      alert("Form submitted successfully!");
      form.reset(); // Reset form after successful submission
    } else {
      alert("Please fix the errors and try again.");
    }
  });

  // Real-time validation for each input
  firstNameInput.addEventListener("input", validateFirstName);
  lastNameInput.addEventListener("input", validateLastName);
  emailInput.addEventListener("input", validateEmail);
});
