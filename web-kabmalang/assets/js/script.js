// Mengatur slider otomatis
let currentSlide = 0;
const slides = ["slider1.jpg", "slider2.jpg"];

function changeSlide() {
    document.querySelector(".jumbotron").style.backgroundImage = `url("assets/image/${slides[currentSlide]}")`;

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}
setInterval(changeSlide, 2000);

// dropdown
function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}