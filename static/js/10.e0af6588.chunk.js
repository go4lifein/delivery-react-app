(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[10],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var r=a(104),n=a.n(r),c="https://go4life-deliver.herokuapp.com/api";function i(){var e=document.cookie.split(";"),t={};return e.forEach((function(e){var a=e.split("=");t[a[0]]=a[1]})),t}i()["x-auth-token"];function s(e){return n.a.request(e)}!function(){var e,t=i()["x-auth-token"];t&&(e=t,n.a.defaults.headers.common["x-auth-token"]=e)}()},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var r=a(103),n=a(104);function c(e){var t="".concat(r.a,"/driver/").concat(e,"/getMyOrders");return Object(r.b)({url:t,method:"get",headers:{"Content-Type":"application/json"}})}function i(e){var t="".concat(r.a,"/driver/submitOrderDelivery");return Object(n.post)(t,e,{headers:{"content-type":"multipart/form-data"}})}},239:function(e,t,a){"use strict";a.r(t);var r=a(92),n=a(93),c=a(95),i=a(94),s=a(10),l=a(4),o=a(0),d=a.n(o),j=a(246),u=a(245),b=a(177),v=a(216),p=a(182),h=a.n(p),x=a(217),O=a(184),y=a.n(O),m=a(183),f=a.n(m),k=a(236),g=a(229),_=a(233),C=a(244),w=a(176),D=a(224),S=a(215),N=a(213),B=a(219),P=a(218),T=a(2),H=a(38),I=a(43),M=a(178),R=a.n(M),A=a(179),z=a.n(A),F=a(181),J=a.n(F),L={facingMode:"user"},Y=function(e){var t=e.onCapture,a=e.image,r=d.a.useState(!a),n=Object(I.a)(r,2),c=n[0],i=n[1],s=d.a.useRef(null),o=d.a.useCallback((function(){var e=s.current.getScreenshot();t(e),i(!1)}),[s,t]);return Object(l.jsx)("div",{style:{background:"#000"},children:c?Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)(R.a,{audio:!1,width:282,height:500,ref:s,screenshotFormat:"image/jpeg",videoConstraints:L}),Object(l.jsx)("div",{style:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%"},children:Object(l.jsx)(b.a,{onClick:o,children:Object(l.jsx)(z.a,{style:{color:"white"}})})})]}):Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("img",{src:a,alt:"order_photo",width:282}),Object(l.jsx)("div",{style:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%"},children:Object(l.jsx)(b.a,{onClick:function(){return i(!0)},children:Object(l.jsx)(J.a,{style:{color:"white"}})})})]})})},q=a(128);var E=[{label:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"},{label:"Take Photo - \u0906\u0930\u094d\u0921\u0930 \u0915\u0940 \u092b\u094b\u091f\u094b \u0932\u0940\u091c\u093f\u092f\u0947"},{label:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"},{label:"Boxes - \u0915\u093f\u0924\u0928\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"},{label:"Milk Packets - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u092a\u0948\u0915\u0947\u091f \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"},{label:"Review - \u0915\u0943\u092a\u092f\u093e \u091c\u093e\u0902\u091a\u0947\u0902"}],U=d.a.forwardRef((function(e,t){return Object(l.jsx)(g.a,Object(s.a)({direction:"up",ref:t},e))}));var V=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleNext=function(){n.setState((function(e){return{activeStep:e.activeStep+1}}))},n.handleBack=function(){n.setState((function(e){return{activeStep:e.activeStep-1}}))},n.DeliveryType=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v.a,{variant:"h4"}),Object(l.jsx)(D.a,{component:"fieldset",children:Object(l.jsxs)(C.a,{"aria-label":"delivery type",name:"delivery_type",value:n.state.delivery_type,onChange:function(e){n.setState({delivery_type:e.target.value})},children:[Object(l.jsx)(w.a,{value:"in_hand",control:Object(l.jsx)(_.a,{}),label:"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940"}),Object(l.jsx)(w.a,{value:"doorstep",control:Object(l.jsx)(_.a,{}),label:"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e"}),Object(l.jsx)(w.a,{value:"society_guard",control:Object(l.jsx)(_.a,{}),label:"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e"}),Object(l.jsx)(w.a,{value:"tower_guard",control:Object(l.jsx)(_.a,{}),label:"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e"}),Object(l.jsx)(w.a,{value:"order_cancelled",control:Object(l.jsx)(_.a,{}),label:"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932"})]})})]})},n.DeliveryPhoto=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v.a,{variant:"h4"}),Object(l.jsx)("div",{className:"flex center",children:Object(l.jsx)(Y,{onCapture:function(e){n.setState({delivery_img:e})},image:n.state.delivery_img})})]})},n.CompleteDelivery=function(){return Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsx)(D.a,{component:"fieldset",children:Object(l.jsxs)(C.a,{"aria-label":"complete delivery",name:"complete_delivery",value:n.state.complete_delivery,onChange:function(e){n.setState({complete_delivery:e.target.value})},children:[Object(l.jsx)(w.a,{value:"yes",control:Object(l.jsx)(_.a,{}),label:"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e"}),Object(l.jsx)(w.a,{value:"no",control:Object(l.jsx)(_.a,{}),label:"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948"})]})})})},n.BoxNumbers=function(){return Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsx)(u.a,{valueLabelDisplay:"auto",step:1,marks:!0,min:0,max:12,value:n.state.boxes,onChangeCommitted:function(e,t){n.setState({boxes:t})}})})},n.MilkPackets=function(){return Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsx)(u.a,{defaultValue:0,valueLabelDisplay:"auto",step:1,marks:!0,min:0,value:n.state.milk_packets,onChangeCommitted:function(e,t){n.setState({milk_packets:t})},max:12})})},n.Review=function(){var e=n.state,t=e.delivery_type,a=e.delivery_img,r=e.complete_delivery,c=e.boxes,i=e.milk_packets,s=n.props,o=s.history,d=s.match,j=s.driver,u=d.params,b=parseInt(u.orderId);return Object(l.jsxs)("div",{className:"pv-10",children:[Object(l.jsxs)(B.a,{variant:"outlined",children:[Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(v.a,{variant:"body",children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"}),Object(l.jsx)(v.a,{variant:"h6",children:function(e){switch(e){case"in_hand":return"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940";case"doorstep":return"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e";case"society_guard":return"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"tower_guard":return"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"order_cancelled":return"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932";default:return Object(l.jsx)("span",{style:{color:"red"},children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"})}}(t)})]}),Object(l.jsx)(P.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(v.a,{variant:"body",children:"Take Photo - \u0906\u0930\u094d\u0921\u0930 \u0915\u0940 \u092b\u094b\u091f\u094b \u0932\u0940\u091c\u093f\u092f\u0947"}),a?Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"order",src:a,width:300})}):Object(l.jsx)(v.a,{variant:"h6",children:Object(l.jsx)("span",{style:{color:"red"},children:"Please take picture"})})]}),Object(l.jsx)(P.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(v.a,{variant:"body",children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"}),Object(l.jsx)(v.a,{variant:"h6",children:function(e){switch(e){case"yes":return"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e";case"no":return"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948";default:return Object(l.jsx)("span",{style:{color:"red"},children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"})}}(r)})]}),Object(l.jsx)(P.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(v.a,{variant:"body",children:"Boxes - \u0915\u093f\u0924\u0928\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(l.jsx)(v.a,{variant:"h6",children:c})]}),Object(l.jsx)(P.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(v.a,{variant:"body",children:"Milk Packets - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u092a\u0948\u0915\u0947\u091f \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(l.jsx)(v.a,{variant:"h6",children:i})]})]}),Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsx)(x.a,{onClick:function(){var e=function(e){for(var t=atob(e.split(",")[1]),a=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),n=new Uint8Array(r),c=0;c<t.length;c++)n[c]=t.charCodeAt(c);return new Blob([r],{type:a})}(a),n=new FormData;n.append("delivery_img",e),n.append("order_id",b),n.append("driver_id",j.id),n.append("delivery_type",t),n.append("complete_delivery",r),n.append("boxes",c),n.append("milk_packets",i),Object(q.b)(n).then((function(e){o.push("/")})).catch((function(e){alert(e.message)}))},children:"Submit"})})]})},n.state={activeStep:0,delivery_type:null,delivery_img:null,complete_delivery:null,milk_packets:0,boxes:0},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.match,r=e.orders,n=e.customers,c=a.params,i=parseInt(c.orderId);r||(window.location="/");var s=r.find((function(e){return e.order_id===i})),o=n.get(s.customer_id);o||(console.log(s),window.location="/");var d=this.state.activeStep;return Object(l.jsx)("div",{children:Object(l.jsxs)(k.a,{fullScreen:!0,open:!0,TransitionComponent:U,children:[Object(l.jsx)(N.a,{position:"fixed",color:"default",children:Object(l.jsxs)(S.a,{children:[Object(l.jsx)(b.a,{edge:"start",color:"inherit",onClick:function(){t.goBack()},"aria-label":"close",children:Object(l.jsx)(h.a,{})}),Object(l.jsx)(v.a,{variant:"h6",children:o.name})]})}),Object(l.jsxs)("div",{style:{marginTop:60,padding:10},children:[Object(l.jsx)(v.a,{variant:"h4",children:E[d].label}),Object(l.jsx)(P.a,{}),0===d&&Object(l.jsx)(this.DeliveryType,{}),1===d&&Object(l.jsx)(this.DeliveryPhoto,{}),2===d&&Object(l.jsx)(this.CompleteDelivery,{}),3===d&&Object(l.jsx)(this.BoxNumbers,{}),4===d&&Object(l.jsx)(this.MilkPackets,{}),5===d&&Object(l.jsx)(this.Review,{})]}),Object(l.jsx)(j.a,{steps:6,position:"bottom",variant:"progress",activeStep:d,color:"default",nextButton:Object(l.jsxs)(x.a,{size:"small",onClick:this.handleNext,disabled:5===d,children:["Next",Object(l.jsx)(f.a,{})]}),backButton:Object(l.jsxs)(x.a,{size:"small",onClick:this.handleBack,disabled:0===d,children:[Object(l.jsx)(y.a,{}),"Previous"]})})]})})}}]),a}(d.a.Component);t.default=Object(T.f)(Object(H.b)((function(e){var t=e.setDriver;return Object(s.a)({},t)}))(V))}}]);
//# sourceMappingURL=10.e0af6588.chunk.js.map