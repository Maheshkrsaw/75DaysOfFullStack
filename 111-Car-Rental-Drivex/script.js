// --- 1. CAR DATA ---
const cars = [
    {
        id: 1, name: "Tesla Model S Plaid", category: "Electric", price: 250,
        speed: "1.9s", topSpeed: "200mph", seats: 5,
        img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800",
        desc: "The fastest accelerating car in production today."
    },
    {
        id: 2, name: "Porsche 911 GT3", category: "Sports", price: 450,
        speed: "3.2s", topSpeed: "198mph", seats: 2,
        img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D",
        desc: "Born from racing, built for the road."
    },
    {
        id: 3, name: "Range Rover Sport", category: "SUV", price: 300,
        speed: "4.3s", topSpeed: "176mph", seats: 7,
        img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800",
        desc: "Luxury meets off-road capability."
    },
    {
        id: 4, name: "Lamborghini Huracan", category: "Supercar", price: 900,
        speed: "2.9s", topSpeed: "202mph", seats: 2,
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800",
        desc: "A pure V10 emotional machine."
    },
    {
        id: 5, name: "Mercedes G-Wagon", category: "SUV", price: 500,
        speed: "4.5s", topSpeed: "130mph", seats: 5,
        img: "https://images.unsplash.com/photo-1709072246757-fb695e79c51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1lcmNlZGVzJTIwRy1XYWdvbnxlbnwwfHwwfHx8MA%3D%3D",
        desc: "The iconic off-roader with luxury interior."
    },
    {
        id: 6, name: "Audi RS e-tron GT", category: "Electric", price: 280,
        speed: "3.1s", topSpeed: "155mph", seats: 4,
        img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800",
        desc: "Electric performance with stunning design."
    }
];

// --- 2. LOAD FLEET (Catalog) ---
function loadFleet(containerId, limit = 0) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let displayData = limit > 0 ? cars.slice(0, limit) : cars;
    let garage = JSON.parse(localStorage.getItem('garage')) || [];

    container.innerHTML = displayData.map(car => {
        let isSaved = garage.includes(car.id);
        let iconClass = isSaved ? "fas fa-bookmark" : "far fa-bookmark";
        let color = isSaved ? "var(--primary)" : "var(--gray)";

        return `
        <div class="car-card reveal">
            <span class="badge">${car.category}</span>
            <img src="${car.img}" class="car-img">
            <div class="car-info">
                <h3 class="car-title">${car.name}</h3>
                <span class="car-price">$${car.price} / day</span>
                <div class="specs">
                    <span><i class="fas fa-tachometer-alt"></i> ${car.speed}</span>
                    <span><i class="fas fa-bolt"></i> ${car.topSpeed}</span>
                    <span><i class="fas fa-chair"></i> ${car.seats}</span>
                </div>
                <div style="display:flex; gap:10px;">
                    <a href="details.html?id=${car.id}" class="btn" style="flex:1; text-align:center;">Rent Now</a>
                    <button onclick="toggleGarage(${car.id})" style="background:none; border:1px solid #333; color:${color}; width:50px; cursor:pointer;">
                        <i class="${iconClass}" id="icon-${car.id}"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// --- 3. GARAGE LOGIC (Wishlist) ---
function toggleGarage(id) {
    let garage = JSON.parse(localStorage.getItem('garage')) || [];
    let icon = document.getElementById(`icon-${id}`);
    
    if(garage.includes(id)) {
        garage = garage.filter(item => item !== id);
        icon.classList.remove('fas'); icon.classList.add('far'); icon.style.color = "var(--gray)";
    } else {
        garage.push(id);
        icon.classList.remove('far'); icon.classList.add('fas'); icon.style.color = "var(--primary)";
    }
    localStorage.setItem('garage', JSON.stringify(garage));
}

// --- 4. DETAILS & CALCULATOR ---
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const car = cars.find(c => c.id == id);

    if (car) {
        document.getElementById('car-img').src = car.img;
        document.getElementById('car-name').innerText = car.name;
        document.getElementById('car-desc').innerText = car.desc;
        document.getElementById('base-price').innerText = car.price;
        
        // Setup Booking Button
        document.getElementById('book-btn').onclick = () => goToCheckout(car.id, car.price);
    }
}

// Calculate Total Price Live
function calculateTotal() {
    const start = new Date(document.getElementById('start-date').value);
    const end = new Date(document.getElementById('end-date').value);
    const pricePerDay = parseInt(document.getElementById('base-price').innerText);
    
    if(start && end && end > start) {
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const total = diffDays * pricePerDay;
        
        document.getElementById('total-days').innerText = diffDays;
        document.getElementById('total-price').innerText = total;
        document.getElementById('book-btn').disabled = false;
        document.getElementById('book-btn').style.opacity = 1;
    } else {
        document.getElementById('total-price').innerText = "0";
        document.getElementById('book-btn').disabled = true;
        document.getElementById('book-btn').style.opacity = 0.5;
    }
}

// --- 5. CHECKOUT FLOW ---
function goToCheckout(id, price) {
    const days = document.getElementById('total-days').innerText;
    const total = document.getElementById('total-price').innerText;
    
    // Pass data via URL to checkout page
    window.location.href = `checkout.html?id=${id}&days=${days}&total=${total}`;
}

// --- 6. ANIMATION TRIGGER ---
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});