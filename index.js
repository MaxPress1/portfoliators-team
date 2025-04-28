import{i as m,S as h,N as v,K as j,M as f,a as y}from"./assets/vendor-UvMvCI1P.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c=document.getElementById("contactForm"),u=document.getElementById("interestModal"),k=document.getElementById("closeModal");c.addEventListener("submit",async function(e){e.preventDefault();const s=c.elements["user-email"].value.trim();c.elements["user-comment"].value.trim();try{const o=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})});if(console.log(o),o.status===201)u.classList.remove("hidden"),c.reset();else{const i=await o.json();console.log("Помилка з сервера:",i),alert("Oops! Something went wrong. Please check your input and try again.")}}catch(o){m.error({message:"Network error! Please try again later.",position:"topRight"}),console.error(o)}});k.addEventListener("click",function(){u.classList.add("hidden")});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("theme-toggle-checkbox");localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),e.checked=!0),e.addEventListener("change",()=>{e.checked?(document.body.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))})});const S=document.querySelector(".burger"),l=document.querySelector(".mobile-menu"),x=document.querySelector(".close-menu"),L=document.querySelectorAll(".mobile-nav-list a");S.addEventListener("click",()=>{l.classList.remove("visually-hidden"),document.body.classList.add("no-scroll")});x.addEventListener("click",()=>{l.classList.add("visually-hidden"),document.body.classList.remove("no-scroll")});L.forEach(e=>{e.addEventListener("click",()=>{l.classList.add("visually-hidden"),document.body.classList.remove("no-scroll")})});const p=[{image:"/img/webp/projects/projects_1.webp",image2x:"/img/webp/projects/projects_1@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Wallet Webservice",link:"https://expense-tracker.f.goit.study"},{image:"/img/webp/projects/projects_2.webp",image2x:"/img/webp/projects/projects_2@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Green harvest webservice",link:"https://goitstudentsworks.github.io/106_html-css_Siriulas/"},{image:"/img/webp/projects/projects_3.webp",image2x:"/img/webp/projects/projects_3@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"English Exellence website",link:"#"},{image:"/img/webp/projects/projects_4.webp",image2x:"/img/webp/projects/projects_4@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Power Pulse Webservice",link:"https://power-pulse.f.goit.study/welcome"},{image:"/img/webp/projects/projects_5.webp",image2x:"/img/webp/projects/projects_5@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Mimino Website",link:"#"},{image:"/img/webp/projects/projects_6.webp",image2x:"/img/webp/projects/projects_6@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Vyshyvanka Vibes Landing Page",link:"https://vyshyvanka-vibes.f.goit.study"},{image:"/img/webp/projects/projects_7.webp",image2x:"/img/webp/projects/projects_7@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Chego Jewelry Website",link:"#"},{image:"/img/webp/projects/projects_8.webp",image2x:"/img/webp/projects/projects_8@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Energy Flow Webservice",link:"https://energy-flow.f.goit.study/index.html"},{image:"/img/webp/projects/projects_9.webp",image2x:"/img/webp/projects/projects_9@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Fruitbox Online Store",link:"#"},{image:"/img/webp/projects/projects_10.webp",image2x:"/img/webp/projects/projects_10@2x.webp",stack:"React, JavaScript, Node JS, Git",title:"Starlight Studio Landing Page",link:"#"}],E=document.querySelector(".projects-menu"),g=document.querySelector(".load-more-button");let a=0;const d=3;function _({image:e,image2x:s,stack:o,title:i,link:t}){return`
      <li class="project-card">
        
          <picture>
            <source srcset="${e} 1x, ${s} 2x" type="image/webp" />
            <img src="${e}" alt="${i}" />
          </picture>

          
          <p class="project-stack">${o}</p>
          <div class="project-content">
          <h3 class="project-title">${i}</h3>
          <div class="project-link-container">
          <a href="${t}" target="_blank" class="project-link">
            Visit
            <svg class="icon-arrow" width="14.5" height="14.5">
              <use href="/img/icon.svg#icon-arr-rigth-top"></use>
            </svg>
          </a>
          </div>
        </div>
      </li>
    `}function w(){const s=p.slice(a,a+d).map(_).join("");E.insertAdjacentHTML("beforeend",s),a+=d,a>=p.length&&(g.style.display="none")}w();g.addEventListener("click",w);const b=document.querySelector(".reviews-list"),J=async()=>{const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await y.get(e)).data}catch(s){m.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",progressBar:!1,message:"Error while fetching reviews"}),console.error("Error fetching reviews:",s),b.insertAdjacentHTML("beforeend",`
        <li class="not-found-item">
        <p class="not-found-text">Not found</p>
        </li>
        `)}},P=async()=>{const e=await J();if(e){const s=e.map(o=>`
            <li class="reviews-list-item swiper-slide">
                <p class="reviews-text">${o.review}</p>
                <div class="author-information">
                    <img class="author-image" src="${o.avatar_url}" alt="review from ${o.author}" 
                    width="40" height="40" loading="lazy">
                    <p class="name-text">${o.author}</p>
                </div>
            </li>
        `).join("");b.insertAdjacentHTML("beforeend",s)}};P();new h(".reviews .swiper",{modules:[v,j,f],mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});
//# sourceMappingURL=index.js.map
