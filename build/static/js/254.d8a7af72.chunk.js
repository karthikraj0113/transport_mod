(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[254],{1262:function(e,t,a){"use strict";a.r(t);a(247);var n=a(136),r=a(1),l=a(135),o=a(0),c=a.n(o),i=a(45),s=a(4),u=a(12),d=a.n(u),m=a(939),p=a(950),f=a(958),b=a(945),E=a(922),h=c.a.createElement(c.a.Fragment,null,c.a.createElement(s.d,{to:"#"},c.a.createElement(d.a,{size:16,icon:"printer"}),c.a.createElement("span",null,"Printer")),c.a.createElement(s.d,{to:"#"},c.a.createElement(d.a,{size:16,icon:"book-open"}),c.a.createElement("span",null,"PDF")),c.a.createElement(s.d,{to:"#"},c.a.createElement(d.a,{size:16,icon:"file-text"}),c.a.createElement("span",null,"Google Sheets")),c.a.createElement(s.d,{to:"#"},c.a.createElement(d.a,{size:16,icon:"x"}),c.a.createElement("span",null,"Excel (XLSX)")),c.a.createElement(s.d,{to:"#"},c.a.createElement(d.a,{size:16,icon:"file"}),c.a.createElement("span",null,"CSV"))),v=function(e){var t=e.title,a=Object(i.c)(),u=Object(i.d)((function(e){return{performanceState:e.chartContent.performanceData,preIsLoading:e.chartContent.perLoading}})),d=u.performanceState,v=u.preIsLoading,C=Object(o.useState)({revenue:"year"}),g=Object(l.a)(C,2),k=g[0],z=g[1];Object(o.useEffect)((function(){b.performanceGetData&&a(Object(b.performanceGetData)())}),[a]);var L=function(e){return z(Object(r.a)(Object(r.a)({},k),{},{revenue:e})),a(Object(b.performanceFilterData)(e))},y=null!==d&&[{data:d.users[1],borderColor:"#5F63F2",borderWidth:4,fill:!0,backgroundColor:function(){return Object(f.chartLinearGradient)(document.getElementById("performance"),300,{start:"#5F63F230",end:"#ffffff05"})},label:"Current period",pointStyle:"circle",pointRadius:"0",hoverRadius:"9",pointBorderColor:"#fff",pointBackgroundColor:"#5F63F2",hoverBorderWidth:5,amount:"$7,596",amountClass:"current-amount"},{data:d.users[2],borderColor:"#C6D0DC",borderWidth:2,fill:!1,backgroundColor:"#00173750",label:"Previous period",borderDash:[3,3],pointRadius:"0",hoverRadius:"0",amount:"$3,258",amountClass:"prev-amount"}];return c.a.createElement(m.RevenueWrapper,null,null!==d&&c.a.createElement(E.Cards,{isbutton:c.a.createElement("div",{className:"card-nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"week"===k.revenue?"active":"deactivate"},c.a.createElement(s.c,{onClick:function(){return L("week")},to:"#"},"Week")),c.a.createElement("li",{className:"month"===k.revenue?"active":"deactivate"},c.a.createElement(s.c,{onClick:function(){return L("month")},to:"#"},"Month")),c.a.createElement("li",{className:"year"===k.revenue?"active":"deactivate"},c.a.createElement(s.c,{onClick:function(){return L("year")},to:"#"},"Year")))),more:h,title:t,size:"large"},v?c.a.createElement("div",{className:"sd-spin"},c.a.createElement(n.a,null)):c.a.createElement("div",{className:"performance-lineChart"},c.a.createElement("ul",null,y&&y.map((function(e,t){return c.a.createElement("li",{key:t+1,className:"custom-label"},c.a.createElement("strong",{className:e.amountClass},e.amount),c.a.createElement("div",null,c.a.createElement("span",{style:{backgroundColor:e.borderColor}}),e.label))}))),c.a.createElement(p.ChartjsAreaChart,{id:"performance",labels:d.labels,datasets:y,options:{maintainAspectRatio:!0,elements:{z:9999},legend:{display:!1,position:"bottom",align:"start",labels:{boxWidth:6,display:!1,usePointStyle:!0}},hover:{mode:"index",intersect:!1},tooltips:{mode:"label",intersect:!1,backgroundColor:"#ffffff",position:"average",enabled:!1,custom:f.customTooltips,callbacks:{title:function(){return"Total Revenue"},label:function(e,t){var a=e.yLabel,n=e.datasetIndex;return'<span class="chart-data">'.concat(a,'k</span> <span class="data-label">').concat(t.datasets[n].label,"</span>")}}},scales:{yAxes:[{gridLines:{color:"#e5e9f2",borderDash:[3,3],zeroLineColor:"#e5e9f2",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",suggestedMin:50,suggestedMax:80,stepSize:20,callback:function(e){return"".concat(e,"k")}}}],xAxes:[{gridLines:{display:!0,zeroLineWidth:2,zeroLineColor:"transparent",color:"transparent",z:1,tickMarkLength:0},ticks:{padding:10}}]}},height:window.innerWidth<=575?200:120}))))};v.defaultProps={title:"Total Revenue"},t.default=v}}]);