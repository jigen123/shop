webpackJsonp([71],{"67mG":function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"set"}},[e("x-header",{attrs:{"left-options":{backText:""}}},[t._v("活动中心")]),t._v(" "),e("div",{staticClass:"mui-content content fixed-content"},[e("ul",{staticClass:"mui-table-view"},t._l(t.content,function(i){return e("li",{key:i.id,staticClass:"s"},[e("div",{staticClass:"time"},[t._v(t._s(t.moment.unix(i.create_time).format("YYYY-MM-DD")))]),t._v(" "),e("div",{staticClass:"content-wrap clearfix"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.imgUrl+i.photo,alt:""}})]),t._v(" "),e("div",{staticClass:"detail"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"checkdetail mui-pull-right"},[e("router-link",{attrs:{to:{path:"/index/article-list/article-details",query:{id:i.id}}}},[t._v("\n                        查看详情"),e("i",{staticClass:"iconfont icon-youjiantou"})])],1)])])}))])],1)},staticRenderFns:[]}},HWIl:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("mvHQ"),n=e.n(a),s=e("ABCa"),c=e.n(s);i.default={name:"set",components:{XHeader:c.a},data:function(){return{show:!0,title:"活动中心",content:[]}},created:function(){var t=this;this.$axios.post("/api/Article/get_article","data="+n()({article_type:"ACTIVITY_CENTER"})).then(function(i){200==i.code&&(t.content=i.data.list)}).catch(function(t){})},mounted:function(){mui.init({swipeBack:!0})}}},Yjqo:function(t,i){},"arj/":function(t,i,e){var a=e("VU/8")(e("HWIl"),e("67mG"),function(t){e("Yjqo")},"data-v-6ebf237d",null);t.exports=a.exports}});
//# sourceMappingURL=71.941fa7edc85ec680a0bc.js.map