(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SearchResult"],{"55a8":function(t,e,a){},"56bb":function(t,e,a){"use strict";a("68f7")},"68f7":function(t,e,a){},ae62:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search-result-container"},[a("van-nav-bar",{attrs:{title:"搜索结果","left-arrow":"",color:"white",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}})],1),a("div",[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1,offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleList,(function(e){return a("ArticleItem",{key:e.art_id,attrs:{artObj:e,isShow:!1},nativeOn:{click:function(a){return t.itemClickFn(e.art_id)}}})})),1)],1)])},i=[],s=a("2909"),r=a("1da1"),o=(a("99af"),a("96cf"),a("365c")),c=a("d10e"),l={name:"SearchResult",data:function(){return{page:1,articleList:[],loading:!1,finished:!1}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["o"])({page:t.page,q:t.$route.params.kw});case 2:a=e.sent,console.log(a),t.articleList=a.data.data.results;case 5:case"end":return e.stop()}}),e)})))()},methods:{onLoad:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.articleList.length>0)){e.next=11;break}return t.page++,e.next=4,Object(o["o"])({page:t.page,q:t.$route.params.kw});case 4:if(a=e.sent,0!==a.data.data.results.length){e.next=8;break}return t.finished=!0,e.abrupt("return");case 8:console.log(a),t.articleList=[].concat(Object(s["a"])(t.articleList),Object(s["a"])(a.data.data.results)),t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},itemClickFn:function(t){this.$router.push({path:"/detail?art_id=".concat(t)})}},components:{ArticleItem:c["a"]}},u=l,m=(a("56bb"),a("2877")),d=Object(m["a"])(u,n,i,!1,null,"bbaae116",null);e["default"]=d.exports},d10e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"title-box"},[a("span",[t._v(t._s(t.artObj.title))]),1===t.artObj.cover.type?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.artObj.cover.images[0],expression:"artObj.cover.images[0]"}],staticClass:"thumb",attrs:{alt:""}}):t._e()]),t.artObj.cover.type>1?a("div",{staticClass:"thumb-box"},t._l(t.artObj.cover.images,(function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgUrl"}],key:e,staticClass:"thumb",attrs:{alt:""}})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[a("div",{staticClass:"label-box"},[a("div",[a("span",[t._v(t._s(t.artObj.aut_name))]),a("span",[t._v(t._s(t.artObj.comm_count)+"评论")]),a("span",[t._v(t._s(t.artObj.pubdate))])]),t.isShow?a("van-icon",{attrs:{name:"cross"},on:{click:function(e){e.stopPropagation(),t.show=!0}}}):t._e()],1)]},proxy:!0}])}),a("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":t.bottomText,"get-container":"body"},on:{select:t.onSelect,cancel:t.cancelFn,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[],s=(a("b0c0"),[{name:"不感兴趣"},{name:"反馈垃圾内容"}]),r=[{value:0,name:"其它问题"},{value:1,name:"标题夸张"},{value:2,name:"低俗色情"},{value:3,name:"错别字多"},{value:4,name:"旧闻重复"},{value:6,name:"内容不实"},{value:8,name:"侵权"},{value:5,name:"广告软文"},{value:7,name:"涉嫌违法犯罪"}],o={props:{artObj:Object,isShow:{type:Boolean,default:!0}},data:function(){return{show:!1,actions:s,bottomText:"取消哦"}},methods:{onSelect:function(t,e){"反馈垃圾内容"===t.name?(this.actions=r,this.bottomText="返回哈"):"不感兴趣"===t.name?(this.$emit("dislikeEV",this.artObj.art_id),this.show=!1):(this.$emit("reportEV",this.artObj.art_id,t.value),this.show=!1)},cancelFn:function(){"返回哈"===this.bottomText&&(this.show=!0,this.actions=s,this.bottomText="取消哦")},closeFn:function(){this.actions=s,this.bottomText="取消哦"}}},c=o,l=(a("f4c6"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"66105e0e",null);e["a"]=u.exports},f4c6:function(t,e,a){"use strict";a("55a8")}}]);
//# sourceMappingURL=SearchResult.04b05bc6.js.map