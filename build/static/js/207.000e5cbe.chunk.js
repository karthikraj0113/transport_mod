(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[207],{1188:function(t,e,n){"use strict";n.r(e),n.d(e,"AutoCompleteStyled",(function(){return C}));n(56),n(1620),n(933);var a=n(3),r=n(10),o=n(9),c=n(8),i=n.n(c),l=n(58),s=n(35),p=n(0),u=n(62),d=n(934),f=n(18),h=d.a.Option;function m(t){return t&&t.type&&(t.type.isSelectOption||t.type.isSelectOptGroup)}var y=function(t,e){var n,c=t.prefixCls,y=t.className,b=t.popupClassName,x=t.dropdownClassName,g=t.children,v=t.dataSource,S=Object(l.a)(g);if(1===S.length&&Object(f.c)(S[0])&&!m(S[0])){var C=Object(o.a)(S,1);n=C[0]}var E,w=n?function(){return n}:void 0;return E=S.length&&m(S[0])?g:v?v.map((function(t){if(Object(f.c)(t))return t;switch(Object(r.a)(t)){case"string":return p.createElement(h,{key:t,value:t},t);case"object":var e=t.value;return p.createElement(h,{key:e,value:e},t.text);default:return}})):[],p.createElement(u.a,null,(function(n){var r=(0,n.getPrefixCls)("select",c);return p.createElement(d.a,Object(a.a)({ref:e},Object(s.a)(t,["dataSource"]),{prefixCls:r,popupClassName:b||x,className:i()("".concat(r,"-auto-complete"),y),mode:d.a.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:w}),E)}))},b=p.forwardRef(y);b.Option=h;var x,g=b,v=n(20),S=n(17),C=Object(S.b)(g)(x||(x=Object(v.a)(["\n    display: block !important;\n    .ant-select-selection-placeholder{\n        padding: 0 20px !important;\n        text-align: ",";\n        ",": 2px !important;\n    }\n    .ant-select-selector{\n        display: flex;\n        align-items: center;\n        height: 37px !important;\n        padding: 0 !important;\n        border-color: #E3E6EF !important;\n        .ant-select-selection-search{\n            .ant-input-affix-wrapper{\n                padding: 0 20px;\n            }\n            .ant-input-suffix{\n                svg,\n                i{\n                    color: ",";\n                }\n            }\n        }\n    }\n    .ant-select-selector input{\n        height: 33px !important;\n        ",": 0 !important;\n    }\n    .ant-select-selection-search{\n        ",": 20px;\n        width: auto !important;\n        @media only screen and (max-width: 575px){\n            width: 100% !important;\n        }\n    }\n    .ant-select-selection-search textarea.ant-input{\n        padding: 12px 20px;\n    }\n    .ant-input-affix-wrapper{\n        padding: 0 20px;\n    }\n    .ant-input-affix-wrapper input{\n        height: 38px !important;\n    }\n    .ant-input-affix-wrapper .ant-input-suffix .search-btn{\n        height: 38px;\n        border-radius: ",";\n        svg,\n        i{\n            color: #fff;\n        }\n    }\n"])),(function(t){return t.theme.rtl?"right":"left"}),(function(t){return t.theme.rtl?"right":"left"}),(function(t){return t.theme["extra-light-color"]}),(function(t){return t.theme.rtl?"padding-right":"padding-left"}),(function(t){return t.theme.rtl?"right":"left"}),(function(t){return t.theme.rtl?"4px 0 0 4px":"0 4px 4px 0"}))},1487:function(t,e,n){"use strict";n.r(e);var a=n(135),r=n(0),o=n.n(r),c=n(45),i=n(1068);e.default=function(){var t=Object(c.d)((function(t){return[t.headerSearchData,t.email.allMessage]})),e=Object(a.a)(t,2),n=e[0],r=e[1];return o.a.createElement(i.default,{email:r.filter((function(t){return"sent"===t.type})),searchData:n})}},1620:function(t,e,n){},958:function(t,e,n){"use strict";n.r(e),n.d(e,"textRefactor",(function(){return a})),n.d(e,"chartLinearGradient",(function(){return r})),n.d(e,"customTooltips",(function(){return o}));var a=function(t,e){return"".concat(t.split(" ").slice(0,e).join(" "),"...")},r=function(t,e,n){var a=t.getContext("2d").createLinearGradient(0,0,0,e);return a.addColorStop(0,"".concat(n.start)),a.addColorStop(1,"".concat(n.end)),a},o=function(t){var e=document.querySelector(".chartjs-tooltip");if(this._chart.canvas.closest(".parentContainer").contains(e)||((e=document.createElement("div")).className="chartjs-tooltip",e.innerHTML="<table></table>",document.querySelectorAll(".parentContainer").forEach((function(t){t.contains(document.querySelector(".chartjs-tooltip"))&&document.querySelector(".chartjs-tooltip").remove()})),this._chart.canvas.closest(".parentContainer").appendChild(e)),0!==t.opacity){if(e.classList.remove("above","below","no-transform"),t.yAlign?e.classList.add(t.yAlign):e.classList.add("no-transform"),t.body){var n=t.title||[],a=t.body.map((function(t){return t.lines})),r="<thead>";n.forEach((function(t){r+="<div class='tooltip-title'>".concat(t,"</div>")})),r+="</thead><tbody>",a.forEach((function(e,n){var a=t.labelColors[n],o="background:".concat(a.backgroundColor);o+="; border-color:".concat(a.borderColor),o+="; border-width: 2px";var c='<span class="chartjs-tooltip-key" style="'.concat(o+="; border-radius: 30px",'"></span>');r+="<tr><td>".concat(c).concat(e,"</td></tr>")})),r+="</tbody>",e.querySelector("table").innerHTML=r}var o=this._chart.canvas.offsetTop,c=this._chart.canvas.offsetLeft,i=document.querySelector(".chartjs-tooltip").clientHeight;e.style.opacity=1,e.style.left="".concat(c+t.caretX,"px"),e.style.top="".concat(o+t.caretY-(t.caretY>10?i>100?i+5:i+15:70),"px"),e.style.fontFamily=t._bodyFontFamily,e.style.fontSize="".concat(t.bodyFontSize,"px"),e.style.fontStyle=t._bodyFontStyle,e.style.padding="".concat(t.yPadding,"px ").concat(t.xPadding,"px")}else e.style.opacity=0}},967:function(t,e,n){"use strict";n.r(e),n.d(e,"AutoComplete",(function(){return f}));n(528);var a=n(319),r=(n(246),n(109)),o=n(31),c=n(0),i=n.n(c),l=n(338),s=n(45),p=n(1188),u=function(){},d=function(t,e){return{value:t,label:i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t,e)}},f=function(t){var e=Object(s.d)((function(t){return{rtl:t.ChangeLayoutMode.rtlData}})).rtl,n=t.customComponent,c=t.patterns,f=t.patternButtons,h=t.width,m=t.onSearch,y=t.dataSource,b=t.placeholder,x=(null===y||void 0===y?void 0:y.length)>0&&y.map((function(t){var e=t.title,n=t.count;return{label:e,options:[d(e,i.a.createElement("span",{className:"certain-search-item-count"},n," people"))]}})),g=function(t){m(t)};return n?i.a.createElement(p.AutoCompleteStyled,{dataSource:y,style:{width:h},onSelect:u,onSearch:g},n):c?i.a.createElement(p.AutoCompleteStyled,{className:"certain-category-search",dropdownClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:h},options:x,placeholder:b,onSearch:g},i.a.createElement(a.a,{suffix:f?i.a.createElement(r.a,{className:"search-btn",style:Object(o.a)({},e?"marginLeft":"marginRight",-20),type:"primary"},i.a.createElement(l.a,null)):i.a.createElement(l.a,null)})):i.a.createElement(p.AutoCompleteStyled,{dataSource:y,style:{width:h},onSelect:u,onSearch:g,placeholder:b})};f.defaultProps={width:"350px",placeholder:"Input here"}}}]);