import { galleryItems } from "./gallery-items.js";
import { getItemGalleryTemplate } from "./getItemGalleryTemplate.js";

const gallery = document.querySelector(".gallery");

const render = () => {
  const markUp = galleryItems.map(getItemGalleryTemplate);
  gallery.innerHTML = "";
  gallery.insertAdjacentHTML("beforeend", markUp.join(""));
};

render();

const handleImgClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");
  const modal = basicLightbox.create(`
    <img src=${selectedImage} width="800" height="600">
`);

  modal.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.close();
    }
  });
};

gallery.addEventListener("click", handleImgClick);
