document.addEventListener('DOMContentLoaded', () => {
    console.log('RAAHTECH site loaded successfully.');

    fetch("/partials/header.html")
        .then(res => res.text())
        .then(data => document.querySelector("header").innerHTML = data)
        .catch(err => console.error("Error loading header:", err));

    fetch("/partials/footer.html")
        .then(res => res.text())
        .then(data => document.querySelector("footer").innerHTML = data)
        .catch(err => console.error("Error loading footer:", err));

    // Dark Mode Toggle
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.innerText = '🌑';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌑';
    });
});

// Smooth scroll for buttons
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
});

// Placeholder for carousel animations
const carousel = document.querySelector('.carousel');
let isScrolling = false;

carousel.addEventListener('mouseenter', () => (isScrolling = false));
carousel.addEventListener('mouseleave', () => (isScrolling = true));

setInterval(() => {
    if (isScrolling) {
        carousel.scrollBy({ left: 1, behavior: 'smooth' });
    }
}, 30);

// Initialize AOS Animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});
