(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[15],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));var a=n(120),r=n.n(a),c="https://api.deliver.go4life.in/api";function i(){var t=document.cookie.split(";"),e={};return t.forEach((function(t){var n=t.split("=");e[n[0]]=n[1]})),e}i()["x-auth-token"];function o(t){return r.a.request(t)}!function(){var t,e=i()["x-auth-token"];e&&(t=e,r.a.defaults.headers.common["x-auth-token"]=t)}()},119:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return u}));var a=n(111),r=n(120);function c(){var t="".concat(a.a,"/order/getAllOrders");return Object(a.b)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function i(){var t="".concat(a.a,"/order/getDeliveryBoysData");return Object(a.b)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function o(t){var e="".concat(a.a,"/order/assignDrivers");return Object(a.b)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function s(t){var e="".concat(a.a,"/order/updateCrateId");return Object(a.b)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function d(t){var e="".concat(a.a,"/admin/login");return Object(a.b)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function u(t){var e="".concat(a.a,"/admin/addReport");return Object(r.post)(e,t,{headers:{"content-type":"multipart/form-data"}})}},121:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i}));var a=n(14),r=function(t){return{type:a.a,payload:t}},c=function(t){return{type:a.b,payload:t}},i=function(t){return{type:a.e,payload:t}}},298:function(t,e,n){"use strict";n.r(e);var a=n(94),r=n(95),c=n(97),i=n(96),o=n(10),s=n(3),d=n(0),u=n(39),j=n(2),l=n(41),b=n(119),O=n(121),h=n(44),p=n(269),m=n(270),f=n(272),x=n(273),v=n(276),y=n(43),g=n(274),k=n(275),C=n(171),w=n.n(C),A=n(278),S=n(205),D=n(279),P=n(280),R=n(207),U=n.n(R),z=n(206),B=n.n(z),M=n(201),T=n.n(M),L=n(130),W=n.n(L),I=n(209),N=n.n(I),E=n(296),G=n(208),J=n.n(G),q=n(290);var F=Object(p.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function H(t){switch(t.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";case"/admin/pack":return"Pack Orders";default:return"Customer Sheet"}}function K(t){var e=t.logOut,n=Object(d.useState)(!1),a=Object(h.a)(n,2),r=a[0],c=a[1];return Object(s.jsxs)("div",{className:"flex middle",children:[Object(s.jsx)(k.a,{onClick:function(){c(!r)},children:Object(s.jsx)(T.a,{style:{color:"#000"}})}),Object(s.jsx)("div",{style:{position:"fixed",zIndex:10},children:Object(s.jsx)(E.a,{anchor:"right",open:r,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(s.jsxs)(A.a,{children:[Object(s.jsxs)(S.a,{button:!0,onClick:function(){return window.location.reload()},children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(w.a,{})}),Object(s.jsx)(P.a,{primary:"Reload"})]},"Reload"),Object(s.jsx)(y.b,{to:"/admin/customer",children:Object(s.jsxs)(S.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(B.a,{})}),Object(s.jsx)(P.a,{primary:"Customer Sheet"})]},"Customer Sheet")}),Object(s.jsx)(y.b,{to:"/admin/product",children:Object(s.jsxs)(S.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(P.a,{primary:"Product Sheet"})]},"Product Sheet")}),Object(s.jsx)(y.b,{to:"/admin/manageOrders",children:Object(s.jsxs)(S.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(U.a,{})}),Object(s.jsx)(P.a,{primary:"Manage Orders"})]},"Manage Orders")}),Object(s.jsx)(y.b,{to:"/admin/addReport",children:Object(s.jsxs)(S.a,{button:!0,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(J.a,{})}),Object(s.jsx)(P.a,{primary:"Add Report"})]},"Add Report")}),Object(s.jsxs)(S.a,{button:!0,onClick:e,children:[Object(s.jsx)(D.a,{children:Object(s.jsx)(N.a,{})}),Object(s.jsx)(P.a,{primary:"Sign out"})]},"Logout")]})})})]})}var Q=Object(j.f)(Object(u.b)((function(t){var e=t.setAdmin;return Object(o.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))((function(t){var e=F(),n=t.location;return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(m.a,{position:"static",color:"warning",children:Object(s.jsxs)(f.a,{style:{padding:10},children:[Object(s.jsx)(x.a,{variant:"h4",className:e.title,children:H(n)}),Object(s.jsx)(q.a,{children:Object(s.jsx)(K,{logOut:function(){(0,t.onUpdateAdmin)(null)}})})]})}),Object(s.jsx)(g.a,{})]})}))),V=n(281),X=n(282),Y=n(283),Z=n(306);var $=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={username:"umakant",password:"pass"},t.handleSubmit=function(){var e=t.state,n=e.username,a=e.password,r=t.props.onUpdateAdmin;Object(b.e)({username:n,password:a}).then((function(t){r(t.data)}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.username,a=e.password;return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(s.jsxs)(V.a,{style:{minWidth:300},children:[Object(s.jsx)(X.a,{title:"Admin Login"}),Object(s.jsx)(g.a,{}),Object(s.jsxs)(Y.a,{children:[Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(Z.a,{autoFocus:!0,fullWidth:!0,variant:"outlined",label:"Username",value:n,onChange:function(e){return t.setState({username:e.target.value})}})}),Object(s.jsx)("div",{style:{marginBottom:10},children:Object(s.jsx)(Z.a,{fullWidth:!0,variant:"outlined",type:"password",label:"Password",value:a,onChange:function(e){return t.setState({password:e.target.value})}})}),Object(s.jsx)("div",{children:Object(s.jsx)(v.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleSubmit,children:"Login"})})]}),Object(s.jsx)(g.a,{}),Object(s.jsx)(Y.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(y.b,{to:"/",children:"Login as Driver"})})})]})})}}]),n}(d.Component),_=Object(u.b)((function(t){var e=t.setAdmin;return Object(o.a)({},e)}),(function(t){return{onUpdateAdmin:function(e){return t(Object(O.a)(e))}}}))($),tt=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,288))})),et=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(19)]).then(n.bind(null,289))})),nt=Object(d.lazy)((function(){return Promise.all([n.e(1),n.e(10),n.e(18)]).then(n.bind(null,300))})),at=Object(d.lazy)((function(){return n.e(12).then(n.bind(null,301))})),rt=Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(13)]).then(n.bind(null,303))}));var ct=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onUpdateOrdersData,n=t.onUpdateAdminData;Object(b.d)().then((function(t){var e=t.data,a=new Map;e.forEach((function(t){a.set(t.id,t)})),n({deliveryBoys:a})})),Object(b.c)().then((function(t){var n=t.data;e(n)}))}},{key:"render",value:function(){console.log("Render admin");var t=this.props.admin;return Object(s.jsx)("div",{children:t?Object(s.jsxs)("div",{children:[Object(s.jsx)(Q,{}),Object(s.jsx)(d.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/admin/product",component:et}),Object(s.jsx)(j.a,{path:"/admin/manageOrders",exact:!0,component:nt}),Object(s.jsx)(j.a,{path:"/admin/customer",exact:!0,component:tt}),Object(s.jsx)(j.a,{path:"/admin/pack",exact:!0,component:at}),Object(s.jsx)(j.a,{path:"/admin/addReport",component:rt}),Object(s.jsx)(j.a,{path:"/admin",component:tt})]})})]}):Object(s.jsx)(_,{})})}}]),n}(d.Component);e.default=Object(u.b)((function(t){var e=t.setAdmin;return Object(o.a)({},e)}),(function(t){return{onUpdateOrdersData:function(e){return t(Object(O.c)(e))},onUpdateAdminData:function(e){return t(Object(O.b)(e))}}}))(ct)}}]);
//# sourceMappingURL=15.1ce1c0cc.chunk.js.map