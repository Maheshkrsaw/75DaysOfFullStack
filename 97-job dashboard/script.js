// Simple Toggle Logic for Save Button
const saveBtns = document.querySelectorAll('.save-btn');

saveBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            this.innerHTML = `Saved <i class="fa-solid fa-bookmark"></i>`;
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            this.innerHTML = `Save <i class="fa-regular fa-bookmark"></i>`;
        }
    });
});
