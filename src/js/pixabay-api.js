const API_KEY = '43275871-c76d4a7895f35b3cf58095282';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(text) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
