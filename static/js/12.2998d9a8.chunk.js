(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[12],{133:function(e,t,a){"use strict";var n=a(10),r=a(3),i=(a(0),a(278)),c=a(135),s=a.n(c),o=a(134),l=a.n(o);t.a=function(e){var t=e.left,a=e.onLeft,c=e.right,o=e.onRight,d=e.center,u=e.leftIcon,f=e.rightIcon,j=e.disabledLeft,x=void 0!==j&&j,b=e.disabledRight,v=void 0!==b&&b,h=e.style,g=void 0===h?{}:h,m=e.className,p=void 0===m?"":m;return Object(r.jsxs)("div",{className:"flex p-10 middle ".concat(p),style:Object(n.a)({justifyContent:"space-around"},g),children:[Object(r.jsx)("div",{children:t||Object(r.jsx)(i.a,{size:"small",onClick:a,disabled:x,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:u||Object(r.jsx)(l.a,{})})}),Object(r.jsx)("div",{className:"flex center middle",style:{flexGrow:.5,paddingRight:10,paddingLeft:10},children:d}),Object(r.jsx)("div",{children:c||Object(r.jsx)(i.a,{size:"small",onClick:o,disabled:v,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:f||Object(r.jsx)(s.a,{})})})]})}},134:function(e,t,a){"use strict";var n=a(90),r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(92)).default)(i.createElement("path",{d:"M14 7l-5 5 5 5V7z"}),"ArrowLeft");t.default=c},135:function(e,t,a){"use strict";var n=a(90),r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(92)).default)(i.createElement("path",{d:"M10 17l5-5-5-5v10z"}),"ArrowRight");t.default=c},223:function(e,t,a){"use strict";var n=a(4),r=a(1),i=a(0),c=(a(9),a(32)),s=a(21),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=i.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,o=e.alignItems,l=void 0===o?"stretch":o,d=e.classes,u=e.className,f=e.component,j=void 0===f?"div":f,x=e.container,b=void 0!==x&&x,v=e.direction,h=void 0===v?"row":v,g=e.item,m=void 0!==g&&g,p=e.justify,O=void 0===p?"flex-start":p,y=e.lg,w=void 0!==y&&y,S=e.md,_=void 0!==S&&S,C=e.sm,N=void 0!==C&&C,k=e.spacing,R=void 0===k?0:k,z=e.wrap,I=void 0===z?"wrap":z,M=e.xl,E=void 0!==M&&M,W=e.xs,L=void 0!==W&&W,P=e.zeroMinWidth,G=void 0!==P&&P,F=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(c.a)(d.root,u,b&&[d.container,0!==R&&d["spacing-xs-".concat(String(R))]],m&&d.item,G&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==O&&d["justify-xs-".concat(String(O))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==_&&d["grid-md-".concat(String(_))],!1!==w&&d["grid-lg-".concat(String(w))],!1!==E&&d["grid-xl-".concat(String(E))]);return i.createElement(j,Object(r.a)({className:A,ref:t},F))})),f=Object(s.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return o.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=f},231:function(e,t,a){"use strict";var n=a(90),r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(92)).default)(i.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=c},232:function(e,t,a){"use strict";var n=a(90),r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),c=(0,n(a(92)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},240:function(e,t,a){"use strict";var n=a(1),r=a(4),i=a(0),c=(a(9),a(32)),s=a(21),o=a(102),l=Object(o.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=i.forwardRef((function(e,t){var a=e.alt,s=e.children,o=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,j=e.imgProps,x=e.sizes,b=e.src,v=e.srcSet,h=e.variant,g=void 0===h?"circle":h,m=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),p=null,O=function(e){var t=e.src,a=e.srcSet,n=i.useState(!1),r=n[0],c=n[1];return i.useEffect((function(){if(t||a){c(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),r}({src:b,srcSet:v}),y=b||v,w=y&&"error"!==O;return p=w?i.createElement("img",Object(n.a)({alt:a,src:b,srcSet:v,sizes:x,className:o.img},j)):null!=s?s:y&&a?a[0]:i.createElement(l,{className:o.fallback}),i.createElement(f,Object(n.a)({className:Object(c.a)(o.root,o.system,o[g],d,!w&&o.colorDefault),ref:t},m),p)}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},307:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(94),i=a(95),c=a(97),s=a(96),o=a(10),l=a(3),d=a(0),u=a(39),f=a(277),j=a(41),x=a(276),b=a(240);function v(e,t){return e<t?t:e}var h=a(133),g=a(15),m=a(223),p=a(295),O=a(311),y=a(279),w=a(232),S=a.n(w),_=a(231),C=a.n(_),N=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.order;if(e){var t=e.small_boxes,a=void 0===t?0:t,n=e.large_boxes,r=void 0===n?0:n,i=e.crates,c=void 0===i?0:i,s=e.remark,o=void 0===s?null:s,l=e.loading,d=void 0!==l&&l;this.setState({small_boxes:a,large_boxes:r,crates:c,remark:o,loading:d})}}},{key:"render",value:function(){var e=this;if(!this.props.order)return"No order data";var t=this.props.loading,a=this.state,n=a.small_boxes,r=void 0===n?0:n,i=a.large_boxes,c=void 0===i?0:i,s=a.crates,o=void 0===s?0:s,d=a.remark,u=void 0===d?null:d;return console.log("Rendering pack order form",r,c,o),Object(l.jsx)("div",{children:Object(l.jsxs)(m.a,{container:!0,children:[Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsxs)(p.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"No of Crates"}),Object(l.jsx)(h.a,{style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:o}),leftIcon:Object(l.jsx)(C.a,{}),rightIcon:Object(l.jsx)(S.a,{}),onRight:function(){e.setState({crates:o+1})},onLeft:function(){e.setState({crates:v(0,o-1)})}})]})}),Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsxs)(p.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"Small Boxes"}),Object(l.jsx)(h.a,{style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:r}),leftIcon:Object(l.jsx)(C.a,{}),rightIcon:Object(l.jsx)(S.a,{}),onRight:function(){e.setState({small_boxes:r+1})},onLeft:function(){e.setState({small_boxes:v(0,r-1)})}})]})}),Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsxs)(p.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"Large Boxes"}),Object(l.jsx)(h.a,{style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:c}),leftIcon:Object(l.jsx)(C.a,{}),rightIcon:Object(l.jsx)(S.a,{}),onRight:function(){e.setState({large_boxes:c+1})},onLeft:function(){e.setState({large_boxes:v(0,c-1)})}})]})}),Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsx)(p.a,{className:"flex middle space-bw mv-10",children:Object(l.jsx)(O.a,{id:"order_remark",label:"Remark",multiline:!0,fullWidth:!0,rows:2,defaultValue:u,variant:"outlined"})})}),Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsx)(p.a,{className:"flex middle space-bw",children:Object(l.jsx)(y.a,{variant:"contained",color:"primary",disabled:t||!1,children:"Submit"})})})]})})}}]),a}(d.Component);function k(e){var t=e.customer;if(!t)return"No Customer Found";var a=t.name,n=t.phone,r=t.address,i=t.order_id;return Object(l.jsxs)("div",{children:[Object(l.jsxs)(x.a,{variant:"h5",children:[i," - ",a]}),Object(l.jsx)(x.a,{children:n}),Object(l.jsxs)(x.a,{children:[r.house_number,", ",r.subarea,", ",r.area,", ",r.hub]})]})}var R=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).gotoPreviousCrate=function(){var e=n.state.crate_id;v(1,e-1)!==e&&n.setState({crate_id:v(1,e-1)})},n.gotoNextCrate=function(){var e=n.state.crate_id;n.setState({crate_id:e+1})},n.state={crate_id:1},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.state,a=t.loading,r=(t.error,t.crate_id),i=this.props.customers;if(console.log("Rendering"),i){var c,s=Object(n.a)(i);try{for(s.s();!(c=s.n()).done;){var o=c.value[1];o.crate_id===r&&(e=o)}}catch(u){s.e(u)}finally{s.f()}}return console.log(e),i?Object(l.jsxs)(d.Fragment,{children:[Object(l.jsx)(h.a,{onLeft:this.gotoPreviousCrate,onRight:this.gotoNextCrate,disabledLeft:1===r,center:Object(l.jsx)(b.a,{style:{background:"#4646d2"},children:r})}),Object(l.jsx)(f.a,{}),a?Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{})}):Object(l.jsx)("div",{style:{padding:10},children:e?Object(l.jsx)(k,{customer:e}):Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{variant:"h5",children:"No such crate number found"})})}),Object(l.jsx)(f.a,{}),a?Object(l.jsx)("div",{children:Object(l.jsx)(j.a,{})}):Object(l.jsx)("div",{style:{padding:10},children:e?Object(l.jsx)(N,{order:e,loading:a}):Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{variant:"h5",children:"No such crate number found"})})})]}):Object(l.jsx)("div",{style:{padding:10},children:Object(l.jsx)(x.a,{variant:"h5",children:"Failed to fetch the data. Refresh the page"})})}}]),a}(d.Component);t.default=Object(u.b)((function(e){var t=e.setAdmin;return Object(o.a)({},t)}),(function(e){return{}}))(R)}}]);
//# sourceMappingURL=12.2998d9a8.chunk.js.map