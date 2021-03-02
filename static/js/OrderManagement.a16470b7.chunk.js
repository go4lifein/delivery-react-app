(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[13],{175:function(e,t,r){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",r=document.createElement("a"),a=[];e.forEach((function(e){e=e.join(","),a.push(e)}));var n=a.join("\n");null!=n&&(n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),r.setAttribute("href",encodeURI(n)),r.setAttribute("download",t),r.click())}},566:function(e,t,r){"use strict";r.r(t);var a=r(105),n=r(106),c=r(107),o=r(108),i=r(5),l=r(2),s=r(0),d=r.n(s),u=r(38),h=r(560),j=r(581),b=r(241),v=r(541),p=r(542),f=r(578),x=r(175),O=r(561),m=r(39),g=r(111),y=r(532),w=r(186),C=r.n(w),I=r(238),D=r.n(I),S=r(569),A=r(239),B=r.n(A),R=Object(l.jsx)(B.a,{});function k(e){var t=e.data,r=(e.onRowSelect,e.onSelectionChange),a=e.deliveryBoys,n=e.orderBoxData,c=[{name:"Order Id",selector:"orderId",sortable:!0,width:"130px"},{name:"Crate Id",selector:"orderId",sortable:!0,cell:function(e){var t=e.orderId,r=n.get(parseInt(t));return null===r||void 0===r?void 0:r.crateId}},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Hub",sortable:!0,selector:"region",width:"100px"},{name:"Area",sortable:!0,selector:"area",width:"140px"},{name:"Locality",sortable:!0,selector:"subarea",width:"150px"},{name:"House",selector:"address",width:"300px"},{name:"Driver",selector:"_driver",cell:function(e,t){var r=e.driverId;if(r){var n=a.get(r);return n?n.name:""}return""}}];return Object(l.jsx)("div",{children:Object(l.jsx)(D.a,{striped:!0,noHeader:!0,selectableRows:!0,onSelectedRowsChange:r,dense:!0,selectableRowsComponent:S.a,sortIcon:R,data:t,columns:c,highlightOnHover:!0,pointerOnHover:!0,pagination:!0,paginationPerPage:10})})}var N=d.a.memo(k),H=r(268),L=r(147);var E=Object(u.b)((function(e){var t=e.setAdmin;return Object(i.a)({},t)}),(function(e){return{onUpdateOrdersData:function(t){return e(Object(L.g)(t))}}}))((function(e){var t=e.data,r=e.deliveryBoys,a=e.onUpdateOrdersData,n=e.orderBoxData,c=Array.from(r.values());c=c.sort((function(e,t){return e.name.localeCompare(t.name)}));var o=Object(s.useState)([]),i=Object(g.a)(o,2),d=i[0],u=i[1],f=Object(s.useState)(!1),x=Object(g.a)(f,2),O=(x[0],x[1]),m=Object(s.useCallback)((function(e){O(e)}),[]),w=Object(s.useCallback)((function(e){e.allSelected,e.selectedCount;var t=e.selectedRows;u(t)}),[]);return Object(l.jsxs)("div",{id:"assign-orders",children:[Object(l.jsx)(y.a,{}),Object(l.jsx)("div",{className:"flex space-bw middle p-10",children:Object(l.jsxs)("div",{className:"flex right middle",children:[Object(l.jsxs)(v.a,{size:"small",children:[Object(l.jsx)(j.a,{id:"driver-filter",children:"Select Driver"}),Object(l.jsxs)(h.a,{labelId:"driver-filter",style:{width:200},disabled:d.length<1,onChange:function(e){var t={order_ids:d.map((function(e){return e.orderId})),driver:e.target.value};Object(H.a)(t).then((function(e){Object(H.b)().then((function(e){var t=e.data;a(t)})),u([])}))},children:[Object(l.jsx)(b.a,{value:"null",children:"None"}),c.map((function(e){return Object(l.jsx)(b.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]}),Object(l.jsxs)("div",{className:"p-10",children:[t.length," Customers Filtered"]}),Object(l.jsxs)("div",{className:"p-10",children:[d.length," Customers Selected"]}),Object(l.jsx)("div",{className:"p-10",children:Object(l.jsx)(p.a,{startIcon:Object(l.jsx)(C.a,{}),color:"secondary",variant:"outlined",onClick:e.exportData,children:"Download Excel"})})]})}),Object(l.jsx)(N,{data:t,orderBoxData:n,onSelectionChange:w,onRowSelect:m,deliveryBoys:r})]})})),P=[1,2,3,23],T=[4,811,877];var M=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).hideAddress=function(){return n.setState({hiddenAddress:!0})},n.exportData=function(){for(var e=n.props,t=e.deliveryBoys,r=e.orderBoxData,a=e.orderProducts,c=[["S.No.","Order Id","Crate Id","Customer Id","Name","Phone","Region","Area","Locality","House","Driver","Type","Qty"]],o=n.filterData(),i=0;i<o.length;i++){var l=o[i],s=l.driverId,d="";s&&(d=t.get(s).name);var u=l.customerID,h=l.orderId,j=l.name,b=l.phone,v=l.region,p=l.area,f=l.subarea,O=l.address,m=r.get(parseInt(h)),g=a.get(parseInt(h)),y=[i+1,h,null===m||void 0===m?void 0:m.crateId,u,'"'.concat(j,'"'),b,'"'.concat(v,'"'),'"'.concat(p,'"'),'"'.concat(f,'"'),'"'.concat(O.replace(/[^0-9a-zA-Z:/ ]/g,""),'"'),'"'.concat(d,'"')],w=0,C=0;g?(g.forEach((function(e){var t=e.productId,r=e.qty;P.includes(t)?w+=r:T.includes(t)&&(C+=r)})),w&&c.push([].concat(y,["Pouch Milk",w])),C&&c.push([].concat(y,["Gable Top",C]))):alert("Something wrong with data uploaded for order",h);var I=m||{},D=I.largeBox,S=I.mediumBox,A=I.packet;D&&c.push([].concat(y,["Large Box",D])),S&&c.push([].concat(y,["Large Box",S])),A&&c.push([].concat(y,["Large Box",A])),C||w||D||S||A?console.log("Already Loaded Customer in the sheet"):(console.log("This is not ideal. Maybe the packing is not over yet.\nAn order should have atleast one of gableTopQty || pouchMilkQty || largeBox || mediumBox || packet "),c.push([].concat(y,["Complete",""])))}Object(x.a)(c,"Delivery Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},n.state={loading:!0,phone:"",selectedArea:[],selectedSubarea:[],selectedHub:[],selectedDriver:"all",showWithoutDairy:!1,hiddenAddress:!1,selectedRow:[]},n}return Object(n.a)(r,[{key:"filterData",value:function(){var e=this.state,t=e.selectedSubarea,r=e.selectedArea,a=e.selectedHub,n=e.selectedDriver,c=e.phone,o=this.props.orders;console.log("STATE",this.state);var i=[];return o&&(i=o.filter((function(e){if(a.length&&e.region!==a)return!1;if(r.length&&!r.includes(e.area))return!1;if(t.length&&!t.includes(e.subarea))return!1;if("all"!==n)if("none"===n){if(null!==e.driverId)return!1}else if(e.driverId!==n)return!1;return!c||(-1!==e.phone.indexOf(c)||(-1!==e.name.toLowerCase().indexOf(c.toLowerCase())||-1!==e.orderId.toString().indexOf(c.toLowerCase())))}))),i}},{key:"render",value:function(){var e=this,t=!0,r=this.state,a=r.selectedArea,n=r.selectedHub,c=r.selectedDriver,o=r.phone,s=this.props,d=s.locations,u=s.hubs,x=s.deliveryBoys,g=s.orders,y=x?Array.from(x.values()):[];y=y.sort((function(e,t){return e.name.localeCompare(t.name)}));var w=[],C=[];d&&d.forEach((function(e,t){e.forEach((function(e,r){console.log(r,e),t!==n&&0!==n.length||w.push(r),(a.includes(r)||0===a.length)&&(C=C.concat(e))}))})),w=w.sort((function(e,t){return e.localeCompare(t)})),g&&(t=!1);var I=this.filterData();return Object(l.jsx)("div",{children:t?Object(l.jsx)(m.a,{}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex middle",style:{padding:10},children:[Object(l.jsx)("div",{style:{marginRight:20,width:220},children:Object(l.jsx)(f.a,{value:o,fullWidth:!0,label:"Phone, Name, Crate, Order Id",onChange:function(t){return e.setState({phone:t.target.value})}})}),Object(l.jsx)("div",{style:{marginRight:20,width:120},children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(j.a,{id:"hub-filter",children:"Hub"}),Object(l.jsx)(h.a,{labelId:"hub-filter",style:{width:100},value:n,onChange:function(t){var r=t.target.value;e.setState({selectedHub:r,selectedArea:[],selectedSubarea:[]})},children:u.map((function(e){return Object(l.jsx)(b.a,{value:e,children:e},e)}))})]})}),Object(l.jsx)("div",{style:{marginRight:20,width:300},children:Object(l.jsx)(v.a,{style:{width:"100%"},children:Object(l.jsx)(O.a,{options:w,multiple:!0,renderInput:function(e){return Object(l.jsx)(f.a,Object(i.a)(Object(i.a)({},e),{},{label:"Area"}))},onChange:function(t,r){e.setState({selectedArea:r,selectedSubarea:[]})}})})}),Object(l.jsx)("div",{style:{marginRight:20,width:400},children:Object(l.jsx)(v.a,{style:{width:"100%"},children:Object(l.jsx)(O.a,{options:C,multiple:!0,renderInput:function(e){return Object(l.jsx)(f.a,Object(i.a)(Object(i.a)({},e),{},{label:"Locality"}))},onChange:function(t,r){e.setState({selectedSubarea:r})}})})}),Object(l.jsx)("div",{style:{marginRight:20},children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(j.a,{id:"driver-filter",children:"Assigned Driver"}),Object(l.jsxs)(h.a,{labelId:"driver-filter",style:{width:200},value:c||"all",onChange:function(t,r){var a=t.target.value;e.setState({selectedDriver:a})},children:[Object(l.jsx)(b.a,{value:"all",children:"All"}),Object(l.jsx)(b.a,{value:"none",children:"None"}),y.map((function(e){return Object(l.jsx)(b.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})}),Object(l.jsx)("div",{style:{marginRight:20},children:Object(l.jsx)(p.a,{color:"primary",onClick:function(){window.location.reload()},children:"Clear All Filters"})})]}),Object(l.jsx)(E,{data:I,exportData:this.exportData,deliveryBoys:x})]})})}}]),r}(s.Component);t.default=Object(u.b)((function(e){var t=e.setAdmin;return Object(i.a)({},t)}))(M)}}]);
//# sourceMappingURL=OrderManagement.a16470b7.chunk.js.map