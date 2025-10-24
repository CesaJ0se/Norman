 let currentSlide = 0;
        const carousel = document.getElementById('carousel');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = 3;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Cambio automático cada 4 segundos
        setInterval(nextSlide, 4000);