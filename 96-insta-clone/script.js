// --- Like Button Animation ---
const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('liked');
        const icon = this.querySelector('i');
        if (this.classList.contains('liked')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.animation = 'likeBounce 0.3s';
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.animation = 'none';
        }
    });
});

// --- Follow Button Logic ---
const followLinks = document.querySelectorAll('.follow-link');

followLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (this.innerText === 'Follow') {
            this.innerText = 'Following';
            this.classList.add('following');
            this.style.color = '#262626';
        } else {
            this.innerText = 'Follow';
            this.classList.remove('following');
            this.style.color = '#0095f6';
        }
    });
});

// --- STORY MODAL LOGIC ---
const stories = document.querySelectorAll('.story');
const modal = document.getElementById('storyModal');
const storyImg = document.getElementById('storyImage');
const closeBtn = document.querySelector('.close-story');

stories.forEach(story => {
    story.addEventListener('click', () => {
        // Get the high-res story image from the data attribute
        const storySource = story.getAttribute('data-story');
        if(storySource) {
            storyImg.src = storySource;
            modal.classList.add('active');
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    storyImg.src = ""; // Clear src to stop playing/loading
});

// Close modal when clicking outside image
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('active');
        storyImg.src = "";
    }
});