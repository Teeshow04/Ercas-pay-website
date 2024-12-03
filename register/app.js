// Select DOM elements
const checkbox = document.getElementById("agree-checkbox-hidden");
const createAccountBtn = document.querySelector(".register-btn");
const form = document.getElementById("createtForm");
const inputs = document.querySelectorAll(".register-input");
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownOptions = document.querySelector(".dropdown-options");
const countryRequiredMessage = document.getElementById("country-required");
const errorMessages = document.querySelectorAll(".error-message");

// Validation regex patterns
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Enable the "Create Account" button when the checkbox is checked
checkbox.addEventListener("change", () => {
    createAccountBtn.disabled = !checkbox.checked;
});

// Show validation errors when trying to submit an empty form
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    let allValid = true; // To track form validity

    inputs.forEach((input) => {
        const errorMessage = document.getElementById(`${input.id}-required`);
        const value = input.value.trim();

        if (!value) {
            errorMessage.classList.add("visible");
            allValid = false;
        } else {
            errorMessage.classList.remove("visible");
        }

        // Additional validations
        if (input.id === "name") {
            if (value.length < 3) {
                document.getElementById(`${input.id}-length`).classList.add("visible");
                allValid = false;
            } else {
                document.getElementById(`${input.id}-length`).classList.remove("visible");
            }

            if (!namePattern.test(value)) {
                document.getElementById(`${input.id}-invalid`).classList.add("visible");
                allValid = false;
            } else {
                document.getElementById(`${input.id}-invalid`).classList.remove("visible");
            }
        }

        if (input.id === "number" && value.length < 11) {
            document.getElementById("phone-number-invalid").classList.add("visible");
            allValid = false;
        } else {
            document.getElementById("phone-number-invalid").classList.remove("visible");
        }

        if (input.id === "email" && !emailPattern.test(value)) {
            document.getElementById("email-invalid").classList.add("visible");
            allValid = false;
        } else {
            document.getElementById("email-invalid").classList.remove("visible");
        }

        if (input.id === "password" && !passwordPattern.test(value)) {
            document.getElementById("password-invalid").classList.add("visible");
            allValid = false;
        } else {
            document.getElementById("password-invalid").classList.remove("visible");
        }
    });

    // Country dropdown validation
    if (dropdownSelected.textContent === "Choose Country") {
        countryRequiredMessage.classList.add("visible");
        allValid = false;
    } else {
        countryRequiredMessage.classList.remove("visible");
    }

    // Submit if all fields are valid
    if (allValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Dropdown functionality
dropdownSelected.addEventListener("click", () => {
    dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
});

dropdownOptions.addEventListener("click", (event) => {
    const selectedItem = event.target.closest(".dropdown-item");
    if (selectedItem) {
        dropdownSelected.textContent = selectedItem.textContent.trim();
        dropdownOptions.style.display = "none";
        countryRequiredMessage.classList.remove("visible");
    }
});
