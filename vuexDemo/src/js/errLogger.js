import dvdLogin from "dvd-service-js-login";
import ua from "dvd-base-js-ua";
import ajaxFileUpload from "dvd-service-js-ajax-file-upload";
import $ from "jquery";
import encrypt from "dvd-service-js-encrypt";

// // var DVD_SID = 'wgy'|| dvdLogin.getDvdsid(),
//   APP_VERSION = '1.1.1'|| ua.getDvdAppVersion(),
var DVD_SID = "wgy" || dvdLogin.getDvdsid(),
  APP_VERSION = "1.1.1"|| ua.getDvdAppVersion(),
  NET_WORK = "asdsa",
  OSS_FILE_NAME = "oss app_debug_log",
  PHP_LOG_URL = "/api/mg/user/trace/log";

var util = {
  //log对象 处理成 文件 格式为：时间戳+dvdsid.log
  makeFileName: function(dvdsid) {
    var timestamp = +new Date();
    return timestamp + dvdsid + ".log";
  },
  //调php接口 
  postToPhp: function (cbUrl) {
    /*
  {
      "code": "1",
      "data_version": "d751713988987e9331980363e24189ce",
      "suggestDomain": "",
      "forceDomain": "",
      "shop_url": "https://bravetime.bravetime.net",
      "visitor_status": 0,
      "sess_key": "1d63eac5cd62ac7e455404ef01c5a4d200000001",
      "sys_time": 1510077397，
      "data":{
         "msg":"必须参数非法",
      }
  }
  */
    $.ajax({
      cache: false,
      async: true,
      url: PHP_LOG_URL,
      type: "post",
      dataType: "json",
      data: encrypt.ajax({
        traceMsg: cbUrl
      }),
      success(response) {
        try {
          if (response.code == 1) {
            alert(response.data.code)
          } else {
            // reject(response && response.data && response.data.msg);
          }
        } catch (err) {
          // reject(response && response.data && response.data.msg);
        }
      },
      error() {
        // reject(error);
      }
    });
  }
};

// add log 主方法 需要的地方调用即可addLog()
function addLog() {
  var keyStr = DVD_SID + "LOGER";

  if (window.localStorage) {
    if (!localStorage.getItem(keyStr)) {
      //1组装log
      var log = {
        info: {
          appVersion: APP_VERSION,
          dvdsid: DVD_SID,
          network: NET_WORK
        },
        actionList: []
      };
      addAndSaveToLocal(keyStr, log);
      saveLogById();
    } else {
      var nowLog = JSON.parse(localStorage.getItem(keyStr));
      // console.log(nowLog);
      if (nowLog.actionList.length > 49) {
        nowLog.actionList.shift();
      }
      addAndSaveToLocal(keyStr, nowLog);
      // console.log(JSON.parse(localStorage.getItem(DVD_SID + "LOGER")));
      saveLogById();
    }
  } else {
    throw new Error("浏览器版本过低，请升级浏览器版本");
  }
}

function addAndSaveToLocal(keyStr, obj) {
  obj.actionList.push({
    time: +new Date(),
    action: "TODO",
    detail: "TODO"
  });
  localStorage.setItem(keyStr, JSON.stringify(obj));
}

//拼接文件名
function saveLogById() {
  //重新定义key 避免同key覆盖情况
  var key = DVD_SID + "LOGER",
    log = localStorage.getItem(key);
  if (typeof log == "string") {
    var fileName = util.makeFileName(DVD_SID);
    makeObjToFile(log, fileName);
  }
}

//2log对象的字符串从本地取出来处理成 文件  文件再转成file类型的对象 方便符合调用上传文件的接口
function makeObjToFile(objStr, fileName) {
  //txt -> type:"text/plain
  window.URL = window.URL || window.webkitURL;
  var blob = new Blob([objStr], { type: "text/plain;charset=UTF-8" });
  //https://stackoverflow.com/questions/27553617/convert-blob-to-file
  var file = new File([blob], fileName, {
    type: "txt",
    lastModified: Date.now()
  });
  debugger;
  // console.dir(file);
  //3上传到oss
  ajaxFileUpload
    .uploadFile({
      dir: OSS_FILE_NAME, // 上传目标文件夹名称。建议每个功能页面的上传功能是一个独立的文件夹，方便日后统一处理。例如微信头像可以起名为'wx-head'，请到oss手动检查dir是否与已知目录重名
      files: [file], // 上传的文件（File数组）
      loading: 1 // 是否自动显示loading（默认开启，如需关闭请传0）
    })
    .then(
      data => {
        //4 callback里面再调一下php接口
        debugger;
        alert(JSON.stringify(data));

        var cbUrl = data.url;
        util.postToPhp(cbUrl).then(
          res => {
            alert(res);
          }
        );
      }
    );
}

export default {
  addLog: addLog
};
