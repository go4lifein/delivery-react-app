(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[12],{112:function(e,r,t){"use strict";r.a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"export.csv",t=document.createElement("a"),a=[];e.forEach((function(e){e=e.join(","),a.push(e)}));var n=a.join("\n");null!=n&&(n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),t.setAttribute("href",encodeURI(n)),t.setAttribute("download",r),t.click())}},254:function(e,r,t){"use strict";t.r(r);var a=t(114),n=t(88),i=t(89),c=t(95),l=t(94),s=t(10),d=t(4),o=t(0),j=t.n(o),u=t(37),h=t(246),b=t(261),v=t(197),O=t(240),x=t(189),y=t(190),p=t(233),f=t(234),m=t(258),g=t(136),D=t.n(g),w=t(112),_=t(247),C=t(39),S=t(134),N=t.n(S),R=t(251),k=t(135),A=t.n(k),H=Object(d.jsx)(A.a,{});function P(e){var r=e.data,t=e.onRowSelect,a=e.onSelectionChange,n=e.deliveryBoys,i=[{name:"Crate",selector:"crate_id",sortable:!0,width:"70px"},{name:"Name",selector:"name",sortable:!0,width:"200px"},{name:"Phone",selector:"phone",sortable:!0,width:"140px"},{name:"Hub",sortable:!0,selector:"address.hub",width:"100px",cell:function(e,r){return e.address.hub}},{name:"Region",sortable:!0,selector:"address.area",width:"140px",cell:function(e,r){return e.address.area}},{name:"Locality",sortable:!0,selector:"address.subarea",width:"150px",cell:function(e,r){return e.address.subarea}},{name:"House",selector:"address.house",width:"200px",cell:function(e,r){return e.address.house_number}},{name:"Order Type",selector:"order-type",width:"80px",cell:function(e,r){return e.onlyDairy?"Dairy":e.hasNoDairy?"Grocery":"Dairy + Grocery"}},{name:"Gable Top",selector:"gable-top",width:"80px",cell:function(e,r){var t=e.products;if("Dairy"in t){var a=t.Dairy,n=0;return a.forEach((function(e){811===e.product_id&&(n+=e.quantity)})),n||""}return""}},{name:"Milk Packets",selector:"milk-packets",width:"80px",cell:function(e,r){var t=e.products;if("Dairy"in t){var a=t.Dairy,n=0;return a.forEach((function(e){1===e.product_id&&(n+=e.quantity)})),n||""}return""}},{name:"Paneer",selector:"paneer",width:"80px",cell:function(e,r){var t=e.products;if("Dairy"in t){var a=t.Dairy,n=0;return a.forEach((function(e){225===e.product_id&&(n+=e.total)})),n?n+"g":""}return""}},{name:"Driver",selector:"_driver",cell:function(e,r){var t=e.delivery_person_id;if(t){var a=n.get(t);return a?a.name:""}return""}},{name:"Delivered by",selector:"delivery",cell:function(e,r){var t=e.delivery,a=t.driver_id,i=t.deliver_date;if(a&&i){var c=n.get(a);return c?c.name:"Not Delivered yet"}return""}}];return console.log("Rerendering Table"),Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{striped:!0,noHeader:!0,selectableRows:!0,onSelectedRowsChange:a,dense:!0,selectableRowsComponent:R.a,sortIcon:H,data:r,columns:i,highlightOnHover:!0,pointerOnHover:!0,onRowClicked:function(e,r){t(e)},pagination:!0,paginationPerPage:30})})}var I=j.a.memo(P),T=t(117),B=t(232),E=t(231),G=t(155),L=t.n(G),q=t(255),M=t(245),U=t(230),F=t(228),J=t(235);var W=j.a.forwardRef((function(e,r){return Object(d.jsx)(M.a,Object(s.a)({direction:"up",ref:r},e))})),Y=function(e){Object(c.a)(t,e);var r=Object(l.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=r.call(this,e)).Review=function(){var e=a.props,r=e.customer,t=e.deliveryBoys;console.log(r);var n=r.delivery,i=n.driver_id,c=n.deliver_date,l=n.delivery_type,s=n.proof_img,o=n.complete_delivery,j=(n.order_cancel_reason,n.boxes),u=n.milk_packets,h=t.get(i);return Object(d.jsx)("div",{className:"pv-10",children:r.delivery.deliver_date?Object(d.jsxs)(J.a,{variant:"outlined",children:[Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivered By"}),Object(d.jsx)(E.a,{variant:"h6",children:h.name})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivered On"}),Object(d.jsx)(E.a,{variant:"h6",children:new Date(c).toDateString()})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"}),Object(d.jsx)(E.a,{variant:"h6",children:function(e){switch(e){case"in_hand":return"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940";case"doorstep":return"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e";case"society_guard":return"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"tower_guard":return"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"order_cancelled":return"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932";default:return Object(d.jsx)("span",{style:{color:"red"},children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"})}}(l)})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Delivery Photo"}),s?Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"order",src:s,width:300})}):Object(d.jsx)(E.a,{variant:"h6",children:Object(d.jsx)("span",{style:{color:"red"},children:"No Picture taken"})})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"}),Object(d.jsx)(E.a,{variant:"h6",children:function(e){switch(e){case"yes":return"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e";case"no":return"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948";default:return Object(d.jsx)("span",{style:{color:"red"},children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"})}}(o)})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Boxes - \u0915\u093f\u0924\u0928\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(d.jsx)(E.a,{variant:"h6",children:j})]}),Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"p-10",children:[Object(d.jsx)(E.a,{variant:"body",children:"Milk Packets - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u092a\u0948\u0915\u0947\u091f \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(d.jsx)(E.a,{variant:"h6",children:u})]})]}):Object(d.jsx)(E.a,{variant:"h3",style:{color:"red"},children:"Not Delivered yet"})})},a.state=Object(s.a)({},e),a}return Object(i.a)(t,[{key:"render",value:function(){var e=this,r=this.props.customer;return Object(d.jsx)("div",{children:r&&Object(d.jsxs)(q.a,{fullScreen:!0,open:!0,TransitionComponent:W,children:[Object(d.jsx)(F.a,{position:"fixed",color:"default",children:Object(d.jsxs)(U.a,{children:[Object(d.jsx)(B.a,{edge:"start",color:"inherit",onClick:function(){e.props.setSelectedCustomer(!1)},"aria-label":"close",children:Object(d.jsx)(L.a,{})}),Object(d.jsx)(E.a,{variant:"h6",children:r.name})]})}),Object(d.jsxs)("div",{style:{margin:"60px 10px 20px 10px",padding:"30px 10px"},children:[Object(d.jsx)(E.a,{variant:"h4",children:"Delivery Information"}),Object(d.jsx)(f.a,{}),Object(d.jsx)(this.Review,{})]})]})})}}]),t}(j.a.Component),z=Object(u.b)((function(e){var r=e.setAdmin;return Object(s.a)({},r)}))(Y),K=t(109);function Q(e){var r=e.setAdmin;return Object(s.a)({},r)}var V=function(e){Object(c.a)(t,e);var r=Object(l.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=r.call(this,e)).hideAddress=function(){return a.setState({hiddenAddress:!0})},a.exportData=function(){var e=a.props,r=e.customers,t=e.deliveryBoys,n=Array.from(r.values()),i=[["order_id","Crate","Name","Phone","Hub","Region","Locality","House","Order Type","Gable Top","Milk Packets","Paneer","Driver","Delivered By"]];n.forEach((function(e){var r,a=e.order_id,n=e.crate_id,c=e.name,l=e.phone,s=e.address,d=e.onlyDairy,o=e.hasNoDairy,j=e.products,u=e.delivery_person_id,h=e.delivery,b=s.hub,v=s.area,O=s.subarea,x=s.house_number,y=h.driver_id,p=h.deliver_date;r=d?"Dairy":o?"Grocery":"Dairy + Grocery";var f=0,m=0,g=0,D="",w="";"Dairy"in j&&j.Dairy.forEach((function(e){811===e.product_id&&(f+=e.quantity),1===e.product_id&&(m+=e.quantity),225===e.product_id&&(g+=e.total)}));if(u){var _=t.get(u);_&&(D=_.name)}if(y&&p){var C=t.get(y);C&&(w=C.name)}var S=[a,n,c,l,b,v,O,'"'.concat(x,'"'),r,f,m,g,D,w];i.push(S)})),Object(w.a)(i,"Delivery Sheet - ".concat((new Date).toLocaleDateString(),".csv"))},a.state={loading:!0,phone:"",selectedArea:[],selectedSubarea:"all",selectedHub:"all",selectedDriver:"all",showWithoutDairy:!1,hiddenAddress:!1,selectedRow:[]},a}return Object(i.a)(t,[{key:"render",value:function(){var e=this,r=!0,t=this.state,a=t.selectedArea,n=t.selectedHub,i=(t.selectedSubarea,t.selectedDriver),c=t.orderType,l=t.phone,o=t.showDelivered,j=this.props,u=j.customers,f=j.locations,g=j.hubs,D=j.deliveryBoys,w=D?Array.from(D.values()):[];w=w.sort((function(e,r){return e.name.localeCompare(r.name)}));var S=[],N=[];f&&f.forEach((function(e,r){e.forEach((function(e,t){r!==n&&"all"!==n||S.push(t),(a.includes(t)||0===a.length)&&N.concat(e)}))})),S=S.sort((function(e,r){return e.localeCompare(r)}));var R=[];return u&&(r=!1,R=(R=Array.from(u.values())).filter((function(e){if("all"!==n&&e.address.hub!==n)return!1;if(a.length&&!a.includes(e.address.area))return!1;if("all"!==i)if("none"===i){if(null!==e.delivery_person_id)return!1}else if(e.delivery_person_id!==i)return!1;if(o)return!!e.delivery.deliver_date;if(c)switch(console.log(c),c){case"all":return!0;case"dairy":return e.onlyDairy;case"grocery":return e.hasNoDairy;case"both":return!1===e.hasNoDairy&&!1===e.onlyDairy;default:return!0}return!l||(-1!==e.phone.indexOf(l)||-1!==e.name.toLowerCase().indexOf(l.toLowerCase()))}))),Object(d.jsx)("div",{children:r?Object(d.jsx)(C.a,{}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex middle",style:{padding:10},children:[Object(d.jsx)("div",{style:{marginRight:20,width:150},children:Object(d.jsx)(m.a,{value:l,label:"Phone or Name",onChange:function(r){return e.setState({phone:r.target.value})}})}),Object(d.jsx)("div",{style:{marginRight:20,width:120},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(b.a,{id:"hub-filter",children:"Hub"}),Object(d.jsxs)(h.a,{labelId:"hub-filter",style:{width:100},value:n,onChange:function(r){var t=r.target.value;e.setState({selectedHub:t,selectedArea:"all",selectedSubarea:"all"})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),g.map((function(e){return Object(d.jsx)(v.a,{value:e,children:e},e)}))]})]})}),Object(d.jsx)("div",{style:{marginRight:20,width:250},children:Object(d.jsx)(O.a,{style:{width:"100%"},children:Object(d.jsx)(_.a,{labelId:"area-filter",options:S,multiple:!0,renderInput:function(e){return Object(d.jsx)(m.a,Object(s.a)(Object(s.a)({},e),{},{label:"Area"}))},onChange:function(r,t){console.log(t),e.setState({selectedArea:t,selectedSubarea:"all"})}})})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(b.a,{id:"driver-filter",children:"Assigned Driver"}),Object(d.jsxs)(h.a,{labelId:"driver-filter",style:{width:200},value:i||"all",onChange:function(r,t){var a=r.target.value;e.setState({selectedDriver:a})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),Object(d.jsx)(v.a,{value:"none",children:"None"}),w.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(x.a,{control:Object(d.jsx)(y.a,{checked:o,onChange:function(r,t){return e.setState({showDelivered:t})},color:"primary"}),label:"Only Delivered"})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(b.a,{id:"order-type-filter",children:"Order Type"}),Object(d.jsxs)(h.a,{labelId:"order-type-filter",style:{width:200},onChange:function(r){e.setState({orderType:r.target.value})},children:[Object(d.jsx)(v.a,{value:"all",children:"All"}),Object(d.jsx)(v.a,{value:"dairy",children:"Dairy"}),Object(d.jsx)(v.a,{value:"grocery",children:"Grocery"}),Object(d.jsx)(v.a,{value:"both",children:"Dairy + Grocery"})]})]})}),Object(d.jsx)("div",{style:{marginRight:20},children:Object(d.jsx)(p.a,{color:"primary",onClick:function(){window.location.reload()},children:"Clear All Filters"})})]}),Object(d.jsx)(X,{data:R,exportData:this.exportData,deliveryBoys:D})]})})}}]),t}(o.Component),X=Object(u.b)(Q,(function(e){return{onUpdateOrdersData:function(r){return e(Object(K.c)(r))}}}))((function(e){var r=e.data,t=e.deliveryBoys,n=e.onUpdateOrdersData,i=Array.from(t.values());i=i.sort((function(e,r){return e.name.localeCompare(r.name)}));var c=Object(o.useState)([]),l=Object(a.a)(c,2),s=l[0],j=l[1],u=Object(o.useState)(!1),x=Object(a.a)(u,2),y=x[0],m=x[1],g=Object(o.useCallback)((function(e){m(e)}),[]),w=Object(o.useCallback)((function(e){e.allSelected,e.selectedCount;var r=e.selectedRows;j(r)}),[]);return Object(d.jsxs)("div",{id:"assign-orders",children:[Object(d.jsx)(f.a,{}),Object(d.jsxs)("div",{className:"flex right middle",children:[Object(d.jsxs)("div",{className:"p-10",children:[r.length," Rows Filtered"]}),Object(d.jsxs)("div",{className:"p-10",children:[s.length," Rows Selected"]}),Object(d.jsx)("div",{className:"p-10",children:Object(d.jsx)("div",{children:Object(d.jsxs)(O.a,{variant:"outlined",children:[Object(d.jsx)(b.a,{id:"driver-filter",children:"Select Driver"}),Object(d.jsxs)(h.a,{labelId:"driver-filter",style:{width:200},disabled:s.length<1,onChange:function(e){var r={order_ids:s.map((function(e){return e.order_id})),driver:e.target.value};Object(T.a)(r).then((function(e){Object(T.b)().then((function(e){var r=e.data;n(r)})),j([])}))},children:[Object(d.jsx)(v.a,{value:"",children:"None"}),i.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.name},"driver-".concat(e.id))}))]})]})})}),Object(d.jsx)("div",{className:"p-10",children:Object(d.jsx)(p.a,{startIcon:Object(d.jsx)(D.a,{}),color:"secondary",variant:"outlined",onClick:e.exportData,children:"Download Excel"})})]}),Object(d.jsx)(z,{customer:y,setSelectedCustomer:m}),Object(d.jsx)(I,{data:r,onSelectionChange:w,onRowSelect:g,deliveryBoys:t})]})}));r.default=Object(u.b)(Q)(V)}}]);
//# sourceMappingURL=12.f25a4746.chunk.js.map