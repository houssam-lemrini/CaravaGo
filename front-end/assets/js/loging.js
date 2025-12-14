document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

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
