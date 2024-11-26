
document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById("resetForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailForm");
    const resetButton = document.querySelector(".reset-btn");

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
        return emailRegex.test(email);
    }

    // Event listener to validate email in real-time
    emailInput.addEventListener("input", () => {
        const emailValue = emailInput.value.trim();

        if (isValidEmail(emailValue)) {
            emailError.classList.add("hidden"); // Hide the error message if the email is valid
            resetButton.disabled = false; // Enable the button if the email is valid
        } else {
            emailError.textContent = "Invalid email address"; // Display error message
            emailError.classList.remove("hidden");
            resetButton.disabled = true; // Disable the button if the email is invalid
        }
    });

    // Prevent form submission if email is invalid
    resetForm.addEventListener("submit", (event) => {
        if (!isValidEmail(emailInput.value.trim())) {
            event.preventDefault(); // Stop form submission
            emailError.textContent = "Invalid email address";
            emailError.classList.remove("hidden");
        } else {
            emailError.classList.add("hidden"); // Hide error message if valid
            console.log("Form submitted with valid email:", emailInput.value);
        }
    });

    // Initialize button as disabled by default
    resetButton.disabled = true;
});
