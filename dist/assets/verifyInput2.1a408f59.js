import{h as e,D as n,j as t,o,c as l,F as u,m as a,w as i,v as s}from"./vendor.a451946c.js";const c={class:"verify_input_container"},p=["onUpdate:modelValue","onInput","onKeydown"],v={__name:"verifyInput2",props:{digitCount:{type:Number,default:4}},emits:["input-complete"],setup(v,{emit:r}){const d=r,f=e(new Array(v.digitCount).fill(""));let m=null;return n(f.value,(()=>{f.value.includes("")||(console.log(f.value.join("")),d("input-complete",f.value.join("")))})),t((()=>{m=document.querySelectorAll(".verify_input_container .verify_input")})),(e,n)=>(o(),l("div",c,[(o(!0),l(u,null,a(v.digitCount,((n,t)=>i((o(),l("input",{"onUpdate:modelValue":e=>f.value[t]=e,type:"text",class:"verify_input",onInput:n=>function(e,n){if(console.log(m[n]),1===m[n].value.length){const e=n+1;e<m.length&&m[e].focus()}}(e.event,t),onKeydown:e=>function(e){if(event.keyCode||event.which,8===event.keyCode&&0===m[e].value.length){const n=e-1;n>=0&&(m[n].focus(),m[n].select())}}(t),maxlength:"1"},null,40,p)),[[s,f.value[t]]]))),256))]))},__scopeId:"data-v-2e120e12"};export{v as _};