import{h as e,o as s,c as a,l as t,w as l,v as o,t as r}from"./vendor.a451946c.js";import{v as u}from"./login.43cd1ae7.js";import{u as n}from"./token.a72cd05d.js";import"./userCenter.9a6bef5c.js";n();const d={class:"wrap"},c={class:"main"},i={class:"form"},m={class:"formItem"},v={class:"formItem"},p=["disabled"],f={class:"formItem"},g={__name:"resetPassword",setup(n){const g=e({email:"",code:"",password:""}),b=e("发送验证码"),y=e(!1);function h(){y.value=!0;let e=30;const s=setInterval((()=>{b.value=`重新发送（${e--}s）`,0===e&&(clearInterval(s),y.value=!1,b.value="发送验证码")}),1e3);u(g.value.email).then((e=>{200===e.status&&ElMessage({message:"验证码发送成功",type:"success",duration:2500,offset:45})})).catch((e=>{ElMessage({message:"验证码发送失败",type:"error",duration:2500,offset:45})}))}function w(){w().then((e=>{200===response.status&&ElMessage({message:"密码修改成功",type:"success",duration:2500,offset:45})})).catch((e=>{ElMessage({message:"密码修改失败",type:"error",duration:2500,offset:45})}))}return(e,u)=>(s(),a("div",d,[u[7]||(u[7]=t("div",{class:"header"}," 重置密码（前端不想做页面） ",-1)),t("div",c,[t("div",i,[t("div",m,[u[4]||(u[4]=t("label",{for:""},"邮箱",-1)),l(t("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=e=>g.value.email=e)},null,512),[[o,g.value.email]])]),t("div",v,[u[5]||(u[5]=t("label",{for:""},"验证码",-1)),l(t("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=e=>g.value.code=e)},null,512),[[o,g.value.code]]),t("button",{onClick:h,disabled:y.value},r(b.value),9,p)]),t("div",f,[u[6]||(u[6]=t("label",{for:""},"新密码",-1)),l(t("input",{type:"text","onUpdate:modelValue":u[2]||(u[2]=e=>g.value.password=e)},null,512),[[o,g.value.password]])]),t("div",{class:"formItem",onClick:w},[t("button",{onClick:u[3]||(u[3]=()=>{})},"确认")])])])]))}};export{g as default};