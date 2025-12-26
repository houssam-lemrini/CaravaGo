// Password visibility toggle
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Toggle password visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = togglePassword.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }

    // Toggle confirm password visibility
    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener('click', function() {
            const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordInput.setAttribute('type', type);
            
            const icon = toggleConfirmPassword.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }

    // Password strength checker
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            checkPasswordStrength(passwordInput.value);
        });
    }

    // Form validation
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
        setupSignupValidation();
    }

    if (signinForm) {
        signinForm.addEventListener('submit', handleSignin);
        setupSigninValidation();
    }
});

// Password strength checker
function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    
    if (!strengthBar || !strengthText) return;

    let strength = 0;
    let feedback = '';

    // Length check
    if (password.length >= 8) strength++;
    else feedback = 'Use at least 8 characters';

    // Lowercase check
    if (/[a-z]/.test(password)) strength++;
    else if (!feedback) feedback = 'Add lowercase letters';

    // Uppercase check
    if (/[A-Z]/.test(password)) strength++;
    else if (!feedback) feedback = 'Add uppercase letters';

    // Number check
    if (/[0-9]/.test(password)) strength++;
    else if (!feedback) feedback = 'Add numbers';

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    else if (!feedback) feedback = 'Add special characters';

    // Update UI
    strengthBar.className = 'strength-bar';
    if (password.length === 0) {
        strengthText.textContent = 'Password strength';
        return;
    }

    if (strength <= 2) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'Weak password';
        strengthText.style.color = '#E53E3E';
    } else if (strength <= 4) {
        strengthBar.classList.add('medium');
        strengthText.textContent = 'Medium password';
        strengthText.style.color = '#F6AD55';
    } else {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'Strong password';
        strengthText.style.color = '#38A169';
    }
}

// Setup signup validation
function setupSignupValidation() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');

    // Real-time validation
    if (firstName) {
        firstName.addEventListener('blur', () => validateName(firstName, 'firstNameError'));
    }

    if (lastName) {
        lastName.addEventListener('blur', () => validateName(lastName, 'lastNameError'));
    }

    if (email) {
        email.addEventListener('blur', () => validateEmail(email, 'emailError'));
    }

    if (phone) {
        phone.addEventListener('blur', () => validatePhone(phone, 'phoneError'));
    }

    if (password) {
        password.addEventListener('blur', () => validatePassword(password, 'passwordError'));
    }

    if (confirmPassword && password) {
        confirmPassword.addEventListener('blur', () => validateConfirmPassword(password, confirmPassword, 'confirmPasswordError'));
    }

    if (terms) {
        terms.addEventListener('change', () => validateTerms(terms, 'termsError'));
    }
}

// Setup signin validation
function setupSigninValidation() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (email) {
        email.addEventListener('blur', () => validateEmail(email, 'emailError'));
    }

    if (password) {
        password.addEventListener('blur', () => validatePassword(password, 'passwordError'));
    }
}

// Validation functions
function validateName(input, errorId) {
    const errorElement = document.getElementById(errorId);
    const value = input.value.trim();
    
    if (!value) {
        showError(input, errorElement, 'This field is required');
        return false;
    }
    
    if (value.length < 2) {
        showError(input, errorElement, 'Name must be at least 2 characters');
        return false;
    }
    
    if (!/^[a-zA-Z\s-']+$/.test(value)) {
        showError(input, errorElement, 'Name can only contain letters, spaces, hyphens, and apostrophes');
        return false;
    }
    
    showSuccess(input, errorElement);
    return true;
}

function validateEmail(input, errorId) {
    const errorElement = document.getElementById(errorId);
    const value = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!value) {
        showError(input, errorElement, 'Email is required');
        return false;
    }
    
    if (!emailRegex.test(value)) {
        showError(input, errorElement, 'Please enter a valid email address');
        return false;
    }
    
    showSuccess(input, errorElement);
    return true;
}

function validatePhone(input, errorId) {
    const errorElement = document.getElementById(errorId);
    const value = input.value.trim();
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    
    if (!value) {
        showError(input, errorElement, 'Phone number is required');
        return false;
    }
    
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
        showError(input, errorElement, 'Please enter a valid phone number');
        return false;
    }
    
    showSuccess(input, errorElement);
    return true;
}

function validatePassword(input, errorId) {
    const errorElement = document.getElementById(errorId);
    const value = input.value;
    
    if (!value) {
        showError(input, errorElement, 'Password is required');
        return false;
    }
    
    if (value.length < 8) {
        showError(input, errorElement, 'Password must be at least 8 characters');
        return false;
    }
    
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        showError(input, errorElement, 'Password must contain uppercase, lowercase, and numbers');
        return false;
    }
    
    showSuccess(input, errorElement);
    return true;
}

function validateConfirmPassword(passwordInput, confirmInput, errorId) {
    const errorElement = document.getElementById(errorId);
    const passwordValue = passwordInput.value;
    const confirmValue = confirmInput.value;
    
    if (!confirmValue) {
        showError(confirmInput, errorElement, 'Please confirm your password');
        return false;
    }
    
    if (passwordValue !== confirmValue) {
        showError(confirmInput, errorElement, 'Passwords do not match');
        return false;
    }
    
    showSuccess(confirmInput, errorElement);
    return true;
}

function validateTerms(checkbox, errorId) {
    const errorElement = document.getElementById(errorId);
    
    if (!checkbox.checked) {
        showError(checkbox, errorElement, 'You must agree to the terms and conditions');
        return false;
    }
    
    showSuccess(checkbox, errorElement);
    return true;
}

function showError(input, errorElement, message) {
    if (input) {
        input.classList.add('error');
        input.classList.remove('success');
    }
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = '#E53E3E';
    }
}

function showSuccess(input, errorElement) {
    if (input) {
        input.classList.remove('error');
        input.classList.add('success');
    }
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// Form submission handlers
function handleSignup(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');
    
    // Validate all fields
    const isValid = 
        validateName(firstName, 'firstNameError') &&
        validateName(lastName, 'lastNameError') &&
        validateEmail(email, 'emailError') &&
        validatePhone(phone, 'phoneError') &&
        validatePassword(password, 'passwordError') &&
        validateConfirmPassword(password, confirmPassword, 'confirmPasswordError') &&
        validateTerms(terms, 'termsError');
    
    if (!isValid) {
        // Scroll to first error
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('.btn-auth');
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Account created successfully! Redirecting to sign in...');
        window.location.href = '../signin/signin.html';
    }, 1500);
}

function handleSignin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Validate all fields
    const isValid = 
        validateEmail(email, 'emailError') &&
        validatePassword(password, 'passwordError');
    
    if (!isValid) {
        // Scroll to first error
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('.btn-auth');
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Signed in successfully! Redirecting...');
        window.location.href = '../home_page/home.html';
    }, 1500);
}

