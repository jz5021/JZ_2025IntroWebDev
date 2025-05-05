// About page reveal functionality
document.addEventListener('DOMContentLoaded', () => {
    const revealTrigger = document.querySelector('.reveal-trigger');
    const aboutContent = document.querySelector('.about-content');
    const aboutIntro = document.querySelector('.about-intro');

    if (revealTrigger && aboutContent) {
        revealTrigger.addEventListener('click', () => {
            aboutContent.classList.toggle('hidden');
            
            // Add a class for styles rather than directly modifying CSS properties
            if (!aboutContent.classList.contains('hidden')) {
                aboutIntro.classList.add('intro-minimized');
                
                // Scroll with a slight delay for smoother effect
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 500);
            } else {
                aboutIntro.classList.remove('intro-minimized');
            }
        });
    }
});

// JavaScript to load random image and auto-cycle
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('about-me-image-container');
    
    // Skip if container doesn't exist
    if (!container) return;

    // Image container styling and size
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.width = '100vw';
    container.style.height = '50vh';
    
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
        
        const currentImage = container.querySelector('img');

        const newImage = document.createElement('img');
        newImage.src = imageArray[index];
        newImage.alt = 'Slideshow image of the artist';
        newImage.classList.add('slideshow-image');
    
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
    
        container.appendChild(newImage);
    
        newImage.onload = function () {
            newImage.style.opacity = '1';
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
        if (slideshowTimer) {
            clearInterval(slideshowTimer);
        }
        
        // Set interval for automatic cycling
        slideshowTimer = setInterval(nextImage, slideInterval);
    }
    
    // Initialize with a random image
    const randomIndex = getRandomInt(0, imageArray.length - 1);
    displayImage(randomIndex);

    startSlideshow();
});