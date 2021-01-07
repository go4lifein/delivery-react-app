(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[8],{112:function(t,e,r){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",r=document.createElement("a"),n=[];t.forEach((function(t){t=t.join(","),n.push(t)}));var a=n.join("\n");null!=a&&(a.match(/^data:text\/csv/i)||(a="data:text/csv;charset=utf-8,".concat(a)),r.setAttribute("href",encodeURI(a)),r.setAttribute("download",e),r.click())}},113:function(t,e,r){"use strict";var n=r(88),a=r(89);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(r(0)),o=(0,n(r(90)).default)(c.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");e.default=o},115:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(44);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(s){a=!0,c=s}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},136:function(t,e,r){"use strict";var n=r(88),a=r(89);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(r(0)),o=(0,n(r(90)).default)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");e.default=o},240:function(t,e,r){"use strict";r.r(e);var n=r(115),a=r(91),c=r(92),o=r(95),i=r(94),s=r(10),u=r(4),l=r(0),d=r(37),h=r(120),f=r.n(h),b=r(113),j=r.n(b),v=r(230),m=r(136),p=r.n(m),O=r(112),y=r(67),x=r(109),w=r(117),C=r(39);var E=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(t){var c;return Object(a.a)(this,r),(c=e.call(this,t)).updateState=function(t){c.setState({selectedRows:t.selectedRows})},c.createCrateNumbers=function(){c.setState({creatingCrate:!0});var t=c.props.customers,e=[];t.forEach((function(t){var r=t.order_id,n=t.crateId;e.push({order_id:r,crate_id:n})})),Object(w.e)({orderCrateIds:e}).then((function(t){window.location.reload()}))},c.columns=[{name:"Crate",selector:"crate_id",sortable:!0,width:"90px"},{name:"Hub",sortable:!0,width:"100px",cell:function(t,e){return t.address.hub}},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Product",selector:"products",sortable:!1,cell:function(t,e){var r=t.products,a=t.phone,c=Object.entries(r),o=[];return c.forEach((function(t){var e=Object(n.a)(t,2),r=e[0],a=e[1];"Dairy"!==r&&a.forEach((function(t){return o.push(t)}))})),Object(u.jsxs)("table",{style:{width:"100%",textAlign:"left"},id:"customer-sheet-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Total"}),Object(u.jsx)("th",{children:"Qty"})]})}),Object(u.jsx)("tbody",{children:o.map((function(t){var e=t.product_id,r=t.total,n=t.unit,c=t.quantity,o=t.product;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:o}),Object(u.jsxs)("td",{className:"fixed-width-column",children:[r," ",n]}),Object(u.jsx)("td",{className:"fixed-width-column",children:c})]},a.toString()+e.toString())}))})]})}}],c.exportData=function(){var t=c.props.customers,e=Array.from(t.values());e=e.filter((function(t){return!1===t.onlyDairy}));var r=[["Crate","Hub","Name","Phone","Product","Total","Qty"]];e.forEach((function(t){var e=t.products,a=t.phone,c=Object.entries(e),o=[];c.forEach((function(t){var e=Object(n.a)(t,2),r=e[0],a=e[1];"Dairy"!==r&&a.forEach((function(t){return o.push(t)}))})),o.forEach((function(e,n){if(0===n){var c=e.total,o=e.unit,i=e.quantity,s=[t.crateId,"".concat(t.address.hub),"".concat(t.name),"".concat(a),"".concat(e.product),"".concat(c," ").concat(o),"".concat(i)];r.push(s)}else{var u=e.total,l=e.unit,d=e.quantity,h=["","","","","".concat(e.product),"".concat(u," ").concat(l),"".concat(d)];r.push(h)}}))})),Object(O.a)(r,"Customer Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},c.state={loading:!0},c}return Object(c.a)(r,[{key:"render",value:function(){var t=!0,e=this.props.customers,r=this.state.creatingCrate,n=[];return e&&(t=!1,console.log(e),n=(n=Array.from(e.values())).filter((function(t){return!1===t.onlyDairy}))),Object(u.jsx)("div",{children:t?Object(u.jsx)(C.a,{}):Object(u.jsx)("div",{id:"customer-sheet-table",children:Object(u.jsx)(f.a,{data:n,columns:this.columns,sortIcon:Object(u.jsx)(p.a,{}),actions:Object(u.jsxs)("div",{children:[Object(u.jsx)(v.a,{variant:"outlined",color:"primary",startIcon:r?Object(u.jsx)(y.a,{size:12}):null,disabled:r,style:{marginRight:4},onClick:this.createCrateNumbers,children:"Create Crate Numbers"}),Object(u.jsx)(v.a,{startIcon:Object(u.jsx)(j.a,{}),color:"secondary",variant:"outlined",onClick:this.exportData,children:"Download Excel"})]})})})})}}]),r}(l.Component);e.default=Object(d.b)((function(t){var e=t.setAdmin;return Object(s.a)({},e)}),(function(t){return{onUpdateOrdersData:function(e){return t(Object(x.c)(e))}}}))(E)}}]);
//# sourceMappingURL=8.f94f3048.chunk.js.map