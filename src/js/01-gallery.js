// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
console.log(galleryItems);

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
      />
   </a>
</li>`
    )
    .join("");
}
