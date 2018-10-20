/*
最后修改日期： 2017-08-03 13:25:08 张云飞
使用说明请参考《mobile_agent_使用说明.md》
*/

console.log("start load mobile agent js file: mobile_agent_ext2.js");

window.mobileAgent = window.mobileAgent || {};

(function (mobileAgent, window) {

    var _postMessage = function (action, params, callBack) {

        var json  = JSON.stringify({
                                action : action,
                                params : params,
                                callBack : callBack
                            });
        if(typeof window.mobileAgent != "undefined"
                && typeof window.mobileAgent.postMessage != "undefined"){
            window.mobileAgent.postMessage(json);
        }
        if(typeof window.webkit != "undefined"
                && typeof window.webkit.messageHandlers != "undefined"
                && typeof window.webkit.messageHandlers.iOSAgent != "undefined"){
            window.webkit.messageHandlers.iOSAgent.postMessage(json);
        }
    };

    //是否运行在app环境
    mobileAgent.isRunOnApp = function(){
        if(typeof window.mobileAgent != "undefined"
                        && typeof window.mobileAgent.postMessage != "undefined"){
                    return true;
                }

        if(typeof window.webkit != "undefined"
                        && typeof window.webkit.messageHandlers != "undefined"
                        && typeof window.webkit.messageHandlers.iOSAgent != "undefined"){
                    return true;
                }
        return false;
    };

    mobileAgent.closeWindow = function () {
        _postMessage('close');
    };
    //登出
	mobileAgent.logout = function () {
        _postMessage('logout');
    };
    
    mobileAgent.goBack = function () {
        _postMessage('back');
    };

    mobileAgent.sharePage = function (title, content, imagePath, url) {
        var callBackMethodName = 'callBack' + Math.random();
        mobileAgent[callBackMethodName] = function (err, rs) {
            callBack(err, rs);
            mobileAgent[callBackMethodName] = null;
            callBackMethodName = null;
        };

        _postMessage(
            'share',
            {
                title: title, content: content, imagePath: imagePath, url: url
            },
            callBackMethodName
        );
    };

    mobileAgent.callWindowFun = function (funName, args, requestCode) {
        var rs = null;
        var responseCode = -1;
        if(window[funName]) {
            rs = window[funName].apply(null, args);
            responseCode = 0;
        }else{
            responseCode = -1;
        }
        _postMessage(
            'callWindowFun_callback',
            {
                funName:funName,
                result:[rs],
                requestCode:requestCode,
                responseCode:responseCode
            }
        );
    };

    mobileAgent.showErrorView = function(errCode,errText){
        _postMessage('showErrorView',{
            errCode:errCode,
            errText:errText
        });
    };

    mobileAgent.openNewWindow = function(url,title){
        _postMessage('openNewWindow',{
            url:url,
            title:title
        });
    };

   mobileAgent.openURL = function (url,para,callBack) {
          var callBackMethodName = 'callBack' + Math.random();
          mobileAgent[callBackMethodName] = function (err, rs) {
              callBack(err, rs);
              mobileAgent[callBackMethodName] = null;
              callBackMethodName = null;
          };
          _postMessage(
              'openURL',
              {
                url:url,
                para:para
              },
              callBackMethodName
          );
      };

    mobileAgent.goPage = function(pageName,arguments){
        _postMessage('goPage',{
            pageName:pageName,
            arguments:arguments
        });
    };

    mobileAgent.onUmengEvent = function(eventName,eventId){
        _postMessage('umengEvent',{
            eventName:eventName,
            eventId:eventId
        });
    };
//将参数传给ios 和安卓
    mobileAgent.postMessageToApp = function(params){
       _postMessage('postMessageToApp',{
            params:params
        });
    };


    //打开GPS
    mobileAgent.showGpsSettings = function (action,callBack) {
	      _postMessage(
	          'showGpsSettings',
	          {
	          }
	      );
	};
    //是否打开GPS
    mobileAgent.isGPSEnable = function (action,callBack) {
        var callBackMethodName = 'callBack' + Math.random();
        mobileAgent[callBackMethodName] = function (err, rs) {
	        callBack(err, rs);
	        mobileAgent[callBackMethodName] = null;
	        callBackMethodName = null;
        };
        _postMessage(
            'isGPSEnable',
            {
            },
            callBackMethodName
        );
    };
    //获取经纬度
    mobileAgent.getLocation = function (action,callBack) {
	    var callBackMethodName = 'callBack' + Math.random();
	    mobileAgent[callBackMethodName] = function (err, rs) {
            callBack(err, rs);
            mobileAgent[callBackMethodName] = null;
            callBackMethodName = null;
      };
      _postMessage(
          'getLocation',
          {
          },
          callBackMethodName
      );
    };
    
    //浏览图片
	mobileAgent.showImageViewer = function(pageName,arguments,index){
        _postMessage('showImageViewer',{
            arguments:arguments,
            index:index
        });
    };

})(window.mobileAgent || {}, window);

//hybrid对象,hybrid 用于js自身使用，接收来自客户端的调用
window.hybrid = window.hybrid || {};

(function (hybrid, window) {
     hybrid._eventArray = new Array(); //权限数组


     //引发事件
     hybrid.raiseEvent = function(action, params){
            for(var i in hybrid._eventArray){
                var evt = hybrid._eventArray[i];
                if(evt!=null && evt.eventName===action){
                    console.log("hit on "+evt);
                    evt.callback.apply(null,[params]);
                }
            }
     };

     hybrid.addEventListener = function(eventName,callback){
            hybrid._eventArray.push({eventName:eventName,callback:callback});
     };

     hybrid.removeEventListener = function(eventName){
            for(var i in hybrid._eventArray){
                var evt = hybrid._eventArray[i];
                if(evt!=null && evt.eventName===eventName){
                    hybrid._eventArray.splice(i, 1);
                }
             }
     };

     hybrid.sendEventMessage = function(msg){
                mobileAgent.postMessageToApp('sendEventMessage',msg);
            };

})(window.hybrid || {}, window);
