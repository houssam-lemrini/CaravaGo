document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

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
