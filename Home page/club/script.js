// JavaScript for automatic transition and scroll button
let currentIndex = 0;
const events = document.querySelectorAll('.events-carousel .event-card');
const totalEvents = events.length;

function showNextEvent() {
    events[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalEvents;
    events[currentIndex].classList.add('active');
}

// Initialize the first event
events[currentIndex].classList.add('active');

// Transition every 5 seconds
setInterval(showNextEvent, 5000);

// Scroll button functionality
const scrollButton = document.querySelector('.scroll-button');
scrollButton.addEventListener('click', showNextEvent);


