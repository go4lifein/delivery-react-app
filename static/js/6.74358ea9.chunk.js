(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[6],{110:function(e,t,n){"use strict";function r(e,t,n,r,o){return null}n.d(t,"a",(function(){return r}))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){var t=r.useState(e),n=t[0],o=t[1],a=e||n;return r.useEffect((function(){null==n&&o("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}},112:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return o.a})),n.d(t,"createSvgIcon",(function(){return a.a})),n.d(t,"debounce",(function(){return c.a})),n.d(t,"deprecatedPropType",(function(){return i})),n.d(t,"isMuiElement",(function(){return u.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return s.a})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return b.a})),n.d(t,"useControlled",(function(){return p.a})),n.d(t,"useEventCallback",(function(){return j.a})),n.d(t,"useForkRef",(function(){return h.a})),n.d(t,"unstable_useId",(function(){return v.a})),n.d(t,"useIsFocusVisible",(function(){return O.a}));var r=n(36),o=n(96),a=n(100),c=n(101);function i(e,t){return function(){return null}}var u=n(103),l=n(88),s=n(109);function d(e){return function(){return null}}var f=n(95),b=n(110),p=n(93),j=n(94),h=n(86),v=n(111),O=n(107)},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(125),o=n.n(r),a="http://localhost:5000/api";function c(){var e=document.cookie.split(";"),t={};return e.forEach((function(e){var n=e.split("=");t[n[0]]=n[1]})),t}c()["x-auth-token"];function i(e){return o.a.request(e)}!function(){var e,t=c()["x-auth-token"];t&&(e=t,o.a.defaults.headers.common["x-auth-token"]=e)}()},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(14),o=function(e){return{type:r.c,payload:e}},a=function(e){return{type:r.d,payload:e}}},131:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},132:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(124),o=n(125);function a(e){var t="".concat(r.a,"/driver/login");return Object(r.b)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})}function c(e){var t="".concat(r.a,"/driver/").concat(e,"/getMyOrders");return Object(r.b)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function i(e){var t="".concat(r.a,"/driver/submitOrderDelivery");return Object(o.post)(t,e,{headers:{"content-type":"multipart/form-data"}})}},180:function(e,t,n){"use strict";var r=n(1),o=n(3),a=n(0),c=(n(9),n(30)),i=n(20),u=n(22),l=n(239),s=n(36),d=a.forwardRef((function(e,t){var n=e.edge,i=void 0!==n&&n,u=e.children,d=e.classes,f=e.className,b=e.color,p=void 0===b?"default":b,j=e.disabled,h=void 0!==j&&j,v=e.disableFocusRipple,O=void 0!==v&&v,m=e.size,y=void 0===m?"medium":m,g=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(l.a,Object(r.a)({className:Object(c.a)(d.root,f,"default"!==p&&d["color".concat(Object(s.a)(p))],h&&d.disabled,"small"===y&&d["size".concat(Object(s.a)(y))],{start:d.edgeStart,end:d.edgeEnd}[i]),centerRipple:!0,focusRipple:!O,disabled:h,ref:t},g),a.createElement("span",{className:d.label},u))}));t.a=Object(i.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(u.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},181:function(e,t,n){"use strict";var r=n(97),o=n(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),c=(0,r(n(99)).default)(a.createElement("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.default=c},243:function(e,t,n){"use strict";n.r(t);var r=n(89),o=n(90),a=n(92),c=n(91),i=n(10),u=n(4),l=n(0),s=n(37),d=n(2),f=n(39),b=n(219),p=n(220),j=n(222),h=n(223),v=n(224),O=n(180),m=n(181),y=n.n(m),g=n(225),x=n(130);var k=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function C(e){switch(e.pathname){case"/admin/product":return"Product Sheet";case"/admin/manageOrders":return"Manage Orders";default:return"Choose Order"}}var S=Object(d.f)(Object(s.b)((function(e){var t=e.setDriver;return Object(i.a)({},t)}),(function(e){return{onUpdateDriver:function(t){return e(Object(x.a)(t))}}}))((function(e){var t=k(),n=e.location;return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsx)(p.a,{position:"static",color:"default",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(h.a,{variant:"h4",className:t.title,children:C(n)}),Object(u.jsxs)("div",{children:[Object(u.jsx)(O.a,{onClick:function(){window.location.reload()},children:Object(u.jsx)(y.a,{})}),Object(u.jsx)(v.a,{className:"nav-link",color:"secondary",onClick:function(){(0,e.onUpdateDriver)(null)},children:"Logout"})]})]})}),Object(u.jsx)(g.a,{})]})}))),w=n(40),P=n(226),R=n(227),M=n(228),z=n(248),D=n(132);var E=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={phone:"7056206263"},e.handleSubmit=function(){var t=e.props.onUpdateDriver,n=e.state.phone;Object(D.b)({phone:n}).then((function(e){t(e.data)})).catch((function(e){return alert("Please check phone number")}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.phone;return Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"grey",height:"100vh"},children:Object(u.jsxs)(P.a,{style:{minWidth:300},children:[Object(u.jsx)(R.a,{title:"Login"}),Object(u.jsx)(g.a,{}),Object(u.jsxs)(M.a,{children:[Object(u.jsx)("div",{style:{marginBottom:10},children:Object(u.jsx)(z.a,{autoFocus:!0,variant:"outlined",fullWidth:!0,label:"Phone Number",type:"number",value:t,onChange:function(t){return e.setState({phone:t.target.value})}})}),Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:this.handleSubmit,children:"Login"})})]}),Object(u.jsx)(g.a,{}),Object(u.jsx)(M.a,{children:Object(u.jsx)("div",{children:Object(u.jsx)(w.b,{to:"/admin",children:"Login as Admin"})})})]})})}}]),n}(l.Component),I=Object(s.b)((function(e){var t=e.setDriver;return Object(i.a)({},t)}),(function(e){return{onUpdateDriver:function(t){return e(Object(x.a)(t))}}}))(E),_=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(12)]).then(n.bind(null,246))})),N=Object(l.lazy)((function(){return Promise.all([n.e(2),n.e(8),n.e(13)]).then(n.bind(null,247))}));var F=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.driver;return Object(u.jsx)("div",{children:e?Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{}),Object(u.jsx)(l.Suspense,{fallback:Object(u.jsx)(f.a,{}),children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/:orderId/deliver",component:N}),Object(u.jsx)(d.a,{path:"/",component:_})]})})]}):Object(u.jsx)(I,{})})}}]),n}(l.Component);t.default=Object(s.b)((function(e){var t=e.setDriver;return Object(i.a)({},t)}))(F)},97:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},98:function(e,t,n){var r=n(131);function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(n,c,i):n[c]=e[c]}return n.default=e,t&&t.set(e,n),n}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(112)}}]);
//# sourceMappingURL=6.74358ea9.chunk.js.map