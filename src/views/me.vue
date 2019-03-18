<template>
  <div id="Me">
    <div class="phone">{{username}}</div>
    <group>
      <x-button type="warn" @click.native="loginout" class="loginout-btn">退出系统</x-button>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, XButton } from "vux";
import Vue from "vue";
export default {
  name: "me",
  components: {
    Group,
    XButton,
    XHeader
  },
  data() {
    return {
      username: ""
    };
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
  created() {
    let req = {
      title: this.$route.meta.title,
      Back: {
        showBack: false
      }
    };
    this.$emit("childByValue", req);
    this.username = this._getItem(this._AppConfig().abbr + "_username");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Me {
  width: 100vw;
  position: relative;
}
.fa {
  /* 图标库 */
  margin-right: 10px;
  color: #b4282d;
}
.head-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #1b1212;
}
.phone {
  /* 手机号展示 */
  text-align: center;
  font-size: 18px;
}
.loginout-btn {
  width: 90vw;
}
</style>

