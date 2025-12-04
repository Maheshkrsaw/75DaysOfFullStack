const reelsFeed = document.getElementById("reelsFeed");

const users = ["cat_daily", "travel_vlog", "doggo_life", "nature_love", "tech_world"];
const captions = [
  "When you realize it's Friday! 😺💃",
  "Running into the weekend like... 😂",
  "My dog thinks he is human! 🐶👔",
  "Nature always wins 🌿",
  "Coding all night 💻🔥"
];

for (let i = 1; i <= 5; i++) {
  const reel = document.createElement("div");
  reel.classList.add("reel");

  reel.innerHTML = `
    <video class="reel-video" loop muted playsinline src="asset/${i}.mp4"></video>

    <div class="mute-overlay">
      <i class="fa-solid fa-volume-xmark" style="font-size: 30px;"></i>
    </div>

    <div class="actions-col">
      <div class="action-btn like-btn">
        <i class="fa-solid fa-heart"></i>
        <span class="action-text">${Math.floor(Math.random() * 100)}K</span>
      </div>
      <div class="action-btn">
        <i class="fa-regular fa-comment-dots"></i>
        <span class="action-text">${Math.floor(Math.random() * 1000)}</span>
      </div>
      <div class="action-btn">
        <i class="fa-regular fa-paper-plane"></i>
      </div>
      <div class="action-btn">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div class="music-disc">
        <img src="https://source.unsplash.com/50x50/?music,random&sig=${i}">
      </div>
    </div>

    <div class="reel-info">
      <div class="user-row">
<img src="https://picsum.photos/50/50?random=${i}" class="user-thumb">
        <span class="username">${users[i - 1]}</span>
        <button class="follow-btn">Follow</button>
      </div>

      <div class="caption">${captions[i - 1]}</div>

      <div class="music-row">
        <i class="fa-solid fa-music" style="font-size: 10px;"></i>
        <marquee scrollamount="4" style="width:150px;">
          Original Audio • Trending
        </marquee>
      </div>
    </div>
  `;

  reelsFeed.appendChild(reel);
}



// Video Logic
const videos = document.querySelectorAll('video');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
            entry.target.currentTime = 0;
        }
    });
}, { threshold: 0.6 });

videos.forEach(video => {
    observer.observe(video);
    
    // Tap to Mute Toggle
    video.addEventListener('click', () => {
        video.muted = !video.muted;
        const overlay = video.nextElementSibling;
        overlay.innerHTML = video.muted ? '<i class="fa-solid fa-volume-xmark" style="font-size: 30px;"></i>' : '<i class="fa-solid fa-volume-high" style="font-size: 30px;"></i>';
        overlay.classList.add('show');
        setTimeout(() => overlay.classList.remove('show'), 1000);
    });
});

// Interactions
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
        const icon = btn.querySelector('i');
        icon.style.color = btn.classList.contains('liked') ? '#ff3040' : 'white';
    });
});

document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.innerText === "Follow") {
            btn.innerText = "Following";
            btn.style.background = "transparent";
            btn.style.border = "1px solid rgba(255,255,255,0.3)";
        } else {
            btn.innerText = "Follow";
            btn.style.border = "1px solid rgba(255,255,255,0.6)";
        }
    });
});