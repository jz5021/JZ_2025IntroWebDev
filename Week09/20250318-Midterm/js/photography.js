const container = document.getElementById('img_container');
const footer = document.querySelector('.footer');

// Array of image URLs
const image_urls = [
    "../assets/images/_93A2477-Edit.jpg",
    "../assets/images/20240919-Textures-1.jpg",
    "../assets/images/20241012-Kaia-12.jpg",
    "../assets/images/_93A9728-Edit.jpg",
    "../assets/images/_93A2478-Edit.jpg",
    "../assets/images/_93A2883-Edit.jpg",
    "../assets/images/_93A6230-Edit.jpg",
    "../assets/images/_93A6486-Edit.jpg",
    "../assets/images/_93A7107-Edit-2.jpg",
    "../assets/images/scan_2024-09-24_7.jpg",
    "../assets/images/scan_2024-09-24_9.jpg"
];

// Function to generate a random integer within a range
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to add images
function addImage(image_index) {
    const new_img = document.createElement("img");
    new_img.src = image_urls[image_index];

    if (randomIntFromInterval(0, 100) > 50) {
        new_img.style.left = `${randomIntFromInterval(1, 35)}%`;
    } else {
        new_img.style.right = `${randomIntFromInterval(1, 35)}%`;
    }

    // Calculate image position
    const image_top = randomIntFromInterval(10, 19) * image_index;
    new_img.style.top = `${image_top}%`;
    container.appendChild(new_img);
}

// Add images to the container
image_urls.forEach((_, index) => addImage(index));
