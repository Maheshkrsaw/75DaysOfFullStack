// --- 1. MOCK DATA ---
const coins = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 42500.50, change: 2.4, chart: [41000, 41500, 41200, 42100, 42500] },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2250.80, change: -1.2, chart: [2300, 2280, 2290, 2260, 2250] },
    { id: 'solana', name: 'Solana', symbol: 'SOL', price: 98.40, change: 5.6, chart: [90, 92, 95, 94, 98] },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', price: 310.20, change: 0.5, chart: [308, 309, 310, 310, 310] },
    { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.55, change: -3.1, chart: [0.58, 0.57, 0.56, 0.55, 0.55] }
];

// --- 2. RENDER TABLE ---
function renderMarketTable(containerId) {
    const container = document.getElementById(containerId);
    if(!container) return;

    container.innerHTML = coins.map(coin => {
        const colorClass = coin.change >= 0 ? 'var(--green)' : 'var(--red)';
        const sign = coin.change >= 0 ? '+' : '';
        // Mock Chart (Sparkline) using simpler visual for table
        return `
        <tr onclick="window.location.href='trade.html?coin=${coin.id}'">
            <td>
                <div class="coin-name">
                    <img src="https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}" class="coin-icon">
                    <div>
                        <span>${coin.name}</span> <span style="color:var(--text-dim)">${coin.symbol}</span>
                    </div>
                </div>
            </td>
            <td>$${coin.price.toLocaleString()}</td>
            <td style="color:${colorClass}">${sign}${coin.change}%</td>
            <td>$12.5B</td>
            <td><button class="btn" style="padding:5px 15px; font-size:12px;">Trade</button></td>
        </tr>
        `;
    }).join('');
}

// --- 3. CHART RENDERING (Chart.js) ---
function renderMainChart() {
    const ctx = document.getElementById('priceChart');
    if(!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            datasets: [{
                label: 'Bitcoin Price',
                data: [42100, 42300, 42150, 42400, 42200, 42500],
                borderColor: '#fcd535',
                backgroundColor: 'rgba(252, 213, 53, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false, color: '#2b3139' } },
                y: { grid: { color: '#2b3139' } }
            }
        }
    });
}

// --- 4. TRADE LOGIC ---
function calculateTrade() {
    const amount = document.getElementById('amount').value;
    const price = 42500; // Static for demo, typically dynamic
    const total = (amount * price).toFixed(2);
    document.getElementById('total-val').innerText = `$${Number(total).toLocaleString()}`;
}

function executeTrade(type) {
    const btn = document.getElementById(`${type}-btn`);
    const originalText = btn.innerText;
    
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing`;
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = `<i class="fas fa-check"></i> Success`;
        btn.style.background = type === 'buy' ? 'var(--green)' : 'var(--red)';
        btn.style.color = 'white';
        
        setTimeout(() => {
            alert(`${type.toUpperCase()} Order Executed Successfully!`);
            window.location.href = "dashboard.html";
        }, 1000);
    }, 1500);
}

// --- 5. SIDEBAR TOGGLE ---
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}