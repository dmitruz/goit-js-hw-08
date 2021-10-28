import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImages = document.querySelector('.gallery');
const cardsImage = createGalleryItem(galleryItems);

galleryImages.insertAdjacentHTML('beforeend', cardsImage);

function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
             <img class="gallery__image"
             src="${preview}"
             alt="${description}" />
            </a>
        `;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
 });


console.log(galleryItems);

