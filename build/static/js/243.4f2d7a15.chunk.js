/*! For license information please see 243.4f2d7a15.chunk.js.LICENSE.txt */
(this.webpackJsonptransport=this.webpackJsonptransport||[]).push([[243],{1193:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r(347);function n(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(o.a)(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,i=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}},2212:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var o=r(189),n=r(1193),a=r(935),i=r(1),l=r(324),c=r(325),s=r(332),u=r(333),h=r(51),p=r(85),d=r(135),f=r(0),g=["onLoad","onError"];function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),l=new T(n||[]);return o(i,"_invoke",{value:O(t,r,l)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=s;var h={};function p(){}function d(){}function f(){}var g={};c(g,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,a)&&(g=y);var b=f.prototype=p.prototype=Object.create(g);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;o(this,"_invoke",{value:function(o,a){function i(){return new e((function(n,i){!function o(n,a,i,l){var c=u(t[n],t,a);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,l)}))}l(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}})}function O(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=u(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var n=u(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=f,o(b,"constructor",{value:f,configurable:!0}),o(f,"constructor",{value:d,configurable:!0}),d.displayName=c(f,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},C(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new w(s(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(b),c(b,l,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function m(t){var e,r,o,n=t.chartVersion,a=void 0===n?"current":n,i=t.chartPackages,l=void 0===i?["corechart","controls"]:i,c=t.chartLanguage,s=void 0===c?"en":c,u=t.mapsApiKey,h=Object(f.useState)(null),p=Object(d.a)(h,2),g=p[0],v=p[1],m=Object(f.useState)(!1),y=Object(d.a)(m,2),b=y[0],C=y[1];return e="https://www.gstatic.com/charts/loader.js",r=function(){var t=null===window||void 0===window?void 0:window.google;t&&(t.charts.load(a,{packages:l,language:s,mapsApiKey:u}),t.charts.setOnLoadCallback((function(){v(t)})))},o=function(){C(!0)},Object(f.useEffect)((function(){if(document){var t=document.querySelector('script[src="'.concat(e,'"]'));if(!(null===t||void 0===t?void 0:t.dataset.loaded)){var n=t||document.createElement("script");t||(n.src=e);var a=function(){n.dataset.loaded="1",null===r||void 0===r||r()};return n.addEventListener("load",a),o&&n.addEventListener("error",o),t||document.head.append(n),function(){n.removeEventListener("load",a),o&&n.removeEventListener("error",o)}}null===r||void 0===r||r()}}),[]),[g,b]}function y(t){var e=t.onLoad,r=t.onError,o=m(Object(p.a)(t,g)),n=Object(d.a)(o,2),a=n[0],i=n[1];return Object(f.useEffect)((function(){a&&e&&e(a)}),[a]),Object(f.useEffect)((function(){i&&r&&r()}),[i]),null}var b,C={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:function(){},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}},w=0,O=function(){return"reactgooglegraph-".concat(w+=1)},E=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],j=function(){var t=Object(h.a)(v().mark((function t(e,r){var o,n=arguments;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.length>2&&void 0!==n[2]?n[2]:{},t.abrupt("return",new Promise((function(t,n){var a="".concat(o.headers?"headers=".concat(o.headers):"headers=0"),i="".concat(o.query?"&tq=".concat(encodeURIComponent(o.query)):""),l="".concat(o.gid?"&gid=".concat(o.gid):""),c="".concat(o.sheet?"&sheet=".concat(o.sheet):""),s="".concat(o.access_token?"&access_token=".concat(o.access_token):""),u="".concat(a).concat(l).concat(c).concat(i).concat(s),h="".concat(r,"/gviz/tq?").concat(u);new e.visualization.Query(h).send((function(e){e.isError()?n("Error in query:  ".concat(e.getMessage()," ").concat(e.getDetailedMessage())):t(e.getDataTable())}))})));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),L=f.createContext(C),T=L.Provider,k=L.Consumer,D=function(t){var e=t.children,r=t.value;return f.createElement(T,{value:r},e)},x=function(t){var e=t.render;return f.createElement(k,null,(function(t){return e(t)}))},z=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(l.a)(this,r);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={hiddenColumns:[]},t.listenToLegendToggle=function(){var e=t.props,r=e.google,o=e.googleChartWrapper;r.visualization.events.addListener(o,"select",(function(){var e=o.getChart().getSelection(),r=o.getDataTable();if(0!==e.length&&!e[0].row&&r){var n=e[0].column,l=t.getColumnID(r,n);t.state.hiddenColumns.includes(l)?t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{hiddenColumns:Object(a.a)(t.hiddenColumns.filter((function(t){return t!==l})))})})):t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{hiddenColumns:[].concat(Object(a.a)(t.hiddenColumns),[l])})}))}}))},t.applyFormatters=function(e,r){var o,i=t.props.google,l=Object(n.a)(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;switch(c.type){case"ArrowFormat":new i.visualization.ArrowFormat(c.options).format(e,c.column);break;case"BarFormat":new i.visualization.BarFormat(c.options).format(e,c.column);break;case"ColorFormat":var s,u=new i.visualization.ColorFormat(c.options),h=c.ranges,p=Object(n.a)(h);try{for(p.s();!(s=p.n()).done;){var d=s.value;u.addRange.apply(u,Object(a.a)(d))}}catch(f){p.e(f)}finally{p.f()}u.format(e,c.column);break;case"DateFormat":new i.visualization.DateFormat(c.options).format(e,c.column);break;case"NumberFormat":new i.visualization.NumberFormat(c.options).format(e,c.column);break;case"PatternFormat":new i.visualization.PatternFormat(c.options).format(e,c.column)}}}catch(f){l.e(f)}finally{l.f()}},t.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},t.draw=function(){var e=Object(h.a)(v().mark((function e(r){var o,n,i,l,c,s,u,h,p,d,f,g,m,y,b,C,w,O,E,L,T,k,D,x,z;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.data,n=r.diffdata,i=r.rows,l=r.columns,c=r.options,s=r.legend_toggle,u=r.legendToggle,h=r.chartType,p=r.formatters,d=r.spreadSheetUrl,f=r.spreadSheetQueryParameters,g=t.props,m=g.google,y=g.googleChartWrapper,C=null,n&&(w=m.visualization.arrayToDataTable(n.old),O=m.visualization.arrayToDataTable(n.new),C=m.visualization[h].prototype.computeDiff(w,O)),null===o){e.next=8;break}b=Array.isArray(o)?m.visualization.arrayToDataTable(o):new m.visualization.DataTable(o),e.next=19;break;case 8:if(!i||!l){e.next=12;break}b=m.visualization.arrayToDataTable([l].concat(Object(a.a)(i))),e.next=19;break;case 12:if(!d){e.next=18;break}return e.next=15,j(m,d,f);case 15:b=e.sent,e.next=19;break;case 18:b=m.visualization.arrayToDataTable([]);case 19:for(E=b.getNumberOfColumns(),L=0;L<E;L+=1)T=t.getColumnID(b,L),t.state.hiddenColumns.includes(T)&&(k=b.getColumnLabel(L),D=b.getColumnId(L),x=b.getColumnType(L),b.removeColumn(L),b.addColumn({label:k,id:D,type:x}));return z=y.getChart(),"Timeline"===y.getChartType()&&z&&z.clearChart(),y.setChartType(h),y.setOptions(c||{}),y.setDataTable(b),y.draw(),null!==t.props.googleChartDashboard&&t.props.googleChartDashboard.draw(b),C&&(y.setDataTable(C),y.draw()),p&&(t.applyFormatters(b,p),y.setDataTable(b),y.draw()),!0!==u&&!0!==s||t.grayOutHiddenColumns({options:c}),e.abrupt("return");case 32:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.grayOutHiddenColumns=function(e){var r=e.options,o=t.props.googleChartWrapper,n=o.getDataTable();if(n){var a=n.getNumberOfColumns();if(!1!==t.state.hiddenColumns.length>0){var l=Array.from({length:a-1}).map((function(e,o){var a=t.getColumnID(n,o+1);return t.state.hiddenColumns.includes(a)?"#CCCCCC":r&&r.colors?r.colors[o]:E[o]}));o.setOptions(Object(i.a)(Object(i.a)({},r),{},{colors:l})),o.draw()}}},t.onResize=function(){t.props.googleChartWrapper.draw()},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}},{key:"componentWillUnmount",value:function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()}},{key:"componentDidUpdate",value:function(){this.draw(this.props)}},{key:"render",value:function(){return null}}]),r}(f.Component),A=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var t=this.props,e=t.google,r=t.googleChartWrapper,o=t.googleChartDashboard;return f.createElement(x,{render:function(t){return f.createElement(z,Object.assign({},t,{google:e,googleChartWrapper:r,googleChartDashboard:o}))}})}}]),r}(f.Component),I=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(t){var o;return Object(l.a)(this,r),(o=e.call(this,t)).propsFromContext=null,o}return Object(c.a)(r,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"listenToEvents",value:function(t){var e=this,r=t.chartEvents,o=t.google,a=t.googleChartWrapper;if(r){o.visualization.events.removeAllListeners(a);var i,l=Object(n.a)(r);try{var c,s=function(){var t=i.value;c=e;var r=t.eventName,n=t.callback;o.visualization.events.addListener(a,r,(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n({chartWrapper:a,props:c.props,google:o,eventArgs:e})}))};for(l.s();!(i=l.n()).done;)s()}catch(u){l.e(u)}finally{l.f()}}}},{key:"componentDidMount",value:function(){var t,e=this.props,r=e.google,o=e.googleChartWrapper;this.listenToEvents({chartEvents:(null===(t=this.propsFromContext)||void 0===t?void 0:t.chartEvents)||null,google:r,googleChartWrapper:o})}},{key:"render",value:function(){var t=this;return this.props,f.createElement(x,{render:function(e){return t.propsFromContext=e,null}})}}]),r}(f.Component),S=0,W=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){for(var t,a,c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return Object(l.a)(this,r),t=e.call.apply(e,[this].concat(s)),a=Object(o.a)(t),t.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},t.graphID=null,t.dashboard_ref=f.createRef(),t.toolbar_ref=f.createRef(),t.getGraphID=function(){var e,r=t.props,o=r.graphID,n=r.graph_id;return e=o||n?o&&!n?o:n&&!o?n:o:t.graphID?t.graphID:O(),t.graphID=e,t.graphID},t.getControlID=function(t,e){return S+=1,"undefined"===typeof t?"googlechart-control-".concat(e,"-").concat(S):t},t.addControls=function(e,r){var a=t.props,l=a.google,c=a.controls,s=c?c.map((function(e,r){var o=e.controlID,n=e.controlType,a=e.options,c=e.controlWrapperParams,s=t.getControlID(o,r);return{controlProp:e,control:new l.visualization.ControlWrapper(Object(i.a)({containerId:s,controlType:n,options:a},c))}})):null;if(!s)return null;r.bind(s.map((function(t){return t.control})),e);var u,h=Object(n.a)(s);try{var p,d=function(){var r,a=u.value,i=a.control,c=a.controlProp.controlEvents,s=void 0===c?[]:c,h=Object(n.a)(s);try{var d=function(){var n=r.value;p=Object(o.a)(t);var a=n.callback,c=n.eventName;l.visualization.events.removeListener(i,c,a),l.visualization.events.addListener(i,c,(function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];a({chartWrapper:e,controlWrapper:i,props:p.props,google:l,eventArgs:r})}))};for(h.s();!(r=h.n()).done;)d()}catch(f){h.e(f)}finally{h.f()}};for(h.s();!(u=h.n()).done;)d()}catch(f){h.e(f)}finally{h.f()}return s},t.renderChart=function(){var e=t.props,r=e.width,o=e.height,n=e.options,a=e.style,l=e.className,c=e.rootProps,s=e.google,u=Object(i.a)({height:o||n&&n.height,width:r||n&&n.width},a);return f.createElement("div",Object.assign({id:t.getGraphID(),style:u,className:l},c),t.state.isReady&&null!==t.state.googleChartWrapper?f.createElement(f.Fragment,null,f.createElement(A,{googleChartWrapper:t.state.googleChartWrapper,google:s,googleChartDashboard:t.state.googleChartDashboard}),f.createElement(I,{googleChartWrapper:t.state.googleChartWrapper,google:s})):null)},t.renderControl=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return!0};return a.state.isReady&&null!==a.state.googleChartControls?f.createElement(f.Fragment,null,a.state.googleChartControls.filter((function(e){var r=e.controlProp,o=e.control;return t({control:o,controlProp:r})})).map((function(t){var e=t.control;t.controlProp;return f.createElement("div",{key:e.getContainerId(),id:e.getContainerId()})}))):null},t.renderToolBar=function(){return t.props.toolbarItems?f.createElement("div",{ref:t.toolbar_ref}):null},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.options,r=t.google,o=t.chartType,n=t.chartWrapperParams,a=t.toolbarItems,l=t.getChartEditor,c=t.getChartWrapper,s=Object(i.a)({chartType:o,options:e,containerId:this.getGraphID()},n),u=new r.visualization.ChartWrapper(s);u.setOptions(e||{}),c&&c(u,r);var h=new r.visualization.Dashboard(this.dashboard_ref),p=this.addControls(u,h);a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var d=null;l&&l({chartEditor:d=new r.visualization.ChartEditor,chartWrapper:u,google:r}),this.setState({googleChartEditor:d,googleChartControls:p,googleChartDashboard:h,googleChartWrapper:u,isReady:!0})}},{key:"componentDidUpdate",value:function(){if(this.state.googleChartWrapper&&this.state.googleChartDashboard&&this.state.googleChartControls){var t=this.props.controls;if(t)for(var e=0;e<t.length;e+=1){var r=t[e],o=r.controlType,n=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(n),this.state.googleChartControls[e].control.setControlType(o)}}}},{key:"shouldComponentUpdate",value:function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls}},{key:"render",value:function(){var t=this.props,e=t.width,r=t.height,o=t.options,n=t.style,a=Object(i.a)({height:r||o&&o.height,width:e||o&&o.width},n);return this.props.render?f.createElement("div",{ref:this.dashboard_ref,style:a},f.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):f.createElement("div",{ref:this.dashboard_ref,style:a},this.renderControl((function(t){return"bottom"!==t.controlProp.controlPosition})),this.renderChart(),this.renderControl((function(t){return"bottom"===t.controlProp.controlPosition})),this.renderToolBar())}}]),r}(f.Component),_=function(t){Object(s.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(l.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n)))._isMounted=!1,t.state={loadingStatus:"loading",google:null},t.onLoad=function(e){if(t.props.onLoad&&t.props.onLoad(e),t.isFullyLoaded(e))t.onSuccess(e);else var r=setInterval((function(){var e=window.google;t._isMounted?e&&t.isFullyLoaded(e)&&(clearInterval(r),t.onSuccess(e)):clearInterval(r)}),1e3)},t.onSuccess=function(e){t.setState({loadingStatus:"ready",google:e})},t.onError=function(){t.setState({loadingStatus:"errored"})},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this.props,e=t.chartLanguage,r=t.chartPackages,o=t.chartVersion,n=t.mapsApiKey,a=t.loader,i=t.errorElement;return f.createElement(D,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?f.createElement(W,Object.assign({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&i?i:a,f.createElement(y,{chartLanguage:e,chartPackages:r,chartVersion:o,mapsApiKey:n,onLoad:this.onLoad,onError:this.onError}))}},{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"isFullyLoaded",value:function(t){var e=this.props,r=e.controls,o=e.toolbarItems,n=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!r||t.visualization.ChartWrapper)&&(!n||t.visualization.ChartEditor)&&(!o||t.visualization.drawToolbar)}}]),r}(f.Component);_.defaultProps=C,function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"}(b||(b={}))},935:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var o=r(253);var n=r(347);function a(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);