import{a as L,i as m,S as b}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const S="43275871-c76d4a7895f35b3cf58095282",q="https://pixabay.com/api/";async function p(r,t){return(await L(q,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:150}})).data}function f(r){return r.map(({webformatURL:t,largeImageURL:a,tags:i,id:e,likes:o,views:n,comments:y,downloads:v})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${a}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${i}" />    
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
            <p class = "img-text">${y}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${v}</p>
       </div></div>
    </li>`).join("")}function x(r){r.style.display="block"}function P(r){r.style.display="none"}const h=document.querySelector(".gallery"),l=document.querySelector(".search-form"),u=document.querySelector(".loading-indicator");let s=1,c,g=0;l.addEventListener("submit",w);async function w(r){if(r.preventDefault(),h.innerHTML="",c=r.currentTarget.elements.search.value.trim(),sessionStorage.setItem("text",c),s=1,c==="")return l.reset(),m.error({title:"Error",message:"Please enter a search images",position:"topRight"});x(u),await p(c,s).then(t=>{if(console.log(t),t.hits.length===0)return l.reset(),m.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});l.reset(),h.insertAdjacentHTML("beforeend",f(t.hits)),$.refresh(),g=Math.ceil(t.totalHits/t.hits.length),console.log(g),s<g&&d.classList.replace("load-more-hidden","load-more")}).catch(t=>{l.reset(),m.error({title:"Error",message:'"222Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{P(u)})}const d=document.querySelector(".js-load-more");d.addEventListener("click",E);async function E(){d.disabled=!0;try{const r=sessionStorage.getItem("text"),t=await p(c,s);h.insertAdjacentHTML("beforeend",f(t.hits)),s+=1,d.disabled=!1,console.log(s);const i=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({left:0,top:i*2,behavior:"smooth"}),s>=g)return d.classList.replace("load-more","load-more-hidden"),m.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,position:"topRight"})}catch{m.error({title:"Error",message:'"555Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}}let $=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
