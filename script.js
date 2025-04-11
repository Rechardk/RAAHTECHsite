document.addEventListener('DOMContentLoaded', () => {
    console.log('RAAHTECH site loaded successfully.');

    // Inject Header and Footer
    fetch('/partials/header.html')
        .then(res => res.text())
        .then(data => document.querySelector('header').innerHTML = data)
        .catch(err => {
            console.error('Error loading header:', err);
            alert('Failed to load header. Please try again later.');
        });

    fetch('/partials/footer.html')
        .then(res => res.text())
        .then(data => document.querySelector('footer').innerHTML = data)
        .catch(err => {
            console.error('Error loading footer:', err);
            alert('Failed to load footer. Please try again later.');
        });

    // Dark Mode Toggle
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.innerText = '🌑';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌑';
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggle.innerText = '☀️';
    }

    // Initialize AOS Animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
    });
});

// Smooth scroll for buttons
document.querySelectorAll('.cta-button').forEach(button => {
    if (button) {
        button.addEventListener('click', () => {
            const target = document.querySelector('.services');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Target element for smooth scroll not found.');
            }
        });
    }
});

// Placeholder for carousel animations
const carousel = document.querySelector('.carousel');
if (carousel) {
    let isScrolling = false;

    carousel.addEventListener('mouseenter', () => (isScrolling = false));
    carousel.addEventListener('mouseleave', () => (isScrolling = true));

    setInterval(() => {
        if (isScrolling) {
            carousel.scrollBy({ left: 1, behavior: 'smooth' });
        }
    }, 30);
}
