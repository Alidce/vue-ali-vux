/**
 * app.config.js配置项目属性文件
 */

exports.install = function (Vue, options) {
  /**
   * 1.项目属性文件
   */
  APPCONFIG = {
    title: {
      cn: "别散客人",
      zn: "BIESANKEREN"
    },
    logo: "",
    auth: "别散客人",
    createTime: "2019年3月11日",
    platform_id: "biesankeren",
    abbr: "bskr"
  }
  Vue.prototype._AppConfig = function (params) {
    return APPCONFIG;
  };
  Vue.prototype._getCode = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
  }
  /**
   * 2.console函数封装=====>这里考虑的因素是因为每次需要调试的时候需要打印数据，但是上线之后控制台log太多，不太友好
   *  可以在这里选择关闭
   */
  Vue.prototype._Log = function (title, content) {
    console.info("-----+++------" + title + "---------");
    console.info(content);
    console.info("-----+++------" + title + "---------");
    // return false;
  }
  Vue.prototype._setItem = function (key, value) {
    return localStorage.setItem(key, value)
  }
  Vue.prototype._getItem = function (key) {
    return localStorage.getItem(key);
  }
  // 这里用于对象名称的匹配
  Vue.prototype._hasOwnProperty = function (obj) {
    if (obj.hasOwnProperty("username")) {
      return this.$vux.toast.text(obj.username[0], "top");
    }
    if (obj.hasOwnProperty("password")) {
      return this.$vux.toast.text(obj.password[0], "top");
    }
  };
}
