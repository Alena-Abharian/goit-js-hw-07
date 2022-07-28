import {galleryItems} from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onHandlerShowImg)

const renderImg = () => {
    const markup = galleryItems
        .map(
            item => ` <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
        )
        .join('');

    galleryList.insertAdjacentHTML('beforeend', markup)
}
renderImg()


let instance = null;

function onHandlerShowImg(e) {
    e.preventDefault();

    instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600" alt="">
`)
    instance.show(() => document.addEventListener('keydown', onHandlerEsc));
}

function onHandlerEsc(e) {

    if (e.key === 'Escape') {
        instance.close()
    }
}
