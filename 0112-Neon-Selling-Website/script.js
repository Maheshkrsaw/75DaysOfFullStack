// --- 1. MOBILE MENU TOGGLE ---
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
        // Icon change logic
        if(navLinks.classList.contains('active')) {
            menuBtn.classList.remove('fa-bars');
            menuBtn.classList.add('fa-times');
        } else {
            menuBtn.classList.remove('fa-times');
            menuBtn.classList.add('fa-bars');
        }
    }
}

// --- 2. MOCK DATA ---
const nfts = [
    { id: 1, name: "Cyber Skull #001", creator: "@neo_artist", price: "0.5 ETH", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80", category: "art" },
    { id: 2, name: "Neon City", creator: "@future_dev", price: "1.2 ETH", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&q=80", category: "art" },
    { id: 3, name: "Space Walker", creator: "@astro_boy", price: "0.8 ETH", img: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&q=80", category: "3d" },
    { id: 4, name: "Abstract Wave", creator: "@color_master", price: "0.3 ETH", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", category: "abstract" },
    { id: 5, name: "Glitch Face", creator: "@hacker_art", price: "2.5 ETH", img: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&q=80", category: "art" },
    { id: 6, name: "Golden Ape", creator: "@monkey_biz", price: "5.0 ETH", img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&q=80", category: "3d" }
];

// --- 3. LOAD CARDS ---
function loadNFTs(containerId, limit=0) {
    const container = document.getElementById(containerId);
    if(!container) return;

    let displayData = limit > 0 ? nfts.slice(0, limit) : nfts;

    container.innerHTML = displayData.map(item => `
        <div class="card">
            <img src="${item.img}" class="card-img">
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-author"><i class="fas fa-check-circle" style="color:var(--primary)"></i> ${item.creator}</p>
                <div class="card-footer">
                    <div>
                        <span class="price-label">Current Bid</span>
                        <span class="price-val">${item.price}</span>
                    </div>
                    <a href="details.html?id=${item.id}" class="btn" style="font-size:12px; padding:8px 15px;">Place Bid</a>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 4. DETAILS PAGE LOGIC ---
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const nft = nfts.find(n => n.id == id);

    if(nft) {
        document.getElementById('nft-img').src = nft.img;
        document.getElementById('nft-title').innerText = nft.name;
        document.getElementById('nft-creator').innerText = nft.creator;
        document.getElementById('nft-price').innerText = nft.price;
    }
}

// --- 5. CONNECT WALLET LOGIC ---
function connectWallet() {
    const btn = document.getElementById('connect-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
    
    setTimeout(() => {
        btn.innerHTML = '0x12...89B <i class="fas fa-wallet"></i>';
        btn.style.background = 'transparent';
        btn.style.border = '1px solid var(--primary)';
        alert('Wallet Connected Successfully!');
        localStorage.setItem('walletConnected', 'true');
    }, 1500);
}

// Check wallet status on load
window.onload = () => {
    if(localStorage.getItem('walletConnected') === 'true') {
        const btns = document.querySelectorAll('.wallet-trigger');
        btns.forEach(btn => {
             btn.innerHTML = '0x12...89B <i class="fas fa-wallet"></i>';
        });
    }
}