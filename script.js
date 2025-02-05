// Countdown Timer
const weddingDate = new Date("December 15, 2025 16:00:00").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        timerElement.innerHTML = "The wedding has begun! 🎉";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days} days, ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// RSVP Form Handling
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value;

    document.getElementById("rsvp-message").innerHTML = `Thank you, ${name}! We have received your RSVP for ${guests} guests.`;
    
    this.reset();
});

let index = 0;
let autoSlideInterval;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    updateCarousel();
}

function setSlide(newIndex) {
    index = newIndex;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(${-index * 100}%)`;

    // Actualizar los indicadores
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Reiniciar auto-slide
    resetAutoSlide();
}

// Auto-avanza cada 4 segundos
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 4000);
}

// Reiniciar auto-slide cuando el usuario interactúa
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Iniciar el auto-slide al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    autoSlide();
    updateCarousel();
});
