const submitButton = document.getElementById('send-message-button');
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', sendmessage);

function sendmessage(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset(); 
}

