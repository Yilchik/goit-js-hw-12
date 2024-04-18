import{a as q,i as c,S as P}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const w="43275871-c76d4a7895f35b3cf58095282",E="https://pixabay.com/api/";async function p(r,t){return(await q(E,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}function f(r){return r.map(({webformatURL:t,largeImageURL:i,tags:d,id:e,likes:o,views:n,comments:b,downloads:S})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${i}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${d}" />    
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
            <p class = "img-text">${b}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${S}</p>
       </div></div>
    </li>`).join("")}function y(r){r.style.display="block"}function L(r){r.style.display="none"}const u=document.querySelector(".gallery"),l=document.querySelector(".search-form"),g=document.querySelector(".loading-indicator");let s=1,m,h=0;l.addEventListener("submit",x);async function x(r){if(r.preventDefault(),u.innerHTML="",a.classList.replace("load-more","load-more-hidden"),m=r.currentTarget.elements.search.value.trim(),s=1,m==="")return l.reset(),c.error({title:"Error",message:"Please enter a search images",position:"topCenter"});y(g),await p(m,s).then(t=>{if(console.log(t),t.hits.length===0)return l.reset(),c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter"});l.reset(),u.insertAdjacentHTML("beforeend",f(t.hits)),v.refresh(),h=Math.ceil(t.totalHits/t.hits.length),s<h&&a.classList.replace("load-more-hidden","load-more")}).catch(t=>{l.reset(),c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter"})}).finally(()=>{L(g)})}const a=document.querySelector(".js-load-more");a.addEventListener("click",$);async function $(){a.disabled=!0;try{const r=await p(m,s);y(g),u.insertAdjacentHTML("beforeend",f(r.hits)),v.refresh(),s+=1,a.disabled=!1,console.log(s);const i=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({left:0,top:i*2,behavior:"smooth"}),s>=h)return a.classList.replace("load-more","load-more-hidden"),c.info({title:"Info",message:`"We're sorry, but you've reached the end of search results."`,position:"topCenter"})}catch{c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter"})}finally{L(g)}}let v=new P(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
