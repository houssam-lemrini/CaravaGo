// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Help dropdown
    const helpDropdown = document.querySelector('.help-dropdown');
    const helpLink = document.querySelector('.help-link');
    
    if (helpLink) {
        helpLink.addEventListener('click', function(e) {
            e.preventDefault();
            helpDropdown.classList.toggle('active');
            // Close user dropdown if open
            document.querySelector('.user-dropdown')?.classList.remove('active');
        });
    }
    
    // User dropdown
    const userDropdown = document.querySelector('.user-dropdown');
    const userIcon = document.getElementById('user-icon');
    
    if (userIcon) {
        userIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
            // Close help dropdown if open
            document.querySelector('.help-dropdown')?.classList.remove('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            
            if (themeIcon) {
                themeIcon.textContent = isDark ? '☀️' : '🌙';
            }
            
            // Save theme preference
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});

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