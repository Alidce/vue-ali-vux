<template>
  <div class="login">
    <div class="title">
      <div class="cn">{{this._APPCONFIG.title.cn}}</div>
      <div class="zn">{{this._APPCONFIG.title.zn}}</div>
    </div>
    <div class="input_submit">
      <x-button class="submitBtn" @click.native="jump" type="primary">登录</x-button>
    </div>
  </div>
</template>
<script>
import { XInput, XButton } from "vux";
export default {
  name: "login",
  components: {
    XInput,
    XButton
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    /**
     * 1.获取微信用户的open_id
     */
    sendCode() {
      let wxcode = this._func._getCode("code");
      let req = {
        username: this.username,
        code: wxcode,
        platform_id: this._AppConfig().platform_id
      };
      this.$http.post(this._api.auth.get_openid, req).then(res => {
        this._func._Log("get_openid", res.data);
      });
    },
    /**
     * 2.表单验证
     */
    jump() {
      if (1) {
        this._func._Log("test", "rest");
      } else {
        this.$vux.toast.text("表单信息不完整", "top");
      }
    }
  }
};
</script>

<style scoped>
.login {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login .title {
  width: inherit;
  text-align: center;
  color: rgb(221, 20, 60);
  font-family: "Courier New", Courier, monospace;
  padding: 50px 0;
}
.login .title .cn {
  font-size: calc(var(--font-size) * 3.2px);
  font-weight: 600;
}
.login .title .zn {
  font-size: calc(var(--font-size) * 1.4px);
}
.submitBtn {
  width: 80vw;
  margin-top: 40px;
}
</style>
