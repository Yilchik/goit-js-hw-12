export function createGallery(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        id,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item" data-id = ${id}>
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${likes}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${views}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${comments}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${downloads}</p>
       </div></div>
    </li>`
    )
    .join('');
}

export function showLoading(element) {
  element.style.display = 'block';
}

export function hideLoading(element) {
  element.style.display = 'none';
}
