(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[10],{147:function(e,t,a){"use strict";var r=a(1),c=a(28),o=a(3),n=a(0),l=(a(8),a(10)),i=a(159),d=a(152),s=a(17),u=a(944),h=n.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,h=e.checkedIcon,p=e.classes,b=e.className,m=e.defaultChecked,f=e.disabled,g=e.icon,v=e.id,j=e.inputProps,y=e.inputRef,O=e.name,k=e.onBlur,x=e.onChange,C=e.onFocus,w=e.readOnly,S=e.required,E=e.tabIndex,I=e.type,D=e.value,$=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(i.a)({controlled:s,default:Boolean(m),name:"SwitchBase",state:"checked"}),L=Object(c.a)(N,2),P=L[0],R=L[1],_=Object(d.a)(),z=f;_&&"undefined"===typeof z&&(z=_.disabled);var A="checkbox"===I||"radio"===I;return n.createElement(u.a,Object(r.a)({component:"span",className:Object(l.a)(p.root,b,P&&p.checked,z&&p.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){k&&k(e),_&&_.onBlur&&_.onBlur(e)},ref:t},$),n.createElement("input",Object(r.a)({autoFocus:a,checked:s,defaultChecked:m,className:p.input,disabled:z,id:A&&v,name:O,onChange:function(e){var t=e.target.checked;R(t),x&&x(e,t)},readOnly:w,ref:y,required:S,tabIndex:E,type:I,value:D},j)),P?h:g)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(h)},173:function(e,t,a){"use strict";var r=a(118),c=a(120);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(0)),n=(0,r(a(121)).default)(o.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=n},180:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",a=document.createElement("a"),r=[];e.forEach((function(e){e=e.join(","),r.push(e)}));var c=r.join("\n");null!=c&&(c.match(/^data:text\/csv/i)||(c="data:text/csv;charset=utf-8,".concat(c)),a.setAttribute("href",encodeURI(c)),a.setAttribute("download",t),a.click())}},181:function(e,t,a){"use strict";var r=a(118),c=a(120);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(0)),n=(0,r(a(121)).default)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.default=n},219:function(e,t,a){"use strict";var r=a(1),c=a(3),o=a(0),n=(a(8),a(10)),l=a(152),i=a(17),d=a(942),s=a(23),u=o.forwardRef((function(e,t){e.checked;var a=e.classes,i=e.className,u=e.control,h=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,m=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(c.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(l.a)(),v=h;"undefined"===typeof v&&"undefined"!==typeof u.props.disabled&&(v=u.props.disabled),"undefined"===typeof v&&g&&(v=g.disabled);var j={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(j[t]=e[t])})),o.createElement("label",Object(r.a)({className:Object(n.a)(a.root,i,"end"!==m&&a["labelPlacement".concat(Object(s.a)(m))],v&&a.disabled),ref:t},f),o.cloneElement(u,j),o.createElement(d.a,{component:"span",className:Object(n.a)(a.label,v&&a.disabled)},p))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},243:function(e,t,a){"use strict";var r=a(1),c=a(3),o=a(0),n=(a(8),a(10)),l=a(17),i=a(30),d=a(23),s=a(147),u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,i=e.color,u=void 0===i?"secondary":i,h=e.edge,p=void 0!==h&&h,b=e.size,m=void 0===b?"medium":b,f=Object(c.a)(e,["classes","className","color","edge","size"]),g=o.createElement("span",{className:a.thumb});return o.createElement("span",{className:Object(n.a)(a.root,l,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===m&&a["size".concat(Object(d.a)(m))])},o.createElement(s.a,Object(r.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(n.a)(a.switchBase,a["color".concat(Object(d.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),o.createElement("span",{className:a.track}))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},958:function(e,t,a){"use strict";a.r(t);var r=a(40),c=a(124),o=a(125),n=a(127),l=a(128),i=a(5),d=a(2),s=a(0),u=a(48),h=a(197),p=a.n(h),b=a(181),m=a.n(b),f=a(955),g=a(173),v=a.n(g),j=a(180),y=a(84),O=a(993),k=a(219),x=a(243),C=a(179),w=a(214),S=a(49);var E=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateState=function(e){o.setState({selectedRows:e.selectedRows})},o.createCrateNumbers=function(){if(new Date(localStorage.getItem("cratesLastCreated",(new Date).toISOString()))>(new Date).setHours(0))alert("Crates IDs Already created");else{localStorage.setItem("cratesLastCreated",(new Date).toISOString()),o.setState({creatingCrate:!0});var e=o.props.customers,t=[];e.forEach((function(e){var a=e.order_id,r=e.crateId;t.push({order_id:a,crate_id:r})})),Object(w.f)({orderCrateIds:t}).then((function(e){window.location.reload()}))}},o.columns=[{name:"Crate",selector:"crate_id",sortable:!0,width:"90px"},{name:"Order Id",selector:"order_id",sortable:!0,width:"90px"},{name:"Hub",sortable:!0,width:"100px",cell:function(e,t){return e.address.hub}},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Product",selector:"products",sortable:!1,cell:function(e,t){var a=e.phone,r=e.allProducts;return Object(d.jsxs)("table",{style:{width:"100%",textAlign:"left"},id:"customer-sheet-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Total"}),Object(d.jsx)("th",{children:"Qty"})]})}),Object(d.jsx)("tbody",{children:r.map((function(e){var t=e.total,r=e.unit,c=e.quantity,o=e.product;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:o}),Object(d.jsxs)("td",{className:"fixed-width-column",children:[t," ",r]}),Object(d.jsx)("td",{className:"fixed-width-column",children:c})]},a.toString()+Math.random().toString())}))})]})}}],o.exportData=function(){var e=o.props.customers,t=Array.from(e.values()),a=o.state.removeSelectedDairy;t.sort((function(e,t){return e.crate_id-t.crate_id}));var c=[["Crate","Hub","Name","Phone","Address","Product","Category","Total","Qty"]];t.forEach((function(e){var t=e.products,o=e.phone,n=e.address,l=n.house_number,i=n.subarea,d=n.area,s=n.hub,u='"'.concat(l,", ").concat(i,", ").concat(d,'"'),h=Object.entries(t),p=[];h.forEach((function(e){var t=Object(r.a)(e,2),c=t[0];t[1].forEach((function(e){e.category=c,a&&(e.product.toLowerCase().includes("milk")||e.product.toLowerCase().includes("paneer"))||p.push(e)}))})),p.forEach((function(t,a){var r=t.total,n=t.unit,l=t.quantity,i=t.category;if(0===a){var d=[e.crate_id,"".concat(s),"".concat(e.name),"".concat(o),u,'"'.concat(t.product,'"'),"".concat(i),"".concat(r," ").concat(n),"".concat(l)];c.push(d)}else{var h=["","","","","",'"'.concat(t.product,'"'),"".concat(i),"".concat(r," ").concat(n),"".concat(l)];c.push(h)}}))})),Object(j.a)(c,"Customer Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},o.state={loading:!0,removeSelectedDairy:!0},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.alreadyCreatedCratedToday,t=new Date(localStorage.getItem("cratesLastCreated"));if(t){t=new Date(t);var a=(new Date).setHours(0);console.log(a,t.valueOf()),t>a&&(e=!0)}this.setState({alreadyCreatedCratedToday:e})}},{key:"render",value:function(){var e=this,t=!0,a=this.props.customers,c=this.state,o=c.creatingCrate,n=c.removeSelectedDairy,l=c.search,i=c.alreadyCreatedCratedToday;i=i||this.props.alreadyCreatedCratedToday;var s=[];return a&&(t=!1,(s=Array.from(a.values())).forEach((function(e){var t=e.products,a=Object.entries(t),c=[];a.forEach((function(e){var t=Object(r.a)(e,2),a=t[0];t[1].forEach((function(e){e.category=a,n&&(e.product.toLowerCase().includes("milk")||e.product.toLowerCase().includes("paneer"))||c.push(e)}))})),e.allProducts=c})),s=s.filter((function(e){var t=e.name,a=e.phone,r=e.allProducts,c=e.crate_id;return 0!==r.length&&(i?!!c:!l||(!!t.toLowerCase().includes(l.toLowerCase())||!!a.toLowerCase().includes(l.toLowerCase())))}))),Object(d.jsx)("div",{children:t?Object(d.jsx)(S.a,{}):Object(d.jsx)("div",{id:"customer-sheet-table",style:{minWidth:1e3},children:Object(d.jsx)(p.a,{data:s,columns:this.columns,sortIcon:Object(d.jsx)(v.a,{}),actions:Object(d.jsxs)("div",{className:"flex middle",children:[Object(d.jsx)(O.a,{label:"Search Customer",style:{marginRight:10},onChange:function(t){e.setState({search:t.target.value})}}),Object(d.jsx)(k.a,{control:Object(d.jsx)(x.a,{checked:n,onChange:function(t,a){return e.setState({removeSelectedDairy:a})},color:"primary"}),label:"Remove Milk and Paneer"}),Object(d.jsx)(f.a,{variant:"outlined",color:"primary",startIcon:o?Object(d.jsx)(y.a,{size:12}):null,disabled:o||i,style:{marginRight:4},onClick:this.createCrateNumbers,children:"Create Crate Numbers"}),Object(d.jsx)(f.a,{startIcon:Object(d.jsx)(m.a,{}),color:"secondary",variant:"outlined",onClick:this.exportData,children:"Download Excel"})]})})})})}}]),a}(s.Component);t.default=Object(u.b)((function(e){var t=e.setAdmin;return Object(i.a)({},t)}),(function(e){return{onUpdateOrdersData:function(t){return e(Object(C.h)(t))}}}))(E)}}]);
//# sourceMappingURL=CustomerSheet.47e90133.chunk.js.map