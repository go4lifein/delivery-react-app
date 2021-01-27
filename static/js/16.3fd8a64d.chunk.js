(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[16],{156:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",a=document.createElement("a"),r=[];e.forEach((function(e){e=e.join(","),r.push(e)}));var c=r.join("\n");null!=c&&(c.match(/^data:text\/csv/i)||(c="data:text/csv;charset=utf-8,".concat(c)),a.setAttribute("href",encodeURI(c)),a.setAttribute("download",t),a.click())}},190:function(e,t,a){"use strict";var r=a(121),c=a(122);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(0)),n=(0,r(a(123)).default)(o.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=n},400:function(e,t,a){"use strict";a.r(t);var r=a(47),c=a(125),o=a(126),n=a(128),s=a(127),i=a(11),d=a(3),l=a(0),u=a(42),h=a(189),b=a.n(h),j=a(161),m=a.n(j),f=a(399),p=a(190),v=a.n(p),O=a(156),x=a(98),C=a(418),y=a(191),w=a(224),g=a(141),S=a(140),D=a(44);var L=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateState=function(e){o.setState({selectedRows:e.selectedRows})},o.createCrateNumbers=function(){if(new Date(localStorage.getItem("cratesLastCreated",(new Date).toISOString()))>(new Date).setHours(0))alert("Crates IDs Already created");else{localStorage.setItem("cratesLastCreated",(new Date).toISOString()),o.setState({creatingCrate:!0});var e=o.props.customers,t=[];e.forEach((function(e){var a=e.order_id,r=e.crateId;t.push({order_id:a,crate_id:r})})),Object(S.g)({orderCrateIds:t}).then((function(e){window.location.reload()}))}},o.columns=[{name:"Crate",selector:"crate_id",sortable:!0,width:"90px"},{name:"Order Id",selector:"order_id",sortable:!0,width:"90px"},{name:"Hub",sortable:!0,width:"100px",cell:function(e,t){return e.address.hub}},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Product",selector:"products",sortable:!1,cell:function(e,t){var a=e.phone,r=e.allProducts;return Object(d.jsxs)("table",{style:{width:"100%",textAlign:"left"},id:"customer-sheet-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Total"}),Object(d.jsx)("th",{children:"Qty"})]})}),Object(d.jsx)("tbody",{children:r.map((function(e){var t=e.total,r=e.unit,c=e.quantity,o=e.product;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:o}),Object(d.jsxs)("td",{className:"fixed-width-column",children:[t," ",r]}),Object(d.jsx)("td",{className:"fixed-width-column",children:c})]},a.toString()+Math.random().toString())}))})]})}}],o.exportData=function(){var e=o.props.customers,t=Array.from(e.values()),a=o.state.removeSelectedDairy;t.sort((function(e,t){return e.crate_id-t.crate_id}));var c=[["Crate","Hub","Name","Phone","Address","Product","Category","Total","Qty"]];t.forEach((function(e){var t=e.products,o=e.phone,n=e.address,s=n.house_number,i=n.subarea,d=n.area,l=n.hub,u='"'.concat(s,", ").concat(i,", ").concat(d,'"'),h=Object.entries(t),b=[];h.forEach((function(e){var t=Object(r.a)(e,2),c=t[0];t[1].forEach((function(e){e.category=c,a&&(e.product.toLowerCase().includes("milk")||e.product.toLowerCase().includes("paneer"))||b.push(e)}))})),b.forEach((function(t,a){var r=t.total,n=t.unit,s=t.quantity,i=t.category;if(0===a){var d=[e.crate_id,"".concat(l),"".concat(e.name),"".concat(o),u,'"'.concat(t.product,'"'),"".concat(i),"".concat(r," ").concat(n),"".concat(s)];c.push(d)}else{var h=["","","","","",'"'.concat(t.product,'"'),"".concat(i),"".concat(r," ").concat(n),"".concat(s)];c.push(h)}}))})),Object(O.a)(c,"Customer Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},o.state={loading:!0,removeSelectedDairy:!0},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.alreadyCreatedCratedToday,t=new Date(localStorage.getItem("cratesLastCreated"));if(t){t=new Date(t);var a=(new Date).setHours(0);console.log(a,t.valueOf()),t>a&&(e=!0)}this.setState({alreadyCreatedCratedToday:e})}},{key:"render",value:function(){var e=this,t=!0,a=this.props.customers,c=this.state,o=c.creatingCrate,n=c.removeSelectedDairy,s=c.search,i=c.alreadyCreatedCratedToday;i=i||this.props.alreadyCreatedCratedToday;var l=[];return a&&(t=!1,(l=Array.from(a.values())).forEach((function(e){var t=e.products,a=Object.entries(t),c=[];a.forEach((function(e){var t=Object(r.a)(e,2),a=t[0];t[1].forEach((function(e){e.category=a,n&&(e.product.toLowerCase().includes("milk")||e.product.toLowerCase().includes("paneer"))||c.push(e)}))})),e.allProducts=c})),l=l.filter((function(e){var t=e.name,a=e.phone,r=e.allProducts,c=e.crate_id;return 0!==r.length&&(i?!!c:!s||(!!t.toLowerCase().includes(s.toLowerCase())||!!a.toLowerCase().includes(s.toLowerCase())))}))),Object(d.jsx)("div",{children:t?Object(d.jsx)(D.a,{}):Object(d.jsx)("div",{id:"customer-sheet-table",style:{minWidth:1e3},children:Object(d.jsx)(b.a,{data:l,columns:this.columns,sortIcon:Object(d.jsx)(v.a,{}),actions:Object(d.jsxs)("div",{className:"flex middle",children:[Object(d.jsx)(C.a,{label:"Search Customer",style:{marginRight:10},onChange:function(t){e.setState({search:t.target.value})}}),Object(d.jsx)(y.a,{control:Object(d.jsx)(w.a,{checked:n,onChange:function(t,a){return e.setState({removeSelectedDairy:a})},color:"primary"}),label:"Remove Milk and Paneer"}),Object(d.jsx)(f.a,{variant:"outlined",color:"primary",startIcon:o?Object(d.jsx)(x.a,{size:12}):null,disabled:o||i,style:{marginRight:4},onClick:this.createCrateNumbers,children:"Create Crate Numbers"}),Object(d.jsx)(f.a,{startIcon:Object(d.jsx)(m.a,{}),color:"secondary",variant:"outlined",onClick:this.exportData,children:"Download Excel"})]})})})})}}]),a}(l.Component);t.default=Object(u.b)((function(e){var t=e.setAdmin;return Object(i.a)({},t)}),(function(e){return{onUpdateOrdersData:function(t){return e(Object(g.d)(t))}}}))(L)}}]);
//# sourceMappingURL=16.3fd8a64d.chunk.js.map