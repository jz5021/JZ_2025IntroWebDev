// JavaScript to load random image and auto-cycle
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('about-me-image-container');

    // Image container styling and size
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.width = '100vw';
    container.style.height = '50vh';
    
    // Array of image URLs that will cycle through
    const imageArray = [
        "assets/images/photography/polaroids/20240808-Kai_David_Juhui-1.jpg",
        "assets/images/photography/polaroids/20240809-Jessie-2.jpg",
        "assets/images/photography/polaroids/20240811-Daesung-3.jpg",
        "assets/images/photography/polaroids/20240811-NoFlex-1.jpg",
        "assets/images/photography/polaroids/20250207-DPIThesisShow005.jpg",
        "assets/images/photography/polaroids/20250207-DPIThesisShow010.jpg",
        "assets/images/photography/polaroids/20250207-DPIThesisShow058.jpg",
        "assets/images/photography/polaroids/20250302-Birthday004.jpg",
        "assets/images/photography/polaroids/20250411-KTV016.jpg",
        "assets/images/photography/polaroids/20241023-Dawang-1.jpg"
    ];
    
    // Settings for the slideshow
    const slideInterval = 5000; // Time between slides in milliseconds
    let currentIndex;
    let slideshowTimer;
    
    // Function to get a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Function to display an image by index
    function displayImage(index) {
        // Get the current image (if any)
        const currentImage = container.querySelector('img');
    
        // Create new image element
        const newImage = document.createElement('img');
        newImage.src = imageArray[index];
        newImage.alt = 'Slideshow image of the artist';
        newImage.classList.add('slideshow-image');
    
        // Style the new image
        Object.assign(newImage.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: '0',
            transition: 'opacity 0.8s ease-in-out',
            zIndex: '2'
        });
    
        // Add the new image on top
        container.appendChild(newImage);
    
        // Once new image loads, fade it in
        newImage.onload = function () {
            newImage.style.opacity = '1';
    
            // If there was a previous image, fade it out and remove after transition
            if (currentImage) {
                currentImage.style.transition = 'opacity 0.8s ease-in-out';
                currentImage.style.opacity = '0';
                currentImage.style.zIndex = '1';
                setTimeout(() => {
                    if (currentImage.parentNode) {
                        currentImage.parentNode.removeChild(currentImage);
                    }
                }, 800); // match fade duration which would be the transition style time in ms
            }
        };
    
        // Update index
        currentIndex = index;
    }
    
    
    // Function to move to the next image
    function nextImage() {
        // Get the next index, loop back to 0 if at the end
        const nextIndex = (currentIndex + 1) % imageArray.length;
        displayImage(nextIndex);
    }
    
    // Function to start the slideshow
    function startSlideshow() {
        // Reset existing timer
        if (slideshowTimer) {
            clearInterval(slideshowTimer);
        }
        
        // Set interval for automatic cycling
        slideshowTimer = setInterval(nextImage, slideInterval);
    }
    
    // Initialize with a random image
    const randomIndex = getRandomInt(0, imageArray.length - 1);
    displayImage(randomIndex);
    
    // Start the automatic slideshow
    startSlideshow();
});