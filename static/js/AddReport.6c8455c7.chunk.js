(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[9],{1006:function(e,t,a){"use strict";a.r(t);var n=a(158),i=a(160),c=a(162),r=a(163),l=a(2),s=a(913),o=a(0),d=a(29),h=a(208),u=a(243),j=a(62),m=a(286),b=a(963),p=a(1009),x=a(985),O=a(284),f=a(326),g=a(570),v=a(120),C=a(327),y=a(1012),M=a(400),D=a.n(M),Y=a(177),k=a.n(Y),_=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t=new FormData(e.target);(0,i.props.onSubmit)(t)},i.onChange=function(e){i.setState(Object(j.a)({},e.target.name,e.target.value))},i.onDateTimeChange=function(e){i.setState(Object(j.a)({},e.target.name,e.target.value))},i.onFileChange=function(e){i.setState({pdf:e.target.value})},i.state={report_date:k()().format("YYYY-MM-DD"),milk_type:"a2",ph:7,snf:9,fat:4,sodium_content:496,mbrt:40,antibiotics1:!1,antibiotics2:!1,antibiotics3:!1,aflatoxin:!1,pdf:null,bmc_receive:k()().subtract(7,"hour").format("YYYY-MM-DDTHH:MM"),bmc_dispatch:k()().subtract(5,"hour").format("YYYY-MM-DDTHH:MM"),plant_receive:k()().subtract(4,"hour").format("YYYY-MM-DDTHH:MM"),plant_dispatch:k()().subtract(3,"hour").format("YYYY-MM-DDTHH:MM"),whs_receive:k()().subtract(1,"hour").format("YYYY-MM-DDTHH:MM"),whs_dispatch:k()().format("YYYY-MM-DDTHH:MM")},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.report_date,n=t.milk_type,i=t.ph,c=t.snf,r=t.fat,s=t.sodium_content,o=t.mbrt,d=t.antibiotics1,h=t.antibiotics2,u=t.antibiotics3,j=t.aflatoxin,M=t.bmc_receive,Y=t.bmc_dispatch,k=t.plant_receive,_=t.plant_dispatch,S=t.whs_receive,T=t.whs_dispatch,w=t.pdf,W=this.props.loading,H=null;if(w){var N=w.split("\\");H=N[N.length-1]}return console.log(this.state),Object(l.jsx)("div",{id:"report-form",className:"flex column middle",children:Object(l.jsxs)("form",{id:"milk-report-form",onSubmit:this.onSubmit,children:[Object(l.jsxs)(m.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(b.a,{fullWidth:!0,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"Report Date *",type:"date",value:a,name:"report_date",onChange:this.onDateTimeChange})})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsxs)(b.a,{fullWidth:!0,children:[Object(l.jsx)(y.a,{id:"milk_type",children:"Milk Type *"}),Object(l.jsxs)(x.a,{labelId:"milk_type",fullWidth:!0,name:"milk_type",value:n,onChange:function(t){e.setState({milk_type:t.target.value})},children:[Object(l.jsx)(C.a,{value:"a2",children:"A2 Gable Top"}),Object(l.jsx)(C.a,{value:"a2-cow-toned",children:"A2 Cow Toned"}),Object(l.jsx)(C.a,{value:"toned-milk",style:{backgroundColor:"#2c90cf",color:"white"},children:"Toned Milk"}),Object(l.jsx)(C.a,{value:"full-cream-milk",style:{backgroundColor:"#c92029",color:"white"},children:"Full Cream Milk"}),Object(l.jsx)(C.a,{value:"double-toned-milk",style:{backgroundColor:"#7650a0",color:"white"},children:"Double Toned Milk"}),Object(l.jsx)(C.a,{value:"cow-milk",style:{backgroundColor:"#f277a0",color:"white"},children:"Cow Milk"}),Object(l.jsx)(C.a,{value:"dahi",children:"Dahi"}),Object(l.jsx)(C.a,{value:"dahi-lite",children:"Lite Dahi"}),Object(l.jsx)(C.a,{value:"Chach",children:"Chach"}),Object(l.jsx)(C.a,{value:"Chach-masala",children:"Chach Masala"})]})]})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"pH *",name:"ph",onChange:this.onChange,type:"number",value:i})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"FAT *",name:"fat",value:r,type:"number",onChange:this.onChange})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"SNF *",name:"snf",value:c,type:"number",onChange:this.onChange})})]}),Object(l.jsxs)(m.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"Sodium Content *",name:"sodium_content",value:s,type:"number",onChange:this.onChange})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"MBRT *",name:"mbrt",type:"number",value:o,onChange:this.onChange})}),Object(l.jsxs)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"BMC Received"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:M,name:"bmc_receive"})]}),Object(l.jsxs)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"BMC Dispatched"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:Y,name:"bmc_dispatch"})]})]}),Object(l.jsxs)(m.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsxs)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"Plant Received"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:k,name:"plant_receive"})]}),Object(l.jsxs)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"Plant Dispatched"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:_,name:"plant_dispatch"})]}),Object(l.jsxs)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"WHS Received"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:S,name:"whs_receive"})]}),Object(l.jsxs)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"WHS Dispatched"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:T,name:"whs_dispatch"})]})]}),Object(l.jsxs)(m.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(O.a,{control:Object(l.jsx)(f.a,{disabled:!0,checked:d,onChange:function(t,a){return e.setState({antibiotics1:a})},color:"primary"}),label:"Antibiotics (B & T) *"})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(O.a,{control:Object(l.jsx)(f.a,{disabled:!0,checked:h,onChange:function(t,a){return e.setState({antibiotics2:a})},color:"primary"}),label:"Antibiotics (Chloramphenicol) *"})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(O.a,{control:Object(l.jsx)(f.a,{disabled:!0,checked:u,onChange:function(t,a){return e.setState({antibiotics3:a})},color:"primary"}),label:"Antibiotics (Sulphonamide) *"})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(O.a,{control:Object(l.jsx)(f.a,{disabled:!0,checked:j,onChange:function(t,a){return e.setState({aflatoxin:a})},color:"primary"}),label:"Aflatoxin M1 *"})})]}),Object(l.jsxs)(m.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsxs)(m.a,{item:!0,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"file",id:"milk-report-file-input",className:"file-input",name:"pdf",onChange:this.onChange}),Object(l.jsx)("label",{className:"file",htmlFor:"milk-report-file-input",children:Object(l.jsxs)("div",{className:"flex middle",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)(D.a,{})}),"Upload Report"]})})]}),H]}),Object(l.jsx)(m.a,{item:!0,children:Object(l.jsx)(g.a,{type:"submit",color:"primary",variant:"contained",disabled:W,startIcon:W?Object(l.jsx)(v.a,{size:12}):null,children:"Submit"})}),Object(l.jsx)(m.a,{item:!0,children:Object(l.jsx)(g.a,{color:"primary",children:"Cancel"})})]})]})})}}]),a}(o.Component);var S=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onSubmit=function(e){i.setState({loading:!0}),Object(u.a)(e).then((function(e){console.log(e),i.setState({loading:!1}),alert("Done")})).catch((function(e){e.response&&400===e.response.status&&alert(e.response.data),console.log(e),i.setState({loading:!1})}))},i.state={report:null,loading:!1},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(h.d)().then((function(t){console.log(t.data),e.setState({report:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.loading;e.report;return Object(l.jsx)("div",{children:Object(l.jsx)(s.a,{m:1,children:Object(l.jsx)(_,{onSubmit:this.onSubmit,loading:t})})})}}]),a}(o.Component);t.default=Object(d.b)((function(e){return{}}))(S)},208:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return h})),a.d(t,"c",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(155),i=a.n(n),c=a(157),r=a(22),l=a(177),s=a.n(l);function o(){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(i.a.mark((function e(){var t,a,n,c,l,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"a2",a=o.length>1&&void 0!==o[1]?o[1]:s()().format("YYYY-MM-DD"),n=s()(a).format("YYYY-MM-DD"),c="".concat(r.a,"/misc/getReport?report_date=").concat(n,"&milk_type=").concat(t),e.next=6,Object(r.h)({url:c,method:"get",headers:{"Content-Type":"application/json"}});case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(r.a,"/misc/getBatchMilkReport?batchNo=").concat(t),e.abrupt("return",Object(r.d)(a));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=parseInt(e),e=btoa(e);var t="".concat(r.a,"/order/getMyOrderDetails?orderId=").concat(e);return Object(r.d)(t)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=parseInt(e),e=btoa(e);var t="".concat(r.a,"/order/getMyOrderItemDetails?orderId=").concat(e);return Object(r.d)(t)}}}]);