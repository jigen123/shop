webpackJsonp([64],{"18KZ":function(t,s){},Gk99:function(t,s,a){var i=a("VU/8")(a("d07W"),a("Q2uZ"),function(t){a("18KZ")},"data-v-22cffc83",null);t.exports=i.exports},Q2uZ:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrap bg-f0",attrs:{id:"orderdetail"}},[a("x-header",{attrs:{"left-options":{backText:""}}},[t._v("借款详情")]),t._v(" "),a("div",{staticClass:"order-main"},[a("div",{staticClass:"mui-media-body"},[a("p",{staticClass:"mui-ellipsis daikuan"},[a("span",[t._v(t._s(t.rspdata.product_type))]),t._v(t._s(t.rspdata.title))])]),t._v(" "),a("ul",{staticClass:" table-view-one mui-table-view mui-grid-view mui-text-left top-wrap"},[a("li",{staticClass:"clearfix content-list"},[a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media sublist mui-table-view-cell mui-text-left"},[a("span",{staticClass:"top"},[t._v(t._s(t.rspdata.apply_money))]),t._v(" "),a("span",{staticClass:"bottom"},[t._v("申请金额")])]),t._v(" "),a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media sublist mui-table-view-cell mui-text-left"},[a("span",{staticClass:"top"},[t._v(t._s(t.moment.unix(t.rspdata.add_time).format("YYYY-MM-DD")))]),t._v(" "),a("span",{staticClass:"bottom"},[t._v("申请日期")])]),t._v(" "),a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media sublist mui-table-view-cell mui-text-left"},[a("span",{staticClass:"top"},[t._v(t._s(t.rspdata.loan_limit))]),t._v(" "),a("span",{staticClass:"bottom"},[t._v("借款期限")])]),t._v(" "),a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media sublist mui-table-view-cell mui-text-left"},[a("span",{staticClass:"top"},[t._v(t._s(t.rspdata.product_type))]),t._v(" "),a("span",{staticClass:"bottom"},[t._v("产品类型")])])])]),t._v(" "),a("ul",{staticClass:" table-view-two mui-table-view mui-grid-view mui-text-left"},[t._m(0),t._v(" "),a("li",{staticClass:"mui-table-view-three clearfix content-list"},[a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("昵称")]),t._v(t._s(t.rspdata.nickname)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"mui-col-xs-6 mui-col-sm-6 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("公司名称")]),t._v(t._s(t.rspdata.company)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("姓名")]),t._v(t._s(t.rspdata.realname)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"mui-col-xs-6 mui-col-sm-6 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("每月收入")]),t._v(t._s(t.rspdata.income)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:" mui-col-xs-6 mui-col-sm-6 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("职位")]),t._v(t._s(t.rspdata.job)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"mui-col-xs-6 mui-col-sm-6 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("公司座机")]),t._v(t._s(t.rspdata.company_tel)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:" mui-col-xs-12 mui-col-sm-12 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("借款用途:")]),t._v(t._s(t.rspdata.loan_reason)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:" mui-col-xs-12 mui-col-sm-12 mui-media mui-table-view-cell mui-text-left "},[a("span",{staticClass:"iconleft "},[t._v("公司地址:")]),t._v(t._s(t.rspdata.company_address)+"\n\t\t\t\t\t")])])]),t._v(" "),a("ul",{staticClass:"table-view-three clearfix"},[a("img",{staticClass:"mui-pull-left headimg",attrs:{src:t.imgUrl+t.rspdata.head_img,alt:""}}),t._v(" "),a("div",{staticClass:"mui-pull-left center-content"},[a("div",{staticClass:"top"},[t._v(t._s(t.rspdata.nickname))]),t._v(" "),a("div",{staticClass:"bottom"},[t._v("联系电话:"),a("a",{attrs:{href:"tel:"+t.rspdata.telphone}},[t._v(t._s(t.rspdata.telphone))])])]),t._v(" "),a("i",{staticClass:"iconfont icon mui-pull-right "})]),t._v(" "),a("div",{staticClass:"foot clearfix"},[a("span",{staticClass:"fl"},[t._v("可抢次数"),a("i",[t._v(t._s(t.rspdata.bid_num))]),t._v("次")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.rspdata.bid_num&&0==t.rspdata.is_buy,expression:"rspdata.bid_num!=0&&rspdata.is_buy==0"}],staticClass:"fr",on:{click:function(s){t.getordernow(t.rspdata.grab_icon,t.rspdata.id)}}},[t._v("立即抢单")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.rspdata.bid_num&&1==t.rspdata.is_buy,expression:"rspdata.bid_num!=0&&rspdata.is_buy==1"}],staticClass:"fr finishorder"},[t._v("已抢单")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.rspdata.bid_num,expression:"rspdata.bid_num==0"}],staticClass:"fr finishorder"},[t._v("已抢完")])])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"mui-table-view-two clearfix list-li"},[a("i",{staticClass:"iconfont icon-shuxian"}),t._v("客户信息")])}]}},d07W:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("mvHQ"),e=a.n(i),l=a("Au9i"),o=(a.n(l),a("ABCa")),c=a.n(o);s.default={name:"orderdetail",components:{XHeader:c.a,Toast:l.Toast,MessageBox:l.MessageBox},data:function(){return{is_r:!0,photo:{src:a("I4En")},users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",rspdata:"",getorder:!1,telphone:"",clicktimes:0}},methods:{getordernow:function(t,s){var a=this,i="<div class='alert-cost'>本次需要花费<br/>"+(Number(t)||0)+"金币</div>";l.MessageBox.confirm(i).then(function(t){a.$axios.post("/api/Loan_post/grab_loan_post","data="+e()({session_id:a.users.session_id,userId:a.users.userId,id:s})).then(function(t){console.log(t),200==t.code?(Object(l.Toast)("抢单成功"),a.rspdata.telphone=t.data.telphone,--a.rspdata.bid_num,a.rspdata.is_buy=1):Object(l.Toast)(t.msg)})})}},mounted:function(){var t=this;this.$axios.post("/api/Loan_post/loan_post_detail","data="+e()({session_id:this.users.session_id,userId:this.users.userId,id:this.$route.query.id})).then(function(s){200==s.code&&(t.rspdata=s.data),t.telphone=s.data.telphone})}}}});
//# sourceMappingURL=64.25aa161ccf61e9fba892.js.map