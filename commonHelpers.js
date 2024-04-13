import{a as L,i as l,S as v}from"./assets/vendor-09d7c26e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="43275871-c76d4a7895f35b3cf58095282",S="https://pixabay.com/api/";let q=1;async function u(t){return(await L(S,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:q,per_page:12}})).data}function p(t){return t.map(({webformatURL:i,largeImageURL:o,tags:a,id:e,likes:r,views:s,comments:f,downloads:y})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${o}">
            <img
                class="gallery-image"
                src="${i}"
                alt="${a}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${r}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${s}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${f}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${y}</p>
       </div></div>
    </li>`).join("")}function w(t){t.style.display="block"}function g(t){t.style.display="none"}const d=document.querySelector(".gallery"),h=document.querySelector(".search-form"),c=document.querySelector(".loading-indicator");h.addEventListener("submit",x);function x(t){t.preventDefault(),d.innerHTML="";const i=t.currentTarget.elements.search.value.trim();if(i==="")return l.error({title:"Error",message:"Please enter a search images",position:"topRight"});w(c),u(i,m).then(o=>{if(console.log(o),o.hits.length===0)return g(c),l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});h.reset(),d.insertAdjacentHTML("beforeend",p(o.hits)),P.refresh(),o.page<500&&selectors.loadBtn.classList.replace("load-more-hidden","load-more")}).catch(o=>{l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{g(c)})}let P=new v(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),m=1;const n=document.querySelector(".js-load-more");n.addEventListener("click",$);async function $(){m+=1,n.disabled=!0;try{const t=await u(text,m);d.insertAdjacentHTML("beforeend",p(t.results)),n.disabled=!1;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:cardHeight*2,behavior:"smooth"}),t.page>=500&&n.classList.replace("load-more","load-more-hidden")}catch(t){alert(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
