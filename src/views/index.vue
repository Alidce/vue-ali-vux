<template>
<div style="height:100%;" class="index wh">
  <view-box ref="viewBox" style="position:fixed;" body-padding-top="46px" body-padding-bottom="150px">
    <x-header  :left-options="Back" slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{name}}</x-header>
    <router-view v-on:childByValue="childByValue"></router-view>
    <tabbar style="width:100%;" @on-index-change="clicka">
      <tabbar-item >
        <span slot="icon" class="fa fa-weixin"></span>
        <span slot="label">机器人</span>
      </tabbar-item>
      <tabbar-item selected>
        <span slot="icon" class="fa fa-user"></span>
        <span slot="label" link="/me">个人中心</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox, XHeader } from "vux";
export default {
  name: "index",
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
    XHeader
  },
  data() {
    return {
      name: "",
      Back: { showBack: false }
    };
  },
  methods: {
    clicka(res) {
      switch (res) {
        case 0:
          this.$router.push({ name: "robotlist" });
          break;
        case 1:
          this.$router.push({ name: "me" });
          break;

        default:
          break;
      }
    },
    childByValue: function(childValue) {
      this.name = childValue.title;
      this.Back = childValue.Back;
    }
  },
  created() {}
};
</script>

<style scoped>
.fa {
  font-size: 20px;
  text-align: center;
  color: #808695;
  position: relative;
  top: 4px;
}
.weui-bar__item_on .fa {
  color: #b4282d;
}
</style>
