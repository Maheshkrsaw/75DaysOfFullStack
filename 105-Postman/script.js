// --- Elements ---
const urlInput = document.getElementById('url');
const methodSelect = document.getElementById('method');
const jsonInput = document.getElementById('json-input');
const headersInput = document.getElementById('headers-input');
const sendBtn = document.getElementById('send-btn');

const responseOutput = document.getElementById('response-output');
const statusBadge = document.getElementById('status-badge');
const statusCode = document.getElementById('status-code');
const timeBadge = document.getElementById('time-badge');
const timeMs = document.getElementById('time-ms');

// --- Tab Switching Logic ---
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    
    // Simple logic based on index or text
    if(tabName === 'json') {
        tabs[0].classList.add('active');
        jsonInput.classList.remove('hidden');
        headersInput.classList.add('hidden');
    } else {
        tabs[1].classList.add('active');
        headersInput.classList.remove('hidden');
        jsonInput.classList.add('hidden');
    }
}

// --- Parse Headers ---
function parseHeaders(headerString) {
    const headers = {};
    const lines = headerString.split('\n');
    lines.forEach(line => {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join(':').trim();
            if(key && value) headers[key] = value;
        }
    });
    return headers;
}

// --- Send Request Logic ---
async function sendRequest() {
    const url = urlInput.value;
    const method = methodSelect.value;
    const startTime = performance.now();

    if(!url) {
        alert("Please enter a URL!");
        return;
    }

    // UI Updates
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    responseOutput.innerText = "Loading...";
    statusBadge.classList.add('hidden');
    timeBadge.classList.add('hidden');

    // Prepare Options
    let options = {
        method: method,
        headers: parseHeaders(headersInput.value)
    };

    // If POST or PUT, add body
    if (method === 'POST' || method === 'PUT') {
        try {
            // Validate JSON
            const bodyData = JSON.parse(jsonInput.value);
            options.body = JSON.stringify(bodyData);
            
            // Auto-add Content-Type if missing
            if(!options.headers['Content-Type']) {
                options.headers['Content-Type'] = 'application/json';
            }
        } catch (e) {
            alert("Invalid JSON in request body!");
            sendBtn.innerHTML = 'Send <i class="fas fa-paper-plane"></i>';
            return;
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const endTime = performance.now();

        // Calculate Time
        const duration = (endTime - startTime).toFixed(0);

        // Update UI
        updateResponseUI(response.status, duration, data);

    } catch (error) {
        responseOutput.innerText = "Error: " + error.message;
        statusBadge.classList.add('hidden');
    } finally {
        sendBtn.innerHTML = 'Send <i class="fas fa-paper-plane"></i>';
    }
}

// --- Update UI Helper ---
function updateResponseUI(status, time, data) {
    // Status
    statusCode.innerText = status;
    statusBadge.classList.remove('hidden', 'success', 'error');
    if(status >= 200 && status < 300) statusBadge.classList.add('success');
    else statusBadge.classList.add('error');

    // Time
    timeMs.innerText = time;
    timeBadge.classList.remove('hidden');

    // Format JSON (Pretty Print)
    // We can just dump the text, or add syntax highlighting logic here if we wanted to be fancy
    responseOutput.innerHTML = syntaxHighlight(JSON.stringify(data, null, 4));
}

// --- Syntax Highlighting Helper (Makes it look pro) ---
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}