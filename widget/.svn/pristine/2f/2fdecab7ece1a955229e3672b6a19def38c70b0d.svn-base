/*********************极光推送************************/
//极光推送
function jiguang() {
  var ajpush = api.require('ajpush');
  //设置别名
    alias();
  //判断如果是ios系统
  if (api.systemType == 'ios') {
    //监听应用进入后台，通知jpush暂停事件
    api.addEventListener({
      name : 'pause'
    }, function(ret, err) {
      ajpush.onPause();
    })
    //监听应用恢复到前台，通知jpush恢复事件
    api.addEventListener({
      name : 'resume'
    }, function(ret, err) {
      ajpush.onResume();
    });
    ajpush.setListener(function(ret, err) {
      //点击消息后返回事件
      iosCallBack(ret,err);
    });
  } else if (api.systemType == 'android') {
    //判断如果是Android系统
    ajpush.init(function(ret) {
      if (ret && ret.status) {
        backs();
      }
    });
  }
}
function setListener(){
    var ajpush = api.require('ajpush');
  ajpush.setListener(function(ret, err){
    if(ret){
      //alert('收到消息：\n' + JSON.stringify(ret));
      var readStr=ret.content;
      speechRecognizerRead(readStr);
    }else{
      //
    }
  });
}

function backs() {
  //两个监听事件
  var ajpush = api.require('ajpush');
  //监听应用到后台，通知jpush恢复事件
  api.addEventListener({
    name : 'pause'
  }, function(ret, err) {
    ajpush.onPause();
  });
  //监听应用恢复到前台，通知jpush恢复事件
  api.addEventListener({
    name : 'resume'
  }, function(ret, err) {
    ajpush.onResume();
  });
  //点击消息后返回事件
  clickBack();
}
//IOS应用在前台消息回调
var flage=true;
function iosCallBack(ret,err){
    var extra = ret.extra;
    //var $data = $api.strToJson(extra);
    var $data1 = $api.strToJson(extra.txt);
    var type = extra.type;
    if(flage){
  api.alert({
      title: '消息提醒',
      msg: '您有条新的消息,请注意查收!',
  }, function(ret, err) {
    flage=true;
    switch(type){
        case 'payment':
          openWin('payhistorydetail', ''+$url+'payhistorydetail.html', {
            data : $data1
          });
          break;
        case 'drawcash':
          //提现推送
          openWin('withdrawhistorydetail', ''+$url+'withdrawhistorydetail.html', {
            data : $data1
          });
          break;
        case 'systemmessage':
          //消息通知
          openWin('systemMessage', ''+$url+'systemMessageDetail.html', {
            title : $data1.title,id:$data1.id
          });
          break;
      }
  });
  flage=false;
  }
}
//点击消息后返回事件
function clickBack() {
  //点击后返回函数
  //若应用已启动
  api.addEventListener({
    name : 'appintent'
  }, function(ret, err) {
    if (ret && ret.appParam.ajpush) {
      //alert(JSON.stringify(ret));
    }
  });
  //若应用未启动
  api.addEventListener({
    name : 'noticeclicked'
  }, function(ret, err) {
    if (ret && ret.value) {
      var ajpush = ret.value;
      var content = ajpush.content;
      var extra = ajpush.extra;
      var $data = $api.strToJson(extra);
      var $data1 = $api.strToJson($data.txt);
      var type = $data.type;
      //清除本地存储中ios圆标
      // $api.rmStorage('number');
      //type类型说明

    }
  });
}

//给当前用户设置别名
function alias() {
  var mid=H.getStorage('mid');
          if(mid!=undefined){
  var ajpush = api.require('ajpush');
    var param = {
      alias : mid
    };
    ajpush.bindAliasAndTags(param, function(ret) {
      var statusCode = ret.statusCode;
    setListener();
    });
    }
}
//语音
function speechRecognizerRead(readStr){
  var speechRecognizer = api.require('speechRecognizer');
      speechRecognizer.read({
          readStr: readStr,
          speed: 60,
          volume: 80,
          voice: 'vixy',
          rate: 16000
      }, function(ret, err) {
          if (ret.status) {
            //  ret.speakProgress
            //H.toast("朗读完成");
          } else {
              api.alert({ msg: err.msg });
          }
      });
}
