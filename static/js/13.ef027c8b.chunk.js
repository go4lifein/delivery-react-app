(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[13],{112:function(e,t,r){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",r=document.createElement("a"),a=[];e.forEach((function(e){e=e.join(","),a.push(e)}));var n=a.join("\n");null!=n&&(n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),r.setAttribute("href",encodeURI(n)),r.setAttribute("download",t),r.click())}},250:function(e,t,r){"use strict";r.r(t);var a=r(115),n=r(91),c=r(92),i=r(95),l=r(94),s=r(10),d=r(4),o=r(0),j=r.n(o),u=r(37),h=r(242),b=r(257),v=r(197),O=r(236),x=r(189),y=r(190),p=r(229),f=r(230),m=r(254),g=r(113),D=r.n(g),w=r(112),C=r(243),S=r(39),_=r(119),N=r.n(_),R=r(247),A=r(136),k=r.n(A),H=Object(d.jsx)(k.a,{});function I(e){var t=e.data,r=e.onRowSelect,a=e.onSelectionChange,n=e.deliveryBoys,c=[{name:"Crate",selector:"crateId",sortable:!0,width:"70px"},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Hub",sortable:!0,selector:"address.hub",width:"100px",cell:function(e,t){return e.address.hub}},{name:"Region",sortable:!0,selector:"address.area",width:"140px",cell:function(e,t){return e.address.area}},{name:"Locality",sortable:!0,selector:"address.subarea",width:"150px",cell:function(e,t){return e.address.subarea}},{name:"House",selector:"address.house",width:"200px",cell:function(e,t){return e.address.house_number}},{name:"Order Type",selector:"order-type",width:"80px",cell:function(e,t){return e.onlyDairy?"Dairy":e.hasNoDairy?"Grocery":"Dairy + Grocery"}},{name:"Gable Top",selector:"gable-top",width:"80px",cell:function(e,t){var r=e.products;if("Dairy"in r){var a=r.Dairy,n=0;return a.forEach((function(e){811===e.product_id&&(n+=e.quantity)})),n||""}return""}},{name:"Milk Packets",selector:"milk-packets",width:"80px",cell:function(e,t){var r=e.products;if("Dairy"in r){var a=r.Dairy,n=0;return a.forEach((function(e){1===e.product_id&&(n+=e.quantity)})),n||""}return""}},{name:"Paneer",selector:"paneer",width:"80px",cell:function(e,t){var r=e.products;if("Dairy"in r){var a=r.Dairy,n=0;return a.forEach((function(e){225===e.product_id&&(n+=e.total)})),n?n+"g":""}return""}},{name:"Driver",selector:"_driver",cell:function(e,t){var r=e.delivery_person_id;if(r){var a=n.get(r);return a?a.name:""}return""}},{name:"Delivered by",selector:"delivery",cell:function(e,t){var r=e.delivery,a=r.driver_id,c=r.deliver_date;if(a&&c){var i=n.get(a);return i?i.name:"Not Delivered yet"}return""}}];return console.log("Rerendering Table"),Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{striped:!0,noHeader:!0,selectableRows:!0,onSelectedRowsChange:a,dense:!0,selectableRowsComponent:R.a,sortIcon:H,data:t,columns:c,highlightOnHover:!0,pointerOnHover:!0,onRowClicked:function(e,t){r(e)}})})}var T=j.a.memo(I),P=r(125),B=r(228),E=r(227),G=r(154),L=r.n(G),U=r(251),W=r(241),q=r(226),F=r(224),J=r(231);var M=j.a.forwardRef((function(e,t){return Object(d.jsx)(W.a,Object(s.a)({direction:"up",ref:t},e))})),Q=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).Review=function(){var e=a.props,t=e.customer,r=e.deliveryBoys;console.log(t);var n=t.delivery,c=n.driver_id,i=n.deliver_date,l=n.delivery_type,s=n.proof_img,o=n.complete_delivery,j=(n.order_cancel_reason,n.boxes),u=n.milk_packets,h=r.get(c);return Object(d.jsx)("div",{className:"pv-10",children:t.delivery.deliver_date?Object(d.jsxs)(J.a,{variant:"outlined",children:[Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivered By"}),Object(d.jsx)(E.a,{variant:"h6",children:h.name})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivered On"}),Object(d.jsx)(E.a,{variant:"h6",children:new Date(i).toDateString()})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"}),Object(d.jsx)(E.a,{variant:"h6",children:function(e){switch(e){case"in_hand":return"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940";case"doorstep":return"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e";case"society_guard":return"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"tower_guard":return"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"order_cancelled":return"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932";default:return Object(d.jsx)("span",{style:{color:"red"},children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"})}}(l)})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivery Photo"}),s?Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"order",src:s,width:300})}):Object(d.jsx)(E.a,{variant:"h6",children:Object(d.jsx)("span",{style:{color:"red"},children:"No Picture taken"})})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"}),Object(d.jsx)(E.a,{variant:"h6",children:function(e){switch(e){case"yes":return"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e";case"no":return"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948";default:return Object(d.jsx)("span",{style:{color:"red"},children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"})}}(o)})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Boxes - \u0915\u093f\u0924\u0928\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(d.jsx)(E.a,{variant:"h6",children:j})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Milk Packets - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u092a\u0948\u0915\u0947\u091f \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(d.jsx)(E.a,{variant:"h6",children:u})]})]}):Object(d.jsx)(E.a,{variant:"h3",style:{color:"red"},children:"Not Delivered yet"})})},a.state=Object(s.a)({},e),a}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=this.props.customer;return Object(d.jsx)("div",{children:t&&Object(d.jsxs)(U.a,{fullScreen:!0,open:!0,TransitionComponent:M,children:[Object(d.jsx)(F.a,{position:"fixed",color:"default",children:Object(d.jsxs)(q.a,{children:[Object(d.jsx)(B.a,{edge:"start",color:"inherit",onClick:function(){e.props.setSelectedCustomer(!1)},"aria-label":"close",children:Object(d.jsx)(L.a,{})}),Object(d.jsx)(E.a,{variant:"h6",children:t.name})]})}),Object(d.jsxs)("div",{style:{margin:"60px 10px 20px 10px",padding:"30px 10px"},children:[Object(d.jsx)(E.a,{variant:"h4",children:"Delivery Information"}),Object(d.jsx)(f.a,{}),Object(d.jsx)(this.Review,{})]})]})})}}]),r}(j.a.Component),Y=Object(u.b)((function(e){var t=e.setAdmin;return Object(s.a)({},t)}))(Q),z=r(109);function K(e){var t=e.setAdmin;return Object(s.a)({},t)}var V=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).hideAddress=function(){return a.setState({hiddenAddress:!0})},a.exportData=function(){var e=a.props.customers,t=Array.from(e.values());t=t.filter((function(e){return!1===e.onlyDairy}));Object(w.a)([["Crate","Hub","Name","Phone","Product","Total","Qty"]],"Warehouse Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},a.state={loading:!0,phone:"",selectedArea:[],selectedSubarea:"all",selectedHub:"all",selectedDriver:"all",showWithoutDairy:!1,hiddenAddress:!1,selectedRow:[]},a}return Object(c.a)(r,[{key:"render",value:function(){var e=this,t=!0,r=this.state,a=r.selectedArea,n=r.selectedHub,c=(r.selectedSubarea,r.selectedDriver),i=r.orderType,l=r.phone,o=r.showDelivered,j=this.props,u=j.customers,f=j.locations,g=j.hubs,D=j.deliveryBoys,w=D?Array.from(D.values()):[];w=w.sort((function(e,t){return e.name.localeCompare(t.name)}));var _=[],N=[];f&&f.forEach((function(e,t){e.forEach((function(e,r){t!==n&&"all"!==n||_.push(r),(a.includes(r)||0===a.length)&&N.concat(e)}))})),_=_.sort((function(e,t){return e.localeCompare(t)}));var R=[];return u&&(t=!1,R=(R=Array.from(u.values())).filter((function(e){if("all"!==n&&e.address.hub!==n)return!1;if(a.length&&!a.includes(e.address.area))return!1;if("all"!==c)if("none"===c){if(null!==e.delivery_person_id)return!1}else if(e.delivery_person_id!==c)return!1;if(o)return!!e.delivery.deliver_date;if(i)switch(console.log(i),i){case"all":return!0;case"dairy":return e.onlyDairy;case"grocery":return e.hasNoDairy;case"both":return!1===e.hasNoDairy&&!1===e.onlyDairy;default:return!0}return!l||(-1!==e.phone.indexOf(l)||-1!==e.name.toLowerCase().indexOf(l.toLowerCase()))}))),Object(d.jsx)("div",{children:t?Object(d.jsx)(S.a,{}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex middle",style:{padding:10},children:[Object(d.jsx)("div",{style:{marginRight:20,width:150},children:Object(d.jsx)(m.a,{value:l,label:"Phone or Name",onChange:function(t){return e.setState({phone:t.target.value})}})}),Object(d.jsx)("div",{style:{marginRight:20,width:120},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(b.a,{id:"hub-filter",children:"Hub"}),Object(d.jsxs)(h.a,{labelId:"hub-filter",style:{width:100},value:n,onChange:function(t){var r=t.target.value;e.setState({selectedHub:r,selectedArea:"all",selectedSubarea:"all"})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),g.map((function(e){return Object(d.jsx)(v.a,{value:e,children:e},e)}))]})]})}),Object(d.jsx)("div",{style:{marginRight:20,width:250},children:Object(d.jsx)(O.a,{style:{width:"100%"},children:Object(d.jsx)(C.a,{labelId:"area-filter",options:_,multiple:!0,renderInput:function(e){return Object(d.jsx)(m.a,Object(s.a)(Object(s.a)({},e),{},{label:"Area"}))},onChange:function(t,r){console.log(r),e.setState({selectedArea:r,selectedSubarea:"all"})}})})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(b.a,{id:"driver-filter",children:"Assigned Driver"}),Object(d.jsxs)(h.a,{labelId:"driver-filter",style:{width:200},value:c||"all",onChange:function(t,r){var a=t.target.value;e.setState({selectedDriver:a})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),Object(d.jsx)(v.a,{value:"none",children:"None"}),w.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(x.a,{control:Object(d.jsx)(y.a,{checked:o,onChange:function(t,r){return e.setState({showDelivered:r})},color:"primary"}),label:"Only Delivered"})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(b.a,{id:"order-type-filter",children:"Order Type"}),Object(d.jsxs)(h.a,{labelId:"order-type-filter",style:{width:200},onChange:function(t){e.setState({orderType:t.target.value})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),Object(d.jsx)(v.a,{value:"dairy",children:"Dairy"}),Object(d.jsx)(v.a,{value:"grocery",children:"Grocery"}),Object(d.jsx)(v.a,{value:"both",children:"Dairy + Grocery"})]})]})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(p.a,{color:"primary",onClick:function(){e.setState({phone:"",selectedArea:"all",selectedSubarea:"all",selectedHub:"all",selectedDriver:"all",showWithoutDairy:!1})},children:"Clear All Filters"})})]}),Object(d.jsx)(X,{data:R,exportData:this.exportData,deliveryBoys:D})]})})}}]),r}(o.Component),X=Object(u.b)(K,(function(e){return{onUpdateOrdersData:function(t){return e(Object(z.c)(t))}}}))((function(e){var t=e.data,r=e.deliveryBoys,n=e.onUpdateOrdersData,c=Array.from(r.values());c=c.sort((function(e,t){return e.name.localeCompare(t.name)}));var i=Object(o.useState)([]),l=Object(a.a)(i,2),s=l[0],j=l[1],u=Object(o.useState)(!1),x=Object(a.a)(u,2),y=x[0],m=x[1],g=Object(o.useCallback)((function(e){m(e)}),[]),w=Object(o.useCallback)((function(e){e.allSelected,e.selectedCount;var t=e.selectedRows;j(t)}),[]);return Object(d.jsxs)("div",{id:"assign-orders",children:[Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"flex right middle",children:[Object(d.jsxs)("div",{className:"p-10",children:[t.length," Rows Filtered"]}),Object(d.jsxs)("div",{className:"p-10",children:[s.length," Rows Selected"]}),Object(d.jsx)("div",{className:"p-10",children:Object(d.jsx)("div",{children:Object(d.jsxs)(O.a,{variant:"outlined",children:[Object(d.jsx)(b.a,{id:"driver-filter",children:"Select Driver"}),Object(d.jsxs)(h.a,{labelId:"driver-filter",style:{width:200},disabled:s.length<1,onChange:function(e){var t={order_ids:s.map((function(e){return e.order_id})),driver:e.target.value};Object(P.a)(t).then((function(e){Object(P.b)().then((function(e){var t=e.data;n(t)})),j([])}))},children:[Object(d.jsx)(v.a,{value:"",children:"None"}),c.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})})}),Object(d.jsx)("div",{className:"p-10",children:Object(d.jsx)(p.a,{startIcon:Object(d.jsx)(D.a,{}),color:"secondary",variant:"outlined",onClick:e.exportData,disabled:!0,children:"Download Excel"})})]}),Object(d.jsx)(Y,{customer:y,setSelectedCustomer:m}),Object(d.jsx)(T,{data:t,onSelectionChange:w,onRowSelect:g,deliveryBoys:r})]})}));t.default=Object(u.b)(K)(V)}}]);
//# sourceMappingURL=13.ef027c8b.chunk.js.map