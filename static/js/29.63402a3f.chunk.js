(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[29],{375:function(e,t,r){"use strict";var n=r(147),o=r(148);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),i=(0,n(r(149)).default)(a.createElement("path",{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"}),"MenuOpen");t.default=i},376:function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(0),i=(r(8),r(10)),c=r(18),s=r(377),l=a.forwardRef((function(e,t){var r=e.children,c=e.classes,l=e.className,p=e.invisible,u=void 0!==p&&p,d=e.open,f=e.transitionDuration,m=e.TransitionComponent,v=void 0===m?s.a:m,h=Object(o.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return a.createElement(v,Object(n.a)({in:d,timeout:f},h),a.createElement("div",{className:Object(i.a)(c.root,l,u&&c.invisible),"aria-hidden":!0,ref:t},r))}));t.a=Object(c.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(l)},377:function(e,t,r){"use strict";var n=r(1),o=r(31),a=r(3),i=r(0),c=(r(8),r(117)),s=r(19),l=r(36),p=r(20),u=r(26),d={entering:{opacity:1},entered:{opacity:1}},f={enter:s.b.enteringScreen,exit:s.b.leavingScreen},m=i.forwardRef((function(e,t){var r=e.children,s=e.disableStrictModeCompat,m=void 0!==s&&s,v=e.in,h=e.onEnter,b=e.onEntered,y=e.onEntering,g=e.onExit,O=e.onExited,j=e.onExiting,x=e.style,E=e.TransitionComponent,w=void 0===E?c.a:E,P=e.timeout,T=void 0===P?f:P,C=Object(a.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),k=Object(l.a)(),S=k.unstable_strictMode&&!m,M=i.useRef(null),N=Object(u.a)(r.ref,t),A=Object(u.a)(S?M:void 0,N),L=function(e){return function(t,r){if(e){var n=S?[M.current,t]:[t,r],a=Object(o.a)(n,2),i=a[0],c=a[1];void 0===c?e(i):e(i,c)}}},R=L(y),z=L((function(e,t){Object(p.b)(e);var r=Object(p.a)({style:x,timeout:T},{mode:"enter"});e.style.webkitTransition=k.transitions.create("opacity",r),e.style.transition=k.transitions.create("opacity",r),h&&h(e,t)})),H=L(b),B=L(j),I=L((function(e){var t=Object(p.a)({style:x,timeout:T},{mode:"exit"});e.style.webkitTransition=k.transitions.create("opacity",t),e.style.transition=k.transitions.create("opacity",t),g&&g(e)})),D=L(O);return i.createElement(w,Object(n.a)({appear:!0,in:v,nodeRef:S?M:void 0,onEnter:z,onEntered:H,onEntering:R,onExit:I,onExited:D,onExiting:B,timeout:T},C),(function(e,t){return i.cloneElement(r,Object(n.a)({style:Object(n.a)({opacity:0,visibility:"exited"!==e||v?void 0:"hidden"},d[e],x,r.props.style),ref:A},t))}))}));t.a=m},378:function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(0),i=(r(8),r(10)),c=r(18),s=r(580),l=r(216),p=r(26),u=r(217),d=r(11),f="undefined"===typeof window?a.useEffect:a.useLayoutEffect,m=a.forwardRef((function(e,t){var r=e.alignItems,c=void 0===r?"center":r,m=e.autoFocus,v=void 0!==m&&m,h=e.button,b=void 0!==h&&h,y=e.children,g=e.classes,O=e.className,j=e.component,x=e.ContainerComponent,E=void 0===x?"li":x,w=e.ContainerProps,P=(w=void 0===w?{}:w).className,T=Object(o.a)(w,["className"]),C=e.dense,k=void 0!==C&&C,S=e.disabled,M=void 0!==S&&S,N=e.disableGutters,A=void 0!==N&&N,L=e.divider,R=void 0!==L&&L,z=e.focusVisibleClassName,H=e.selected,B=void 0!==H&&H,I=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),D=a.useContext(u.a),W={dense:k||D.dense||!1,alignItems:c},K=a.useRef(null);f((function(){v&&K.current&&K.current.focus()}),[v]);var V=a.Children.toArray(y),F=V.length&&Object(l.a)(V[V.length-1],["ListItemSecondaryAction"]),_=a.useCallback((function(e){K.current=d.findDOMNode(e)}),[]),Y=Object(p.a)(_,t),X=Object(n.a)({className:Object(i.a)(g.root,O,W.dense&&g.dense,!A&&g.gutters,R&&g.divider,M&&g.disabled,b&&g.button,"center"!==c&&g.alignItemsFlexStart,F&&g.secondaryAction,B&&g.selected),disabled:M},I),G=j||"li";return b&&(X.component=j||"div",X.focusVisibleClassName=Object(i.a)(g.focusVisible,z),G=s.a),F?(G=X.component||j?G:"div","li"===E&&("li"===G?G="div":"li"===X.component&&(X.component="div")),a.createElement(u.a.Provider,{value:W},a.createElement(E,Object(n.a)({className:Object(i.a)(g.container,P),ref:Y},T),a.createElement(G,X,V),V.pop()))):a.createElement(u.a.Provider,{value:W},a.createElement(G,Object(n.a)({ref:Y},X),V))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m)},379:function(e,t,r){"use strict";var n=r(147),o=r(148);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),i=(0,n(r(149)).default)(a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.default=i},380:function(e,t,r){"use strict";var n=r(147),o=r(148);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),i=(0,n(r(149)).default)(a.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.default=i},381:function(e,t,r){"use strict";var n=r(147),o=r(148);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),i=(0,n(r(149)).default)(a.createElement("path",{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}),"Archive");t.default=i},382:function(e,t,r){"use strict";var n=r(147),o=r(148);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),i=(0,n(r(149)).default)(a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.default=i},383:function(e,t,r){"use strict";var n=r(147),o=r(148);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),i=(0,n(r(149)).default)(a.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToAppOutlined");t.default=i},500:function(e,t,r){"use strict";var n=r(33),o=r(1),a=(r(8),r(38));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(o.a)({},Object(a.a)(r,e(Object(o.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(n.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(a.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},s=r(23),l=r(60);function p(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=p(e.theme,o)||{};return Object(l.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=p(i,e)||e,a&&(t=a(t))),!1===n?t:Object(s.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=c(u({prop:"border",themeKey:"borders",transform:d}),u({prop:"borderTop",themeKey:"borders",transform:d}),u({prop:"borderRight",themeKey:"borders",transform:d}),u({prop:"borderBottom",themeKey:"borders",transform:d}),u({prop:"borderLeft",themeKey:"borders",transform:d}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),m=c(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),v=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),h=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),b=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),y=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),g=u({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var j=u({prop:"width",transform:O}),x=u({prop:"maxWidth",transform:O}),E=u({prop:"minWidth",transform:O}),w=u({prop:"height",transform:O}),P=u({prop:"maxHeight",transform:O}),T=u({prop:"minHeight",transform:O}),C=(u({prop:"size",cssProperty:"width",transform:O}),u({prop:"size",cssProperty:"height",transform:O}),c(j,x,E,w,P,T,u({prop:"boxSizing"}))),k=r(140),S=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),M=r(3),N=r(0),A=r.n(N),L=r(10),R=r(16),z=r.n(R),H=r(116);function B(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var I=r(21),D=function(e){var t=function(e){return function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.name,i=Object(M.a)(n,["name"]),c=a,s="function"===typeof t?function(e){return{root:function(r){return t(Object(o.a)({theme:e},r))}}}:{root:t},l=Object(H.a)(s,Object(o.a)({Component:e,name:a||e.displayName,classNamePrefix:c},i));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=A.a.forwardRef((function(t,n){var a=t.children,i=t.className,c=t.clone,s=t.component,p=Object(M.a)(t,["children","className","clone","component"]),u=l(t),d=Object(L.a)(u.root,i),f=p;if(r&&(f=B(f,r)),c)return A.a.cloneElement(a,Object(o.a)({className:Object(L.a)(a.props.className,d)},f));if("function"===typeof a)return a(Object(o.a)({className:d},f));var m=s||e;return A.a.createElement(m,Object(o.a)({ref:n,className:d},f),a)}));return z()(p,e),p}}(e);return function(e,r){return t(e,Object(o.a)({defaultTheme:I.a},r))}},W=i(c(f,m,v,h,b,y,g,C,k.b,S)),K=D("div")(W,{name:"MuiBox"});t.a=K},549:function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(0),i=(r(8),r(10)),c=r(18),s=r(217),l=a.forwardRef((function(e,t){var r=e.classes,c=e.className,l=Object(o.a)(e,["classes","className"]),p=a.useContext(s.a);return a.createElement("div",Object(n.a)({className:Object(i.a)(r.root,c,"flex-start"===p.alignItems&&r.alignItemsFlexStart),ref:t},l))}));t.a=Object(c.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(l)},550:function(e,t,r){"use strict";var n=r(1),o=r(3),a=r(0),i=(r(8),r(10)),c=r(18),s=r(544),l=r(217),p=a.forwardRef((function(e,t){var r=e.children,c=e.classes,p=e.className,u=e.disableTypography,d=void 0!==u&&u,f=e.inset,m=void 0!==f&&f,v=e.primary,h=e.primaryTypographyProps,b=e.secondary,y=e.secondaryTypographyProps,g=Object(o.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=a.useContext(l.a).dense,j=null!=v?v:r;null==j||j.type===s.a||d||(j=a.createElement(s.a,Object(n.a)({variant:O?"body2":"body1",className:c.primary,component:"span",display:"block"},h),j));var x=b;return null==x||x.type===s.a||d||(x=a.createElement(s.a,Object(n.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},y),x)),a.createElement("div",Object(n.a)({className:Object(i.a)(c.root,p,O&&c.dense,m&&c.inset,j&&x&&c.multiline),ref:t},g),j,x)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(p)},583:function(e,t,r){"use strict";var n=r(3),o=r(1),a=r(0),i=(r(8),r(11)),c=r(134),s=r(10),l=r(584),p=r(376),u=r(18),d=r(137),f=r(542),m=r(24),v=r(19),h=r(36),b={left:"right",right:"left",top:"down",bottom:"up"};function y(e){return-1!==["left","right"].indexOf(e)}function g(e,t){return"rtl"===e.direction&&y(t)?b[t]:t}var O={enter:v.b.enteringScreen,exit:v.b.leavingScreen},j=a.forwardRef((function(e,t){var r=e.anchor,i=void 0===r?"left":r,c=e.BackdropProps,u=e.children,v=e.classes,y=e.className,j=e.elevation,x=void 0===j?16:j,E=e.ModalProps,w=(E=void 0===E?{}:E).BackdropProps,P=Object(n.a)(E,["BackdropProps"]),T=e.onClose,C=e.open,k=void 0!==C&&C,S=e.PaperProps,M=void 0===S?{}:S,N=e.SlideProps,A=e.TransitionComponent,L=void 0===A?d.a:A,R=e.transitionDuration,z=void 0===R?O:R,H=e.variant,B=void 0===H?"temporary":H,I=Object(n.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),D=Object(h.a)(),W=a.useRef(!1);a.useEffect((function(){W.current=!0}),[]);var K=g(D,i),V=a.createElement(f.a,Object(o.a)({elevation:"temporary"===B?x:0,square:!0},M,{className:Object(s.a)(v.paper,v["paperAnchor".concat(Object(m.a)(K))],M.className,"temporary"!==B&&v["paperAnchorDocked".concat(Object(m.a)(K))])}),u);if("permanent"===B)return a.createElement("div",Object(o.a)({className:Object(s.a)(v.root,v.docked,y),ref:t},I),V);var F=a.createElement(L,Object(o.a)({in:k,direction:b[K],timeout:z,appear:W.current},N),V);return"persistent"===B?a.createElement("div",Object(o.a)({className:Object(s.a)(v.root,v.docked,y),ref:t},I),F):a.createElement(l.a,Object(o.a)({BackdropProps:Object(o.a)({},c,w,{transitionDuration:z}),BackdropComponent:p.a,className:Object(s.a)(v.root,v.modal,y),open:k,onClose:T,ref:t},I,P),F)})),x=Object(u.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(j),E=r(35),w=r(55),P=r(20),T="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;var C=function(e){var t=e.children,r=e.defer,n=void 0!==r&&r,o=e.fallback,i=void 0===o?null:o,c=a.useState(!1),s=c[0],l=c[1];return T((function(){n||l(!0)}),[n]),a.useEffect((function(){n&&l(!0)}),[n]),a.createElement(a.Fragment,null,s?t:i)},k=r(23),S=a.forwardRef((function(e,t){var r=e.anchor,i=e.classes,c=e.className,l=e.width,p=Object(n.a)(e,["anchor","classes","className","width"]);return a.createElement("div",Object(o.a)({className:Object(s.a)(i.root,i["anchor".concat(Object(m.a)(r))],c),ref:t,style:Object(k.a)({},y(r)?"width":"height",l)},p))})),M=Object(u.a)((function(e){return{root:{position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},anchorLeft:{right:"auto"},anchorRight:{left:"auto",right:0},anchorTop:{bottom:"auto",right:0},anchorBottom:{top:"auto",bottom:0,right:0}}}),{name:"PrivateSwipeArea"})(S),N=null;function A(e,t){return"right"===e?document.body.offsetWidth-t[0].pageX:t[0].pageX}function L(e,t){return"bottom"===e?window.innerHeight-t[0].clientY:t[0].clientY}function R(e,t){return e?t.clientWidth:t.clientHeight}function z(e,t,r,n){return Math.min(Math.max(r?t-e:n+t-e,0),n)}var H="undefined"!==typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),B={enter:v.b.enteringScreen,exit:v.b.leavingScreen},I="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,D=a.forwardRef((function(e,t){var r=Object(h.a)(),s=Object(c.a)({name:"MuiSwipeableDrawer",props:Object(o.a)({},e),theme:r}),l=s.anchor,p=void 0===l?"left":l,u=s.disableBackdropTransition,d=void 0!==u&&u,f=s.disableDiscovery,m=void 0!==f&&f,v=s.disableSwipeToOpen,b=void 0===v?H:v,O=s.hideBackdrop,j=s.hysteresis,T=void 0===j?.52:j,k=s.minFlingVelocity,S=void 0===k?450:k,D=s.ModalProps,W=(D=void 0===D?{}:D).BackdropProps,K=Object(n.a)(D,["BackdropProps"]),V=s.onClose,F=s.onOpen,_=s.open,Y=s.PaperProps,X=void 0===Y?{}:Y,G=s.SwipeAreaProps,$=s.swipeAreaWidth,J=void 0===$?20:$,q=s.transitionDuration,Q=void 0===q?B:q,U=s.variant,Z=void 0===U?"temporary":U,ee=Object(n.a)(s,["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"]),te=a.useState(!1),re=te[0],ne=te[1],oe=a.useRef({isSwiping:null}),ae=a.useRef(),ie=a.useRef(),ce=a.useRef(),se=a.useRef(!1),le=a.useRef();I((function(){le.current=null}),[_]);var pe=a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mode,o=void 0===n?null:n,a=t.changeTransition,i=void 0===a||a,c=g(r,p),s=-1!==["right","bottom"].indexOf(c)?1:-1,l=y(p),u=l?"translate(".concat(s*e,"px, 0)"):"translate(0, ".concat(s*e,"px)"),f=ce.current.style;f.webkitTransform=u,f.transform=u;var m="";if(o&&(m=r.transitions.create("all",Object(P.a)({timeout:Q},{mode:o}))),i&&(f.webkitTransition=m,f.transition=m),!d&&!O){var v=ie.current.style;v.opacity=1-e/R(l,ce.current),i&&(v.webkitTransition=m,v.transition=m)}}),[p,d,O,r,Q]),ue=Object(w.a)((function(e){if(se.current)if(N=null,se.current=!1,ne(!1),oe.current.isSwiping){oe.current.isSwiping=null;var t,n=g(r,p),o=y(p);t=o?A(n,e.changedTouches):L(n,e.changedTouches);var a=o?oe.current.startX:oe.current.startY,i=R(o,ce.current),c=z(t,a,_,i),s=c/i;Math.abs(oe.current.velocity)>S&&(le.current=1e3*Math.abs((i-c)/oe.current.velocity)),_?oe.current.velocity>S||s>T?V():pe(0,{mode:"exit"}):oe.current.velocity<-S||1-s>T?F():pe(R(o,ce.current),{mode:"enter"})}else oe.current.isSwiping=null})),de=Object(w.a)((function(e){if(ce.current&&se.current&&(null==N||N===oe.current)){var t=g(r,p),n=y(p),o=A(t,e.touches),a=L(t,e.touches);if(_&&ce.current.contains(e.target)&&null==N){var i=function(e){var t=e.domTreeShapes,r=e.start,n=e.current,o=e.anchor,a={x:"scrollLeft",y:"scrollTop"},i={x:"scrollWidth",y:"scrollHeight"},c={x:"clientWidth",y:"clientHeight"};return t.some((function(e){var t=n>=r;"top"!==o&&"left"!==o||(t=!t);var s="left"===o||"right"===o?"x":"y",l=e[a[s]],p=l>0,u=l+e[c[s]]<e[i[s]];return t&&u||!t&&p?e:null}))}({domTreeShapes:function(e,t){for(var r=[];e&&e!==t;){var n=window.getComputedStyle(e);"absolute"===n.getPropertyValue("position")||"hidden"===n.getPropertyValue("overflow-x")?r=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push(e),e=e.parentElement}return r}(e.target,ce.current),start:n?oe.current.startX:oe.current.startY,current:n?o:a,anchor:p});if(i)return void(N=i);N=oe.current}if(null==oe.current.isSwiping){var c=Math.abs(o-oe.current.startX),s=Math.abs(a-oe.current.startY);c>s&&e.cancelable&&e.preventDefault();var l=n?c>s&&c>3:s>c&&s>3;if(!0===l||(n?s>3:c>3)){if(oe.current.isSwiping=l,!l)return void ue(e);oe.current.startX=o,oe.current.startY=a,m||_||(n?oe.current.startX-=J:oe.current.startY-=J)}}if(oe.current.isSwiping){var u=R(n,ce.current),d=n?oe.current.startX:oe.current.startY;_&&!oe.current.paperHit&&(d=Math.min(d,u));var f=z(n?o:a,d,_,u);if(_)if(oe.current.paperHit)0===f&&(oe.current.startX=o,oe.current.startY=a);else{if(!(n?o<u:a<u))return;oe.current.paperHit=!0,oe.current.startX=o,oe.current.startY=a}null===oe.current.lastTranslate&&(oe.current.lastTranslate=f,oe.current.lastTime=performance.now()+1);var v=(f-oe.current.lastTranslate)/(performance.now()-oe.current.lastTime)*1e3;oe.current.velocity=.4*oe.current.velocity+.6*v,oe.current.lastTranslate=f,oe.current.lastTime=performance.now(),e.cancelable&&e.preventDefault(),pe(f)}}})),fe=Object(w.a)((function(e){if(!e.defaultPrevented&&!e.muiHandled&&(!_||ie.current.contains(e.target)||ce.current.contains(e.target))){var t=g(r,p),n=y(p),o=A(t,e.touches),a=L(t,e.touches);if(!_){if(b||e.target!==ae.current)return;if(n){if(o>J)return}else if(a>J)return}e.muiHandled=!0,N=null,oe.current.startX=o,oe.current.startY=a,ne(!0),!_&&ce.current&&pe(R(n,ce.current)+(m?20:-J),{changeTransition:!1}),oe.current.velocity=0,oe.current.lastTime=null,oe.current.lastTranslate=null,oe.current.paperHit=!1,se.current=!0}}));a.useEffect((function(){if("temporary"===Z){var e=Object(E.a)(ce.current);return e.addEventListener("touchstart",fe),e.addEventListener("touchmove",de,{passive:!1}),e.addEventListener("touchend",ue),function(){e.removeEventListener("touchstart",fe),e.removeEventListener("touchmove",de,{passive:!1}),e.removeEventListener("touchend",ue)}}}),[Z,fe,de,ue]),a.useEffect((function(){return function(){N===oe.current&&(N=null)}}),[]),a.useEffect((function(){_||ne(!1)}),[_]);var me=a.useCallback((function(e){ie.current=i.findDOMNode(e)}),[]);return a.createElement(a.Fragment,null,a.createElement(x,Object(o.a)({open:!("temporary"!==Z||!re)||_,variant:Z,ModalProps:Object(o.a)({BackdropProps:Object(o.a)({},W,{ref:me})},K),PaperProps:Object(o.a)({},X,{style:Object(o.a)({pointerEvents:"temporary"!==Z||_?"":"none"},X.style),ref:ce}),anchor:p,transitionDuration:le.current||Q,onClose:V,ref:t},ee)),!b&&"temporary"===Z&&a.createElement(C,null,a.createElement(M,Object(o.a)({anchor:p,ref:ae,width:J},G))))}));t.a=D}}]);