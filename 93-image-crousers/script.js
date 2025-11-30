const track = document.getElementById('track');

// Configuration
const speed = 2.5; 
const cardWidth = 300; // Must match CSS width
const gap = 40;        // Must match CSS gap
const numberOfOriginalCards = 6; // We have 6 unique cards (doubled in HTML)

// Calculate total width of one set of images
const singleSetWidth = (cardWidth + gap) * numberOfOriginalCards;

// Listen for the scroll event
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Infinite Loop Logic:
    // 1. Calculate base movement based on scroll speed
    // 2. Use Modulo (%) to reset the position every time we scroll past 'singleSetWidth'
    // 3. Subtract 'singleSetWidth' to start from the left side (negative value) so we move Right
    
    const xPos = -singleSetWidth + ((scrollY * speed) % singleSetWidth);

    // Apply transformation
    track.style.transform = `translateX(${xPos}px)`;
});