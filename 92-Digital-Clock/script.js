function updateClock() {
    const now = new Date();
    
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Add leading zeros if number is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update the HTML Elements
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

// Run immediately when page loads
updateClock();

// Then run every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);