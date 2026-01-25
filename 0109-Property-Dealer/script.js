// --- 1. MOCK DATA (Database) ---
const properties = [
    {
        id: 1,
        title: "Luxury Villa with Pool",
        location: "Beverly Hills, CA",
        price: "$4,500,000",
        beds: 5, baths: 4, sqft: 4200,
        img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "An stunning modern villa featuring a private infinity pool, home theater, and panoramic city views."
    },
    {
        id: 2,
        title: "Modern Downtown Apartment",
        location: "New York, NY",
        price: "$1,200,000",
        beds: 2, baths: 2, sqft: 1500,
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Located in the heart of Manhattan, this apartment offers floor-to-ceiling windows and smart home integration."
    },
    {
        id: 3,
        title: "Cozy Countryside Cottage",
        location: "Nashville, TN",
        price: "$850,000",
        beds: 3, baths: 2, sqft: 2100,
        img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Escape to nature in this beautiful wooden cottage surrounded by forests and hiking trails."
    },
    {
        id: 4,
        title: "Beachfront Mansion",
        location: "Miami, FL",
        price: "$6,200,000",
        beds: 6, baths: 5, sqft: 5500,
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Direct beach access, private dock, and sunset views make this the ultimate luxury getaway."
    },
    {
        id: 5,
        title: "Minimalist Studio",
        location: "Tokyo, Japan",
        price: "$600,000",
        beds: 1, baths: 1, sqft: 800,
        img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Ultra-modern design with efficient use of space, located near the famous Shibuya crossing."
    },
    {
        id: 6,
        title: "Historic Victorian Home",
        location: "London, UK",
        price: "$2,800,000",
        beds: 4, baths: 3, sqft: 3000,
        img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "A classic Victorian home with original architecture, renovated interiors, and a private garden."
    }
];

// --- 2. SCROLL REVEAL LOGIC (The Animation) ---
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// --- 3. LOAD PROPERTIES (Grid) ---
function loadProperties(containerId, limit = 0) {
    const container = document.getElementById(containerId);
    if(!container) return;

    let displayData = limit > 0 ? properties.slice(0, limit) : properties;

    container.innerHTML = displayData.map(item => `
        <div class="card reveal">
            <div class="card-img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="card-info">
                <span class="price">${item.price}</span>
                <h3>${item.title}</h3>
                <p style="color:#888; margin-bottom:10px;"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
                <div class="features">
                    <span><i class="fas fa-bed"></i> ${item.beds} Beds</span>
                    <span><i class="fas fa-bath"></i> ${item.baths} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${item.sqft} sqft</span>
                </div>
                <div style="display:flex; gap:10px;">
                    <a href="details.html?id=${item.id}" class="btn" style="flex:1; text-align:center;">View Details</a>
                    <button onclick="saveProperty(${item.id})" style="padding:0 15px; border:1px solid #ddd; background:white; cursor:pointer;"><i class="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 4. LOAD DETAILS (Single Page) ---
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const item = properties.find(p => p.id == id);

    if(item) {
        document.getElementById('detail-img').src = item.img;
        document.getElementById('detail-title').innerText = item.title;
        document.getElementById('detail-price').innerText = item.price;
        document.getElementById('detail-loc').innerText = item.location;
        document.getElementById('detail-desc').innerText = item.desc;
        document.getElementById('feat-beds').innerText = item.beds + ' Beds';
        document.getElementById('feat-baths').innerText = item.baths + ' Baths';
        document.getElementById('feat-sqft').innerText = item.sqft + ' sqft';
    }
}

// --- 5. SAVE PROPERTY (Wishlist) ---
function saveProperty(id) {
    let saved = JSON.parse(localStorage.getItem('savedHomes')) || [];
    if(saved.includes(id)) {
        alert("Already saved!");
    } else {
        saved.push(id);
        localStorage.setItem('savedHomes', JSON.stringify(saved));
        alert("Property Saved to Wishlist!");
    }
}

// --- 6. LOAD SAVED ---
function loadSaved() {
    const container = document.getElementById('saved-container');
    if(!container) return;
    
    let savedIds = JSON.parse(localStorage.getItem('savedHomes')) || [];
    let savedProps = properties.filter(p => savedIds.includes(p.id));

    if(savedProps.length === 0) {
        container.innerHTML = "<p>No saved properties yet.</p>";
        return;
    }

    // Reuse the card logic
    container.innerHTML = savedProps.map(item => `
        <div class="card reveal">
            <div class="card-img"><img src="${item.img}"></div>
            <div class="card-info">
                <span class="price">${item.price}</span>
                <h3>${item.title}</h3>
                <a href="details.html?id=${item.id}" class="btn">View Details</a>
            </div>
        </div>
    `).join('');
}