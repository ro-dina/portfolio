document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    const slideIndexes = new Array(sliders.length).fill(0);

    sliders.forEach((slider, sliderIndex) => {
        const slides = slider.querySelectorAll('.slides img');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function changeSlide(n) {
            slideIndexes[sliderIndex] = (slideIndexes[sliderIndex] + n + slides.length) % slides.length;
                showSlide(slideIndexes[sliderIndex]);
        }

        prevBtn.addEventListener('click', () => changeSlide(-1));
        nextBtn.addEventListener('click', () => changeSlide(1));

        showSlide(slideIndexes[sliderIndex]);

        setInterval(() => {
            changeSlide(1);
        }, 5000);
    });
});
