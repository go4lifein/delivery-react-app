(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[10],{125:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var r=n(118),c=n.n(r),a="https://api.deliver.go4life.in/api";function i(){var t=document.cookie.split(";"),e={};return t.forEach((function(t){var n=t.split("=");e[n[0]]=n[1]})),e}i()["x-auth-token"];function o(t){return c.a.request(t)}!function(){var t,e=i()["x-auth-token"];e&&(t=e,c.a.defaults.headers.common["x-auth-token"]=t)}()},132:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));var r=n(14),c=function(t){return{type:r.c,payload:t}},a=function(t){return{type:r.d,payload:t}}},133:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));var r=n(125),c=n(118);function a(t){var e="".concat(r.a,"/driver/login");return Object(r.b)({url:e,method:"post",data:t,headers:{"Content-Type":"application/json"}})}function i(t){var e="".concat(r.a,"/driver/").concat(t,"/getMyOrders");return Object(r.b)({url:e,method:"get",headers:{"Content-Type":"application/json"}})}function o(t){var e="".concat(r.a,"/driver/submitOrderDelivery");return Object(c.post)(e,t,{headers:{"content-type":"multipart/form-data"}})}},255:function(t,e,n){"use strict";n.r(e);var r=n(92),c=n(93),a=n(96),i=n(95),o=n(10),u=n(4),s=n(0),l=n(38),d=n(2),j=n(40),b=n(229),h=n(230),f=n(232),O=n(233),v=n(235),p=n(234),m=n(153),x=n.n(m),y=n(236),g=n(132);var k=Object(b.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function C(t){switch(t.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";default:return"Choose Order"}}var w=Object(d.f)(Object(l.b)((function(t){var e=t.setDriver;return Object(o.a)({},e)}),(function(t){return{onUpdateDriver:function(e){return t(Object(g.a)(e))}}}))((function(t){var e=k(),n=t.location;return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(h.a,{position:"static",color:"default",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(O.a,{variant:"h4",className:e.title,children:C(n)}),Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{onClick:function(){window.location.reload()},children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(v.a,{className:"nav-link",color:"secondary",onClick:function(){(0,t.onUpdateDriver)(null)},children:"Logout"})]})]})}),Object(u.jsx)(y.a,{})]})}))),D=n(41),P=n(237),S=n(238),L=n(239),N=n(260),U=n(133);var W=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={phone:"7056206263"},t.handleSubmit=function(){var e=t.props.onUpdateDriver,n=t.state.phone;Object(U.b)({phone:n}).then((function(t){e(t.data)})).catch((function(t){return alert("Please check phone number")}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.phone;return Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(u.jsxs)(P.a,{style:{minWidth:300},children:[Object(u.jsx)(S.a,{title:"Login"}),Object(u.jsx)(y.a,{}),Object(u.jsxs)(L.a,{children:[Object(u.jsx)("div",{style:{marginBottom:10},children:Object(u.jsx)(N.a,{autoFocus:!0,variant:"outlined",fullWidth:!0,label:"Phone Number",type:"number",value:e,onChange:function(e){return t.setState({phone:e.target.value})}})}),Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:this.handleSubmit,children:"Login"})})]}),Object(u.jsx)(y.a,{}),Object(u.jsx)(L.a,{children:Object(u.jsx)("div",{children:Object(u.jsx)(D.b,{to:"/admin",children:"Login as Admin"})})})]})})}}]),n}(s.Component),z=Object(l.b)((function(t){var e=t.setDriver;return Object(o.a)({},e)}),(function(t){return{onUpdateDriver:function(e){return t(Object(g.a)(e))}}}))(W),A=Object(s.lazy)((function(){return Promise.all([n.e(8),n.e(14)]).then(n.bind(null,258))})),B=Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(6),n.e(15)]).then(n.bind(null,259))}));var G=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.driver;return Object(u.jsx)("div",{children:t?Object(u.jsxs)("div",{children:[Object(u.jsx)(w,{}),Object(u.jsx)(s.Suspense,{fallback:Object(u.jsx)(j.a,{}),children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/:orderId/deliver",component:B}),Object(u.jsx)(d.a,{path:"/",component:A})]})})]}):Object(u.jsx)(z,{})})}}]),n}(s.Component);e.default=Object(l.b)((function(t){var e=t.setDriver;return Object(o.a)({},e)}))(G)}}]);
//# sourceMappingURL=10.2c59355c.chunk.js.map