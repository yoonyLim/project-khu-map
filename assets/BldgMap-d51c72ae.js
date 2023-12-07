import{u as b,a as I,r as d,c as h,o as x,b as D,d as a,e as i,f as r,g as p,t as c,F as L,h as R,i as V,j as A,k as P,l as t,n as y,_ as o}from"./index-a42ed6f8.js";const O={class:"px-8 w-full py-8 flex justify-center"},T={class:"max-w-screen-xl w-full flex-col"},k={class:"mb-8"},w=r("span",{class:"font-bold text-white"},"← 3D 맵으로",-1),B=[w],C={class:"w-full flex flex-col"},F={class:"font-bold text-3xl"},N={class:"mt-4 font-bold text-3xl text-gray-400"},S={key:0,class:"w-full flex mt-4 py-4 border-b"},j=["onClick"],q={class:"w-full h-full"},G={__name:"BldgMap",setup(M){const _=b(),v=I(),u=_.params.bldg,e=d(""),f=d(""),n=d(null);_.params.floor?(e.value=_.params.floor,f.value=_.params.classroom):e.value="1";const E=h(()=>{if(u=="멀티미디어관-글로벌관"){if(e.value=="B2")return t(()=>o(()=>import("./B2F-75cb5316.js"),["assets/B2F-75cb5316.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/B2F-c2baf070.css"]));if(e.value=="B1")return t(()=>o(()=>import("./B1F-a78666ee.js"),["assets/B1F-a78666ee.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/B1F-8e1c4a2a.css"]));if(e.value=="1")return t(()=>o(()=>import("./1F-c1899b4c.js"),["assets/1F-c1899b4c.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/1F-e8368f13.css"]));if(e.value=="2")return t(()=>o(()=>import("./2F-9aef2114.js"),["assets/2F-9aef2114.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/2F-45c90377.css"]));if(e.value=="3")return t(()=>o(()=>import("./3F-7f17be39.js"),["assets/3F-7f17be39.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/3F-acf77fc7.css"]));if(e.value=="4")return t(()=>o(()=>import("./4F-2463d8bd.js"),["assets/4F-2463d8bd.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/4F-2502decc.css"]));if(e.value=="5")return t(()=>o(()=>import("./5F-e05649be.js"),["assets/5F-e05649be.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/5F-e8f51272.css"]));if(e.value=="6")return t(()=>o(()=>import("./6F-fdb051b6.js"),["assets/6F-fdb051b6.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/6F-cd5a78d1.css"]));if(e.value=="7")return t(()=>o(()=>import("./7F-c23ba838.js"),["assets/7F-c23ba838.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/7F-ef49aea5.css"]));if(e.value=="8")return t(()=>o(()=>import("./8F-d48f7366.js"),["assets/8F-d48f7366.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/8F-1ca912ae.css"]));if(e.value=="9")return t(()=>o(()=>import("./9F-911921ac.js"),["assets/9F-911921ac.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/9F-bab7418a.css"]))}else if(u=="전자정보-응용과학대학관"){if(e.value=="B1")return t(()=>o(()=>import("./B1F-868490e6.js"),["assets/B1F-868490e6.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/B1F-7f89a3fc.css"]));if(e.value=="1")return t(()=>o(()=>import("./1F-e3838e67.js"),["assets/1F-e3838e67.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/1F-2924c3d1.css"]));if(e.value=="1-1")return t(()=>o(()=>import("./1-1F-c7026e4a.js"),["assets/1-1F-c7026e4a.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/1-1F-db54b0d9.css"]));if(e.value=="2")return t(()=>o(()=>import("./2F-2d52e591.js"),["assets/2F-2d52e591.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/2F-a39e2583.css"]));if(e.value=="2-1")return t(()=>o(()=>import("./2-1F-4e0fbfee.js"),["assets/2-1F-4e0fbfee.js","assets/index-a42ed6f8.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/2-1F-8cced175.css"]))}return null});function g(l){e.value=l}return x(()=>{localStorage.getItem("reloaded")?localStorage.removeItem("reloaded"):(localStorage.setItem("reloaded","1"),v.go(0));for(var l of D.bldgs)l.bldgName==u&&(n.value=l)}),(l,m)=>(a(),i("div",O,[r("div",T,[r("div",k,[r("button",{onClick:m[0]||(m[0]=s=>{p(v).push({name:"home"})}),class:"px-4 py-2 bg-gray-300 hover:bg-gray-500 transition-bg-colors duration-300 ease-in-out"},B)]),r("div",C,[r("span",F,c(p(u)),1),r("span",N,c(e.value)+"F",1)]),n.value?(a(),i("div",S,[(a(!0),i(L,null,R(n.value.floors,s=>(a(),i("div",{key:s.id},[r("button",{onClick:$=>g(s.floor),class:y([e.value==s.floor?"text-white bg-red-300":"bg-gray-300","px-4 py-2 mr-4 hover:bg-red-300 transition-bg-colors duration-300 ease-in-out"])},[r("span",null,c(s.floor)+"F",1)],10,j)]))),128))])):V("",!0),r("div",q,[(a(),A(P(E.value),{query:f.value},null,8,["query"]))])])]))}};export{G as default};
