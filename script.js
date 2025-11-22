document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        const slideDelay = 3000;
        function showSlide(index) {
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;
            slides.forEach((slide, i) => {
                if (i === currentSlide) {
                    slide.classList.remove('opacity-0');
                    slide.classList.add('opacity-100');
                } else {
                    slide.classList.remove('opacity-100');
                    slide.classList.add('opacity-0');
                }
            });
        }
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, slideDelay);
        }
        function resetTimer() {
            clearInterval(slideInterval);
            startAutoSlide();
        }
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetTimer();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetTimer();
            });
        }
        startAutoSlide();
    }
    const sunImg = document.getElementById("sun");
    const homeImg = document.getElementById("home-icon");
    const html = document.documentElement;

    if (sunImg) {
        function updateIcon(isDark) {
            sunImg.src = isDark ? "sun.png" : "moon.png";
            if (homeImg) {
                homeImg.src = isDark ? "home_light.png" : "home_dark.png";
            }
        }
        function toggleMode() {
            const isDark = html.classList.toggle("dark");
            updateIcon(isDark);
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }

        sunImg.addEventListener("click", toggleMode);
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            html.classList.add("dark");
            updateIcon(true);
        } else {
            html.classList.remove("dark");
            updateIcon(false);
        }
    }
});