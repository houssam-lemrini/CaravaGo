document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const transitionOverlay = document.querySelector('.page-transition');
    const loginLink = document.querySelector('.signup-footer a');

    // Handle Page Transition
    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = loginLink.getAttribute('href');

            // Activate transition
            transitionOverlay.classList.add('active');

            // Wait for animation to finish before navigating
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800); // Matches CSS transition duration
        });
    }

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match!');
            return;
        }

        // Simulate signup (replace with actual API call)
        console.log('Signing up with:', {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            password: passwordInput.value
        });

        alert('Signup functionality would be implemented here.');
    });
});
