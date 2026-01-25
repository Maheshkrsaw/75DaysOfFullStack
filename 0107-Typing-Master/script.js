const typingText = document.querySelector(".typing-text");
const inputField = document.querySelector(".input-field");
const timeTag = document.querySelector("#time");
const wpmTag = document.querySelector("#wpm");
const accuracyTag = document.querySelector("#accuracy");
const restartBtn = document.querySelector(".restart-btn");
const modal = document.querySelector("#result-modal");

let timer,
maxTime = 30,
timeLeft = maxTime,
charIndex = 0,
mistakes = 0,
isTyping = false;

// Random Words Data
const words = [
    "technology", "programming", "javascript", "developer", "interface", 
    "keyboard", "monitor", "application", "internet", "website", 
    "design", "algorithm", "database", "security", "network", 
    "cloud", "variable", "function", "array", "object", 
    "loop", "condition", "framework", "library", "react", 
    "python", "syntax", "compiler", "debugging", "browser", 
    "server", "client", "response", "request", "domain"
];

function loadParagraph() {
    // 1. Reset everything
    modal.classList.remove("show");
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inputField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    accuracyTag.innerText = "100%";
    
    // 2. Generate Random Text (approx 30 words)
    let paragraph = "";
    for(let i=0; i<30; i++) {
        const randIndex = Math.floor(Math.random() * words.length);
        paragraph += words[randIndex] + " ";
    }
    
    // 3. Inject into HTML as individual spans
    typingText.innerHTML = "";
    paragraph.split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    
    // 4. Set first character active
    typingText.querySelectorAll("span")[0].classList.add("active");
    
    // 5. Focus Input (Click anywhere to focus logic)
    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];

    if(charIndex < characters.length - 1 && timeLeft > 0) {
        // Start timer on first keypress
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        // Handle Backspace
        if(typedChar == null) {
            charIndex--;
            if(characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        } else {
            // Logic: Compare typed char with shown char
            if(characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }

        // Move cursor (active class)
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        // Calculate Stats
        // Accuracy
        let accuracy = Math.floor(((charIndex - mistakes) / charIndex) * 100);
        accuracyTag.innerText = `${accuracy}%`;

        // WPM: (Total Chars / 5) / (Time Elapsed / 60)
        // Note: We use 5 chars as average word length
        let timeElapsed = maxTime - timeLeft;
        if(timeElapsed > 0) {
            let wpm = Math.round(((charIndex - mistakes) / 5) / (timeElapsed / 60));
            wpmTag.innerText = wpm;
        }
    } else {
        clearInterval(timer);
        finishTest();
    }
}

function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        
        // Dynamic WPM update
        let wpm = Math.round(((charIndex - mistakes) / 5) / ((maxTime - timeLeft) / 60));
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        finishTest();
    }
}

function finishTest() {
    inputField.value = "";
    modal.classList.add("show");
    
    // Set Final Scores
    document.getElementById("final-wpm").innerText = wpmTag.innerText;
    document.getElementById("final-acc").innerText = accuracyTag.innerText;
    document.getElementById("final-errors").innerText = mistakes;
}

inputField.addEventListener("input", initTyping);
restartBtn.addEventListener("click", loadParagraph);

// Initialize on Load
loadParagraph();