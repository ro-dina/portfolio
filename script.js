//モーダル
let currentIndex = 0;
let modalImages = [];

function openModal(imgElement) {
    const group = imgElement.getAttribute('data-group');
    modalImages = Array.from(document.querySelectorAll(`img[data-group='${group}']`));
    currentIndex = modalImages.indexOf(imgElement);

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function changeModalSlide(direction) {
    if (!modalImages.length) return;

    currentIndex = (currentIndex + direction + modalImages.length) % modalImages.length;
    const newImg = modalImages[currentIndex];
    const modalImg = document.getElementById("modalImage");
    modalImg.src = newImg.src;
}



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

        slides.forEach((img) => {
            img.addEventListener('click', () => {
                openModal(img);
            });
        });
    });
});
