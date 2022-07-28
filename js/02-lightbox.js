import {galleryItems} from './gallery-items.js';

const galleryList = document.querySelector('.gallery')

const renderImg = () => {
    const markupImg = galleryItems
        .map(item =>
            `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
             </a>`
        )
        .join('')
    galleryList.insertAdjacentHTML("beforeend", markupImg)
}

renderImg()

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
