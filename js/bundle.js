!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o;n(2);function c(){window.innerWidth<768&&!o?o=new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}):window.innerWidth>=767&&o&&(o.destroy(!0,!0),o=null)}console.log("Works!"),document.addEventListener("DOMContentLoaded",c),window.addEventListener("resize",c);var s=document.querySelectorAll(".desctop__table"),i=document.querySelectorAll(".hidden"),l=document.querySelectorAll(".hidden, .desctop__table"),r=document.querySelector(".button-open");r.addEventListener("click",(function(){r.classList.contains("button-close")?(i.forEach((function(e){e.classList.add("hidden")})),s.forEach((function(e){e.classList.add("desctop__table")})),r.textContent="Показать все"):(l.forEach((function(e){e.classList.remove("desctop__table","hidden")})),r.textContent="Скрыть"),r.classList.toggle("button-close")}));var a=document.querySelector(".repair__button"),d=document.querySelectorAll(".repair__wrapper:nth-child(n+4)");a.addEventListener("click",(function(){var e="Показать все"===a.textContent;d.forEach((function(t){return t.classList.toggle("visible",e)})),a.textContent=e?"Скрыть":"Показать все",a.classList.toggle("expanded",e)}));var u=document.querySelector(".header__menu-btn"),m=document.querySelector(".side"),f=document.querySelector(".side__menu-btn"),L=document.body,p=document.querySelector(".side__lining");u.addEventListener("click",(function(){m.classList.add("menu-open"),L.classList.add("no-scroll")})),f.addEventListener("click",(function(){m.classList.remove("menu-open"),L.classList.remove("no-scroll")})),m.addEventListener("click",(function(e){p.contains(e.target)||(m.classList.remove("menu-open"),L.classList.remove("no-scroll"))}));var v=document.querySelector(".side__contact-section-btn.side__contact-section-btn--chat"),b=document.querySelector(".feedback"),_=document.querySelector(".feedback__btn"),y=document.querySelector(".feedback__lining"),S=document.querySelector(".header__btn-chat");v.addEventListener("click",(function(){b.classList.add("feedback-open"),L.classList.add("no-scroll"),setTimeout((function(){b.classList.add("feedback-anim")}),10)})),S.addEventListener("click",(function(){b.classList.add("feedback-open"),setTimeout((function(){b.classList.add("feedback-anim")}),10),L.classList.add("no-scroll")})),_.addEventListener("click",(function(){b.classList.remove("feedback-anim"),setTimeout((function(){b.classList.remove("feedback-open")}),100),m.classList.contains("menu-open")||L.classList.remove("no-scroll")})),b.addEventListener("click",(function(e){y.contains(e.target)||(b.classList.remove("feedback-anim"),setTimeout((function(){b.classList.remove("feedback-open")}),100),m.classList.contains("menu-open")||L.classList.remove("no-scroll"))}));var k=document.querySelector(".side__contact-section-btn.side__contact-section-btn--call"),g=document.querySelector(".call"),E=document.querySelector(".call__btn"),q=document.querySelector(".call__lining"),h=document.querySelector(".header__btn-call");k.addEventListener("click",(function(){g.classList.add("call-open"),L.classList.add("no-scroll"),setTimeout((function(){g.classList.add("call-anim")}),10)})),h.addEventListener("click",(function(){g.classList.add("call-open"),setTimeout((function(){g.classList.add("call-anim")}),10),L.classList.add("no-scroll")})),E.addEventListener("click",(function(){g.classList.remove("call-anim"),setTimeout((function(){g.classList.remove("call-open")}),100),m.classList.contains("menu-open")||L.classList.remove("no-scroll")})),g.addEventListener("click",(function(e){q.contains(e.target)||(g.classList.remove("call-anim"),setTimeout((function(){g.classList.remove("call-open")}),100)),m.classList.contains("menu-open")||L.classList.remove("no-scroll")}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map