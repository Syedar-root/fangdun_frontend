import{u as t,a as e,b as a}from"./token.48e906ce.js";import{B as r,h as n}from"./vendor.720acc60.js";const o=t(),d=e();function i(t){return a.get(o.url+"/mindmap/select/",{params:{title:t},headers:{Authorization:"Bearer "+d.token}})}function s(t,e,r,n){return a.put(o.url+"/mindmap/update/"+r+"/",{data:{data:t,picUrl:n},title:e},{headers:{Authorization:"Bearer "+d.token}})}function u(t,e){return console.log(t,e,d.token),a.post(o.url+"/mindmap/create/",{title:t,data:e},{headers:{Authorization:"Bearer "+d.token}})}function c(t){return a.delete(o.url+"/mindmap/delete/"+t+"/",{headers:{Authorization:"Bearer "+d.token}})}const l=r("mindMap",(()=>{const t=n({data:{data:{root:{data:{text:"中心议题"},children:[{data:{text:"二级议题1"},children:[]},{data:{text:"二级议题2"},children:[]},{data:{text:"二级议题3"},children:[]},{data:{text:"二级议题4"},children:[]}]}}}});return{mindMap:t,setMindMap:e=>{t.value=e},removeMindMap:()=>{t.value={}}}}),{persist:!0});export{s as a,u as c,c as d,i as g,l as u};