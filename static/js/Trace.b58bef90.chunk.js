(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[20],{112:function(a,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"g",(function(){return c})),e.d(t,"d",(function(){return x})),e.d(t,"f",(function(){return k})),e.d(t,"e",(function(){return m})),e.d(t,"c",(function(){return d})),e.d(t,"b",(function(){return l}));e(32);var i=e(151),r=e.n(i),s="https://api.deliver.go4life.in/api";function n(){var a=document.cookie.split(";"),t={};return a.forEach((function(a){var e=a.split("=");t[e[0]]=e[1]})),t}function c(a,t,e){var i="";if(e){var r=new Date;r.setTime(r.getTime()+24*e*60*60*1e3),i="; expires="+r.toUTCString()}document.cookie=a+"="+(t||"")+i+"; path=/"}function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x-admin-token",t=arguments.length>1?arguments[1]:void 0;r.a.defaults.headers.common[a]=t}n()["x-admin-token"];function x(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x-admin-token",t=n()[a];t&&o(a,t)}function k(a){return r.a.request(a)}function m(a,t){return r.a.request({url:a,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function d(a){return r.a.request({url:a,method:"get"})}function l(a){for(var t=atob(a.split(",")[1]),e=a.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),r=new Uint8Array(i),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return new Blob([i],{type:e})}n()["x-admin-token"]?x("x-admin-token"):x("x-driver-token")},177:function(a,t,e){"use strict";e.d(t,"a",(function(){return x}));var i=e(130),r=e.n(i),s=e(131),n=e(112),c=e(123),o=e.n(c);function x(){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(r.a.mark((function a(){var t,e,i,s,c,x=arguments;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=x.length>0&&void 0!==x[0]?x[0]:"a2",e=x.length>1&&void 0!==x[1]?x[1]:o()().format("YYYY-MM-DD"),i=o()(e).format("YYYY-MM-DD"),s="".concat(n.a,"/misc/getReport?report_date=").concat(i,"&milk_type=").concat(t),a.next=6,Object(n.f)({url:s,method:"get",headers:{"Content-Type":"application/json"}});case 6:return c=a.sent,a.abrupt("return",c);case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}},230:function(a,t,e){},231:function(a,t,e){},232:function(a,t,e){},233:function(a,t,e){"use strict";e.d(t,"a",(function(){return k}));var i=e(32),r=e(2),s=e(0),n=e(285),c=e.n(n),o=e(123),x=e.n(o);e(234);function k(a){var t=a.data,n=Object(s.useState)(""),o=Object(i.a)(n,2),k=o[0],m=o[1];Object(s.useEffect)((function(){if(t){var a=x()(t.bmc_receive),e=x()(t.whs_dispatch),i=x.a.duration(e.diff(a)),r=parseInt(i.asHours()),s=parseInt(i.asMinutes())%60;m(r+" hours "+s+" minutes ")}}),[t]);var d=Object(s.useRef)(null);return Object(s.useEffect)((function(){c.a.loadAnimation({container:d.current,renderer:"svg",loop:!0,autoplay:!0,speed:"2.5x",animationData:e(235)})}),[]),Object(r.jsxs)("div",{className:"journey",children:[Object(r.jsx)("div",{className:"truck",ref:d}),Object(r.jsxs)("p",{className:"time",children:["Total  journey  time : ",k]})]})}},234:function(a,t,e){},235:function(a){a.exports=JSON.parse('{"v":"5.6.5","fr":24,"ip":0,"op":25,"w":272,"h":272,"nm":"1 Truck 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"road","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[136,136,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-112,56],[117,56]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8,0.8,0.8,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":3,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":21,"ix":1}},{"n":"o","nm":"offset","v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":24,"s":[84]}],"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":73,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[34,101,0],"ix":2},"a":{"a":0,"k":[-102,-50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-97,-50],[-108.5,-50]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960791794,0.101960791794,0.101960791794,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.875,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.734],"y":[0]},"t":16,"s":[0]},{"t":21,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.739],"y":[0]},"t":7,"s":[0]},{"t":19,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":73,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[34,92.5,0],"ix":2},"a":{"a":0,"k":[-102,-50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-97,-50],[-108.5,-50]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960791794,0.101960791794,0.101960791794,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.875,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.734],"y":[0]},"t":16,"s":[0]},{"t":21,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.739],"y":[0]},"t":4,"s":[0]},{"t":14,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":73,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"front tyre Outlines","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[39.362,69.472,0],"ix":2},"a":{"a":0,"k":[25.365,25.366,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-2.671],[2.67,0],[0,2.67],[-2.671,0]],"o":[[0,2.67],[-2.671,0],[0,-2.671],[2.67,0]],"v":[[4.835,0.001],[0,4.836],[-4.835,0.001],[0,-4.836]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4.458,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25.365,25.366],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-7.854],[7.854,0],[0,7.854],[-7.854,0]],"o":[[0,7.854],[-7.854,0],[0,-7.854],[7.854,0]],"v":[[14.221,0.001],[-0.001,14.221],[-14.221,0.001],[-0.001,-14.221]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4.458,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25.365,25.366],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":73,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"back tyre Outlines","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.323,97.616,0],"ix":2},"a":{"a":0,"k":[25.366,25.366,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-2.671],[2.67,0],[0,2.67],[-2.67,0]],"o":[[0,2.67],[-2.67,0],[0,-2.671],[2.67,0]],"v":[[4.835,0.001],[0,4.836],[-4.835,0.001],[0,-4.836]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4.458,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25.366,25.366],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-7.854],[7.854,0],[0,7.854],[-7.854,0]],"o":[[0,7.854],[-7.854,0],[0,-7.854],[7.854,0]],"v":[[14.221,0.001],[0,14.221],[-14.221,0.001],[0,-14.221]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4.458,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25.366,25.366],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":73,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"body Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[109.283,129.877,0],"to":[0,-0.167,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":12,"s":[109.283,128.877,0],"to":[0,0,0],"ti":[0,-0.167,0]},{"t":24,"s":[109.283,129.877,0]}],"ix":2},"a":{"a":0,"k":[76.474,55.036,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[118.123,30.163],[118.123,70.098]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[97.093,30.163],[97.093,70.098]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[76.061,30.163],[76.061,70.098]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[55.031,30.163],[55.031,70.098]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[34,30.163],[34,70.098]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-49.563,42.536],[-63.974,42.536],[-63.974,-42.536],[63.974,-42.536],[63.974,42.536],[-16.954,42.536]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[76.474,55.036],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":73,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"face Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[200.118,144.199,0],"to":[0,-0.333,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":12,"s":[200.118,142.199,0],"to":[0,0,0],"ti":[0,-0.333,0]},{"t":24,"s":[200.118,144.199,0]}],"ix":2},"a":{"a":0,"k":[39.361,42.715,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[13.452,40.259],[66.39,40.259]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.26,-16.373],[-5.26,16.373],[5.26,16.373]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[17.761,56.556],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[16.035,30.215],[26.862,30.215],[26.862,-2.531],[2.891,-30.215],[-26.862,-30.215],[-26.862,-2.531]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.100101396149,0.100101388669,0.100101396149,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[39.361,42.715],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":73,"st":0,"bm":0}],"markers":[]}')},236:function(a,t,e){},260:function(a,t,e){"use strict";e.d(t,"a",(function(){return s}));var i=e(2),r=(e(231),e.p+"static/media/g4l.a71066e7.svg");function s(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("img",{src:r,alt:"logo",className:"logo"}),Object(i.jsx)("h1",{className:"heading",children:"Trace your milk's journey."})]})}},261:function(a,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e(2),r=(e(0),e(232),e.p+"static/media/boards.dfad5378.svg"),s=e(123),n=e.n(s);function c(a){var t=a.data,e=a.setLoad,s=a.load;return Object(i.jsx)("div",{className:"hero",children:Object(i.jsxs)("div",{className:"board",children:[t&&s&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section1",children:Object(i.jsxs)("div",{className:"BMC",children:[Object(i.jsxs)("h1",{children:["Recieved at",Object(i.jsx)("br",{})," BMC (Tijara)"]}),Object(i.jsx)("p",{children:n.a.utc(t.bmc_receive).format("hh:mm A")})]})}),Object(i.jsxs)("div",{className:"section2",children:[Object(i.jsxs)("div",{className:"plant-receive",children:[Object(i.jsxs)("h1",{children:[" ","Milk Pasteurized",Object(i.jsx)("br",{}),"at 85",Object(i.jsx)("span",{children:"\xb0"}),"C (Manesar)"]}),Object(i.jsx)("p",{children:n.a.utc(t.plant_receive).format("hh:mm A")})]}),Object(i.jsxs)("div",{className:"plant-dispatch",children:[Object(i.jsxs)("h1",{children:["Packed in a 3-Layer",Object(i.jsx)("br",{}),"Tamper-Proof",Object(i.jsx)("br",{})," Packaging"]}),Object(i.jsx)("p",{children:n.a.utc(t.plant_dispatch).format("hh:mm A")})]})]}),Object(i.jsxs)("div",{className:"section3",children:[Object(i.jsxs)("div",{className:"whs-receive",children:[Object(i.jsxs)("h1",{children:["Arrived at ",Object(i.jsx)("br",{})," Warehouse"]}),Object(i.jsx)("p",{children:n.a.utc(t.whs_receive).format("hh:mm A")})]}),Object(i.jsxs)("div",{className:"whs-dispatch",children:[Object(i.jsxs)("h1",{children:["Dispatched for ",Object(i.jsx)("br",{}),"Delivery"]}),Object(i.jsx)("p",{children:n.a.utc(t.whs_dispatch).format("hh:mm A")})]})]})]})," ",t&&Object(i.jsx)("img",{src:r,onLoad:function(){return e(!0)},className:"timeline",alt:"timeline"})]})})}},262:function(a,t,e){"use strict";e.d(t,"a",(function(){return s}));var i=e(2),r=(e(0),e(236),e.p+"static/media/milkbox.31a0b475.svg");function s(a){var t=a.data;return Object(i.jsxs)("div",{className:"facts",children:[Object(i.jsx)("img",{src:r,className:"Milk",alt:"milkboxs"}),t&&Object(i.jsx)("button",{className:"download-btn",onClick:function(){return window.open(t.pdf_url)},children:" Download Test Report"}),t&&Object(i.jsxs)("div",{className:"cards",children:[Object(i.jsxs)("div",{className:"section1",children:[Object(i.jsxs)("div",{className:"f1",children:[Object(i.jsx)("h1",{children:"pH"}),Object(i.jsx)("p",{children:t.ph})]}),Object(i.jsxs)("div",{className:"f2",children:[Object(i.jsx)("h1",{children:"Fat "}),Object(i.jsxs)("p",{children:[t.fat," %"]})]})]}),Object(i.jsxs)("div",{className:"section2",children:[Object(i.jsxs)("div",{className:"f3",children:[Object(i.jsx)("h1",{children:"SNF"}),Object(i.jsxs)("p",{children:[t.snf," %"]})]}),Object(i.jsxs)("div",{className:"f4",children:[Object(i.jsx)("h1",{children:"MBRT"}),Object(i.jsxs)("p",{children:[t.mbrt," mins"]})]})]})]})]})}},376:function(a,t,e){},577:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return j}));var i=e(130),r=e.n(i),s=e(131),n=e(32),c=e(2),o=e(0),x=(e(230),e(260)),k=e(261),m=e(233),d=e(262),l=e(377),h=e.n(l);e(375),e(376);function p(a){var t=a.startDate;return Object(c.jsx)("div",{className:"datepicker",children:Object(c.jsx)(h.a,{className:"box",selected:t,dateFormat:"MMMM d, yyyy"})})}var u=e(177),f=e(40);function j(a){var t=a.location,e=Object(o.useState)(new Date),i=Object(n.a)(e,2),l=i[0],h=i[1],j=Object(o.useState)(!0),b=Object(n.a)(j,2),y=b[0],v=b[1],O=Object(o.useState)(null),D=Object(n.a)(O,2),S=D[0],A=D[1],G=Object(o.useState)(!1),B=Object(n.a)(G,2),E=B[0],V=B[1],g=Object(o.useState)(!1),w=Object(n.a)(g,2),N=w[0],T=w[1];return Object(o.useEffect)((function(){document.title="Go4Life - Trace Your Milk";var a=t.search,e=(a=new URLSearchParams(a)).get("report_date");if(e){var i=new Date(e),r=a.get("milk_type");h(i),v("a2"===r)}}),[t]),Object(o.useEffect)((function(){function a(){return(a=Object(s.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,V(!0),a.next=4,Object(u.a)("a2",l);case 4:t=a.sent,A(t.data),V(!1),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0),A(null),V(!1);case 14:case"end":return a.stop()}}),a,null,[[0,9]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[l,y]),Object(c.jsxs)("div",{className:"trace",children:[Object(c.jsx)(x.a,{}),Object(c.jsx)(p,{startDate:l,setStartDate:h,isA2:y,setIsA2:v}),E&&Object(c.jsx)(f.a,{}),!S&&!E&&!N&&Object(c.jsx)("p",{className:"not-found",children:"Record Not Found"}),Object(c.jsx)(k.a,{data:S,load:N,setLoad:T}),S&&N&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a,{data:S}),Object(c.jsx)(d.a,{data:S})]})]})}}}]);
//# sourceMappingURL=Trace.b58bef90.chunk.js.map