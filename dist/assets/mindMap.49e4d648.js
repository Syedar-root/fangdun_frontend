import{a as t,u as e,b as a}from"./token.7849ed19.js";import{h as r,j as n}from"./vendor.13a46dcd.js";const d=t(),o=e();function i(t){return a.get(d.url+"/mindmap/select/",{params:{title:t},headers:{Authorization:"Bearer "+o.token}})}function s(t,e,r,n){return a.put(d.url+"/mindmap/update/"+r+"/",{data:{data:t,picUrl:n},title:e},{headers:{Authorization:"Bearer "+o.token}})}function u(t,e){return console.log(t,e,o.token),a.post(d.url+"/mindmap/create/",{title:t,data:e},{headers:{Authorization:"Bearer "+o.token}})}function l(t){return a.delete(d.url+"/mindmap/delete/"+t+"/",{headers:{Authorization:"Bearer "+o.token}})}const c=r("mindMap",(()=>{const t=n({data:{data:{root:{data:{text:"中心议题"},children:[{data:{text:"二级议题1"},children:[]},{data:{text:"二级议题2"},children:[]},{data:{text:"二级议题3"},children:[]},{data:{text:"二级议题4"},children:[]}]}}}});return{mindMap:t,setMindMap:e=>{t.value=e},removeMindMap:()=>{t.value={}}}}),{persist:!0});export{s as a,u as c,l as d,i as g,c as u};