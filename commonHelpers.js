import{a as p,i as n,S as f}from"./assets/vendor-09d7c26e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="43275871-c76d4a7895f35b3cf58095282",y="https://pixabay.com/api/";async function v(r){return(await p(y,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}function L(r){return r.map(({webformatURL:i,largeImageURL:s,tags:a,id:e,likes:t,views:o,comments:u,downloads:d})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${s}">
            <img
                class="gallery-image"
                src="${i}"
                alt="${a}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${t}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${o}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${u}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${d}</p>
       </div></div>
    </li>`).join("")}function b(r){r.style.display="block"}function l(r){r.style.display="none"}const m=document.querySelector(".gallery"),g=document.querySelector(".search-form"),c=document.querySelector(".loading-indicator");g.addEventListener("submit",P);function P(r){r.preventDefault(),m.innerHTML="";const i=r.currentTarget.elements.search.value.trim();if(i==="")return n.error({title:"Error",message:"Please enter a search images",position:"topRight"});b(c),v(i).then(s=>{if(console.log(s),s.hits.length===0)return l(c),n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});g.reset(),m.innerHTML=L(s.hits),S.refresh()}).catch(s=>{n.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{l(c)})}let S=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
