(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(c.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},c=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,c=e.hasQuery,s=void 0!==c&&c;return n||r&&s}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},s=n("lwAK"),i=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var c=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?c=!1:t.add(r.type);break;case"meta":for(var o=0,l=f.length;o<l;o++){var u=f[o];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var d=r.props[u],p=a[u]||new Set;"name"===u&&s||!p.has(d)?(p.add(d),a[u]=p):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(s.AmpStateContext),a=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(c.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,o.isInAmpMode)(n)},t)}h.rewind=function(){};var j=h;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},R9S9:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("nKUr"),r=n("g4pe"),c=n.n(r);function s(){return Object(a.jsx)("section",{id:"app-left-side",className:"app-left-side app-table-of-content",children:Object(a.jsxs)("div",{className:"toc-wrapper flex",children:[Object(a.jsx)("h1",{className:"table-of-content-title",children:"Les Grandes lignes"}),Object(a.jsx)("nav",{className:"table-of-content-nav",children:Object(a.jsx)("ul",{id:"table-of-content-list",className:"table-of-content-list"})})]})})}var i=n("YFqc"),o=n.n(i),l={facebook:"https://www.facebook.com/Club-de-Recherche-Acad%C3%A9mique-310130176356323/",github:"https://github.com/faouziMohamed",githubRepo:function(){return"".concat(this.github,"/cra")}};function u(){var e={facebook:{link:l.facebook,className:"cra-social-fb",icon:"fab fa-facebook-f"},github:{link:l.github,className:"cra-social-github",icon:"fab fa-github"}};return Object(a.jsxs)("section",{className:"app-footer-useful-link app-footer-section flex",children:[Object(a.jsx)("h1",{className:"useful-link-title app-footer-section-title",children:"Liens utiles"}),Object(a.jsxs)("section",{className:"cra-social-link-section flex",children:[Object(a.jsx)("h2",{className:"cra-social-title",children:"CRA de l'ACEM K\xe9nitra"}),Object(a.jsx)("ul",{className:"cra-social-links-wrapper flex",children:Object.values(e).map((function(e){return Object(a.jsx)("li",{className:"cra-social-link-item",children:Object(a.jsx)(o.a,{href:e.link,children:Object(a.jsx)("a",{className:"".concat(e.className," a-cra-social-link"),children:Object(a.jsx)("i",{className:e.icon})})})},e.className)}))})]})]})}function d(){return Object(a.jsxs)("section",{className:"app-footer-github-related app-footer-section",children:[Object(a.jsx)("h1",{className:"github-related-title app-footer-section-title",children:"Am\xe9liorer cette page"}),Object(a.jsxs)("p",{className:"issues-text",children:["Reporter les erreurs du site sur",Object(a.jsx)(o.a,{href:"".concat(l.githubRepo(),"/issues"),children:Object(a.jsx)("a",{className:"issue-github",children:"github/issues"})})]}),Object(a.jsxs)("p",{className:"pull-request-text",children:["Pour contribuer \xe0 l'am\xe9lioration du site reportez-vous sur",Object(a.jsx)(o.a,{href:"".concat(l.githubRepo(),"/pulls"),children:Object(a.jsx)("a",{className:"pull-request-github",children:"github/pull request"})})]})]})}function f(){return Object(a.jsx)("aside",{className:"app-footer-copyright footer-top-item",children:Object(a.jsxs)("p",{children:["CRA - ACEM K\xe9nitra \xa9",Object(a.jsx)("span",{className:"app-footer-year","data-current-year":(new Date).getFullYear(),children:(new Date).getFullYear()})]})})}function p(){return Object(a.jsxs)("footer",{className:"app-footer flex",children:[Object(a.jsxs)("div",{className:"app-footer-content-wrapper footer-top-item flex",children:[Object(a.jsx)(u,{}),Object(a.jsx)(d,{})]}),Object(a.jsx)(f,{})]})}function h(e){var t={previous:{link:e.prevBtnLink,title:"Go to previous page",text:"Pr\xe9c\xe9dent",className:"prev-btn",icon:"fa fa-arrow-left"},next:{link:e.nextBtnLink,title:"Go to next page",text:"Suivant",className:"next-btn",icon:"fa fa-arrow-right"}};return Object(a.jsx)("nav",{className:"nav-btn-wrapper flex",children:Object.values(t).map((function(e){var t="/#"===e.link?"hidden":" ",n="".concat(e.className," ").concat(t);return n+=' nav-btn-item flex"',Object(a.jsx)(o.a,{href:e.link,children:Object(a.jsxs)("a",{className:n,title:e.title,children:[Object(a.jsx)("i",{className:e.icon,"aria-hidden":"true"}),Object(a.jsx)("span",{className:"nav-btn-text",children:e.text})]})},e.className)}))})}function j(){return Object(a.jsxs)("label",{className:"burger-wrapper",children:[Object(a.jsx)("input",{className:"burger-check hidden",type:"checkbox"}),Object(a.jsx)("div",{className:"burger-menu"})]})}function b(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{id:"top"}),Object(a.jsx)("header",{className:"app-header",children:Object(a.jsxs)("nav",{className:"app-header-nav flex",children:[Object(a.jsx)(o.a,{href:"/",children:Object(a.jsxs)("a",{className:"app-header-left-items flex",children:[Object(a.jsx)("img",{src:"/images/cra-icon.png",alt:"CRA's logo",className:"acem-icon"}),Object(a.jsxs)("div",{className:"app-nav-title flex",children:[Object(a.jsx)("span",{className:"app-nav-title-item cra",children:"CRA"}),Object(a.jsx)("span",{className:"app-nav-title-item acem",children:"ACEM"}),Object(a.jsx)("span",{className:"app-nav-title-item kenitra",children:"KENITRA"})]})]})}),Object(a.jsx)("div",{className:"app-header-right-items-parent flex",children:Object(a.jsxs)("div",{className:"app-header-right-items flex",children:[Object(a.jsxs)("label",{id:"switch",className:"switch flex",children:[Object(a.jsx)("input",{type:"checkbox",id:"slider",className:"hidden"}),Object(a.jsx)("span",{className:"slider round flex"})]}),Object(a.jsx)(o.a,{href:l.githubRepo(),children:Object(a.jsx)("a",{className:"app-header-github-btn",id:"app-github-link",children:Object(a.jsx)("i",{className:"app-header-github-icon fab fa-github"})})})]})})]})})]})}function m(e){var t=e.pageTitle,n=e.pageSubtitle;return Object(a.jsxs)("header",{className:"main-header",children:[Object(a.jsx)("h1",{className:"main-title",children:t}),Object(a.jsx)("p",{className:"main-sub-title",children:n})]})}function x(e){var t=e.data;return Object.values(t).map((function(e){return Object(a.jsx)("section",{className:"main-section","data-date":e.metadata.date,dangerouslySetInnerHTML:{__html:e.contentHTML}},e.id)}))}function v(e){var t=e.metadata,n=e.data,r=e.navigation,i=t.pageTitle,o=t.pageSubtitle;t.date,t.lastUpdate,t.path;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("title",{children:t.title}),Object(a.jsx)("meta",{charSet:"UTF-8"}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(a.jsx)("meta",{name:"author",content:t.authors}),Object(a.jsx)("meta",{name:"keywords",content:t.keywords}),Object(a.jsx)("meta",{name:"description",content:t.description}),Object(a.jsx)("meta",{name:"color-scheme",content:"dark light"}),Object(a.jsx)("meta",{name:"theme-color",content:"#4285f4"}),Object(a.jsx)("noscript",{children:Object(a.jsx)("link",{rel:"stylesheet",href:"/css/noscript.css"})})]}),Object(a.jsx)(b,{}),Object(a.jsx)(j,{}),Object(a.jsxs)("main",{className:"app-content main-content flex",children:[Object(a.jsx)(s,{}),Object(a.jsx)("div",{className:"content-wrapper",children:Object(a.jsxs)("article",{className:"main-article flex",children:[Object(a.jsx)(m,{pageTitle:i,pageSubtitle:o}),Object(a.jsx)(x,{data:n}),Object(a.jsx)(h,{prevBtnLink:r.prev,nextBtnLink:r.next}),Object(a.jsx)(p,{})]})})]})]})}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),c=n("ZhPi"),s=n("Bnag");e.exports=function(e){return a(e)||r(e)||c(e)||s()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),c=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){s(n,e);var t=l(n);function n(e){var c;return r(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(a(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c=r(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,a){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),r=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=a(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,s.resolveHref)(r,e.as):i||c}}),[r,e.href,e.as]),f=d.href,p=d.as,h=e.children,j=e.replace,b=e.shallow,m=e.scroll,x=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var v=c.Children.only(h),O=v&&"object"===typeof v&&v.ref,g=(0,o.useIntersection)({rootMargin:"200px"}),y=a(g,2),N=y[0],k=y[1],w=c.default.useCallback((function(e){N(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,N]);(0,c.useEffect)((function(){var e=k&&t&&(0,s.isLocalURL)(f),a="undefined"!==typeof x?x:n&&n.locale,r=l[f+"%"+p+(a?"%"+a:"")];e&&!r&&u(n,f,p,{locale:a})}),[p,f,k,x,t,n]);var M={ref:w,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:c,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,f,p,j,b,m,x)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var C="undefined"!==typeof x?x:n&&n.locale,_=(0,s.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);M.href=_||(0,s.addBasePath)((0,s.addLocale)(p,C,n&&n.defaultLocale))}return c.default.cloneElement(v,M)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},vNVm:function(e,t,n){"use strict";var a=n("J4zp"),r=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,r=(0,c.useRef)(),l=(0,c.useState)(!1),u=a(l,2),d=u[0],f=u[1],p=(0,c.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||d||e&&e.tagName&&(r.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,c=a.observer,s=a.elements;return s.set(e,t),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){i||d||(0,s.default)((function(){return f(!0)}))}),[d]),[p,d]};var c=n("q1tI"),s=r(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map}}]);