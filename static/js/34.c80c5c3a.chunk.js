(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[34],{393:function(n,t){},508:function(n,t){},509:function(n,t){},510:function(n,t){},511:function(n,t){},512:function(n,t){},643:function(n,t,e){},876:function(n,t,e){},984:function(n,t,e){"use strict";e.r(t);var i=e(2),a=e(59),r=e(5),c=(e(643),e(183)),o=e(155),d=e.n(o),u=e(157),s=e(27),l=e(180),h=e(0),x=e(30),m=e.n(x),p="https://api.deliver.go4life.in/api";function f(n){return m.a.request(n)}var j=e(177),b=e.n(j);function g(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(d.a.mark((function n(){var t,e,i,a,r,c=arguments;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"a2",e=c.length>1&&void 0!==c[1]?c[1]:b.a.format("YYYY-MM-DD"),i=b()(e).format("YYYY-MM-DD"),a="".concat(p,"/misc/getReport?report_date=").concat(i,"&milk_type=").concat(t),n.next=6,f({url:a,method:"get",headers:{"Content-Type":"application/json"}});case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var v=e(535),w=e(305),k=e.n(w),C=e(275),y=e(31);function z(n){var t=n.r,e=new google.maps.DirectionsService,a=Object(h.useState)([]),r=Object(s.a)(a,2),c=r[0],o=r[1],d=Object(h.useState)([]),u=Object(s.a)(d,2);u[0],u[1];return Object(h.useEffect)((function(){for(var n=0;n<t.length;n++)e.route({origin:t[n].origin,destination:t[n].destination,travelMode:google.maps.TravelMode.DRIVING},(function(n,t){t===google.maps.DirectionsStatus.OK?o((function(t){return[].concat(Object(y.a)(t),[n])})):console.error("error fetching directions ".concat(n))}))}),[]),Object(i.jsx)("section",{className:"googleMap",children:Object(i.jsx)(C.GoogleMap,{defaultZoom:9,defaultCenter:{lat:27.9,lng:76.5},children:c.map((function(n,e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(C.Marker,{position:t[e].origin,icon:{url:"https://img.icons8.com/android/24/000000/cow.png"}}),Object(i.jsx)(C.Marker,{position:t[e].destination,icon:{url:"https://maps.google.com/mapfiles/ms/icons/blue.png"}}),Object(i.jsx)(C.DirectionsRenderer,{directions:n,options:{suppressMarkers:!0,polylineOptions:{strokeColor:t[e].color,strokeOpacity:1,strokeWeight:10}}},e)]})}))})})}function D(){var n=Object(c.a)(["\n  width: 65vw;\n  height: 30vh;\n  position:absolute;\n  margin-top:8%;\n  @media (max-width:1500px)\n  {\n    height:35vh;\n  }\n  @media (max-width:800px)\n  {\n    margin-top:12%;\n  }\n  @media (max-width:500px)\n  {\n    margin-top:18%;\n  }\n  @media (max-width:340px)\n  {\n    height:33vh;\n  }\n"]);return D=function(){return n},n}l.default.div(D());function q(){var n=Object(c.a)(["\n    transform:",";\n"]);return q=function(){return n},n}function S(){var n=Object(c.a)(["\n    transition:all 0.8s ease-in;\n    text-align:justify;\n    font-size:14px;\n    @media (max-width:1100px){\n        font-size:11px;\n    }\n    @media (max-width:800px){\n        font-size:10px;\n    }\n    @media (max-width:500px){\n        font-size:9px;\n    }\n    @media (max-width:400px){\n        font-size:8px;\n    }\n    \n"]);return S=function(){return n},n}function F(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n    align-items:center;\n    width:100%;\n    font-weight:600;\n    margin-top:-1%;\n    letter-spacing:0.5px;\n    cursor:pointer;\n    @media (max-width:500px){\n        font-size:12px;\n    }\n    @media (max-width:400px){\n        font-size:11px;\n    }\n    \n"]);return F=function(){return n},n}function M(){var n=Object(c.a)(["\n    width:80%;\n    height: ",";\n    background:",";\n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:3% 5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    \n    @media (max-width:500px)\n    {\n        height: ",";\n    }\n\n"]);return M=function(){return n},n}function _(){var n=Object(c.a)(["\n    width:80%;\n    height: ",";\n    background:",";   \n    border-radius:10px;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:column;\n    display:flex;\n    padding:5%;\n    transition:all 0.5s;\n    box-shadow: 3px 3px 6px ",";\n    @media (width:768px){\n        height:",";\n    }\n    @media (max-width:500px){\n        height: ",";\n    }\n    @media (max-width:330px){\n\n    }\n\n"]);return _=function(){return n},n}function A(){var n=Object(c.a)(["\n    width:2px;\n    height: ",";\n    background:gainsboro;\n    transition:all 0.5s;\n\n"]);return A=function(){return n},n}function L(){var n=Object(c.a)(["\n    width: 2px ;\n    height : ",";\n    background: gainsboro;\n    transition:all 0.5s;\n    @media (max-width:500px){\n        height: ",";\n    }\n"]);return L=function(){return n},n}function E(){var n=Object(c.a)(["\n    width: 20px ;\n    border-radius:50px; \n    height: 20px; \n    background : ",";\n   \n"]);return E=function(){return n},n}function P(){var n=Object(c.a)(["\n    font-weight:400 ;\n    color : gray;\n    font-size:10px;\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"]);return P=function(){return n},n}function R(){var n=Object(c.a)(["\n    font-weight: 400; \n    font-size: 12px;\n    margin-top:-2%;\n    @media (max-width : 500px) {\n        font-size: 8px;\n    }\n"]);return R=function(){return n},n}function Y(){var n=Object(c.a)(["\n    font-weight: 400; \n    font-size: 12px;\n    margin-top:-2%;\n    @media (max-width : 500px) {\n        font-size: 8px;\n    }\n"]);return Y=function(){return n},n}function N(){var n=Object(c.a)(["\n    display:flex; \n    flex-direction :column; \n    width: 70% ;\n    margin-left:-6%;\n    justify-content:space-around;\n\n    @media (max-width:500px){\n        justify-content:space-evenly;\n    }\n    \n\n"]);return N=function(){return n},n}function T(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction :column ; \n    width : 20% ; \n    align-items: center;\n    justify-content:center;\n    line-height:1;\n   \n    \n"]);return T=function(){return n},n}function U(){var n=Object(c.a)(["\n    width:100%; \n    display: flex ; \n    flex-direction : row ;\n    justify-content: space-evenly;\n    padding-top:5%;\n    margin-top:-0.8%;\n    background:rgb(245,245,245);\n    \n    transition:all 0.5s;\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return U=function(){return n},n}function B(n){var t=n.data,e=Object(h.useState)(!1),a=Object(s.a)(e,2),r=a[0],c=a[1],o=Object(h.useState)(!1),d=Object(s.a)(o,2),u=d[0],l=d[1],x=Object(h.useState)(!1),m=Object(s.a)(x,2),p=m[0],f=m[1],j=Object(h.useState)(!1),g=Object(s.a)(j,2),O=g[0],v=g[1],w=Object(h.useState)(!1),C=Object(s.a)(w,2),y=C[0],z=C[1],D=Object(h.useState)(!1),q=Object(s.a)(D,2);q[0],q[1];return console.log(t),Object(i.jsxs)(G,{children:[Object(i.jsxs)(I,{children:[Object(i.jsx)(K,{children:"Received at"}),Object(i.jsx)(W,{children:b.a.utc(t.bmc_receive).format("hh:mm A")}),Object(i.jsx)(X,{back:"#FCC888"}),Object(i.jsx)(K,{children:"Dispatched at"}),Object(i.jsx)(H,{children:b.a.utc(t.bmc_dispatch).format("hh:mm A")}),Object(i.jsx)(V,{height:r}),Object(i.jsx)(K,{children:"Received at"}),Object(i.jsx)(W,{children:b.a.utc(t.plant_receive).format("hh:mm A")}),Object(i.jsx)(X,{back:"#CCFCD4"}),Object(i.jsx)(K,{children:"Procress started at"}),Object(i.jsx)(H,{children:b.a.utc(t.plant_receive).add(4,"hours").format("hh:mm A")}),Object(i.jsx)(Z,{height:O}),Object(i.jsx)(K,{children:"Process Finished at"}),Object(i.jsx)(H,{children:b.a.utc(t.plant_receive).add(5,"hours").format("hh:mm A")}),Object(i.jsx)(X,{back:"#CCFCD4"}),Object(i.jsx)(K,{children:"Packaging started at"}),Object(i.jsx)(H,{children:b.a.utc(t.plant_receive).add(330,"minutes").format("hh:mm A")}),Object(i.jsx)(V,{height:u}),Object(i.jsx)(K,{children:"Received at"}),Object(i.jsx)(W,{children:b.a.utc(t.whs_receive).format("hh:mm A")}),Object(i.jsx)(X,{back:"#FC9C9C"}),Object(i.jsx)(K,{children:"Dispatched at"}),Object(i.jsx)(H,{children:b.a.utc(t.whs_dispatch).format("hh:mm A")})]}),Object(i.jsxs)(J,{children:[Object(i.jsxs)(Q,{height:r,area:"#F7DEBE",shadow:"#FCC888",children:[Object(i.jsxs)(nn,{onClick:function(){return c(!r)},children:["BMC (Tijara)",Object(i.jsx)(en,{orientation:r,size:16,onClick:function(){c(!r)}})]}),r&&Object(i.jsx)(k.a,{clear:!0,children:Object(i.jsx)(tn,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),Object(i.jsxs)(Q,{height:u,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(i.jsxs)(nn,{onClick:function(){return l(!u)},children:["Pasteurizing and Packaging (Sonipat)",Object(i.jsx)(en,{orientation:u,size:16,onClick:function(){return l(!u)}})]}),u&&Object(i.jsx)(k.a,{clear:!0,children:Object(i.jsx)(tn,{children:"Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),Object(i.jsxs)($,{height:O,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(i.jsxs)(nn,{onClick:function(){return v(!O)},children:["Dahi Fermentation",Object(i.jsx)(en,{orientation:O,size:16,onClick:function(){return v(!O)}})]}),O&&Object(i.jsx)(k.a,{clear:!0,children:Object(i.jsx)(tn,{children:"Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})})]}),Object(i.jsxs)($,{height:y,area:"#e6ffea",shadow:"#CCFCD4",children:[Object(i.jsxs)(nn,{onClick:function(){return z(!y)},children:["Dahi Packaging",Object(i.jsx)(en,{orientation:y,size:16,onClick:function(){return z(!y)}})]}),y&&Object(i.jsx)(k.a,{clear:!0,children:Object(i.jsx)(tn,{children:"Lorem ipsum dolor sit amet, consectetur    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})})]}),Object(i.jsxs)(Q,{height:p,area:"#fab9b9",shadow:"#FC9C9C",children:[Object(i.jsxs)(nn,{onClick:function(){return f(!p)},children:["Warehouse (Gurgaon)",Object(i.jsx)(en,{orientation:p,size:16,onClick:function(){return f(!p)}})]}),p&&Object(i.jsx)(k.a,{clear:!0,children:Object(i.jsx)(tn,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})]})}var G=l.default.main(U()),I=l.default.div(T()),J=l.default.div(N()),W=l.default.h2(Y()),H=l.default.h2(R()),K=l.default.p(P()),X=l.default.div(E(),(function(n){return n.back})),V=l.default.div(L(),(function(n){return n.height?"45vh":"35vh"}),(function(n){return n.height?"35vh":"20vh"})),Z=l.default.div(A(),(function(n){return n.height?"20vh":"10vh"})),Q=l.default.div(_(),(function(n){return n.height?"27vh":"20px"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"28vh":"10vh"}),(function(n){return n.height?"27vh":"6vh"})),$=l.default.div(M(),(function(n){return n.height?"18vh":"5vh"}),(function(n){return n.area}),(function(n){return n.shadow}),(function(n){return n.height?"20vh":"4vh"})),nn=l.default.div(F()),tn=l.default.p(S()),en=Object(l.default)(v.a)(q(),(function(n){return n.orientation?"rotate(180deg)":""})),an=e.p+"static/media/g4l.a71066e7.svg";function rn(){var n=Object(c.a)(["\n    font-weight:600;\n    font-size:22px;\n\n    @media (max-width:1080px)\n    {\n        font-size:16px;\n    }\n    @media (max-width:500px){\n        font-size:12px;\n    }\n    @media (max-width:330px){\n        font-size:10px;\n    }\n\n"]);return rn=function(){return n},n}function cn(){var n=Object(c.a)(["\n    @media (max-width:1080px)\n    {\n        width:100px;\n        height:100px;\n        margin-right:3%;\n    }\n    @media (max-width:500px){\n        width:80px;\n        height:80px;\n        margin-right:8%;\n    }\n"]);return cn=function(){return n},n}function on(){var n=Object(c.a)(["\n    display : flex ; \n    justify-content:space-between;\n    align-items:center;\n    padding-top:1%;\n    z-index:99;\n    width: 90% ;\n    @media (max-width:780px)\n    {\n        margin-top:0;\n    }\n \n"]);return on=function(){return n},n}function dn(n){n.data;return Object(i.jsxs)(un,{children:[Object(i.jsx)(sn,{src:an,alt:"logo"}),Object(i.jsx)(ln,{children:"Trace Your Dahi"})]})}var un=l.default.main(on()),sn=l.default.img(cn()),ln=l.default.h2(rn());function hn(){var n=Object(c.a)(["\n    border-bottom:",";\n    border-bottom-color:#1C2C54;\n    margin-left:2%;\n    cursor:pointer;\n    @media (max-width:500px){\n        font-size:10px;\n    }\n\n"]);return hn=function(){return n},n}function xn(){var n=Object(c.a)(["\n   width:100%;\n   margin-top:27%;\n   display:flex;\n   justify-content:flex-start;\n   text-align:left;\n   padding-left:10%;\n    @media (max-width:800px)\n    {\n        margin-top:30%;\n    }\n    @media (max-width:500px)\n    {\n        margin-top:55%;\n    }\n    @media (max-width:400px)\n    {\n        margin-top:60%;\n    }\n    \n\n"]);return xn=function(){return n},n}function mn(n){var t=n.setChange,e=n.change,a=Object(h.useState)(!0),r=Object(s.a)(a,2);r[0],r[1];return Object(i.jsxs)(pn,{children:[Object(i.jsx)(fn,{active:0==e,onClick:function(){return t(0)},children:"Journey"}),Object(i.jsx)(fn,{onClick:function(){return t(1)},active:1==e,children:"Facts"}),Object(i.jsx)(fn,{active:2==e,onClick:function(){return t(2)},children:"Test Report"})]})}var pn=l.default.main(xn()),fn=l.default.p(hn(),(function(n){return n.active?"4px solid":"0px solid"}));function jn(){var n=Object(c.a)(["\n    display:flex;\n    position:absolute;\n    color:white;\n    justify-content:center;\n    align-items:center;\n    border-radius:50px;\n    width:60px;\n    height:60px;\n    bottom:0;\n    right:0;\n    margin-right:5%;\n    margin-bottom:5%;\n    background:",";\n    font-weight:600;\n    @media (max-width:500px)\n    {\n        width:35px;\n        height:35px;\n        font-size:8px;\n    }\n   \n"]);return jn=function(){return n},n}function bn(){var n=Object(c.a)(["\n    font-size:14px;\n    text-align:justify;\n    @media (max-width:500px)\n    {\n        font-size:8px;\n    }\n"]);return bn=function(){return n},n}function gn(){var n=Object(c.a)(["\n    font-weight:600;\n    font-size:22px;\n    display:flex;\n    flex-direction:row;\n    justify-items:center;\n    @media (max-width:500px)\n    {\n        font-size:12px;\n    }\n"]);return gn=function(){return n},n}function On(){var n=Object(c.a)(["\n    width:280px;\n    height:280px;\n    border-radius:15px;\n    align-items:center;\n    flex-direction:column;\n    justify-content:flex-start;\n    position:relative;\n    margin:2%;\n    display:block;\n    padding:3%;\n    align-items:center;\n    background:",";\n    @media (max-width:1100px){\n        height:230px;\n        width:230px;\n    }\n    @media (max-width:500px)\n    {\n        height:150px;\n        width:150px;\n    }\n    @media (max-width:400px){\n        height:130px;\n        width:130px;\n    }\n"]);return On=function(){return n},n}function vn(){var n=Object(c.a)(["\n    display:flex;\n    flex-direction:row;\n    width:100%;\n    padding-top:5%;\n    flex-wrap:wrap;\n    padding-left:5%;\n    justify-content:flex-start;\n    align-items:center;\n    @media (max-width:1100px)\n    {\n        padding-left:10%;\n    }\n    @media (max-width:800px)\n    {\n        padding-left:17%;\n\n    }\n    @media (max-width:500px)\n    {\n      padding-left:10%;\n\n    }\n    @media (max-width:400px)\n    {\n        padding-left:10%;\n    }\n    @media (max-width:330px)\n    {\n        padding-left:5%;\n    }\n"]);return vn=function(){return n},n}function wn(){var n=Object(c.a)(["\n    font-weight:600;\n    width:100%;\n    text-align:left;\n    padding-left:7%;\n    display:flex;\n    flex-direction:row;\n    font-size:26px;\n    @media (max-width:500px)\n    {\n        font-size:12px;\n    }\n"]);return wn=function(){return n},n}function kn(){var n=Object(c.a)(["\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    flex-direction:row;\n    width:100%;\n   \n"]);return kn=function(){return n},n}function Cn(){var n=Object(c.a)(["\n    width : 100% ; \n    display: flex ; \n    flex-direction :column;\n    justify-content:flex-start;\n    align-items:center;\n    margin-top:-0.8%;\n    padding-bottom:5%;\n    padding-top:3%;\n\n    transition:all 0.5s;\n    background:rgb(245,245,245);\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return Cn=function(){return n},n}function yn(n){n.data;return Object(i.jsxs)(zn,{children:[Object(i.jsx)(Dn,{children:Object(i.jsx)(qn,{children:"Nutritional Facts"})}),Object(i.jsxs)(Sn,{children:[Object(i.jsxs)(Fn,{background:"#F19440",children:[Object(i.jsx)(Mn,{children:"Fat"}),Object(i.jsx)(_n,{children:"Saturated 'Fat' increases 'good' cholesterol levels in our body, which protects our health."}),Object(i.jsx)(An,{back:"#000",children:"3.67%"})]}),Object(i.jsxs)(Fn,{background:"#B4D4BC",children:[Object(i.jsx)(Mn,{children:"SNF"}),Object(i.jsx)(_n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(i.jsx)(An,{back:" #000",children:"8.87%"})]}),Object(i.jsxs)(Fn,{background:"#FC9C9C",children:[Object(i.jsx)(Mn,{children:"Sodium"}),Object(i.jsx)(_n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(i.jsx)(An,{back:" #000",children:"NA"})]}),Object(i.jsxs)(Fn,{background:"#d1d9dc",children:[Object(i.jsx)(Mn,{children:"pH"}),Object(i.jsx)(_n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(i.jsx)(An,{back:" #000",children:"6.7"})]}),Object(i.jsxs)(Fn,{background:"#F4DC8C",children:[Object(i.jsx)(Mn,{children:"MBRT"}),Object(i.jsx)(_n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(i.jsx)(An,{back:" #000",children:"40mins"})]})]})]})}var zn=l.default.main(Cn()),Dn=l.default.div(kn()),qn=l.default.div(wn()),Sn=l.default.div(vn()),Fn=l.default.div(On(),(function(n){return n.background})),Mn=l.default.div(gn()),_n=l.default.p(bn()),An=l.default.div(jn(),(function(n){return n.back}));function Ln(){var n=Object(c.a)(["\n  width: 95vw;\n  height: 50vh;\n  position:absolute;\n  margin-top:8%;\n  @media (max-width:1500px)\n  {\n    height:35vh;\n  }\n  @media (max-width:800px)\n  {\n    margin-top:12%;\n  }\n  @media (max-width:500px)\n  {\n    margin-top:18%;\n  }\n  @media (max-width:340px)\n  {\n    height:33vh;\n  }\n"]);return Ln=function(){return n},n}function En(n){var t=n.r,e=Object(C.withScriptjs)(Object(C.withGoogleMap)(z));return Object(i.jsx)(e,{r:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=".concat("AIzaSyAwNxCHwaidii9FbS6CkBC_nch1KPXLXv0"),loadingElement:Object(i.jsx)("div",{style:{height:"100%"}}),containerElement:Object(i.jsx)(Pn,{}),mapElement:Object(i.jsx)("div",{style:{height:"100%"}})})}var Pn=l.default.div(Ln()),Rn=e(531);function Yn(){var n=Object(c.a)(["\n  display:flex;\n  width:100%;\n  height:100%;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  @media (max-width:800px)\n  {\n    width:50%;\n    height:50%;\n  }\n  \n"]);return Yn=function(){return n},n}function Nn(){var n=Object(c.a)(["\n     width : 100% ; \n    display: flex ; \n    flex-direction : column ;\n    justify-content: center;\n    align-items:center;\n    padding-top:5%;\n    margin-top:-0.8%;\n    background:rgb(245,245,245);\n    \n    transition:all 0.5s;\n    \n    @media (max-width:500px){\n       margin-top:-2.5%;\n    }\n"]);return Nn=function(){return n},n}function Tn(n){var t=n.data,e=Object(h.useState)(null),a=Object(s.a)(e,2),r=a[0],c=a[1],o=Object(h.useState)(1),d=Object(s.a)(o,2),u=d[0];d[1];return console.log(t.pdf_url),Object(i.jsx)(Un,{children:Object(i.jsxs)(Bn,{children:[Object(i.jsx)(Rn.a,{file:t.pdf_url,onLoadSuccess:function(n){var t=n.numPages;c(t)},children:Object(i.jsx)(Rn.b,{size:"A4",pageNumber:u})}),Object(i.jsxs)("p",{children:["Page ",u," of ",r]})]})})}Rn.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(Rn.c.version,"/pdf.worker.js");var Un=l.default.main(Nn()),Bn=l.default.div(Yn());function Gn(){var n=Object(c.a)(["\n    display:flex;\n    width:100%;\n    height:100vh;\n    flex-direction:column;\n    justify-content:flex-start;\n    position:relative;\n    align-items:center;\n    font-family:'Circular-Std';\n    background: rgb(251,251,251);\n    overflow-x:hidden;\n"]);return Gn=function(){return n},n}var In=[{origin:{lat:27.93415776638459,lng:76.85305579301976},destination:{lat:28.99584804395379,lng:77.00556672616105},color:"#FCC888"},{origin:{lat:28.99584804395379,lng:77.00556672616105},destination:{lat:28.447943760858596,lng:77.08380978717815},color:"#CCFCD4"}];function Jn(n){var t=n.location,e=Object(h.useState)(new Date),a=Object(s.a)(e,2),r=a[0],c=a[1],o=Object(h.useState)(!0),l=Object(s.a)(o,2),x=l[0],m=l[1],p=Object(h.useState)(null),f=Object(s.a)(p,2),j=f[0],b=f[1],O=Object(h.useState)(0),v=Object(s.a)(O,2),w=v[0],k=v[1];return Object(h.useEffect)((function(){document.title="Go4Life - Trace Your Dahi",console.log(t);var n=t.search,e=(n=new URLSearchParams(n)).get("report_date");if(e){var i=new Date(e),a=n.get("milk_type");c(i),m("a2"===a)}}),[t]),Object(h.useEffect)((function(){function n(){return(n=Object(u.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(),n.next=4,g("a2",r);case 4:t=n.sent,b(t.data),console.log(t.data),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]),Object(i.jsxs)(Wn,{children:[Object(i.jsx)(dn,{data:j}),Object(i.jsx)(En,{r:In}),Object(i.jsx)(mn,{setChange:k,change:w}),j&&0==w&&Object(i.jsx)(B,{data:j,isA2:x}),j&&1==w&&Object(i.jsx)(yn,{data:j}),j&&2==w&&Object(i.jsx)(Tn,{data:j})]})}var Wn=l.default.main(Gn());e(876);t.default=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(a.a,{children:Object(i.jsx)(r.c,{children:Object(i.jsx)(r.a,{exact:!0,path:"/",component:Jn})})})})}}}]);