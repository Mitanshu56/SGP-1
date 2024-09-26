let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            highlightEventCard(this.realIndex);
        }
    }
});

// Function to highlight the event card based on the current slide index
function highlightEventCard(slideIndex) {
    // Remove the highlight from all event cards
    let eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => card.classList.remove('highlight-event'));

    // Highlight the corresponding event card
    if (eventCards[slideIndex]) {
        eventCards[slideIndex].classList.add('highlight-event');
    }
}
