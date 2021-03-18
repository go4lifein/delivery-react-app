(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[25],{114:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(11),o=n.n(i),s=n(53),u=(n(93),n(55)),d=n(4),l=n(78),f=n(137),j=n(138),b=(n(94),n(95),n(63)),h=n(54),p=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(6),n.e(31),n.e(10)]).then(n.bind(null,592))})),O=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(6),n.e(15)]).then(n.bind(null,593))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(28),n.e(7),n.e(22)]).then(n.bind(null,597))})),m=Object(r.lazy)((function(){return n.e(24).then(n.bind(null,564))})),x=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(7),n.e(23)]).then(n.bind(null,598))})),g=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,565))}));var y=function(){var e=Object(l.a)({palette:{secondary:{light:"#ff4081",main:"#f50057",dark:"#c51162",contrastText:"#fff"},background:{default:"#fff",paper:"#fff"}}});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"app",children:Object(a.jsxs)(f.a,{theme:e,children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(u.a,{base:"delivery-react-app",children:Object(a.jsx)("main",{children:Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(h.a,{}),children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/trace",exact:!0,component:v}),Object(a.jsx)(d.a,{path:"/visual",component:m}),Object(a.jsx)(d.a,{path:"/trace-milk",exact:!0,component:x}),Object(a.jsx)(d.a,{path:"/customer",component:g}),Object(a.jsx)(d.a,{path:"/admin",component:p}),Object(a.jsx)(d.a,{path:"/",exact:!0,component:O}),Object(a.jsx)(d.a,{path:"/",component:b.a})]})})})})]})}),Object(a.jsx)("div",{id:"printable"})]})},D=n(60),E=n(23),A=n(77),w=n(27),T=n(5),_=n(15),R=n(32),k={admin:Object(R.c)()["x-admin-token"],products:new Map,orderBoxData:new Map,loadingOrderData:!0};function P(e,t){e.forEach((function(e){var n=e.id,a=e.name,r=e.thumbnail;t.set(n,{id:n,name:a,image:r})}))}function M(e,t){e.forEach((function(e){var n=e.orderId;e.productId;t.has(n)?t.get(n).push(e):t.set(n,[e])}))}function S(e,t){e.forEach((function(e){var n=e.orderId;t.set(n,e)}))}function U(e){var t=new Map,n=[];return e.forEach((function(e){var a=e.subarea,r=e.area,c=e.region;if(n.includes(c)||n.push(c),t.has(c)){var i=t.get(c);if(i.has(r)){var o=i.get(r);o.includes(a)||o.push(a),i.set(r,o),t.set(c,i)}else{var s=[a];i.set(r,s),t.set(c,i)}}else{var u=new Map;u.set(r,[a]),t.set(c,u)}})),[t,n]}var I={driver:Object(R.c)()["x-driver-token"]};Object(A.createLogger)();var N=Object(E.d)(Object(E.c)({setDriver:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _.g:var n=t.payload;return window.localStorage.setItem("driver",JSON.stringify(n)),Object(T.a)(Object(T.a)({},e),{},{driver:n});case _.h:var a=t.payload,r=new Map,c=[];return a.forEach((function(e){var t=e.subarea,n=e.area,a=e.region;if(c.includes(a)||c.push(a),r.has(a)){var i=r.get(a);if(i.has(n)){var o=i.get(n);o.includes(t)||o.push(t),i.set(n,o),r.set(a,i)}else{var s=[t];i.set(n,s),r.set(a,i)}}else{var u=new Map;u.set(n,[t]),r.set(a,u)}})),Object(T.a)(Object(T.a)({},e),{},{orders:a,locations:r,hubs:c});default:return e}},setAdmin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _.d:var n=t.payload;return window.localStorage.setItem("admin",JSON.stringify(n)),Object(T.a)(Object(T.a)({},e),{},{admin:n});case _.e:return Object(T.a)(Object(T.a)({},e),t.payload);case _.i:var a=t.payload,r=U(a),c=Object(w.a)(r,2),i=c[0],o=c[1];return Object(T.a)(Object(T.a)({},e),{},{orders:a,locations:i,hubs:o});case _.c:var s=new Map;return P(t.payload,s),Object(T.a)(Object(T.a)({},e),{},{products:s});case _.b:var u=new Map;return M(t.payload,u),Object(T.a)(Object(T.a)({},e),{},{orderProducts:u});case _.a:var d=new Map;return S(t.payload,d),Object(T.a)(Object(T.a)({},e),{},{orderBoxData:d});case _.f:var l=t.payload,f=U(l),j=Object(w.a)(f,2),b=j[0],h=j[1];return Object(T.a)(Object(T.a)({},e),{},{orders:l,locations:b,hubs:h});default:return e}}}),E.a.apply(void 0,[]));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(s.a,{store:N,children:Object(a.jsx)(D.a,{children:Object(a.jsx)(y,{})})})}),document.getElementById("root"))},15:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return f}));var a="UPDATE_DRIVER",r="UPDATE_ORDERS",c="UPDATE_ADMIN",i="UPDATE_ORDERS_DATA",o="UPDATE_ADMIN_DATA",s="UPDATE_ORDER_CRATE_DATA",u="ADD_PRODUCTS",d="ADD_ORDER_PRODUCTS",l="ADD_ORDER_BOX",f="UPDATE_DELIVERY_REPORT"},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return j}));n(27);var a=n(28),r=n.n(a),c="".concat("https://api.deliver.go4life.in","/api");function i(){var e=document.cookie.split(";"),t={};return e.forEach((function(e){var n=e.split("=");t[n[0]]=n[1]})),t}function o(e,t,n){var a="";if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),a="; expires="+r.toUTCString()}document.cookie=e+"="+(t||"")+a+"; path=/"}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x-admin-token",t=arguments.length>1?arguments[1]:void 0;r.a.defaults.headers.common[e]=t}i()["x-admin-token"];function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x-admin-token",t=i()[e];t&&s(e,t)}function d(e){return r.a.request(e)}function l(e,t){return r.a.request({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function f(e){return r.a.request({url:e,method:"get"})}function j(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),r=new Uint8Array(a),c=0;c<t.length;c++)r[c]=t.charCodeAt(c);return new Blob([a],{type:n})}i()["x-admin-token"]?u("x-admin-token"):u("x-driver-token")},54:function(e,t,n){"use strict";var a=n(2),r=n(117);n(0);t.a=function(){return Object(a.jsx)("div",{className:"flex center middle p-10",children:Object(a.jsx)(r.a,{})})}},63:function(e,t,n){"use strict";var a=n(2),r=(n(0),n(115));t.a=function(e){return Object(a.jsxs)("div",{className:"p-10",children:[Object(a.jsx)(r.a,{variant:"h2",children:"What the 404?"}),Object(a.jsx)("div",{className:"flex center",style:{maxHeight:400,maxWidth:"100%"},children:Object(a.jsx)("img",{style:{maxHeight:400,maxWidth:"100%"},src:"https://cdn.dribbble.com/users/21546/screenshots/4815369/yelp_emptystates_business.gif",alt:"not-found"})})]})}},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[114,26,27]]]);