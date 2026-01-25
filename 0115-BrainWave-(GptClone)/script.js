// --- 1. DOM ELEMENTS ---
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// --- 2. MOCK AI RESPONSES ---
const aiDatabase = {
    "hello": "Hello! How can I help you today?",
    "who are you": "I am BrainWave, an advanced AI language model designed to assist you.",
    "code": "Here is a Python example:\n\nprint('Hello World')\n\nIs there anything else you need?",
    "default": "I'm processing that request. Could you elaborate further?"
};

// --- 3. SEND MESSAGE LOGIC ---
function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Add User Message
    addMessage(text, 'user');
    userInput.value = '';

    // 2. Simulate "Thinking" (Delay)
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        // 3. Generate AI Response
        const response = getAIResponse(text);
        addMessage(response, 'ai');
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
    }, 1500);
}

// --- 4. ADD MESSAGE TO UI ---
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message-row', sender);
    
    const avatar = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-brain"></i>';
    
    div.innerHTML = `
        <div class="avatar ${sender}">${avatar}</div>
        <div class="message-content"></div> 
    `;
    
    chatWindow.appendChild(div);
    
    // Auto Scroll
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // If AI, trigger typing effect
    if(sender === 'ai') {
        const contentDiv = div.querySelector('.message-content');
        typeWriter(contentDiv, text);
    } else {
        div.querySelector('.message-content').innerText = text;
    }
}

// --- 5. TYPEWRITER EFFECT (The "Cool" Part) ---
function typeWriter(element, text) {
    let index = 0;
    element.classList.add('typing-cursor');
    
    const interval = setInterval(() => {
        element.innerText += text.charAt(index);
        index++;
        
        // Auto scroll while typing
        chatWindow.scrollTop = chatWindow.scrollHeight;

        if(index === text.length) {
            clearInterval(interval);
            element.classList.remove('typing-cursor');
        }
    }, 30); // Speed of typing
}

// --- 6. SIMPLE AI LOGIC ---
function getAIResponse(input) {
    input = input.toLowerCase();
    for (let key in aiDatabase) {
        if (input.includes(key)) return aiDatabase[key];
    }
    return aiDatabase['default'];
}

// --- 7. ENTER KEY SUPPORT ---
if(userInput) {
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });
}

// --- 8. MOBILE SIDEBAR ---
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}