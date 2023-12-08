import{u as b,a as I,r as d,c as h,o as x,b as D,d as a,e as i,f as r,g as p,t as c,F as R,h as L,i as V,j as A,k as P,l as t,n as y,_ as o}from"./index-14eebca2.js";const O={class:"px-8 w-full py-8 flex justify-center"},T={class:"max-w-screen-xl w-full flex-col"},k={class:"mb-8"},w=r("span",{class:"font-bold text-white"},"← 3D 맵으로",-1),B=[w],C={class:"w-full flex flex-col"},F={class:"font-bold text-3xl"},N={class:"mt-4 font-bold text-3xl text-gray-400"},S={key:0,class:"w-full flex mt-4 py-4 border-b"},j=["onClick"],q={class:"w-full h-full"},U={__name:"BldgMap",setup(M){const _=b(),v=I(),u=decodeURI(_.params.bldg),e=d(""),f=d(""),n=d(null);_.params.floor?(e.value=_.params.floor,f.value=_.params.classroom):e.value="1";const E=h(()=>{if(u=="멀티미디어관-글로벌관"){if(e.value=="B2")return t(()=>o(()=>import("./B2F-6d17d163.js"),["assets/B2F-6d17d163.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/B2F-1f8c34b4.css"]));if(e.value=="B1")return t(()=>o(()=>import("./B1F-59aa1d45.js"),["assets/B1F-59aa1d45.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/B1F-e0dacb88.css"]));if(e.value=="1")return t(()=>o(()=>import("./1F-7a489998.js"),["assets/1F-7a489998.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/1F-68b34907.css"]));if(e.value=="2")return t(()=>o(()=>import("./2F-336d75ff.js"),["assets/2F-336d75ff.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/2F-b834df14.css"]));if(e.value=="3")return t(()=>o(()=>import("./3F-e4f1c0c7.js"),["assets/3F-e4f1c0c7.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/3F-0c5f6a3e.css"]));if(e.value=="4")return t(()=>o(()=>import("./4F-8de9b30b.js"),["assets/4F-8de9b30b.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/4F-1b19109c.css"]));if(e.value=="5")return t(()=>o(()=>import("./5F-b215aec0.js"),["assets/5F-b215aec0.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/5F-7c708f37.css"]));if(e.value=="6")return t(()=>o(()=>import("./6F-e4ac2feb.js"),["assets/6F-e4ac2feb.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/6F-bf1bb351.css"]));if(e.value=="7")return t(()=>o(()=>import("./7F-3d6a94bb.js"),["assets/7F-3d6a94bb.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/7F-606860f1.css"]));if(e.value=="8")return t(()=>o(()=>import("./8F-7b0c834b.js"),["assets/8F-7b0c834b.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/8F-ba7d4918.css"]));if(e.value=="9")return t(()=>o(()=>import("./9F-da54c501.js"),["assets/9F-da54c501.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/9F-11b2f4cd.css"]))}else if(u=="전자정보-응용과학대학관"){if(e.value=="B1")return t(()=>o(()=>import("./B1F-4af30527.js"),["assets/B1F-4af30527.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/B1F-08093c07.css"]));if(e.value=="1")return t(()=>o(()=>import("./1F-8e42ff3a.js"),["assets/1F-8e42ff3a.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/1F-63bf94d5.css"]));if(e.value=="1-1")return t(()=>o(()=>import("./1-1F-dfd38a5d.js"),["assets/1-1F-dfd38a5d.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/1-1F-ab91920d.css"]));if(e.value=="2")return t(()=>o(()=>import("./2F-f5600e9a.js"),["assets/2F-f5600e9a.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/2F-a3f4fb28.css"]));if(e.value=="2-1")return t(()=>o(()=>import("./2-1F-64867867.js"),["assets/2-1F-64867867.js","assets/index-14eebca2.js","assets/index-930e8353.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/2-1F-d1024064.css"]))}return null});function g(l){e.value=l}return x(()=>{localStorage.getItem("reloaded")?localStorage.removeItem("reloaded"):(localStorage.setItem("reloaded","1"),v.go(0));for(var l of D.bldgs)l.bldgName==u&&(n.value=l)}),(l,m)=>(a(),i("div",O,[r("div",T,[r("div",k,[r("button",{onClick:m[0]||(m[0]=s=>{p(v).push({name:"home"})}),class:"px-4 py-2 bg-gray-300 hover:bg-gray-500 transition-bg-colors duration-300 ease-in-out"},B)]),r("div",C,[r("span",F,c(p(u)),1),r("span",N,c(e.value)+"F",1)]),n.value?(a(),i("div",S,[(a(!0),i(R,null,L(n.value.floors,s=>(a(),i("div",{key:s.id},[r("button",{onClick:$=>g(s.floor),class:y([e.value==s.floor?"text-white bg-red-300":"bg-gray-300","px-4 py-2 mr-4 hover:bg-red-300 transition-bg-colors duration-300 ease-in-out"])},[r("span",null,c(s.floor)+"F",1)],10,j)]))),128))])):V("",!0),r("div",q,[(a(),A(P(E.value),{query:f.value},null,8,["query"]))])])]))}};export{U as default};
