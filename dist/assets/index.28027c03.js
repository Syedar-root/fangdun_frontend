import{r as e,o as r,c as t,a as o,b as n,d as s,e as i,f as c,i as a,E as d,U as l,g as p}from"./vendor.13a46dcd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const u={};u.render=function(n,s){const i=e("router-view");return r(),t("div",null,[o(i)])};const m={},_=function(e,r){return r&&0!==r.length?Promise.all(r.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":"modulepreload",r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r?new Promise(((e,r)=>{o.addEventListener("load",e),o.addEventListener("error",r)})):void 0}))).then((()=>e())):e()},f=[{path:"/",component:()=>_((()=>import("./indexPage.71cdf160.js")),["assets/indexPage.71cdf160.js","assets/indexPage.32343f6b.css","assets/vendor.13a46dcd.js","assets/mindMap.49e4d648.js","assets/token.7849ed19.js","assets/login.12df3d6c.js","assets/userCenter.9dace67b.js"])},{path:"/login",component:()=>_((()=>import("./login.96bf33f8.js")),["assets/login.96bf33f8.js","assets/login.af73ffbd.css","assets/vendor.13a46dcd.js","assets/login.12df3d6c.js","assets/token.7849ed19.js","assets/userCenter.9dace67b.js","assets/verifyInput2.3f819cc4.js","assets/verifyInput2.b5f6c3c9.css"])},{path:"/register",component:()=>_((()=>import("./register.e7562c59.js")),["assets/register.e7562c59.js","assets/register.b74eddcd.css","assets/vendor.13a46dcd.js","assets/verifyInput2.3f819cc4.js","assets/verifyInput2.b5f6c3c9.css","assets/token.7849ed19.js","assets/login.12df3d6c.js","assets/userCenter.9dace67b.js"])},{path:"/resetPassword",component:()=>_((()=>import("./resetPassword.79e528c4.js")),["assets/resetPassword.79e528c4.js","assets/vendor.13a46dcd.js","assets/login.12df3d6c.js","assets/token.7849ed19.js","assets/userCenter.9dace67b.js"])},{path:"/mindMap",component:()=>_((()=>import("./mindMap.ba27e112.js")),["assets/mindMap.ba27e112.js","assets/mindMap.4b9e8e1d.css","assets/vendor.13a46dcd.js","assets/ai.0595d436.js","assets/token.7849ed19.js","assets/mindMap.49e4d648.js"])},{path:"/indexPage",component:()=>_((()=>import("./indexPage.71cdf160.js")),["assets/indexPage.71cdf160.js","assets/indexPage.32343f6b.css","assets/vendor.13a46dcd.js","assets/mindMap.49e4d648.js","assets/token.7849ed19.js","assets/login.12df3d6c.js","assets/userCenter.9dace67b.js"])},{path:"/userCenter",component:()=>_((()=>import("./userCenter.4a025799.js")),["assets/userCenter.4a025799.js","assets/userCenter.6527045f.css","assets/vendor.13a46dcd.js","assets/userCenter.9dace67b.js","assets/token.7849ed19.js","assets/ai.0595d436.js"])}],h=n({history:s(),routes:f});const E=i(u),g=c(),P=p();g.use(P),E.use(h),E.use(a);for(const[y,L]of Object.entries(d))E.component(y,L);E.use(g),E.use(l),E.mount("#app");
