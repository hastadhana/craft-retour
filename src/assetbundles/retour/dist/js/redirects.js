/*!
 * @project        Retour
 * @name           redirects.js
 * @author         Andrew Welch
 * @build          Sun, Dec 16, 2018 6:32 PM ET
 * @release        65f6789c0d4aba0965e3fc49c5eb8ffc0e75dd1b [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */!function(t){function e(e){for(var n,r,l=e[0],o=e[1],c=e[2],f=0,d=[];f<l.length;f++)r=l[f],i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);for(u&&u(e);d.length;)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={3:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([150,0]),a()}({150:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),s=a(25),r=a.n(s),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/retour/tables/redirects","per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter border-solid"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};l._withStripped=!0;a(9);var o=[{name:"__component:legacy-url",sortField:"redirectSrcUrl",title:"Legacy URL Pattern",titleClass:"center",dataClass:"center"},{name:"redirectDestUrl",sortField:"redirectDestUrl",title:"Redirect To",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"redirectMatchType",sortField:"redirectMatchType",title:"Match Type",titleClass:"text-left",dataClass:"text-left",callback:"matchFormatter"},{name:"redirectHttpCode",sortField:"redirectHttpCode",title:"Status",titleClass:"text-left",dataClass:"text-left"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteRedirectFormatter"}],c=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"go",attrs:{href:this.rowData.editLink,title:this.linkTitle}},[e("span",{staticStyle:{"white-space":"nowrap"}},[e("span",{staticClass:"status",class:this.redirectEnabled}),e("span",{staticStyle:{"white-space":"normal"}},[this._v(this._s(this.rowData.redirectSrcUrl))])])])])};c._withStripped=!0;var u={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkTitle:function(){var t="";return t+=this.rowData.redirectSrcUrl},redirectEnabled:function(){return this.rowData.enabled?"live":""}}},f=a(0),d=Object(f.a)(u,c,[],!1,null,null,null);d.options.__file="src/assetbundles/retour/src/vue/LegacyUrl.vue";var p=d.exports,g=a(28),h=a(17),v=a(18),b=a(19);i.a.component("legacy-url",p);var m={components:{vuetable:g.a,"vuetable-pagination":h.a,"vuetable-pagination-info":v.a,"vuetable-filter-bar":b.a},props:{siteId:{type:Number,default:0}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth retour-redirects",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:o}},mounted:function(){var t=this;this.$events.$on("filter-set",function(e){return t.onFilterSet(e)}),this.$events.$on("filter-reset",function(e){return t.onFilterReset()})},methods:{onFilterSet:function(t){this.moreParams={filter:t,siteId:this.siteId},console.log("onFilterSet"),this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},matchFormatter:function(t){var e="Pluing Match";switch(t){case"exactmatch":e="Exact Match";break;case"regexmatch":e="RegEx Match"}return e},urlFormatter:function(t){return""===t?"":'\n            <a class="go" href="'.concat(t,'" title="').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},deleteRedirectFormatter:function(t){return""===t?"":'\n            <a class="delete icon" href="'.concat(t,'" title="Delete"></a>\n            ')}}},P=Object(f.a)(m,l,[],!1,null,null,null);P.options.__file="src/assetbundles/retour/src/vue/RedirectsTable.vue";var _=P.exports;i.a.use(r.a);new i.a({el:"#cp-nav-content",components:{"redirects-table":_},data:{},methods:{onTableRefresh:function(t){console.log("onTableRefresh"),i.a.nextTick(function(){return t.refresh()})}},mounted:function(){var t=this;this.$events.$on("refresh-table",function(e){return t.onTableRefresh(e)})}})},17:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){t.loadPage(e)}}})]})]:[t._l(t.windowSize,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){t.loadPage(t.windowStart+e-1)}}})]})],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};n._withStripped=!0;a(9);var i={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},s=a(0),r=Object(s.a)(i,void 0,void 0,!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue";var l={mixins:[r.exports]},o=Object(s.a)(l,n,[],!1,null,null,null);o.options.__file="src/assetbundles/retour/src/vue/VuetablePagination.vue";e.a=o.exports},18:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;a(68);var i={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-grey-dark"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},s=a(0),r=Object(s.a)(i,void 0,void 0,!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue";var l={mixins:[r.exports]},o=Object(s.a)(l,n,[],!1,null,null,null);o.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue";e.a=o.exports},19:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-grey-dark"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};n._withStripped=!0;var i={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},s=a(0),r=Object(s.a)(i,n,[],!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetableFilterBar.vue";e.a=r.exports}});
//# sourceMappingURL=redirects.js.map