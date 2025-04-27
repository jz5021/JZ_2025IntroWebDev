const container = document.getElementById('img-container');
const footer = document.querySelector('.footer');

// Array of image URLs
const image_urls = [
    "../assets/images/20250426-aboutImg1.jpg",
    "../assets/images/20250426-aboutImg2.jpg",
    "../assets/images/20250426-aboutImg3.jpg",
    "../assets/images/20250426-aboutImg4.jpg",
    "../assets/images/20250426-aboutImg5.jpg",
    "../assets/images/20250426-aboutImg6.jpg",
    "../assets/images/20250426-aboutImg7.jpg",
    "../assets/images/20250426-aboutImg8.jpg",
    "../assets/images/20250426-aboutImg9.jpg",
    "../assets/images/20250426-aboutImg10.jpg",
];

const sentences = [
    "Curiosity fuels creativity.",
    "Mistakes are proof that you are trying.",
    "Dream big, start small.",
    "Stay hungry, stay foolish.",
    "Great things never come from comfort zones.",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Success doesn't just find you. You have to go out and get it."
];

// Function to generate a random integer within a range
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to add images
function addImage(image_index) {
    const new_img = document.createElement("img");
    new_img.src = image_urls[image_index];
    new_img.style.zIndex = '-1';

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

function addSentence(sentence_index) {
    const new_sentence = document.createElement("div");
    new_sentence.textContent = sentences[sentence_index];
    new_sentence.classList.add('random-sentence');

    if (randomIntFromInterval(0, 100) > 50) {
        new_sentence.style.left = `${randomIntFromInterval(5, 35)}%`;
    } else {
        new_sentence.style.right = `${randomIntFromInterval(5, 35)}%`;
    }

    // Instead of random top, space them evenly
    const spacing = 200 / (sentences.length + 1); // 80% divided evenly between sentences
    const top_position = (sentence_index + 1) * spacing;
    new_sentence.style.top = `${top_position}%`;

    container.appendChild(new_sentence);
}


// Add images to the container
image_urls.forEach((_, index) => addImage(index));
sentences.forEach((_, index) => addSentence(index));

const style = document.createElement('style');
style.textContent = `
    .random-sentence {
        position: absolute;
        font-size: 1.2rem;
        max-width: 50%;
        color: black;
        z-index: 2;
        pointer-events: none;
        transition: transform 0.3s ease-out;
    }
`;
document.head.appendChild(style);