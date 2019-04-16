/*!
 * @project        Retour
 * @name           dashboard.js
 * @author         Andrew Welch
 * @build          Tue, Apr 16, 2019 9:36 PM ET
 * @release        1728cd8ed15eb4a008ada310a34b5dc1180cc042 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],i[r]&&f.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);f.length;)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={1:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([150,0]),a()}({150:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),s=a(25),r=a.n(s),o=function(){var t=this.$createElement;return(this._self._c||t)("main")};o._withStripped=!0;var l=a(70),c=a.n(l);i.a.use(c.a);var u={mounted:function(){var t=this;this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout(function(){t.$confetti.stop()},5e3)},methods:{}},d=a(0),f=Object(d.a)(u,o,[],!1,null,null,null);f.options.__file="src/assetbundles/retour/src/vue/Confetti.vue";var p=f.exports,h=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:this.chartOptions,series:this.series}})};h._withStripped=!0;a(41),a(90),a(56),a(9);var g=a(26),v=a.n(g),b=a(27);function m(t,e,a,n,i,s,r){try{var o=t[s](r),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,i)}var P=function(t,e,a){t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},_={components:{apexcharts:a.n(b).a},props:{title:String,subTitle:String,range:String,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.a.create({baseURL:"/retour/charts/dashboard/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.range,0!==this.siteId&&(a+="/"+this.siteId),t.next=5,P(e,a,function(t){var e,a=Object.assign({},n.chartOptions);void 0!==t[0]&&(a.yaxis.max=Math.round((e=[t[0].data],e.map(function(t){return Math.max.apply(null,t)}))[0]+1.5),a.labels=t[0].labels,n.chartOptions=a,n.series=t)});case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,i){var s=t.apply(e,a);function r(t){m(s,n,i,r,o,"next",t)}function o(t){m(s,n,i,r,o,"throw",t)}r(void 0)})});return function(){return e.apply(this,arguments)}}()},created:function(){this.getSeriesData()},mounted:function(){},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{crosshairs:{width:1}},labels:[],yaxis:{min:0,max:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}}},x=Object(d.a)(_,h,[],!1,null,null,null);x.options.__file="src/assetbundles/retour/src/vue/DashboardChart.vue";var C=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/retour/tables/dashboard","per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};w._withStripped=!0;var y=[{name:"__component:file-not-found-url",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"remoteIp",sortField:"remoteIp",title:"Remote IP",titleClass:"center",dataClass:"center",callback:"ipFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"handledByRetour",title:"Handled",titleClass:"text-center",dataClass:"text-center",callback:"boolFormatter"},{name:"addLink",sortField:"addLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"addUrlFormatter"}],S=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"go",attrs:{href:this.rowData.redirectSrcUrl,title:this.linkTitle}},[this._v(this._s(this.rowData.redirectSrcUrl))])])};S._withStripped=!0;var F={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkTitle:function(){var t="";return t+="User Agent: "+this.rowData.userAgent+"\n\n",t+="Message: "+this.rowData.exceptionMessage+"\n\n",t+="File Path: "+this.rowData.exceptionFilePath+"\n\n",t+="Line No.: "+this.rowData.exceptionFileLine}}},O=Object(d.a)(F,S,[],!1,null,null,null);O.options.__file="src/assetbundles/retour/src/vue/FileNotFoundUrl.vue";var k=O.exports,T=a(28),D=a(17),$=a(18),I=a(19);i.a.component("file-not-found-url",k);var j={components:{vuetable:T.a,"vuetable-pagination":D.a,"vuetable-pagination-info":$.a,"vuetable-filter-bar":I.a},props:{siteId:{type:Number,default:0}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth retour-dashboard",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:y}},mounted:function(){var t=this;this.$events.$on("filter-set",function(e){return t.onFilterSet(e)}),this.$events.$on("filter-reset",function(e){return t.onFilterReset()})},methods:{onFilterSet:function(t){this.moreParams={siteId:this.siteId,filter:t},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},urlFormatter:function(t){return""===t?"":'\n            <a class="go" href="'.concat(t,'" title="').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},ipFormatter:function(t){return""===t?"":'\n            <a class="go" href="https://www.ipaddressguide.com/ip-geolocation?ip='.concat(t,'" title="Lookup ').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},boolFormatter:function(t){return 1==t?'\n            <span style="color: green;">&#x2714;</span>\n            ':'\n            <span style="color: red;">&#x2716;</span>\n            '},addUrlFormatter:function(t){return""===t?"":'\n            <a class="add icon" href="'.concat(t,'" title="Add"></a>\n            ')}}},L=Object(d.a)(j,w,[],!1,null,null,null);L.options.__file="src/assetbundles/retour/src/vue/DashboardTable.vue";var E=L.exports;i.a.use(r.a);new i.a({el:"#cp-nav-content",components:{confetti:p,"dashboard-chart":C,"dashboard-table":E},data:{},methods:{onTableRefresh:function(t){console.log("onTableRefresh"),i.a.nextTick(function(){return t.refresh()})}},mounted:function(){var t=this;this.$events.$on("refresh-table",function(e){return t.onTableRefresh(e)})}})},17:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){t.loadPage(e)}}})]})]:[t._l(t.windowSize,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){t.loadPage(t.windowStart+e-1)}}})]})],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};n._withStripped=!0;a(9);var i={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},s=a(0),r=Object(s.a)(i,void 0,void 0,!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue";var o={mixins:[r.exports]},l=Object(s.a)(o,n,[],!1,null,null,null);l.options.__file="src/assetbundles/retour/src/vue/VuetablePagination.vue";e.a=l.exports},18:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;a(68);var i={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-grey-dark"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},s=a(0),r=Object(s.a)(i,void 0,void 0,!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue";var o={mixins:[r.exports]},l=Object(s.a)(o,n,[],!1,null,null,null);l.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue";e.a=l.exports},19:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-grey-dark"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};n._withStripped=!0;var i={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},s=a(0),r=Object(s.a)(i,n,[],!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetableFilterBar.vue";e.a=r.exports}});
//# sourceMappingURL=dashboard.js.map