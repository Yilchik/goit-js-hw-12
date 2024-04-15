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

let page = 1;
let query;
let allPage = 0;

searchForm.addEventListener('submit', searchImages);

async function searchImages(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  query = event.currentTarget.elements.search.value.trim();
  sessionStorage.setItem('text', query);
  page = 1;

  if (query === '') {
    searchForm.reset();
    return iziToast.error({
      title: 'Error',
      message: 'Please enter a search images',
      position: 'topRight',
    });
  }

  showLoading(loader);

  await fetchImages(query, page)
    .then(data => {
      console.log(data);
      if (data.hits.length === 0) {
        searchForm.reset();
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

      allPage = Math.ceil(data.totalHits / 15);

      if (page < allPage) {
        loadBtn.classList.replace('load-more-hidden', 'load-more');
      }
    })

    .catch(error => {
      searchForm.reset();
      iziToast.error({
        title: 'Error',
        message: `"222Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoading(loader);
    });
}

const loadBtn = document.querySelector('.js-load-more');
loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  loadBtn.disabled = true;

  try {
    const text = sessionStorage.getItem('text');
    const data = await fetchImages(query, page);

    gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
    page += 1;

    loadBtn.disabled = false;
    console.log(page);

    const item = document.querySelector('.gallery-item');
    const itemHeight = item.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });

    allPage = Math.ceil(data.totalHits / 15);

    if (page >= allPage) {
      loadBtn.classList.replace('load-more', 'load-more-hidden');
      return iziToast.error({
        title: 'Error',
        message: `"We're sorry, but you've reached the end of search results."`,
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `"555Sorry, there are no images matching your search query. Please try again!"`,
      position: 'topRight',
    });
  }
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
