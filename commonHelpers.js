import{a as q,i as l,S as P}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const w="43275871-c76d4a7895f35b3cf58095282",E="https://pixabay.com/api/";async function f(r,t){return(await q(E,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}function p(r){return r.map(({webformatURL:t,largeImageURL:i,tags:m,id:e,likes:o,views:a,comments:b,downloads:S})=>`
    <li class="gallery-item" data-id = ${e}>
        <a class="gallery-link" href="${i}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${m}" />    
        </a>
    <div class = "img-captions">
      <div class = "img-inform">
          <h2 class ="img-title">Likes</h2>
          <p class = "img-text">${o}</p>
      </div>
      <div class = "img-inform">
          <h2 class ="img-title">Views</h2>
          <p class = "img-text">${a}</p>
      </div>
      <div class = "img-inform">
           <h2 class ="img-title">Comments</h2>
            <p class = "img-text">${b}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${S}</p>
       </div></div>
    </li>`).join("")}function y(r){r.style.display="block"}function v(r){r.style.display="none"}const u=document.querySelector(".gallery"),n=document.querySelector(".search-form"),g=document.querySelector(".loading-indicator");let s=1,d,h=0;n.addEventListener("submit",x);async function x(r){if(r.preventDefault(),u.innerHTML="",d=r.currentTarget.elements.search.value.trim(),s=1,d==="")return n.reset(),l.error({title:"Error",message:"Please enter a search images",position:"topCenter"});y(g),await f(d,s).then(t=>{if(console.log(t),t.hits.length===0)return n.reset(),l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter"});n.reset(),u.insertAdjacentHTML("beforeend",p(t.hits)),L.refresh(),h=Math.ceil(t.totalHits/t.hits.length),s<h&&c.classList.replace("load-more-hidden","load-more")}).catch(t=>{n.reset(),l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter"})}).finally(()=>{v(g)})}const c=document.querySelector(".js-load-more");c.addEventListener("click",$);async function $(){c.disabled=!0;try{const r=await f(d,s);y(g),u.insertAdjacentHTML("beforeend",p(r.hits)),L.refresh(),s+=1,c.disabled=!1,console.log(s);const i=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({left:0,top:i*2,behavior:"smooth"}),s>=h)return c.classList.replace("load-more","load-more-hidden"),l.info({title:"Info",message:`"We're sorry, but you've reached the end of search results."`,position:"topCenter"})}catch{l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topCenter"})}finally{v(g)}}let L=new P(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
