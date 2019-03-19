import _siteinfo from "../../siteinfo.js";
let _api_root = _siteinfo.url;
let _api_robot = _siteinfo.url;
// 这里可以区分不同域名下的接口命名-------
// 如果域名需要跨域可以在根目录config的index.js的proxyTable配置
// 那么_api_root 就可以改为'/xxx'
let _api = {
  auth: {
    get_openid: _api_root + "auth/get_openid",
    login: _api_root + "auth/login",
    logout: _api_root + "auth/logout",
    send_verifyNum: _api_root + "auth/send_verifyNum",
    rest: _api_root + "auth/reset",
    register: _api_root + "auth/register"
  },
  wxbot: {
    getqrcode: _api_robot + "api/robot/wxbot/getqrcode"
  }
};
export default _api;