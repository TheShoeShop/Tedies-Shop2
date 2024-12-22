// Wait for the DOM to fully load
window.onload = function () {
    console.log("Page loaded successfully!");

    // Add event listeners to all images
    const images = document.querySelectorAll('.gallery-image');

    for (let i = 0; i < images.length; i++) {
        // Mouse events
        images[i].addEventListener('mouseover', function () {
            console.log(`Mouse over: ${this.alt}`);
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        images[i].addEventListener('mouseleave', function () {
            console.log(`Mouse left: ${this.alt}`);
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });

        // Focus events
        images[i].addEventListener('focus', function () {
            console.log(`Focus: ${this.alt}`);
            this.style.border = '3px solid #f8b400';
        });

        images[i].addEventListener('blur', function () {
            console.log(`Blur: ${this.alt}`);
            this.style.border = 'none';
        });

        // Add tabindex dynamically
        images[i].setAttribute('tabindex', '0');
    }
};
