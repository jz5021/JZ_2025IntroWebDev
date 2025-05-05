const container = document.getElementById('img-container');

// Array of image URLs
const image_urls = [
    "assets/images/photography/polaroids/20240919-Textures-1.jpg",
    "assets/images/photography/polaroids/20240921-Ven.jpg",
    "assets/images/photography/polaroids/20240921-Ven2.jpg",
    "assets/images/photography/polaroids/20241012-Kaia-12.jpg",
    "assets/images/photography/portraits/20230622-Ace.jpg",
    "assets/images/photography/portraits/20230930-Naz1.jpg",
    "assets/images/photography/portraits/20230930-burden-of-dreams-Naz.jpg",
    "assets/images/photography/portraits/20231008-Karencici.jpg",
    "assets/images/photography/portraits/20231008-SunkisKarencici.jpg",
    "assets/images/photography/portraits/20231026-NazJinsol.jpg",
    "assets/images/photography/portraits/20231212-OHTxNike.jpg",
    "assets/images/photography/portraits/20240909-Valerie.jpg",
    "assets/images/photography/portraits/20240909-Valerie2.jpg",
    "assets/images/photography/portraits/20241012-Kaia.jpg",
    "assets/images/photography/portraits/Jin.jpg",
    "assets/images/photography/still/_R000358.jpg",
    "assets/images/photography/still/_R000735.jpg",
    "assets/images/photography/still/_R000763.jpg",
    "assets/images/photography/still/_R000877.jpg",
    "assets/images/photography/still/_R000901.jpg",
];

// Create lightbox elements
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
lightbox.style.zIndex = '1000';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';

const lightboxImg = document.createElement('img');
lightboxImg.style.maxWidth = '90%';
lightboxImg.style.maxHeight = '90%';
lightboxImg.style.objectFit = 'contain';

// Close button
const closeButton = document.createElement('div');
closeButton.innerHTML = '&times;';
closeButton.style.position = 'absolute';
closeButton.style.top = '20px';
closeButton.style.right = '30px';
closeButton.style.fontSize = '40px';
closeButton.style.color = 'white';
closeButton.style.cursor = 'pointer';
closeButton.style.zIndex = '1001';

lightbox.appendChild(lightboxImg);
lightbox.appendChild(closeButton);
document.body.appendChild(lightbox);

// Function to generate a random integer within a range
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to add images with hover effect and lightbox
function addImage(image_index) {
    const new_img = document.createElement("img");
    new_img.src = image_urls[image_index];
    new_img.dataset.fullsize = image_urls[image_index]; // Store the full-size image path

    if (randomIntFromInterval(0, 100) > 50) {
        new_img.style.left = `${randomIntFromInterval(1, 35)}%`;
    } else {
        new_img.style.right = `${randomIntFromInterval(1, 35)}%`;
    }

    // Calculate image position
    const image_top = randomIntFromInterval(10, 19) * image_index;
    new_img.style.top = `${image_top}%`;
    
    // Add hover effect to bring image to front
    new_img.style.zIndex = "1"; // Default z-index
    new_img.style.transition = "z-index 0.01s, transform 0.01s"; // Smooth transition
    new_img.style.cursor = "pointer"; // Show pointer cursor
    
    // Add hover event listeners
    new_img.addEventListener("mouseenter", function() {
        this.style.zIndex = "10"; // Higher z-index when hovered
        this.style.transform = "scale(1.01)"; // Slightly scale up the image
    });
    
    new_img.addEventListener("mouseleave", function() {
        this.style.zIndex = "1"; // Return to default z-index
        this.style.transform = "scale(1)"; // Return to original size
    });
    
    // Add click event for lightbox
    new_img.addEventListener("click", function() {
        lightboxImg.src = this.dataset.fullsize;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling while lightbox is open
    });
    
    container.appendChild(new_img);
}

// Add images to the container
image_urls.forEach((_, index) => addImage(index));

// Event listeners for closing the lightbox
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

closeButton.addEventListener('click', closeLightbox);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}