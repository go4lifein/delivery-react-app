(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[9],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return b}));n(40);var r=n(157),a=n.n(r),c="https://api.deliver.go4life.in/api";function i(){var e=document.cookie.split(";"),t={};return e.forEach((function(e){var n=e.split("=");t[n[0]]=n[1]})),t}function o(e,t,n){var r="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),r="; expires="+a.toUTCString()}document.cookie=e+"="+(t||"")+r+"; path=/"}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x-admin-token",t=arguments.length>1?arguments[1]:void 0;a.a.defaults.headers.common[e]=t}i()["x-admin-token"];function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x-admin-token",t=i()[e];t&&d(e,t)}function u(e){return a.a.request(e)}function l(e,t){return a.a.request({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function j(e){return a.a.request({url:e,method:"get"})}function b(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),a=new Uint8Array(r),c=0;c<t.length;c++)a[c]=t.charCodeAt(c);return new Blob([r],{type:n})}i()["x-admin-token"]?s("x-admin-token"):s("x-driver-token")},179:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return l}));var r=n(14),a=function(e){return{type:r.d,payload:e}},c=function(e){return{type:r.e,payload:e}},i=function(e){return{type:r.i,payload:e}},o=function(e){return{type:r.j,payload:e}},d=function(e){return{type:r.c,payload:e}},s=function(e){return{type:r.b,payload:e}},u=function(e){return{type:r.a,payload:e}},l=function(e){return{type:r.f,payload:e}}},214:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(133),a=n(157);function c(){var e="".concat(r.a,"/order/getAllOrders");return Object(r.f)({url:e,method:"get",headers:{"Content-Type":"application/json"}})}function i(e){var t="".concat(r.a,"/order/updateCrateId");return Object(r.f)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function o(e){var t="".concat(r.a,"/order/prepareOrder");return Object(r.f)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function d(e){var t="".concat(r.a,"/admin/login");return Object(r.f)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function s(e){var t="".concat(r.a,"/admin/addReport");return Object(a.post)(t,e,{headers:{"content-type":"multipart/form-data"}})}function u(){var e="".concat(r.a,"/admin/getLocationCustomerDensity");return Object(r.f)({url:e,method:"get",headers:{"Content-Type":"application/json"}})}},274:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.8f39d4d2.png"},983:function(e,t,n){"use strict";n.r(t);var r=n(124),a=n(125),c=n(127),i=n(128),o=n(5),d=n(2),s=n(0),u=n(48),l=n(4),j=n(49),b=n(40),h=n(109),O=n(939),m=n(941),p=n(942),f=n(50),x=n(943),v=n(944),y=n(358),g=n.n(y),D=n(946),k=n(489),C=n(947),w=n(948),A=n(492),P=n.n(A),z=n(486),R=n.n(z),S=n(493),T=n.n(S),F=n(980),U=n(490),B=n.n(U),L=n(491),M=n.n(L),N=n(274),W=n(179),q=n(897),I=n(133);var G=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function J(e){switch(e.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";case"/admin/addReport":return"Add Milk Report";case"/admin/customer-density":return"Customer Density";case"/admin/delivery":return"Delivery Dashboard";case"/admin/DriverDashboard":return"Driver Dashboard";case"/admin/FarmerDashboard":return"Farmer Dashboard";default:return""}}function E(e){var t=e.logOut,n=Object(s.useState)(!1),r=Object(b.a)(n,2),a=r[0],c=r[1];return Object(d.jsxs)("div",{className:"flex middle",children:[Object(d.jsx)(v.a,{onClick:function(){c(!a)},children:Object(d.jsx)(R.a,{style:{color:"#000"}})}),Object(d.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(d.jsx)(F.a,{anchor:"right",open:a,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(d.jsxs)(D.a,{children:[Object(d.jsxs)(k.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(g.a,{})}),Object(d.jsx)(w.a,{primary:"Reload"})]},"Reload"),Object(d.jsx)(f.b,{to:"/admin/customer-density",children:Object(d.jsxs)(k.a,{button:!0,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(B.a,{})}),Object(d.jsx)(w.a,{primary:"Customer Density"})]},"customer-density")}),Object(d.jsx)(f.b,{to:"/admin/DriverDashboard",children:Object(d.jsxs)(k.a,{button:!0,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(M.a,{})}),Object(d.jsx)(w.a,{primary:"Driver Dashboard"})]},"DriverDashboard")}),Object(d.jsx)(f.b,{to:"/admin/FarmerDashboard",children:Object(d.jsxs)(k.a,{button:!0,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(M.a,{})}),Object(d.jsx)(w.a,{primary:"Farmer Dashboard"})]},"FarmerDashboard")}),Object(d.jsx)(f.b,{to:"/admin/manageOrders",children:Object(d.jsxs)(k.a,{button:!0,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(P.a,{})}),Object(d.jsx)(w.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(d.jsx)(f.b,{to:"/admin/delivery",children:Object(d.jsxs)(k.a,{button:!0,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(M.a,{})}),Object(d.jsx)(w.a,{primary:"Delivery Dashboard"})]},"Delivery Dashboard")}),Object(d.jsx)(f.b,{to:"/admin/addReport",children:Object(d.jsxs)(k.a,{button:!0,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(B.a,{})}),Object(d.jsx)(w.a,{primary:"Add Report"})]},"Add Report")}),Object(d.jsxs)(k.a,{button:!0,onClick:t,children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(T.a,{})}),Object(d.jsx)(w.a,{primary:"Sign out"})]},"Logout")]})})})]})}var H=Object(l.f)(Object(u.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateAdmin:function(t){return e(Object(W.d)(t))}}}))((function(e){var t=G(),n=e.location;return Object(d.jsxs)("div",{className:t.root,children:[Object(d.jsx)(O.a,{position:"static",style:{backgroundColor:"#fff"},color:"default",children:Object(d.jsxs)(m.a,{style:{padding:10},children:[Object(d.jsx)("img",{src:N.a,alt:"logo",className:"logo-nav"}),Object(d.jsx)(p.a,{variant:"h5",className:t.title,children:J(n)}),Object(d.jsx)(q.a,{children:Object(d.jsx)(E,{logOut:function(){var t=e.onUpdateAdmin;Object(I.g)("x-admin-token","",0),t(null)}})})]})}),Object(d.jsx)(x.a,{})]})}))),K=n(949),Q=n(950),V=n(951),X=n(993),Y=n(955),Z=n(214);var $=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handleSubmit=function(){var t=e.state,n=t.username,r=t.password,a=e.props.onUpdateAdmin;Object(Z.d)({username:n,password:r}).then((function(e){var t=e.data.token;Object(I.g)("x-admin-token",t,5),Object(I.d)("x-admin-token",t),a(e.data.username),document.location.reload()})).catch((function(e){return alert("Please check username and password")}))},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,r=t.password;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(d.jsxs)(K.a,{style:{minWidth:300},children:[Object(d.jsx)(Q.a,{title:"Admin Login"}),Object(d.jsx)(x.a,{}),Object(d.jsxs)(V.a,{children:[Object(d.jsx)("div",{style:{marginBottom:10},children:Object(d.jsx)(X.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(t){return e.setState({username:t.target.value})}})}),Object(d.jsx)("div",{style:{marginBottom:10},children:Object(d.jsx)(X.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:r,onChange:function(t){return e.setState({password:t.target.value})}})}),Object(d.jsx)("div",{children:Object(d.jsx)(Y.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(d.jsx)(x.a,{}),Object(d.jsx)(V.a,{children:Object(d.jsx)("div",{children:Object(d.jsx)(f.b,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(s.Component),_=Object(u.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateAdmin:function(t){return e(Object(W.d)(t))}}}))($),ee=Object(s.lazy)((function(){return Promise.all([n.e(1),n.e(10)]).then(n.bind(null,958))})),te=Object(s.lazy)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,959))})),ne=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(15)]).then(n.bind(null,974))})),re=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(12)]).then(n.bind(null,978))})),ae=Object(s.lazy)((function(){return n.e(16).then(n.bind(null,979))})),ce=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(33),n.e(8)]).then(n.bind(null,990))})),ie=Object(s.lazy)((function(){return Promise.all([n.e(5),n.e(31),n.e(14)]).then(n.bind(null,960))})),oe=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(35)]).then(n.bind(null,985))})),de=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(25),n.e(37)]).then(n.bind(null,991))}));var se=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.admin;return Object(d.jsx)("div",{children:e?Object(d.jsxs)("div",{children:[Object(d.jsx)(H,{}),Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(j.a,{}),children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/admin/product",component:te}),Object(d.jsx)(l.a,{path:"/admin/manageOrders",exact:!0,component:ne}),Object(d.jsx)(l.a,{path:"/admin/customer",exact:!0,component:ee}),Object(d.jsx)(l.a,{path:"/admin/pack",exact:!0,component:ae}),Object(d.jsx)(l.a,{path:"/admin/addReport",component:ce}),Object(d.jsx)(l.a,{path:"/admin/customer-density",component:ie}),Object(d.jsx)(l.a,{path:"/admin/delivery",component:re}),Object(d.jsx)(l.a,{path:"/admin/DriverDashboard",component:oe}),Object(d.jsx)(l.a,{path:"/admin/FarmerDashboard",component:de}),Object(d.jsx)(l.a,{path:"/admin",component:ne})]})})]}):Object(d.jsx)(_,{})})}}]),n}(s.Component);t.default=Object(u.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}))(se)}}]);
//# sourceMappingURL=Admin.8f4183fd.chunk.js.map