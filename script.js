document.addEventListener('DOMContentLoaded', () => {
    console.log('RAAHTECH site loaded successfully.');

    fetch("/partials/header.html")
        .then(res => res.text())
        .then(data => document.querySelector("header").innerHTML = data);

    fetch("/partials/footer.html")
        .then(res => res.text())
        .then(data => document.querySelector("footer").innerHTML = data);
});

// Smooth scroll for buttons
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
});

// Placeholder for carousel animations
const carousel = document.querySelector('.carousel');
// Add motion-enhanced effects here
