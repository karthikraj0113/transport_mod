(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[220],{1094:function(e,t,a){"use strict";a.r(t);var n=a(135),r=a(0),o=r.useRef,i=r.useState,s=a(0).useEffect;t.default=function(){var e=i({}),t=Object(n.a)(e,2),a=t[0],r=t[1],l=o();return s((function(){if(l.current){var e=l.current.chartInstance.data;r(e)}}),[]),{ref:l,chartData:a}}},1266:function(e,t,a){"use strict";a.r(t);var n=a(935),r=(a(247),a(136)),o=a(1),i=a(135),s=a(0),l=a.n(s),c=a(12),d=a.n(c),u=a(4),b=a(45),p=a(939),f=a(922),h=a(25),g=a(950),m=a(945);t.default=function(){var e=Object(b.c)(),t=Object(b.d)((function(e){return{youtubeSubscribeState:e.chartContent.youtubeSubscribeData,yuIsLoading:e.chartContent.yuLoading}})),a=t.youtubeSubscribeState,c=t.yuIsLoading,y=Object(s.useState)({youtubeSubscribeTabActive:"year"}),v=Object(i.a)(y,2),C=v[0],A=v[1];Object(s.useEffect)((function(){m.youtubeSubscribeGetData&&e(Object(m.youtubeSubscribeGetData)())}),[e]);var k=null!==a&&[{data:a.gained,backgroundColor:"#5F63F280",hoverBackgroundColor:"#5F63F2",label:"Gained",maxBarThickness:10,barThickness:12},{data:a.lost,backgroundColor:"#FF4D4F80",hoverBackgroundColor:"#FF4D4F",label:"Lost",maxBarThickness:10,barThickness:12}],S=function(t){A(Object(o.a)(Object(o.a)({},C),{},{youtubeSubscribeTabActive:t})),e(Object(m.youtubeSubscribeFilterData)(t))};return l.a.createElement(l.a.Fragment,null,null!==a&&l.a.createElement(f.Cards,{isbutton:l.a.createElement("div",{className:"card-nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"week"===C.youtubeSubscribeTabActive?"active":"deactivate"},l.a.createElement(u.c,{onClick:function(){return S("week")},to:"#"},"Week")),l.a.createElement("li",{className:"month"===C.youtubeSubscribeTabActive?"active":"deactivate"},l.a.createElement(u.c,{onClick:function(){return S("month")},to:"#"},"Month")),l.a.createElement("li",{className:"year"===C.youtubeSubscribeTabActive?"active":"deactivate"},l.a.createElement(u.c,{onClick:function(){return S("year")},to:"#"},"Year")))),title:"Youtube Subscribers",size:"large"},c?l.a.createElement("div",{className:"sd-spin"},l.a.createElement(r.a,null)):l.a.createElement(p.CardBarChart,null,l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement("div",{className:"card-bar-top"},l.a.createElement("p",null,"Subscribers"),l.a.createElement(h.default,{as:"h3"},a.Subscribe,l.a.createElement("sub",null,l.a.createElement(d.a,{icon:"arrow-up",size:14}),a.percent,"%"))),l.a.createElement("ul",null,k&&k.map((function(e,t){return l.a.createElement("li",{key:t+1,className:"custom-label"},l.a.createElement("span",{style:{backgroundColor:e.hoverBackgroundColor}}),e.label)})))),l.a.createElement(g.ChartjsBarChartTransparent,{labels:a.labels,datasets:k,options:{maintainAspectRatio:!0,responsive:!0,layout:{padding:{top:20}},legend:{display:!1,position:"top",align:"end",labels:{boxWidth:6,display:!0,usePointStyle:!0}},scales:{yAxes:[{gridLines:{color:"#e5e9f2",borderDash:[3,3],zeroLineColor:"#e5e9f2",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:12,fontColor:"#182b49",max:Math.max.apply(Math,Object(n.a)(a.gained)),stepSize:Math.max.apply(Math,Object(n.a)(a.gained))/5,display:!0,min:0,padding:10}}],xAxes:[{gridLines:{display:!0,zeroLineWidth:2,zeroLineColor:"#fff",color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:12,fontColor:"#182b49",min:0}}]}}}))))}},935:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(253);var r=a(347);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},950:function(e,t,a){"use strict";a.r(t),a.d(t,"ChartjsDonutChart",(function(){return y})),a.d(t,"ChartjsDonutChart2",(function(){return v})),a.d(t,"ChartjsPieChart",(function(){return m})),a.d(t,"ChartjsBarChartGrad",(function(){return g})),a.d(t,"ChartjsBarChartTransparent",(function(){return h})),a.d(t,"ChartjsAreaChart",(function(){return f})),a.d(t,"ChartjsLineChart",(function(){return p})),a.d(t,"ChartjsStackedChart",(function(){return b})),a.d(t,"ChartjsHorizontalChart",(function(){return u})),a.d(t,"ChartjsBarChart",(function(){return d})),a.d(t,"ChartjsDonut",(function(){return C}));var n=a(1),r=a(0),o=a.n(r),i=a(1104),s=a(1094),l=a(958),c=a(939),d=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,s={datasets:a,labels:t};return o.a.createElement(i.Bar,{data:s,height:r,options:n})};d.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};var u=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,s={datasets:a,labels:t};return o.a.createElement(i.HorizontalBar,{data:s,height:r,options:n})};u.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49",max:100}}]}}};var b=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,s={datasets:a,labels:t};return o.a.createElement(i.Bar,{data:s,height:r,options:n})};b.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};var p=function(e){var t=e.labels,a=e.datasets,r=e.options,s=e.height,l=e.layout,d=e.width,u=e.id,b={labels:t,datasets:a};return o.a.createElement(c.ChartContainer,{className:"parentContainer"},o.a.createElement(i.Line,{id:u&&u,width:d,data:b,height:s,options:Object(n.a)(Object(n.a)({},r),l)}))};p.defaultProps={height:479,width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:"-10",right:0,top:0,bottom:"-10"}},legend:{display:!1,labels:{display:!1}}}};var f=function(e){var t=e.labels,a=e.datasets,r=e.options,s=e.height,d=e.layout,u=e.id,b={labels:t,datasets:a};return o.a.createElement("div",null,o.a.createElement(c.ChartContainer,{className:"parentContainer"},o.a.createElement(i.Line,{id:u,data:b,height:s,options:Object(n.a)(Object(n.a)({tooltips:{mode:"nearest",intersect:!1,enabled:!1,custom:l.customTooltips,callbacks:{labelColor:function(e,t){return{backgroundColor:a.map((function(e){return e.borderColor})),borderColor:"transparent"}}}}},r),d)})))};f.defaultProps={height:250,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!0,backgroundColor:"#00173750",pointHoverBorderColor:"transparent"},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!0,backgroundColor:"#1ce1ac50",pointHoverBorderColor:"transparent"}],options:{maintainAspectRatio:!0,hover:{mode:"nearest",intersect:!1},layout:{padding:{left:-10,right:0,top:2,bottom:-10}},legend:{display:!1,labels:{display:!1}},elements:{point:{radius:0}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,display:!1,stepSize:20}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,display:!1}}]}}};var h=function(e){var t=e.labels,a=e.datasets,r=e.options,s=e.height,d=e.layout,u={labels:t,datasets:a};return o.a.createElement(c.ChartContainer,{className:"parentContainer"},o.a.createElement(i.Bar,{data:u,height:window.innerWidth<=575?230:s,options:Object(n.a)(Object(n.a)(Object(n.a)({},r),d),{},{tooltips:{mode:"label",intersect:!1,position:"average",enabled:!1,custom:l.customTooltips,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=e.yLabel;return'<span class="chart-data">'.concat(n,'</span> <span class="data-label">').concat(a,"</span>")},labelColor:function(e,t){return{backgroundColor:t.config.data.datasets[e.datasetIndex].hoverBackgroundColor,borderColor:"transparent",usePointStyle:!0}}}}})}))};h.defaultProps={height:176,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",label:"Profit",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",label:"Lose",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!0,position:"bottom",align:"start",labels:{boxWidth:6,display:!0,usePointStyle:!0}},layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",max:80,stepSize:20,callback:function(e,t,a){return"".concat(e,"k")}}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49"}}]}}};var g=function(e){var t=e.labels,a=e.datasets,r=e.options,s=e.height,l=e.layout,c={labels:t,datasets:a};return o.a.createElement(i.Bar,{data:c,height:s,options:Object(n.a)(Object(n.a)({},r),l)})};g.defaultProps={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};var m=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,s={labels:t,datasets:a};return o.a.createElement(i.Pie,{data:s,height:r,options:n})};m.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1},animation:{animateScale:!0,animateRotate:!0}}};var y=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l=Object(s.default)().ref,c={labels:t,datasets:a};return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("p",null,o.a.createElement("span",null,a[0].data.reduce((function(e,t){return e+t}),0)),"Total visitors"),o.a.createElement(i.Doughnut,{ref:l,data:c,height:r,options:n}))};y.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:70,maintainAspectRatio:!0,responsive:!0,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};var v=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l=Object(s.default)().ref,c={labels:t,datasets:a};return o.a.createElement("div",null,o.a.createElement(i.Doughnut,{ref:l,data:c,height:r,options:n,width:200}),o.a.createElement("div",{className:"align-center-v justify-content-between rd-labels"},o.a.createElement("div",{className:"revenue-chat-label"},t.map((function(e,t){return o.a.createElement("div",{key:t+1,className:"chart-label"},o.a.createElement("span",{className:"label-dot dot-".concat(e)}),e)}))),o.a.createElement("div",{className:"revenue-chart-data"},a.map((function(e,t){var a=e.data;return o.a.createElement("div",{key:t+1},a.map((function(e){return o.a.createElement("p",{key:e},o.a.createElement("strong",null,"$",e))})))}))),o.a.createElement("div",{className:"revenue-chat-percentage"},o.a.createElement("span",null,"45%"),o.a.createElement("span",null,"45%"),o.a.createElement("span",null,"45%"))))};v.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};var C=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l=Object(s.default)().ref,c={labels:t,datasets:a};return o.a.createElement(i.Doughnut,{ref:l,data:c,height:r,options:n,width:200})};C.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}}},958:function(e,t,a){"use strict";a.r(t),a.d(t,"textRefactor",(function(){return n})),a.d(t,"chartLinearGradient",(function(){return r})),a.d(t,"customTooltips",(function(){return o}));var n=function(e,t){return"".concat(e.split(" ").slice(0,t).join(" "),"...")},r=function(e,t,a){var n=e.getContext("2d").createLinearGradient(0,0,0,t);return n.addColorStop(0,"".concat(a.start)),n.addColorStop(1,"".concat(a.end)),n},o=function(e){var t=document.querySelector(".chartjs-tooltip");if(this._chart.canvas.closest(".parentContainer").contains(t)||((t=document.createElement("div")).className="chartjs-tooltip",t.innerHTML="<table></table>",document.querySelectorAll(".parentContainer").forEach((function(e){e.contains(document.querySelector(".chartjs-tooltip"))&&document.querySelector(".chartjs-tooltip").remove()})),this._chart.canvas.closest(".parentContainer").appendChild(t)),0!==e.opacity){if(t.classList.remove("above","below","no-transform"),e.yAlign?t.classList.add(e.yAlign):t.classList.add("no-transform"),e.body){var a=e.title||[],n=e.body.map((function(e){return e.lines})),r="<thead>";a.forEach((function(e){r+="<div class='tooltip-title'>".concat(e,"</div>")})),r+="</thead><tbody>",n.forEach((function(t,a){var n=e.labelColors[a],o="background:".concat(n.backgroundColor);o+="; border-color:".concat(n.borderColor),o+="; border-width: 2px";var i='<span class="chartjs-tooltip-key" style="'.concat(o+="; border-radius: 30px",'"></span>');r+="<tr><td>".concat(i).concat(t,"</td></tr>")})),r+="</tbody>",t.querySelector("table").innerHTML=r}var o=this._chart.canvas.offsetTop,i=this._chart.canvas.offsetLeft,s=document.querySelector(".chartjs-tooltip").clientHeight;t.style.opacity=1,t.style.left="".concat(i+e.caretX,"px"),t.style.top="".concat(o+e.caretY-(e.caretY>10?s>100?s+5:s+15:70),"px"),t.style.fontFamily=e._bodyFontFamily,t.style.fontSize="".concat(e.bodyFontSize,"px"),t.style.fontStyle=e._bodyFontStyle,t.style.padding="".concat(e.yPadding,"px ").concat(e.xPadding,"px")}else t.style.opacity=0}}}]);