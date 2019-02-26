import htmlImageTemplate from './image-template.js';
import images from '../data/images.js';
const imageContainer = document.getElementById('image-container');


images.forEach((image) => {
    const template = document.createElement('template');
    template.innerHTML = htmlImageTemplate(image);
    const dom = template.content;
    imageContainer.appendChild(dom);
});
