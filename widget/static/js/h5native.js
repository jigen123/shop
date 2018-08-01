//取消浏览器的所有事件，使得active的样式在手机上正常生效
document.addEventListener('touchstart',function(){
    return false;
},true);
// 禁止选择
document.oncontextmenu=function(){
	return false;
};
// H5 plus事件处理
var as='pop-in';// 默认窗口动画
function plusReady(){
	// 隐藏滚动条
	plus.webview.currentWebview().setStyle({scrollIndicator:'none'});
	// Android处理返回键
	/* plus.key.addEventListener('backbutton',function(){
		('iOS'==plus.os.name)?plus.nativeUI.confirm('确认退出？', function(e){
			if(e.index>0){
				plus.runtime.quit();
			}
		}, 'HelloH5', ['取消','确定']):(confirm('确认退出？')&&plus.runtime.quit());
	},false); */
	compatibleAdjust();
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready',plusReady,false);
}
// DOMContentLoaded事件处理
var _domReady=false;
document.addEventListener('DOMContentLoaded',function(){
	_domReady=true;
	compatibleAdjust();
},false);
// 兼容性样式调整
var _adjust=false;
function compatibleAdjust(){
	if(_adjust||!window.plus||!_domReady){
		return;
	}
	_adjust=true;
	// iOS平台特效
	if('iOS'==plus.os.name){
		//document.getElementById('content').className='scontent';	// 使用div的滚动条
		//if(navigator.userAgent.indexOf('StreamApp')>=0){	// 在流应用模式下显示返回按钮
		//	document.getElementById('back').style.visibility='visible';
		//}
	}
	// 预创建二级窗口
//	preateWebviews();
	// 关闭启动界面
		// plus.navigator.setStatusBarBackground('#469dc8');
	setTimeout(function(){
		plus.navigator.closeSplashscreen();
	},200);
}
// 处理点击事件
var _openw=null;
/**
 * 点击打开新窗口
 * @param {Object} id	加载的页面地址，也用作窗口标识
 * @param {Object} a	页面动画内心，默认使用全局as设置的值
 * @param {Object} s	是否不显示窗口
 */
function clicked(id,a,s){
	if(_openw){return;}
	a||(a=as);
	_openw=preate[id];
	if(_openw){
		_openw.showded=true;
		_openw.show(a,null,function(){
			_openw=null;//避免快速点击打开多个页面
		});
	}else{
//		var wa=plus.nativeUI.showWaiting();
//		_openw=plus.webview.create(id,id,{scrollIndicator:'none',scalable:false,popGesture:'hide'},{preate:true});//复用二级页面
		_openw=plus.webview.create(id,id,{scrollIndicator:'none',scalable:false,popGesture:'close'});
		preate[id]=_openw;
		_openw.addEventListener('loaded',function(){//叶面加载完成后才显示
//		setTimeout(function(){//延后显示可避免低端机上动画时白屏
//			wa.close();
			_openw.showded=true;
			s||_openw.show(a,null,function(){
				_openw=null;//避免快速点击打开多个页面
			});
			s&&(_openw=null);//避免s模式下变量无法重置
//		},10);
		},false);
		_openw.addEventListener('hide',function(){
			_openw&&(_openw.showded=true);
			_openw=null;
		},false);
		_openw.addEventListener('close',function(){//页面关闭后可再次打开
			_openw=null;
			preate[id]&&(preate[id]=null);//兼容窗口的关闭
		},false);
	}
}
// 预创建二级页面
var preate={};
function preateWebviews(){
	preateWebivew('plus/webview.html');
	var plist=document.getElementById('plist').children;
	// 由于启动是预创建过多Webview窗口会消耗较长的时间，所以这里限制仅创建5个
	for( var i=0;i<plist.length&&i<2;i++){
		var id=plist[i].id;
		id&&(id.length>0)&&preateWebivew(id);
	}
}
function preateWebivew(id){
	if(!preate[id]){
		var w=plus.webview.create(id,id,{scrollIndicator:'none',scalable:false,popGesture:'hide'},{preate:true});
		preate[id]=w;
		w.addEventListener('close',function(){//页面关闭后可再次打开
			_openw=null;
			preate[id]&&(preate[id]=null);//兼容窗口的关闭
		},false);
	}
}
// 清除预创建页面(仅)
function preateClear(){
	for(var p in preate){
		var w=preate[p];
		if(w&&w.showded&&!w.isVisible()){
			w.close();
			preate[p]=null;
		}
	}
}
		