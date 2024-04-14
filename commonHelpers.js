import{a as y,i as m,S as L}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const v="43275871-c76d4a7895f35b3cf58095282",b="https://pixabay.com/api/";async function u(t,r){return(await y(b,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data}function h(t){return t.map(({webformatURL:r,largeImageURL:o,tags:a,id:e,likes:s,views:n,comments:p,downloads:f})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${o}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${a}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${s}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${n}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${p}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${f}</p>
       </div></div>
    </li>`).join("")}function S(t){t.style.display="block"}function x(t){t.style.display="none"}const d=document.querySelector(".gallery"),l=document.querySelector(".search-form"),g=document.querySelector(".loading-indicator");let i=1;l.addEventListener("submit",q);async function q(t){t.preventDefault(),d.innerHTML="";const r=t.currentTarget.elements.search.value.trim();if(sessionStorage.setItem("text",r),i=1,r==="")return l.reset(),m.error({title:"Error",message:"Please enter a search images",position:"topRight"});S(g),await u(r,i).then(o=>{if(console.log(o),o.hits.length===0)return l.reset(),m.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});l.reset(),d.insertAdjacentHTML("beforeend",h(o.hits)),P.refresh(),i<500&&c.classList.replace("load-more-hidden","load-more"),i>=500&&c.classList.replace("load-more","load-more-hidden")}).catch(o=>{l.reset(),m.error({title:"Error",message:'"222Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{x(g)})}const c=document.querySelector(".js-load-more");c.addEventListener("click",w);async function w(){c.disabled=!0;try{const t=sessionStorage.getItem("text"),r=await u(t,i);d.insertAdjacentHTML("beforeend",h(r.hits)),i+=1,c.disabled=!1,console.log(i),console.log(r);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}catch(t){alert(t.message)}}let P=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
