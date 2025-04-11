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

    // Initialize AOS Animations with updated configuration for smoother effects
    AOS.init({
        duration: 600, // Reduced animation duration for a snappier feel
        easing: 'ease-out',
        once: true,
    });

    // Enhanced scroll reveal
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
<<<<<<< HEAD

    // Enhanced smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"], a[href^="/"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href').replace('/', '#'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1s ease-in-out';
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.1 });
        observer.observe(section);
    });
=======
>>>>>>> 4dff8672a5e691a25124e7f59613b343359d2853
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

// Smooth scroll enhancements
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
