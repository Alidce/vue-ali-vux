let func = {
    _getCode(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    },
    _Log(title, content) {
        console.log("-----+++------" + title + "---------");
        console.log(content);
        console.log("-----+++------" + title + "---------");
    },
    _setItem(key, value) {
        localStorage.setItem(key, value)
    },
    _getItem(key) {
        return localStorage.getItem(key);
    },
    _hasOwnProperty(obj) {
        if (obj.hasOwnProperty("username")) {
            return this.$vux.toast.text(obj.username[0], "top");
        }
        if (obj.hasOwnProperty("password")) {
            return this.$vux.toast.text(obj.password[0], "top");
        }
    }
};
export default func;