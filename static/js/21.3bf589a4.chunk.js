(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[21],{140:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"f",(function(){return j})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return l}));var r=n(28),a=n(37);function c(){var t="".concat(r.a,"/order/getAllOrders");return Object(r.d)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function o(){var t="".concat(r.a,"/order/getDeliveryBoysData");return Object(r.d)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function i(t){var e="".concat(r.a,"/order/assignDrivers");return Object(r.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function s(t){var e="".concat(r.a,"/order/updateCrateId");return Object(r.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function d(t){var e="".concat(r.a,"/order/prepareOrder");return Object(r.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function j(t){var e="".concat(r.a,"/admin/login");return Object(r.d)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function u(t){var e="".concat(r.a,"/admin/addReport");return Object(a.post)(e,t,{headers:{"content-type":"multipart/form-data"}})}function l(){var t="".concat(r.a,"/admin/getLocationCustomerDensity");return Object(r.d)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}},141:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i}));var r=n(14),a=function(t){return{type:r.a,payload:t}},c=function(t){return{type:r.b,payload:t}},o=function(t){return{type:r.e,payload:t}},i=function(t){return{type:r.f,payload:t}}},175:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.8f39d4d2.png"},450:function(t,e,n){"use strict";n.r(e);var r=n(126),a=n(127),c=n(129),o=n(128),i=n(7),s=n(3),d=n(0),j=n(43),u=n(2),l=n(45),b=n(140),O=n(141),p=n(46),h=n(417),m=n(418),f=n(420),x=n(421),y=n(48),v=n(422),g=n(423),C=n(219),k=n.n(C),w=n(428),A=n(264),D=n(429),P=n(430),S=n(267),R=n.n(S),U=n(266),z=n.n(U),T=n(262),L=n.n(T),M=n(161),B=n.n(M),N=n(269),W=n.n(N),G=n(447),I=n(265),J=n.n(I),E=n(268),F=n.n(E),q=n(175),H=n(441);var K=Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function Q(t){switch(t.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";case"/admin/addReport":return"Add Milk Report";case"/admin/customer-density":return"Customer Density";default:return"Go4Life"}}function V(t){var e=t.logOut,n=Object(d.useState)(!1),r=Object(p.a)(n,2),a=r[0],c=r[1];return Object(s.jsxs)("div",{className:"flex middle",children:[Object(s.jsx)(g.a,{onClick:function(){c(!a)},children:Object(s.jsx)(L.a,{style:{color:"#000"}})}),Object(s.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(s.jsx)(G.a,{anchor:"right",open:a,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(s.jsxs)(w.a,{children:[Object(s.jsxs)(A.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(k.a,{})}),Object(s.jsx)(P.a,{primary:"Reload"})]},"Reload"),Object(s.jsx)(y.b,{to:"/admin/customer-density",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(J.a,{})}),Object(s.jsx)(P.a,{primary:"Customer Density"})]},"customer-density")}),Object(s.jsx)(y.b,{to:"/admin/customer",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(z.a,{})}),Object(s.jsx)(P.a,{primary:"Customer Sheet"})]},"Customer Sheet")}),Object(s.jsx)(y.b,{to:"/admin/product",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(P.a,{primary:"Product Sheet"})]},"Product Sheet")}),Object(s.jsx)(y.b,{to:"/admin/manageOrders",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(R.a,{})}),Object(s.jsx)(P.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(s.jsx)(y.b,{to:"/admin/pack",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(F.a,{})}),Object(s.jsx)(P.a,{primary:"Pack Orders"})]},"Pack Orders")}),Object(s.jsx)(y.b,{to:"/admin/addReport",children:Object(s.jsxs)(A.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(J.a,{})}),Object(s.jsx)(P.a,{primary:"Add Report"})]},"Add Report")}),Object(s.jsxs)(A.a,{button:!0,onClick:e,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(P.a,{primary:"Sign out"})]},"Logout")]})})})]})}var X=Object(u.f)(Object(j.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))((function(t){var e=K(),n=t.location;return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(m.a,{position:"static",style:{backgroundColor:"#fff"},color:"default",children:Object(s.jsxs)(f.a,{style:{padding:10},children:[Object(s.jsx)("img",{src:q.a,alt:"logo",className:"logo-nav"}),Object(s.jsx)(x.a,{variant:"h5",className:e.title,children:Q(n)}),Object(s.jsx)(H.a,{children:Object(s.jsx)(V,{logOut:function(){(0,t.onUpdateAdmin)(null)}})})]})}),Object(s.jsx)(v.a,{})]})}))),Y=n(431),Z=n(432),$=n(433),_=n(457),tt=n(437);var et=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={username:"",password:""},t.handleSubmit=function(){var e=t.state,n=e.username,r=e.password,a=t.props.onUpdateAdmin;Object(b.f)({username:n,password:r}).then((function(t){a(t.data)}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.username,r=e.password;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(s.jsxs)(Y.a,{style:{minWidth:300},children:[Object(s.jsx)(Z.a,{title:"Admin Login"}),Object(s.jsx)(v.a,{}),Object(s.jsxs)($.a,{children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(_.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(e){return t.setState({username:e.target.value})}})}),Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(_.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:r,onChange:function(e){return t.setState({password:e.target.value})}})}),Object(s.jsx)("div",{children:Object(s.jsx)(tt.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(s.jsx)(v.a,{}),Object(s.jsx)($.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(y.b,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(d.Component),nt=Object(j.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))(et),rt=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,438))})),at=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,439))})),ct=Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(18),n.e(7)]).then(n.bind(null,452))})),ot=Object(d.lazy)((function(){return n.e(8).then(n.bind(null,453))})),it=Object(d.lazy)((function(){return Promise.all([n.e(2),n.e(20),n.e(4)]).then(n.bind(null,454))})),st=Object(d.lazy)((function(){return Promise.all([n.e(14),n.e(6)]).then(n.bind(null,440))}));var dt=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onUpdateOrdersData,n=t.onUpdateAdminData;Object(b.d)().then((function(t){var e=t.data,r=new Map;e.forEach((function(t){r.set(t.id,t)})),n({deliveryBoys:r})})),Object(b.c)().then((function(t){var n=t.data;e(n)}))}},{key:"render",value:function(){console.log("Render admin");var t=this.props.admin;return Object(s.jsx)("div",{children:t?Object(s.jsxs)("div",{children:[Object(s.jsx)(X,{}),Object(s.jsx)(d.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/admin/product",component:at}),Object(s.jsx)(u.a,{path:"/admin/manageOrders",exact:!0,component:ct}),Object(s.jsx)(u.a,{path:"/admin/customer",exact:!0,component:rt}),Object(s.jsx)(u.a,{path:"/admin/pack",exact:!0,component:ot}),Object(s.jsx)(u.a,{path:"/admin/addReport",component:it}),Object(s.jsx)(u.a,{path:"/admin/customer-density",component:st}),Object(s.jsx)(u.a,{path:"/admin",component:rt})]})})]}):Object(s.jsx)(nt,{})})}}]),n}(d.Component);e.default=Object(j.b)((function(t){var e=t.setAdmin;return Object(i.a)({},e)}),(function(t){return{onUpdateOrdersData:function(e){return t(Object(O.d)(e))},onUpdateAdminData:function(e){return t(Object(O.b)(e))}}}))(dt)}}]);
//# sourceMappingURL=21.3bf589a4.chunk.js.map