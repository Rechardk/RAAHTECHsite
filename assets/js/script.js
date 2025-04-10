// Initialize AOS animations
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});

// Fade-in text on page load
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = "opacity 2s ease-in-out";
        setTimeout(() => (el.style.opacity = 1), 100);
    });
});

// Scroll reveal sections
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll(".scroll-reveal").forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    section.style.transform = "translateY(20px)";
    observer.observe(section);
});

// Animated nav hover effects
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.transition = "color 0.3s ease, transform 0.3s ease";
        link.style.color = "#ff6600";
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "";
        link.style.transform = "";
    });
});

// Smooth scroll between sections
document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});
