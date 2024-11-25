document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const passwordInput = document.querySelector('.password-input');
    const showPasswordButton = document.querySelector('.show-password');
    
    showPasswordButton.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
    });

    // Form submission
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically make an API call to your backend
        console.log('Login attempt with:', { email });
    });
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Optional: Add loading state to button
function setLoadingState(isLoading) {
    const button = document.querySelector('.login-btn');
    const buttonText = button.querySelector('span');
    
    if (isLoading) {
        button.disabled = true;
        buttonText.textContent = 'Logging in...';
    } else {
        button.disabled = false;
        buttonText.textContent = 'Login';
    }
}



