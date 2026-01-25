// --- 1. Initialize Mock Data if LocalStorage is empty ---
const initialJobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Bangalore", type: "Full Time", salary: "₹8L - ₹12L", desc: "We need a React expert with 2 years of experience." },
    { id: 2, title: "UI/UX Designer", company: "CreativeStudio", location: "Remote", type: "Contract", salary: "₹50k/mo", desc: "Design mobile apps using Figma and Adobe XD." },
    { id: 3, title: "Backend Engineer", company: "DataSystems", location: "Delhi", type: "Full Time", salary: "₹15L - ₹20L", desc: "Node.js and MongoDB specialist required." },
    { id: 4, title: "Content Writer", company: "BuzzMedia", location: "Mumbai", type: "Part Time", salary: "₹20k/mo", desc: "Write engaging blogs for tech products." }
];

if (!localStorage.getItem('jobs')) {
    localStorage.setItem('jobs', JSON.stringify(initialJobs));
}

// --- 2. Global Variables ---
const jobs = JSON.parse(localStorage.getItem('jobs'));
const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

// --- 3. Functions for Specific Pages ---

// Load Jobs for Home/Listing Page
function loadJobs(containerId, limit = 0) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let displayJobs = limit > 0 ? jobs.slice(0, limit) : jobs;

    container.innerHTML = displayJobs.map(job => `
        <div class="job-card">
            <div class="job-info">
                <h3>${job.title}</h3>
                <p>${job.company} • ${job.location}</p>
                <div class="tags" style="margin-top:10px;">
                    <span>${job.type}</span>
                    <span>${job.salary}</span>
                </div>
            </div>
            <a href="details.html?id=${job.id}" class="btn-view">View Details</a>
        </div>
    `).join('');
}

// Post New Job
function handlePostJob(e) {
    e.preventDefault();
    const newJob = {
        id: Date.now(),
        title: document.getElementById('title').value,
        company: document.getElementById('company').value,
        location: document.getElementById('location').value,
        type: document.getElementById('type').value,
        salary: document.getElementById('salary').value,
        desc: document.getElementById('desc').value
    };
    
    jobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    alert("Job Posted Successfully!");
    window.location.href = "jobs.html";
}

// Load Job Details
function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const job = jobs.find(j => j.id == id);

    if (job) {
        document.getElementById('job-title').innerText = job.title;
        document.getElementById('job-company').innerText = `${job.company} • ${job.location}`;
        document.getElementById('job-desc').innerText = job.desc;
        document.getElementById('job-meta').innerHTML = `<span>${job.type}</span> • <span>${job.salary}</span>`;
        
        // Setup Apply Button
        const btn = document.getElementById('apply-btn');
        btn.onclick = () => applyJob(job);
    }
}

// Apply for Job
function applyJob(job) {
    const alreadyApplied = appliedJobs.find(j => j.id == job.id);
    if(alreadyApplied) {
        alert("You have already applied!");
        return;
    }
    appliedJobs.push(job);
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    alert("Applied Successfully!");
}

// Load Applied Jobs
function loadApplied() {
    const container = document.getElementById('applied-container');
    if(!container) return;

    if(appliedJobs.length === 0) {
        container.innerHTML = "<p>No jobs applied yet.</p>";
        return;
    }

    container.innerHTML = appliedJobs.map(job => `
        <div class="job-card">
            <div class="job-info">
                <h3>${job.title}</h3>
                <p>${job.company}</p>
            </div>
            <button class="btn-view" style="background:#2ecc71; color:white; border:none;">Applied <i class="fas fa-check"></i></button>
        </div>
    `).join('');
}

// --- 4. Search Functionality ---
function searchJobs() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(input) || 
        job.company.toLowerCase().includes(input)
    );
    // Reuse the render logic manually for search results
    const container = document.getElementById('jobs-container');
    container.innerHTML = filtered.map(job => `
        <div class="job-card">
            <div class="job-info">
                <h3>${job.title}</h3>
                <p>${job.company} • ${job.location}</p>
                <div class="tags"><span>${job.type}</span><span>${job.salary}</span></div>
            </div>
            <a href="details.html?id=${job.id}" class="btn-view">View Details</a>
        </div>
    `).join('');
}