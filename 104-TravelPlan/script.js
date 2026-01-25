// --- TAB SWITCHING LOGIC ---
const tabBtns = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.booking-form');

function openTab(tabName) {
    // 1. Remove active class from all buttons
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // 2. Hide all forms
    forms.forEach(form => form.classList.remove('active-form'));

    // 3. Activate clicked button (We find it by matching the onclick logic or just event)
    // Simple way: Loop to find the one that matches the argument
    // But since we are calling this inline, we need to handle visual state manually or pass 'this'
    // Let's use a simpler approach for the buttons visual state:
    
    if(tabName === 'flights') {
        tabBtns[0].classList.add('active');
        document.getElementById('flights').classList.add('active-form');
    } else {
        tabBtns[1].classList.add('active');
        document.getElementById('hotels').classList.add('active-form');
    }
}

// --- POPULATE DESTINATIONS (Data) ---
const destinations = [
    {
        city: "Bali, Indonesia",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        desc: "Tropical paradise with beautiful beaches.",
        price: "$850"
    },
    {
        city: "Paris, France",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        desc: "The city of love, art, and culture.",
        price: "$1,200"
    },
    {
        city: "Kyoto, Japan",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        desc: "Historic temples and traditional gardens.",
        price: "$1,500"
    },
    {
        city: "Santorini, Greece",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        desc: "White buildings and blue waters.",
        price: "$980"
    }
];

const grid = document.getElementById('destination-grid');

function renderDestinations() {
    grid.innerHTML = '';
    
    destinations.forEach(dest => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${dest.img}" alt="${dest.city}">
            <div class="card-info">
                <h3>${dest.city}</h3>
                <p>${dest.desc}</p>
                <div class="card-footer">
                    <span class="price">${dest.price}</span>
                    <button style="padding:8px 15px; border:none; background:#e2e8f0; border-radius:5px; cursor:pointer;">Details</button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Init
renderDestinations();

// Search Button Animation (Simple alert for demo)
document.querySelectorAll('.btn-search').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        setTimeout(() => {
            alert('This would connect to a real flight API!');
            btn.innerText = 'Search Again';
        }, 1500);
    });
});