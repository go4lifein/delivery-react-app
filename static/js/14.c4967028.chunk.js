(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[14],{140:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return j})),n.d(e,"a",(function(){return u}));var a=n(27),r=n(36);function c(){var t="".concat(a.a,"/order/getAllOrders");return Object(a.d)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function o(){var t="".concat(a.a,"/order/getDeliveryBoysData");return Object(a.d)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function i(t){var e="".concat(a.a,"/order/assignDrivers");return Object(a.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function s(t){var e="".concat(a.a,"/order/updateCrateId");return Object(a.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function d(t){var e="".concat(a.a,"/order/prepareOrder");return Object(a.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function j(t){var e="".concat(a.a,"/admin/login");return Object(a.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function u(t){var e="".concat(a.a,"/admin/addReport");return Object(r.post)(e,t,{headers:{"content-type":"multipart/form-data"}})}},141:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i}));var a=n(14),r=function(t){return{type:a.a,payload:t}},c=function(t){return{type:a.b,payload:t}},o=function(t){return{type:a.e,payload:t}},i=function(t){return{type:a.f,payload:t}}},172:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.8f39d4d2.png"},412:function(t,e,n){"use strict";n.r(e);var a=n(125),r=n(126),c=n(128),o=n(127),i=n(11),s=n(3),d=n(0),j=n(42),u=n(2),l=n(44),b=n(140),O=n(141),p=n(47),h=n(382),m=n(383),x=n(385),f=n(386),v=n(48),y=n(387),g=n(388),C=n(204),k=n.n(C),w=n(390),A=n(244),S=n(391),P=n(392),R=n(246),D=n.n(R),U=n(245),z=n.n(U),M=n(239),T=n.n(M),B=n(161),L=n.n(B),N=n(249),W=n.n(N),I=n(410),G=n(248),J=n.n(G),E=n(247),F=n.n(E),q=n(172),H=n(402);var K=Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function Q(t){switch(t.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";case"/admin/addReport":return"Add Milk Report";default:return"Customer Sheet"}}function V(t){var e=t.logOut,n=Object(d.useState)(!1),a=Object(p.a)(n,2),r=a[0],c=a[1];return Object(s.jsxs)("div",{className:"flex middle",children:[Object(s.jsx)(g.a,{onClick:function(){c(!r)},children:Object(s.jsx)(T.a,{style:{color:"#000"}})}),Object(s.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(s.jsx)(I.a,{anchor:"right",open:r,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(s.jsxs)(w.a,{children:[Object(s.jsxs)(A.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(k.a,{})}),Object(s.jsx)(P.a,{primary:"Reload"})]},"Reload"),Object(s.jsx)(v.b,{to:"/admin/customer",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(z.a,{})}),Object(s.jsx)(P.a,{primary:"Customer Sheet"})]},"Customer Sheet")}),Object(s.jsx)(v.b,{to:"/admin/product",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(L.a,{})}),Object(s.jsx)(P.a,{primary:"Product Sheet"})]},"Product Sheet")}),Object(s.jsx)(v.b,{to:"/admin/manageOrders",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(D.a,{})}),Object(s.jsx)(P.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(s.jsx)(v.b,{to:"/admin/pack",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(F.a,{})}),Object(s.jsx)(P.a,{primary:"Pack Orders"})]},"Pack Orders")}),Object(s.jsx)(v.b,{to:"/admin/addReport",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(J.a,{})}),Object(s.jsx)(P.a,{primary:"Add Report"})]},"Add Report")}),Object(s.jsxs)(A.a,{button:!0,onClick:e,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(P.a,{primary:"Sign out"})]},"Logout")]})})})]})}var X=Object(u.f)(Object(j.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))((function(t){var e=K(),n=t.location;return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(m.a,{position:"static",color:"warning",children:Object(s.jsxs)(x.a,{style:{padding:10},children:[Object(s.jsx)("img",{src:q.a,alt:"logo",className:"logo"}),Object(s.jsx)(f.a,{variant:"h5",className:e.title,children:Q(n)}),Object(s.jsx)(H.a,{children:Object(s.jsx)(V,{logOut:function(){(0,t.onUpdateAdmin)(null)}})})]})}),Object(s.jsx)(y.a,{})]})}))),Y=n(393),Z=n(394),$=n(395),_=n(418),tt=n(399);var et=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={username:"",password:""},t.handleSubmit=function(){var e=t.state,n=e.username,a=e.password,r=t.props.onUpdateAdmin;Object(b.e)({username:n,password:a}).then((function(t){r(t.data)}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.username,a=e.password;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(s.jsxs)(Y.a,{style:{minWidth:300},children:[Object(s.jsx)(Z.a,{title:"Admin Login"}),Object(s.jsx)(y.a,{}),Object(s.jsxs)($.a,{children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(_.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(e){return t.setState({username:e.target.value})}})}),Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(_.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:a,onChange:function(e){return t.setState({password:e.target.value})}})}),Object(s.jsx)("div",{children:Object(s.jsx)(tt.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(s.jsx)(y.a,{}),Object(s.jsx)($.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(v.b,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(d.Component),nt=Object(j.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))(et),at=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,400))})),rt=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,401))})),ct=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(10),n.e(18)]).then(n.bind(null,414))})),ot=Object(d.lazy)((function(){return n.e(12).then(n.bind(null,409))})),it=Object(d.lazy)((function(){return Promise.all([n.e(2),n.e(13),n.e(17)]).then(n.bind(null,415))}));var st=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onUpdateOrdersData,n=t.onUpdateAdminData;Object(b.d)().then((function(t){var e=t.data,a=new Map;e.forEach((function(t){a.set(t.id,t)})),n({deliveryBoys:a})})),Object(b.c)().then((function(t){var n=t.data;e(n)}))}},{key:"render",value:function(){console.log("Render admin");var t=this.props.admin;return Object(s.jsx)("div",{children:t?Object(s.jsxs)("div",{children:[Object(s.jsx)(X,{}),Object(s.jsx)(d.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/admin/product",component:rt}),Object(s.jsx)(u.a,{path:"/admin/manageOrders",exact:!0,component:ct}),Object(s.jsx)(u.a,{path:"/admin/customer",exact:!0,component:at}),Object(s.jsx)(u.a,{path:"/admin/pack",exact:!0,component:ot}),Object(s.jsx)(u.a,{path:"/admin/addReport",component:it}),Object(s.jsx)(u.a,{path:"/admin",component:at})]})})]}):Object(s.jsx)(nt,{})})}}]),n}(d.Component);e.default=Object(j.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateOrdersData:function(e){return t(Object(O.d)(e))},onUpdateAdminData:function(e){return t(Object(O.b)(e))}}}))(st)}}]);
//# sourceMappingURL=14.c4967028.chunk.js.map