(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[251],{1468:function(e,t,a){"use strict";a.r(t);a(963);var l=a(964),n=a(31),c=a(85),r=(a(988),a(323)),o=a(935),m=a(1),i=a(135),s=a(0),u=a.n(s),E=a(45),d=a(4),b=a(12),p=a.n(b),h=a(59),f=a.n(h),g=a(1785),v=a(1768),j=a(142),x=a(1427),O=a.n(x),y=a(1067),N=a(25),_=a(923),C=a(1090),w=a(922),L=a(320),z=["style"],k=["style"],D=["style"];t.default=function(e){var t=e.match,b=Object(E.c)(),h=Object(E.d)((function(e){return{rtl:e.ChangeLayoutMode.rtlData,chat:e.chatSingle.data}})),x=h.rtl,F=h.chat,V=x?"right":"left",M=Object(s.useState)({chatData:F,me:"woadud@gmail.com",singleContent:F[0].content,name:F[0].userName,inputValue:"",fileList:[],fileList2:[]}),R=Object(i.a)(M,2),S=R[0],Y=R[1],T=Object(s.useState)(!1),H=Object(i.a)(T,2),B=H[0],I=H[1],A=S.singleContent,J=S.name,P=S.me,Q=S.inputValue,W=S.fileList,q=S.fileList2;Object(s.useEffect)((function(){var e=!1;return e||Y({chatData:F,singleContent:F[0].content,name:F[0].userName,inputValue:Q,me:"woadud@gmail.com",fileList:W,fileList2:q}),function(){e=!0}}),[t,F,W,q,Q]);var G=function(e){e.preventDefault();var a={content:Q,time:(new Date).getTime(),seen:!1,reaction:!1,email:P};b(Object(C.updatePrivetChat)(t.params.id,a)),Y(Object(m.a)(Object(m.a)({},S),{},{singleContent:[].concat(Object(o.a)(A),[a]),inputValue:""}))},K={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},listType:"picture-card",onChange:function(e){"uploading"!==e.file.status&&Y(Object(m.a)(Object(m.a)({},S),{},{fileList:e.fileList})),"done"===e.file.status?r.b.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&r.b.error("".concat(e.file.name," file upload failed."))}},U={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange:function(e){"uploading"!==e.file.status&&Y(Object(m.a)(Object(m.a)({},S),{},{fileList2:e.fileList})),"done"===e.file.status?r.b.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&r.b.error("".concat(e.file.name," file upload failed."))}},X=u.a.createElement(u.a.Fragment,null,u.a.createElement(d.d,{to:"#"},u.a.createElement(p.a,{icon:"users",size:14}),u.a.createElement("span",null,"Create new group")),u.a.createElement(d.d,{to:"#"},u.a.createElement(p.a,{icon:"trash-2",size:14}),u.a.createElement("span",null,"Delete conversation")),u.a.createElement(d.d,{to:"#"},u.a.createElement(p.a,{icon:"slash",size:14}),u.a.createElement("span",null,"Block & Report")));return u.a.createElement(y.SingleChatWrapper,null,B&&u.a.createElement(y.BackShadowEmoji,{onClick:function(){return I(!1)}}),u.a.createElement(w.Cards,{title:u.a.createElement(u.a.Fragment,null,u.a.createElement(N.default,{as:"h5"},J),u.a.createElement("p",null,"Active Now")),isbutton:[u.a.createElement(L.Dropdown,{content:X,key:"1"},u.a.createElement(d.c,{to:"#"},u.a.createElement(p.a,{icon:"more-vertical"})))]},u.a.createElement("ul",{className:"atbd-chatbox"},u.a.createElement(j.Scrollbars,{className:"custom-scrollbar",autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderThumbHorizontal:function(e){var t=e.style,a=Object(c.a)(e,D);return u.a.createElement("div",{style:Object(m.a)(Object(m.a)({},t),{borderRadius:6,backgroundColor:"#F1F2F6"}),props:a})},renderThumbVertical:function(e){var t=e.style,a=Object(c.a)(e,k),l=Object(n.a)({borderRadius:6,backgroundColor:"#F1F2F6"},V,"2px");return u.a.createElement("div",{style:Object(m.a)(Object(m.a)({},t),l),props:a})},renderView:function(e){var t,a=e.style,l=Object(c.a)(e,z),r=(t={marginRight:"auto"},Object(n.a)(t,x?"left":"right","2px"),Object(n.a)(t,x?"marginLeft":"marginRight","-19px"),t);return u.a.createElement("div",Object.assign({},l,{style:Object(m.a)(Object(m.a)({},a),r)}))},renderTrackVertical:function(){var e,t=(e={position:"absolute",width:"6px",transition:"opacity 200ms ease 0s",opacity:0},Object(n.a)(e,x?"left":"right","6px"),Object(n.a)(e,"bottom","2px"),Object(n.a)(e,"top","2px"),Object(n.a)(e,"borderRadius","3px"),e);return u.a.createElement("div",{style:t})}},A.length?A.map((function(e,t){var l=e.time,n=f()(l).format("MM-DD-YYYY")===f()().format("MM-DD-YYYY");return u.a.createElement(s.Fragment,{key:l},1===t&&u.a.createElement("p",{className:"time-connector text-center text-capitalize"},u.a.createElement("span",null,"today")),u.a.createElement("li",{className:"atbd-chatbox__single",key:l,style:{overflow:"hidden"}},u.a.createElement("div",{className:e.email!==P?"left":"right"},e.email!==P?u.a.createElement("img",{src:a(1226)("./".concat(e.img)),alt:""}):null,u.a.createElement("div",{className:"atbd-chatbox__content"},u.a.createElement(N.default,{as:"h5",className:"atbd-chatbox__name"},e.email!==P&&J,u.a.createElement("span",null,n?f()(l).format("hh:mm A"):f()(l).format("LL"))),e.email!==P?u.a.createElement("div",{className:"atbd-chatbox__contentInner d-flex"},u.a.createElement("div",{className:"atbd-chatbox__message"},u.a.createElement(y.MessageList,{className:"message-box"},e.content)),u.a.createElement("div",{className:"atbd-chatbox__actions"},u.a.createElement(L.Dropdown,{action:["hover"],content:u.a.createElement("div",{className:"atbd-chatbox__emoji"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement("span",{role:"img"},"\ud83c\udf1d"))),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement("span",{role:"img"},"\ud83d\udc74"))),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement("span",{role:"img"},"\ud83d\udc7f"))),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement("span",{role:"img"},"\ud83d\udc97"))),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement("span",{role:"img"},"\ud83d\udd90"))),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement(g.a,null))))),placement:"bottomCenter"},u.a.createElement(d.c,{to:"#"},u.a.createElement(v.a,null))),u.a.createElement(L.Dropdown,{action:["hover"],content:u.a.createElement("div",{className:"atbd-chatbox__messageControl"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Copy")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Edit")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Quote")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Forward")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Remove")))),placement:"bottomCenter"},u.a.createElement(d.c,{to:"#"},u.a.createElement(p.a,{icon:"more-horizontal",size:16}))))):u.a.createElement("div",{className:"atbd-chatbox__contentInner d-flex"},u.a.createElement("div",{className:"atbd-chatbox__actions"},u.a.createElement(L.Dropdown,{action:["hover"],content:u.a.createElement("div",{className:"atbd-chatbox__messageControl"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Edit ")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Copy ")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Quote")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Forward")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"Remove")))),placement:"bottomCenter"},u.a.createElement(d.c,{to:"#"},u.a.createElement(p.a,{icon:"more-horizontal",size:16}))),u.a.createElement(L.Dropdown,{action:["hover"],content:u.a.createElement("div",{className:"atbd-chatbox__emoji"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"\ud83c\udf1d")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"\ud83d\udc74")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"\ud83d\udc7f")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"\ud83d\udc97")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},"\ud83d\udd90")),u.a.createElement("li",null,u.a.createElement(d.c,{to:"#"},u.a.createElement(g.a,null))))),placement:"bottomCenter"},u.a.createElement(d.c,{to:"#"},u.a.createElement(v.a,null)))),u.a.createElement("div",{className:"atbd-chatbox__message"},u.a.createElement(y.MessageList,{className:"message-box"},e.content))),e.email===P&&A.length===t+1?u.a.createElement("div",{className:"message-seen text-right"},u.a.createElement("span",{className:"message-seen__time"},"Seen 9:20 PM "),u.a.createElement("img",{src:"../../../static/img/chat-author/".concat(e.img),alt:""})):null))))})):u.a.createElement("p",null,"No data found"))),u.a.createElement(y.Footer,null,u.a.createElement("form",{onSubmit:G},u.a.createElement("div",{className:"chatbox-reply-form d-flex ".concat(S.fileList.length&&"hasImage"," ").concat(S.fileList2.length&&"hasFile")},u.a.createElement("div",{className:"chatbox-reply-input"},u.a.createElement("span",{className:"smile-icon"},B&&u.a.createElement(O.a,{onEmojiClick:function(e,t){Y(Object(m.a)(Object(m.a)({},S),{},{inputValue:Q+t.emoji}))}}),u.a.createElement(d.c,{onClick:function(){I(!B)},to:"#"},u.a.createElement(p.a,{icon:"smile",size:24}))),u.a.createElement("input",{onChange:function(e){Y(Object(m.a)(Object(m.a)({},S),{},{inputValue:e.target.value}))},placeholder:"Type your message...",name:"chat",id:"chat",style:{width:"100%"},value:Q})),u.a.createElement("div",{className:"chatbox-reply-action d-flex"},u.a.createElement(d.c,{to:"#"},u.a.createElement(l.a,K,u.a.createElement(p.a,{icon:"camera",size:18}))),u.a.createElement(d.c,{to:"#"},u.a.createElement(l.a,U,u.a.createElement(p.a,{icon:"paperclip",size:18}))),u.a.createElement(_.Button,{onClick:G,type:"primary",className:"btn-send"},u.a.createElement(p.a,{icon:"send",size:18}))))))))}}}]);