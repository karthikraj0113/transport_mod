(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[263],{1520:function(e,a,t){"use strict";t.r(a);t(185);var n=t(84),l=(t(184),t(37)),c=(t(528),t(319)),m=t(1),r=(t(929),t(930)),s=t(135),u=t(0),o=t.n(u),i=t(1069),E=t(922),d=t(923),p=t(924),f=t(25);a.default=function(){var e=r.a.useForm(),a=Object(s.a)(e,1)[0],t=Object(u.useState)({name:"clayton",values:null}),g=Object(s.a)(t,2),v=g[0],b=g[1];return o.a.createElement(i.AccountWrapper,null,o.a.createElement(E.Cards,{title:o.a.createElement("div",{className:"setting-card-title"},o.a.createElement(f.default,{as:"h4"},"Account Settings"),o.a.createElement("span",null,"Update your username and manage your account"))},o.a.createElement(n.a,null,o.a.createElement(l.a,{xs:24},o.a.createElement(p.BasicFormWrapper,null,o.a.createElement(r.a,{form:a,name:"editAccount",onFinish:function(e){b(Object(m.a)(Object(m.a)({},v),{},{values:e}))}},o.a.createElement("div",{className:"account-form-top"},o.a.createElement(n.a,{justify:"center"},o.a.createElement(l.a,{xxl:10,lg:16,md:18,xs:24},o.a.createElement("div",{className:"account-form"},o.a.createElement(r.a.Item,{name:"username",initialValue:v.name,label:"Username"},o.a.createElement(c.a,{onChange:function(e){b({name:e.target.value})}})),o.a.createElement("p",null,"Your Dashboard URL: http://dashboard.com/",o.a.createElement("span",null,v.name)),o.a.createElement(r.a.Item,{name:"email",initialValue:"contact@example.com",rules:[{type:"email"}],label:"Email"},o.a.createElement(c.a,null)))))),o.a.createElement("div",{className:"account-form-bottom"},o.a.createElement(n.a,{justify:"center"},o.a.createElement(l.a,{xxl:10,lg:16,md:18,xs:24},o.a.createElement("div",{className:"account-closing"},o.a.createElement(n.a,null,o.a.createElement(l.a,{lg:18,md:24,sm:18,xs:24},o.a.createElement(f.default,{className:"account-closing__title",as:"h4"},"Close Account"),o.a.createElement("p",null,"Delete Your Account and Account data")),o.a.createElement(l.a,{lg:6,md:24,sm:6,xs:24},o.a.createElement(d.Button,{size:"small",type:"danger"},"Close Account")))),o.a.createElement("div",{className:"account-action"},o.a.createElement("div",{className:"setting-form-actions"},o.a.createElement(d.Button,{size:"default",htmlType:"submit",type:"primary"},"Save Change"),"\xa0 \xa0",o.a.createElement(d.Button,{size:"default",onClick:function(e){e.preventDefault(),a.resetFields()},type:"light"},"Cancel"))))))))))))}}}]);