(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[6],{228:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(165),i=a.n(n),c=a(167),s=a(126),l=a(168),r=a.n(l);function o(){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(i.a.mark((function e(){var t,a,n,c,l,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"a2",a=o.length>1&&void 0!==o[1]?o[1]:r()().format("YYYY-MM-DD"),n=r()(a).format("YYYY-MM-DD"),c="".concat(s.a,"/misc/getReport?report_date=").concat(n,"&type=").concat(t),e.next=6,Object(s.c)({url:c,method:"get",headers:{"Content-Type":"application/json"}});case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},569:function(e,t,a){"use strict";a.r(t);var n=a(105),i=a(106),c=a(107),s=a(108),l=a(2),r=a(552),o=a(0),d=a(39),h=a(228),j=a(164),m=a(25),u=a(235),b=a(534),p=a(572),x=a(554),f=a(189),O=a(231),g=a(535),v=a(69),C=a(232),y=a(575),M=a(438),Y=a.n(M),D=a(168),_=a.n(D),S=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t=new FormData(e.target);(0,i.props.onSubmit)(t)},i.onChange=function(e){i.setState(Object(m.a)({},e.target.name,e.target.value))},i.onDateTimeChange=function(e){i.setState(Object(m.a)({},e.target.name,e.target.value))},i.onFileChange=function(e){i.setState({pdf:e.target.value})},i.state={report_date:_()().format("YYYY-MM-DD"),milk_type:"a2",ph:7,snf:9,fat:4,sodium_content:496,mbrt:40,antibiotics1:!1,antibiotics2:!1,antibiotics3:!1,aflatoxin:!1,pdf:null,bmc_receive:_()().subtract(7,"hour").format("YYYY-MM-DDTHH:MM"),bmc_dispatch:_()().subtract(5,"hour").format("YYYY-MM-DDTHH:MM"),plant_receive:_()().subtract(4,"hour").format("YYYY-MM-DDTHH:MM"),plant_dispatch:_()().subtract(3,"hour").format("YYYY-MM-DDTHH:MM"),whs_receive:_()().subtract(1,"hour").format("YYYY-MM-DDTHH:MM"),whs_dispatch:_()().format("YYYY-MM-DDTHH:MM")},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.report_date,n=t.milk_type,i=t.ph,c=t.snf,s=t.fat,r=t.sodium_content,o=t.mbrt,d=t.antibiotics1,h=t.antibiotics2,j=t.antibiotics3,m=t.aflatoxin,M=t.bmc_receive,D=t.bmc_dispatch,_=t.plant_receive,S=t.plant_dispatch,T=t.whs_receive,k=t.whs_dispatch,W=t.pdf,H=this.props.loading,w=null;if(W){var q=W.split("\\");w=q[q.length-1]}return console.log(this.state),Object(l.jsx)("div",{id:"report-form",className:"flex column middle",children:Object(l.jsxs)("form",{id:"milk-report-form",onSubmit:this.onSubmit,children:[Object(l.jsxs)(u.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(b.a,{fullWidth:!0,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"Report Date *",type:"date",value:a,name:"report_date",onChange:this.onDateTimeChange})})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsxs)(b.a,{fullWidth:!0,children:[Object(l.jsx)(y.a,{id:"milk_type",children:"Milk Type *"}),Object(l.jsxs)(x.a,{labelId:"milk_type",fullWidth:!0,name:"milk_type",value:n,onChange:function(t){e.setState({milk_type:t.target.value})},children:[Object(l.jsx)(C.a,{value:"a2",children:"A2 Gable Top"}),Object(l.jsx)(C.a,{value:"a2-cow-toned",children:"A2 Cow Toned"}),Object(l.jsx)(C.a,{value:"buffalo-full",children:"Buffalo Full"}),Object(l.jsx)(C.a,{value:"toned",children:"Toned"}),Object(l.jsx)(C.a,{value:"double-toned",children:"Double Toned"})]})]})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"pH *",name:"ph",onChange:this.onChange,type:"number",value:i})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"FAT *",name:"fat",value:s,type:"number",onChange:this.onChange})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"SNF *",name:"snf",value:c,type:"number",onChange:this.onChange})})]}),Object(l.jsxs)(u.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"Sodium Content *",name:"sodium_content",value:r,type:"number",onChange:this.onChange})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:2,children:Object(l.jsx)(p.a,{fullWidth:!0,label:"MBRT *",name:"mbrt",type:"number",value:o,onChange:this.onChange})}),Object(l.jsxs)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"BMC Received"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:M,name:"bmc_receive"})]}),Object(l.jsxs)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"BMC Dispatched"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:D,name:"bmc_dispatch"})]})]}),Object(l.jsxs)(u.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsxs)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"Plant Received"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:_,name:"plant_receive"})]}),Object(l.jsxs)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"Plant Dispatched"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:S,name:"plant_dispatch"})]}),Object(l.jsxs)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"WHS Received"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:T,name:"whs_receive"})]}),Object(l.jsxs)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:[Object(l.jsx)(y.a,{className:"required",children:"WHS Dispatched"}),Object(l.jsx)(p.a,{fullWidth:!0,type:"datetime-local",required:!0,onChange:this.onDateTimeChange,value:k,name:"whs_dispatch"})]})]}),Object(l.jsxs)(u.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(f.a,{control:Object(l.jsx)(O.a,{disabled:!0,checked:d,onChange:function(t,a){return e.setState({antibiotics1:a})},color:"primary"}),label:"Antibiotics (B & T) *"})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(f.a,{control:Object(l.jsx)(O.a,{disabled:!0,checked:h,onChange:function(t,a){return e.setState({antibiotics2:a})},color:"primary"}),label:"Antibiotics (Chloramphenicol) *"})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(f.a,{control:Object(l.jsx)(O.a,{disabled:!0,checked:j,onChange:function(t,a){return e.setState({antibiotics3:a})},color:"primary"}),label:"Antibiotics (Sulphonamide) *"})}),Object(l.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,lg:3,children:Object(l.jsx)(f.a,{control:Object(l.jsx)(O.a,{disabled:!0,checked:m,onChange:function(t,a){return e.setState({aflatoxin:a})},color:"primary"}),label:"Aflatoxin M1 *"})})]}),Object(l.jsxs)(u.a,{container:!0,justify:"center",spacing:2,children:[Object(l.jsxs)(u.a,{item:!0,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"file",id:"milk-report-file-input",className:"file-input",name:"pdf",onChange:this.onChange}),Object(l.jsx)("label",{className:"file",htmlFor:"milk-report-file-input",children:Object(l.jsxs)("div",{className:"flex middle",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)(Y.a,{})}),"Upload Report"]})})]}),w]}),Object(l.jsx)(u.a,{item:!0,children:Object(l.jsx)(g.a,{type:"submit",color:"primary",variant:"contained",disabled:H,startIcon:H?Object(l.jsx)(v.a,{size:12}):null,children:"Submit"})}),Object(l.jsx)(u.a,{item:!0,children:Object(l.jsx)(g.a,{color:"primary",children:"Cancel"})})]})]})})}}]),a}(o.Component);var T=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onSubmit=function(e){i.setState({loading:!0}),Object(j.a)(e).then((function(e){console.log(e),i.setState({loading:!1}),alert("Done")})).catch((function(e){e.response&&400===e.response.status&&alert(e.response.data),console.log(e),i.setState({loading:!1})}))},i.state={report:null,loading:!1},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(h.a)().then((function(t){console.log(t.data),e.setState({report:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.loading;e.report;return Object(l.jsx)("div",{children:Object(l.jsx)(r.a,{m:1,children:Object(l.jsx)(S,{onSubmit:this.onSubmit,loading:t})})})}}]),a}(o.Component);t.default=Object(d.b)((function(e){return{}}))(T)}}]);
//# sourceMappingURL=AddReport.ba068300.chunk.js.map