(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[11],{111:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c}));var i=a(120),r=a.n(i),n="https://api.deliver.go4life.in/api";function s(){var t=document.cookie.split(";"),e={};return t.forEach((function(t){var a=t.split("=");e[a[0]]=a[1]})),e}s()["x-auth-token"];function c(t){return r.a.request(t)}!function(){var t,e=s()["x-auth-token"];e&&(t=e,r.a.defaults.headers.common["x-auth-token"]=t)}()},131:function(t,e,a){"use strict";var i=a(10),r=a(3),n=(a(0),a(275)),s=a(133),c=a.n(s),o=a(132),l=a.n(o);e.a=function(t){var e=t.left,a=t.onLeft,s=t.right,o=t.onRight,d=t.center,j=t.leftIcon,u=t.rightIcon,h=t.disabledLeft,b=void 0!==h&&h,m=t.disabledRight,f=void 0!==m&&m,p=t.style,x=void 0===p?{}:p,v=t.className,O=void 0===v?"":v;return Object(r.jsxs)("div",{className:"flex p-10 ".concat(O),style:Object(i.a)({justifyContent:"space-around"},x),children:[Object(r.jsx)("div",{children:e||Object(r.jsx)(n.a,{onClick:a,disabled:b,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:j||Object(r.jsx)(l.a,{})})}),Object(r.jsx)("div",{className:"flex center middle ",style:{flexGrow:.5,paddingRight:10,paddingLeft:10},children:d}),Object(r.jsx)("div",{children:s||Object(r.jsx)(n.a,{onClick:o,disabled:f,style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:u||Object(r.jsx)(c.a,{})})})]})}},148:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a(111),r=a(124),n=a.n(r);function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"a2",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n()().format("YYYY-MM-DD");e=n()(e).format("YYYY-MM-DD");var a="".concat(i.a,"/misc/getReport?report_date=").concat(e,"&type=").concat(t);return Object(i.b)({url:a,method:"get",headers:{"Content-Type":"application/json"}})}},220:function(t,e,a){},221:function(t,e,a){},302:function(t,e,a){"use strict";a.r(e);var i=a(94),r=a(95),n=a(97),s=a(96),c=a(3),o=a(0),l=a.p+"static/media/logo.06af865d.webp",d=a(210),j=a(274),u=a(275),h=a(133),b=a.n(h),m=a(132),f=a.n(m),p=a(281),x=a(283),v=a(148),O=a(217),Y=a.n(O),y=a(41),M=a(273),g=a(276),_=a(222),k=a(131),D=(a(220),a(57),a(221),function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).update=function(){var t=r.state,e=t.milk_type,a=t.report_date;r.setState({loading:!0}),Object(v.a)(e,a).then((function(t){r.state({report:t.data,loading:!1})})).catch((function(t){r.setState({error:t.response?t.response.data:"Some error occured",loading:!1})}))},r.gotoPreviousDay=function(){var t=r.state.report_date;r.setState({report_date:Y()(t).subtract(1,"day")},(function(){return r.update()}))},r.gotoNextDay=function(){var t=r.state.report_date;r.setState({report_date:Y()(t).add(1,"day")},(function(){return r.update()}))},r.state={report_date:Y()().format("YYYY-MM-DD"),milk_type:"a2",report:{aflatoxin:!1,antibiotics1:!1,antibiotics2:!1,antibiotics3:!1,bmc_dispatch:"2021-01-21T00:00:00.000Z",bmc_receive:"2021-01-21T00:00:00.000Z",fat:4,id:13,mbrt:40,milk_type:"a2",pdf_url:"https://saleor-go4life-production.s3.ap-south-1.amazonaws.com/milk-report/a2-2021-01-22.pdf",ph:7,plant_dispatch:"2021-01-21T00:00:00.000Z",plant_receive:"2021-01-21T00:00:00.000Z",report_date:"2021-01-22T00:00:00.000Z",snf:9,sodium_content:496,whs_dispatch:"2021-01-21T00:00:00.000Z",whs_receive:"2021-01-21T00:00:00.000Z"}},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.location.search,a=(e=new URLSearchParams(e)).get("milk_type")||"a2",i=e.get("report_date")||Y()().format("YYYY-MM-YY");this.setState({milk_type:a,report_date:i},(function(){return t.update()}))}},{key:"render",value:function(){var t=this.state,e=t.loading,a=t.report,i=t.report_date;t.milk_type,t.error;return Object(c.jsxs)(o.Fragment,{children:[Object(c.jsxs)("div",{id:"trace",className:"flex middle",children:[Object(c.jsx)("img",{src:l,alt:"logo",className:"logo",width:"20%",style:{maxWidth:140}}),Object(c.jsx)(M.a,{variant:"h5",children:"Trace Your Milk"})]}),Object(c.jsx)(j.a,{}),Object(c.jsxs)("div",{className:"flex middle",children:[Object(c.jsx)(k.a,{className:"middle",style:{flex:1},onLeft:this.gotoPreviousDay,left:Object(c.jsx)(u.a,{size:"small",onClick:this.gotoPreviousDay,disabled:Y()(i)<=Y()("2021-01-15").endOf("day"),style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:Object(c.jsx)(f.a,{})}),center:Object(c.jsx)(g.a,{variant:"outlined",fullWidth:!0,children:Y()(i).format("DD MMM YYYY")}),right:Object(c.jsx)(u.a,{size:"small",onClick:this.gotoNextDay,disabled:Y()(i)>=Y()().startOf("day"),style:{border:"1px solid rgba(0, 0, 0, 0.23)"},children:Object(c.jsx)(b.a,{})})}),Object(c.jsxs)("div",{class:"switch-field p-10",children:[Object(c.jsx)("input",{type:"radio",id:"radio-one",name:"switch-one",value:"yes",checked:!0}),Object(c.jsx)("label",{for:"radio-one",children:"A2"}),Object(c.jsx)("input",{type:"radio",id:"radio-two",name:"switch-one",value:"no"}),Object(c.jsx)("label",{for:"radio-two",children:"MIX"})]})]}),Object(c.jsx)(j.a,{}),e?Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{})}):Object(c.jsx)("div",{className:"p-10",children:Object(c.jsx)(N,{report:a})}),Object(c.jsx)(j.a,{}),e?Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{})}):Object(c.jsx)(w,{report:a})]})}}]),a}(o.Component));function w(t){var e=t.report;if(!e)return Object(c.jsx)(M.a,{children:"Sorry, we didn't find any report for that date."});var a=e.bmc_receive,i=e.bmc_dispatch,r=e.plant_receive,n=e.plant_dispatch,s=e.whs_receive,o=e.whs_dispatch;return Object(c.jsxs)("div",{style:{marginTop:10},children:[Object(c.jsx)("div",{className:"p-10",children:Object(c.jsx)(M.a,{variant:"h5",children:"Journey Your Milk Went On"})}),Object(c.jsxs)(d.Timeline,{children:[Object(c.jsx)(d.Event,{interval:Y()(a).format("DD MMM YYYY hh:mm A"),title:"BMC",subtitle:"Your milk arrived at the BMC."}),Object(c.jsx)(d.Event,{interval:Y()(i).format("DD MMM YYYY hh:mm A"),title:"BMC",subtitle:"Your milk left the BMC."}),Object(c.jsx)(d.Event,{interval:Y()(r).format("DD MMM YYYY hh:mm A"),title:"Plant",subtitle:"Your milk arrived at the Plant."}),Object(c.jsx)(d.Event,{interval:Y()(n).format("DD MMM YYYY hh:mm A"),title:"Plant",subtitle:"Your milk left the Plant."}),Object(c.jsx)(d.Event,{interval:Y()(s).format("DD MMM YYYY hh:mm A"),title:"Warehouse",subtitle:"Your milk arrived at the warehouse."}),Object(c.jsx)(d.Event,{interval:Y()(o).format("DD MMM YYYY hh:mm A"),title:"Warehouse",subtitle:"Your milk left the warehouse."})]})]})}function N(t){var e=t.report;if(!e)return Object(c.jsx)(M.a,{children:"Sorry, we didn't find any report for that date."});var a=e.fat,i=e.snf,r=e.ph,n=e.mbrt;return Object(c.jsx)("div",{children:Object(c.jsxs)(_.a,{container:!0,spacing:1,children:[Object(c.jsx)(_.a,{item:!0,xs:6,sm:6,children:Object(c.jsx)(T,{title:"FAT",value:a,subtitle:"Benefits",content:"Normal Amount",suffix:"%"})}),Object(c.jsx)(_.a,{item:!0,xs:6,sm:6,children:Object(c.jsx)(T,{title:"SNF",value:i,subtitle:"Benefits",content:"Normal Amount",suffix:"%"})}),Object(c.jsx)(_.a,{item:!0,xs:6,sm:6,children:Object(c.jsx)(T,{title:"PH",value:r,subtitle:"Harms",content:"Critical Amount",suffix:""})}),Object(c.jsx)(_.a,{item:!0,xs:6,sm:6,children:Object(c.jsx)(T,{title:"MBRT",value:n,subtitle:"Subtitle",content:"Normal Amount",suffix:"mins"})})]})})}function T(t){var e=t.title,a=t.value,i=t.suffix;t.subtitle,t.content;return Object(c.jsx)(p.a,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(M.a,{color:"textSecondary",gutterBottom:!0,children:e}),Object(c.jsxs)(M.a,{variant:"h5",component:"h2",children:[a," ",i]})]})})}e.default=D}}]);
//# sourceMappingURL=11.68aa05bb.chunk.js.map