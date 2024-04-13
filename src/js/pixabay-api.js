const API_KEY = '43275871-c76d4a7895f35b3cf58095282';
const BASE_URL = 'https://pixabay.com/api/';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function fetchImages(text) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: text,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });

    const data = response.data;
    console.log(data);

    if (data.hits.length === 0) {
      hideLoading(loader);
      return iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    searchForm.reset();
    gallery.innerHTML = createGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `"Sorry, there are no images matching your search query. Please try again!"`,
      position: 'topRight',
    });
  }
}
