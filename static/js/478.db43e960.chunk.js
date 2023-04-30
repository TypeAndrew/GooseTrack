/*! For license information please see 478.db43e960.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_goose_track=self.webpackChunkreact_goose_track||[]).push([[478],{8478:function(e,r,t){t.r(r),t.d(r,{default:function(){return Or}});var n,o,i=t(7689),a={selector:"ChooseDay_selector__VAaY5",dateToday:"ChooseDay_dateToday__mJPtD",periodPaginator:"ChooseDay_periodPaginator__5LSVP",viue:"ChooseDay_viue__+OPGB",viueLink:"ChooseDay_viueLink__TZsX5"},l=t(168),d=t(6444),s=d.ZP.div(n||(n=(0,l.Z)(["\n    height: 74px;\n  \n    margin-top: 24px;\n    margin-bottom: 14px;\n    margin-left: 20px;\n    margin-right: 20px;\n    background: var(--primary-bgc-color);\n    border: 1px solid var(--auth-placeholder-color);\n    border-radius: 8px;\n  \n    @media screen and (min-width: 768px) {\n      height: 68px;\n      margin-top: 32px;\n      margin-bottom: 16px;\n      margin-left: 32px;\n      margin-right: 32px;\n    }\n  "]))),p=t(184),c=function(){return(0,p.jsx)(s,{children:"Week days"})},g=t(9439),u=t(2791),f=["title","titleId"];function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function b(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,r){var t=e.title,n=e.titleId,i=b(e,f);return u.createElement("svg",h({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":n},i),t?u.createElement("title",{id:n},t):null,o||(o=u.createElement("path",{d:"M8 1V15M1 8H15",stroke:"#111111",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var y,x,v,w,j,k=u.forwardRef(m),S=(t.p,d.ZP.button(y||(y=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  width: 100%;\n  height: 52px;\n  gap: 8px;  \n  margin-top: auto;\n\n  color: var(--primary-text-color);\n  background: var(--active-item-sidebar-background);\n  border: 1px dashed #3E85F3;\n  border-radius: 8px;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px; \n\n  :hover{\n    background: #c6e6ff;\n    transition: 200ms;\n  }\n"])))),C=d.ZP.div(x||(x=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  \n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  overflow-y: scroll;    \n  "]))),R=d.ZP.div(v||(v=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;    \n"]))),O=d.ZP.div(w||(w=(0,l.Z)(["  \n\tposition: absolute;\n\t\t\n\ttop:50%;\n\tleft: 50%;\n\ttransform: translate(-50%,-50%);    \n\t\t\t\n\tbackground-color: var(--primary-bgc-color);\n\tbox-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);\n\tborder-radius: 8px; \n\twidth: 30%;\n\theight: 50%; \n\ttext-align: center; \n\tborder: 1px solid var(--auth-placeholder-color); \n"]))),L=function(e){var r=e.onClose,t=e.children;(0,u.useEffect)((function(){var e=function(e){"Escape"===e.code&&r()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);return(0,p.jsx)(C,{children:(0,p.jsx)(R,{onClick:function(e){e.target===e.currentTarget&&r()},children:(0,p.jsx)(O,{children:(0,p.jsx)("p",{children:t})})})})},T=function(e){var r=e.onClose;return(0,p.jsx)(L,{onClose:r})},P=function(e){e.onClick;var r=(0,u.useState)(!1),t=(0,g.Z)(r,2),n=t[0],o=t[1];return(0,p.jsxs)(S,{onClick:function(){return o(!0)},children:[(0,p.jsx)(k,{}),"Add task",n&&(0,p.jsx)(T,{onClose:function(){return o(!1)},data:"Hello"})]})},W=["title","titleId"];function B(){return B=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},B.apply(this,arguments)}function _(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function E(e,r){var t=e.title,n=e.titleId,o=_(e,W);return u.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:r,"aria-labelledby":n},o),t?u.createElement("title",{id:n},t):null,j||(j=u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"})))}var Z,z,I,A,H,D,M=u.forwardRef(E),N=(t.p,d.ZP.div(Z||(Z=(0,l.Z)(["\n  height: 38px;\n  margin-bottom: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))),G=d.ZP.h2(z||(z=(0,l.Z)(["\n  color: var(--primary-text-color);\n"]))),X=(0,d.ZP)(M)(I||(I=(0,l.Z)(["\n  stroke: var(--primary-text-color);\n  :hover {\n    stroke: var(--accent-bgc-color);\n    transition: 200ms;\n  }\n"]))),Y=function(e){var r=e.title;return(0,p.jsxs)(N,{children:[(0,p.jsx)(G,{children:r}),(0,p.jsx)(X,{})]})},F=d.ZP.div(A||(A=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0px;\n  gap: 14px;\n  margin-bottom: 14px;\n  overflow-y: auto;\n  @media screen and (min-width: 768px) {\n    gap: 18px;\n    margin-bottom: 32px;\n  }\n"]))),J=["title","titleId"];function V(){return V=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},V.apply(this,arguments)}function q(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function U(e,r){var t=e.title,n=e.titleId,o=q(e,J);return u.createElement("svg",V({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":n},o),t?u.createElement("title",{id:n},t):null,H||(H=u.createElement("g",{clipPath:"url(#clip0_124_1579)"},u.createElement("path",{d:"M1.94727 4.08332C2.95588 2.33974 4.84105 1.16666 7.0002 1.16666C10.2219 1.16666 12.8335 3.77833 12.8335 6.99999C12.8335 10.2217 10.2219 12.8333 7.0002 12.8333C4.84105 12.8333 2.95588 11.6602 1.94727 9.91666",stroke:"#111111",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}),u.createElement("path",{d:"M7 9.33332L9.33333 6.99999L7 4.66666",stroke:"#111111",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}),u.createElement("path",{d:"M1.16699 7L9.33366 7",stroke:"#111111",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}))),D||(D=u.createElement("defs",null,u.createElement("clipPath",{id:"clip0_124_1579"},u.createElement("rect",{width:14,height:14,fill:"white"})))))}var K,Q,$=u.forwardRef(U),ee=(t.p,["title","titleId"]);function re(){return re=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},re.apply(this,arguments)}function te(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function ne(e,r){var t=e.title,n=e.titleId,o=te(e,ee);return u.createElement("svg",re({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":n},o),t?u.createElement("title",{id:n},t):null,K||(K=u.createElement("g",{clipPath:"url(#clip0_124_1583)"},u.createElement("path",{d:"M1.45801 12.5417L4.69508 11.2966C4.90213 11.217 5.00565 11.1772 5.10251 11.1252C5.18854 11.079 5.27056 11.0257 5.3477 10.9659C5.43455 10.8985 5.51298 10.82 5.66984 10.6632L12.2497 4.08334C12.894 3.43901 12.894 2.39434 12.2497 1.75C11.6054 1.10567 10.5607 1.10567 9.91636 1.75L3.33651 8.32984C3.17964 8.4867 3.10121 8.56513 3.03382 8.65198C2.97396 8.72912 2.92066 8.81114 2.87448 8.89717C2.82249 8.99403 2.78267 9.09755 2.70304 9.3046L1.45801 12.5417ZM1.45801 12.5417L2.65858 9.42023C2.74449 9.19686 2.78744 9.08518 2.86112 9.03402C2.92551 8.98931 3.00518 8.9724 3.08218 8.98711C3.17029 9.00393 3.2549 9.08855 3.42412 9.25777L4.74193 10.5756C4.91115 10.7448 4.99576 10.8294 5.01259 10.9175C5.02729 10.9945 5.01038 11.0742 4.96568 11.1386C4.91452 11.2122 4.80283 11.2552 4.57947 11.3411L1.45801 12.5417Z",stroke:"#111111",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}))),Q||(Q=u.createElement("defs",null,u.createElement("clipPath",{id:"clip0_124_1583"},u.createElement("rect",{width:14,height:14,fill:"white"})))))}var oe,ie,ae,le=u.forwardRef(ne),de=(t.p,["title","titleId"]);function se(){return se=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},se.apply(this,arguments)}function pe(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function ce(e,r){var t=e.title,n=e.titleId,o=pe(e,de);return u.createElement("svg",se({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":n},o),t?u.createElement("title",{id:n},t):null,oe||(oe=u.createElement("path",{d:"M6 2H10",stroke:"#111111",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),ie||(ie=u.createElement("path",{d:"M2 4H14",stroke:"#111111",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),ae||(ae=u.createElement("path",{d:"M3.33334 4L3.73393 10.0089C3.80831 11.1245 3.8455 11.6823 4.0278 12.1304C4.35879 12.9441 5.02973 13.5718 5.86358 13.8479C6.32286 14 6.88191 14 8.00001 14V14C9.11811 14 9.67716 14 10.1364 13.8479C10.9703 13.5718 11.6412 12.9441 11.9722 12.1304C12.1545 11.6823 12.1917 11.1245 12.2661 10.0089L12.6667 4",stroke:"#111111",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var ge,ue,fe,he=u.forwardRef(ce),be=(t.p,d.ZP.ul(ge||(ge=(0,l.Z)(["\n  padding: 0px;\n    display: flex;\n    gap: 10px;\n"])))),me=d.ZP.li(ue||(ue=(0,l.Z)(["\n \n"]))),ye=d.ZP.button(fe||(fe=(0,l.Z)(["\nborder: none;\nbackground-color: inherit;\n width: 15px;\n height: 15px;\n padding: 0;\n"]))),xe=function(){return(0,p.jsxs)(be,{children:[(0,p.jsx)(me,{children:(0,p.jsx)(ye,{type:"button",onClick:function(){console.log("open TaskModal")},children:(0,p.jsx)($,{})})}),(0,p.jsx)(me,{children:(0,p.jsx)(ye,{type:"button",onClick:function(){console.log("open modal")},children:(0,p.jsx)(le,{})})}),(0,p.jsx)(me,{children:(0,p.jsx)(ye,{type:"button",onClick:function(){console.log("handleDelete")},children:(0,p.jsx)(he,{})})})]})},ve=t(1725),we=t.n(ve),je=function(e,r){var t=we()({},e,r);for(var n in e){var o;e[n]&&"object"===typeof r[n]&&we()(t,((o={})[n]=we()(e[n],r[n]),o))}return t},ke={breakpoints:[40,52,64].map((function(e){return e+"em"}))},Se=function(e){return"@media screen and (min-width: "+e+")"},Ce=function(e,r){return Re(r,e,e)},Re=function(e,r,t,n,o){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:o;return e===o?t:e},Oe=function e(r){var t={},n=function(e){var n={},o=!1,i=e.theme&&e.theme.disableStyledSystemCache;for(var a in e)if(r[a]){var l=r[a],d=e[a],s=Re(e.theme,l.scale,l.defaults);if("object"!==typeof d)we()(n,l(d,s,e));else{if(t.breakpoints=!i&&t.breakpoints||Re(e.theme,"breakpoints",ke.breakpoints),Array.isArray(d)){t.media=!i&&t.media||[null].concat(t.breakpoints.map(Se)),n=je(n,Le(t.media,l,s,d,e));continue}null!==d&&(n=je(n,Te(t.breakpoints,l,s,d,e)),o=!0)}}return o&&(n=function(e){var r={};return Object.keys(e).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){r[t]=e[t]})),r}(n)),n};n.config=r,n.propNames=Object.keys(r),n.cache=t;var o=Object.keys(r).filter((function(e){return"config"!==e}));return o.length>1&&o.forEach((function(t){var o;n[t]=e(((o={})[t]=r[t],o))})),n},Le=function(e,r,t,n,o){var i={};return n.slice(0,e.length).forEach((function(n,a){var l,d=e[a],s=r(n,t,o);d?we()(i,((l={})[d]=we()({},i[d],s),l)):we()(i,s)})),i},Te=function(e,r,t,n,o){var i={};for(var a in n){var l=e[a],d=r(n[a],t,o);if(l){var s,p=Se(l);we()(i,((s={})[p]=we()({},i[p],d),s))}else we()(i,d)}return i},Pe=function(e){var r=e.properties,t=e.property,n=e.scale,o=e.transform,i=void 0===o?Ce:o,a=e.defaultScale;r=r||[t];var l=function(e,t,n){var o={},a=i(e,t,n);if(null!==a)return r.forEach((function(e){o[e]=a})),o};return l.scale=n,l.defaults=a,l},We=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var n=e[t];r[t]=!0!==n?"function"!==typeof n?Pe(n):n:Pe({property:t,scale:t})})),Oe(r)},Be=We({width:{property:"width",scale:"sizes",transform:function(e,r){return Re(r,e,!function(e){return"number"===typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),_e={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};_e.bg=_e.backgroundColor;var Ee=We(_e),Ze=We({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),ze=We({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),Ie={space:[0,4,8,16,32,64,128,256,512]},Ae=We({gridGap:{property:"gridGap",scale:"space",defaultScale:Ie.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:Ie.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:Ie.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),He={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};He.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},He.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},He.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},He.borderBottomColor={property:"borderBottomColor",scale:"colors"},He.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},He.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},He.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},He.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},He.borderLeftColor={property:"borderLeftColor",scale:"colors"},He.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},He.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},He.borderRightColor={property:"borderRightColor",scale:"colors"},He.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var De=We(He),Me={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};Me.bgImage=Me.backgroundImage,Me.bgSize=Me.backgroundSize,Me.bgPosition=Me.backgroundPosition,Me.bgRepeat=Me.backgroundRepeat;var Ne=We(Me),Ge={space:[0,4,8,16,32,64,128,256,512]},Xe=We({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Ge.space},right:{property:"right",scale:"space",defaultScale:Ge.space},bottom:{property:"bottom",scale:"space",defaultScale:Ge.space},left:{property:"left",scale:"space",defaultScale:Ge.space}}),Ye={space:[0,4,8,16,32,64,128,256,512]},Fe=function(e){return"number"===typeof e&&!isNaN(e)},Je=function(e,r){if(!Fe(e))return Re(r,e,e);var t=e<0,n=Math.abs(e),o=Re(r,n,n);return Fe(o)?o*(t?-1:1):t?"-"+o:o},Ve={};Ve.margin={margin:{property:"margin",scale:"space",transform:Je,defaultScale:Ye.space},marginTop:{property:"marginTop",scale:"space",transform:Je,defaultScale:Ye.space},marginRight:{property:"marginRight",scale:"space",transform:Je,defaultScale:Ye.space},marginBottom:{property:"marginBottom",scale:"space",transform:Je,defaultScale:Ye.space},marginLeft:{property:"marginLeft",scale:"space",transform:Je,defaultScale:Ye.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:Je,defaultScale:Ye.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:Je,defaultScale:Ye.space}},Ve.margin.m=Ve.margin.margin,Ve.margin.mt=Ve.margin.marginTop,Ve.margin.mr=Ve.margin.marginRight,Ve.margin.mb=Ve.margin.marginBottom,Ve.margin.ml=Ve.margin.marginLeft,Ve.margin.mx=Ve.margin.marginX,Ve.margin.my=Ve.margin.marginY,Ve.padding={padding:{property:"padding",scale:"space",defaultScale:Ye.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:Ye.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:Ye.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:Ye.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:Ye.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:Ye.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:Ye.space}},Ve.padding.p=Ve.padding.padding,Ve.padding.pt=Ve.padding.paddingTop,Ve.padding.pr=Ve.padding.paddingRight,Ve.padding.pb=Ve.padding.paddingBottom,Ve.padding.pl=Ve.padding.paddingLeft,Ve.padding.px=Ve.padding.paddingX,Ve.padding.py=Ve.padding.paddingY;(function(){for(var e={},r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];t.forEach((function(r){r&&r.config&&we()(e,r.config)})),Oe(e)})(We(Ve.margin),We(Ve.padding)),We({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function qe(){return qe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},qe.apply(this,arguments)}var Ue,Ke,Qe,$e,er,rr,tr,nr=function(e,r,t,n,o){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:o;return e===o?t:e},or=[40,52,64].map((function(e){return e+"em"})),ir={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},ar={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},lr={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},dr={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},sr=function(e,r){if("number"!==typeof r||r>=0)return nr(e,r,r);var t=Math.abs(r),n=nr(e,t,t);return"string"===typeof n?"-"+n:-1*n},pr=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return qe({},e,((t={})[r]=sr,t))}),{}),cr=function e(r){return function(t){void 0===t&&(t={});var n=qe({},ir,{},t.theme||t),o={},i=function(e){return function(r){var t={},n=nr(r,"breakpoints",or),o=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var a="function"===typeof e[i]?e[i](r):e[i];if(null!=a)if(Array.isArray(a))for(var l=0;l<a.slice(0,o.length).length;l++){var d=o[l];d?(t[d]=t[d]||{},null!=a[l]&&(t[d][i]=a[l])):t[i]=a[l]}else t[i]=a}return t}}("function"===typeof r?r(n):r)(n);for(var a in i){var l=i[a],d="function"===typeof l?l(n):l;if("variant"!==a)if(d&&"object"===typeof d)o[a]=e(d)(n);else{var s=nr(ar,a,a),p=nr(dr,s),c=nr(n,p,nr(n,s,{})),g=nr(pr,s,nr)(c,d,d);if(lr[s])for(var u=lr[s],f=0;f<u.length;f++)o[u[f]]=g;else o[s]=g}else o=qe({},o,{},e(nr(n,d))(n))}return o}},gr=function(e){var r,t,n=e.scale,o=e.prop,i=void 0===o?"variant":o,a=e.variants,l=void 0===a?{}:a,d=e.key;t=Object.keys(l).length?function(e,r,t){return cr(Re(r,e,null))(t.theme)}:function(e,r){return Re(r,e,null)},t.scale=n||d,t.defaults=l;var s=((r={})[i]=t,r);return Oe(s)},ur=(gr({key:"buttons"}),gr({key:"textStyles",prop:"textStyle"}),gr({key:"colorStyles",prop:"colors"}),Be.width,Be.height,Be.minWidth,Be.minHeight,Be.maxWidth,Be.maxHeight,Be.size,Be.verticalAlign,Be.display,Be.overflow,Be.overflowX,Be.overflowY,Ee.opacity,Ze.fontSize,Ze.fontFamily,Ze.fontWeight,Ze.lineHeight,Ze.textAlign,Ze.fontStyle,Ze.letterSpacing,ze.alignItems,ze.alignContent,ze.justifyItems,ze.justifyContent,ze.flexWrap,ze.flexDirection,ze.flex,ze.flexGrow,ze.flexShrink,ze.flexBasis,ze.justifySelf,ze.alignSelf,ze.order,Ae.gridGap,Ae.gridColumnGap,Ae.gridRowGap,Ae.gridColumn,Ae.gridRow,Ae.gridAutoFlow,Ae.gridAutoColumns,Ae.gridAutoRows,Ae.gridTemplateColumns,Ae.gridTemplateRows,Ae.gridTemplateAreas,Ae.gridArea,De.borderWidth,De.borderStyle,De.borderColor,De.borderTop,De.borderRight,De.borderBottom,De.borderLeft,De.borderRadius,Ne.backgroundImage,Ne.backgroundSize,Ne.backgroundPosition,Ne.backgroundRepeat,Xe.zIndex,Xe.top,Xe.right,Xe.bottom,Xe.left,d.ZP.li(Ue||(Ue=(0,l.Z)(["\n  display: block;\n  padding: 14px 12px 18px 16px;\n  width: 100%;\n\n  background: var(--secondary-bgc-color);\n  border: 1px solid var(--auth-placeholder-color);\n  border-radius: 8px;\n\n  @media screen and (min-width: 768px) {\n    padding: 14px 14px 18px;\n  }\n"])))),fr=d.ZP.h3(Ke||(Ke=(0,l.Z)(["\n  margin-bottom: 28px;\n\n  color: var(--primary-text-color);\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),hr=d.ZP.div(Qe||(Qe=(0,l.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),br=d.ZP.div($e||($e=(0,l.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n"]))),mr=d.ZP.img(er||(er=(0,l.Z)(["\n  width: 32px;\n  height: 32px;\n  border: 1.8px solid #3e85f3;\n  border-radius: 32px;\n  gap: 8px;\n"]))),yr=(0,d.ZP)("div")({padding:"4px 12px",height:"20px",borderRadius:"4px",color:"#F7F6F9",fontWeight:"600",fontSize:"10px",lineHeight:"12px"},gr({variants:{Low:{bg:"#72C2F8"},Medium:{bg:"#F3B249"},High:{bg:"#EA3D65"}}})),xr=t(3505),vr=function(e){var r=e.task,t=(0,xr.a)().user;return(0,p.jsxs)(ur,{children:[(0,p.jsx)(fr,{children:r.title}),(0,p.jsxs)(hr,{children:[(0,p.jsxs)(br,{children:[(0,p.jsx)(mr,{alt:"User avatar",src:t.avatar}),(0,p.jsx)(yr,{variant:r.priority,children:r.priority})]}),(0,p.jsx)(xe,{})]})]})},wr=function(e){var r=e.collection;return(0,p.jsx)(F,{children:r.map((function(e){return(0,p.jsx)(vr,{task:e})}))})},jr=d.ZP.li(rr||(rr=(0,l.Z)(["\n  padding: 25px 18px 10px 18px;\n  min-width: 280px;\n  max-height: 568px;\n  background: var(--primary-bgc-color);\n  border: 1px solid var(--auth-placeholder-color);\n  border-radius: 8px;\n\n  display: block;\n\n  @media screen and (min-width: 768px) {\n    padding: 18px 20px 28px;\n  }\n"]))),kr=function(e){var r=e.title,t=e.collection;return(0,p.jsxs)(jr,{children:[(0,p.jsx)(Y,{title:r}),t.length>0&&(0,p.jsx)(wr,{collection:t}),(0,p.jsx)(P,{})]})},Sr=d.ZP.ul(tr||(tr=(0,l.Z)(["\n\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  overflow-x: auto;\n  margin-left: 20px;\n  margin-right: 20px;\n  gap: 20px;\n\n@media screen and (min-width: 768px) {\n  padding-left: 32px;\n  padding-right: 32px;\n  }\n \n"]))),Cr=function(e){var r=e.toDoTasks,t=e.inProgressTasks,n=e.doneTasks;return(0,p.jsxs)(Sr,{children:[(0,p.jsx)(kr,{title:"To do",collection:r}),(0,p.jsx)(kr,{title:"In progress",collection:t}),(0,p.jsx)(kr,{title:"Done",collection:n})]})},Rr={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},Or=function(){var e=(0,i.UO)().currentDay,r=e.split("."),t=[{_id:"644ac5a7c3856b23c8b1b54e",title:"Test1",priority:"Low",start:"09:00",end:"09:30",date:"2023-04-30",category:"To do",owner:"644797791e794314754f77ae",__v:0},{_id:"644ac5a7c3856b23c8b1b54e",title:"Test2",priority:"Medium",start:"09:00",end:"09:30",date:"2023-04-30",category:"To do",owner:"644797791e794314754f77ae",__v:0},{_id:"644ac5a7c3856b23c8b1b54e",title:"Test3",priority:"Low",start:"09:00",end:"09:30",date:"2023-04-29",category:"To do",owner:"644797791e794314754f77ae",__v:0},{_id:"644ac5a7c3856b23c8b1b54e",title:"Test4",priority:"High",start:"09:00",end:"09:30",date:"2023-04-30",category:"Done",owner:"644797791e794314754f77ae",__v:0},{_id:"644ac5a7c3856b23c8b1b54e",title:"Test5",priority:"Low",start:"09:00",end:"09:30",date:"2023-04-29",category:"Done",owner:"644797791e794314754f77ae",__v:0},{_id:"644ac5a7c3856b23c8b1b54e",title:"Test6",priority:"Low",start:"09:00",end:"09:30",date:"2023-04-29",category:"In progress",owner:"644797791e794314754f77ae",__v:0}],n=function(){var r=e.split("."),n=Number(r[1])+1,o="".concat(n);n<10&&(o="0".concat(n));var i="".concat(r[0],"-").concat(o,"-").concat(r[2]);return t.filter((function(e){return e.date===i}))}(),o=n.filter((function(e){return"To do"===e.category})),l=n.filter((function(e){return"In progress"===e.category})),d=n.filter((function(e){return"Done"===e.category}));return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:a.selector,children:[(0,p.jsxs)("div",{className:a.periodPaginator,children:[" ",(0,p.jsxs)("span",{className:a.dateToday,children:[r[2]," ",Rr[r[1]]," ",r[0]]}),(0,p.jsxs)("div",{className:a.dayChange,children:[(0,p.jsx)("button",{type:"button",className:a.btn_left,children:(0,p.jsx)("img",{widt:"10px",src:"./left.svg",alt:"<"})}),(0,p.jsx)("button",{type:"button",className:a.btn_ringt,children:(0,p.jsx)("img",{widt:"10px",src:"./ringt.svg",alt:">"})})]})]}),(0,p.jsxs)("ul",{className:a.viue,children:[(0,p.jsx)("li",{className:a.viueLink,children:"Month"}),(0,p.jsx)("li",{className:a.viueLink,children:"Day"})]})]}),(0,p.jsx)(c,{}),(0,p.jsx)(Cr,{toDoTasks:o,inProgressTasks:l,doneTasks:d})]})})}},1725:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),d=1;d<arguments.length;d++){for(var s in i=Object(arguments[d]))t.call(i,s)&&(l[s]=i[s]);if(r){a=r(i);for(var p=0;p<a.length;p++)n.call(i,a[p])&&(l[a[p]]=i[a[p]])}}return l}}}]);
//# sourceMappingURL=478.db43e960.chunk.js.map