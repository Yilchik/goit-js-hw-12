import { fetchImages } from './js/pixabay-api.js';
import { showLoading } from './js/render-functions.js';
import { createGallery } from './js/render-functions.js';
import { hideLoading } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loading-indicator');

searchForm.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const query = event.currentTarget.elements.search.value.trim();

  if (query === '') {
    return iziToast.error({
      title: 'Error',
      message: 'Please enter a search images',
      position: 'topRight',
    });
  }

  showLoading(loader);
  fetchImages(query);
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
