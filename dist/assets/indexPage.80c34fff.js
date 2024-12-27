import{j as e,k as a,u as t,l as s,g as o,r as n,m as l,w as i,o as d,c as u,n as r,v as c,F as p,p as v,a as m,T as C,q as g,s as f,t as h,x as w,y as M,z as k,A as y,B as b}from"./vendor.f204c7b0.js";import{u as x,g as B,c as j,a as _,d as L,b as I}from"./mindMap.bb3dd8f7.js";import{u as E}from"./token.e73ac34f.js";import{i as S}from"./login.2dbf0a66.js";import"./userCenter.22ed895d.js";const U=e("mindMapList",(()=>({mindMapList:a([]),setMindMapList:e=>{mindMap.value=e},removeMindMapList:()=>{mindMap.value={}}})),{persist:!0});const A={class:"wrap",ref:"wrap","element-loading-text":"加载中，请稍后...","element-loading-background":"rgba(255, 255, 255, 0.8)"},F={class:"header"},V={class:"center"},Z={class:"main"},H={class:"table"},$={class:"item"},q=["onClick"],z=["src"],P={class:"optMenuItem"},T={__name:"indexPage",setup(e){const T=x(),W=U(),D=t(),G=a([]);async function J(){await B().then((e=>{console.log(e),G.value=e.data,W.mindMapList=e.data})).catch((e=>{o({message:"获取列表状态失败",type:"error",duration:2500,offset:45})}))}const K=a("");async function N(){console.log("搜索思维导图:",K.value),await B(K.value).then((e=>{console.log(e),G.value=e.data,e.data.length<=0&&o({message:`没有找到“${K.value}”的结果`,type:"error",duration:2500,offset:45})})).catch((e=>{o({message:e.message,type:"error",duration:2500,offset:45})}))}const O=a(!1),Q=a(""),R=a(!1);function X(){O.value=!0}function Y(){O.value=!1}const ee={};async function ae(){R.value=!0,await j(Q.value,ee).then((e=>{console.log(e),J(),T.removeMindMap(),T.setMindMap(e.data),o({message:"创建成功",type:"success",duration:2500,offset:45,onClose:()=>{R.value=!1,D.push("/mindMap")}})})).catch((e=>{console.log(e),R.value=!1,o({message:"创建失败",type:"error",duration:2500,offset:45})}))}const te=a(!1),se=a(!1),oe=a({});function ne(e,a){const t=document.getElementById(`optMap${a}`);G.value.forEach(((e,t)=>{t!==a&&(e.optMapShow=!1)})),se.value?(t.style.transform="rotate(0deg)",se.value=!1,te.value=!1):(t.style.transform="rotate(180deg)",te.value=!0,se.value=!0,oe.value=e,console.log(oe.value))}function le(){D.push("/userCenter")}const ie=E(),de=a(!1);return s((async()=>{G.value=W.mindMapList,de.value=!0;let e=await S();e?(""!==ie.token&&o({message:"登录已过期，请重新登录",type:"error",duration:2500,offset:45}),de.value=!1,D.push("/login")):!1===e&&await J().then((()=>{de.value=!1})),console.log(G),document.addEventListener("deviceready",(()=>{window.StatusBar.backgroundColorByHexString("#5ebaf9"),window.innerWidth<=787?window.screen.orientation.lock("portrait"):window.screen.orientation.lock("landscape")}),!1)})),(e,a)=>{const t=n("el-icon"),s=l("loading");return i((d(),u("div",A,[r("div",F,[r("div",{class:"left",onClick:le},a[9]||(a[9]=[r("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M9.59286 22.5779C7.52932 23.8058 2.1189 26.3141 5.41474 29.4539C7.02328 30.9866 8.81557 32.0833 11.0687 32.0833H23.9283C26.1829 32.0833 27.9752 30.9866 29.5837 29.4539C32.8795 26.3141 27.4691 23.8058 25.4056 22.5779C23.0107 21.1631 20.2801 20.4168 17.4985 20.4168C14.7169 20.4168 11.9878 21.1631 9.59286 22.5779ZM24.0624 9.47913C24.0624 11.2196 23.371 12.8888 22.1403 14.1195C20.9096 15.3502 19.2404 16.0416 17.4999 16.0416C15.7595 16.0416 14.0903 15.3502 12.8596 14.1195C11.6288 12.8888 10.9374 11.2196 10.9374 9.47913C10.9374 7.73864 11.6288 6.06945 12.8596 4.83874C14.0903 3.60803 15.7595 2.91663 17.4999 2.91663C19.2404 2.91663 20.9096 3.60803 22.1403 4.83874C23.371 6.06945 24.0624 7.73864 24.0624 9.47913Z",stroke:"#1A1A1A","stroke-width":"2.66667","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),r("div",V,[a[10]||(a[10]=r("div",{class:"searchIcon"},[r("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M38 38L29.3 29.3M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z",stroke:"#1E1E1E","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),i(r("input",{class:"searchInput",type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>K.value=e),onBlur:N},null,544),[[c,K.value]])]),a[11]||(a[11]=r("div",{class:"right"},null,-1))]),r("div",Z,[r("div",H,[(d(!0),u(p,null,v(G.value,((e,a)=>(d(),u("div",$,[r("div",{class:"pic",onClick:a=>async function(e){console.log(e),await I(e.id).then((e=>{T.removeMindMap(),T.setMindMap(e.data),console.log(T.mindMap),D.push("/mindMap")})).catch((e=>{console.log(e),404===e.status?o({message:"该导图不存在,请检查网络状况",type:"error",duration:2500,offset:45}):403===e.status?o({message:"权限不足",type:"error",duration:2500,offset:45}):o({message:e.message,type:"error",duration:2500,offset:45})}))}(e)},[r("img",{class:"img",src:e.data.picUrl,alt:""},null,8,z)],8,q),r("span",null,[f(h(e.title)+" ",1),m(t,{onClick:a=>ne(e,e.id),id:"optMap"+e.id},{default:g((()=>[m(w(M))])),_:2},1032,["onClick","id"])])])))),256)),r("div",{class:"addItem",onClick:X},a[12]||(a[12]=[r("div",{class:"pic"},[r("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M20.7608 7.7175C20.7608 6.95917 20.7608 6.58 20.6777 6.26938C20.5662 5.85483 20.3477 5.47685 20.0442 5.1733C19.7407 4.86975 19.3627 4.65129 18.9481 4.53979C18.1285 4.32104 16.8715 4.32104 16.0519 4.53979C15.6371 4.65107 15.2588 4.86943 14.955 5.173C14.6511 5.47656 14.4325 5.85465 14.3208 6.26938C14.2377 6.58 14.2377 6.95917 14.2377 7.7175C14.2377 9.25459 14.2377 13.284 13.7594 13.7608C13.2825 14.2392 9.25312 14.2392 7.71604 14.2392C6.95771 14.2392 6.57854 14.2392 6.26791 14.3223C5.85336 14.4338 5.47539 14.6523 5.17184 14.9558C4.86829 15.2594 4.64983 15.6373 4.53833 16.0519C4.31958 16.8715 4.31958 18.13 4.53833 18.9481C4.76437 19.7925 5.42354 20.4502 6.26791 20.6777C6.57854 20.7608 6.95771 20.7608 7.71604 20.7608C9.25312 20.7608 13.2825 20.7608 13.7594 21.2377C14.2377 21.716 14.2377 22.4846 14.2377 24.0231C14.2377 24.78 14.2377 28.42 14.3208 28.7306C14.4323 29.1452 14.6508 29.5232 14.9543 29.8267C15.2579 30.1303 15.6359 30.3487 16.0504 30.4602C16.87 30.679 18.1285 30.679 18.9467 30.4602C19.3612 30.3487 19.7392 30.1303 20.0427 29.8267C20.3463 29.5232 20.5648 29.1452 20.6762 28.7306C20.7594 28.42 20.7594 24.78 20.7594 24.0217C20.7594 22.4846 20.7594 21.716 21.2362 21.2377C21.7146 20.7608 25.744 20.7608 27.281 20.7608C28.0394 20.7608 28.4185 20.7608 28.7292 20.6777C29.1437 20.5662 29.5217 20.3478 29.8252 20.0442C30.1288 19.7407 30.3473 19.3627 30.4587 18.9481C30.6775 18.1285 30.6775 16.8715 30.4587 16.0519C30.3473 15.6373 30.1288 15.2594 29.8252 14.9558C29.5217 14.6523 29.1437 14.4338 28.7292 14.3223C28.4185 14.2392 28.0394 14.2392 27.281 14.2392C25.744 14.2392 21.7146 14.2392 21.2377 13.7608C20.7594 13.284 20.7594 9.25459 20.7594 7.7175","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),r("span",null,"新建...",-1)]))])]),m(C,{name:"fade"},{default:g((()=>[i((d(),u("div",{class:"mask",onClick:a[3]||(a[3]=e=>O.value=!1),"element-loading-text":"创建中...","element-loading-background":"rgba(255, 255, 255, 0.8)"},[m(C,{name:"optMenuShow"},{default:g((()=>[O.value?(d(),u("div",{key:0,class:"addMapForm",onClick:a[2]||(a[2]=k((()=>{}),["stop"]))},[a[13]||(a[13]=r("h2",null,"新建导图",-1)),i(r("input",{type:"text",placeholder:"起个名字吧","onUpdate:modelValue":a[1]||(a[1]=e=>Q.value=e)},null,512),[[c,Q.value]]),r("button",{class:"addMapFormBttn b1",onClick:ae},"创建"),r("button",{class:"addMapFormBttn b2",onClick:Y},"取消")])):y("",!0)])),_:1})])),[[b,O.value],[s,R.value]])])),_:1}),m(C,{name:"fade"},{default:g((()=>[i(r("div",{class:"mask",onClick:a[8]||(a[8]=e=>ne(oe.value,oe.value.id))},[m(C,{name:"optMenuShow"},{default:g((()=>[se.value?(d(),u("div",{key:0,class:"optMenu",onClick:a[7]||(a[7]=k((()=>{}),["stop"]))},[r("div",P,[i(r("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=e=>oe.value.title=e),onBlur:a[5]||(a[5]=e=>async function(){console.log(oe.value);let e=oe.value.data.data,a=oe.value.data.picUrl,t=oe.value.id,s=oe.value.title;console.log("ok"),await _(e,s,t,a).then((e=>{o({message:"重命名成功",type:"success",duration:2500,offset:45}),J()})).catch((e=>{console.log(e),o({message:"重命名失败"+e.message,type:"error",duration:2500,offset:45})})),ne(item)}())},null,544),[[c,oe.value.title]])]),r("div",{class:"optMenuItem",onClick:a[6]||(a[6]=e=>async function(){await L(oe.value.id).then((e=>{console.log(e),o({message:"删除成功",type:"success",duration:2500,offset:45}),se.value=!1,te.value=!1,J()})).catch((e=>{console.log(e),o({message:"删除失败",type:"error",duration:2500,offset:45}),se.value=!1,te.value=!1}))}())},a[14]||(a[14]=[r("button",null," 删除导图 ",-1)]))])):y("",!0)])),_:1})],512),[[b,te.value]])])),_:1})])),[[s,de.value]])}},__scopeId:"data-v-6a39066e"};export{T as default};