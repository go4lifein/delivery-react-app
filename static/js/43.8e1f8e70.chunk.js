(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[43],{605:function(e,t,r){"use strict";r.r(t);var a=r(153),n=r(154),c=r(155),i=r(156),l=r(5),s=r(2),d=r(0),o=r.n(d),u=r(53),j=r(582),h=r(609),b=r(249),f=r(565),O=r(232),v=r(248),x=r(233),p=r(606),m=r(566),g=r(54),y=r(279),S=r(278),C=r(4),D=r(485),w=r.n(D),A=r(560),I=r(561),W=r(562),k=r(554);var H=o.a.memo(Object(C.f)((function(e){var t=e.data,r=e.history;return Object(s.jsx)("div",{id:"order cards",children:t.map((function(e){var t=e.address,a=e.area,n=e.phone,c=e.orderId,i=e.region,l=e.name,d=e.subarea;e.region_id,e.customerID,e.driverId,e.location_id,e.orderDate;return Object(s.jsxs)(A.a,{style:{margin:10},children:[Object(s.jsx)(I.a,{onClick:function(){e.deliveryId?alert("Already delivered"):r.push("/".concat(c,"/deliver"))},title:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"flex middle",children:Object(s.jsx)("div",{style:{marginLeft:10},children:l})})})}),Object(s.jsx)(k.a,{}),Object(s.jsxs)(W.a,{children:[Object(s.jsx)("div",{style:{paddingTop:10,paddingBottom:10},children:Object(s.jsxs)("a",{href:"tel:+91".concat(n),className:"flex middle",children:[Object(s.jsx)(w.a,{})," ",n]})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Address"})," ",t,", ",d,", ",a,", ",i]})]})]},c.toString())}))})})));var N=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={phone:"",selectedArea:[],selectedSubarea:[],selectedHub:"",showDelivered:!1},e}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onUpdateOrdersData,r=e.driver;Object(y.a)(r.id).then((function(e){t(e.data)}))}},{key:"filterData",value:function(){var e=this.state,t=e.selectedSubarea,r=e.selectedArea,a=e.selectedHub,n=e.phone,c=this.props.orders,i=[];return c&&(i=c.filter((function(e){return(!a||e.region===a)&&(!(r.length&&!r.includes(e.area))&&(!(t.length&&!t.includes(e.subarea))&&(!n||(-1!==e.phone.indexOf(n)||(-1!==e.name.toLowerCase().indexOf(n.toLowerCase())||-1!==e.orderId.toString().indexOf(n.toLowerCase()))))))}))),i}},{key:"render",value:function(){var e=this,t=!0,r=[],a=this.state,n=a.selectedArea,c=a.selectedHub,i=a.selectedSubarea,l=a.phone,d=a.showDelivered,o=this.props,u=o.orders,y=o.locations,S=o.hubs,C=[],D=[];return y&&y.forEach((function(e,t){e.forEach((function(e,r){c===t&&C.push(r),(n.includes(r)||0===n.length)&&(D=D.concat(e))}))})),C=C.sort((function(e,t){return e.localeCompare(t)})),D=D.sort((function(e,t){return e.localeCompare(t)})),u&&(t=!1,r=(r=this.filterData()).filter((function(e){return d?!!e.deliveryId:!e.deliveryId}))),r=r.sort((function(e,t){return e.location_id-t.location_id})),Object(s.jsx)("div",{children:t?Object(s.jsx)(g.a,{}):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"flex middle",style:{padding:10},children:Object(s.jsxs)(x.a,{container:!0,spacing:2,children:[Object(s.jsx)(x.a,{item:!0,xs:6,children:Object(s.jsx)(p.a,{fullWidth:!0,value:l,label:"Phone or Name",onChange:function(t){return e.setState({phone:t.target.value})}})}),Object(s.jsx)(x.a,{item:!0,xs:6,children:Object(s.jsxs)(f.a,{fullWidth:!0,children:[Object(s.jsx)(h.a,{id:"hub-filter",children:"Hub"}),Object(s.jsx)(j.a,{fullWidth:!0,labelId:"hub-filter",value:c,onChange:function(t){var r=t.target.value;e.setState({selectedHub:r,selectedArea:[],selectedSubarea:[]})},children:S.map((function(e){return Object(s.jsx)(b.a,{value:e,children:e},e)}))})]})})]})}),Object(s.jsx)("div",{className:"flex middle",style:{padding:10},children:Object(s.jsxs)(x.a,{container:!0,spacing:2,children:[Object(s.jsx)(x.a,{item:!0,xs:6,children:Object(s.jsxs)(f.a,{fullWidth:!0,children:[Object(s.jsx)(h.a,{id:"area-filter",children:"Area"}),Object(s.jsx)(j.a,{labelId:"area-filter",fullWidth:!0,value:n,onChange:function(t){var r=t.target.value;e.setState({selectedArea:r,selectedSubarea:[]})},children:C.map((function(e){return Object(s.jsx)(b.a,{value:e,children:e},e)}))})]})}),Object(s.jsx)(x.a,{item:!0,xs:6,children:Object(s.jsxs)(f.a,{fullWidth:!0,children:[Object(s.jsx)(h.a,{id:"subarea-filter",children:"Subareas"}),Object(s.jsx)(j.a,{labelId:"subarea-filter",fullWidth:!0,value:i,onChange:function(t,r){var a=t.target.value;e.setState({selectedSubarea:a})},children:D.map((function(e){return Object(s.jsx)(b.a,{value:e,children:e},e)}))})]})})]})}),Object(s.jsxs)("div",{className:"flex space-bw",style:{padding:10},children:[Object(s.jsx)("div",{children:Object(s.jsx)(O.a,{control:Object(s.jsx)(v.a,{checked:d,onChange:function(t,r){return e.setState({showDelivered:r})},color:"primary"}),label:"Delivered"})}),Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{color:"primary",onClick:function(){e.setState({phone:"",selectedArea:"all",selectedSubarea:"all",selectedHub:"all",selectedDriver:"all",showWithoutDairy:!1})},children:"Clear All Filters"})})]}),Object(s.jsx)(H,{data:r})]})})}}]),r}(d.Component);t.default=Object(u.b)((function(e){var t=e.setDriver;return Object(l.a)({},t)}),(function(e){return{onUpdateOrdersData:function(t){return e(Object(S.b)(t))}}}))(N)}}]);