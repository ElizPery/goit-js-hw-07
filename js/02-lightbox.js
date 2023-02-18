import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryItemsMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
    }).join('');
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});