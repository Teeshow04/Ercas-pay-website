
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("agree-checkbox-hidden");
    const checkboxWrapper = document.getElementById("checkbox-wrapper");
    const createAccountBtn = document.querySelector(".register-btn");
    const form = document.getElementById("createtForm");
    const showPasswordBtn = document.querySelector(".show-password");
    const passwordInput = document.getElementById("password");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const phoneInput = document.getElementById("number");
    const emailInput = document.getElementById("email");
    const dropdownSelected = document.querySelector(".dropdown-selected");
    const dropdownOptions = document.querySelector(".dropdown-options");

    // Regex patterns
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Helper function to toggle label color
    function toggleLabelError(input, hasError) {
        const label = input.previousElementSibling; // Select the corresponding <label>
        label.style.color = hasError ? "#dc2626" : "#666"; // Red for error, gray for normal
    }

    // Enable button and toggle checkbox wrapper border
    checkbox.addEventListener("change", function () {
        checkboxWrapper.style.borderColor = checkbox.checked ? "#007BFF" : "transparent";
        createAccountBtn.disabled = !checkbox.checked;
    });

    // Toggle password visibility
    showPasswordBtn.addEventListener("click", function () {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        this.querySelector("i").classList.toggle("fa-eye");
        this.querySelector("i").classList.toggle("fa-eye-slash");
    });

    // Validation functions
    function validateFirstName() {
        const value = firstNameInput.value.trim();
        const requiredMessage = document.getElementById("first-name-required");
        const invalidMessage = document.getElementById("first-name-invalid");
        const lengthMessage = document.getElementById("first-name-length");

        // Reset visibility and label color
        requiredMessage.classList.add("hidden");
        invalidMessage.classList.add("hidden");
        lengthMessage.classList.add("hidden");
        toggleLabelError(firstNameInput, false);

        // Show appropriate error messages
        if (value === "") {
            requiredMessage.classList.remove("hidden");
            toggleLabelError(firstNameInput, true);
        } else if (!namePattern.test(value)) {
            invalidMessage.classList.remove("hidden");
            toggleLabelError(firstNameInput, true);
        } else if (value.length < 3) {
            lengthMessage.classList.remove("hidden");
            toggleLabelError(firstNameInput, true);
        }

        return value !== "" && namePattern.test(value) && value.length >= 3;
    }

    function validateLastName() {
        const value = lastNameInput.value.trim();
        const requiredMessage = document.getElementById("last-name-required");
        const invalidMessage = document.getElementById("last-name-invalid");
        const lengthMessage = document.getElementById("last-name-length");

        // Reset visibility and label color
        requiredMessage.classList.add("hidden");
        invalidMessage.classList.add("hidden");
        lengthMessage.classList.add("hidden");
        toggleLabelError(lastNameInput, false);

        // Show appropriate error messages
        if (value === "") {
            requiredMessage.classList.remove("hidden");
            toggleLabelError(lastNameInput, true);
        } else if (!namePattern.test(value)) {
            invalidMessage.classList.remove("hidden");
            toggleLabelError(lastNameInput, true);
        } else if (value.length < 3) {
            lengthMessage.classList.remove("hidden");
            toggleLabelError(lastNameInput, true);
        }

        return value !== "" && namePattern.test(value) && value.length >= 3;
    }

    function validatePhone() {
        const value = phoneInput.value.trim();
        const requiredMessage = document.getElementById("phone-required");
        const invalidMessage = document.getElementById("phone-number-invalid");

        // Reset visibility and label color
        requiredMessage.classList.add("hidden");
        invalidMessage.classList.add("hidden");
        toggleLabelError(phoneInput, false);

        // Show appropriate error messages
        if (value === "") {
            requiredMessage.classList.remove("hidden");
            toggleLabelError(phoneInput, true);
        } else if (value.length < 11) {
            invalidMessage.classList.remove("hidden");
            toggleLabelError(phoneInput, true);
        }

        return value !== "" && value.length >= 11;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const requiredMessage = document.getElementById("email-required");
        const invalidMessage = document.getElementById("email-invalid");

        // Reset visibility and label color
        requiredMessage.classList.add("hidden");
        invalidMessage.classList.add("hidden");
        toggleLabelError(emailInput, false);

        // Show appropriate error messages
        if (value === "") {
            requiredMessage.classList.remove("hidden");
            toggleLabelError(emailInput, true);
        } else if (!emailPattern.test(value)) {
            invalidMessage.classList.remove("hidden");
            toggleLabelError(emailInput, true);
        }

        return value !== "" && emailPattern.test(value);
    }

    function validatePassword() {
        const value = passwordInput.value.trim();
        const requiredMessage = document.getElementById("password-required");
        const invalidMessage = document.getElementById("password-invalid");

        // Reset visibility and label color
        requiredMessage.classList.add("hidden");
        invalidMessage.classList.add("hidden");
        toggleLabelError(passwordInput, false);

        // Show appropriate error messages
        if (value === "") {
            requiredMessage.classList.remove("hidden");
            toggleLabelError(passwordInput, true);
        } else if (!passwordPattern.test(value)) {
            invalidMessage.classList.remove("hidden");
            toggleLabelError(passwordInput, true);
        }

        return value !== "" && passwordPattern.test(value);
    }

    function validateDropdown() {
        const countryError = document.getElementById("country-required");
        const isCountrySelected = dropdownSelected.textContent.trim() !== "Choose Country";
        countryError.classList.toggle("hidden", isCountrySelected);
        return isCountrySelected;
    }

    // Validate all fields on form submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isCountryValid = validateDropdown();

        if (isFirstNameValid && isLastNameValid && isPhoneValid && isEmailValid && isPasswordValid && isCountryValid && checkbox.checked) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            alert("Please fix the errors and try again.");
        }
    });

    // Dropdown functionality
    dropdownSelected.addEventListener("click", function () {
        dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
    });

    dropdownOptions.addEventListener("click", function (event) {
        const selectedItem = event.target.closest(".dropdown-item");
        if (selectedItem) {
            dropdownSelected.textContent = selectedItem.textContent.trim();
            dropdownOptions.style.display = "none";
        }
    });

    // Add real-time validation for inputs
    firstNameInput.addEventListener("input", validateFirstName);
    lastNameInput.addEventListener("input", validateLastName);
    phoneInput.addEventListener("input", validatePhone);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
});
