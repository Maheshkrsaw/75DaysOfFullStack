// --- MOCK DATABASE ---
const courses = [
    {
        id: 1, title: "Complete Web Development Bootcamp", instructor: "Mahesh Kumar",
        price: "$49.99", rating: 4.8, students: "12k",
        img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80",
        desc: "Learn HTML, CSS, JS, React and Node.js from scratch.",
        category: "coding"
    },
    {
        id: 2, title: "UI/UX Design Masterclass", instructor: "Sarah Smith",
        price: "$39.99", rating: 4.9, students: "8k",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=600&q=80",
        desc: "Master Figma and Adobe XD to design stunning apps.",
        category: "design"
    },
    {
        id: 3, title: "Digital Marketing Zero to Hero", instructor: "John Doe",
        price: "$29.99", rating: 4.5, students: "15k",
        img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&q=80",
        desc: "SEO, Social Media, Email Marketing strategy guide.",
        category: "marketing"
    },
    {
        id: 4, title: "Python for Data Science", instructor: "David Lee",
        price: "$59.99", rating: 4.7, students: "20k",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
        desc: "Data analysis using Pandas, NumPy and Matplotlib.",
        category: "data"
    }
];

// --- 1. LOAD COURSES (Grid) ---
function loadCourses(containerId, limit = 0) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let displayData = limit > 0 ? courses.slice(0, limit) : courses;
    
    // Check Wishlist for Red Heart Logic
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    container.innerHTML = displayData.map(course => {
        let isSaved = wishlist.includes(course.id);
        let heartColor = isSaved ? 'color: red;' : 'color: #ccc;';
        let heartClass = isSaved ? 'fas fa-heart' : 'far fa-heart';

        return `
        <div class="course-card">
            <span class="badge">${course.category}</span>
            <img src="${course.img}" class="thumb">
            <div class="course-info">
                <div class="meta">
                    <span><i class="fas fa-user"></i> ${course.students}</span>
                    <span><i class="fas fa-star" style="color:orange;"></i> ${course.rating}</span>
                </div>
                <h3>${course.title}</h3>
                <p style="font-size:14px; color:#777; margin:5px 0;">by ${course.instructor}</p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="price">${course.price}</span>
                    <button onclick="toggleWishlist(${course.id})" style="background:none; border:none; font-size:20px; cursor:pointer;">
                        <i class="${heartClass}" style="${heartColor}" id="heart-${course.id}"></i>
                    </button>
                </div>
                <a href="course-detail.html?id=${course.id}" class="btn" style="display:block; text-align:center; margin-top:15px;">View Course</a>
            </div>
        </div>
        `;
    }).join('');
}

// --- 2. WISHLIST TOGGLE (Red Heart Logic) ---
function toggleWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let icon = document.getElementById(`heart-${id}`);

    if (wishlist.includes(id)) {
        // Remove
        wishlist = wishlist.filter(item => item !== id);
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '#ccc';
    } else {
        // Add
        wishlist.push(id);
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = 'red';
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// --- 3. LOAD DETAILS (Tabs & Accordion) ---
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const course = courses.find(c => c.id == id);

    if (course) {
        document.getElementById('course-img').src = course.img;
        document.getElementById('course-title').innerText = course.title;
        document.getElementById('course-desc').innerText = course.desc;
        document.getElementById('course-price').innerText = course.price;
        document.getElementById('enroll-btn').onclick = () => enrollCourse(course.id);
    }
}

// --- 4. TABS LOGIC ---
function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    let tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// --- 5. ENROLL LOGIC ---
function enrollCourse(id) {
    let myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];
    if (!myCourses.includes(id)) {
        myCourses.push(id);
        localStorage.setItem('myCourses', JSON.stringify(myCourses));
        alert("Enrolled Successfully! Go to Dashboard.");
        window.location.href = "dashboard.html";
    } else {
        alert("You are already enrolled!");
        window.location.href = "dashboard.html";
    }
}

// --- 6. LOAD DASHBOARD ---
function loadDashboard() {
    const container = document.getElementById('my-courses-container');
    if (!container) return;

    let myIds = JSON.parse(localStorage.getItem('myCourses')) || [];
    let myCourses = courses.filter(c => myIds.includes(c.id));

    if (myCourses.length === 0) {
        container.innerHTML = "<p>No enrolled courses yet.</p>";
        return;
    }

    container.innerHTML = myCourses.map(course => {
        let progress = Math.floor(Math.random() * 100); // Random progress for demo
        return `
        <div class="course-card">
            <img src="${course.img}" class="thumb">
            <div class="course-info">
                <h3>${course.title}</h3>
                <div class="progress-bg">
                    <div class="progress-fill" style="width:${progress}%"></div>
                </div>
                <p style="font-size:12px; color:#777;">${progress}% Completed</p>
                <a href="learn.html?id=${course.id}" class="btn" style="display:block; text-align:center; margin-top:15px; background:var(--secondary); color:black;">Continue Learning</a>
            </div>
        </div>
        `;
    }).join('');
}