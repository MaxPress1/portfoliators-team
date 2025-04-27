import{S as c,N as l,K as d,M as u,a as m,i as f}from"./assets/vendor-DMrfSVOb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("theme-toggle-checkbox");localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),r.checked=!0),r.addEventListener("change",()=>{r.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))})});const n=document.querySelector(".reviews-list"),p=async()=>{const r="https://portfolio-js.b.goit.study/api/reviews";try{return(await m.get(r)).data}catch(s){f.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",progressBar:!1,message:"Error while fetching reviews"}),console.error("Error fetching reviews:",s),n.insertAdjacentHTML("beforeend",`
        <li class="not-found-item">
        <p class="not-found-text">Not found</p>
        </li>
        `)}},h=async()=>{const r=await p();if(r){const s=r.map(o=>`
            <li class="reviews-list-item swiper-slide">
                <p class="reviews-text">${o.review}</p>
                <div class="author-information">
                    <img class="author-image" src="${o.avatar_url}" alt="review from ${o.author}" 
                    width="40" height="40" loading="lazy">
                    <p class="name-text">${o.author}</p>
                </div>
            </li>
        `).join("");n.insertAdjacentHTML("beforeend",s)}};h();new c(".reviews .swiper",{modules:[l,d,u],mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});
//# sourceMappingURL=index.js.map
