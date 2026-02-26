// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Scroll Animations (Intersection Observer)
const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing after animation to save resources
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: '0px'
});

animatedElements.forEach(el => observer.observe(el));