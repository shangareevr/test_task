import './index.html';
import './index.scss';

const burgerIcon = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__menu');
if (burgerIcon){
  burgerIcon.addEventListener('click',()=>{
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  })
};

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const btns = document.querySelectorAll('button');
const modal = document.querySelector('.modal');
btns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    modal.classList.add('active');
    document.body.classList.add('fixed');
  })
})
const close = document.querySelector('.modal__close');
close.addEventListener('click',()=>{
  modal.classList.remove('active');
  document.body.classList.remove('fixed');
});

modal.addEventListener('click',e=>{
  if(e.target.classList.contains('modal')){
    modal.classList.remove('active');
    document.body.classList.remove('fixed');
  }
})