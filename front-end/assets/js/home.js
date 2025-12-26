// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Search functionality
document.querySelector('.btn-search')?.addEventListener('click', function() {
    const pickup = document.getElementById('pickup-location')?.value;
    const dates = document.getElementById('travel-dates')?.value;
    
    if (pickup && dates) { 
        // Add your search logic here
        console.log('Searching for:', pickup, dates);
        alert(`Searching for RVs in ${pickup} from ${dates}`);
    } else {
        alert('Please fill in both location and dates');
    }
});

// Newsletter subscription
document.querySelector('.btn-newsletter')?.addEventListener('click', function() {
    const email = document.getElementById('newsletter-email')?.value;
    
    if (email && email.includes('@')) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// City buttons interaction
document.querySelectorAll('.city-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.city-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Country buttons interaction
document.querySelectorAll('.country-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.country-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});