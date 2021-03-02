(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[21],{12:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"i",(function(){return s})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l}));var n="UPDATE_DRIVER",r="UPDATE_ORDERS",c="UPDATE_ADMIN",i="UPDATE_ORDERS_DATA",o="UPDATE_ADMIN_DATA",s="UPDATE_ORDER_CRATE_DATA",d="ADD_PRODUCTS",u="ADD_ORDER_PRODUCTS",l="ADD_ORDER_BOX"},39:function(e,t,a){"use strict";var n=a(2),r=a(68);a(0);t.a=function(){return Object(n.jsx)("div",{className:"flex center middle p-10",children:Object(n.jsx)(r.a,{})})}},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),i=a(21),o=a.n(i),s=a(38),d=(a(64),a(41)),u=a(3),l=a(52),j=a(84),b=a(85),f=(a(65),a(39)),O=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(6),a.e(8)]).then(a.bind(null,559))})),p=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(11)]).then(a.bind(null,571))})),h=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(5),a.e(23),a.e(17)]).then(a.bind(null,574))})),v=Object(r.lazy)((function(){return a.e(18).then(a.bind(null,543))})),m=Object(r.lazy)((function(){return a.e(20).then(a.bind(null,544))})),g=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(5),a.e(6),a.e(19)]).then(a.bind(null,575))}));var D=function(){var e=Object(l.a)({palette:{secondary:{light:"#ff4081",main:"#f50057",dark:"#c51162",contrastText:"#fff"},background:{default:"#fff",paper:"#fff"}}});return Object(n.jsx)("div",{id:"app",children:Object(n.jsxs)(j.a,{theme:e,children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(d.a,{base:"delivery-react-app",children:Object(n.jsx)("main",{children:Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)(f.a,{}),children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{path:"/trace/produce",exact:!0,component:v}),Object(n.jsx)(u.a,{path:"/trace",exact:!0,component:h}),Object(n.jsx)(u.a,{path:"/visual",component:m}),Object(n.jsx)(u.a,{path:"/trace-milk",exact:!0,component:g}),Object(n.jsx)(u.a,{path:"/admin",component:O}),Object(n.jsx)(u.a,{path:"/",component:p})]})})})})]})})},x=a(15),y=a(51),w=a(5),A=a(12),E=window.localStorage.getItem("admin"),R={admin:E=E?JSON.parse(E):void 0,products:new Map,loadingOrderData:!0};function _(e,t){e.forEach((function(e){var a=e.id,n=e.name,r=e.thumbnail;t.set(a,{id:a,name:n,image:r})}))}function S(e,t){e.forEach((function(e){var a=e.orderId;e.productId;t.has(a)?t.get(a).push(e):t.set(a,[e])}))}function P(e,t){e.forEach((function(e){var a=e.orderId;t.set(a,e)}))}var T=window.localStorage.getItem("driver"),I={driver:T=T?JSON.parse(T):void 0};var M=Object(y.createLogger)(),U=Object(x.d)(Object(x.c)({setDriver:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case A.f:var a=t.payload;return window.localStorage.setItem("driver",JSON.stringify(a)),Object(w.a)(Object(w.a)({},e),{},{driver:a});case A.g:var n=t.payload,r=new Map,c=[];return n.forEach((function(e){var t=e.subarea,a=e.area,n=e.region;if(c.includes(n)||c.push(n),r.has(n)){var i=r.get(n);if(i.has(a)){var o=i.get(a);o.includes(t)||o.push(t),i.set(a,o),r.set(n,i)}else{var s=[t];i.set(a,s),r.set(n,i)}}else{var d=new Map;d.set(a,[t]),r.set(n,d)}})),Object(w.a)(Object(w.a)({},e),{},{orders:n,locations:r,hubs:c});default:return e}},setAdmin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case A.d:var a=t.payload;return window.localStorage.setItem("admin",JSON.stringify(a)),Object(w.a)(Object(w.a)({},e),{},{admin:a});case A.e:return Object(w.a)(Object(w.a)({},e),t.payload);case A.h:var n=t.payload,r=new Map,c=[];return n.forEach((function(e){var t=e.subarea,a=e.area,n=e.region;if(c.includes(n)||c.push(n),r.has(n)){var i=r.get(n);if(i.has(a)){var o=i.get(a);o.includes(t)||o.push(t),i.set(a,o),r.set(n,i)}else{var s=[t];i.set(a,s),r.set(n,i)}}else{var d=new Map;d.set(a,[t]),r.set(n,d)}})),Object(w.a)(Object(w.a)({},e),{},{orders:n,locations:r,hubs:c});case A.c:var i=new Map;return _(t.payload,i),Object(w.a)(Object(w.a)({},e),{},{products:i});case A.b:var o=new Map;return S(t.payload,o),Object(w.a)(Object(w.a)({},e),{},{orderProducts:o});case A.a:var s=new Map;return P(t.payload,s),Object(w.a)(Object(w.a)({},e),{},{orderBoxData:s});default:return e}}}),Object(x.a)(M));o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(s.a,{store:U,children:Object(n.jsx)(D,{})})}),document.getElementById("root"))}},[[67,22,25]]]);
//# sourceMappingURL=main.e95676b7.chunk.js.map