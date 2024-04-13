import{i as n,S as f}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="43275871-c76d4a7895f35b3cf58095282",p="https://pixabay.com/api/";function y(r){const i=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${p}?${i}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function v(r){return r.map(({webformatURL:i,largeImageURL:s,tags:o,id:e,likes:t,views:a,comments:g,downloads:h})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${s}">
            <img
                class="gallery-image"
                src="${i}"
                alt="${o}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${t}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${a}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${g}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${h}</p>
       </div></div>
    </li>`).join("")}function L(r){r.style.display="block"}function l(r){r.style.display="none"}const m=document.querySelector(".gallery"),u=document.querySelector(".search-form"),c=document.querySelector(".loading-indicator");u.addEventListener("submit",b);function b(r){r.preventDefault(),m.innerHTML="";const i=r.currentTarget.elements.search.value.trim();if(i==="")return n.error({title:"Error",message:"Please enter a search images",position:"topRight"});L(c),y(i).then(s=>{if(console.log(s),s.hits.length===0)return l(c),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});u.reset(),m.innerHTML=v(s.hits),P.refresh()}).catch(s=>{n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{l(c)})}let P=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
