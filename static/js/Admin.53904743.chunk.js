(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[9],{261:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"f",(function(){return u}));var r=n(15),a=function(e){return{type:r.d,payload:e}},c=function(e){return{type:r.e,payload:e}},i=function(e){return{type:r.i,payload:e}},o=function(e){return{type:r.j,payload:e}},s=function(e){return{type:r.c,payload:e}},d=function(e){return{type:r.b,payload:e}},j=function(e){return{type:r.a,payload:e}},u=function(e){return{type:r.f,payload:e}}},301:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n(22),a=n(30);function c(){var e="".concat(r.a,"/order/getAllOrders");return Object(r.d)(e)}function i(e){var t="".concat(r.a,"/order/updateCrateId");return Object(r.g)(t,e)}function o(e){var t="".concat(r.a,"/order/prepareOrder");return Object(r.g)(t,e)}function s(e){var t="".concat(r.a,"/admin/login");return Object(r.g)(t,e)}function d(e){var t="".concat(r.a,"/admin/addReport");return Object(a.post)(t,e,{headers:{"content-type":"multipart/form-data"}})}function j(){var e="".concat(r.a,"/admin/getLocationCustomerDensity");return Object(r.d)(e)}function u(){var e="".concat(r.a,"/analytics/getCustomersOrderHistory");return Object(r.d)(e)}function l(e){var t="".concat(r.a,"/customers/getCustomers");return Object(r.g)(t,e)}},320:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.8f39d4d2.png"},891:function(e,t,n){"use strict";n.r(t);var r=n(163),a=n(166),c=n(167),i=n(168),o=n(3),s=n(2),d=n(0),j=n(29),u=n(5),l=n(58),b=n(26),O=n(142),m=n(845),h=n(847),x=n(119),p=n(59),f=n(744),y=n(848),v=n(701),g=n.n(v),D=n(849),k=n(747),C=n(850),w=n(851),P=n(751),z=n.n(P),A=n(749),R=n.n(A),S=n(745),F=n.n(S),L=n(752),M=n.n(L),U=n(889),N=n(748),W=n.n(N),B=n(750),I=n.n(B),G=n(320),J=n(261),T=n(810),H=n(22);var q=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function E(e){switch(e.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";case"/admin/addReport":return"Add Milk Report";case"/admin/customer-density":return"Customer Density";case"/admin/delivery":return"Delivery Dashboard";case"/admin/DriverDashboard":return"Driver Dashboard";case"/admin/FarmerDashboard":return"Farmer Dashboard";case"/admin/traceability":return"Traceability";default:return""}}function K(e){var t=e.logOut,n=Object(d.useState)(!1),r=Object(b.a)(n,2),a=r[0],c=r[1];return Object(s.jsxs)("div",{className:"flex middle",children:[Object(s.jsx)(y.a,{onClick:function(){c(!a)},children:Object(s.jsx)(F.a,{style:{color:"#000"}})}),Object(s.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(s.jsx)(U.a,{anchor:"right",open:a,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(s.jsxs)(D.a,{children:[Object(s.jsxs)(k.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(g.a,{})}),Object(s.jsx)(w.a,{primary:"Reload"})]},"Reload"),Object(s.jsx)(p.c,{to:"/admin/customer-density",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(w.a,{primary:"Customer Density"})]},"customer-density")}),Object(s.jsx)(f.a,{}),Object(s.jsx)(p.c,{to:"/admin/traceability",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(R.a,{})}),Object(s.jsx)(w.a,{primary:"Traceability"})]},"traceability")}),Object(s.jsx)(p.c,{to:"/admin/FarmerDashboard",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(I.a,{})}),Object(s.jsx)(w.a,{primary:"Farmer Dashboard"})]},"FarmerDashboard")}),Object(s.jsx)(p.c,{to:"/admin/addReport",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(w.a,{primary:"Add Milk Report"})]},"Add Report")}),Object(s.jsx)(f.a,{}),Object(s.jsx)(p.c,{to:"/admin/manageOrders",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(z.a,{})}),Object(s.jsx)(w.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(s.jsx)(p.c,{to:"/admin/delivery",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(I.a,{})}),Object(s.jsx)(w.a,{primary:"Delivery Dashboard"})]},"Delivery Dashboard")}),Object(s.jsx)(p.c,{to:"/admin/DriverDashboard",children:Object(s.jsxs)(k.a,{button:!0,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(I.a,{})}),Object(s.jsx)(w.a,{primary:"Driver Dashboard"})]},"DriverDashboard")}),Object(s.jsx)(f.a,{}),Object(s.jsxs)(k.a,{button:!0,onClick:t,children:[Object(s.jsx)(C.a,{children:Object(s.jsx)(M.a,{})}),Object(s.jsx)(w.a,{primary:"Sign out"})]},"Logout")]})})})]})}var Q=Object(u.g)(Object(j.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateAdmin:function(t){return e(Object(J.d)(t))}}}))((function(e){var t=q(),n=e.location;return Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)(m.a,{position:"static",style:{backgroundColor:"#fff"},color:"default",children:Object(s.jsxs)(h.a,{style:{padding:10},children:[Object(s.jsx)("img",{src:G.a,alt:"logo",className:"logo-nav"}),Object(s.jsx)(x.a,{variant:"h5",className:t.title,children:E(n)}),Object(s.jsx)(T.a,{children:Object(s.jsx)(K,{logOut:function(){var t=e.onUpdateAdmin;Object(H.i)("x-admin-token","",0),t(null)}})})]})}),Object(s.jsx)(f.a,{})]})}))),V=n(753),X=n(852),Y=n(853),Z=n(900),$=n(754),_=n(301);var ee=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handleSubmit=function(){var t=e.state,n=t.username,r=t.password,a=e.props.onUpdateAdmin;Object(_.f)({username:n,password:r}).then((function(e){var t=e.data.token;Object(H.i)("x-admin-token",t,5),Object(H.f)("x-admin-token",t),a(e.data.username),document.location.reload()})).catch((function(e){return alert("Please check username and password")}))},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,r=t.password;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(s.jsxs)(V.a,{style:{minWidth:300},children:[Object(s.jsx)(X.a,{title:"Admin Login"}),Object(s.jsx)(f.a,{}),Object(s.jsxs)(Y.a,{children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(Z.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(t){return e.setState({username:t.target.value})}})}),Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(Z.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:r,onChange:function(t){return e.setState({password:t.target.value})}})}),Object(s.jsx)("div",{children:Object(s.jsx)($.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(s.jsx)(f.a,{}),Object(s.jsx)(Y.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(p.c,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(d.Component),te=Object(j.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateAdmin:function(t){return e(Object(J.d)(t))}}}))(ee),ne=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(11)]).then(n.bind(null,860))})),re=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(20)]).then(n.bind(null,861))})),ae=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,881))})),ce=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,883))})),ie=Object(d.lazy)((function(){return n.e(19).then(n.bind(null,887))})),oe=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(32),n.e(8)]).then(n.bind(null,897))})),se=Object(d.lazy)((function(){return Promise.all([n.e(5),n.e(34),n.e(15)]).then(n.bind(null,862))})),de=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(33)]).then(n.bind(null,893))})),je=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(36)]).then(n.bind(null,898))})),ue=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(37),n.e(39)]).then(n.bind(null,888))})),le=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(3),n.e(40)]).then(n.bind(null,894))})),be=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(31),n.e(41)]).then(n.bind(null,884))}));var Oe=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.admin;return Object(s.jsx)("div",{children:e?Object(s.jsxs)("div",{children:[Object(s.jsx)(Q,{}),Object(s.jsx)(d.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/admin/product",component:re}),Object(s.jsx)(u.a,{path:"/admin/manageOrders",exact:!0,component:ae}),Object(s.jsx)(u.a,{path:"/admin/customer",exact:!0,component:ne}),Object(s.jsx)(u.a,{path:"/admin/pack",exact:!0,component:ie}),Object(s.jsx)(u.a,{path:"/admin/addReport",component:oe}),Object(s.jsx)(u.a,{path:"/admin/customer-density",component:se}),Object(s.jsx)(u.a,{path:"/admin/delivery/instructions",component:be}),Object(s.jsx)(u.a,{path:"/admin/delivery",component:ce}),Object(s.jsx)(u.a,{path:"/admin/DriverDashboard",component:de}),Object(s.jsx)(u.a,{path:"/admin/FarmerDashboard",component:je}),Object(s.jsx)(u.a,{path:"/admin/traceability",component:ue}),Object(s.jsx)(u.a,{path:"/admin/trends/inactive",component:le}),Object(s.jsx)(u.a,{path:"/admin",component:ae})]})})]}):Object(s.jsx)(te,{})})}}]),n}(d.Component);t.default=Object(j.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}))(Oe)}}]);
//# sourceMappingURL=Admin.53904743.chunk.js.map