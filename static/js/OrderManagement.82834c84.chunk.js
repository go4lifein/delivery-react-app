(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[16],{177:function(e,t,n){"use strict";var a=n(1),r=n(35),c=n(4),o=n(0),d=(n(7),n(9)),i=n(172),s=n(180),l=n(16),u=n(572),h=o.forwardRef((function(e,t){var n=e.autoFocus,l=e.checked,h=e.checkedIcon,b=e.classes,v=e.className,f=e.defaultChecked,p=e.disabled,j=e.icon,m=e.id,O=e.inputProps,g=e.inputRef,x=e.name,y=e.onBlur,D=e.onChange,w=e.onFocus,k=e.readOnly,I=e.required,C=e.tabIndex,S=e.type,Y=e.value,M=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(i.a)({controlled:l,default:Boolean(f),name:"SwitchBase",state:"checked"}),A=Object(r.a)(B,2),P=A[0],R=A[1],E=Object(s.a)(),z=p;E&&"undefined"===typeof z&&(z=E.disabled);var N="checkbox"===S||"radio"===S;return o.createElement(u.a,Object(a.a)({component:"span",className:Object(d.a)(b.root,v,P&&b.checked,z&&b.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){y&&y(e),E&&E.onBlur&&E.onBlur(e)},ref:t},M),o.createElement("input",Object(a.a)({autoFocus:n,checked:l,defaultChecked:f,className:b.input,disabled:z,id:N&&m,name:x,onChange:function(e){var t=e.target.checked;R(t),D&&D(e,t)},readOnly:k,ref:g,required:I,tabIndex:C,type:S,value:Y},O)),P?h:j)}));t.a=Object(l.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(h)},185:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(22),r=n(173),c=n.n(r),o=n(30),d=n.n(o);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c()().format("YYYY-MM-DD"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()().format("YYYY-MM-DD"),n="".concat(a.a,"/v2/order/getAllOrders?fromDate=").concat(e,"&endDate=").concat(t);return Object(a.d)(n)}function s(){var e="".concat(a.a,"/v2/order/getDeliveryBoysData");return Object(a.d)(e)}function l(e){var t="".concat(a.a,"/v2/order/assignDrivers");return Object(a.g)(t,e)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c()().format("YYYY-MM-DD"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()().format("YYYY-MM-DD"),n="".concat(a.a,"/v2/order/getOrderedProducts?fromDate=").concat(e,"&endDate=").concat(t);return Object(a.d)(n)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c()().format("YYYY-MM-DD"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()().format("YYYY-MM-DD"),n="".concat(a.a,"/v2/order/getOrderProducts?fromDate=").concat(e,"&endDate=").concat(t);return Object(a.d)(n)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c()().format("YYYY-MM-DD"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()().format("YYYY-MM-DD"),n="".concat(a.a,"/v2/order/getOrderBoxData?fromDate=").concat(e,"&endDate=").concat(t);return Object(a.d)(n)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c()().format("YYYY-MM-DD"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()().format("YYYY-MM-DD"),n="".concat(a.a,"/v2/order/getDeliveryReport?fromDate=").concat(e,"&endDate=").concat(t);return Object(a.d)(n)}function f(e){var t="".concat(a.a,"/delivery/addDeliveryPerson");return d.a.put(t,e,{headers:{"Content-Type":"application/json"}})}function p(){var e="".concat(a.a,"/farmers/getAllFarmers");return Object(a.d)(e)}},192:function(e,t,n){"use strict";var a=n(152),r=n(153);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),o=(0,a(n(154)).default)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=o},200:function(e,t,n){"use strict";var a=n(152),r=n(153);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),o=(0,a(n(154)).default)(c.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.default=o},206:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",n=document.createElement("a"),a=[];e.forEach((function(e){e=e.join(","),a.push(e)}));var r=a.join("\n");null!=r&&(r.match(/^data:text\/csv/i)||(r="data:text/csv;charset=utf-8,".concat(r)),n.setAttribute("href",encodeURI(r)),n.setAttribute("download",t),n.click())}t.a=a},262:function(e,t,n){"use strict";var a=n(4),r=n(25),c=n(1),o=n(0),d=(n(7),n(9)),i=n(16),s=n(406),l=o.forwardRef((function(e,t){var n,r=e.classes,i=e.className,l=e.component,u=void 0===l?"li":l,h=e.disableGutters,b=void 0!==h&&h,v=e.ListItemClasses,f=e.role,p=void 0===f?"menuitem":f,j=e.selected,m=e.tabIndex,O=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==m?m:-1),o.createElement(s.a,Object(c.a)({button:!0,role:p,tabIndex:n,component:u,selected:j,disableGutters:b,classes:Object(c.a)({dense:r.dense},v),className:Object(d.a)(r.root,i,j&&r.selected,!b&&r.gutters),ref:t},O))}));t.a=Object(i.a)((function(e){return{root:Object(c.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(c.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(l)},263:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=[1,2,3,23,958,960],r=[4,811,877,957,959]},601:function(e,t,n){"use strict";n.r(t);var a=n(162),r=n.n(a),c=n(163),o=n(156),d=n(157),i=n(158),s=n(159),l=n(3),u=n(2),h=n(0),b=n.n(h),v=n(28),f=n(599),p=n(627),j=n(262),m=n(580),O=n(413),g=n(624),x=n(206),y=n(602),D=n(58),w=n(29),k=n(403),I=n(200),C=n.n(I),S=n(189),Y=n.n(S),M=n(1),B=n(4),A=(n(7),n(9)),P=n(177),R=n(179),E=Object(R.a)(h.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),z=Object(R.a)(h.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),N=n(38),H=Object(R.a)(h.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),L=n(17),F=n(16),U=h.createElement(z,null),T=h.createElement(E,null),V=h.createElement(H,null),_=h.forwardRef((function(e,t){var n=e.checkedIcon,a=void 0===n?U:n,r=e.classes,c=e.color,o=void 0===c?"secondary":c,d=e.icon,i=void 0===d?T:d,s=e.indeterminate,l=void 0!==s&&s,u=e.indeterminateIcon,b=void 0===u?V:u,v=e.inputProps,f=e.size,p=void 0===f?"medium":f,j=Object(B.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),m=l?b:i,O=l?b:a;return h.createElement(P.a,Object(M.a)({type:"checkbox",classes:{root:Object(A.a)(r.root,r["color".concat(Object(L.a)(o))],l&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:o,inputProps:Object(M.a)({"data-indeterminate":l},v),icon:h.cloneElement(m,{fontSize:void 0===m.props.fontSize&&"small"===p?p:m.props.fontSize}),checkedIcon:h.cloneElement(O,{fontSize:void 0===O.props.fontSize&&"small"===p?p:O.props.fontSize}),ref:t},j))})),q=Object(F.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(N.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(N.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(_),G=n(192),$=n.n(G),Q=Object(u.jsx)($.a,{});function J(e){var t=e.data,n=(e.onRowSelect,e.onSelectionChange),a=e.deliveryBoys,r=e.orderBoxData,c=[{name:"Area",sortable:!0,selector:"area",width:"140px"},{name:"Locality",sortable:!0,selector:"subarea",width:"200px"},{name:"Driver",selector:"_driver",cell:function(e,t){var n=e.driverId;if(n){var r=a.get(n);return r?r.name:""}return""}},{name:"Order Id",selector:"orderId",sortable:!0,width:"130px"},{name:"Crate Id",selector:"orderId",sortable:!0,width:"120px",cell:function(e){var t=e.orderId,n=r.get(parseInt(t));return null===n||void 0===n?void 0:n.crateId}},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Hub",sortable:!0,selector:"region",width:"100px"}];return Object(u.jsx)("div",{children:Object(u.jsx)(Y.a,{striped:!0,noHeader:!0,selectableRows:!0,onSelectedRowsChange:n,dense:!0,selectableRowsComponent:q,sortIcon:Q,data:t,columns:c,highlightOnHover:!0,pointerOnHover:!0,pagination:!0,paginationPerPage:35,paginationRowsPerPageOptions:[10,35,100,t.length]})})}var W=b.a.memo(J),Z=n(185),K=n(204);var X=Object(v.b)((function(e){var t=e.setAdmin;return Object(l.a)({},t)}),(function(e){return{onUpdateOrdersData:function(t){return e(Object(K.h)(t))}}}))((function(e){var t=e.data,n=e.deliveryBoys,a=e.onUpdateOrdersData,r=e.orderBoxData,c=Array.from(n.values());c=c.sort((function(e,t){return e.name.localeCompare(t.name)}));var o=Object(h.useState)([]),d=Object(w.a)(o,2),i=d[0],s=d[1],l=Object(h.useState)(!1),b=Object(w.a)(l,2),v=(b[0],b[1]),g=Object(h.useState)(""),x=Object(w.a)(g,2),y=x[0],D=x[1],I=Object(h.useCallback)((function(e){v(e)}),[]),S=Object(h.useCallback)((function(e){e.allSelected,e.selectedCount;var t=e.selectedRows;s(t)}),[]);return Object(u.jsxs)("div",{id:"assign-orders",children:[Object(u.jsx)(k.a,{}),Object(u.jsx)("div",{className:"flex space-bw middle p-10",children:Object(u.jsxs)("div",{className:"flex right middle",children:[Object(u.jsxs)(m.a,{size:"small",children:[Object(u.jsx)(p.a,{id:"driver-filter",children:"Select Driver"}),Object(u.jsxs)(f.a,{labelId:"driver-filter",style:{width:200},disabled:i.length<1,value:y,onChange:function(e){var t={order_ids:i.map((function(e){return e.orderId})),driver:e.target.value};Object(Z.b)(t).then((function(e){Object(Z.d)().then((function(e){var t=e.data;D(""),a(t)})),s([])}))},children:[Object(u.jsx)(j.a,{value:"",children:"None"}),c.map((function(e){return Object(u.jsx)(j.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]}),Object(u.jsxs)("div",{className:"p-10",children:[t.length," Customers Filtered"]}),Object(u.jsxs)("div",{className:"p-10",children:[i.length," Customers Selected"]}),Object(u.jsx)("div",{className:"p-10",children:Object(u.jsx)(O.a,{startIcon:Object(u.jsx)(C.a,{}),color:"secondary",variant:"outlined",onClick:e.exportData,children:"Download Excel"})})]})}),Object(u.jsx)(W,{data:t,orderBoxData:r,onSelectionChange:S,onRowSelect:I,deliveryBoys:n})]})})),ee=n(263);var te=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).update=Object(c.a)(r.a.mark((function e(){var t,n,c,o,d,i,s,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:!0}),t=a.props,n=t.onUpdateOrdersData,c=t.onUpdateAdminData,e.next=5,Object(Z.e)().then((function(e){return e.data}));case 5:return o=e.sent,d=new Map,o.forEach((function(e){d.set(e.id,e)})),c({deliveryBoys:d}),e.next=11,Object(Z.d)().then((function(e){return e.data}));case 11:return i=e.sent,n(i),e.next=15,Object(Z.h)().then((function(e){return e.data}));case 15:return s=e.sent,a.props.onAddOrderProducts(s),e.next=19,Object(Z.i)().then((function(e){return e.data}));case 19:return l=e.sent,a.props.onAddProducts(l),e.next=23,Object(Z.g)().then((function(e){return e.data}));case 23:u=e.sent,a.props.onAddOrderBox(u),a.setState({loading:!1}),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),a.setState({error:e.t0.message});case 31:case"end":return e.stop()}}),e,null,[[0,28]])}))),a.componentDidMount=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.update();case 2:case"end":return e.stop()}}),e)}))),a.hideAddress=function(){return a.setState({hiddenAddress:!0})},a.exportData=function(){for(var e=a.props,t=e.deliveryBoys,n=e.orderBoxData,r=e.orderProducts,c=[["S.No.","Order Id","Crate Id","Customer Id","Name","Phone","Region","Area","Locality","House","Driver","Type","Qty"]],o=a.filterData(),d=0;d<o.length;d++){var i=o[d],s=i.driverId,l="";s&&(l=t.get(s).name);var u=i.customerID,h=i.orderId,b=i.name,v=i.phone,f=i.region,p=i.area,j=i.subarea,m=i.address,O=n.get(parseInt(h)),g=r.get(parseInt(h)),y=[d+1,h,null===O||void 0===O?void 0:O.crateId,u,'"'.concat(b,'"'),v,'"'.concat(f,'"'),'"'.concat(p,'"'),'"'.concat(j,'"'),'"'.concat(m.replace(/[^0-9a-zA-Z:/ ]/g,""),'"'),'"'.concat(l,'"')],D=0,w=0;g?(g.forEach((function(e){var t=e.productId,n=e.qty;ee.b.includes(t)?D+=n:ee.a.includes(t)&&(w+=n)})),D&&c.push([].concat(y,["Pouch Milk",D])),w&&c.push([].concat(y,["Gable Top",w]))):alert("Something wrong with data uploaded for order",h);var k=O||{},I=k.largeBox,C=k.mediumBox,S=k.packet;I&&c.push([].concat(y,["Large Box",I])),C&&c.push([].concat(y,["Medium Box",C])),S&&c.push([].concat(y,["Packet",S])),w||D||I||C||S?console.log("Already Loaded Customer in the sheet"):(console.log("This is not ideal. Maybe the packing is not over yet.\nAn order should have atleast one of gableTopQty || pouchMilkQty || largeBox || mediumBox || packet "),c.push([].concat(y,["Complete",""])))}Object(x.a)(c,"Delivery Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},a.state={loading:!0,phone:"",selectedArea:[],selectedSubarea:[],selectedHub:[],selectedDriver:"all",showWithoutDairy:!1,hiddenAddress:!1,selectedRow:[]},a}return Object(d.a)(n,[{key:"filterData",value:function(){var e=this.state,t=e.selectedSubarea,n=e.selectedArea,a=e.selectedHub,r=e.selectedDriver,c=e.phone,o=this.props.orders,d=[];return o&&(d=o.filter((function(e){if(a.length&&e.region!==a)return!1;if(n.length&&!n.includes(e.area))return!1;if(t.length&&!t.includes(e.subarea))return!1;if("all"!==r)if("none"===r){if(null!==e.driverId)return!1}else if(e.driverId!==r)return!1;return!c||(-1!==e.phone.indexOf(c)||(-1!==e.name.toLowerCase().indexOf(c.toLowerCase())||-1!==e.orderId.toString().indexOf(c.toLowerCase())))}))),d}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedArea,a=t.selectedHub,r=t.selectedDriver,c=t.phone,o=t.loading,d=void 0===o||o,i=this.props,s=i.locations,h=i.hubs,b=i.deliveryBoys,v=i.orders,x=i.orderBoxData,w=b?Array.from(b.values()):[];w=w.sort((function(e,t){return e.name.localeCompare(t.name)}));var k=[],I=[];s&&s.forEach((function(e,t){e.forEach((function(e,r){t!==a&&0!==a.length||k.push(r),(n.includes(r)||0===n.length)&&(I=I.concat(e))}))})),k=k.sort((function(e,t){return e.localeCompare(t)})),v&&b&&x&&(d=!1);var C=this.filterData();return Object(u.jsx)("div",{children:d?Object(u.jsx)(D.a,{}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"flex middle",style:{padding:10},children:[Object(u.jsx)("div",{style:{marginRight:20,width:220},children:Object(u.jsx)(g.a,{value:c,fullWidth:!0,label:"Phone, Name, Crate, Order Id",onChange:function(t){return e.setState({phone:t.target.value})}})}),Object(u.jsx)("div",{style:{marginRight:20,width:120},children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(p.a,{id:"hub-filter",children:"Hub"}),Object(u.jsx)(f.a,{labelId:"hub-filter",style:{width:100},value:a,onChange:function(t){var n=t.target.value;e.setState({selectedHub:n,selectedArea:[],selectedSubarea:[]})},children:h.map((function(e){return Object(u.jsx)(j.a,{value:e,children:e},e)}))})]})}),Object(u.jsx)("div",{style:{marginRight:20,width:300},children:Object(u.jsx)(m.a,{style:{width:"100%"},children:Object(u.jsx)(y.a,{options:k,multiple:!0,renderInput:function(e){return Object(u.jsx)(g.a,Object(l.a)(Object(l.a)({},e),{},{label:"Area"}))},onChange:function(t,n){e.setState({selectedArea:n,selectedSubarea:[]})}})})}),Object(u.jsx)("div",{style:{marginRight:20,width:400},children:Object(u.jsx)(m.a,{style:{width:"100%"},children:Object(u.jsx)(y.a,{options:I,multiple:!0,renderInput:function(e){return Object(u.jsx)(g.a,Object(l.a)(Object(l.a)({},e),{},{label:"Locality"}))},onChange:function(t,n){e.setState({selectedSubarea:n})}})})}),Object(u.jsx)("div",{style:{marginRight:20},children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(p.a,{id:"driver-filter",children:"Assigned Driver"}),Object(u.jsxs)(f.a,{labelId:"driver-filter",style:{width:200},value:r||"all",onChange:function(t,n){var a=t.target.value;e.setState({selectedDriver:a})},children:[Object(u.jsx)(j.a,{value:"all",children:"All"}),Object(u.jsx)(j.a,{value:"none",children:"None"}),w.map((function(e){return Object(u.jsx)(j.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})}),Object(u.jsx)("div",{style:{marginRight:20},children:Object(u.jsx)(O.a,{color:"default",variant:"outlined",onClick:function(){window.location.reload()},children:"Remove Filters"})})]}),Object(u.jsx)(X,{data:C,exportData:this.exportData,deliveryBoys:b})]})})}}]),n}(h.Component);t.default=Object(v.b)((function(e){var t=e.setAdmin;return Object(l.a)({},t)}),(function(e){return{onUpdateOrdersData:function(t){return e(Object(K.h)(t))},onUpdateAdminData:function(t){return e(Object(K.e)(t))},onAddProducts:function(t){return e(Object(K.c)(t))},onAddOrderProducts:function(t){return e(Object(K.b)(t))},onAddOrderBox:function(t){return e(Object(K.a)(t))}}}))(te)}}]);