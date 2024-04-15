import{a as y,i as c,S as v}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const L="43275871-c76d4a7895f35b3cf58095282",b="https://pixabay.com/api/";async function u(t,r){return(await y(b,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:150}})).data}function h(t){return t.map(({webformatURL:r,largeImageURL:s,tags:a,id:e,likes:o,views:n,comments:p,downloads:f})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${s}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${a}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${o}</p>
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
    </li>`).join("")}function S(t){t.style.display="block"}function q(t){t.style.display="none"}const d=document.querySelector(".gallery"),l=document.querySelector(".search-form"),g=document.querySelector(".loading-indicator");let i=1;l.addEventListener("submit",x);async function x(t){t.preventDefault(),d.innerHTML="";const r=t.currentTarget.elements.search.value.trim();if(sessionStorage.setItem("text",r),i=1,r==="")return l.reset(),c.error({title:"Error",message:"Please enter a search images",position:"topRight"});S(g),await u(r,i).then(s=>{if(console.log(s),s.hits.length===0)return l.reset(),c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});l.reset(),d.insertAdjacentHTML("beforeend",h(s.hits)),E.refresh(),i<s.totalHits&&m.classList.replace("load-more-hidden","load-more")}).catch(s=>{l.reset(),c.error({title:"Error",message:'"222Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{q(g)})}const m=document.querySelector(".js-load-more");m.addEventListener("click",w);async function w(){m.disabled=!0;try{const t=sessionStorage.getItem("text"),r=await u(t,i);d.insertAdjacentHTML("beforeend",h(r.hits)),i+=1,m.disabled=!1,console.log(i);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({left:0,top:a*2,behavior:"smooth"}),i>=r.totalHits)return m.classList.replace("load-more","load-more-hidden"),c.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,position:"topRight"})}catch{c.error({title:"Error",message:'"555Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}}let E=new v(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
