(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[17],{198:function(e,t,a){"use strict";var n=a(5),r=a(1),i=a(0),c=(a(10),a(29)),s=a(20),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=i.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,o=e.alignItems,l=void 0===o?"stretch":o,d=e.classes,u=e.className,b=e.component,f=void 0===b?"div":b,j=e.container,v=void 0!==j&&j,x=e.direction,h=void 0===x?"row":x,m=e.item,g=void 0!==m&&m,p=e.justify,O=void 0===p?"flex-start":p,y=e.lg,w=void 0!==y&&y,S=e.md,_=void 0!==S&&S,C=e.sm,N=void 0!==C&&C,k=e.spacing,I=void 0===k?0:k,z=e.wrap,R=void 0===z?"wrap":z,M=e.xl,E=void 0!==M&&M,L=e.xs,W=void 0!==L&&L,D=e.zeroMinWidth,G=void 0!==D&&D,A=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(c.a)(d.root,u,v&&[d.container,0!==I&&d["spacing-xs-".concat(String(I))]],g&&d.item,G&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==O&&d["justify-xs-".concat(String(O))],!1!==W&&d["grid-xs-".concat(String(W))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==_&&d["grid-md-".concat(String(_))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==E&&d["grid-xl-".concat(String(E))]);return i.createElement(f,Object(r.a)({className:P,ref:t},A))})),b=Object(s.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return o.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=b},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(45);function r(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){o=!0,c=e},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw c}}}}},200:function(e,t,a){"use strict";function n(e,t){return e<t?t:e}a.d(t,"a",(function(){return n}))},201:function(e,t,a){"use strict";var n=a(4),r=a(2),i=(a(0),a(530)),c=a(250),s=a.n(c),o=a(249),l=a.n(o);t.a=function(e){var t=e.left,a=e.onLeft,c=e.right,o=e.onRight,d=e.center,u=e.leftIcon,b=e.rightIcon,f=e.disabledLeft,j=void 0!==f&&f,v=e.disabledRight,x=void 0!==v&&v,h=e.style,m=void 0===h?{}:h,g=e.className,p=void 0===g?"":g,O=e.size,y=void 0===O?"large":O;return Object(r.jsxs)("div",{className:"flex p-10 middle ".concat(p),style:Object(n.a)({justifyContent:"space-around"},m),children:[Object(r.jsx)("div",{children:t||Object(r.jsx)(i.a,{size:y,onClick:a,disabled:j,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:u||Object(r.jsx)(l.a,{})})}),Object(r.jsx)("div",{className:"flex center middle",style:{flexGrow:.5,paddingRight:10,paddingLeft:10},children:d}),Object(r.jsx)("div",{children:c||Object(r.jsx)(i.a,{size:y,onClick:o,disabled:x,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:b||Object(r.jsx)(s.a,{})})})]})}},246:function(e,t,a){"use strict";var n=a(5),r=a(16),i=a(1),c=a(0),s=(a(10),a(29)),o=a(20),l=a(370),d=c.forwardRef((function(e,t){var a,r=e.classes,o=e.className,d=e.component,u=void 0===d?"li":d,b=e.disableGutters,f=void 0!==b&&b,j=e.ListItemClasses,v=e.role,x=void 0===v?"menuitem":v,h=e.selected,m=e.tabIndex,g=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==m?m:-1),c.createElement(l.a,Object(i.a)({button:!0,role:x,tabIndex:a,component:u,selected:h,disableGutters:f,classes:Object(i.a)({dense:r.dense},j),className:Object(s.a)(r.root,o,h&&r.selected,!f&&r.gutters),ref:t},g))}));t.a=Object(o.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},249:function(e,t,a){"use strict";var n=a(97),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(100)).default)(i.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),"ArrowLeft");t.default=c},250:function(e,t,a){"use strict";var n=a(97),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(100)).default)(i.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=c},251:function(e,t,a){"use strict";var n=a(97),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(100)).default)(i.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=c},252:function(e,t,a){"use strict";var n=a(97),r=a(98);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(100)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},568:function(e,t,a){"use strict";a.r(t);var n=a(199),r=a(105),i=a(106),c=a(107),s=a(108),o=a(4),l=a(2),d=a(0),u=a(39),b=a(529),f=a(40),j=a(528),v=a(1),x=a(5),h=(a(10),a(29)),m=a(20),g=a(127),p=Object(g.a)(d.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var O=d.forwardRef((function(e,t){var a=e.alt,n=e.children,r=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,o=e.imgProps,l=e.sizes,u=e.src,b=e.srcSet,f=e.variant,j=void 0===f?"circle":f,m=Object(x.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),g=null,O=function(e){var t=e.src,a=e.srcSet,n=d.useState(!1),r=n[0],i=n[1];return d.useEffect((function(){if(t||a){i(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&i("loaded")},n.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,a]),r}({src:u,srcSet:b}),y=u||b,w=y&&"error"!==O;return g=w?d.createElement("img",Object(v.a)({alt:a,src:u,srcSet:b,sizes:l,className:r.img},o)):null!=n?n:y&&a?a[0]:d.createElement(p,{className:r.fallback}),d.createElement(s,Object(v.a)({className:Object(h.a)(r.root,r.system,r[j],i,!w&&r.colorDefault),ref:t},m),g)})),y=Object(m.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(O),w=a(200),S=a(201),_=a(43),C=a(252),N=a.n(C),k=a(251),I=a.n(k),z=a(543),R=a(584),M=a(561),E=a(246),L=a(198),W=a(560),D=a(581),G=a(544);var A=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSave=function(e){var t=n.state,a=t.small_boxes,r=void 0===a?0:a,i=t.large_boxes,c=void 0===i?0:i,s=t.crates,o=void 0===s?0:s,l=t.delivery_person_id,d=t.remark,u=n.props;(0,u.onSubmit)({small_boxes:r,large_boxes:c,crates:o,remark:d,delivery_person_id:l,id:u.order.order_id})},n.onChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t=this.props,a=t.customers,r=t.crate_id;if(a){var i,c=Object(n.a)(a);try{for(c.s();!(i=c.n()).done;){var s=i.value[1];if(s.crate_id===Number(r)){e=s;break}}}catch(j){c.e(j)}finally{c.f()}}var o=e,l=o.small_boxes,d=o.large_boxes,u=o.crates,b=o.delivery_person_id,f=o.remark;console.log("Render form",l,d,u,f,b,e),l||(l=0),d||(d=0),u||(u=0),null===f&&(f=""),b||(b=null),this.setState({small_boxes:l,large_boxes:d,crates:u,remark:f,delivery_person_id:b})}},{key:"render",value:function(){var e=this,t=this.props,a=t.order,n=t.deliveryBoys,r=Array.from(n.values()),i=this.props.loading;if(!a)return"No order data";var c=this.state,s=c.small_boxes,o=void 0===s?0:s,d=c.large_boxes,u=void 0===d?0:d,f=c.crates,v=void 0===f?0:f,x=c.remark,h=void 0===x?null:x,m=c.delivery_person_id,g=!0;return(o||u||v||h)&&m&&(g=!1),console.log("Render form",o,u,v,h,m),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex space-bw middle p-10",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{variant:"h6",children:"Rider"})}),Object(l.jsx)("div",{children:Object(l.jsxs)(z.a,{variant:"filled",size:"small",children:[Object(l.jsx)(R.a,{id:"driver-filter",children:"Select Rider"}),Object(l.jsxs)(M.a,{labelId:"driver-filter",style:{width:200},value:String(m),onChange:function(t){e.setState({delivery_person_id:t.target.value})},children:[Object(l.jsx)(E.a,{value:null,children:"None"}),r.map((function(e){return Object(l.jsx)(E.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})})]}),Object(l.jsx)(b.a,{}),Object(l.jsx)("div",{className:"p-10",children:Object(l.jsxs)(L.a,{container:!0,children:[Object(l.jsx)(L.a,{item:!0,xs:12,children:Object(l.jsxs)(W.a,{className:"flex middle space-bw",children:[Object(l.jsx)(j.a,{variant:"h6",children:"No of Crates"}),Object(l.jsx)(S.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(j.a,{variant:"h6",children:v}),leftIcon:Object(l.jsx)(I.a,{}),rightIcon:Object(l.jsx)(N.a,{}),onRight:function(){e.setState({crates:v+1})},onLeft:function(){e.setState({crates:Object(w.a)(0,v-1)})}})]})}),Object(l.jsx)(L.a,{item:!0,xs:12,children:Object(l.jsxs)(W.a,{className:"flex middle space-bw",children:[Object(l.jsx)(j.a,{variant:"h6",children:"Small Boxes"}),Object(l.jsx)(S.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(j.a,{variant:"h6",children:o}),leftIcon:Object(l.jsx)(I.a,{}),rightIcon:Object(l.jsx)(N.a,{}),onRight:function(){e.setState({small_boxes:o+1})},onLeft:function(){e.setState({small_boxes:Object(w.a)(0,o-1)})}})]})}),Object(l.jsx)(L.a,{item:!0,xs:12,children:Object(l.jsxs)(W.a,{className:"flex middle space-bw",children:[Object(l.jsx)(j.a,{variant:"h6",children:"Large Boxes"}),Object(l.jsx)(S.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(j.a,{variant:"h6",children:u}),leftIcon:Object(l.jsx)(I.a,{}),rightIcon:Object(l.jsx)(N.a,{}),onRight:function(){e.setState({large_boxes:u+1})},onLeft:function(){e.setState({large_boxes:Object(w.a)(0,u-1)})}})]})}),Object(l.jsx)(L.a,{item:!0,xs:12,children:Object(l.jsx)(W.a,{className:"flex middle space-bw mv-10",children:Object(l.jsx)(D.a,{id:"order_remark",label:"Remark",multiline:!0,fullWidth:!0,rows:2,defaultValue:h,variant:"outlined",name:"remark",onChange:this.onChange})})}),Object(l.jsx)(L.a,{item:!0,xs:12,children:Object(l.jsx)(W.a,{className:"flex middle space-bw",children:Object(l.jsx)(G.a,{variant:"contained",color:"primary",disabled:i||g,onClick:this.onSave,children:"Submit"})})})]})})]})}}]),a}(d.Component),P=Object(u.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}))(A),B=a(171),F=a(140);function H(e){var t=e.customer;if(!t)return"No Customer Found";var a=t.name,n=t.phone,r=t.address,i=t.order_id;return Object(l.jsxs)("div",{children:[Object(l.jsxs)(j.a,{variant:"h5",children:[i," - ",a]}),Object(l.jsx)(j.a,{children:n}),Object(l.jsxs)(j.a,{children:[r.house_number,", ",r.subarea,", ",r.area,", ",r.hub]})]})}var U=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).gotoPreviousCrate=function(){var e=n.props.history,t=n.state.crate_id;1!==t&&(t=Object(w.a)(1,t-1),n.setState({crate_id:t},(function(){e.push("/admin/pack?crate_id=".concat(t))})))},n.gotoNextCrate=function(){var e=n.props.history,t=n.state.crate_id;t=Number(t)+1,n.setState({crate_id:t},(function(){e.push("/admin/pack?crate_id=".concat(t))}))},n.onSubmit=function(e){var t=n.props.onUpdateOrdersData;n.setState({loading:!0}),Object(B.e)(e).then((function(e){Object(B.b)().then((function(e){var a=e.data;t(a),n.setState({loading:!1})})),n.gotoNextCrate()})).catch((function(e){n.setState({loading:!1}),alert(e.message)}))},n.state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location,t=new URLSearchParams(e.search),a=Number(t.get("crate_id")||1);this.setState({crate_id:a})}},{key:"render",value:function(){var e,t=this.state,a=t.loading,r=t.crate_id,i=this.props,c=i.customers,s=i.loadingOrderData;if(console.log("Loading",s),s)return Object(l.jsx)("div",{style:{padding:10},children:Object(l.jsx)(f.a,{})});if(c){var o,u=Object(n.a)(c);try{for(u.s();!(o=u.n()).done;){var v=o.value[1];if(v.crate_id===Number(r)){e=v;break}}}catch(x){u.e(x)}finally{u.f()}}return console.log(e),c?Object(l.jsxs)(d.Fragment,{children:[Object(l.jsx)(S.a,{onLeft:this.gotoPreviousCrate,onRight:this.gotoNextCrate,disabledLeft:1===r,center:Object(l.jsx)(y,{style:{background:"#4646d2"},children:r})}),Object(l.jsx)(b.a,{}),a?Object(l.jsx)("div",{children:Object(l.jsx)(f.a,{})}):Object(l.jsx)("div",{children:e?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{padding:10},children:Object(l.jsx)(H,{customer:e})}),Object(l.jsx)(b.a,{}),Object(l.jsx)("div",{children:Object(l.jsx)(P,{order:e,crate_id:r,loading:a,onSubmit:this.onSubmit},String(e.order_id))})]}):Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{variant:"h5",children:"No such crate number found"})})})]}):Object(l.jsx)("div",{style:{padding:10},children:Object(l.jsx)(j.a,{variant:"h5",children:"Failed to fetch the data. Refresh the page"})})}}]),a}(d.Component);t.default=Object(u.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{onUpdateOrderCrateData:function(t){return e(Object(F.g)(t))},onUpdateOrdersData:function(t){return e(Object(F.h)(t))}}}))(U)}}]);
//# sourceMappingURL=PackOrders.9fb5bebd.chunk.js.map