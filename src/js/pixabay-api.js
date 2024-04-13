const API_KEY = '43275871-c76d4a7895f35b3cf58095282';
const BASE_URL = 'https://pixabay.com/api/';
import axios from 'axios';

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
  }
}
