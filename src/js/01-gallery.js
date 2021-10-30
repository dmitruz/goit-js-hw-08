import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';




const galleryImages = document.querySelector('.gallery');
const cardsImage = createGalleryItem(galleryItems);
let originalImage;

galleryImages.insertAdjacentHTML('beforeend', cardsImage);

galleryImages.addEventListener('keydown', onClickEscCloseImage);

function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                 />
             </a>
        </div>
        `;
        })
        .join('');
}

galleryImages.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    originalImage = basicLightbox.create(`
		<img src="${evt.target.dataset.source}" width="1200" height="900">
	`)
    originalImage.show()
});


function onClickEscCloseImage(evt) {
if (evt.code !== 'Escape') {
      return;
    }
    originalImage.close();
}
console.log(galleryItems);
