"use strict";(self.webpackChunkreact_goose_track=self.webpackChunkreact_goose_track||[]).push([[907],{8907:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(1087),r=n(5719),o=n(8527),i=n(4522);var s=n(3629),d=n(3728),l=n(9365),u=n(3747),c=n(1951),_=n(9434),v={container:"ChooseMonth_container__6ulMY",div_grid_weeks:"ChooseMonth_div_grid_weeks__+QwKN",div_grid_day:"ChooseMonth_div_grid_day__8vmDt",weeks_iteam:"ChooseMonth_weeks_iteam__qe6KT",link:"ChooseMonth_link__68GrJ",container_link:"ChooseMonth_container_link__gAycx",date:"ChooseMonth_date__CCSOC",date_curent:"ChooseMonth_date_curent__WOQN6",task:"ChooseMonth_task__RD0Ri",Low:"ChooseMonth_Low__R8K8n",Medium:"ChooseMonth_Medium__ZGKST",High:"ChooseMonth_High__tdQx5",more:"ChooseMonth_more__XXTQl"},h=n(2791),f=n(2551),k={weeks_iteam:"WeeksHeader_weeks_iteam__Db+UJ",div_grid_weeks:"WeeksHeader_div_grid_weeks__94rhH"},m=n(184),w=function(e){var t,n=e.CalendarDate,a=s.default(n,{weekStartsOn:1}),r=d.Z(n,{weekStartsOn:1}),o=l.Z({start:a,end:r});return t=window.innerWidth<=768?1:3,(0,m.jsx)("div",{className:k.div_grid_weeks,children:o.map((function(e){return(0,m.jsx)("div",{className:k.weeks_iteam,children:(0,m.jsx)("div",{className:k.weekString,children:c.default(e,"eeee").substring(0,t)})},e)}))})},g="dd",C=function(){var e=(0,_.v9)((function(e){return e.calendar.day})),t=(0,_.v9)((function(e){return e.calendar.month})),n=(0,_.v9)((function(e){return e.calendar.year})),k=(0,_.v9)((function(e){return e.calendar.time})),C=(0,_.v9)((function(e){return e.taskbook.tasks}));console.log(e);var p=(0,_.I0)();(0,h.useEffect)((function(){p((0,f.iE)(k))}),[p,k]);var M=r.default(k),N=function(e){(0,i.Z)(1,arguments);var t=(0,o.default)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}(k),x=s.default(M,{weekStartsOn:1}),j=d.Z(N,{weekStartsOn:1}),O=l.Z({start:x,end:j});return(0,m.jsxs)("div",{className:v.container,children:[(0,m.jsx)(w,{CalendarDate:M}),(0,m.jsx)("div",{className:v.div_grid_weeks,children:O.map((function(e){return function(e){var r=1;return(0,m.jsx)("div",{className:v.container_link,children:u.default(e)===t?(0,m.jsxs)(a.OL,{className:v.link,to:"/calendar/day/".concat(n,"-").concat(t,"-").concat(c.default(e,g)),children:[(0,m.jsx)("span",{className:v.date,children:c.default(e,g)}),(0,m.jsx)("div",{className:v.task,children:C.map((function(t){var n="";return r<=2?(r<=1?t.date.split("-")[2]===c.default(e,g)&&(r++,n=(0,m.jsx)("span",{className:v[t.priority],children:t.title},t.id)):(r++,n=(0,m.jsx)("span",{className:v.more,children:"More... "},r)),n):""}))})]}):(0,m.jsx)("span",{className:v.link})},e)}(e)}))})]})}},9365:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(8527),r=n(4522);function o(e,t){var n;(0,r.Z)(1,arguments);var o=e||{},i=(0,a.default)(o.start),s=(0,a.default)(o.end).getTime();if(!(i.getTime()<=s))throw new RangeError("Invalid interval");var d=[],l=i;l.setHours(0,0,0,0);var u=Number(null!==(n=null===t||void 0===t?void 0:t.step)&&void 0!==n?n:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=s;)d.push((0,a.default)(l)),l.setDate(l.getDate()+u),l.setHours(0,0,0,0);return d}},3728:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(8527),r=n(9297),o=n(4522),i=n(965);function s(e,t){var n,s,d,l,u,c,_,v;(0,o.Z)(1,arguments);var h=(0,i.j)(),f=(0,r.Z)(null!==(n=null!==(s=null!==(d=null!==(l=null===t||void 0===t?void 0:t.weekStartsOn)&&void 0!==l?l:null===t||void 0===t||null===(u=t.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==s?s:null===(_=h.locale)||void 0===_||null===(v=_.options)||void 0===v?void 0:v.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var k=(0,a.default)(e),m=k.getDay(),w=6+(m<f?-7:0)-(m-f);return k.setHours(0,0,0,0),k.setDate(k.getDate()+w),k}},5719:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(8527),r=n(4522);function o(e){(0,r.Z)(1,arguments);var t=(0,a.default)(e);return t.setDate(1),t.setHours(0,0,0,0),t}}}]);
//# sourceMappingURL=907.e757c1dd.chunk.js.map