// ==============================
// KRITIKA REFRIGERATION
// script.js
// ==============================

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0,
    rootMargin: "100px 0px"
});

sections.forEach((section) => {

    // Keep Services visible
    if (section.id === "services") {
        return;
    }

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);

});

// Header background on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
    } else {
        header.style.background = "rgba(0,0,0,0.75)";
    }
});

// Welcome message
window.addEventListener("load", () => {
    document.querySelectorAll("section").forEach(section => {
        if (section.id === "services") {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

const slider=document.getElementById("slider");

document.querySelector(".next").addEventListener("click",()=>{

slider.scrollBy({

left:450,

behavior:"smooth"

});

});

document.querySelector(".prev").addEventListener("click",()=>{

slider.scrollBy({

left:-450,

behavior:"smooth"

});

});

const swiper = new Swiper(".gallerySwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    loop: true,

    slidesPerView: "auto",

    speed: 1000,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    coverflowEffect: {

        rotate: 0,

        stretch: 0,

        depth: 250,

        modifier: 2,

        scale: 0.9,

        slideShadows: false,

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

});

