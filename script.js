let currentIndex = 1;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`; // Fixed: Use backticks for template literals

    // Adjust index for seamless looping
    if (index === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = "translateX(-100%)"; // Fixed: Use quotes for string literals
            currentIndex = 1;
        }, 500);
    } else if (index === 0) {
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = `translateX(-${(totalSlides - 2) * 100}%)`; // Fixed: Use backticks for template literals
            currentIndex = totalSlides - 2;
        }, 500);
    } else {
        currentIndex = index;
    }
}
