(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[203],{1012:function(e,t,a){"use strict";var n=a(3),c=a(5),l=a(2),r=a(9),i=a(14),o=a(8),s=a.n(o),u=a(48),d=a(0),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],h=Object(d.forwardRef)((function(e,t){var a,o=e.prefixCls,h=void 0===o?"rc-checkbox":o,g=e.className,f=e.style,b=e.checked,p=e.disabled,E=e.defaultChecked,k=void 0!==E&&E,A=e.type,v=void 0===A?"checkbox":A,N=e.onChange,C=Object(i.a)(e,m),O=Object(d.useRef)(null),j=Object(u.a)(k,{value:b}),L=Object(r.a)(j,2),S=L[0],w=L[1];Object(d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=O.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current}}));var y=s()(h,g,(a={},Object(l.a)(a,"".concat(h,"-checked"),S),Object(l.a)(a,"".concat(h,"-disabled"),p),a));return d.createElement("span",{className:y,style:f},d.createElement("input",Object(n.a)({},C,{className:"".concat(h,"-input"),ref:O,onChange:function(t){p||("checked"in e||w(t.target.checked),null===N||void 0===N||N({target:Object(c.a)(Object(c.a)({},e),{},{type:v,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:p,checked:!!S,type:v})),d.createElement("span",{className:"".concat(h,"-inner")}))}));t.a=h},1022:function(e,t,a){"use strict";a.r(t),a.d(t,"Checkbox",(function(){return o})),a.d(t,"CheckboxGroup",(function(){return i}));var n=a(135),c=a(0),l=a.n(c),r=a(1227),i=r.CheckboxStyle.Group,o=function(e){var t=e.item,a=e.defaultSelect,o=e.checked,s=e.multiple,u=e.onChange,d=e.onChangeTriger,m=e.defaultChecked,h=e.disabled,g=e.children,f=t,b=Object(c.useState)({checkedList:a,indeterminate:!0,checkAll:!1}),p=Object(n.a)(b,2),E=p[0],k=p[1];Object(c.useEffect)((function(){d&&d(E.checkedList)}),[E]);return s?l.a.createElement("div",null,l.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},l.a.createElement(r.CheckboxStyle,{indeterminate:E.indeterminate,onChange:function(e){k({checkedList:e.target.checked?f:[],indeterminate:!1,checkAll:e.target.checked})},checked:E.checkAll},"Check all")),l.a.createElement("br",null),l.a.createElement(i,{options:f,value:E.checkedList,onChange:function(e){k({checkedList:e,indeterminate:!!e.length&&e.length<f.length,checkAll:e.length===f.length})}})):l.a.createElement(r.CheckboxStyle,{checked:o,onChange:function(e){return u(e.target.checked,e.target.value)},defaultChecked:m,disabled:h},g)}},1147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAjdJREFUOE+1lL1rU1EYxp/3NrEW2qSiFJWqRaRmEJqlOpq02iXU3m5u1q/ByVTddRGkQ1r/AU1ABKcEIh2alN5RWoVUB4suCW66JLUQSW7uI+eWXG4+SQTvdM573vt7n/fjHEGHb39meskSWQARFMGEciORF9AQEcO3uZ1o96s0G/dnL+sWsVqHdAqo4Jpg2be5nXL7NABLs9NxQG51gjTbCZYGa9XgkJHL188cYN8wYtdvVUJi5IotClWaBJKtypjQhHGPadoKqgNHggR1tfbVqtFmmLLbCg/uTn6o5Uev1IEqFU8NoWFjJ9dr+k7KZhY6iWQlcxbmp5O2XRMrPJL9aPQLsxVWM1BdWlAb8/MJVLfGX/ve5+78C+wQuAEDgqsuQNh7HS3q9NifNQBTXQMRRaWQbiePB8ckjIbOqfPFWNkAxB24Lfs/AHtMuSeFZKGhKV+tEbwwA+/eRnZu9tIUPVaOi+tmEUxIfWxStdNYMS/iN7wArfDefLbr2Oir5ZBQttyBSd62B3tl/cKXV9b5S85gk0VLQ/h7JNN2sBUMlKQAow6QLCQfD03YwED6WgiiNUQ7dGQcGuKQgYK9s8wpoehjP+8vHS/eaKgKLVlMPRlMOY9DID33DIKnvdRO+fhLMxj7dQ8ea1jN3cvUo6NR5y7XIf1CvZVTB2d+PH+z/nD8gXOXmxVNpud0TbgGyLnualmwKNFv8xudH1g3QNWVokWFHKUgKBA/iV0R5CA09iKZeLuAfwEBsO2jMmMBgQAAAABJRU5ErkJggg=="},1227:function(e,t,a){"use strict";a.r(t),a.d(t,"CheckboxStyle",(function(){return i}));a(1005);var n,c=a(995),l=a(20),r=a(17),i=Object(r.b)(c.a)(n||(n=Object(l.a)(["\n\n"])))},1454:function(e,t,a){"use strict";a.r(t),a.d(t,"auth0options",(function(){return n}));var n={theme:{logo:"https://demo.aazztech.com/strikingdash/static/media/Logo_Dark.9ef25a33.svg",primaryColor:"#5F63F2",labeledSubmitButton:!0},avatar:null,rememberLastLogin:!1,auth:{redirect:!1},languageDictionary:{title:"Sign in with Auth0"},popupOptions:{width:460,height:506,left:200,top:300}}},2393:function(e,t){},884:function(e,t,a){"use strict";a.r(t);a(246);var n=a(109),c=(a(528),a(319)),l=a(1),r=(a(929),a(930)),i=a(135),o=a(0),s=a.n(o),u=a(7),d=a(4),m=a(45),h=a(1676),g=a(1677),f=a(1817),b=a(248),p=a(249),E=a(1022),k=a(25),A=a(1454);t.default=function(){var e=Object(u.useHistory)(),t=Object(m.c)(),v=Object(m.d)((function(e){return e.auth.loading})),N=r.a.useForm(),C=Object(i.a)(N,1)[0],O=Object(o.useState)({checked:null}),j=Object(i.a)(O,2),L=j[0],S=j[1],w=new f.Auth0Lock("FrMTNvkCC2pC7qedS1yBte8L3Xu8tU50","dev-cc7jh4vf.us.auth0.com",A.auth0options),y=Object(o.useCallback)((function(){t(Object(p.login)()),e.push("/admin")}),[e,t]);return w.on("authenticated",(function(e){w.getUserInfo(e.accessToken,(function(e,t){e||(y(),w.hide())}))})),s.a.createElement(b.AuthWrapper,null,s.a.createElement("p",{className:"auth-notice"},"Don\u2019t have an account? ",s.a.createElement(d.d,{to:"/register"},"Sign up now")),s.a.createElement("div",{className:"auth-contents"},s.a.createElement(r.a,{name:"login",form:C,onFinish:y,layout:"vertical"},s.a.createElement(k.default,{as:"h3"},"Sign in to ",s.a.createElement("span",{className:"color-secondary"},"Admin")),s.a.createElement(r.a.Item,{name:"username",rules:[{message:"Please input your username or Email!",required:!0}],initialValue:"name@example.com",label:"Username or Email Address"},s.a.createElement(c.a,null)),s.a.createElement(r.a.Item,{name:"password",initialValue:"123456",label:"Password"},s.a.createElement(c.a.Password,{placeholder:"Password"})),s.a.createElement("div",{className:"auth-form-action"},s.a.createElement(E.Checkbox,{onChange:function(e){S(Object(l.a)(Object(l.a)({},L),{},{checked:e}))}},"Keep me logged in"),s.a.createElement(d.d,{className:"forgot-pass-link",to:"/forgotPassword"},"Forgot password?")),s.a.createElement(r.a.Item,null,s.a.createElement(n.a,{className:"btn-signin",htmlType:"submit",type:"primary",size:"large"},v?"Loading...":"Sign In")),s.a.createElement("p",{className:"form-divider"},s.a.createElement("span",null,"Or")),s.a.createElement("ul",{className:"social-login"},s.a.createElement("li",null,s.a.createElement(d.c,{className:"google-signup",to:"#"},s.a.createElement("img",{src:a(1147),alt:""}),s.a.createElement("span",null,"Sign in with Google"))),s.a.createElement("li",null,s.a.createElement(d.c,{className:"facebook-sign",to:"#"},s.a.createElement(h.a,null))),s.a.createElement("li",null,s.a.createElement(d.c,{className:"twitter-sign",to:"#"},s.a.createElement(g.a,null)))),s.a.createElement("div",{className:"auth0-login"},s.a.createElement(d.c,{to:"#",onClick:function(){return w.show()}},"Sign In with Auth0"),s.a.createElement(d.c,{to:"/fbSignIn"},"Sign In With Firebase")))))}}}]);