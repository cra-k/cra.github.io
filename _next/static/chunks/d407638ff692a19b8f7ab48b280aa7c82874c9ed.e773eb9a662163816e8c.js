(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(c.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},c=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,c=e.hasQuery,i=void 0!==c&&c;return n||r&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var c=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?c=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?c=!1:t.add(r.type);break;case"meta":for(var o=0,l=p.length;o<l;o++){var u=p[o];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=r.props[u],f=a[u]||new Set;"name"===u&&i||!f.has(d)?(f.add(d),a[u]=f):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(c.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,o.isInAmpMode)(n)},t)}h.rewind=function(){};var j=h;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"C/Fq":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a={facebook:"https://www.facebook.com/Club-de-Recherche-Acad%C3%A9mique-310130176356323/",github:"https://github.com/faouziMohamed",githubRepo:function(){return"".concat(this.github,"/cra")}};function r(e){return e.children.replace(/^\w/,(function(e){return e.toUpperCase()}))}function c(e){return e.children.replace(/\w\S*/g,(function(e){return r({children:"".concat(e)})}))}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Jax6:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var a=n("nKUr"),r=(n("u+OR"),n("YFqc")),c=n.n(r);function i(e){var t=e.navigation,n=e.isArticle,r=t||{prev:"/#",next:"/#"},i={previous:{link:r.prev,title:"Go to previous page",text:"Pr\xe9c\xe9dent",className:"prev-btn",icon:"fa fa-arrow-left"},next:{link:r.next,title:"Go to next page",text:"Suivant",className:"next-btn",icon:"fa fa-arrow-right"}};return Object(a.jsx)(m,{condition:n,children:Object(a.jsx)("nav",{className:"nav-btn-wrapper flex",children:Object.values(i).map((function(e){var t="/#"===e.link?"hidden":" ",n="".concat(e.className," ").concat(t);return n+=' nav-btn-item flex"',Object(a.jsx)(c.a,{href:e.link,children:Object(a.jsxs)("a",{className:n,title:e.title,children:[Object(a.jsx)("i",{className:e.icon,"aria-hidden":"true"}),Object(a.jsx)("span",{className:"nav-btn-text",children:e.text})]})},e.className)}))})})}function s(e){var t=e.isArticle;return Object(a.jsx)(m,{condition:t,children:Object(a.jsxs)("label",{className:"burger-wrapper",children:[Object(a.jsx)("input",{className:"burger-check hidden",type:"checkbox"}),Object(a.jsx)("div",{className:"burger-menu"})]})})}var o=n("aIN1"),l=n("iCvX"),u=n("ZHh6"),d=n("v1K8"),p=n("lXAN");function f(e){var t=e.isArticle;return Object(a.jsx)(m,{condition:t,children:Object(a.jsx)("section",{id:"app-left-side",className:"app-left-side app-table-of-content",children:Object(a.jsxs)("div",{className:"toc-wrapper flex",children:[Object(a.jsx)("h1",{className:"table-of-content-title",children:"Les Grandes lignes"}),Object(a.jsx)("nav",{className:"table-of-content-nav",children:Object(a.jsx)("ul",{id:"table-of-content-list",className:"table-of-content-list"})})]})})})}function h(e){var t=e.article,n=e.children,r=e.metadata,c=e.navigation,h=void 0!==t;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"root",id:"app",children:[Object(a.jsx)(l.a,{metadata:r}),Object(a.jsx)(u.a,{}),Object(a.jsx)(s,{isArticle:h}),Object(a.jsxs)("main",{className:"app-content main-content flex",children:[Object(a.jsx)(f,{isArticle:h}),Object(a.jsxs)("div",{className:"content-wrapper",children:[Object(a.jsx)("span",{id:"top"}),Object(a.jsxs)("article",{className:"main-article flex",children:[Object(a.jsx)(p.a,{titles:r}),Object(a.jsx)(j,{children:n}),Object(a.jsx)(i,{navigation:c,isArticle:h}),Object(a.jsx)(o.a,{}),Object(a.jsx)(m,{condition:h,children:Object(a.jsx)("a",{className:"to-top",alt:"Monter en haut de la page",href:"#top"})})]})]})]}),Object(a.jsx)(d.a,{})]})})}function j(e){var t=e.children;return Object(a.jsx)(a.Fragment,{children:t})}function m(e){var t=e.condition,n=e.children;return t&&Object(a.jsx)(a.Fragment,{children:n})}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),c=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||c(e)||i()}},WCZw:function(e,t,n){"use strict";function a(e){localStorage.setItem("theme",e),document.documentElement.className=e,"theme-light"===e?document.querySelectorAll("img[data-theme='switch']").forEach((function(e){e.src=e.src.replace("dark","light")})):document.querySelectorAll("img[data-theme='switch']").forEach((function(e){e.src=e.src.replace("light","dark")}))}function r(){"theme-dark"===localStorage.getItem("theme")?a("theme-light"):a("theme-dark")}function c(){var e=document.querySelector("#slider");e&&("theme-dark"===localStorage.getItem("theme")?(a("theme-dark"),e.checked=!0):(a("theme-light"),e.checked=!1),e.addEventListener("change",r))}n.d(t,"a",(function(){return c}))},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),c=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var c;return r(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(a(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},ZHh6:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("o0o1"),r=n.n(a);function c(e,t,n,a,r,c,i){try{var s=e[c](i),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(a,r)}var i=n("nKUr"),s=n("YFqc"),o=n.n(s);function l(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{className:"app-header",children:Object(i.jsxs)("nav",{className:"app-header-nav flex",children:[Object(i.jsx)(o.a,{href:"/home",children:Object(i.jsx)("a",{className:"app-header-left-items flex",children:Object(i.jsx)(u,{})})}),Object(i.jsx)("div",{className:"app-header-right-items-parent flex",children:Object(i.jsx)(d,{})})]})})})}function u(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:"/images/cra-icon.png",alt:"CRA's logo",className:"acem-icon"}),Object(i.jsxs)("div",{className:"app-nav-title flex",children:[Object(i.jsx)("span",{className:"app-nav-title-item cra",children:"CRA"}),Object(i.jsx)("span",{className:"app-nav-title-item acem",children:"ACEM"}),Object(i.jsx)("span",{className:"app-nav-title-item kenitra",children:"KENITRA"})]})]})}function d(){var e=function(){var e,t=(e=r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}return e.abrupt("return");case 2:return t=document.querySelector("#phone-number").dataset.phoneNumber,e.prev=3,e.next=6,navigator.clipboard.writeText(t);case 6:document.querySelector(".copied").classList.add("active"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){c(i,a,r,s,o,"next",e)}function o(e){c(i,a,r,s,o,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"app-header-right-items flex",children:[Object(i.jsxs)("label",{id:"switch",className:"switch flex",style:{visibility:"visible"},children:[Object(i.jsx)("input",{type:"checkbox",id:"slider",className:"hidden"}),Object(i.jsx)("span",{className:"slider round flex"})]}),Object(i.jsxs)("div",{className:"app-header-social-container",children:[Object(i.jsx)(o.a,{href:"https://github.com/cra-k",children:Object(i.jsx)("a",{className:"app-header-social up app-header-github-icon",children:Object(i.jsx)("i",{className:"fab fa-github-square"})})}),Object(i.jsx)(o.a,{href:"https://www.facebook.com/Club-de-Recherches-Acad%C3%A9miques-310130176356323/",children:Object(i.jsx)("a",{className:"app-header-social up app-header-facebook-icon",children:Object(i.jsx)("i",{className:"fab fa-facebook-square "})})}),Object(i.jsx)("i",{className:"fas fa-phone-square-alt app-header-social up app-header-phone-call-icon","aria-hidden":"true",onClick:e,title:"Cliquez pour copier le num\xe9ro de t\xe9l\xe9phone",children:Object(i.jsxs)("address",{id:"phone-number",className:"phone-number-in-header","data-phone-number":"+212652032558",children:[Object(i.jsx)("i",{className:" copied fas fa-check-circle",children:" Copi\xe9"}),"(212) 652-032 558"]})})]})]})}},aIN1:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("nKUr"),r=n("YFqc"),c=n.n(r),i=n("C/Fq");function s(){var e={facebook:{link:i.c.facebook,className:"cra-social-fb",icon:"fab fa-facebook-f"},github:{link:i.c.github,className:"cra-social-github",icon:"fab fa-github"}};return Object(a.jsxs)("section",{className:"app-footer-useful-link app-footer-section",children:[Object(a.jsx)("h1",{className:"useful-link-title app-footer-section-title",children:"Liens utiles"}),Object(a.jsx)("ul",{className:"cra-social-links-wrapper flex",children:Object.values(e).map((function(e){return Object(a.jsx)("li",{className:"cra-social-link-item",children:Object(a.jsx)(c.a,{href:e.link,children:Object(a.jsx)("a",{className:"".concat(e.className," a-cra-social-link"),children:Object(a.jsx)("i",{className:e.icon})})})},e.className)}))})]})}function o(){return Object(a.jsxs)("section",{className:"app-footer-github-related app-footer-section",children:[Object(a.jsx)("h1",{className:"github-related-title app-footer-section-title",children:"Am\xe9liorer cette page"}),Object(a.jsxs)("p",{className:"issues-text",children:["Reporter les erreurs du site sur"," ",Object(a.jsx)(c.a,{href:"".concat(i.c.githubRepo(),"/issues"),children:Object(a.jsx)("a",{className:"issue-github",children:"github/issues"})}),"."]}),Object(a.jsxs)("p",{className:"pull-request-text",children:["Pour contribuer \xe0 l'am\xe9lioration du site reportez-vous sur"," ",Object(a.jsx)(c.a,{href:"".concat(i.c.githubRepo(),"/pulls"),children:Object(a.jsx)("a",{className:"pull-request-github",children:"github/pull request"})}),"."]})]})}function l(){return Object(a.jsx)("aside",{className:"app-footer-copyright footer-top-item",children:Object(a.jsxs)("p",{children:["CRA - ACEM K\xe9nitra \xa9",Object(a.jsx)("span",{className:"app-footer-year","data-current-year":(new Date).getFullYear(),children:(new Date).getFullYear()})]})})}function u(){return Object(a.jsxs)("footer",{className:"app-footer flex",children:[Object(a.jsxs)("div",{className:"app-footer-content-wrapper footer-top-item flex",children:[Object(a.jsx)(s,{}),Object(a.jsx)(o,{})]}),Object(a.jsx)(l,{})]})}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c=r(n("q1tI")),i=n("elyg"),s=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,a){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),c=n[0],s=n[1];return{href:c,as:e.as?(0,i.resolveHref)(r,e.as):s||c}}),[r,e.href,e.as]),p=d.href,f=d.as,h=e.children,j=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var x=c.Children.only(h),g=x&&"object"===typeof x&&x.ref,O=(0,o.useIntersection)({rootMargin:"200px"}),y=a(O,2),N=y[0],k=y[1],w=c.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,c.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(p),a="undefined"!==typeof v?v:n&&n.locale,r=l[p+"%"+f+(a?"%"+a:"")];e&&!r&&u(n,p,f,{locale:a})}),[f,p,k,v,t,n]);var M={ref:w,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,c,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:c,locale:o,scroll:s}))}(e,n,p,f,j,m,b,v)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,p,f,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var C="undefined"!==typeof v?v:n&&n.locale,A=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(f,C,n&&n.locales,n&&n.domainLocales);M.href=A||(0,i.addBasePath)((0,i.addLocale)(f,C,n&&n.defaultLocale))}return c.default.cloneElement(x,M)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},iCvX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("nKUr"),r=n("g4pe"),c=n.n(r);function i(e){var t=e.metadata;t.ogImg||(t.ogImg="/images/dwIcons/acem-logo-white.svg");var n=t.path,r="https://cra-acem.tech".concat(n);return Object(a.jsxs)(c.a,{children:[Object(a.jsx)("meta",{charSet:"UTF-8"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(a.jsx)("meta",{name:"author",content:t.authors}),Object(a.jsx)("meta",{name:"keywords",content:t.keywords}),Object(a.jsx)("meta",{name:"description",content:t.description}),Object(a.jsx)("meta",{name:"color-scheme",content:"dark light"}),Object(a.jsx)("meta",{name:"theme-color",content:"#4285f4"}),Object(a.jsx)("link",{rel:"canonical",href:r}),Object(a.jsx)("meta",{property:"og:url",content:r}),Object(a.jsx)("meta",{property:"og:title",content:t.title}),Object(a.jsx)("meta",{property:"og:description",content:t.description}),Object(a.jsx)("meta",{property:"og:image",content:t.ogImg}),Object(a.jsx)("meta",{property:"og:type",content:"article"}),Object(a.jsx)("meta",{property:"og:locale",content:"fr_FR"}),Object(a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/images/favicon.ico"}),Object(a.jsx)("noscript",{children:Object(a.jsx)("link",{rel:"stylesheet",href:"./styles/noscript.css"})})]})}},lXAN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("nKUr");function r(e){var t=e.titles;return Object(a.jsxs)("header",{className:"main-header",children:[Object(a.jsx)("h1",{className:"main-title",children:t.pageTitle}),Object(a.jsx)("p",{className:"main-sub-title",children:t.pageSubtitle})]})}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},"u+OR":function(e,t,n){},v1K8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("nKUr");function r(){return Object(a.jsx)("noscript",{children:Object(a.jsx)("div",{className:"noscript-layout",children:Object(a.jsxs)("p",{className:"no-script-text",children:[Object(a.jsx)("i",{className:"fas fa-exclamation-triangle"}),Object(a.jsx)("span",{children:"La page web fonctionne bien avec javascript activ\xe9"})]})})})}},vNVm:function(e,t,n){"use strict";var a=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,r.useRef)(),l=(0,r.useState)(!1),u=a(l,2),d=u[0],p=u[1],f=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,c=a.observer,i=a.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),s.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!i&&!d){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[d]),[f,d]};var r=n("q1tI"),c=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var s=new Map}}]);