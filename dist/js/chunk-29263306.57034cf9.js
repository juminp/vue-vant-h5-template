(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29263306"],{"277d":function(t,e,i){var n=i("23e7"),a=i("e8b5");n({target:"Array",stat:!0},{isArray:a})},"30bc":function(t,e,i){},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,a=i("69f3"),r=i("7dd0"),o="String Iterator",c=a.set,s=a.getterFor(o);r(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),i=e.string,a=e.index;return a>=i.length?{value:void 0,done:!0}:(t=n(i,a),e.index+=t.length,{value:t,done:!1})}))},"50f9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("keep-alive",[t.$route.meta&&t.$route.meta.keepAlive?i("router-view"):t._e()],1),t.$route.meta&&t.$route.meta.keepAlive?t._e():i("router-view"),i("div",{staticClass:"tabbar-placeholder"}),i("van-tabbar",{attrs:{"active-color":"#ff4e22","inactive-color":"#999999"},on:{change:t.changeTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(e,n){return i("van-tabbar-item",{key:n,attrs:{icon:e.icon}},[t._v(t._s(e.txt))])})),1)],1)},a=[],r=(i("4160"),i("159b"),i("68ef"),i("9d70"),i("3743"),i("ae73"),i("c31d")),o=i("d282"),c=i("a142"),s=i("48f4"),h=i("9884"),u=i("ad06"),l=i("6f2f"),d=Object(o["a"])("tabbar-item"),f=d[0],b=d[1],v=f({mixins:[Object(h["a"])("vanTabbar")],props:Object(r["a"])({},s["c"],{dot:Boolean,icon:String,name:[Number,String],info:[Number,String],badge:[Number,String],iconPrefix:String}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,e=this.$route;if(t&&e){var i=Object(c["e"])(t)?t:{path:t},n=i.path===e.path,a=Object(c["c"])(i.name)&&i.name===e.name;return n||a}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(s["b"])(this.$router,this)},genIcon:function(t){var e=this.$createElement,i=this.slots("icon",{active:t});return i||(this.icon?e(u["a"],{attrs:{name:this.icon,classPrefix:this.iconPrefix}}):void 0)}},render:function(){var t=arguments[0],e=this.parent.route?this.routeActive:this.active,i=this.parent[e?"activeColor":"inactiveColor"];return t("div",{class:b({active:e}),style:{color:i},on:{click:this.onClick}},[t("div",{class:b("icon")},[this.genIcon(e),t(l["a"],{attrs:{dot:this.dot,info:Object(c["c"])(this.badge)?this.badge:this.info}})]),t("div",{class:b("text")},[this.slots("default",{active:e})])])}}),p=(i("9312"),i("b1d2")),m=Object(o["a"])("tabbar"),g=m[0],x=m[1],A=g({mixins:[Object(h["b"])("vanTabbar")],props:{route:Boolean,zIndex:[Number,String],placeholder:Boolean,activeColor:String,inactiveColor:String,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:null}},data:function(){return{height:null}},computed:{fit:function(){return null!==this.safeAreaInsetBottom?this.safeAreaInsetBottom:this.fixed}},watch:{value:"setActiveItem",children:"setActiveItem"},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.tabbar.getBoundingClientRect().height)},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(e,i){e.active=(e.name||i)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))},genTabbar:function(){var t,e=this.$createElement;return e("div",{ref:"tabbar",style:{zIndex:this.zIndex},class:[(t={},t[p["e"]]=this.border,t),x({unfit:!this.fit,fixed:this.fixed})]},[this.slots()])}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:x("placeholder"),style:{height:this.height+"px"}},[this.genTabbar()]):this.genTabbar()}}),$=(i("84bb"),{name:"Main",components:{VanTabbar:A,VanTabbarItem:v},data:function(){return{active:0,tabs:[{icon:"home-o",txt:"首页",path:"/home"},{icon:"apps-o",txt:"分类",path:"/classify"},{icon:"cart-o",txt:"购物车",path:"/cart"},{icon:"orders-o",txt:"订单",path:"/orders"},{icon:"user-o",txt:"我的",path:"/user"}]}},watch:{$route:function(t,e){this.initActive()}},created:function(){this.initActive()},methods:{initActive:function(){var t=this;this.tabs.forEach((function(e,i){e.path===t.$route.path&&(t.active=i)}))},changeTab:function(t){this.$router.push({path:this.tabs[t].path})}}}),y=$,S=(i("9cc6"),i("2877")),I=Object(S["a"])(y,n,a,!1,null,null,null);e["default"]=I.exports},"84bb":function(t,e,i){"use strict";i("277d"),i("d81d"),i("d3b7"),i("3ca3"),i("ddb0"),i("2ef0")},9312:function(t,e,i){},"9cc6":function(t,e,i){"use strict";var n=i("30bc"),a=i.n(n);a.a},ae73:function(t,e,i){},ddb0:function(t,e,i){var n=i("da84"),a=i("fdbc"),r=i("e260"),o=i("9112"),c=i("b622"),s=c("iterator"),h=c("toStringTag"),u=r.values;for(var l in a){var d=n[l],f=d&&d.prototype;if(f){if(f[s]!==u)try{o(f,s,u)}catch(v){f[s]=u}if(f[h]||o(f,h,l),a[l])for(var b in r)if(f[b]!==r[b])try{o(f,b,r[b])}catch(v){f[b]=r[b]}}}}}]);