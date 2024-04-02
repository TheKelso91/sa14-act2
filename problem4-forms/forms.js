const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    // Username validation
    if (usernameInput.value.trim().length < 6) {
        displayError(usernameInput, 'Username must be at least 6 characters.');
        isValid = false;
    } else {
        clearError(usernameInput);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
    if (!emailRegex.test(emailInput.value)) {
        displayError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 chars, 1 uppercase, 1 digit
    if (!passwordRegex.test(passwordInput.value)) {
        displayError(passwordInput, 'Password must be at least 8 characters, contain one uppercase letter and one digit.');
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    if (isValid) {
        alert('Registration Successful!');
    }
});

function displayError(inputElement, message) {
    const errorSpan = inputElement.nextElementSibling;
    errorSpan.textContent = message;
}

function clearError(inputElement) {
    const errorSpan = inputElement.nextElementSibling;
    errorSpan.textContent = '';
}
