document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const transitionOverlay = document.querySelector('.page-transition');
    const signupLink = document.querySelector('.login-footer a');

    // Handle Page Transition
    if (signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = signupLink.getAttribute('href');

            // Activate transition
            transitionOverlay.classList.add('active');

            // Wait for animation to finish before navigating
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800); // Matches CSS transition duration
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        if (!emailInput.value || !passwordInput.value) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate login (replace with actual API call)
        console.log('Logging in with:', {
            email: emailInput.value,
            password: passwordInput.value
        });

        alert('Login functionality would be implemented here.');
    });
});
