// --- Elements ---
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output');
const sizeBadge = document.getElementById('size-badge');

// --- Load Saved Code (LocalStorage) ---
// This ensures your work isn't lost on refresh
function loadSavedCode() {
    const savedHTML = localStorage.getItem('codecraft-html');
    const savedCSS = localStorage.getItem('codecraft-css');
    const savedJS = localStorage.getItem('codecraft-js');

    if(savedHTML) htmlCode.value = savedHTML;
    if(savedCSS) cssCode.value = savedCSS;
    if(savedJS) jsCode.value = savedJS;
}

// --- The Core Logic: Update Iframe ---
function run() {
    // 1. Save to LocalStorage
    localStorage.setItem('codecraft-html', htmlCode.value);
    localStorage.setItem('codecraft-css', cssCode.value);
    localStorage.setItem('codecraft-js', jsCode.value);

    // 2. Construct the full HTML document string
    // We inject the CSS in <style> and JS in <script>
    const code = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${cssCode.value}
            </style>
        </head>
        <body>
            ${htmlCode.value}
            <script>
                // Wrap JS in try-catch to prevent iframe crashing
                try {
                    ${jsCode.value}
                } catch(err) {
                    console.error(err);
                }
            <\/script>
        </body>
        </html>
    `;

    // 3. Write to the Iframe
    // we use open(), write(), close() to completely refresh the iframe
    output.contentDocument.open();
    output.contentDocument.write(code);
    output.contentDocument.close();
}

// --- Event Listeners ---
// Run the run() function whenever the user types keyup
htmlCode.addEventListener('keyup', run);
cssCode.addEventListener('keyup', run);
jsCode.addEventListener('keyup', run);

// --- Window Resize Badge ---
// Shows the pixel width of the preview window (useful for responsive testing)
window.addEventListener('resize', () => {
    sizeBadge.innerText = output.offsetWidth + 'px';
});

// --- Download Feature (Pro Level) ---
function downloadCode() {
    const fullCode = `
<!DOCTYPE html>
<html>
<head>
    <style>${cssCode.value}</style>
</head>
<body>
    ${htmlCode.value}
    <script>${jsCode.value}</script>
</body>
</html>`;

    // Create a Blob (Binary Large Object)
    const blob = new Blob([fullCode], { type: 'text/html' });
    
    // Create a fake link to trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'index.html';
    
    // Click it programmatically
    link.click();
}

function saveCode() {
    // Just a visual feedback, since we auto-save on keyup
    const btn = document.querySelector('.btn-dark');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check"></i> Saved';
    setTimeout(() => {
        btn.innerHTML = originalText;
    }, 1500);
}

// Initialize
loadSavedCode();
run(); // Run once on load to show content