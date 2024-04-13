import{a as y,i as l,S as L}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const v="43275871-c76d4a7895f35b3cf58095282",b="https://pixabay.com/api/";let S=1;async function g(e){return(await y(b,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:S,per_page:12}})).data}function p(e){return e.map(({webformatURL:o,largeImageURL:i,tags:n,id:t,likes:r,views:s,comments:h,downloads:f})=>`
    <li class="gallery-item" data-id = ${t}>
        <a class="gallery-link" href="${i}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${n}" />    
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
            <p class = "img-text">${h}</p>
      </div>
       <div class = "img-inform">
          <h2 class ="img-title">Downloads</h2>
          <p class = "img-text">${f}</p>
       </div></div>
    </li>`).join("")}function q(e){e.style.display="block"}function w(e){e.style.display="none"}const c=document.querySelector(".gallery"),u=document.querySelector(".search-form"),m=document.querySelector(".loading-indicator");u.addEventListener("submit",x);function x(e){e.preventDefault(),c.innerHTML="";const o=e.currentTarget.elements.search.value.trim();if(o==="")return l.error({title:"Error",message:"Please enter a search images",position:"topRight"});q(m),g(o,d).then(i=>{if(console.log(i),i.hits.length===0)return l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});u.reset(),c.insertAdjacentHTML("beforeend",p(i.hits)),P.refresh(),i.page<500&&selectors.loadBtn.classList.replace("load-more-hidden","load-more")}).catch(i=>{l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"})}).finally(()=>{w(m)})}let P=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=1;const a=document.querySelector(".js-load-more");a.addEventListener("click",$);async function $(){d+=1,a.disabled=!0;try{const e=await g(text,d);c.insertAdjacentHTML("beforeend",p(e.hits)),a.disabled=!1;const o=document.querySelector(".gallery-item"),i=o.getBoundingClientRect().height;console.log(o.getBoundingClientRect().height),window.scrollBy({left:0,top:cardHeight*2,behavior:"smooth"}),e.page<500&&a.classList.replace("load-more-hidden","load-more"),e.page>=500&&a.classList.replace("load-more","load-more-hidden")}catch(e){alert(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
