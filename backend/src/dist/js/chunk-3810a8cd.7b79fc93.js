(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3810a8cd"],{"4ca6":function(t,e,i){"use strict";i("a9e3");var s=i("15fd"),n=i("5530"),o=(i("ff44"),i("132d")),r=i("a9ad"),a=i("7560"),c=i("f2e7"),l=i("2b0e"),h=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=i("fe6c"),f=i("58df"),d=i("80d2");e["a"]=Object(f["a"])(r["a"],Object(u["b"])(["left","bottom"]),a["a"],c["a"],h).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(n["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(d["f"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),s=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s},genBadgeContent:function(){if(!this.dot){var t=Object(d["m"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(o["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object(d["m"])(this)],n=this.$attrs,o=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(s["a"])(n,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},i)}})},"608c":function(t,e,i){},"8f5a":function(t,e,i){},b04f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"primary"},[s("v-container",{staticClass:"container--customized"},[s("v-row",{staticStyle:{margin:"0"}},[s("v-col",{attrs:{cols:"3"}},[s("v-img",{staticClass:"app-bar--logo",attrs:{src:i("d0dd"),"max-width":"100"}})],1),s("v-col",{staticClass:"d-flex justify-end",staticStyle:{"padding-right":"12px"},attrs:{cols:"9"}},[s("v-btn",{staticClass:"button-customized--top",attrs:{text:""}},[s("v-badge",{attrs:{dot:"",color:"secondary"}},[s("v-icon",{staticClass:"app-bar--icon"},[t._v("mdi-account-arrow-right-outline")]),t._v("Beatriz del Carmen ")],1)],1),s("v-btn",{staticClass:"button-customized--top",attrs:{text:""}},[s("v-icon",{staticClass:"app-bar--icon"},[t._v("mdi-map-marker-outline")]),t._v(t._s(t.city)+" ")],1),s("v-btn",{staticClass:"button-customized--top",attrs:{text:""}},[s("v-badge",{attrs:{color:"secondary",content:"10"}},[s("v-icon",{staticClass:"app-bar--icon"},[t._v("mdi-cart-outline")]),t._v("$10,523.35 ")],1)],1)],1)],1),s("v-row",{staticStyle:{margin:"0"}},[s("v-col",{},[s("v-chip-group",t._l(t.menu,(function(e,i){return s("v-chip",{key:i,staticClass:"chip-customize"},[s("v-img",{staticClass:"chip-customize--img",attrs:{src:e.src}}),s("span",{staticClass:"chip-customize--text"},[t._v(t._s(e.etiqueta))])],1)})),1)],1)],1)],1)],1)},n=[],o=i("5530"),r=i("2f62"),a={props:{menu:{type:Array,required:!0}},computed:Object(o["a"])({},Object(r["c"])("app",["city"]))},c=a,l=i("2877"),h=i("6544"),u=i.n(h),f=i("4ca6"),d=i("8336"),p=i("cc20"),v=i("ef9a"),m=i("62ad"),g=i("a523"),b=i("132d"),w=i("adda"),O=i("0fd9"),x=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=x.exports;u()(x,{VBadge:f["a"],VBtn:d["a"],VChip:p["a"],VChipGroup:v["a"],VCol:m["a"],VContainer:g["a"],VIcon:b["a"],VImg:w["a"],VRow:O["a"]})},d0dd:function(t,e,i){t.exports=i.p+"img/frusion-logo.7cbc4601.svg"},ef9a:function(t,e,i){"use strict";var s=i("5530"),n=(i("8f5a"),i("99af"),i("fb6a"),i("a9e3"),i("608c"),i("9d26")),o=i("0789"),r=i("604c"),a=i("dc22"),c=(i("4160"),i("159b"),i("80d2")),l=function(t){var e=t.touchstartX,i=t.touchendX,s=t.touchstartY,n=t.touchendY,o=.5,r=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&n<s-r&&t.up(t),t.down&&n>s+r&&t.down(t))};function h(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function u(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),l(e)}function f(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function d(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return h(t,e)},touchend:function(t){return u(t,e)},touchmove:function(t){return f(t,e)}}}function p(t,e,i){var s=e.value,n=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(n){var r=d(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[i.context._uid]=r,Object(c["r"])(r).forEach((function(t){n.addEventListener(t,r[t],o)}))}}function v(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var n=s._touchHandlers[i.context._uid];Object(c["r"])(n).forEach((function(t){s.removeEventListener(t,n[t])})),delete s._touchHandlers[i.context._uid]}}var m={inserted:p,unbind:v},g=m,b=i("58df"),w=Object(b["a"])(r["a"]).extend({name:"base-slide-group",directives:{Resize:a["a"],Touch:g},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(s["a"])(Object(s["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(n["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(o["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,o=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,s){var n=t.clientWidth,o=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var r=e.wrapper+s,a=n+o,c=.4*n;return o<s?s=Math.max(o-c,0):r<a&&(s=Math.min(s-(r-a-c),e.content-e.wrapper)),i?-s:s},calculateCenteredOffset:function(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var o=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var r=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,r))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),O=(w.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),i("a9ad"));e["a"]=Object(b["a"])(w,O["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},w.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(s["a"])({},w.options.methods.genData.call(this)))}}})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3810a8cd.7b79fc93.js.map