// --- API CONFIG ---
const API_URL = 'https://api.tvmaze.com';

// --- DOM ELEMENTS ---
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-links li');
const trendingGrid = document.getElementById('trending-grid');
const searchGrid = document.getElementById('search-results');
const detailsContent = document.getElementById('details-content');
const favoritesGrid = document.getElementById('favorites-grid');
const searchInput = document.getElementById('search-input');

let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

// --- NAVIGATION LOGIC ---
function showPage(pageId) {
    // Hide all views
    views.forEach(view => view.classList.remove('active'));
    // Show selected view
    document.getElementById(`${pageId}-page`).classList.add('active');
    
    // Update Navbar Active State
    navLinks.forEach(link => link.classList.remove('active-nav'));
    // Find the link that corresponds to this page (simple check)
    if(pageId === 'home') navLinks[0].classList.add('active-nav');
    if(pageId === 'search') navLinks[1].classList.add('active-nav');
    if(pageId === 'favorites') {
        navLinks[2].classList.add('active-nav');
        renderFavorites();
    }
}

// --- FETCH DATA (HOME PAGE) ---
async function fetchTrending() {
    try {
        // Fetching "Schedule" as a proxy for trending/popular items today
        const res = await fetch(`${API_URL}/schedule?country=US`);
        const data = await res.json();
        
        // Take first 12 items
        displayShows(data.slice(0, 12), trendingGrid);
    } catch (error) {
        trendingGrid.innerHTML = '<p>Error loading data. Check internet.</p>';
    }
}

// --- SEARCH LOGIC ---
async function searchShows() {
    const query = searchInput.value;
    if (!query) return;

    searchGrid.innerHTML = '<div class="loader">Loading...</div>';
    
    try {
        const res = await fetch(`${API_URL}/search/shows?q=${query}`);
        const data = await res.json();
        // The search API returns object { score: 123, show: { ... } }
        const shows = data.map(item => item.show);
        displayShows(shows, searchGrid);
    } catch (error) {
        searchGrid.innerHTML = '<p>Something went wrong.</p>';
    }
}

// --- DISPLAY HELPER ---
function displayShows(shows, container) {
    container.innerHTML = '';
    
    if (shows.length === 0) {
        container.innerHTML = '<p>No results found.</p>';
        return;
    }

    shows.forEach(show => {
        // Handle missing images
        const image = show.image ? show.image.medium : 'https://via.placeholder.com/210x295/111/fff?text=No+Image';
        const rating = show.rating.average ? show.rating.average : 'N/A';
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${image}" alt="${show.name}">
            <div class="card-info">
                <h3>${show.name}</h3>
                <span>⭐ ${rating}</span>
            </div>
        `;
        // Click to view details
        card.addEventListener('click', () => openDetails(show.id));
        container.appendChild(card);
    });
}

// --- DETAILS PAGE LOGIC ---
async function openDetails(id) {
    showPage('details');
    detailsContent.innerHTML = '<div class="loader">Loading Details...</div>';

    try {
        const res = await fetch(`${API_URL}/shows/${id}?embed=cast`);
        const show = await res.json();

        const image = show.image ? show.image.original : 'https://via.placeholder.com/400x600';
        // Strip HTML tags from summary
        const summary = show.summary ? show.summary.replace(/<[^>]*>?/gm, '') : 'No summary available.';
        
        // Check if already in favorites
        const isFav = favorites.some(fav => fav.id === show.id);
        const btnText = isFav ? 'Remove from Favorites' : 'Add to Favorites';
        const btnClass = isFav ? 'btn-danger' : 'btn-primary';

        detailsContent.innerHTML = `
            <div class="details-layout">
                <img src="${image}" class="details-img">
                <div class="details-info">
                    <h1>${show.name}</h1>
                    <div class="details-meta">
                        <span>${show.premiered ? show.premiered.split('-')[0] : 'N/A'}</span>
                        <span>${show.rating.average || '-'} ⭐</span>
                        <span>${show.runtime || '-'} min</span>
                    </div>
                    <div class="genres">
                        ${show.genres.map(g => `<span>${g}</span>`).join('')}
                    </div>
                    <p style="margin: 20px 0; line-height: 1.6;">${summary}</p>
                    <button class="${btnClass}" style="padding:15px; cursor:pointer;" onclick="toggleFavorite(${show.id}, '${show.name.replace(/'/g, "\\'")}', '${show.image ? show.image.medium : ''}')">
                        ${btnText} <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

    } catch (error) {
        detailsContent.innerHTML = '<p>Error loading details.</p>';
    }
}

// --- FAVORITES LOGIC (LocalStorage) ---
function toggleFavorite(id, name, image) {
    const index = favorites.findIndex(f => f.id === id);
    
    if (index === -1) {
        // Add
        favorites.push({ id, name, image });
        alert('Added to Favorites!');
    } else {
        // Remove
        favorites.splice(index, 1);
        alert('Removed from Favorites!');
    }
    
    // Save to local storage
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
    // Refresh details page button (simple reload approach for now)
    openDetails(id); 
}

function renderFavorites() {
    favoritesGrid.innerHTML = '';
    if(favorites.length === 0) {
        favoritesGrid.innerHTML = '<p class="placeholder-text">No favorites yet. Go add some!</p>';
        return;
    }
    
    // Reuse the card style but with minimal data
    favorites.forEach(fav => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${fav.image || 'https://via.placeholder.com/210'}" alt="${fav.name}">
            <div class="card-info">
                <h3>${fav.name}</h3>
            </div>
        `;
        card.addEventListener('click', () => openDetails(fav.id));
        favoritesGrid.appendChild(card);
    });
}

// --- INIT ---
fetchTrending();