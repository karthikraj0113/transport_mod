(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[199],{1005:function(e,t,a){"use strict";a(56),a(1081)},1012:function(e,t,a){"use strict";var n=a(3),c=a(5),l=a(2),r=a(9),i=a(14),o=a(8),u=a.n(o),s=a(48),d=a(0),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],f=Object(d.forwardRef)((function(e,t){var a,o=e.prefixCls,f=void 0===o?"rc-checkbox":o,b=e.className,v=e.style,p=e.checked,h=e.disabled,g=e.defaultChecked,E=void 0!==g&&g,O=e.type,k=void 0===O?"checkbox":O,y=e.onChange,C=Object(i.a)(e,m),j=Object(d.useRef)(null),A=Object(s.a)(E,{value:p}),N=Object(r.a)(A,2),x=N[0],w=N[1];Object(d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=j.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=j.current)||void 0===e||e.blur()},input:j.current}}));var S=u()(f,b,(a={},Object(l.a)(a,"".concat(f,"-checked"),x),Object(l.a)(a,"".concat(f,"-disabled"),h),a));return d.createElement("span",{className:S,style:v},d.createElement("input",Object(n.a)({},C,{className:"".concat(f,"-input"),ref:j,onChange:function(t){h||("checked"in e||w(t.target.checked),null===y||void 0===y||y({target:Object(c.a)(Object(c.a)({},e),{},{type:k,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:h,checked:!!x,type:k})),d.createElement("span",{className:"".concat(f,"-inner")}))}));t.a=f},1022:function(e,t,a){"use strict";a.r(t),a.d(t,"Checkbox",(function(){return o})),a.d(t,"CheckboxGroup",(function(){return i}));var n=a(135),c=a(0),l=a.n(c),r=a(1227),i=r.CheckboxStyle.Group,o=function(e){var t=e.item,a=e.defaultSelect,o=e.checked,u=e.multiple,s=e.onChange,d=e.onChangeTriger,m=e.defaultChecked,f=e.disabled,b=e.children,v=t,p=Object(c.useState)({checkedList:a,indeterminate:!0,checkAll:!1}),h=Object(n.a)(p,2),g=h[0],E=h[1];Object(c.useEffect)((function(){d&&d(g.checkedList)}),[g]);return u?l.a.createElement("div",null,l.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},l.a.createElement(r.CheckboxStyle,{indeterminate:g.indeterminate,onChange:function(e){E({checkedList:e.target.checked?v:[],indeterminate:!1,checkAll:e.target.checked})},checked:g.checkAll},"Check all")),l.a.createElement("br",null),l.a.createElement(i,{options:v,value:g.checkedList,onChange:function(e){E({checkedList:e,indeterminate:!!e.length&&e.length<v.length,checkAll:e.length===v.length})}})):l.a.createElement(r.CheckboxStyle,{checked:o,onChange:function(e){return s(e.target.checked,e.target.value)},defaultChecked:m,disabled:f},b)}},1081:function(e,t,a){},1147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAjdJREFUOE+1lL1rU1EYxp/3NrEW2qSiFJWqRaRmEJqlOpq02iXU3m5u1q/ByVTddRGkQ1r/AU1ABKcEIh2alN5RWoVUB4suCW66JLUQSW7uI+eWXG4+SQTvdM573vt7n/fjHEGHb39meskSWQARFMGEciORF9AQEcO3uZ1o96s0G/dnL+sWsVqHdAqo4Jpg2be5nXL7NABLs9NxQG51gjTbCZYGa9XgkJHL188cYN8wYtdvVUJi5IotClWaBJKtypjQhHGPadoKqgNHggR1tfbVqtFmmLLbCg/uTn6o5Uev1IEqFU8NoWFjJ9dr+k7KZhY6iWQlcxbmp5O2XRMrPJL9aPQLsxVWM1BdWlAb8/MJVLfGX/ve5+78C+wQuAEDgqsuQNh7HS3q9NifNQBTXQMRRaWQbiePB8ckjIbOqfPFWNkAxB24Lfs/AHtMuSeFZKGhKV+tEbwwA+/eRnZu9tIUPVaOi+tmEUxIfWxStdNYMS/iN7wArfDefLbr2Oir5ZBQttyBSd62B3tl/cKXV9b5S85gk0VLQ/h7JNN2sBUMlKQAow6QLCQfD03YwED6WgiiNUQ7dGQcGuKQgYK9s8wpoehjP+8vHS/eaKgKLVlMPRlMOY9DID33DIKnvdRO+fhLMxj7dQ8ea1jN3cvUo6NR5y7XIf1CvZVTB2d+PH+z/nD8gXOXmxVNpud0TbgGyLnualmwKNFv8xudH1g3QNWVokWFHKUgKBA/iV0R5CA09iKZeLuAfwEBsO2jMmMBgQAAAABJRU5ErkJggg=="},1227:function(e,t,a){"use strict";a.r(t),a.d(t,"CheckboxStyle",(function(){return i}));a(1005);var n,c=a(995),l=a(20),r=a(17),i=Object(r.b)(c.a)(n||(n=Object(l.a)(["\n\n"])))},1676:function(e,t,a){"use strict";var n=a(5),c=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"}}]},name:"facebook",theme:"outlined"},r=a(21),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:l}))};i.displayName="FacebookOutlined";t.a=c.forwardRef(i)},1677:function(e,t,a){"use strict";var n=a(5),c=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"},r=a(21),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:l}))};i.displayName="TwitterOutlined";t.a=c.forwardRef(i)},885:function(e,t,a){"use strict";a.r(t);a(246);var n=a(109),c=(a(929),a(930)),l=(a(528),a(319)),r=a(1),i=a(135),o=a(0),u=a.n(o),s=a(188),d=a(1676),m=a(1677),f=a(248),b=a(1022),v=a(25);t.default=function(){var e=Object(o.useState)({values:null,checked:null}),t=Object(i.a)(e,2),p=t[0],h=t[1];return u.a.createElement(f.AuthWrapper,null,u.a.createElement("p",{className:"auth-notice"},"Already have an account? ",u.a.createElement(s.NavLink,{to:"/"},"Sign In")),u.a.createElement("div",{className:"auth-contents"},u.a.createElement(c.a,{name:"register",onFinish:function(e){h(Object(r.a)(Object(r.a)({},p),{},{values:e}))},layout:"vertical"},u.a.createElement(v.default,{as:"h3"},"Sign Up to ",u.a.createElement("span",{className:"color-secondary"},"Admin")),u.a.createElement(c.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Full name!"}]},u.a.createElement(l.a,{placeholder:"Full name"})),u.a.createElement(c.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please input your username!"}]},u.a.createElement(l.a,{placeholder:"Username"})),u.a.createElement(c.a.Item,{name:"email",label:"Email Address",rules:[{required:!0,message:"Please input your email!",type:"email"}]},u.a.createElement(l.a,{placeholder:"name@example.com"})),u.a.createElement(c.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},u.a.createElement(l.a.Password,{placeholder:"Password"})),u.a.createElement("div",{className:"auth-form-action"},u.a.createElement(b.Checkbox,{onChange:function(e){h(Object(r.a)(Object(r.a)({},p),{},{checked:e}))}},"Creating an account means you\u2019re okay with our Terms of Service and Privacy Policy")),u.a.createElement(c.a.Item,null,u.a.createElement(n.a,{className:"btn-create",htmlType:"submit",type:"primary",size:"large"},"Create Account")),u.a.createElement("p",{className:"form-divider"},u.a.createElement("span",null,"Or")),u.a.createElement("ul",{className:"social-login signin-social"},u.a.createElement("li",null,u.a.createElement("a",{className:"google-signup",href:"/"},u.a.createElement("img",{src:a(1147),alt:""}),u.a.createElement("span",null,"Sign up with Google"))),u.a.createElement("li",null,u.a.createElement("a",{className:"facebook-sign",href:"/"},u.a.createElement(d.a,null))),u.a.createElement("li",null,u.a.createElement("a",{className:"twitter-sign",href:"/"},u.a.createElement(m.a,null)))))))}},995:function(e,t,a){"use strict";var n=a(2),c=a(3),l=a(8),r=a.n(l),i=a(1012),o=a(0),u=a(62),s=a(81),d=a(11),m=a(9),f=a(35),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},v=o.createContext(null),p=function(e,t){var a=e.defaultValue,l=e.children,i=e.options,s=void 0===i?[]:i,p=e.prefixCls,h=e.className,g=e.style,E=e.onChange,O=b(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),k=o.useContext(u.b),C=k.getPrefixCls,j=k.direction,A=o.useState(O.value||a||[]),N=Object(m.a)(A,2),x=N[0],w=N[1],S=o.useState([]),V=Object(m.a)(S,2),P=V[0],L=V[1];o.useEffect((function(){"value"in O&&w(O.value||[])}),[O.value]);var Q=function(){return s.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},R=C("checkbox",p),B="".concat(R,"-group"),I=Object(f.a)(O,["value","disabled"]);s&&s.length>0&&(l=Q().map((function(e){return o.createElement(y,{prefixCls:R,key:e.value.toString(),disabled:"disabled"in e?e.disabled:O.disabled,value:e.value,checked:x.includes(e.value),onChange:e.onChange,className:"".concat(B,"-item"),style:e.style},e.label)})));var M={toggleOption:function(e){var t=x.indexOf(e.value),a=Object(d.a)(x);-1===t?a.push(e.value):a.splice(t,1),"value"in O||w(a);var n=Q();null===E||void 0===E||E(a.filter((function(e){return P.includes(e)})).sort((function(e,t){return n.findIndex((function(t){return t.value===e}))-n.findIndex((function(e){return e.value===t}))})))},value:x,disabled:O.disabled,name:O.name,registerValue:function(e){L((function(t){return[].concat(Object(d.a)(t),[e])}))},cancelValue:function(e){L((function(t){return t.filter((function(t){return t!==e}))}))}},U=r()(B,Object(n.a)({},"".concat(B,"-rtl"),"rtl"===j),h);return o.createElement("div",Object(c.a)({className:U,style:g},I,{ref:t}),o.createElement(v.Provider,{value:M},l))},h=o.forwardRef(p),g=o.memo(h),E=a(103),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},k=function(e,t){var a,l,d=e.prefixCls,m=e.className,f=e.children,b=e.indeterminate,p=void 0!==b&&b,h=e.style,g=e.onMouseEnter,k=e.onMouseLeave,y=e.skipGroup,C=void 0!==y&&y,j=e.disabled,A=O(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),N=o.useContext(u.b),x=N.getPrefixCls,w=N.direction,S=o.useContext(v),V=Object(o.useContext)(s.b).isFormItemInput,P=Object(o.useContext)(E.b),L=null!==(l=(null===S||void 0===S?void 0:S.disabled)||j)&&void 0!==l?l:P,Q=o.useRef(A.value);o.useEffect((function(){null===S||void 0===S||S.registerValue(A.value)}),[]),o.useEffect((function(){if(!C)return A.value!==Q.current&&(null===S||void 0===S||S.cancelValue(Q.current),null===S||void 0===S||S.registerValue(A.value),Q.current=A.value),function(){return null===S||void 0===S?void 0:S.cancelValue(A.value)}}),[A.value]);var R=x("checkbox",d),B=Object(c.a)({},A);S&&!C&&(B.onChange=function(){A.onChange&&A.onChange.apply(A,arguments),S.toggleOption&&S.toggleOption({label:f,value:A.value})},B.name=S.name,B.checked=S.value.includes(A.value));var I=r()((a={},Object(n.a)(a,"".concat(R,"-wrapper"),!0),Object(n.a)(a,"".concat(R,"-rtl"),"rtl"===w),Object(n.a)(a,"".concat(R,"-wrapper-checked"),B.checked),Object(n.a)(a,"".concat(R,"-wrapper-disabled"),L),Object(n.a)(a,"".concat(R,"-wrapper-in-form-item"),V),a),m),M=r()(Object(n.a)({},"".concat(R,"-indeterminate"),p)),U=p?"mixed":void 0;return o.createElement("label",{className:I,style:h,onMouseEnter:g,onMouseLeave:k},o.createElement(i.a,Object(c.a)({"aria-checked":U},B,{prefixCls:R,className:M,disabled:L,ref:t})),void 0!==f&&o.createElement("span",null,f))};var y=o.forwardRef(k),C=y;C.Group=g,C.__ANT_CHECKBOX=!0;t.a=C}}]);