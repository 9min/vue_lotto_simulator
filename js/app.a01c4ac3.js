(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==u[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-27a6ec72":"4149a46e","chunk-689111b2":"558c5517","chunk-765965b6":"4697bc27"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-27a6ec72":1,"chunk-689111b2":1,"chunk-765965b6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-27a6ec72":"2b73f867","chunk-689111b2":"8f0a3473","chunk-765965b6":"3077968e"}[e]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===u))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=u;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}u[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue_lotto_simulator/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3ce9":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return f}));const r="PLAY",o="STOP",u="LOTTERY",a="MY_NUMBER",i="ADD_MY_NUMBER",c="REMOVE_MY_NUMBER",l="ADD_MONEY",s="WIN",f="WIN_HISTORY"},"4dcb":function(e,t,n){},"4ee2":function(e,t,n){},"56c1":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return c}));const r="가상로또추첨",o=1e5,u=1e3,a=100,i=1e3,c="vue_lotto_simulator"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.app},[n("router-view")],1)},u=[],a={name:"app"},i=a,c=n("5bb9"),l=n("2877");function s(e){this["$style"]=c["default"].locals||c["default"]}var f=Object(l["a"])(i,o,u,!1,s,null,null),d=f.exports,m=n("2f62"),p=n("56c1"),h={isPlaying:!1,color:[{min:1,max:10,value:"orange"},{min:11,max:20,value:"blue"},{min:21,max:30,value:"red"},{min:31,max:40,value:"gray"},{min:41,max:45,value:"green"}],myNumber:[],lotteryCount:0,lotteryNumber:[1,9,17,25,33,41],lotteryBonus:45,winHistory:[],wallet:{used:0,have:p["b"]},result:{1:0,2:0,3:0,4:0,5:0}},b={isReady:e=>e.isPlaying&&6===e.myNumber.length,isPlaying:e=>e.isPlaying,color:e=>e.color,isMoney:e=>e.wallet.have>=p["e"],myNumber:e=>e.myNumber,lotteryCount:e=>e.lotteryCount,lotteryNumber:e=>e.lotteryNumber,lotteryBonus:e=>e.lotteryBonus,winHistory:e=>e.winHistory,result:e=>e.result,wallet:e=>e.wallet},y=n("3ce9"),g=new r["a"],v={[y["e"]]:e=>{e.isPlaying=!0,g.$emit("lottery")},[y["g"]]:e=>{e.isPlaying=!1},[y["c"]]:(e,t)=>{e.lotteryCount++,e.lotteryNumber=t.number,e.lotteryBonus=t.bonus,e.wallet.used+=p["e"],e.wallet.have-=p["e"],g.$emit("checkMatching")},[y["d"]]:(e,t)=>{e.myNumber=t.numbers},[y["f"]]:(e,t)=>{const n=e.myNumber.indexOf(t.num);n>-1&&e.myNumber.splice(n,1)},[y["b"]]:(e,t)=>{e.myNumber.push(t.num),e.myNumber.sort((e,t)=>e-t)},[y["h"]]:(e,t)=>{e.result[t.ranking]++,e.ranking=t.ranking},[y["i"]]:(e,t)=>{e.winHistory.unshift(t),e.winHistory=e.winHistory.slice(0,100)},[y["a"]]:(e,t)=>{e.wallet.have+=t.money}},w=n("a04d"),k=n("90b9"),N={[w["a"]]:e=>{if(!e.getters.isMoney)return;const t=async()=>(await Object(k["a"])(10),Object(k["b"])());t().then(t=>{e.commit(""+w["a"],{number:t.numbers,bonus:t.bonus})})}};r["a"].use(m["a"]);const _=new m["a"].Store({state:h,getters:b,mutations:v,actions:N});var O=_,E=n("8c4f");r["a"].use(E["a"]);let P="";P="/"+p["c"];var M=new E["a"]({mode:"history",routes:[{path:P+"/",component:()=>n.e("chunk-27a6ec72").then(n.bind(null,"cd56")),children:[{path:"choose",name:"choose",component:()=>n.e("chunk-765965b6").then(n.bind(null,"49cc"))},{path:"charge",name:"charge",component:()=>n.e("chunk-689111b2").then(n.bind(null,"e103"))}]},{path:"choose",redirect:P+"/"}]});n("4ee2"),n("4dcb");r["a"].config.productionTip=!1,r["a"].mixin({created(){this.EventBus=g}}),r["a"].filter("numberWithCommas",k["c"]),new r["a"]({render:e=>e(d),store:O,router:M,components:{App:d}}).$mount("#app")},"5bb9":function(e,t,n){"use strict";var r=n("a7d4"),o=n.n(r);t["default"]=o.a},"90b9":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u}));const r=()=>{const e=Array.apply(null,{length:45}).map((e,t)=>t+1),t=[];let n=-1;while(++n<7)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return{numbers:t.slice(1).sort((e,t)=>e-t),bonus:t[0]}},o=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),u=e=>new Promise(t=>setTimeout(t,e))},a04d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="LOTTERY"},a7d4:function(e,t,n){e.exports={app:"App_app_3cl75"}}});
//# sourceMappingURL=app.a01c4ac3.js.map