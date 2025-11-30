const dateNum = document.getElementById('date-num');
const dayName = document.getElementById('day-name');
const monthName = document.getElementById('month-name');
const yearNum = document.getElementById('year-num');

function updateCalendar() {
    const now = new Date();

    // 1. Set Date (1-31)
    dateNum.innerText = now.getDate();

    // 2. Set Day Name (Monday, Tuesday...)
    dayName.innerText = now.toLocaleString('en-US', { weekday: 'long' });

    // 3. Set Month Name (January, February...)
    monthName.innerText = now.toLocaleString('en-US', { month: 'long' });

    // 4. Set Year (2023, 2024...)
    yearNum.innerText = now.getFullYear();
}

// Run logic immediately upon load
updateCalendar();
