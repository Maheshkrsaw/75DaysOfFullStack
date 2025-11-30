const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateName() {
    const name = document.getElementById('fullname').value;
    const container = document.getElementById('fullname').parentElement;

    if(name.length == 0) {
        nameError.innerHTML = "Name is required";
        container.classList.add('error');
        container.classList.remove('success');
        return false;
    }
    // Matches "Firstname Lastname"
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        container.classList.add('error');
        container.classList.remove('success');
        return false;
    }
    nameError.innerHTML = ""; 
    container.classList.add('success');
    container.classList.remove('error');
    return true;
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const container = document.getElementById('phone').parentElement;

    if(phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        container.classList.add('error');
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        container.classList.add('error');
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits please";
        container.classList.add('error');
        return false;
    }

    phoneError.innerHTML = "";
    container.classList.add('success');
    container.classList.remove('error');
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const container = document.getElementById('email').parentElement;

    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        container.classList.add('error');
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        container.classList.add('error');
        return false;
    }

    emailError.innerHTML = "";
    container.classList.add('success');
    container.classList.remove('error');
    return true;
}

function validateMessage() {
    const message = document.getElementById('message').value;
    const container = document.getElementById('message').parentElement;
    const required = 30;
    const left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + " more characters required";
        container.classList.add('error');
        return false;
    }

    messageError.innerHTML = "";
    container.classList.add('success');
    container.classList.remove('error');
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        validateName(); validatePhone(); validateEmail(); validateMessage();
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

// Prevent default submit for demo purposes
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
});
