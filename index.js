(()=>{"use strict";const e=document.querySelector(".header__burger"),t=document.querySelector(".burger__menu");e&&e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active")})),new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const c=document.querySelectorAll("button"),s=document.querySelector(".modal");c.forEach((e=>{e.addEventListener("click",(()=>{s.classList.add("active"),document.body.classList.add("fixed")}))})),document.querySelector(".modal__close").addEventListener("click",(()=>{s.classList.remove("active"),document.body.classList.remove("fixed")})),s.addEventListener("click",(e=>{e.target.classList.contains("modal")&&(s.classList.remove("active"),document.body.classList.remove("fixed"))}))})();