(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[9],{200:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"f",(function(){return u}));var a=n(15),r=function(e){return{type:a.d,payload:e}},c=function(e){return{type:a.e,payload:e}},i=function(e){return{type:a.i,payload:e}},o=function(e){return{type:a.j,payload:e}},s=function(e){return{type:a.c,payload:e}},d=function(e){return{type:a.b,payload:e}},j=function(e){return{type:a.a,payload:e}},u=function(e){return{type:a.f,payload:e}}},213:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l}));var a=n(32),r=n(28);function c(){var e="".concat(a.a,"/order/getAllOrders");return Object(a.g)({url:e,method:"get",headers:{"Content-Type":"application/json"}})}function i(e){var t="".concat(a.a,"/order/updateCrateId");return Object(a.g)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function o(e){var t="".concat(a.a,"/order/prepareOrder");return Object(a.g)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function s(e){var t="".concat(a.a,"/admin/login");return Object(a.g)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function d(e){var t="".concat(a.a,"/admin/addReport");return Object(r.post)(t,e,{headers:{"content-type":"multipart/form-data"}})}function j(){var e="".concat(a.a,"/admin/getLocationCustomerDensity");return Object(a.g)({url:e,method:"get",headers:{"Content-Type":"application/json"}})}function u(){var e="".concat(a.a,"/analytics/getCustomersOrderHistory");return Object(a.d)(e)}function l(e){var t="".concat(a.a,"/customers/getCustomers");return Object(a.f)(t,e)}},231:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.8f39d4d2.png"},597:function(e,t,n){"use strict";n.r(t);var a=n(153),r=n(154),c=n(155),i=n(156),o=n(5),s=n(2),d=n(0),j=n(53),u=n(4),l=n(54),b=n(27),O=n(141),h=n(558),m=n(560),p=n(115),x=n(56),f=n(394),y=n(561),v=n(330),g=n.n(v),D=n(562),C=n(397),k=n(563),w=n(564),P=n(401),A=n.n(P),z=n(399),R=n.n(z),S=n(395),F=n.n(S),T=n(402),L=n.n(T),M=n(595),U=n(398),N=n.n(U),W=n(400),B=n.n(W),I=n(231),G=n(200),J=n(515),H=n(32);var q=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function E(e){switch(e.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";case"/admin/addReport":return"Add Milk Report";case"/admin/customer-density":return"Customer Density";case"/admin/delivery":return"Delivery Dashboard";case"/admin/DriverDashboard":return"Driver Dashboard";case"/admin/FarmerDashboard":return"Farmer Dashboard";case"/admin/traceability":return"Traceability";default:return""}}function K(e){var t=e.logOut,n=Object(d.useState)(!1),a=Object(b.a)(n,2),r=a[0],c=a[1];return Object(s.jsxs)("div",{className:"flex middle",children:[Object(s.jsx)(y.a,{onClick:function(){c(!r)},children:Object(s.jsx)(F.a,{style:{color:"#000"}})}),Object(s.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(s.jsx)(M.a,{anchor:"right",open:r,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(s.jsxs)(D.a,{children:[Object(s.jsxs)(C.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(g.a,{})}),Object(s.jsx)(w.a,{primary:"Reload"})]},"Reload"),Object(s.jsx)(x.b,{to:"/admin/customer-density",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(N.a,{})}),Object(s.jsx)(w.a,{primary:"Customer Density"})]},"customer-density")}),Object(s.jsx)(f.a,{}),Object(s.jsx)(x.b,{to:"/admin/traceability",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(R.a,{})}),Object(s.jsx)(w.a,{primary:"Traceability"})]},"traceability")}),Object(s.jsx)(x.b,{to:"/admin/FarmerDashboard",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(w.a,{primary:"Farmer Dashboard"})]},"FarmerDashboard")}),Object(s.jsx)(x.b,{to:"/admin/addReport",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(N.a,{})}),Object(s.jsx)(w.a,{primary:"Add Milk Report"})]},"Add Report")}),Object(s.jsx)(f.a,{}),Object(s.jsx)(x.b,{to:"/admin/manageOrders",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(A.a,{})}),Object(s.jsx)(w.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(s.jsx)(x.b,{to:"/admin/delivery",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(w.a,{primary:"Delivery Dashboard"})]},"Delivery Dashboard")}),Object(s.jsx)(x.b,{to:"/admin/DriverDashboard",children:Object(s.jsxs)(C.a,{button:!0,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(w.a,{primary:"Driver Dashboard"})]},"DriverDashboard")}),Object(s.jsx)(f.a,{}),Object(s.jsxs)(C.a,{button:!0,onClick:t,children:[Object(s.jsx)(k.a,{children:Object(s.jsx)(L.a,{})}),Object(s.jsx)(w.a,{primary:"Sign out"})]},"Logout")]})})})]})}var Q=Object(u.f)(Object(j.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateAdmin:function(t){return e(Object(G.d)(t))}}}))((function(e){var t=q(),n=e.location;return Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)(h.a,{position:"static",style:{backgroundColor:"#fff"},color:"default",children:Object(s.jsxs)(m.a,{style:{padding:10},children:[Object(s.jsx)("img",{src:I.a,alt:"logo",className:"logo-nav"}),Object(s.jsx)(p.a,{variant:"h5",className:t.title,children:E(n)}),Object(s.jsx)(J.a,{children:Object(s.jsx)(K,{logOut:function(){var t=e.onUpdateAdmin;Object(H.h)("x-admin-token","",0),t(null)}})})]})}),Object(s.jsx)(f.a,{})]})}))),V=n(403),X=n(565),Y=n(566),Z=n(609),$=n(404),_=n(213);var ee=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handleSubmit=function(){var t=e.state,n=t.username,a=t.password,r=e.props.onUpdateAdmin;Object(_.f)({username:n,password:a}).then((function(e){var t=e.data.token;Object(H.h)("x-admin-token",t,5),Object(H.e)("x-admin-token",t),r(e.data.username),document.location.reload()})).catch((function(e){return alert("Please check username and password")}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,a=t.password;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(s.jsxs)(V.a,{style:{minWidth:300},children:[Object(s.jsx)(X.a,{title:"Admin Login"}),Object(s.jsx)(f.a,{}),Object(s.jsxs)(Y.a,{children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(Z.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(t){return e.setState({username:t.target.value})}})}),Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(Z.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:a,onChange:function(t){return e.setState({password:t.target.value})}})}),Object(s.jsx)("div",{children:Object(s.jsx)($.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(s.jsx)(f.a,{}),Object(s.jsx)(Y.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(x.b,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(d.Component),te=Object(j.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateAdmin:function(t){return e(Object(G.d)(t))}}}))(ee),ne=Object(d.lazy)((function(){return Promise.all([n.e(2),n.e(11)]).then(n.bind(null,572))})),ae=Object(d.lazy)((function(){return Promise.all([n.e(2),n.e(19)]).then(n.bind(null,573))})),re=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(16)]).then(n.bind(null,588))})),ce=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(13)]).then(n.bind(null,591))})),ie=Object(d.lazy)((function(){return n.e(18).then(n.bind(null,594))})),oe=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(31),n.e(8)]).then(n.bind(null,606))})),se=Object(d.lazy)((function(){return Promise.all([n.e(4),n.e(32),n.e(15)]).then(n.bind(null,574))})),de=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(35),n.e(39)]).then(n.bind(null,599))})),je=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(34)]).then(n.bind(null,607))})),ue=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(37)]).then(n.bind(null,586))})),le=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(40),n.e(41)]).then(n.bind(null,600))}));var be=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.admin;return Object(s.jsx)("div",{children:e?Object(s.jsxs)("div",{children:[Object(s.jsx)(Q,{}),Object(s.jsx)(d.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/admin/product",component:ae}),Object(s.jsx)(u.a,{path:"/admin/manageOrders",exact:!0,component:re}),Object(s.jsx)(u.a,{path:"/admin/customer",exact:!0,component:ne}),Object(s.jsx)(u.a,{path:"/admin/pack",exact:!0,component:ie}),Object(s.jsx)(u.a,{path:"/admin/addReport",component:oe}),Object(s.jsx)(u.a,{path:"/admin/customer-density",component:se}),Object(s.jsx)(u.a,{path:"/admin/delivery",component:ce}),Object(s.jsx)(u.a,{path:"/admin/DriverDashboard",component:de}),Object(s.jsx)(u.a,{path:"/admin/FarmerDashboard",component:je}),Object(s.jsx)(u.a,{path:"/admin/traceability",component:ue}),Object(s.jsx)(u.a,{path:"/admin/trends/inactive",component:le}),Object(s.jsx)(u.a,{path:"/admin",component:re})]})})]}):Object(s.jsx)(te,{})})}}]),n}(d.Component);t.default=Object(j.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}))(be)}}]);