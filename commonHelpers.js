import{a as L,i as c,S as v}from"./assets/vendor-09d7c26e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="43275871-c76d4a7895f35b3cf58095282",S="https://pixabay.com/api/";let q=1;async function g(t){return(await L(S,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:q,per_page:12}})).data}function u(t){return t.map(({webformatURL:i,largeImageURL:s,tags:n,id:e,likes:r,views:a,comments:h,downloads:y})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${s}">
            <img
                class="gallery-image"
                src="${i}"
                alt="${n}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${r}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${a}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${h}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${y}</p>
       </div></div>
    </li>`).join("")}function x(t){t.style.display="block"}function P(t){t.style.display="none"}const m=document.querySelector(".gallery"),p=document.querySelector(".search-form"),d=document.querySelector(".loading-indicator");p.addEventListener("submit",$);function $(t){t.preventDefault(),m.innerHTML="";const i=t.currentTarget.elements.search.value.trim();if(o=1,i==="")return c.error({title:"Error",message:"Please enter a search images",position:"topRight"});x(d),g(i,o).then(s=>{if(console.log(s),s.hits.length===0)return c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});p.reset(),m.insertAdjacentHTML("beforeend",u(s.hits)),E.refresh(),console.log(o),o<500&&(l.classList.replace("load-more-hidden","load-more"),f())}).catch(s=>{c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{P(d)})}let E=new v(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),o=1;const l=document.querySelector(".js-load-more");l.addEventListener("click",f);async function f(){o+=1,l.disabled=!0;try{const t=await g(text,o);m.insertAdjacentHTML("beforeend",u(t.hits)),l.disabled=!1;const s=document.querySelector(".gallery-item").getBoundingClientRect().height}catch(t){alert(t.message)}}
//# sourceMappingURL=commonHelpers.js.map
