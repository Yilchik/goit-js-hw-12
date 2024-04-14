import { fetchImages } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';
import { showLoading } from './js/render-functions.js';
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
  page = 1;

  if (query === '') {
    return iziToast.error({
      title: 'Error',
      message: 'Please enter a search images',
      position: 'topRight',
    });
  }

  showLoading(loader);

  fetchImages(query, page)
    .then(data => {
      console.log(data);
      if (data.hits.length === 0) {
        return iziToast.error({
          title: 'Error',
          message:
            '"Sorry, there are no images matching your search query. Please try again!"',
          position: 'topRight',
        });
      }
      searchForm.reset();
      gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
      lightbox.refresh();
      console.log(page);
      if (page < 500) {
        loadBtn.classList.replace('load-more-hidden', 'load-more');
        loadMore();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoading(loader);
    });
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let page = 1;
const loadBtn = document.querySelector('.js-load-more');
loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  page += 1;

  loadBtn.disabled = true;

  try {
    const data = await fetchImages(text, page);
    gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));

    loadBtn.disabled = false;

    const item = document.querySelector('.gallery-item');
    const itemHeight = item.getBoundingClientRect().height;

    // window.scrollBy({
    //   left: 0,
    //   top: cardHeight * 2,
    //   behavior: 'smooth',
    // });

    // if (data.page < 500) {
    //   loadBtn.classList.replace('load-more-hidden', 'load-more');
    // }

    // if (data.page >= 500) {
    //   loadBtn.classList.replace('load-more', 'load-more-hidden');
    // }
  } catch (error) {
    alert(error.message);
  }
}
