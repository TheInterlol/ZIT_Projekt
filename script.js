document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('#img_slider .slider_image');
    let currentIndex = 0;
    const fadeDuration = 1000;
    const stayDuration = 3000;
    const totalLifeTime = fadeDuration + stayDuration;

    function cycleImages() {
        sliderImages[currentIndex].classList.remove('slider_img_active');
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImages[currentIndex].classList.add('slider_img_active');
    }

    setInterval(cycleImages, totalLifeTime);
});

document.getElementById("osobni_profilBtn").onclick = function () {
    location.href = "osobni_profil.html";
};