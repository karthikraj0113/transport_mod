(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[232],{1094:function(e,t,a){"use strict";a.r(t);var n=a(135),r=a(0),o=r.useRef,s=r.useState,l=a(0).useEffect;t.default=function(){var e=s({}),t=Object(n.a)(e,2),a=t[0],r=t[1],i=o();return l((function(){if(i.current){var e=i.current.chartInstance.data;r(e)}}),[]),{ref:i,chartData:a}}},1478:function(e,t,a){"use strict";a.r(t);a(185);var n=a(84),r=(a(184),a(37)),o=a(0),s=a.n(o),l=a(4),i=a(12),c=a.n(i),d=a(939),u=a(922),p=a(950),b=s.a.createElement(s.a.Fragment,null,s.a.createElement(l.c,{to:"#"},s.a.createElement(c.a,{size:16,icon:"printer"}),s.a.createElement("span",null,"Printer")),s.a.createElement(l.c,{to:"#"},s.a.createElement(c.a,{size:16,icon:"book-open"}),s.a.createElement("span",null,"PDF")),s.a.createElement(l.c,{to:"#"},s.a.createElement(c.a,{size:16,icon:"file-text"}),s.a.createElement("span",null,"Google Sheets")),s.a.createElement(l.c,{to:"#"},s.a.createElement(c.a,{size:16,icon:"x"}),s.a.createElement("span",null,"Excel (XLSX)")),s.a.createElement(l.c,{to:"#"},s.a.createElement(c.a,{size:16,icon:"file"}),s.a.createElement("span",null,"CSV"))),h={responsive:!0,maintainAspectRatio:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1},ticks:{display:!1}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{display:!0}}]}};t.default=function(){return s.a.createElement(d.SalesGrowthWrap,null,s.a.createElement(u.Cards,{more:b,title:"Monthly Sales Growth"},s.a.createElement(n.a,null,s.a.createElement(r.a,{xs:24},s.a.createElement("div",{className:"growth-list d-flex justify-content-between"},s.a.createElement("div",{className:"growth-list__item"},s.a.createElement("h2",null,"70%"),s.a.createElement("p",null,"Progress")),s.a.createElement("div",{className:"growth-list__item"},s.a.createElement("h2",null,"20%"),s.a.createElement("p",null,"Target"))),s.a.createElement("div",{className:"growth-chart-wrap"},s.a.createElement(p.ChartjsBarChartTransparent,{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,60,65,75,70,80],backgroundColor:"#5F63F250",hoverBackgroundColor:"#5F63F2",maxBarThickness:10,barThickness:12,label:"Orders",barPercentage:1}],options:h,height:180}))))))}},950:function(e,t,a){"use strict";a.r(t),a.d(t,"ChartjsDonutChart",(function(){return y})),a.d(t,"ChartjsDonutChart2",(function(){return v})),a.d(t,"ChartjsPieChart",(function(){return m})),a.d(t,"ChartjsBarChartGrad",(function(){return f})),a.d(t,"ChartjsBarChartTransparent",(function(){return g})),a.d(t,"ChartjsAreaChart",(function(){return h})),a.d(t,"ChartjsLineChart",(function(){return b})),a.d(t,"ChartjsStackedChart",(function(){return p})),a.d(t,"ChartjsHorizontalChart",(function(){return u})),a.d(t,"ChartjsBarChart",(function(){return d})),a.d(t,"ChartjsDonut",(function(){return C}));var n=a(1),r=a(0),o=a.n(r),s=a(1104),l=a(1094),i=a(958),c=a(939),d=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l={datasets:a,labels:t};return o.a.createElement(s.Bar,{data:l,height:r,options:n})};d.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};var u=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l={datasets:a,labels:t};return o.a.createElement(s.HorizontalBar,{data:l,height:r,options:n})};u.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49",max:100}}]}}};var p=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l={datasets:a,labels:t};return o.a.createElement(s.Bar,{data:l,height:r,options:n})};p.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};var b=function(e){var t=e.labels,a=e.datasets,r=e.options,l=e.height,i=e.layout,d=e.width,u=e.id,p={labels:t,datasets:a};return o.a.createElement(c.ChartContainer,{className:"parentContainer"},o.a.createElement(s.Line,{id:u&&u,width:d,data:p,height:l,options:Object(n.a)(Object(n.a)({},r),i)}))};b.defaultProps={height:479,width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:"-10",right:0,top:0,bottom:"-10"}},legend:{display:!1,labels:{display:!1}}}};var h=function(e){var t=e.labels,a=e.datasets,r=e.options,l=e.height,d=e.layout,u=e.id,p={labels:t,datasets:a};return o.a.createElement("div",null,o.a.createElement(c.ChartContainer,{className:"parentContainer"},o.a.createElement(s.Line,{id:u,data:p,height:l,options:Object(n.a)(Object(n.a)({tooltips:{mode:"nearest",intersect:!1,enabled:!1,custom:i.customTooltips,callbacks:{labelColor:function(e,t){return{backgroundColor:a.map((function(e){return e.borderColor})),borderColor:"transparent"}}}}},r),d)})))};h.defaultProps={height:250,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!0,backgroundColor:"#00173750",pointHoverBorderColor:"transparent"},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!0,backgroundColor:"#1ce1ac50",pointHoverBorderColor:"transparent"}],options:{maintainAspectRatio:!0,hover:{mode:"nearest",intersect:!1},layout:{padding:{left:-10,right:0,top:2,bottom:-10}},legend:{display:!1,labels:{display:!1}},elements:{point:{radius:0}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,display:!1,stepSize:20}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,display:!1}}]}}};var g=function(e){var t=e.labels,a=e.datasets,r=e.options,l=e.height,d=e.layout,u={labels:t,datasets:a};return o.a.createElement(c.ChartContainer,{className:"parentContainer"},o.a.createElement(s.Bar,{data:u,height:window.innerWidth<=575?230:l,options:Object(n.a)(Object(n.a)(Object(n.a)({},r),d),{},{tooltips:{mode:"label",intersect:!1,position:"average",enabled:!1,custom:i.customTooltips,callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label,n=e.yLabel;return'<span class="chart-data">'.concat(n,'</span> <span class="data-label">').concat(a,"</span>")},labelColor:function(e,t){return{backgroundColor:t.config.data.datasets[e.datasetIndex].hoverBackgroundColor,borderColor:"transparent",usePointStyle:!0}}}}})}))};g.defaultProps={height:176,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",label:"Profit",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",label:"Lose",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!0,position:"bottom",align:"start",labels:{boxWidth:6,display:!0,usePointStyle:!0}},layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",max:80,stepSize:20,callback:function(e,t,a){return"".concat(e,"k")}}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49"}}]}}};var f=function(e){var t=e.labels,a=e.datasets,r=e.options,l=e.height,i=e.layout,c={labels:t,datasets:a};return o.a.createElement(s.Bar,{data:c,height:l,options:Object(n.a)(Object(n.a)({},r),i)})};f.defaultProps={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};var m=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,l={labels:t,datasets:a};return o.a.createElement(s.Pie,{data:l,height:r,options:n})};m.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1},animation:{animateScale:!0,animateRotate:!0}}};var y=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,i=Object(l.default)().ref,c={labels:t,datasets:a};return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("p",null,o.a.createElement("span",null,a[0].data.reduce((function(e,t){return e+t}),0)),"Total visitors"),o.a.createElement(s.Doughnut,{ref:i,data:c,height:r,options:n}))};y.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:70,maintainAspectRatio:!0,responsive:!0,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};var v=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,i=Object(l.default)().ref,c={labels:t,datasets:a};return o.a.createElement("div",null,o.a.createElement(s.Doughnut,{ref:i,data:c,height:r,options:n,width:200}),o.a.createElement("div",{className:"align-center-v justify-content-between rd-labels"},o.a.createElement("div",{className:"revenue-chat-label"},t.map((function(e,t){return o.a.createElement("div",{key:t+1,className:"chart-label"},o.a.createElement("span",{className:"label-dot dot-".concat(e)}),e)}))),o.a.createElement("div",{className:"revenue-chart-data"},a.map((function(e,t){var a=e.data;return o.a.createElement("div",{key:t+1},a.map((function(e){return o.a.createElement("p",{key:e},o.a.createElement("strong",null,"$",e))})))}))),o.a.createElement("div",{className:"revenue-chat-percentage"},o.a.createElement("span",null,"45%"),o.a.createElement("span",null,"45%"),o.a.createElement("span",null,"45%"))))};v.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};var C=function(e){var t=e.labels,a=e.datasets,n=e.options,r=e.height,i=Object(l.default)().ref,c={labels:t,datasets:a};return o.a.createElement(s.Doughnut,{ref:i,data:c,height:r,options:n,width:200})};C.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}}},958:function(e,t,a){"use strict";a.r(t),a.d(t,"textRefactor",(function(){return n})),a.d(t,"chartLinearGradient",(function(){return r})),a.d(t,"customTooltips",(function(){return o}));var n=function(e,t){return"".concat(e.split(" ").slice(0,t).join(" "),"...")},r=function(e,t,a){var n=e.getContext("2d").createLinearGradient(0,0,0,t);return n.addColorStop(0,"".concat(a.start)),n.addColorStop(1,"".concat(a.end)),n},o=function(e){var t=document.querySelector(".chartjs-tooltip");if(this._chart.canvas.closest(".parentContainer").contains(t)||((t=document.createElement("div")).className="chartjs-tooltip",t.innerHTML="<table></table>",document.querySelectorAll(".parentContainer").forEach((function(e){e.contains(document.querySelector(".chartjs-tooltip"))&&document.querySelector(".chartjs-tooltip").remove()})),this._chart.canvas.closest(".parentContainer").appendChild(t)),0!==e.opacity){if(t.classList.remove("above","below","no-transform"),e.yAlign?t.classList.add(e.yAlign):t.classList.add("no-transform"),e.body){var a=e.title||[],n=e.body.map((function(e){return e.lines})),r="<thead>";a.forEach((function(e){r+="<div class='tooltip-title'>".concat(e,"</div>")})),r+="</thead><tbody>",n.forEach((function(t,a){var n=e.labelColors[a],o="background:".concat(n.backgroundColor);o+="; border-color:".concat(n.borderColor),o+="; border-width: 2px";var s='<span class="chartjs-tooltip-key" style="'.concat(o+="; border-radius: 30px",'"></span>');r+="<tr><td>".concat(s).concat(t,"</td></tr>")})),r+="</tbody>",t.querySelector("table").innerHTML=r}var o=this._chart.canvas.offsetTop,s=this._chart.canvas.offsetLeft,l=document.querySelector(".chartjs-tooltip").clientHeight;t.style.opacity=1,t.style.left="".concat(s+e.caretX,"px"),t.style.top="".concat(o+e.caretY-(e.caretY>10?l>100?l+5:l+15:70),"px"),t.style.fontFamily=e._bodyFontFamily,t.style.fontSize="".concat(e.bodyFontSize,"px"),t.style.fontStyle=e._bodyFontStyle,t.style.padding="".concat(e.yPadding,"px ").concat(e.xPadding,"px")}else t.style.opacity=0}}}]);