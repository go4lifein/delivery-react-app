(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[32],{192:function(e,t,a){"use strict";function c(e,t){return e<t?t:e}a.d(t,"a",(function(){return c}))},193:function(e,t,a){"use strict";var c=a(5),s=a(2),r=(a(0),a(533)),i=a(243),n=a.n(i),l=a(242),o=a.n(l);t.a=function(e){var t=e.left,a=e.onLeft,i=e.right,l=e.onRight,j=e.center,d=e.leftIcon,b=e.rightIcon,x=e.disabledLeft,h=void 0!==x&&x,O=e.disabledRight,v=void 0!==O&&O,p=e.style,u=void 0===p?{}:p,m=e.className,y=void 0===m?"":m,f=e.size,g=void 0===f?"large":f;return Object(s.jsxs)("div",{className:"flex p-10 middle ".concat(y),style:Object(c.a)({justifyContent:"space-around"},u),children:[Object(s.jsx)("div",{children:t||Object(s.jsx)(r.a,{size:g,onClick:a,disabled:h,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:d||Object(s.jsx)(o.a,{})})}),Object(s.jsx)("div",{className:"flex center middle",style:{flexGrow:.5,paddingRight:10,paddingLeft:10},children:j}),Object(s.jsx)("div",{children:i||Object(s.jsx)(r.a,{size:g,onClick:l,disabled:v,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:b||Object(s.jsx)(n.a,{})})})]})}},572:function(e,t,a){"use strict";a.r(t);var c=a(105),s=a(106),r=a(107),i=a(108),n=a(5),l=a(2),o=a(0),j=a.n(o),d=a(583),b=a(533),x=a(531),h=a(461),O=a.n(h),v=a(542),p=a(463),u=a.n(p),m=a(462),y=a.n(m),f=a(548),g=a(367),_=a(565),k=a(582),S=a(190),w=a(541),N=a(530),C=a(528),D=a(481),I=a(532),B=a(193),T=a(246),z=a.n(T),R=a(245),L=a.n(R),P=a(3),G=a(38),H=a(111),M=a(458),F=a.n(M),J=a(459),Y=a.n(J),q=a(460),A=a.n(q),E={facingMode:"environment"},K=function(e){var t=e.onCapture,a=e.image,c=j.a.useState(!a),s=Object(H.a)(c,2),r=s[0],i=s[1],n=j.a.useRef(null),o=j.a.useCallback((function(){var e=n.current.getScreenshot();t(e),i(!1)}),[n,t]);return Object(l.jsx)("div",{style:{background:"#000"},children:r?Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)(F.a,{audio:!1,width:282,height:500,ref:n,screenshotFormat:"image/jpeg",videoConstraints:E}),Object(l.jsx)("div",{style:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%"},children:Object(l.jsx)(b.a,{onClick:o,children:Object(l.jsx)(Y.a,{style:{color:"white"}})})})]}):Object(l.jsxs)("div",{style:{position:"relative"},children:[Object(l.jsx)("img",{src:a,alt:"order_photo",width:282}),Object(l.jsx)("div",{style:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%"},children:Object(l.jsx)(b.a,{onClick:function(){return i(!0)},children:Object(l.jsx)(A.a,{style:{color:"white"}})})})]})})},Q=a(244),U=a(192),V=a(68),W=a(536),X=a(221),Z=a(110);var $=function(e){var t=e.state,a=e.props,c=t.delivery_type,s=t.delivery_img,r=t.complete_delivery,i=t.milk_packets,n=t.small_boxes,j=t.large_boxes,d=t.gable_tops,b=(t.boxes,a.history),h=a.match,O=a.driver,p=h.params,u=parseInt(p.orderId),m=Object(o.useState)(!1),y=Object(H.a)(m,2),f=y[0],g=y[1],_=!0;return c&&s&&r&&(i||n||j||d)&&(_=!1),Object(l.jsxs)("div",{className:"pv-10",children:[Object(l.jsxs)(W.a,{variant:"outlined",children:[Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"}),Object(l.jsx)(x.a,{variant:"h6",children:function(e){switch(e){case"in_hand":return"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940";case"doorstep":return"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e";case"society_guard":return"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"tower_guard":return"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e";case"order_cancelled":return"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932";default:return Object(l.jsx)("span",{style:{color:"red"},children:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"})}}(c)})]}),Object(l.jsx)(I.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Take Photo - \u0906\u0930\u094d\u0921\u0930 \u0915\u0940 \u092b\u094b\u091f\u094b \u0932\u0940\u091c\u093f\u092f\u0947"}),s?Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"order",src:s,width:300})}):Object(l.jsx)(x.a,{variant:"h6",children:Object(l.jsx)("span",{style:{color:"red"},children:"Please take picture"})})]}),Object(l.jsx)(I.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"}),Object(l.jsx)(x.a,{variant:"h6",children:function(e){switch(e){case"yes":return"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e";case"no":return"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948";default:return Object(l.jsx)("span",{style:{color:"red"},children:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"})}}(r)})]}),Object(l.jsx)(I.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Small Boxes - \u0915\u093f\u0924\u0928\u0947 \u091b\u094b\u091f\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(l.jsx)(x.a,{variant:"h6",children:n})]}),Object(l.jsx)(I.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Large Boxes - \u0915\u093f\u0924\u0928\u0947 \u092c\u0921\u093c\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(l.jsx)(x.a,{variant:"h6",children:j})]}),Object(l.jsx)(I.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Gable Top - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(l.jsx)(x.a,{variant:"h6",children:d})]}),Object(l.jsx)(I.a,{}),Object(l.jsxs)("div",{className:"p-10",children:[Object(l.jsx)(x.a,{variant:"body",children:"Milk Packets - \u0915\u093f\u0924\u0928\u0947 \u0926\u0942\u0927 \u0915\u0947 \u092a\u0948\u0915\u0947\u091f \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"}),Object(l.jsx)(x.a,{variant:"h6",children:i})]})]}),Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsx)(v.a,{color:"primary",variant:"contained",onClick:function(){g(!0);var e=Object(Z.b)(s),t=new FormData;t.append("delivery_img",e),t.append("order_id",u),t.append("driver_id",O.id),t.append("delivery_type",c),t.append("complete_delivery",r),t.append("small_boxes",n),t.append("large_boxes",j),t.append("gable_tops",d),t.append("milk_packets",i),Object(X.c)(t).then((function(e){b.push("/"),g(!1)})).catch((function(e){g(!1),alert(e.message)}))},disabled:f||_,startIcon:f?Object(l.jsx)(V.a,{size:12}):null,children:"Submit"})})]})};var ee=[{label:"Select Delivery Type - \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0939\u093e\u0901 \u0915\u0930\u0940"},{label:"Take Photo - \u0906\u0930\u094d\u0921\u0930 \u0915\u0940 \u092b\u094b\u091f\u094b \u0932\u0940\u091c\u093f\u092f\u0947"},{label:"Complete Order Delivered? - \u0915\u094d\u092f\u093e \u0906\u092a\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e?"},{label:"Boxes, Milk - \u0915\u093f\u0924\u0928\u0947 \u0921\u092c\u094d\u092c\u0947 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u0930\u0947"},{label:"Review - \u0915\u0943\u092a\u092f\u093e \u091c\u093e\u0902\u091a\u0947\u0902"}],te=j.a.forwardRef((function(e,t){return Object(l.jsx)(g.a,Object(n.a)({direction:"up",ref:t},e))})),ae=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).handleNext=function(){s.setState((function(e){return{activeStep:e.activeStep+1}}))},s.handleBack=function(){s.setState((function(e){return{activeStep:e.activeStep-1}}))},s.DeliveryType=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(x.a,{variant:"h4"}),Object(l.jsx)(w.a,{component:"fieldset",children:Object(l.jsxs)(k.a,{"aria-label":"delivery type",name:"delivery_type",value:s.state.delivery_type,onChange:function(e){s.setState({delivery_type:e.target.value})},children:[Object(l.jsx)(S.a,{value:"in_hand",control:Object(l.jsx)(_.a,{}),label:"In Hand Delivery - \u0915\u0938\u094d\u091f\u092e\u0930 \u0915\u0947 \u0939\u093e\u0925 \u092e\u0947\u0902 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0915\u0940"}),Object(l.jsx)(S.a,{value:"doorstep",control:Object(l.jsx)(_.a,{}),label:"Doorstep Delivery - \u0918\u0930 \u0915\u0947 \u0917\u0947\u091f \u0915\u0947 \u092c\u0939\u093e\u0930 \u0906\u0930\u094d\u0921\u0930 \u0930\u0916\u093e"}),Object(l.jsx)(S.a,{value:"society_guard",control:Object(l.jsx)(_.a,{}),label:"Handed over to society guard - \u0938\u094b\u0938\u093e\u0907\u091f\u0940 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e"}),Object(l.jsx)(S.a,{value:"tower_guard",control:Object(l.jsx)(_.a,{}),label:"Handed over to tower guard - \u091f\u093e\u0935\u0930 \u0917\u093e\u0930\u094d\u0921 \u0915\u0947 \u092a\u093e\u0938 \u0906\u0930\u094d\u0921\u0930 \u091b\u094b\u095c\u093e"}),Object(l.jsx)(S.a,{value:"order_cancelled",control:Object(l.jsx)(_.a,{}),label:"Order Cancelled - \u0906\u0930\u094d\u0921\u0930 \u0915\u0948\u0902\u0938\u093f\u0932"})]})})]})},s.DeliveryPhoto=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(x.a,{variant:"h4"}),Object(l.jsx)("div",{className:"flex center",children:Object(l.jsx)(K,{onCapture:function(e){s.setState({delivery_img:e})},image:s.state.delivery_img})})]})},s.CompleteDelivery=function(){return Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsx)(w.a,{component:"fieldset",children:Object(l.jsxs)(k.a,{"aria-label":"complete delivery",name:"complete_delivery",value:s.state.complete_delivery,onChange:function(e){s.setState({complete_delivery:e.target.value})},children:[Object(l.jsx)(S.a,{value:"yes",control:Object(l.jsx)(_.a,{}),label:"Yes - \u0939\u093e\u0901, \u092e\u0948\u0902\u0928\u0947 \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0915\u093f\u092f\u093e"}),Object(l.jsx)(S.a,{value:"no",control:Object(l.jsx)(_.a,{}),label:"No - \u0928\u0939\u0940\u0902,  \u092a\u0942\u0930\u093e \u0906\u0930\u094d\u0921\u0930 \u0921\u093f\u0932\u0940\u0935\u0930 \u0928\u0939\u0940\u0902 \u0939\u0941\u0906 \u0939\u0948"})]})})})},s.BoxNumbers=function(){var e=s.state,t=e.small_boxes,a=e.large_boxes,c=e.gable_tops,r=e.milk_packets;return Object(l.jsx)("div",{className:"pv-10",children:Object(l.jsxs)(Q.a,{container:!0,children:[Object(l.jsx)(Q.a,{item:!0,xs:12,children:Object(l.jsxs)(D.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"Small Boxes"}),Object(l.jsx)(B.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:t}),leftIcon:Object(l.jsx)(L.a,{}),rightIcon:Object(l.jsx)(z.a,{}),onRight:function(){s.setState({small_boxes:t+1})},onLeft:function(){s.setState({small_boxes:Object(U.a)(0,t-1)})}})]})}),Object(l.jsx)(Q.a,{item:!0,xs:12,children:Object(l.jsxs)(D.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"Large Boxes"}),Object(l.jsx)(B.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:a}),leftIcon:Object(l.jsx)(L.a,{}),rightIcon:Object(l.jsx)(z.a,{}),onRight:function(){s.setState({large_boxes:a+1})},onLeft:function(){s.setState({large_boxes:Object(U.a)(0,a-1)})}})]})}),Object(l.jsx)(Q.a,{item:!0,xs:12,children:Object(l.jsxs)(D.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"Gable Top"}),Object(l.jsx)(B.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:c}),leftIcon:Object(l.jsx)(L.a,{}),rightIcon:Object(l.jsx)(z.a,{}),onRight:function(){s.setState({gable_tops:c+1})},onLeft:function(){s.setState({gable_tops:Object(U.a)(0,c-1)})}})]})}),Object(l.jsx)(Q.a,{item:!0,xs:12,children:Object(l.jsxs)(D.a,{className:"flex middle space-bw",children:[Object(l.jsx)(x.a,{variant:"h6",children:"Milk Packets"}),Object(l.jsx)(B.a,{size:"small",style:{flexGrow:.2},center:Object(l.jsx)(x.a,{variant:"h6",children:r}),leftIcon:Object(l.jsx)(L.a,{}),rightIcon:Object(l.jsx)(z.a,{}),onRight:function(){s.setState({milk_packets:r+1})},onLeft:function(){s.setState({milk_packets:Object(U.a)(0,r-1)})}})]})})]})})},s.state={activeStep:0,delivery_type:null,delivery_img:null,complete_delivery:null,milk_packets:0,small_boxes:0,large_boxes:0,gable_tops:0,crates:0},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.match,c=e.orders,s=(e.customers,a.params),r=parseInt(s.orderId);c||(window.location="/"),console.log(c);var i=c.find((function(e){return Number(e.orderId)===r}));if(console.log(i),!i)return Object(l.jsx)(x.a,{variant:"h4",children:"No such order"});i.address,i.area,i.phone,i.orderId,i.region;var n=i.name,o=(i.subarea,i.region_id,i.customerID,i.driverId,i.location_id,i.orderDate,this.state.activeStep),j=ee.length;return Object(l.jsx)("div",{children:Object(l.jsxs)(f.a,{fullScreen:!0,open:!0,TransitionComponent:te,children:[Object(l.jsx)(C.a,{position:"fixed",color:"default",children:Object(l.jsxs)(N.a,{children:[Object(l.jsx)(b.a,{edge:"start",color:"inherit",onClick:function(){t.goBack()},"aria-label":"close",children:Object(l.jsx)(O.a,{})}),Object(l.jsx)(x.a,{variant:"h6",children:n})]})}),Object(l.jsxs)("div",{style:{margin:"60px 10px 20px 10px",padding:"10px 10px"},children:[Object(l.jsx)(x.a,{variant:"h4",children:ee[o].label}),Object(l.jsx)(I.a,{}),0===o&&Object(l.jsx)(this.DeliveryType,{}),1===o&&Object(l.jsx)(this.DeliveryPhoto,{}),2===o&&Object(l.jsx)(this.CompleteDelivery,{}),3===o&&Object(l.jsx)(this.BoxNumbers,{}),4===o&&Object(l.jsx)($,{state:this.state,props:this.props})]}),Object(l.jsx)(d.a,{style:{borderTop:"1px solid grey"},steps:j,position:"bottom",variant:"progress",activeStep:o,color:"default",nextButton:Object(l.jsxs)(v.a,{size:"small",color:"primary",variant:"outlined",onClick:this.handleNext,disabled:o===j-1,children:["Next",Object(l.jsx)(y.a,{})]}),backButton:Object(l.jsxs)(v.a,{size:"small",color:"primary",variant:"outlined",onClick:this.handleBack,disabled:0===o,children:[Object(l.jsx)(u.a,{}),"Previous"]})})]})})}}]),a}(j.a.Component);t.default=Object(P.f)(Object(G.b)((function(e){var t=e.setDriver;return Object(n.a)({},t)}))(ae))}}]);
//# sourceMappingURL=32.0b2a6d6a.chunk.js.map