(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[31],{229:function(n,t,e){"use strict";t.a={POUCH_MILK_EXPIRY_DAYS_DIFF:2}},259:function(n,t,e){"use strict";function i(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e.d(t,"a",(function(){return i}))},281:function(n,t){},319:function(n,t){},320:function(n,t){},321:function(n,t){},322:function(n,t){},323:function(n,t){},881:function(n,t,e){},882:function(n,t,e){},998:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return ct}));var i=e(159),r=e(155),a=e.n(r),c=e(156),o=e(26),d=e(259),s=e(2),u=e(158),l=e(0),h=e(30),f=e.n(h),p="https://api.deliver.go4life.in/api";function j(n){return f.a.request(n)}var x=e(170),m=e.n(x);function g(){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function n(){var t,e,i,r,c,o=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"a2",e=o.length>1&&void 0!==o[1]?o[1]:m.a.format("YYYY-MM-DD"),i=m()(e).format("YYYY-MM-DD"),r="".concat(p,"/misc/getReport?report_date=").concat(i,"&milk_type=").concat(t),n.next=6,j({url:r,method:"get",headers:{"Content-Type":"application/json"}});case 6:return c=n.sent,n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}e(881);var O=e(5),v=e(342),w=e(215),k=e.n(w),y=e(180);e(340);function C(n){var t=n.r,e=new google.maps.DirectionsService,i=Object(l.useState)(null),r=Object(o.a)(i,2),a=r[0],c=r[1],d=t.origin,u=t.destination,h=t.startIcon,f=t.endIcon;return Object(l.useEffect)((function(){e.route({origin:d,destination:u,travelMode:google.maps.TravelMode.DRIVING},(function(n,t){t===google.maps.DirectionsStatus.OK?c(n):console.error("error fetching directions ".concat(n))}))}),[]),Object(s.jsx)("section",{className:"googleMap",children:Object(s.jsx)(y.GoogleMap,{defaultZoom:14,defaultCenter:{lat:27.93415776638459,lng:76.85305579301976},children:a&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(y.Marker,{position:d,icon:{url:h,scaledSize:{width:40,height:40}}}),Object(s.jsx)(y.Marker,{position:u,icon:{url:f,scaledSize:{width:40,height:40}}}),Object(s.jsx)(y.DirectionsRenderer,{directions:a,options:{suppressMarkers:!0,polylineOptions:{strokeColor:t.color,strokeOpacity:1,strokeWeight:4}}})]})})})}function M(){var n=Object(i.a)(["\n  width: 50vw;\n  height: 22vh;\n  position:absolute;\n  margin-top:1%;\n  margin-left:-25%;\n  @media (max-width:1500px)\n  {\n    height:26vh;\n  }\n  @media (max-width:800px)\n  {\n    margin-top:1%;\n    height: 28vh;\n  }\n  @media (max-width:500px)\n  {\n    margin-top:1%;\n    height:15vh;\n  \n  }\n  @media (max-width:340px)\n  {\n    height:15vh;\n  }\n"]);return M=function(){return n},n}function S(n){var t=n.r,e=Object(y.withScriptjs)(Object(y.withGoogleMap)(C));return Object(s.jsx)(e,{r:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=".concat("AIzaSyAwNxCHwaidii9FbS6CkBC_nch1KPXLXv0"),loadingElement:Object(s.jsx)("div",{style:{height:"100%"}}),containerElement:Object(s.jsx)(z,{}),mapElement:Object(s.jsx)("div",{style:{height:"100%"}})})}var z=u.default.div(M()),D=e.p+"static/media/bmc.59757a69.png",F=e.p+"static/media/plant.411f5d30.png",Y=e.p+"static/media/warehouse.6aa560b1.png";function _(){var n=Object(i.a)(["\n    transform:",";\n"]);return _=function(){return n},n}function I(){var n=Object(i.a)([""]);return I=function(){return n},n}function R(){var n=Object(i.a)(["\n    transition:all 0.8s ease-in;\n    text-align:justify;\n    font-size:14px;\n    @media (max-width:800px){\n        font-size:10px;\n    }\n    @media (max-width:500px){\n        font-size:9px;\n    }\n    @media (max-width:400px){\n        font-size:8px;\n    }\n    \n"]);return R=function(){return n},n}function E(){var n=Object(i.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n    align-items:center;\n    width:100%;\n    font-weight:600;\n    margin-top:-1%;\n    letter-spacing:0.5px;\n    cursor:pointer;\n    @media (max-width:500px){\n        font-size:12px;\n    }\n    @media (max-width:400px){\n        font-size:11px;\n    }\n    \n"]);return E=function(){return n},n}function P(){var n=Object(i.a)(["\n    width:80%;\n    height: ",";\n    background:",";\n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:3% 5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    @media (max-width:800px){\n        height: ",";\n    }\n    @media (max-width:500px)\n    {\n        height: ",";\n    }\n\n"]);return P=function(){return n},n}function A(){var n=Object(i.a)(["\n    width:80%;\n    height: ",";\n    background:",";\n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:3% 5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    \n    @media (max-width:500px)\n    {\n        height: ",";\n    }\n\n"]);return A=function(){return n},n}function T(){var n=Object(i.a)(["\n    width:80%;\n    height: ",";\n    background:",";   \n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    @media (width:768px){\n        height:",";\n    }\n    @media (max-width:500px){\n        height: ",";\n    }\n    @media (max-width:330px){\n\n    }\n\n"]);return T=function(){return n},n}function N(){var n=Object(i.a)(["\n    width:2px;\n    height: ",";\n    background:gainsboro;\n    transition:all 0.5s;\n\n"]);return N=function(){return n},n}function B(){var n=Object(i.a)(["\n    width: 2px ;\n    height : ",";\n    background: gainsboro;\n    transition:all 0.5s;\n    @media (max-width:500px){\n        height: ",";\n    }\n"]);return B=function(){return n},n}function G(){var n=Object(i.a)(["\n    width: 20px ;\n    border-radius:50px; \n    height: 20px; \n    background : ",";\n   \n"]);return G=function(){return n},n}function L(){var n=Object(i.a)(["\n    font-weight:400 ;\n    color : gray;\n    font-size:10px;\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"]);return L=function(){return n},n}function H(){var n=Object(i.a)(["\n    font-weight: 400; \n    font-size: 12px;\n    margin-top:-2%;\n    @media (max-width : 500px) {\n        font-size: 8px;\n    }\n"]);return H=function(){return n},n}function K(){var n=Object(i.a)(["\n    font-weight: 400; \n    font-size: 12px;\n    margin-top:-2%;\n    @media (max-width : 500px) {\n        font-size: 8px;\n    }\n"]);return K=function(){return n},n}function U(){var n=Object(i.a)(["\n    display:flex; \n    flex-direction :column; \n    width: 70% ;\n    margin-left:-6%;\n    justify-content:space-around;\n\n    @media (max-width:500px){\n        justify-content:space-evenly;\n    }\n    \n\n"]);return U=function(){return n},n}function X(){var n=Object(i.a)(["\n    display:flex;\n    flex-direction :column ; \n    width : 20% ; \n    align-items: center;\n    justify-content:center;\n    line-height:1;\n   \n    \n"]);return X=function(){return n},n}function W(){var n=Object(i.a)(["\n    width:100%; \n    display: flex ; \n    flex-direction : row ;\n    justify-content: space-evenly;\n    padding-top:5%;\n    margin-top:-0.8%;\n    background:rgb(245,245,245);\n    \n    transition:all 0.5s;\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return W=function(){return n},n}var J={origin:{lat:28.91536608519116,lng:76.63487196009729},destination:{lat:28.99584804395379,lng:77.00556672616105},color:"#000",startIcon:D,endIcon:F},q={origin:{lat:28.99584804395379,lng:77.00556672616105},destination:{lat:28.447943760858596,lng:77.08380978717815},color:"#000",startIcon:F,endIcon:Y};function V(n){var t=n.data,e=Object(l.useState)(!1),i=Object(o.a)(e,2),r=i[0],a=i[1],c=Object(l.useState)(!1),d=Object(o.a)(c,2),u=d[0],h=d[1],f=Object(l.useState)(!1),p=Object(o.a)(f,2),j=p[0],x=p[1],g=Object(l.useState)(!1),b=Object(o.a)(g,2),O=b[0],v=b[1],w=Object(l.useState)(!1),y=Object(o.a)(w,2),C=(y[0],y[1],"BMC (Rohtak)");return console.log(t),Object(s.jsxs)(Z,{children:[Object(s.jsxs)(Q,{children:[Object(s.jsx)(en,{children:"Received at"}),Object(s.jsx)(nn,{children:m.a.utc(t.bmc_receive).format("hh:mm A")}),Object(s.jsx)(rn,{back:"#FCC888"}),Object(s.jsx)(en,{children:"Dispatched at"}),Object(s.jsx)(tn,{children:m.a.utc(t.bmc_dispatch).format("hh:mm A")}),Object(s.jsx)(an,{height:r}),Object(s.jsx)(en,{children:"Received at"}),Object(s.jsx)(nn,{children:m.a.utc(t.plant_receive).format("hh:mm A")}),Object(s.jsx)(rn,{back:"#CCFCD4"}),Object(s.jsx)(en,{children:"Procress started at"}),Object(s.jsx)(tn,{children:m.a.utc(t.plant_receive).add(4,"hours").format("hh:mm A")}),Object(s.jsx)(cn,{height:O}),Object(s.jsx)(en,{children:"Process Finished at"}),Object(s.jsx)(tn,{children:m.a.utc(t.plant_receive).add(5,"hours").format("hh:mm A")}),Object(s.jsx)(rn,{back:"#CCFCD4"}),Object(s.jsx)(en,{children:"Packaging started at"}),Object(s.jsx)(tn,{children:m.a.utc(t.plant_receive).add(330,"minutes").format("hh:mm A")}),Object(s.jsx)(an,{height:u}),Object(s.jsx)(en,{children:"Received at"}),Object(s.jsx)(nn,{children:m.a.utc(t.whs_receive).format("hh:mm A")}),Object(s.jsx)(rn,{back:"#FC9C9C"}),Object(s.jsx)(en,{children:"Dispatched at"}),Object(s.jsx)(tn,{children:m.a.utc(t.whs_dispatch).format("hh:mm A")})]}),Object(s.jsxs)($,{children:[Object(s.jsxs)(on,{height:r,area:"#F7DEBE",shadow:"#FCC888",children:[Object(s.jsxs)(un,{onClick:function(){return a(!r)},children:[C,Object(s.jsx)(fn,{orientation:r,size:16,onClick:function(){a(!r)}})]}),r&&Object(s.jsx)(k.a,{clear:!0,children:Object(s.jsxs)(ln,{children:["Milk is collected from our farmer network in ",C,". Testing of FAT, SNF & CLR is done at the time of collection itself. The milk is then chilled in a Bulk Milk Chiller (BMC) at 4\xb0C and sent to the plant. Utmost care is taken to ensure proper hygiene while collecting the milk from farmers and then transferring it from BMC to a tanker."]})})]}),Object(s.jsxs)(dn,{height:r,area:"#F7DEBE",shadow:"#FCC888",children:[Object(s.jsxs)(un,{onClick:function(){return a(!r)},children:["Transportation from : BMC(Tijara) to Plant(Sonipat)",Object(s.jsx)(fn,{orientation:r,size:16,onClick:function(){return a(!r)}})]}),r&&Object(s.jsx)(hn,{children:Object(s.jsx)(S,{r:J})})]}),Object(s.jsxs)(on,{height:u,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(s.jsxs)(un,{onClick:function(){return h(!u)},children:["Pasteurizing and Packaging (Sonipat)",Object(s.jsx)(fn,{orientation:u,size:16,onClick:function(){return h(!u)}})]}),u&&Object(s.jsx)(k.a,{clear:!0,children:Object(s.jsx)(ln,{children:"The raw milk arrives at the packaging plant in insulated road tankers. The milk is kept well chilled, free from air and treated as gently as possible. Here , the milk is pasteurized at 85\u2103 and tested for quality on 35 parameters. Milk is then kept in chillers for incubation process."})})]}),Object(s.jsxs)(sn,{height:O,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(s.jsxs)(un,{onClick:function(){return v(!O)},children:["Incubation",Object(s.jsx)(fn,{orientation:O,size:16,onClick:function(){return v(!O)}})]}),O&&Object(s.jsx)(k.a,{clear:!0,children:Object(s.jsx)(ln,{children:"After pasteurisation, culture is inoculated in the milk. It is then incubated at 37\u2103 for 10-12 hours and then stored at 5\u2103. Once done, pure unadulterated curd is ready. It is then churned to make butter milk and then packed in pouches carrying QR codes which have the data of the entire supply chain and lab test report."})})]}),Object(s.jsxs)(dn,{height:u,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(s.jsxs)(un,{onClick:function(){return h(!u)},children:["Transportation from : Plant(Sonipat) to Warehouse(Gurgaon)",Object(s.jsx)(fn,{orientation:u,size:16,onClick:function(){return h(!u)}})]}),u&&Object(s.jsx)(hn,{children:Object(s.jsx)(S,{r:q})})]}),Object(s.jsxs)(on,{height:j,area:"#fab9b9",shadow:"#FC9C9C",children:[Object(s.jsxs)(un,{onClick:function(){return x(!j)},children:["Warehouse (Gurgaon)",Object(s.jsx)(fn,{orientation:j,size:16,onClick:function(){return x(!j)}})]}),j&&Object(s.jsx)(k.a,{clear:!0,children:Object(s.jsx)(ln,{children:"Once the milk is packed, it is transported to dispatch hubs in refrigerated vehicles at 4\u2103. From here the milk gets dispatched to your home or the nearest retail store."})})]})]})]})}var Z=u.default.main(W()),Q=u.default.div(X()),$=u.default.div(U()),nn=u.default.h2(K()),tn=u.default.h2(H()),en=u.default.p(L()),rn=u.default.div(G(),(function(n){return n.back})),an=u.default.div(B(),(function(n){return n.height?"65vh":"50vh"}),(function(n){return n.height?"35vh":"30vh"})),cn=u.default.div(N(),(function(n){return n.height?"35vh":"25vh"})),on=u.default.div(T(),(function(n){return n.height?"27vh":"20px"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"20vh":"10vh"}),(function(n){return n.height?"22vh":"6vh"})),dn=u.default.div(A(),(function(n){return n.height?"35vh":"5vh"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"24vh":"8vh"})),sn=u.default.div(P(),(function(n){return n.height?"20vh":"6vh"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"18vh":"5vh"}),(function(n){return n.height?"18vh":"4vh"})),un=u.default.div(E()),ln=u.default.p(R()),hn=u.default.div(I()),fn=Object(u.default)(v.a)(_(),(function(n){return n.orientation?"rotate(180deg)":""})),pn=e.p+"static/media/g4l.5ca1a4fc.svg";function jn(){var n=Object(i.a)(["\n    font-weight:600;\n    font-size:22px;\n\n    @media (max-width:1080px)\n    {\n        font-size:16px;\n    }\n    @media (max-width:500px){\n        font-size:12px;\n    }\n    @media (max-width:330px){\n        font-size:10px;\n    }\n\n"]);return jn=function(){return n},n}function xn(){var n=Object(i.a)(["\n    @media (max-width:1080px)\n    {\n        width:100px;\n        height:100px;\n        margin-right:3%;\n    }\n    @media (max-width:500px){\n        width:80px;\n        height:80px;\n        margin-right:8%;\n    }\n"]);return xn=function(){return n},n}function mn(){var n=Object(i.a)(["\n    display : flex ; \n    justify-content:space-between;\n    align-items:center;\n    padding-top:1%;\n    z-index:99;\n    width: 90% ;\n    @media (max-width:780px)\n    {\n        margin-top:0;\n    }\n \n"]);return mn=function(){return n},n}function gn(n){n.data;return Object(s.jsxs)(bn,{children:[Object(s.jsx)(On,{src:pn,alt:"logo"}),Object(s.jsx)(vn,{children:"Trace Your Milk"})]})}var bn=u.default.main(mn()),On=u.default.img(xn()),vn=u.default.h2(jn());function wn(){var n=Object(i.a)(["\n    border-bottom:",";\n    border-bottom-color:darkgrey;\n    margin-left:4%;\n    cursor:pointer;\n    @media (max-width:500px){\n        font-size:14px;\n        margin-left:6%;\n    }\n\n"]);return wn=function(){return n},n}function kn(){var n=Object(i.a)(["\n   width:100%;\n   margin-top: 32%;\n   display:flex;\n   justify-content:flex-start;\n   text-align:left;\n   padding-left:10%;\n   @media (max-height:850px){\n       padding-top:13%;\n   }\n   @media (max-width:1500px){\n       padding-top:6%;\n   }\n   @media (max-width:1100px){\n       padding-top:20%;\n   }\n   @media (height:1024px){\n       padding-top:18%;\n   }\n  \n    @media (max-width:800px)\n    {\n        margin-top:30%;\n        padding-top:15% !important;\n    }\n    @media (max-width:500px)\n    {\n       margin-top:65% !important;\n    }\n    @media (max-width:400px)\n    {\n        \n        margin-top:70% !important;\n    }\n    @media (max-width:340px)\n    {\n        \n        margin-top:67% !important;\n        padding-top:24% !important;\n    }\n    "]);return kn=function(){return n},n}function yn(n){var t=n.setChange,e=n.change,i=Object(l.useState)(!0),r=Object(o.a)(i,2);r[0],r[1];return Object(s.jsxs)(Cn,{children:[Object(s.jsx)(Mn,{active:0==e,onClick:function(){return t(0)},children:"Journey"}),Object(s.jsx)(Mn,{onClick:function(){return t(1)},active:1==e,children:"Facts"}),Object(s.jsx)(Mn,{active:2==e,onClick:function(){return t(2)},children:"Test Report"})]})}var Cn=u.default.main(kn()),Mn=u.default.p(wn(),(function(n){return n.active?"2px solid":"0px solid"}));function Sn(){var n=Object(i.a)(["\n    font-size:24px;\n    font-weight:800;\n    text-align:justify;\n    @media (max-width:500px)\n    {\n        font-size:20px;\n        font-weight:600;\n    }\n"]);return Sn=function(){return n},n}function zn(){var n=Object(i.a)(["\n    font-weight:600;\n    font-size:32px;\n    display:flex;\n    flex-direction:row;\n    justify-items:center;\n    align-items:center;\n    @media (max-width:500px)\n    {\n        font-size:16px;\n        font-weight:400;\n    }\n"]);return zn=function(){return n},n}function Dn(){var n=Object(i.a)(["\n    width:280px;\n    height:280px;\n    border-radius:15px;\n    align-items:center;\n    flex-direction:column;\n    justify-content:center;\n    margin:2%;\n    display:flex;\n    padding:3%;\n    align-items:center;\n    background:",";\n    @media (max-width:1100px){\n        height:230px;\n        width:230px;\n    }\n    @media (max-width:500px)\n    {\n        height:150px;\n        width:150px;\n    }\n    @media (max-width:400px){\n        height:130px;\n        width:130px;\n    }\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(i.a)(["\n    display:flex;\n    flex-direction:row;\n    width:100%;\n    padding-top:5%;\n    flex-wrap:wrap;\n    padding-left:5%;\n    justify-content:flex-start;\n    align-items:center;\n    @media (max-width:1100px)\n    {\n        padding-left:10%;\n    }\n    @media (max-width:800px)\n    {\n        padding-left:17%;\n\n    }\n    @media (max-width:600px){\n        padding-left:13%;\n    }\n    @media (max-width:400px)\n    {\n        padding-left:10%;\n    }\n    @media (max-width:330px)\n    {\n        padding-left:5%;\n    }\n"]);return Fn=function(){return n},n}function Yn(){var n=Object(i.a)(["\n    font-weight:600;\n    width:100%;\n    text-align:left;\n    padding-left:7%;\n    display:flex;\n    flex-direction:row;\n    font-size:26px;\n    @media (max-width:500px)\n    {\n        font-size:12px;\n    }\n    @media (max-width:600px){\n        padding-left:12%;\n    }\n"]);return Yn=function(){return n},n}function _n(){var n=Object(i.a)(["\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:row;\n    width:100%;\n   \n"]);return _n=function(){return n},n}function In(){var n=Object(i.a)(["\n    width : 100% ; \n    display: flex ; \n    flex-direction :column;\n    justify-content:flex-start;\n    align-items:center;\n    margin-top:-0.8%;\n    padding-bottom:5%;\n    padding-top:3%;\n\n    transition:all 0.5s;\n    background:rgb(245,245,245);\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return In=function(){return n},n}function Rn(n){var t=n.data;return Object(s.jsxs)(En,{children:[Object(s.jsx)(Pn,{children:Object(s.jsx)(An,{children:"Nutritional Facts"})}),Object(s.jsxs)(Tn,{children:[Object(s.jsxs)(Nn,{background:"#F19440",children:[Object(s.jsx)(Bn,{children:"Fat"}),Object(s.jsxs)(Gn,{children:[t.fat,"%"]})]}),Object(s.jsxs)(Nn,{background:"#bcd4bd",children:[Object(s.jsx)(Bn,{children:"SNF"}),Object(s.jsx)(Gn,{children:t.snf})]}),Object(s.jsxs)(Nn,{background:"#FC9C9C",children:[Object(s.jsx)(Bn,{children:"Sodium"}),Object(s.jsx)(Gn,{children:t.sodium_content})]}),Object(s.jsxs)(Nn,{background:"#d1d9dc",children:[Object(s.jsx)(Bn,{children:"pH"}),Object(s.jsx)(Gn,{children:t.ph})]}),Object(s.jsxs)(Nn,{background:"#F4DC8C",children:[Object(s.jsx)(Bn,{children:"MBRT"}),Object(s.jsx)(Gn,{children:t.mbrt})]})]})]})}var En=u.default.main(In()),Pn=u.default.div(_n()),An=u.default.div(Yn()),Tn=u.default.div(Fn()),Nn=u.default.div(Dn(),(function(n){return n.background})),Bn=u.default.div(zn()),Gn=u.default.p(Sn()),Ln=e(31);function Hn(n){var t=n.r,e=new google.maps.DirectionsService,i=Object(l.useState)([]),r=Object(o.a)(i,2),a=r[0],c=r[1],d=Object(l.useState)([]),u=Object(o.a)(d,2);u[0],u[1];return Object(l.useEffect)((function(){for(var n=0;n<t.length;n++)e.route({origin:t[n].origin,destination:t[n].destination,travelMode:google.maps.TravelMode.DRIVING},(function(n,t){t===google.maps.DirectionsStatus.OK?c((function(t){return[].concat(Object(Ln.a)(t),[n])})):console.error("error fetching directions ".concat(n))}))}),[]),Object(s.jsx)("section",{className:"googleMap",children:Object(s.jsx)(y.GoogleMap,{defaultZoom:11,defaultCenter:{lat:41.75,lng:1.8},children:a.map((function(n,e){return Object(s.jsxs)(s.Fragment,{children:[t[e+1]&&t[e].origin!==t[e+1].origin&&Object(s.jsx)(y.Marker,{position:t[e].origin,icon:{url:D,scaledSize:{width:70,height:70}}}),t[e+1]?t[e].destination!==t[e+1].origin&&Object(s.jsx)(y.Marker,{position:t[e].destination,icon:{url:F,scaledSize:{width:70,height:70}}}):Object(s.jsx)(y.Marker,{position:t[e].destination,icon:{url:Y,scaledSize:{width:70,height:70}}}),Object(s.jsx)(y.DirectionsRenderer,{directions:n,options:{suppressMarkers:!0,polylineOptions:{strokeColor:t[e].color,strokeOpacity:1,strokeWeight:4}}},e)]})}))})})}function Kn(){var n=Object(i.a)(["\n  width: 95vw;\n  height: 50vh;\n  position:absolute;\n  margin-top:15%;\n  @media (max-width:1500px)\n  {\n    height:35vh;\n    margin-top:14%;\n  }\n  @media (max-width:1100px){\n    margin-top:25%;\n  }\n  @media (max-width:800px)\n  {\n    margin-top:32%;\n  }\n  @media (max-width:500px)\n  {\n    margin-top:48%;\n  }\n  @media (max-width:340px)\n  {\n    height:33vh;\n    margin-top:55%;\n  }\n"]);return Kn=function(){return n},n}function Un(n){var t=n.r,e=Object(y.withScriptjs)(Object(y.withGoogleMap)(Hn));return Object(s.jsx)(e,{r:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=".concat("AIzaSyAwNxCHwaidii9FbS6CkBC_nch1KPXLXv0"),loadingElement:Object(s.jsx)("div",{style:{height:"100%"}}),containerElement:Object(s.jsx)(Xn,{}),mapElement:Object(s.jsx)("div",{style:{height:"100%"}})})}var Xn=u.default.div(Kn()),Wn=e(341);function Jn(){var n=Object(i.a)(["\n  display:flex;\n  width:100%;\n  height:100%;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  @media (max-width:800px)\n  {\n    width:50%;\n    height:50%;\n  }\n  \n"]);return Jn=function(){return n},n}function qn(){var n=Object(i.a)(["\n     width : 100% ; \n    display: flex ; \n    flex-direction : column ;\n    justify-content: center;\n    align-items:center;\n    padding-top:5%;\n    margin-top:-0.8%;\n    background:rgb(245,245,245);\n    \n    transition:all 0.5s;\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return qn=function(){return n},n}function Vn(n){var t=n.data,e=Object(l.useState)(null),i=Object(o.a)(e,2),r=i[0],a=i[1],c=Object(l.useState)(1),d=Object(o.a)(c,2),u=d[0];d[1];return console.log(t.pdf_url),Object(s.jsx)(Zn,{children:Object(s.jsxs)(Qn,{children:[Object(s.jsx)(Wn.a,{file:t.pdf_url,onLoadSuccess:function(n){var t=n.numPages;a(t)},children:Object(s.jsx)(Wn.b,{size:"A4",pageNumber:u})}),Object(s.jsxs)("p",{children:["Page ",u," of ",r]})]})})}Wn.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(Wn.c.version,"/pdf.worker.js");var Zn=u.default.main(qn()),Qn=u.default.div(Jn()),$n=(e(58),e(183)),nt=e.n($n);e(882);function tt(n){var t=n.startDate,e=void 0===t?nt()().format("YYYY-MM-DD"):t,i=n.onChange;return Object(s.jsx)("div",{className:"datepicker",children:Object(s.jsx)("input",{type:"date",value:nt()(e).format("YYYY-MM-DD"),onChange:i})})}function et(){var n=Object(i.a)(["\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return et=function(){return n},n}function it(){var n=Object(i.a)(["\n    display:flex;\n    width:100%;\n    height:100vh;\n    flex-direction:column;\n    justify-content:flex-start;\n    position:relative;\n    align-items:center;\n    font-family:'Circular-Std';\n    background: rgb(251,251,251);\n    overflow-x:hidden;\n"]);return it=function(){return n},n}var rt=e(229).a.POUCH_MILK_EXPIRY_DAYS_DIFF,at=[{origin:{lat:28.91536608519116,lng:76.63487196009729},destination:{lat:28.99584804395379,lng:77.00556672616105},color:"#FCC888"},{origin:{lat:28.99584804395379,lng:77.00556672616105},destination:{lat:28.447943760858596,lng:77.08380978717815},color:"#CCFCD4"}];function ct(n){var t=n.location,e=(Object(d.a)(n,["location"]),t.search);e=new URLSearchParams(e);var i=Object(l.useState)(null),r=Object(o.a)(i,2),u=r[0],h=r[1],f=Object(l.useState)(null),p=Object(o.a)(f,2),j=p[0],x=p[1],b=Object(l.useState)(!0),v=Object(o.a)(b,2),w=(v[0],v[1]),k=Object(l.useState)(0),y=Object(o.a)(k,2),C=y[0],M=y[1],S=Object(l.useState)(null),z=Object(o.a)(S,2),D=(z[0],z[1]),F=Object(O.f)().pouch;return console.log("Heelo",u),Object(l.useEffect)((function(){function n(){return(n=Object(c.a)(a.a.mark((function n(){var t,e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,g(F,m()(u).subtract(rt,"days").format("YYYY-MM-DD"));case 4:t=n.sent,x(t.data),w(!1),D(null),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0),404===(null===n.t0||void 0===n.t0||null===(e=n.t0.response)||void 0===e?void 0:e.status)?D("No report found for expiry date ".concat(m()(u).format("DD MMM YYYY"))):D(n.t0.response?n.t0.response.data:n.t0.message),x(null),w(!1);case 16:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[u,F]),Object(s.jsxs)(ot,{children:[Object(s.jsx)(gn,{data:j}),Object(s.jsxs)(dt,{children:[Object(s.jsx)("p",{children:"Enter Expiry date of Milk"}),Object(s.jsx)(tt,{startDate:u,onChange:function(n){h(m()(n.target.value).format("YYYY-MM-DD"))}})]}),u&&Object(s.jsx)(s.Fragment,{children:j&&u?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Un,{r:at}),Object(s.jsx)(yn,{setChange:M,change:C}),j&&0==C&&Object(s.jsx)(V,{data:j}),j&&1==C&&Object(s.jsx)(Rn,{data:j}),j&&2==C&&Object(s.jsx)(Vn,{data:j})]}):Object(s.jsx)("p",{children:" Record not found"})})]})}var ot=u.default.main(it()),dt=u.default.div(et())}}]);
//# sourceMappingURL=31.f4ed1c2f.chunk.js.map