webpackJsonp([46],{B91d:function(t,e){},BbDJ:function(t,e){},WqZz:function(t,e,s){var a=s("VU/8")(s("xFN6"),s("afUO"),function(t){s("BbDJ"),s("B91d")},"data-v-4bd1c0df",null);t.exports=a.exports},afUO:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-f0",attrs:{id:"bankcard"}},[s("i-header",{attrs:{is_r:t.show,title:t.title}}),t._v(" "),s("div",{staticClass:"mui-content"},[s("transition",[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.tips,expression:"tips"}],staticClass:"mui-table-view tipsul"},[s("li",{staticClass:"tips"},[s("i",{staticClass:"iconfont icon-jinggao"}),t._v("请确认好绑定的银行卡信息")])])]),t._v(" "),s("form",{staticClass:"mui-input-group "},[s("div",{staticClass:"mui-input-row huname"},[s("label",[t._v("户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"right-view",attrs:{placeholder:"请输入您的姓名"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mui-input-row ",attrs:{type:t.tousutype},on:{click:function(e){t.type_popup=!0}}},[s("label",[t._v("银行")]),t._v(" "),s("i",{staticClass:"iconfont icon-arrow-down"}),t._v(" "),s("span",{staticClass:"mui-pull-right bankselect"},[t._v(t._s(t.type_content))])]),t._v(" "),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("支行")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bankbranch,expression:"bankbranch"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请填写开户银行支行"},domProps:{value:t.bankbranch},on:{input:function(e){e.target.composing||(t.bankbranch=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mui-input-row bankcardli"},[s("label",[t._v("卡号")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bankbard,expression:"bankbard"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请填写银行卡号"},domProps:{value:t.bankbard},on:{input:function(e){e.target.composing||(t.bankbard=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"mui-input-row yzm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),t.getcoded?s("span",{staticClass:" get",on:{click:t.getcode}},[t._v("获取")]):t._e(),t._v(" "),t.getcoded?t._e():s("span",{staticClass:"getcode"},[s("i",[t._v(t._s(t.second))]),t._v("秒后重新发送")])]),t._v(" "),s("div",{staticClass:"footer"},[s("button",{on:{click:t.addBankcard}},[t._v("+绑定银行卡")])]),t._v(" "),t._m(0)],1),t._v(" "),s("mt-popup",{staticClass:"r-ter",attrs:{position:"bottom"},model:{value:t.type_popup,callback:function(e){t.type_popup=e},expression:"type_popup"}},[s("span",{staticClass:"click_success c-ff6800",on:{click:function(e){t.is_fh()}}},[t._v("完成")]),t._v(" "),s("mt-picker",{attrs:{slots:t.type_list,valueKey:"link_value"},on:{change:t.onTypeChange}})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-footer"},[t._v("如有疑问,请联系客服 "),s("span",[t._v("400-400-400")])])}]}},xFN6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("gRE1"),n=s.n(a),i=s("fZjL"),o=s.n(i),c=s("mvHQ"),l=s.n(c),u=s("y3MK"),r=s.n(u),d=s("Au9i");s.n(d);e.default={name:"set",data:function(){return{show:!0,title:"我的银行卡",content:"",users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",fullname:"",bankcard:"",bankbranch:"",bankbard:"",banklist:[],selectvalue:"",type_content:"",tousutype:"",type_list:[{flex:1,values:[{link_value:"选择银行卡"}],className:"slot1",textAlign:"center"}],type_popup:!1,getcoded:!0,second:60,code:"",tips:!0}},components:{iHeader:r.a},methods:{is_fh:function(){this.type_popup=!1},onTypeChange:function(t,e){this.type_content=e[0].link_value,this.tousutype=e[0].link_name},addBankcard:function(){var t=this;return this.fullname?this.tousutype?this.bankbranch?this.bankbard?this.code?void this.$axios.post("/api/Usercenter/add_bank","data="+l()({session_id:this.users.session_id,userId:this.users.userId,fullname:this.fullname,branch:this.bankbranch,bank:this.tousutype,code:this.code,bankbard:this.bankbard,mobile:this.users.mobile})).then(function(e){console.log(l()(e)),200==e.code?setTimeout(function(){t.$router.push({path:"/my/my-bank"})},2e3):999==e.code&&Object(d.Toast)(e.msg)}).catch(function(t){}):(Object(d.Toast)("请填写验证码"),!1):(Object(d.Toast)("请填写银行卡号"),!1):(Object(d.Toast)("请填写开银行支行"),!1):(Object(d.Toast)("请选择银行卡"),!1):(Object(d.Toast)("请输入姓名"),!1)},getcode:function(){var t=this;this.$axios.post("/api/Privilege/get_code","data="+l()({session_id:this.users.session_id,userId:this.users.userId,mobile:this.users.mobile,type:"BINDBANK"})).then(function(e){if(console.log(l()(e)),200==e.code){console.log(e.data.limit_time),t.second=e.data.limit_time,t.getcoded=!1;var s=Number(e&&e.data.limit_time);console.log(s);var a=t;setTimeout(function(){a.getcoded=!0},1e3*s),setInterval(function(){a.second--,a.second<=0&&(a.second=s)},1e3)}else 999==e.code&&Object(d.Toast)(e.msg)}).catch(function(t){})}},mounted:function(){},created:function(){var t=this;this.$axios.post("/api/Usercenter/get_bank_list").then(function(e){if(console.log(l()(e)),200==e.code){var s={};for(var a in o()(e.data))s.link_name=o()(e.data)[a],t.type_list[0].values.push({link_name:o()(e.data)[a],link_value:n()(e.data)[a]});console.log(t.type_list[0].values)}else 999==e.code&&Object(d.Toast)(e.msg)}).catch(function(t){});var e=this;setTimeout(function(){e.tips=!1},3e3)}}}});
//# sourceMappingURL=46.ed8ce700edd2b766b717.js.map