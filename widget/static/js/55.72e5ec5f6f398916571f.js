webpackJsonp([55],{EwtM:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("mvHQ"),i=a.n(e),l=a("mtWM"),n=(a.n(l),a("rHil")),c=a.n(n),_=a("1DHf"),r=a.n(_),v=a("QTi7"),f=a.n(v),o=a("ABCa"),d=a.n(o);t.default={name:"billDetails",data:function(){return{getdetails:[],getMoneyLog:[]}},components:{Box:f.a,Group:c.a,Cell:r.a,XHeader:d.a},created:function(){},mounted:function(){var s=this;this.$axios.post("/api/Partner/getMoneyDetail","data="+i()({id:s.$route.query.id})).then(function(t){1==t.code?(s.getdetails=t.result,s.getMoneyLog=t.result.getMoneyLog):mui.toast(t.msg)})},methods:{}}},Wzwh:function(s,t){},bqnr:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{attrs:{id:"billDetails"}},[a("x-header",{attrs:{title:"交易详情","left-options":{backText:""}}}),s._v(" "),a("div",{staticClass:"fixed-con-lg"},[a("group",{attrs:{title:"交易详情"}},[a("cell",[a("div",{staticClass:"fix w100 lh50 bd-line mb10"},[a("span",{staticClass:"fl"},[s._v("交易金额："),a("b",{staticClass:"theme-c"},[s._v(s._s(s.getdetails.money))])]),s._v(" "),a("span",{staticClass:"fr"},[a("span",{staticClass:"success fl"}),s._v(" "+s._s(s.getdetails.tips))])]),s._v(" "),a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("交易单号")]),s._v(" "),a("span",{staticClass:"fr"},[s._v(s._s(s.getdetails.order_no))])]),s._v(" "),a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("交易方式")]),s._v(" "),a("span",{staticClass:"fr"},[s._v(s._s(s.getdetails.name))])]),s._v(" "),a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("手续费")]),s._v(" "),a("span",{staticClass:"fr theme-c"},[s._v("￥"+s._s(s.getdetails.fee)+"(含提现费"+s._s(s.getdetails.mercfee)+"元）")])]),s._v(" "),a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("交易时间")]),s._v(" "),a("span",{staticClass:"fr"},[s._v(s._s(s.getdetails.ctime))])])])],1),s._v(" "),a("group",{attrs:{title:"结算状态"}},[a("cell",[a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("计算金额")]),s._v(" "),a("span",{staticClass:"fr theme-c"},[s._v("￥"+s._s(s.getdetails.sjmoney))])]),s._v(" "),s._l(s.getMoneyLog,function(t,e){return a("div",{key:e,staticClass:"fix lh50 trad_status"},[a("span",{staticClass:"fl theme-c status_word"},[a("span",{class:1==t.status?"success-circle fl":"cancel fl"}),s._v(" "+s._s(t.msg))]),s._v(" "),a("span",{staticClass:"fr "},[s._v(s._s(s.$moment.unix(t.ctime).format("YYYY-MM-DD HH:mm:ss")))])])}),s._v(" "),a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("结算到")]),s._v(" "),a("span",{staticClass:"fr"},[s._v(s._s(s.getdetails.bank_card))])]),s._v(" "),a("div",{staticClass:"fix lh30"},[a("span",{staticClass:"fl"},[s._v("创建时间")]),s._v(" "),a("span",{staticClass:"fr"},[s._v(s._s(s.getdetails.ctime))])])],2)],1)],1)],1)},staticRenderFns:[]}},d5VV:function(s,t){},npSt:function(s,t,a){var e=a("VU/8")(a("EwtM"),a("bqnr"),function(s){a("Wzwh"),a("d5VV")},"data-v-27186670",null);s.exports=e.exports}});
//# sourceMappingURL=55.72e5ec5f6f398916571f.js.map