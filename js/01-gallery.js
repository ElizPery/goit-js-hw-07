import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
gallery.addEventListener('click', onGaleryElementClick);

function createGalleryItemsMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        /></a></div>`
    }).join('');
}


function onGaleryElementClick(e) {
    e.preventDefault();
    if (!e.target.dataset.source) {
        return
    }

    const instance = basicLightbox.create(`
    <img
    src="${e.target.dataset.source}" 
    width="800" 
    height="600"
    />
    `, {
        onShow: () => document.addEventListener('keydown', onCloseModal),
        onClose: () => document.removeEventListener('keydown', onCloseModal)
    });

    instance.show();

    function onCloseModal(e) {
        if (e.code === 'Escape') instance.close();
    }
}






