import{r as e,o as r,c as t,a as o,b as n,d as s,e as i,f as c,i as a,E as d,U as l,g as p}from"./vendor.720acc60.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const u={};u.render=function(n,s){const i=e("router-view");return r(),t("div",null,[o(i)])};const m={},_=function(e,r){return r&&0!==r.length?Promise.all(r.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":"modulepreload",r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r?new Promise(((e,r)=>{o.addEventListener("load",e),o.addEventListener("error",r)})):void 0}))).then((()=>e())):e()},f=[{path:"/",component:()=>_((()=>import("./indexPage.b1c0edd8.js")),["assets/indexPage.b1c0edd8.js","assets/indexPage.3e2cbda4.css","assets/vendor.720acc60.js","assets/mindMap.7efaf5ee.js","assets/token.48e906ce.js","assets/login.aea3c1de.js","assets/userCenter.2a8f9ef9.js"])},{path:"/login",component:()=>_((()=>import("./login.b7856e97.js")),["assets/login.b7856e97.js","assets/login.0b7cfb9e.css","assets/vendor.720acc60.js","assets/login.aea3c1de.js","assets/token.48e906ce.js","assets/userCenter.2a8f9ef9.js","assets/verifyInput2.10880d17.js","assets/verifyInput2.b5f6c3c9.css"])},{path:"/register",component:()=>_((()=>import("./register.90b4a773.js")),["assets/register.90b4a773.js","assets/register.81f14cb0.css","assets/vendor.720acc60.js","assets/verifyInput2.10880d17.js","assets/verifyInput2.b5f6c3c9.css","assets/token.48e906ce.js","assets/login.aea3c1de.js","assets/userCenter.2a8f9ef9.js"])},{path:"/resetPassword",component:()=>_((()=>import("./resetPassword.550fe80f.js")),["assets/resetPassword.550fe80f.js","assets/vendor.720acc60.js","assets/login.aea3c1de.js","assets/token.48e906ce.js","assets/userCenter.2a8f9ef9.js"])},{path:"/mindMap",component:()=>_((()=>import("./mindMap.6a89e897.js")),["assets/mindMap.6a89e897.js","assets/mindMap.503ea60a.css","assets/vendor.720acc60.js","assets/ai.dce343f5.js","assets/token.48e906ce.js","assets/mindMap.7efaf5ee.js"])},{path:"/indexPage",component:()=>_((()=>import("./indexPage.b1c0edd8.js")),["assets/indexPage.b1c0edd8.js","assets/indexPage.3e2cbda4.css","assets/vendor.720acc60.js","assets/mindMap.7efaf5ee.js","assets/token.48e906ce.js","assets/login.aea3c1de.js","assets/userCenter.2a8f9ef9.js"])},{path:"/userCenter",component:()=>_((()=>import("./userCenter.1f147677.js")),["assets/userCenter.1f147677.js","assets/userCenter.72da3e6c.css","assets/vendor.720acc60.js","assets/userCenter.2a8f9ef9.js","assets/token.48e906ce.js","assets/ai.dce343f5.js"])}],h=n({history:s(),routes:f});const E=i(u),g=c(),P=p();g.use(P),E.use(h),E.use(a);for(const[y,L]of Object.entries(d))E.component(y,L);E.use(g),E.use(l),E.mount("#app");