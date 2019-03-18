exports.install = function (Vue) {
  let _api_root = "http://www.zzxxff.com/";
  let _api_robot = "http://www.zzxxff.com:12000/";
  // 这里可以区分不同域名下的接口命名-------
  // 如果域名需要跨域可以在根目录config的index.js的proxyTable配置
  // 那么_api_root 就可以改为'/xxx'
  Vue.prototype._api = {
    auth: {
      get_openid: _api_root + "auth/get_openid",
      login: _api_root + "auth/login",
      logout: _api_root + "auth/logout",
      send_verifyNum: _api_root + "auth/send_verifyNum",
      rest: _api_root + "auth/reset",
      register:_api_root+"auth/register"
    },
    wxbot: {
      getqrcode: _api_robot + "api/robot/wxbot/getqrcode"
    }
  };
}
