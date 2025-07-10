const submitButton = document.getElementById('send-message-button');
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', sendmessage);

const text = "Gudella Akhil";
const typingEl = document.getElementById('typing');
let index = 0;
let isDeleting = false;

const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

function sendmessage(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset(); 
}

function typeLoop() {
    if (!isDeleting) {
        typingEl.textContent = text.substring(0, index + 1);
        index++;
      if (index === text.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1000);
        return;
      }
    } else {
        typingEl.textContent = text.substring(0, index - 1);
        index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeLoop, isDeleting ? 150 : 200); 
}

document.querySelector('.phone-link').addEventListener('click', (e) => {
  if (!isMobile) {
    e.preventDefault();
    alert("Calling is supported only on mobile devices or with VoIP apps like Skype.");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  typeLoop();
});





