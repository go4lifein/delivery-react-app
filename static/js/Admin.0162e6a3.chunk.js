(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[7],{126:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return d}));n(116);var r=n(142),a=n.n(r),c="https://api.deliver.go4life.in/api";function o(){var t=document.cookie.split(";"),e={};return t.forEach((function(t){var n=t.split("=");e[n[0]]=n[1]})),e}function i(t,e,n){var r="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),r="; expires="+a.toUTCString()}document.cookie=t+"="+(e||"")+r+"; path=/"}o()["x-admin-token"];function s(){var t,e=o()["x-admin-token"];e&&(t=e,a.a.defaults.headers.common["x-admin-token"]=t)}function d(t){return a.a.request(t)}s()},143:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i}));var r=n(14),a=function(t){return{type:r.a,payload:t}},c=function(t){return{type:r.b,payload:t}},o=function(t){return{type:r.e,payload:t}},i=function(t){return{type:r.f,payload:t}}},164:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return u}));var r=n(126),a=n(142);function c(){var t="".concat(r.a,"/order/getAllOrders");return Object(r.c)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function o(t){var e="".concat(r.a,"/order/updateCrateId");return Object(r.c)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function i(t){var e="".concat(r.a,"/order/prepareOrder");return Object(r.c)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function s(t){var e="".concat(r.a,"/admin/login");return Object(r.c)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function d(t){var e="".concat(r.a,"/admin/addReport");return Object(a.post)(e,t,{headers:{"content-type":"multipart/form-data"}})}function u(){var t="".concat(r.a,"/admin/getLocationCustomerDensity");return Object(r.c)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}},211:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.8f39d4d2.png"},256:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n(126);n(142);function a(){var t="".concat(r.a,"/v2/order/getAllOrders");return Object(r.c)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function c(){var t="".concat(r.a,"/v2/order/getDeliveryBoysData");return Object(r.c)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function o(t){var e="".concat(r.a,"/v2/order/assignDrivers");return Object(r.c)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}},564:function(t,e,n){"use strict";n.r(e);var r=n(105),a=n(106),c=n(107),o=n(108),i=n(10),s=n(2),d=n(0),u=n(39),j=n(3),l=n(40),b=n(256),O=n(143),p=n(116),h=n(515),m=n(516),f=n(518),x=n(519),v=n(41),y=n(520),g=n(521),k=n(267),C=n.n(k),w=n(526),A=n(351),D=n(527),P=n(528),S=n(354),T=n.n(S),R=n(353),U=n.n(R),z=n(350),M=n.n(z),B=n(185),L=n.n(B),N=n(356),W=n.n(N),I=n(560),E=n(352),G=n.n(E),J=n(355),q=n.n(J),F=n(211),H=n(552),K=n(126);var Q=Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function V(t){switch(t.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";case"/admin/addReport":return"Add Milk Report";case"/admin/customer-density":return"Customer Density";default:return""}}function X(t){var e=t.logOut,n=Object(d.useState)(!1),r=Object(p.a)(n,2),a=r[0],c=r[1];return Object(s.jsxs)("div",{className:"flex middle",children:[Object(s.jsx)(g.a,{onClick:function(){c(!a)},children:Object(s.jsx)(M.a,{style:{color:"#000"}})}),Object(s.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(s.jsx)(I.a,{anchor:"right",open:a,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(s.jsxs)(w.a,{children:[Object(s.jsxs)(A.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(C.a,{})}),Object(s.jsx)(P.a,{primary:"Reload"})]},"Reload"),Object(s.jsx)(v.b,{to:"/admin/customer-density",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(G.a,{})}),Object(s.jsx)(P.a,{primary:"Customer Density"})]},"customer-density")}),Object(s.jsx)(v.b,{to:"/admin/customer",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(U.a,{})}),Object(s.jsx)(P.a,{primary:"Customer Sheet"})]},"Customer Sheet")}),Object(s.jsx)(v.b,{to:"/admin/product",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(L.a,{})}),Object(s.jsx)(P.a,{primary:"Product Sheet"})]},"Product Sheet")}),Object(s.jsx)(v.b,{to:"/admin/manageOrders",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(T.a,{})}),Object(s.jsx)(P.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(s.jsx)(v.b,{to:"/admin/pack",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(q.a,{})}),Object(s.jsx)(P.a,{primary:"Pack Orders"})]},"Pack Orders")}),Object(s.jsx)(v.b,{to:"/admin/addReport",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(G.a,{})}),Object(s.jsx)(P.a,{primary:"Add Report"})]},"Add Report")}),Object(s.jsxs)(A.a,{button:!0,onClick:e,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(P.a,{primary:"Sign out"})]},"Logout")]})})})]})}var Y=Object(j.f)(Object(u.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))((function(t){var e=Q(),n=t.location;return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(m.a,{position:"static",style:{backgroundColor:"#fff"},color:"default",children:Object(s.jsxs)(f.a,{style:{padding:10},children:[Object(s.jsx)("img",{src:F.a,alt:"logo",className:"logo-nav"}),Object(s.jsx)(x.a,{variant:"h5",className:e.title,children:V(n)}),Object(s.jsx)(H.a,{children:Object(s.jsx)(X,{logOut:function(){var e=t.onUpdateAdmin;Object(K.d)("x-admin-token","",0),e(null)}})})]})}),Object(s.jsx)(y.a,{})]})}))),Z=n(529),$=n(530),_=n(531),tt=n(572),et=n(535),nt=n(164);var rt=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={username:"",password:""},t.handleSubmit=function(){var e=t.state,n=e.username,r=e.password,a=t.props.onUpdateAdmin;Object(nt.d)({username:n,password:r}).then((function(t){var e=t.data.token;Object(K.b)(e),Object(K.d)("x-admin-token",e,5),a(t.data.username),document.location.reload()})).catch((function(t){return alert("Please check username and password")}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.username,r=e.password;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(s.jsxs)(Z.a,{style:{minWidth:300},children:[Object(s.jsx)($.a,{title:"Admin Login"}),Object(s.jsx)(y.a,{}),Object(s.jsxs)(_.a,{children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(tt.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(e){return t.setState({username:e.target.value})}})}),Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(tt.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:r,onChange:function(e){return t.setState({password:e.target.value})}})}),Object(s.jsx)("div",{children:Object(s.jsx)(et.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(s.jsx)(y.a,{}),Object(s.jsx)(_.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(v.b,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(d.Component),at=Object(u.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))(rt),ct=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,538))})),ot=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,539))})),it=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(29),n.e(12)]).then(n.bind(null,566))})),st=Object(d.lazy)((function(){return n.e(13).then(n.bind(null,568))})),dt=Object(d.lazy)((function(){return Promise.all([n.e(4),n.e(28),n.e(6)]).then(n.bind(null,569))})),ut=Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(27),n.e(11)]).then(n.bind(null,540))}));var jt=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onUpdateOrdersData,n=t.onUpdateAdminData;Object(b.c)().then((function(t){var e=t.data,r=new Map;e.forEach((function(t){r.set(t.id,t)})),n({deliveryBoys:r})})),Object(b.b)().then((function(t){var n=t.data;e(n)}))}},{key:"render",value:function(){var t=this.props.admin;return Object(s.jsx)("div",{children:t?Object(s.jsxs)("div",{children:[Object(s.jsx)(Y,{}),Object(s.jsx)(d.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/admin/product",component:ot}),Object(s.jsx)(j.a,{path:"/admin/manageOrders",exact:!0,component:it}),Object(s.jsx)(j.a,{path:"/admin/customer",exact:!0,component:ct}),Object(s.jsx)(j.a,{path:"/admin/pack",exact:!0,component:st}),Object(s.jsx)(j.a,{path:"/admin/addReport",component:dt}),Object(s.jsx)(j.a,{path:"/admin/customer-density",component:ut}),Object(s.jsx)(j.a,{path:"/admin",component:it})]})})]}):Object(s.jsx)(at,{})})}}]),n}(d.Component);e.default=Object(u.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateOrdersData:function(e){return t(Object(O.d)(e))},onUpdateAdminData:function(e){return t(Object(O.b)(e))}}}))(jt)}}]);
//# sourceMappingURL=Admin.0162e6a3.chunk.js.map