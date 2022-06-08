import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from '../01-gallery.html/basiclightbox';

// Change code below this line
// console.log(galleryItems);
const divGalleryEL = document.querySelector(".gallery");

divGalleryEL.insertAdjacentHTML("afterbegin", createGalleryElements(galleryItems));
divGalleryEL.addEventListener("click", getLargeImage);

function createGalleryElements(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
};

function getLargeImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    };
    
    const largeImgAttribute = event.target.dataset.source;

    showLargeImg(largeImgAttribute);
 
};

function showLargeImg(largeImgUrl) {
  const instance = basicLightbox.create(`<div class="modal">
      <img src="${largeImgUrl}"></img> 
  </div>`, {
    onShow: (instance) => { window.addEventListener("keydown", closeMoadalOnTargetEscape) },
    onClose: (instance) => {window.removeEventListener("keydown", closeMoadalOnTargetEscape) },
  })
  instance.show(); 

  function closeMoadalOnTargetEscape(event) {
  if (event.code === "Escape") {
    instance.close();
   }
 };
}






