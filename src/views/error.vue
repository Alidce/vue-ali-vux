<template>
  <div class="error w">
    <div class="tip">您的回话已过期，请退出重新登录。</div>
    <group>
      <x-button type="warn" @click.native="loginout" class="loginout-btn">重新登录</x-button>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, XButton } from "vux";
export default {
  name: "error",
  components: {
    Group,
    XButton,
    XHeader
  },
  data() {
    return {};
  },
  methods: {
    loginout() {
      this.$http.get(this._api.auth.logout).then(response => {
        localStorage.clear();
        this.$router.push({ name: "login" });
        this.$vux.toast.text(response.data.data, "top");
        localStorage.setItem("tab_selected", 0);
      });
      setTimeout(function() {
        //这个可以关闭安卓系统的手机
        document.addEventListener(
          "WeixinJSBridgeReady",
          function() {
            WeixinJSBridge.call("closeWindow");
          },
          false
        );
        //这个可以关闭ios系统的手机
        WeixinJSBridge.call("closeWindow");
      }, 1000);
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.tip {
  /* 手机号展示 */
  text-align: center;
  font-size: 18px;
  padding: 50px 0;
}
.loginout-btn {
  width: 90vw;
}
</style>

