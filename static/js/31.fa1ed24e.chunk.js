(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[31],{1001:function(n,t,e){"use strict";e.r(t);var i=e(2),r=e(59),a=e(5),c=(e(642),e(643),e(159)),o=e(154),s=e.n(o),d=e(155),l=e(26),u=e(236),h=e(158),f=e(0),j=e(30),p=e.n(j),x="https://api.deliver.go4life.in/api";function m(n){return p.a.request(n)}var g=e(169),b=e.n(g);function O(){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(s.a.mark((function n(){var t,e,i,r,a,c=arguments;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"a2",e=c.length>1&&void 0!==c[1]?c[1]:b.a.format("YYYY-MM-DD"),i=b()(e).format("YYYY-MM-DD"),r="".concat(x,"/misc/getReport?report_date=").concat(i,"&milk_type=").concat(t),n.next=6,m({url:r,method:"get",headers:{"Content-Type":"application/json"}});case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var w=e(346),k=e(216),y=e.n(k),C=e(181);e(344);function M(n){var t=n.r,e=new google.maps.DirectionsService,r=Object(f.useState)(null),a=Object(l.a)(r,2),c=a[0],o=a[1],s=t.origin,d=t.destination,u=t.startIcon,h=t.endIcon;return Object(f.useEffect)((function(){e.route({origin:s,destination:d,travelMode:google.maps.TravelMode.DRIVING},(function(n,t){t===google.maps.DirectionsStatus.OK?o(n):console.error("error fetching directions ".concat(n))}))}),[]),Object(i.jsx)("section",{className:"googleMap",children:Object(i.jsx)(C.GoogleMap,{defaultZoom:14,defaultCenter:{lat:27.93415776638459,lng:76.85305579301976},children:c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(C.Marker,{position:s,icon:{url:u,scaledSize:{width:40,height:40}}}),Object(i.jsx)(C.Marker,{position:d,icon:{url:h,scaledSize:{width:40,height:40}}}),Object(i.jsx)(C.DirectionsRenderer,{directions:c,options:{suppressMarkers:!0,polylineOptions:{strokeColor:t.color,strokeOpacity:1,strokeWeight:4}}})]})})})}function S(){var n=Object(c.a)(["\n  width: 50vw;\n  height: 22vh;\n  position:absolute;\n  margin-top:1%;\n  margin-left:-25%;\n  @media (max-width:1500px)\n  {\n    height:26vh;\n  }\n  @media (max-width:800px)\n  {\n    margin-top:1%;\n    height: 28vh;\n  }\n  @media (max-width:500px)\n  {\n    margin-top:1%;\n    height:15vh;\n  \n  }\n  @media (max-width:340px)\n  {\n    height:15vh;\n  }\n"]);return S=function(){return n},n}function z(n){var t=n.r,e=Object(C.withScriptjs)(Object(C.withGoogleMap)(M));return Object(i.jsx)(e,{r:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=".concat("AIzaSyAwNxCHwaidii9FbS6CkBC_nch1KPXLXv0"),loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)(D,{}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}})})}var D=h.default.div(S()),F=e.p+"static/media/bmc.59757a69.png",Y=e.p+"static/media/plant.411f5d30.png",_=e.p+"static/media/warehouse.6aa560b1.png";function I(){var n=Object(c.a)(["\n    transform:",";\n"]);return I=function(){return n},n}function R(){var n=Object(c.a)([""]);return R=function(){return n},n}function A(){var n=Object(c.a)(["\n    transition:all 0.8s ease-in;\n    text-align:justify;\n    font-size:14px;\n    @media (max-width:800px){\n        font-size:10px;\n    }\n    @media (max-width:500px){\n        font-size:9px;\n    }\n    @media (max-width:400px){\n        font-size:8px;\n    }\n    \n"]);return A=function(){return n},n}function E(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n    align-items:center;\n    width:100%;\n    font-weight:600;\n    margin-top:-1%;\n    letter-spacing:0.5px;\n    cursor:pointer;\n    @media (max-width:500px){\n        font-size:12px;\n    }\n    @media (max-width:400px){\n        font-size:11px;\n    }\n    \n"]);return E=function(){return n},n}function P(){var n=Object(c.a)(["\n    width:80%;\n    height: ",";\n    background:",";\n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:3% 5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    @media (max-width:800px){\n        height: ",";\n    }\n    @media (max-width:500px)\n    {\n        height: ",";\n    }\n\n"]);return P=function(){return n},n}function T(){var n=Object(c.a)(["\n    width:80%;\n    height: ",";\n    background:",";\n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:3% 5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    \n    @media (max-width:500px)\n    {\n        height: ",";\n    }\n\n"]);return T=function(){return n},n}function N(){var n=Object(c.a)(["\n    width:80%;\n    height: ",";\n    background:",";   \n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    @media (width:768px){\n        height:",";\n    }\n    @media (max-width:500px){\n        height: ",";\n    }\n    @media (max-width:330px){\n\n    }\n\n"]);return N=function(){return n},n}function B(){var n=Object(c.a)(["\n    width:2px;\n    height: ",";\n    background:gainsboro;\n    transition:all 0.5s;\n\n"]);return B=function(){return n},n}function G(){var n=Object(c.a)(["\n    width: 2px ;\n    height : ",";\n    background: gainsboro;\n    transition:all 0.5s;\n    @media (max-width:500px){\n        height: ",";\n    }\n"]);return G=function(){return n},n}function L(){var n=Object(c.a)(["\n    width: 20px ;\n    border-radius:50px; \n    height: 20px; \n    background : ",";\n   \n"]);return L=function(){return n},n}function H(){var n=Object(c.a)(["\n    font-weight:400 ;\n    color : gray;\n    font-size:10px;\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"]);return H=function(){return n},n}function K(){var n=Object(c.a)(["\n    font-weight: 400; \n    font-size: 12px;\n    margin-top:-2%;\n    @media (max-width : 500px) {\n        font-size: 8px;\n    }\n"]);return K=function(){return n},n}function U(){var n=Object(c.a)(["\n    font-weight: 400; \n    font-size: 12px;\n    margin-top:-2%;\n    @media (max-width : 500px) {\n        font-size: 8px;\n    }\n"]);return U=function(){return n},n}function X(){var n=Object(c.a)(["\n    display:flex; \n    flex-direction :column; \n    width: 70% ;\n    margin-left:-6%;\n    justify-content:space-around;\n\n    @media (max-width:500px){\n        justify-content:space-evenly;\n    }\n    \n\n"]);return X=function(){return n},n}function W(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction :column ; \n    width : 20% ; \n    align-items: center;\n    justify-content:center;\n    line-height:1;\n   \n    \n"]);return W=function(){return n},n}function J(){var n=Object(c.a)(["\n    width:100%; \n    display: flex ; \n    flex-direction : row ;\n    justify-content: space-evenly;\n    padding-top:5%;\n    margin-top:-0.8%;\n    background:rgb(245,245,245);\n    \n    transition:all 0.5s;\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return J=function(){return n},n}var q={origin:{lat:28.91536608519116,lng:76.63487196009729},destination:{lat:28.99584804395379,lng:77.00556672616105},color:"#000",startIcon:F,endIcon:Y},V={origin:{lat:28.99584804395379,lng:77.00556672616105},destination:{lat:28.447943760858596,lng:77.08380978717815},color:"#000",startIcon:Y,endIcon:_};function Z(n){var t=n.data,e=Object(f.useState)(!1),r=Object(l.a)(e,2),a=r[0],c=r[1],o=Object(f.useState)(!1),s=Object(l.a)(o,2),d=s[0],u=s[1],h=Object(f.useState)(!1),j=Object(l.a)(h,2),p=j[0],x=j[1],m=Object(f.useState)(!1),g=Object(l.a)(m,2),O=g[0],v=g[1],w=Object(f.useState)(!1),k=Object(l.a)(w,2),C=(k[0],k[1],"BMC (Rohtak)");return console.log(t),Object(i.jsxs)(Q,{children:[Object(i.jsxs)($,{children:[Object(i.jsx)(rn,{children:"Received at"}),Object(i.jsx)(tn,{children:b.a.utc(t.bmc_receive).format("hh:mm A")}),Object(i.jsx)(an,{back:"#FCC888"}),Object(i.jsx)(rn,{children:"Dispatched at"}),Object(i.jsx)(en,{children:b.a.utc(t.bmc_dispatch).format("hh:mm A")}),Object(i.jsx)(cn,{height:a}),Object(i.jsx)(rn,{children:"Received at"}),Object(i.jsx)(tn,{children:b.a.utc(t.plant_receive).format("hh:mm A")}),Object(i.jsx)(an,{back:"#CCFCD4"}),Object(i.jsx)(rn,{children:"Procress started at"}),Object(i.jsx)(en,{children:b.a.utc(t.plant_receive).add(4,"hours").format("hh:mm A")}),Object(i.jsx)(on,{height:O}),Object(i.jsx)(rn,{children:"Process Finished at"}),Object(i.jsx)(en,{children:b.a.utc(t.plant_receive).add(5,"hours").format("hh:mm A")}),Object(i.jsx)(an,{back:"#CCFCD4"}),Object(i.jsx)(rn,{children:"Packaging started at"}),Object(i.jsx)(en,{children:b.a.utc(t.plant_receive).add(330,"minutes").format("hh:mm A")}),Object(i.jsx)(cn,{height:d}),Object(i.jsx)(rn,{children:"Received at"}),Object(i.jsx)(tn,{children:b.a.utc(t.whs_receive).format("hh:mm A")}),Object(i.jsx)(an,{back:"#FC9C9C"}),Object(i.jsx)(rn,{children:"Dispatched at"}),Object(i.jsx)(en,{children:b.a.utc(t.whs_dispatch).format("hh:mm A")})]}),Object(i.jsxs)(nn,{children:[Object(i.jsxs)(sn,{height:a,area:"#F7DEBE",shadow:"#FCC888",children:[Object(i.jsxs)(un,{onClick:function(){return c(!a)},children:[C,Object(i.jsx)(jn,{orientation:a,size:16,onClick:function(){c(!a)}})]}),a&&Object(i.jsx)(y.a,{clear:!0,children:Object(i.jsxs)(hn,{children:["Milk is collected from our farmer network in ",C,". Testing of FAT, SNF & CLR is done at the time of collection itself. The milk is then chilled in a Bulk Milk Chiller (BMC) at 4\xb0C and sent to the plant. Utmost care is taken to ensure proper hygiene while collecting the milk from farmers and then transferring it from BMC to a tanker."]})})]}),Object(i.jsxs)(dn,{height:a,area:"#F7DEBE",shadow:"#FCC888",children:[Object(i.jsxs)(un,{onClick:function(){return c(!a)},children:["Transportation from : BMC(Tijara) to Plant(Sonipat)",Object(i.jsx)(jn,{orientation:a,size:16,onClick:function(){return c(!a)}})]}),a&&Object(i.jsx)(fn,{children:Object(i.jsx)(z,{r:q})})]}),Object(i.jsxs)(sn,{height:d,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(i.jsxs)(un,{onClick:function(){return u(!d)},children:["Pasteurizing and Packaging (Sonipat)",Object(i.jsx)(jn,{orientation:d,size:16,onClick:function(){return u(!d)}})]}),d&&Object(i.jsx)(y.a,{clear:!0,children:Object(i.jsx)(hn,{children:"The raw milk arrives at the packaging plant in insulated road tankers. The milk is kept well chilled, free from air and treated as gently as possible. Here , the milk is pasteurized at 85\u2103 and tested for quality on 35 parameters. Milk is then kept in chillers for incubation process."})})]}),Object(i.jsxs)(ln,{height:O,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(i.jsxs)(un,{onClick:function(){return v(!O)},children:["Incubation",Object(i.jsx)(jn,{orientation:O,size:16,onClick:function(){return v(!O)}})]}),O&&Object(i.jsx)(y.a,{clear:!0,children:Object(i.jsx)(hn,{children:"After pasteurisation, culture is inoculated in the milk. It is then incubated at 37\u2103 for 10-12 hours and then stored at 5\u2103. Once done, pure unadulterated curd is ready. It is then churned to make butter milk and then packed in pouches carrying QR codes which have the data of the entire supply chain and lab test report."})})]}),Object(i.jsxs)(dn,{height:d,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(i.jsxs)(un,{onClick:function(){return u(!d)},children:["Transportation from : Plant(Sonipat) to Warehouse(Gurgaon)",Object(i.jsx)(jn,{orientation:d,size:16,onClick:function(){return u(!d)}})]}),d&&Object(i.jsx)(fn,{children:Object(i.jsx)(z,{r:V})})]}),Object(i.jsxs)(sn,{height:p,area:"#fab9b9",shadow:"#FC9C9C",children:[Object(i.jsxs)(un,{onClick:function(){return x(!p)},children:["Warehouse (Gurgaon)",Object(i.jsx)(jn,{orientation:p,size:16,onClick:function(){return x(!p)}})]}),p&&Object(i.jsx)(y.a,{clear:!0,children:Object(i.jsx)(hn,{children:"Once the milk is packed, it is transported to dispatch hubs in refrigerated vehicles at 4\u2103. From here the milk gets dispatched to your home or the nearest retail store."})})]})]})]})}var Q=h.default.main(J()),$=h.default.div(W()),nn=h.default.div(X()),tn=h.default.h2(U()),en=h.default.h2(K()),rn=h.default.p(H()),an=h.default.div(L(),(function(n){return n.back})),cn=h.default.div(G(),(function(n){return n.height?"65vh":"50vh"}),(function(n){return n.height?"35vh":"30vh"})),on=h.default.div(B(),(function(n){return n.height?"35vh":"25vh"})),sn=h.default.div(N(),(function(n){return n.height?"27vh":"20px"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"20vh":"10vh"}),(function(n){return n.height?"22vh":"6vh"})),dn=h.default.div(T(),(function(n){return n.height?"35vh":"5vh"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"24vh":"8vh"})),ln=h.default.div(P(),(function(n){return n.height?"20vh":"6vh"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"18vh":"5vh"}),(function(n){return n.height?"18vh":"4vh"})),un=h.default.div(E()),hn=h.default.p(A()),fn=h.default.div(R()),jn=Object(h.default)(w.a)(I(),(function(n){return n.orientation?"rotate(180deg)":""})),pn=e.p+"static/media/g4l.5ca1a4fc.svg";function xn(){var n=Object(c.a)(["\n    font-weight:600;\n    font-size:22px;\n\n    @media (max-width:1080px)\n    {\n        font-size:16px;\n    }\n    @media (max-width:500px){\n        font-size:12px;\n    }\n    @media (max-width:330px){\n        font-size:10px;\n    }\n\n"]);return xn=function(){return n},n}function mn(){var n=Object(c.a)(["\n    @media (max-width:1080px)\n    {\n        width:100px;\n        height:100px;\n        margin-right:3%;\n    }\n    @media (max-width:500px){\n        width:80px;\n        height:80px;\n        margin-right:8%;\n    }\n"]);return mn=function(){return n},n}function gn(){var n=Object(c.a)(["\n    display : flex ; \n    justify-content:space-between;\n    align-items:center;\n    padding-top:1%;\n    z-index:99;\n    width: 90% ;\n    @media (max-width:780px)\n    {\n        margin-top:0;\n    }\n \n"]);return gn=function(){return n},n}function bn(n){n.data;return Object(i.jsxs)(On,{children:[Object(i.jsx)(vn,{src:pn,alt:"logo"}),Object(i.jsx)(wn,{children:"Trace Your Milk"})]})}var On=h.default.main(gn()),vn=h.default.img(mn()),wn=h.default.h2(xn());function kn(){var n=Object(c.a)(["\n    border-bottom:",";\n    border-bottom-color:darkgrey;\n    margin-left:4%;\n    cursor:pointer;\n    @media (max-width:500px){\n        font-size:14px;\n        margin-left:6%;\n    }\n\n"]);return kn=function(){return n},n}function yn(){var n=Object(c.a)(["\n   width:100%;\n   margin-top: 32%;\n   display:flex;\n   justify-content:flex-start;\n   text-align:left;\n   padding-left:10%;\n   @media (max-height:850px){\n       padding-top:13%;\n   }\n   @media (max-width:1500px){\n       padding-top:6%;\n   }\n   @media (max-width:1100px){\n       padding-top:20%;\n   }\n   @media (height:1024px){\n       padding-top:18%;\n   }\n  \n    @media (max-width:800px)\n    {\n        margin-top:30%;\n        padding-top:15% !important;\n    }\n    @media (max-width:500px)\n    {\n       margin-top:65% !important;\n    }\n    @media (max-width:400px)\n    {\n        \n        margin-top:70% !important;\n    }\n    @media (max-width:340px)\n    {\n        \n        margin-top:67% !important;\n        padding-top:24% !important;\n    }\n    "]);return yn=function(){return n},n}function Cn(n){var t=n.setChange,e=n.change,r=Object(f.useState)(!0),a=Object(l.a)(r,2);a[0],a[1];return Object(i.jsxs)(Mn,{children:[Object(i.jsx)(Sn,{active:0==e,onClick:function(){return t(0)},children:"Journey"}),Object(i.jsx)(Sn,{onClick:function(){return t(1)},active:1==e,children:"Facts"}),Object(i.jsx)(Sn,{active:2==e,onClick:function(){return t(2)},children:"Test Report"})]})}var Mn=h.default.main(yn()),Sn=h.default.p(kn(),(function(n){return n.active?"2px solid":"0px solid"}));function zn(){var n=Object(c.a)(["\n    font-size:24px;\n    font-weight:800;\n    text-align:justify;\n    @media (max-width:500px)\n    {\n        font-size:20px;\n        font-weight:600;\n    }\n"]);return zn=function(){return n},n}function Dn(){var n=Object(c.a)(["\n    font-weight:600;\n    font-size:32px;\n    display:flex;\n    flex-direction:row;\n    justify-items:center;\n    align-items:center;\n    @media (max-width:500px)\n    {\n        font-size:16px;\n        font-weight:400;\n    }\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(c.a)(["\n    width:280px;\n    height:280px;\n    border-radius:15px;\n    align-items:center;\n    flex-direction:column;\n    justify-content:center;\n    margin:2%;\n    display:flex;\n    padding:3%;\n    align-items:center;\n    background:",";\n    @media (max-width:1100px){\n        height:230px;\n        width:230px;\n    }\n    @media (max-width:500px)\n    {\n        height:150px;\n        width:150px;\n    }\n    @media (max-width:400px){\n        height:130px;\n        width:130px;\n    }\n"]);return Fn=function(){return n},n}function Yn(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction:row;\n    width:100%;\n    padding-top:5%;\n    flex-wrap:wrap;\n    padding-left:5%;\n    justify-content:flex-start;\n    align-items:center;\n    @media (max-width:1100px)\n    {\n        padding-left:10%;\n    }\n    @media (max-width:800px)\n    {\n        padding-left:17%;\n\n    }\n    @media (max-width:600px){\n        padding-left:13%;\n    }\n    @media (max-width:400px)\n    {\n        padding-left:10%;\n    }\n    @media (max-width:330px)\n    {\n        padding-left:5%;\n    }\n"]);return Yn=function(){return n},n}function _n(){var n=Object(c.a)(["\n    font-weight:600;\n    width:100%;\n    text-align:left;\n    padding-left:7%;\n    display:flex;\n    flex-direction:row;\n    font-size:26px;\n    @media (max-width:500px)\n    {\n        font-size:12px;\n    }\n    @media (max-width:600px){\n        padding-left:12%;\n    }\n"]);return _n=function(){return n},n}function In(){var n=Object(c.a)(["\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:row;\n    width:100%;\n   \n"]);return In=function(){return n},n}function Rn(){var n=Object(c.a)(["\n    width : 100% ; \n    display: flex ; \n    flex-direction :column;\n    justify-content:flex-start;\n    align-items:center;\n    margin-top:-0.8%;\n    padding-bottom:5%;\n    padding-top:3%;\n\n    transition:all 0.5s;\n    background:rgb(245,245,245);\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return Rn=function(){return n},n}function An(n){var t=n.data;return Object(i.jsxs)(En,{children:[Object(i.jsx)(Pn,{children:Object(i.jsx)(Tn,{children:"Nutritional Facts"})}),Object(i.jsxs)(Nn,{children:[Object(i.jsxs)(Bn,{background:"#F19440",children:[Object(i.jsx)(Gn,{children:"Fat"}),Object(i.jsxs)(Ln,{children:[t.fat,"%"]})]}),Object(i.jsxs)(Bn,{background:"#bcd4bd",children:[Object(i.jsx)(Gn,{children:"SNF"}),Object(i.jsx)(Ln,{children:t.snf})]}),Object(i.jsxs)(Bn,{background:"#FC9C9C",children:[Object(i.jsx)(Gn,{children:"Sodium"}),Object(i.jsx)(Ln,{children:t.sodium_content})]}),Object(i.jsxs)(Bn,{background:"#d1d9dc",children:[Object(i.jsx)(Gn,{children:"pH"}),Object(i.jsx)(Ln,{children:t.ph})]}),Object(i.jsxs)(Bn,{background:"#F4DC8C",children:[Object(i.jsx)(Gn,{children:"MBRT"}),Object(i.jsx)(Ln,{children:t.mbrt})]})]})]})}var En=h.default.main(Rn()),Pn=h.default.div(In()),Tn=h.default.div(_n()),Nn=h.default.div(Yn()),Bn=h.default.div(Fn(),(function(n){return n.background})),Gn=h.default.div(Dn()),Ln=h.default.p(zn()),Hn=e(31);function Kn(n){var t=n.r,e=new google.maps.DirectionsService,r=Object(f.useState)([]),a=Object(l.a)(r,2),c=a[0],o=a[1],s=Object(f.useState)([]),d=Object(l.a)(s,2);d[0],d[1];return Object(f.useEffect)((function(){for(var n=0;n<t.length;n++)e.route({origin:t[n].origin,destination:t[n].destination,travelMode:google.maps.TravelMode.DRIVING},(function(n,t){t===google.maps.DirectionsStatus.OK?o((function(t){return[].concat(Object(Hn.a)(t),[n])})):console.error("error fetching directions ".concat(n))}))}),[]),Object(i.jsx)("section",{className:"googleMap",children:Object(i.jsx)(C.GoogleMap,{defaultZoom:11,defaultCenter:{lat:41.75,lng:1.8},children:c.map((function(n,e){return Object(i.jsxs)(i.Fragment,{children:[t[e+1]&&t[e].origin!==t[e+1].origin&&Object(i.jsx)(C.Marker,{position:t[e].origin,icon:{url:F,scaledSize:{width:70,height:70}}}),t[e+1]?t[e].destination!==t[e+1].origin&&Object(i.jsx)(C.Marker,{position:t[e].destination,icon:{url:Y,scaledSize:{width:70,height:70}}}):Object(i.jsx)(C.Marker,{position:t[e].destination,icon:{url:_,scaledSize:{width:70,height:70}}}),Object(i.jsx)(C.DirectionsRenderer,{directions:n,options:{suppressMarkers:!0,polylineOptions:{strokeColor:t[e].color,strokeOpacity:1,strokeWeight:4}}},e)]})}))})})}function Un(){var n=Object(c.a)(["\n  width: 95vw;\n  height: 50vh;\n  position:absolute;\n  margin-top:15%;\n  @media (max-width:1500px)\n  {\n    height:35vh;\n    margin-top:14%;\n  }\n  @media (max-width:1100px){\n    margin-top:25%;\n  }\n  @media (max-width:800px)\n  {\n    margin-top:32%;\n  }\n  @media (max-width:500px)\n  {\n    margin-top:48%;\n  }\n  @media (max-width:340px)\n  {\n    height:33vh;\n    margin-top:55%;\n  }\n"]);return Un=function(){return n},n}function Xn(n){var t=n.r,e=Object(C.withScriptjs)(Object(C.withGoogleMap)(Kn));return Object(i.jsx)(e,{r:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=".concat("AIzaSyAwNxCHwaidii9FbS6CkBC_nch1KPXLXv0"),loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)(Wn,{}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}})})}var Wn=h.default.div(Un()),Jn=e(345);function qn(){var n=Object(c.a)(["\n  display:flex;\n  width:100%;\n  height:100%;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  @media (max-width:800px)\n  {\n    width:50%;\n    height:50%;\n  }\n  \n"]);return qn=function(){return n},n}function Vn(){var n=Object(c.a)(["\n     width : 100% ; \n    display: flex ; \n    flex-direction : column ;\n    justify-content: center;\n    align-items:center;\n    padding-top:5%;\n    margin-top:-0.8%;\n    background:rgb(245,245,245);\n    \n    transition:all 0.5s;\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return Vn=function(){return n},n}function Zn(n){var t=n.data,e=Object(f.useState)(null),r=Object(l.a)(e,2),a=r[0],c=r[1],o=Object(f.useState)(1),s=Object(l.a)(o,2),d=s[0];s[1];return console.log(t.pdf_url),Object(i.jsx)(Qn,{children:Object(i.jsxs)($n,{children:[Object(i.jsx)(Jn.a,{file:t.pdf_url,onLoadSuccess:function(n){var t=n.numPages;c(t)},children:Object(i.jsx)(Jn.b,{size:"A4",pageNumber:d})}),Object(i.jsxs)("p",{children:["Page ",d," of ",a]})]})})}Jn.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(Jn.c.version,"/pdf.worker.js");var Qn=h.default.main(Vn()),$n=h.default.div(qn()),nt=(e(58),e(174)),tt=e.n(nt);e(883);function et(n){var t=n.startDate,e=void 0===t?tt()().format("YYYY-MM-DD"):t,r=n.onChange;return Object(i.jsx)("div",{className:"datepicker",children:Object(i.jsx)("input",{type:"date",value:tt()(e).format("YYYY-MM-DD"),onChange:r})})}function it(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return it=function(){return n},n}function rt(){var n=Object(c.a)(["\n    display:flex;\n    width:100%;\n    height:100vh;\n    flex-direction:column;\n    justify-content:flex-start;\n    position:relative;\n    align-items:center;\n    font-family:'Circular-Std';\n    background: rgb(251,251,251);\n    overflow-x:hidden;\n"]);return rt=function(){return n},n}var at=e(215).a.POUCH_MILK_EXPIRY_DAYS_DIFF,ct=[{origin:{lat:28.91536608519116,lng:76.63487196009729},destination:{lat:28.99584804395379,lng:77.00556672616105},color:"#FCC888"},{origin:{lat:28.99584804395379,lng:77.00556672616105},destination:{lat:28.447943760858596,lng:77.08380978717815},color:"#CCFCD4"}];function ot(n){var t=n.location,e=(Object(u.a)(n,["location"]),t.search);e=new URLSearchParams(e);var r=Object(f.useState)(null),c=Object(l.a)(r,2),o=c[0],h=c[1],j=Object(f.useState)(null),p=Object(l.a)(j,2),x=p[0],m=p[1],g=Object(f.useState)(!0),v=Object(l.a)(g,2),w=(v[0],v[1]),k=Object(f.useState)(0),y=Object(l.a)(k,2),C=y[0],M=y[1],S=Object(f.useState)(null),z=Object(l.a)(S,2),D=(z[0],z[1]),F=Object(a.f)().pouch;return console.log("Heelo",o),Object(f.useEffect)((function(){function n(){return(n=Object(d.a)(s.a.mark((function n(){var t,e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,O(F,b()(o).subtract(at,"days").format("YYYY-MM-DD"));case 4:t=n.sent,m(t.data),w(!1),D(null),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0),404===(null===n.t0||void 0===n.t0||null===(e=n.t0.response)||void 0===e?void 0:e.status)?D("No report found for expiry date ".concat(b()(o).format("DD MMM YYYY"))):D(n.t0.response?n.t0.response.data:n.t0.message),m(null),w(!1);case 16:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[o,F]),Object(i.jsxs)(st,{children:[Object(i.jsx)(bn,{data:x}),Object(i.jsxs)(dt,{children:[Object(i.jsx)("p",{children:"Enter Expiry date of Milk"}),Object(i.jsx)(et,{startDate:o,onChange:function(n){h(b()(n.target.value).format("YYYY-MM-DD"))}})]}),o&&Object(i.jsx)(i.Fragment,{children:x&&o?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Xn,{r:ct}),Object(i.jsx)(Cn,{setChange:M,change:C}),x&&0==C&&Object(i.jsx)(Z,{data:x}),x&&1==C&&Object(i.jsx)(An,{data:x}),x&&2==C&&Object(i.jsx)(Zn,{data:x})]}):Object(i.jsx)("p",{children:" Record not found"})})]})}var st=h.default.main(rt()),dt=h.default.div(it());t.default=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(r.a,{children:Object(i.jsx)(a.c,{children:Object(i.jsx)(a.a,{exact:!0,path:"/",component:ot})})})})}},215:function(n,t,e){"use strict";t.a={POUCH_MILK_EXPIRY_DAYS_DIFF:2}},236:function(n,t,e){"use strict";function i(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}e.d(t,"a",(function(){return i}))},282:function(n,t){},323:function(n,t){},324:function(n,t){},325:function(n,t){},326:function(n,t){},327:function(n,t){},642:function(n,t,e){},643:function(n,t,e){},883:function(n,t,e){}}]);
//# sourceMappingURL=31.fa1ed24e.chunk.js.map