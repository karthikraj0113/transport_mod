(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[192],{1005:function(e,t,a){"use strict";a(56),a(1081)},1012:function(e,t,a){"use strict";var n=a(3),c=a(5),r=a(2),l=a(9),o=a(14),i=a(8),s=a.n(i),u=a(48),m=a(0),d=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],p=Object(m.forwardRef)((function(e,t){var a,i=e.prefixCls,p=void 0===i?"rc-checkbox":i,f=e.className,v=e.style,E=e.checked,b=e.disabled,h=e.defaultChecked,y=void 0!==h&&h,g=e.type,O=void 0===g?"checkbox":g,k=e.onChange,x=Object(o.a)(e,d),j=Object(m.useRef)(null),C=Object(u.a)(y,{value:E}),w=Object(l.a)(C,2),N=w[0],z=w[1];Object(m.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=j.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=j.current)||void 0===e||e.blur()},input:j.current}}));var P=s()(p,f,(a={},Object(r.a)(a,"".concat(p,"-checked"),N),Object(r.a)(a,"".concat(p,"-disabled"),b),a));return m.createElement("span",{className:P,style:v},m.createElement("input",Object(n.a)({},x,{className:"".concat(p,"-input"),ref:j,onChange:function(t){b||("checked"in e||z(t.target.checked),null===k||void 0===k||k({target:Object(c.a)(Object(c.a)({},e),{},{type:O,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!N,type:O})),m.createElement("span",{className:"".concat(p,"-inner")}))}));t.a=p},1017:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a(62),l=a(985),o=a(986),i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},s=function(e,t){var a=c.useContext(r.b).getPrefixCls,s=e.prefixCls,u=i(e,["prefixCls"]),m=a("radio",s);return c.createElement(l.c,{value:"button"},c.createElement(o.a,Object(n.a)({prefixCls:m},u,{type:"radio",ref:t})))};t.a=c.forwardRef(s)},1018:function(e,t,a){"use strict";var n=a(3),c=a(2),r=a(9),l=a(8),o=a.n(l),i=a(48),s=a(0),u=a(62),m=a(82),d=a(1043),p=a(985),f=a(986),v=s.forwardRef((function(e,t){var a,l=s.useContext(u.b),v=l.getPrefixCls,E=l.direction,b=s.useContext(m.b),h=Object(i.a)(e.defaultValue,{value:e.value}),y=Object(r.a)(h,2),g=y[0],O=y[1],k=e.prefixCls,x=e.className,j=void 0===x?"":x,C=e.options,w=e.buttonStyle,N=void 0===w?"outline":w,z=e.disabled,P=e.children,A=e.size,I=e.style,M=e.id,T=e.onMouseEnter,S=e.onMouseLeave,D=e.onFocus,V=e.onBlur,R=v("radio",k),F="".concat(R,"-group"),_=P;C&&C.length>0&&(_=C.map((function(e){return"string"===typeof e||"number"===typeof e?s.createElement(f.a,{key:e.toString(),prefixCls:R,disabled:z,value:e,checked:g===e},e):s.createElement(f.a,{key:"radio-group-value-options-".concat(e.value),prefixCls:R,disabled:e.disabled||z,value:e.value,checked:g===e.value,style:e.style},e.label)})));var L=A||b,W=o()(F,"".concat(F,"-").concat(N),(a={},Object(c.a)(a,"".concat(F,"-").concat(L),L),Object(c.a)(a,"".concat(F,"-rtl"),"rtl"===E),a),j);return s.createElement("div",Object(n.a)({},Object(d.a)(e),{className:W,style:I,onMouseEnter:T,onMouseLeave:S,onFocus:D,onBlur:V,id:M,ref:t}),s.createElement(p.a,{value:{onChange:function(t){var a=g,n=t.target.value;"value"in e||O(n);var c=e.onChange;c&&n!==a&&c(t)},value:g,disabled:e.disabled,name:e.name,optionType:e.optionType}},_))}));t.a=s.memo(v)},1043:function(e,t,a){"use strict";function n(e){return Object.keys(e).reduce((function(t,a){return!a.startsWith("data-")&&!a.startsWith("aria-")&&"role"!==a||a.startsWith("data-__")||(t[a]=e[a]),t}),{})}a.d(t,"a",(function(){return n}))},1052:function(e,t,a){"use strict";var n;function c(e){if("undefined"===typeof document)return 0;if(e||void 0===n){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var a=document.createElement("div"),c=a.style;c.position="absolute",c.top="0",c.left="0",c.pointerEvents="none",c.visibility="hidden",c.width="200px",c.height="150px",c.overflow="hidden",a.appendChild(t),document.body.appendChild(a);var r=t.offsetWidth;a.style.overflow="scroll";var l=t.offsetWidth;r===l&&(l=a.clientWidth),document.body.removeChild(a),n=r-l}return n}function r(e){var t=e.match(/^(.*)px$/),a=Number(null===t||void 0===t?void 0:t[1]);return Number.isNaN(a)?c():a}function l(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var t=getComputedStyle(e,"::-webkit-scrollbar"),a=t.width,n=t.height;return{width:r(a),height:r(n)}}a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}))},1064:function(e,t,a){},1081:function(e,t,a){},1291:function(e,t,a){"use strict";a.r(t);a(937);var n=a(938),c=a(1),r=a(135),l=a(0),o=a.n(l),i=a(12),s=a.n(i),u=a(4),m=a(923),d=a(320),p=a(1028);t.default=function(){var e=Object(l.useState)({selectedRowKeys:[],selectedRows:[]}),t=Object(r.a)(e,2),i=t[0],f=t[1],v=[{key:"1",title:o.a.createElement("span",{className:"task-title"},"Add Images To the gallery"),component:o.a.createElement(p.TasklistAction,null,o.a.createElement("span",{className:"task-created"},"09:20 AM "),o.a.createElement("img",{className:"task-author",style:{width:"30px"},src:a(965),alt:""}),o.a.createElement("span",{className:"task-move"},o.a.createElement(s.a,{icon:"move",size:16})),o.a.createElement("div",{className:"task-action"},o.a.createElement(d.Dropdown,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"eye",size:14}),"View"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"edit",size:14}),"Edit"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"trash-2",size:14}),"Delete"))},o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"more-horizontal",size:16})))))},{key:"2",title:o.a.createElement("span",{className:"task-title"},"Add Images To the gallery"),component:o.a.createElement(p.TasklistAction,null,o.a.createElement("span",{className:"task-created"},"09:20 AM "),o.a.createElement("img",{className:"task-author",style:{width:"30px"},src:a(965),alt:""}),o.a.createElement("span",{className:"task-move"},o.a.createElement(s.a,{icon:"move",size:16})),o.a.createElement("div",{className:"task-action"},o.a.createElement(d.Dropdown,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"eye",size:14}),"View"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"edit",size:14}),"Edit"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"trash-2",size:14}),"Delete"))},o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"more-horizontal",size:16})))))},{key:"3",title:o.a.createElement("span",{className:"task-title"},"Add Images To the gallery"),component:o.a.createElement(p.TasklistAction,null,o.a.createElement("span",{className:"task-created"},"09:20 AM "),o.a.createElement("img",{className:"task-author",style:{width:"30px"},src:a(965),alt:""}),o.a.createElement("span",{className:"task-move"},o.a.createElement(s.a,{icon:"move",size:16})),o.a.createElement("div",{className:"task-action"},o.a.createElement(d.Dropdown,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"eye",size:14}),"View"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"edit",size:14}),"Edit"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"trash-2",size:14}),"Delete"))},o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"more-horizontal",size:16})))))},{key:"4",title:o.a.createElement("span",{className:"task-title"},"Add Images To the gallery"),component:o.a.createElement(p.TasklistAction,null,o.a.createElement("span",{className:"task-created"},"09:20 AM "),o.a.createElement("img",{className:"task-author",style:{width:"30px"},src:a(965),alt:""}),o.a.createElement("span",{className:"task-move"},o.a.createElement(s.a,{icon:"move",size:16})),o.a.createElement("div",{className:"task-action"},o.a.createElement(d.Dropdown,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"eye",size:14}),"View"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"edit",size:14}),"Edit"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"trash-2",size:14}),"Delete"))},o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"more-horizontal",size:16})))))},{key:"5",title:o.a.createElement("span",{className:"task-title"},"Add Images To the gallery"),component:o.a.createElement(p.TasklistAction,null,o.a.createElement("span",{className:"task-created"},"09:20 AM "),o.a.createElement("img",{className:"task-author",style:{width:"30px"},src:a(965),alt:""}),o.a.createElement("span",{className:"task-move"},o.a.createElement(s.a,{icon:"move",size:16})),o.a.createElement("div",{className:"task-action"},o.a.createElement(d.Dropdown,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"eye",size:14}),"View"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"edit",size:14}),"Edit"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"trash-2",size:14}),"Delete"))},o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"more-horizontal",size:16})))))},{key:"6",title:o.a.createElement("span",{className:"task-title"},"Add Images To the gallery"),component:o.a.createElement(p.TasklistAction,null,o.a.createElement("span",{className:"task-created"},"09:20 AM "),o.a.createElement("img",{className:"task-author",style:{width:"30px"},src:a(965),alt:""}),o.a.createElement("span",{className:"task-move"},o.a.createElement(s.a,{icon:"move",size:16})),o.a.createElement("div",{className:"task-action"},o.a.createElement(d.Dropdown,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"eye",size:14}),"View"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"edit",size:14}),"Edit"),o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"trash-2",size:14}),"Delete"))},o.a.createElement(u.c,{to:"#"},o.a.createElement(s.a,{icon:"more-horizontal",size:16})))))}],E={onChange:function(e,t){f(Object(c.a)(Object(c.a)({},i),{},{selectedRowKeys:e,selectedRows:t}))},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};return o.a.createElement("div",{className:"task-list-inner table-responsive"},o.a.createElement(n.a,{pagination:!1,rowSelection:E,dataSource:v,columns:[{dataIndex:"title",key:"title"},{dataIndex:"component",key:"component"}]}),o.a.createElement("div",{className:"tasklist-action"},o.a.createElement(m.Button,{type:"primary",size:"large",transparented:!0},o.a.createElement(s.a,{icon:"plus",size:"14"})," Add New Task")))}},944:function(e,t,a){"use strict";var n=a(1018),c=a(986),r=a(1017),l=c.a;l.Button=r.a,l.Group=n.a,l.__ANT_RADIO=!0,t.a=l},947:function(e,t,a){"use strict";a(56),a(1064)},985:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o}));var n=a(0),c=n.createContext(null),r=c.Provider;t.d=c;var l=n.createContext(null),o=l.Provider},986:function(e,t,a){"use strict";var n=a(2),c=a(3),r=a(8),l=a.n(r),o=a(1012),i=a(32),s=a(0),u=a(62),m=a(103),d=a(81),p=a(985),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},v=function(e,t){var a,r=s.useContext(p.d),v=s.useContext(p.b),E=s.useContext(u.b),b=E.getPrefixCls,h=E.direction,y=s.useRef(),g=Object(i.a)(t,y),O=Object(s.useContext)(d.b).isFormItemInput,k=e.prefixCls,x=e.className,j=e.children,C=e.style,w=e.disabled,N=f(e,["prefixCls","className","children","style","disabled"]),z=b("radio",k),P="button"===((null===r||void 0===r?void 0:r.optionType)||v)?"".concat(z,"-button"):z,A=Object(c.a)({},N),I=s.useContext(m.b);A.disabled=w||I,r&&(A.name=r.name,A.onChange=function(t){var a,n;null===(a=e.onChange)||void 0===a||a.call(e,t),null===(n=null===r||void 0===r?void 0:r.onChange)||void 0===n||n.call(r,t)},A.checked=e.value===r.value,A.disabled=A.disabled||r.disabled);var M=l()("".concat(P,"-wrapper"),(a={},Object(n.a)(a,"".concat(P,"-wrapper-checked"),A.checked),Object(n.a)(a,"".concat(P,"-wrapper-disabled"),A.disabled),Object(n.a)(a,"".concat(P,"-wrapper-rtl"),"rtl"===h),Object(n.a)(a,"".concat(P,"-wrapper-in-form-item"),O),a),x);return s.createElement("label",{className:M,style:C,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},s.createElement(o.a,Object(c.a)({},A,{type:"radio",prefixCls:P,ref:g})),void 0!==j?s.createElement("span",null,j):null)},E=s.forwardRef(v);t.a=E},995:function(e,t,a){"use strict";var n=a(2),c=a(3),r=a(8),l=a.n(r),o=a(1012),i=a(0),s=a(62),u=a(81),m=a(11),d=a(9),p=a(35),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},v=i.createContext(null),E=function(e,t){var a=e.defaultValue,r=e.children,o=e.options,u=void 0===o?[]:o,E=e.prefixCls,b=e.className,h=e.style,y=e.onChange,g=f(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),O=i.useContext(s.b),x=O.getPrefixCls,j=O.direction,C=i.useState(g.value||a||[]),w=Object(d.a)(C,2),N=w[0],z=w[1],P=i.useState([]),A=Object(d.a)(P,2),I=A[0],M=A[1];i.useEffect((function(){"value"in g&&z(g.value||[])}),[g.value]);var T=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},S=x("checkbox",E),D="".concat(S,"-group"),V=Object(p.a)(g,["value","disabled"]);u&&u.length>0&&(r=T().map((function(e){return i.createElement(k,{prefixCls:S,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:N.includes(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var R={toggleOption:function(e){var t=N.indexOf(e.value),a=Object(m.a)(N);-1===t?a.push(e.value):a.splice(t,1),"value"in g||z(a);var n=T();null===y||void 0===y||y(a.filter((function(e){return I.includes(e)})).sort((function(e,t){return n.findIndex((function(t){return t.value===e}))-n.findIndex((function(e){return e.value===t}))})))},value:N,disabled:g.disabled,name:g.name,registerValue:function(e){M((function(t){return[].concat(Object(m.a)(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},F=l()(D,Object(n.a)({},"".concat(D,"-rtl"),"rtl"===j),b);return i.createElement("div",Object(c.a)({className:F,style:h},V,{ref:t}),i.createElement(v.Provider,{value:R},r))},b=i.forwardRef(E),h=i.memo(b),y=a(103),g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},O=function(e,t){var a,r,m=e.prefixCls,d=e.className,p=e.children,f=e.indeterminate,E=void 0!==f&&f,b=e.style,h=e.onMouseEnter,O=e.onMouseLeave,k=e.skipGroup,x=void 0!==k&&k,j=e.disabled,C=g(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),w=i.useContext(s.b),N=w.getPrefixCls,z=w.direction,P=i.useContext(v),A=Object(i.useContext)(u.b).isFormItemInput,I=Object(i.useContext)(y.b),M=null!==(r=(null===P||void 0===P?void 0:P.disabled)||j)&&void 0!==r?r:I,T=i.useRef(C.value);i.useEffect((function(){null===P||void 0===P||P.registerValue(C.value)}),[]),i.useEffect((function(){if(!x)return C.value!==T.current&&(null===P||void 0===P||P.cancelValue(T.current),null===P||void 0===P||P.registerValue(C.value),T.current=C.value),function(){return null===P||void 0===P?void 0:P.cancelValue(C.value)}}),[C.value]);var S=N("checkbox",m),D=Object(c.a)({},C);P&&!x&&(D.onChange=function(){C.onChange&&C.onChange.apply(C,arguments),P.toggleOption&&P.toggleOption({label:p,value:C.value})},D.name=P.name,D.checked=P.value.includes(C.value));var V=l()((a={},Object(n.a)(a,"".concat(S,"-wrapper"),!0),Object(n.a)(a,"".concat(S,"-rtl"),"rtl"===z),Object(n.a)(a,"".concat(S,"-wrapper-checked"),D.checked),Object(n.a)(a,"".concat(S,"-wrapper-disabled"),M),Object(n.a)(a,"".concat(S,"-wrapper-in-form-item"),A),a),d),R=l()(Object(n.a)({},"".concat(S,"-indeterminate"),E)),F=E?"mixed":void 0;return i.createElement("label",{className:V,style:b,onMouseEnter:h,onMouseLeave:O},i.createElement(o.a,Object(c.a)({"aria-checked":F},D,{prefixCls:S,className:R,disabled:M,ref:t})),void 0!==p&&i.createElement("span",null,p))};var k=i.forwardRef(O),x=k;x.Group=h,x.__ANT_CHECKBOX=!0;t.a=x}}]);