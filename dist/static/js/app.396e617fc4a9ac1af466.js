webpackJsonp([5],{"991W":function(n,t){},Cpzh:function(n,t,e){"use strict";e.d(t,"e",function(){return r}),e.d(t,"g",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return i}),e.d(t,"b",function(){return c}),e.d(t,"f",function(){return a}),e.d(t,"a",function(){return s}),e.d(t,"h",function(){return l}),e.d(t,"i",function(){return f});var r="PLAY",u="STOP",o="LOTTERY",i="MY_NUMBER",c="ADD_MY_NUMBER",a="REMOVE_MY_NUMBER",s="ADD_MONEY",l="WIN",f="WIN_HISTORY"},JaHG:function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return c});var r=e("//Fk"),u=e.n(r),o=function(){for(var n=Array.apply(null,{length:45}).map(function(n,t){return t+1}),t=[],e=-1;++e<7;)t.push(n.splice(Math.floor(Math.random()*n.length),1)[0]);return{numbers:t.slice(1).sort(function(n,t){return n-t}),bonus:t[0]}},i=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},c=function(n){return new u.a(function(t){return setTimeout(t,n)})}},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("7+uW"),u={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{class:this.$style.app},[t("router-view")],1)},staticRenderFns:[]};var o,i=e("VU/8")({name:"app"},u,!1,function(n){this.$style=e("w73v"),e("vyVw")},null,null).exports,c=e("NYxO"),a=e("gqY2"),s={isPlaying:!1,color:[{min:1,max:10,value:"orange"},{min:11,max:20,value:"blue"},{min:21,max:30,value:"red"},{min:31,max:40,value:"gray"},{min:41,max:45,value:"green"}],myNumber:[3,15,18,23,37,43],lotteryCount:0,lotteryNumber:[1,9,17,25,33,41],lotteryBonus:45,winHistory:[],wallet:{used:0,have:a.b},result:{1:0,2:0,3:0,4:0,5:0}},l={isReady:function(n){return n.isPlaying&&6===n.myNumber.length},isPlaying:function(n){return n.isPlaying},color:function(n){return n.color},isMoney:function(n){return n.wallet.have>=a.d},myNumber:function(n){return n.myNumber},lotteryCount:function(n){return n.lotteryCount},lotteryNumber:function(n){return n.lotteryNumber},lotteryBonus:function(n){return n.lotteryBonus},winHistory:function(n){return n.winHistory},result:function(n){return n.result},wallet:function(n){return n.wallet}},f=e("bOdI"),m=e.n(f),y=e("Cpzh"),d=new r.a,p=(o={},m()(o,y.e,function(n){n.isPlaying=!0,d.$emit("lottery")}),m()(o,y.g,function(n){n.isPlaying=!1}),m()(o,y.c,function(n,t){n.lotteryCount++,n.lotteryNumber=t.number,n.lotteryBonus=t.bonus,n.wallet.used+=a.d,n.wallet.have-=a.d,d.$emit("checkMatching")}),m()(o,y.d,function(n,t){n.myNumber=t.numbers}),m()(o,y.f,function(n,t){var e=n.myNumber.indexOf(t.num);e>-1&&n.myNumber.splice(e,1)}),m()(o,y.b,function(n,t){n.myNumber.push(t.num),n.myNumber.sort(function(n,t){return n-t})}),m()(o,y.h,function(n,t){n.result[t.ranking]++,n.ranking=t.ranking}),m()(o,y.i,function(n,t){n.winHistory.unshift(t),n.winHistory=n.winHistory.slice(0,100)}),m()(o,y.a,function(n,t){n.wallet.have+=t.money}),o),h=e("Xxa5"),b=e.n(h),g=e("exGp"),v=e.n(g),w=e("lA5F"),N=e("JaHG"),x=this,M=m()({},w.a,function(n){var t;n.getters.isMoney&&(t=v()(b.a.mark(function n(){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.a)(10);case 2:return n.abrupt("return",Object(N.b)());case 3:case"end":return n.stop()}},n,x)})),function(){return t.apply(this,arguments)})().then(function(t){n.commit(""+w.a,{number:t.numbers,bonus:t.bonus})})});r.a.use(c.a);var O=new c.a.Store({state:s,getters:l,mutations:p,actions:M}),P=e("/ocq");r.a.use(P.a);var _=new P.a({mode:"history",routes:[{path:"/",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"VZrM"))},children:[{path:"choose",name:"choose",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"x8Xo"))}},{path:"charge",name:"charge",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"jNHQ"))}}]}]});e("9qgI"),e("j1ja"),e("991W"),e("erWL"),e("gJtD");r.a.config.productionTip=!1,r.a.mixin({created:function(){this.EventBus=d}}),r.a.filter("numberWithCommas",N.c),new r.a({el:"#app",store:O,router:_,template:"<App/>",components:{App:i}})},erWL:function(n,t){},gJtD:function(n,t){},gqY2:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return u}),e.d(t,"d",function(){return o}),e.d(t,"c",function(){return i}),e.d(t,"e",function(){return c});var r="가상로또추첨",u=1e5,o=1e3,i=100,c=1e3},lA5F:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r="LOTTERY"},vyVw:function(n,t){},w73v:function(n,t){n.exports={app:"_3cl756BP8kssTYTEsON-Ao_0"}}},["NHnr"]);
//# sourceMappingURL=app.396e617fc4a9ac1af466.js.map