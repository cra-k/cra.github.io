_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("J5xr"),e.exports=n("nOHt")},J5xr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])},YNMu:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var o=n("nKUr"),r=(n("iJnL"),n("q1tI"));function i(e){localStorage.setItem("theme",e),document.documentElement.className=e,"theme-light"===e?document.querySelectorAll("img[data-theme='switch']").forEach((function(e){e.src=e.src.replace("dark","light")})):document.querySelectorAll("img[data-theme='switch']").forEach((function(e){e.src=e.src.replace("light","dark")}))}function a(){"theme-dark"===localStorage.getItem("theme")?i("theme-light"):i("theme-dark")}function l(e){return document.createTextNode(e)}function u(){var e=document.querySelector("#table-of-content-list");e&&(function(e){var t=document.querySelector(".main-title"),n="top-h1";t.id=n;var c=d("h2",{class:"toc-page-title"}),o=t.firstChild.data,r=d("a",{class:"toc-page-title-anchor",href:"#".concat(n)},o);c.appendChild(r),e.parentNode.insertBefore(c,e)}(e),function(e){(function(e){document.querySelectorAll(".main-section :is(h2, h3, h4)").forEach((function(t){t.classList.add(e)}))})("section-title"),document.querySelectorAll(".section-title").forEach((function(t,n){!function(e,t,n){var c="titre"+(n+1),o=t.nodeName.toLowerCase();t.id=c;var r=d("a",{class:"table-of-content-link  toc-".concat(o),href:"#".concat(c)},t.innerText),i=d("li",{class:"toc-li"});i.appendChild(r),e.appendChild(i)}(e,t,n)}))}(e))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=document.createElement(e),o=Object.getOwnPropertyNames(t);return o.forEach((function(e){c.setAttribute("".concat(e),t["".concat(e)])})),n&&c.appendChild(l(n)),c}function s(){u(),document.querySelectorAll("a[href='#']").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))})),function(){var e=document.querySelector(".burger-check"),t=document.querySelector(".app-table-of-content"),n=document.querySelector(".content-wrapper");e&&t&&n&&(e.checked=!1,t.classList.add("table-of-content-closed"),e.addEventListener("change",(function(){t.classList.toggle("table-of-content-closed")})),n.addEventListener("click",(function(){t.classList.add("table-of-content-closed"),e.checked=!1})))}()}function f(){document.querySelectorAll("figure img, figure svg").forEach((function(e){e.addEventListener("click",(function(){document.body.appendChild(function(e){var t=d("section",{class:"modal",style:"display:block"}),n=d("div",{class:"modal-content"}),c=e.cloneNode(!0),o=d("i",{class:"fas fa-close close"});return o.addEventListener("click",(function(){document.body.removeChild(t)})),n.appendChild(o),n.appendChild(c),t.appendChild(n),t}(this))}))}))}function h(){!function(){var e=document.querySelector("#slider");e&&("theme-dark"===localStorage.getItem("theme")?(e.checked=!0,i("theme-dark")):(e.checked=!1,i("theme-light")),e.addEventListener("change",a))}(),f(),s()}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.useEffect)((function(){h()})),Object(o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}},iJnL:function(e,t,n){}},[[0,0,2,1]]]);