webpackJsonp([47],{"AA/Y":function(t,e,i){var s=i("VU/8")(i("q1cU"),i("rD/r"),function(t){i("LzmC"),i("V0Qj")},"data-v-e04e0b7a",null);t.exports=s.exports},LzmC:function(t,e){},V0Qj:function(t,e){},q1cU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),n=i.n(s),a=i("y3MK"),o=(i.n(a),i("NYxO"),i("Au9i")),c=(i.n(o),i("ABCa")),r=i.n(c);e.default={name:"myaccount",components:{XHeader:r.a},data:function(){return{users:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):"",defaultImg:'this.src="'+i("QKcC")+'"',show:!0,title:"账户信息",nickname:"",touxiang:"",nickedit:!1,border:"",userimg:{}}},computed:{get_userinfo:function(){return this.$store.getters.get_userinfo},head_img:function(){return this.$store.state.login.users.head_img}},filters:{regMobile:function(t){return t?(t.length>7&&(e=t.substr(0,3)+"****"+t.substr(7)),e):"";var e}},methods:{preventdefault:function(t){t.cancelBubble=!0},changeimg:function(t){$(".upload-addimg-btn").find("input[type=file]").trigger("click")},focusnick:function(){this.edit=!0,this.border="border"},blurnick:function(){var t=this;this.edit=!1,this.border="",this.$axios.post("/api/Usercenter/change_nickname","data="+n()({session_id:this.users.session_id,userId:this.users.userId,nickname:this.nickname})).then(function(e){if(200==e.code){var i=t.users;i.nickname=t.nickname,t.$store.commit("SAVE_USERS",i),Object(o.Toast)("修改成功")}else Object(o.Toast)(e.msg)})}},mounted:function(){this.nickname=this.users.nickname;var t=this;Uploader("addImg",{path:this.imgUrl+"/api/Upload/upload",data:{type:"members"},type:"post",autoUpload:!0,fileNum:Number.POSITIVE_INFINITY,fileSize:10,uploadSuccess:function(e){if(200==e.code){var i=t.users;this.head_img=e.data.url[0],t.$axios.post("/api/Usercenter/change_head_img","data="+n()({userId:t.users.userId,session_id:t.users.session_id,head_img:e.data.url[0]})).then(function(e){200==e.code&&(i.head_img=e.data.head_img,t.$store.commit("SAVE_USERS",i)),Object(o.Toast)(e.msg),mui.hideLoading()}).catch(function(t){})}else mui.hideLoading(),mui.toast(e.msg)}})},watch:{nickname:function(t){}}}},"rD/r":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-f0 ",attrs:{id:"my-account"}},[i("x-header",{attrs:{"left-options":{backText:""}}},[t._v("账户信息")]),t._v(" "),i("div",{staticClass:"mui-content fixed-content"},[i("ul",{staticClass:"mui-table-view"},[i("li",{staticClass:"mui-table-view-cell touxiang",on:{click:function(e){e.stopPropagation(),t.changeimg(this)}}},[t._v("\n\t\t\t\t\t更换头像\n\t\t\t\t\t"),i("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"}),t._v(" "),i("span",{staticClass:"mui-pull-right touxiang-wrap",attrs:{id:"addImg"}},[i("img",{staticClass:"img-self",attrs:{src:t.users?t.imgUrl+t.users.head_img:"",onerror:t.defaultImg,alt:"头像",height:"73"}})])]),t._v(" "),i("li",{staticClass:"mui-table-view-cell nicknameli"},[t._v("\n\t\t\t\t\t昵称\n\t\t\t\t\t"),i("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"fr nickname",class:t.border,attrs:{type:"text",contenteditable:t.nickedit},domProps:{value:t.nickname},on:{focus:t.focusnick,blur:t.blurnick,input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"mui-table-view-cell about"},[t._v("\n                    手机号\n                    "),i("i",{staticClass:"iconfont icon-youjiantou mui-pull-right"}),t._v(" "),i("span",{staticClass:"mui-pull-right"},[t._v(" "+t._s(t._f("regMobile")(t.users?t.users.mobile:"电话号码"))+" ")])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=47.1acd05fe758f70a550f9.js.map