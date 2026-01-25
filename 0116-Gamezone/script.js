// --- 1. MOCK DATA ---
const games = [
    { id: 1, title: "Cyberpunk 2077", category: "RPG", price: "$59.99", rating: 4.5, img: "https://images.unsplash.com/photo-1607896426171-99097eb60cb6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3liZXJwdW5rJTIwMjA3N3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, title: "Elden Ring", category: "Action", price: "$49.99", rating: 4.9, img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80" },
    { id: 3, title: "Call of Duty: MW2", category: "Shooter", price: "$69.99", rating: 4.2, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80" },
    { id: 4, title: "FIFA 24", category: "Sports", price: "$39.99", rating: 4.0, img: "https://images.unsplash.com/photo-1606490114832-d41056bdca34?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZJRkF8ZW58MHx8MHx8fDA%3D" },
    { id: 5, title: "God of War", category: "Adventure", price: "$49.99", rating: 4.8, img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&q=80" },
    { id: 6, title: "Valorant Points", category: "Currency", price: "$10.00", rating: 4.7, img: "https://plus.unsplash.com/premium_photo-1682141882061-c7676602e111?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8fDA%3D" }
];

// --- 2. RENDER GAMES ---
function renderGames(containerId, limit=0) {
    const container = document.getElementById(containerId);
    if(!container) return;

    let displayData = limit > 0 ? games.slice(0, limit) : games;

    container.innerHTML = displayData.map(game => `
        <div class="game-card">
            <img src="${game.img}" class="card-img">
            <div class="card-info">
                <div class="game-meta">
                    <span style="background:#222; padding:3px 8px; border-radius:4px;">${game.category}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${game.rating}</span>
                </div>
                <h3 class="game-title">${game.title}</h3>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
                    <span class="price">${game.price}</span>
                    <a href="details.html?id=${game.id}" class="btn" style="font-size:12px; padding:8px 15px;">Buy</a>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 3. MOBILE MENU ---
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
        menuBtn.classList.toggle('fa-bars');
    };
}

// --- 4. DETAILS PAGE LOGIC ---
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const game = games.find(g => g.id == id);
    
    if(game) {
        document.getElementById('g-title').innerText = game.title;
        document.getElementById('g-price').innerText = game.price;
        document.getElementById('g-cat').innerText = game.category;
        document.getElementById('g-img').src = game.img;
    }
}

// --- 5. BUY BUTTON INTERACTION ---
function buyNow(btn) {
    btn.innerHTML = 'Adding...';
    setTimeout(() => {
        btn.innerHTML = 'IN CART';
        btn.style.background = 'var(--secondary)';
        btn.style.color = 'black';
        alert("Game added to cart!");
    }, 1000);
}