document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const togglePassword = document.querySelector(".show-password");
    const passwordIcon = togglePassword.querySelector("i");

    // Ensure error messages are hidden by default
    emailError.classList.add("hidden");
    passwordError.classList.add("hidden");

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        const isPasswordHidden = passwordInput.getAttribute("type") === "password";

        // Toggle input type
        passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");

        // Update the icon
        passwordIcon.classList.toggle("fa-eye", !isPasswordHidden);
        passwordIcon.classList.toggle("fa-eye-slash", isPasswordHidden);
    });

    // Handle form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        let formIsValid = true;

        // Validate email
        if (!emailInput.value.trim()) {
            emailError.textContent = "Required";
            emailError.classList.remove("hidden");
            formIsValid = false;
        } else {
            emailError.classList.add("hidden");
        }

        // Validate password
        if (!passwordInput.value.trim()) {
            passwordError.textContent = "Required";
            passwordError.classList.remove("hidden");
            formIsValid = false;
        } else {
            passwordError.classList.add("hidden");
        }

        // Proceed if the form is valid
        if (formIsValid) {
            console.log("Form is valid. Proceed with login.");
            // Add your login logic here
        }
    });
});

