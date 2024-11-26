
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const togglePassword = document.querySelector(".show-password");
    const passwordIcon = togglePassword.querySelector("i");

    console.log(togglePassword);
    

   // Toggle password visibility on button click
   togglePassword.addEventListener("click", () => {
    // console.log('test');
    
    // Check current input type
    const isPasswordHidden = passwordInput.getAttribute("type") === "password";

    // Toggle input type
    passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");

    // Toggle icon class
    if (isPasswordHidden) {
        passwordIcon.classList.remove("fa-eye"); // Remove "show" icon
        passwordIcon.classList.add("fa-eye-slash"); // Add "hide" icon
    } else {
        passwordIcon.classList.remove("fa-eye-slash"); // Remove "hide" icon
        passwordIcon.classList.add("fa-eye"); // Add "show" icon
    }
});
});

// Form Validation
    loginForm.addEventListener("submit", function (event) {
        let isValid = true;

        // Validate Email
        if (!emailInput.value.trim()) {
            emailError.classList.remove("hidden");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
        }

        // Validate Password
        if (!passwordInput.value.trim()) {
            passwordError.classList.remove("hidden");
            isValid = false;
        } else {
            passwordError.classList.add("hidden");
        }

        // Prevent Submission if Invalid
        if (!isValid) {
            event.preventDefault();
        }
    });

