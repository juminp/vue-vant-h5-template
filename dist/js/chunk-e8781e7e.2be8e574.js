(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8781e7e"],{"277d":function(t,e,i){var n=i("23e7"),s=i("e8b5");n({target:"Array",stat:!0},{isArray:s})},2994:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("c0c2")},"29ca":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"classify"},[i("NavBar",{attrs:{title:"分类","left-text":"","left-arrow":!1,"default-left":!1,"right-text":""}}),i("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1)],1)},s=[],r=(i("4795"),i("2994"),i("2bdd")),a=(i("ab71"),i("58e6")),o=(i("84bb"),i("d000")),c={name:"Classify",components:{VanPullRefresh:a["a"],VanList:r["a"],NavBar:o["a"]},data:function(){return{loading:!1,finished:!1,refreshing:!1}},computed:{},created:function(){console.log("created")},watch:{},methods:{onRefresh:function(){this.finished=!1,this.initData()},onLoad:function(){this.initData()},initData:function(){var t=this;this.finished||setTimeout((function(){t.refreshing=!1,t.finished=!0,t.loading=!1}),500)}}},l=c,h=i("2877"),u=Object(h["a"])(l,n,s,!1,null,"fcc0ac76",null);e["default"]=u.exports},"2bdd":function(t,e,i){"use strict";var n=i("d282"),s=i("02de"),r=i("a8c1"),a=i("5fbe"),o=i("543e"),c=Object(n["a"])("list"),l=c[0],h=c[1],u=c[2];e["a"]=l({mixins:[Object(a["a"])((function(t){this.scroller||(this.scroller=Object(r["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,r=t.offset,a=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var o=e.bottom-e.top;if(!o||Object(s["a"])(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===a?e.top-l.top<=r:l.bottom-e.bottom<=r,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{class:h("loading"),key:"loading"},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:h("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:h("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",class:h("placeholder")});return t("div",{class:h(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,s=i("69f3"),r=i("7dd0"),a="String Iterator",o=s.set,c=s.getterFor(a);r(String,"String",(function(t){o(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,s=e.index;return s>=i.length?{value:void 0,done:!0}:(t=n(i,s),e.index+=t.length,{value:t,done:!1})}))},4090:function(t,e,i){},4795:function(t,e,i){var n=i("23e7"),s=i("da84"),r=i("342f"),a=[].slice,o=/MSIE .\./.test(r),c=function(t){return function(e,i){var n=arguments.length>2,s=n?a.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,s)}:e,i)}};n({global:!0,bind:!0,forced:o},{setTimeout:c(s.setTimeout),setInterval:c(s.setInterval)})},"58e6":function(t,e,i){"use strict";var n=i("d282"),s=i("1325"),r=i("a8c1"),a=i("3875"),o=i("543e"),c=Object(n["a"])("pull-refresh"),l=c[0],h=c[1],u=c[2],d=50,f=["pulling","loosing","success"];e["a"]=l({mixins:[a["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:d}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==d)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(r["d"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(r["c"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(s["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+this.headHeight;return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var i;i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},genStatus:function(){var t=this.$createElement,e=this.status,i=this.distance,n=this.slots(e,{distance:i});if(n)return n;var s=[],r=this[e+"Text"]||u(e);return-1!==f.indexOf(e)&&s.push(t("div",{class:h("text")},[r])),"loading"===e&&s.push(t(o["a"],{attrs:{size:"16"}},[r])),s},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:h()},[t("div",{ref:"track",class:h("track"),style:e},[t("div",{class:h("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},"6ab3":function(t,e,i){},"84bb":function(t,e,i){"use strict";i("277d"),i("d81d"),i("d3b7"),i("3ca3"),i("ddb0"),i("2ef0")},"8a0b":function(t,e,i){},ab71:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("6ab3")},c0c2:function(t,e,i){},d000:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"my-nav-bar"},[i("van-nav-bar",{attrs:{placeholder:"",fixed:t.fixed,title:t.title,"left-arrow":t.leftArrow,"left-text":t.leftText},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([t.rightText?{key:"right",fn:function(){return[i("span",[t._v(t._s(t.rightText))])]},proxy:!0}:null],null,!0)})],1)},s=[],r=(i("68ef"),i("9d70"),i("3743"),i("8a0b"),i("d282")),a=i("b1d2"),o=i("ad06"),c=Object(r["a"])("nav-bar"),l=c[0],h=c[1],u=l({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(o["a"],{class:h("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:h("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:h("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[h({fixed:this.fixed}),(t={},t[a["a"]]=this.border,t)]},[e("div",{class:h("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[h("title"),"van-ellipsis"]},[this.slots("title")||this.title]),e("div",{class:h("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:h("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}}),d={name:"NavBar",components:{VanNavBar:u},props:{title:{type:String,default:"vant"},leftArrow:{type:Boolean,default:!0},leftText:{type:String,default:"返回"},defaultLeft:{type:Boolean,default:!0},rightText:{type:String,default:""},fixed:{type:Boolean,default:!0}},data:function(){return{}},methods:{onClickLeft:function(){console.log("返回"),this.defaultLeft?(console.log("defaultLeft"),this.routerBack()):this.leftText&&this.$emit("click-left-btn")},onClickRight:function(){this.rightText&&this.$emit("click-right-btn")}}},f=d,g=(i("ed6b"),i("2877")),v=Object(g["a"])(f,n,s,!1,null,null,null);e["a"]=v.exports},ddb0:function(t,e,i){var n=i("da84"),s=i("fdbc"),r=i("e260"),a=i("9112"),o=i("b622"),c=o("iterator"),l=o("toStringTag"),h=r.values;for(var u in s){var d=n[u],f=d&&d.prototype;if(f){if(f[c]!==h)try{a(f,c,h)}catch(v){f[c]=h}if(f[l]||a(f,l,u),s[u])for(var g in r)if(f[g]!==r[g])try{a(f,g,r[g])}catch(v){f[g]=r[g]}}}},ed6b:function(t,e,i){"use strict";var n=i("4090"),s=i.n(n);s.a}}]);