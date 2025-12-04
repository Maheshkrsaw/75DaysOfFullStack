// Mobile Menu Logic
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const logo = document.querySelector('.logo');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Toggle icon
    const icon = mobileToggle.querySelector('i');
    if(mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        logo.style.color = '#3b2825'; // Ensure logo is visible on menu bg
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        // Reset logo color logic if needed based on scroll position
    }
});

// Close menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.querySelector('i').classList.remove('fa-times');
        mobileToggle.querySelector('i').classList.add('fa-bars');
    });
});

console.log("VITA Clinic Mobile Responsive Loaded");