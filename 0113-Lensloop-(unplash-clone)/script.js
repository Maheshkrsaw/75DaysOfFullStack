// --- 1. MOCK DATA ---
const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&q=80", user: "John Doe", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", user: "Sarah Smith", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80", user: "Mike Ross", avatar: "https://randomuser.me/api/portraits/men/85.jpg" },
    { id: 4, src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80", user: "Anna Lee", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 5, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80", user: "Nature Boy", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 6, src: "https://images.unsplash.com/photo-1501854140884-074cf2b2c7c8?w=600&q=80", user: "Sky Walker", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
    { id: 7, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80", user: "Forest Gump", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 8, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", user: "Wild Life", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },

    // Added objects ↓↓↓↓↓
    { id: 9,  src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80", user: "Charlie Brown", avatar: "https://randomuser.me/api/portraits/men/19.jpg" },
    { id: 10, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80", user: "Lily Rose", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
    { id: 11, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", user: "David King", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 12, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", user: "Ocean Girl", avatar: "https://randomuser.me/api/portraits/women/54.jpg" },
    { id: 13, src: "https://images.unsplash.com/photo-1451188502541-13943edb6acb?w=600&q=80", user: "Galaxy Boy", avatar: "https://randomuser.me/api/portraits/men/17.jpg" },
    { id: 14, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", user: "Travel Queen", avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
    { id: 15, src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=600&q=80", user: "Coder Man", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 16, src: "https://images.unsplash.com/photo-1438109491414-7198515b166b?w=600&q=80", user: "Sunset Girl", avatar: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 17, src: "https://images.unsplash.com/photo-1441829266145-b7a2ba00f3c8?w=600&q=80", user: "Vintage Boy", avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
    { id: 18, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", user: "Adventure Girl", avatar: "https://randomuser.me/api/portraits/women/50.jpg" }
];


// --- 2. RENDER MASONRY GRID ---
function renderGrid(containerId, limit = 0) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let displayData = limit > 0 ? photos.slice(0, limit) : photos;

    container.innerHTML = displayData.map(photo => `
        <div class="pin-card" onclick="window.location.href='details.html?id=${photo.id}'">
            <img src="${photo.src}">
            <div class="overlay">
                <div class="overlay-top">
                    <button class="save-btn" onclick="event.stopPropagation(); toggleSave(this)">Save</button>
                </div>
                <div class="overlay-bottom">
                    <div style="display:flex; align-items:center; gap:8px; color:white; font-weight:600; font-size:14px; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
                        <img src="${photo.avatar}" style="width:30px; height:30px; border-radius:50%;">
                        <span>${photo.user}</span>
                    </div>
                    <button class="icon-btn" onclick="event.stopPropagation(); downloadImage(this)">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 3. MICRO-INTERACTIONS (The logic you asked for) ---

// FOLLOW Logic
function toggleFollow(btn) {
    // Check current state based on class or text
    if (btn.classList.contains('following')) {
        // Unfollow action
        btn.classList.remove('following');
        btn.innerText = "Follow";
    } else {
        // Follow action
        btn.classList.add('following');
        btn.innerText = "Following";
    }
}

// SAVE Logic (Pinterest style)
function toggleSave(btn) {
    if (btn.innerText === "Save") {
        btn.innerText = "Saved";
        btn.style.background = "black";
    } else {
        btn.innerText = "Save";
        btn.style.background = "#e60023"; // Red
    }
}

// LIKE Logic (Heart)
function toggleLike(btn) {
    const icon = btn.querySelector('i');
    const countSpan = btn.querySelector('span');
    let count = parseInt(countSpan.innerText);

    if (icon.classList.contains('fa-regular')) {
        // Liked
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = "#e60023"; // Red
        countSpan.innerText = count + 1;
        
        // Add a small bounce animation via CSS scale (optional, handled inline here)
        btn.style.transform = "scale(1.2)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
        
    } else {
        // Unliked
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = "#111"; // Black
        countSpan.innerText = count - 1;
    }
}

// DOWNLOAD Logic (Fake Loading)
function downloadImage(btn) {
    // Avoid multiple clicks
    if(btn.disabled) return;
    
    const icon = btn.querySelector('i');
    
    // 1. Loading State
    btn.disabled = true;
    if(icon) icon.className = "fas fa-spinner fa-spin"; // Spinner
    
    // 2. Success State (after 1.5s)
    setTimeout(() => {
        if(icon) icon.className = "fas fa-check";
        if(icon) icon.style.color = "green";
        
        // 3. Reset (after 3s)
        setTimeout(() => {
            if(icon) icon.className = "fas fa-download";
            if(icon) icon.style.color = "";
            btn.disabled = false;
        }, 2000);
    }, 1500);
    
    alert("Image downloading started...");
}

// --- 4. LOAD DETAILS ---
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const photo = photos.find(p => p.id == id);

    if (photo) {
        document.getElementById('det-img').src = photo.src;
        document.getElementById('det-avatar').src = photo.avatar;
        document.getElementById('det-user').innerText = photo.user;
    }
}