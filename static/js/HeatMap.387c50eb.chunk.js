(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[6],{440:function(e,t,a){"use strict";a.r(t);var i=a(7),c=a(46),n=a(3),o=a(0),s=a(382),r=a(140),p={right:10,top:10};t.default=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],u=t[1],j=Object(o.useState)({latitude:28.4501751,longitude:77.0738271,zoom:10}),h=Object(c.a)(j,2),b=h[0],d=h[1];Object(o.useEffect)((function(){Object(r.e)().then((function(e){u(e.data)}))}),[]);var l={type:"FeatureCollection",features:[]};function O(){var e=o.useContext(s.b);return Object(n.jsx)("div",{children:e.viewport.zoom})}return a.forEach((function(e){var t=e.customers,a=e.latitude,i=e.longitude;l.features.push({type:"Feature",properties:{value:t},geometry:{type:"Point",coordinates:[i,a]}})})),Object(n.jsx)("div",{children:Object(n.jsxs)(s.e,Object(i.a)(Object(i.a)({},b),{},{onViewportChange:function(e){d(e)},width:"100vw",height:"calc(100vh - 70px)",mapboxApiAccessToken:"pk.eyJ1IjoidW1ha2FudHYiLCJhIjoiY2tpYzJ1dHNnMGc1ZDJxcGUxejZxMjEybiJ9.eZIG1sab1LgfHA66zlPyKQ",children:[Object(n.jsx)(s.c,{style:p}),Object(n.jsx)(s.d,{type:"geojson",data:l,children:Object(n.jsx)(s.a,Object(i.a)({},{type:"heatmap",paint:{"heatmap-intensity":.1,"heatmap-radius":12,"heatmap-weight":["interpolate",["linear"],["get","value"],0,0,6,2],"heatmap-opacity":1}}))}),Object(n.jsx)("div",{style:{position:"absolute",left:10,top:10},children:Object(n.jsx)(O,{})})]}))})}}}]);
//# sourceMappingURL=HeatMap.387c50eb.chunk.js.map