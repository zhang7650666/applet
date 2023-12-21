<template>
  <div>
    <nut-tabbar v-model="state.cur" bottom safe-area-inset-bottom placeholder @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="(item, index) in pageList" :tab-title="item.title" :icon="item.icon" :key="index"> </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script setup lang="ts">
import {  h, reactive } from 'vue';
import {  Home, Category, Find, Cart, My} from '@nutui/icons-vue-taro';
import Taro, { Component } from '@tarojs/taro'

const props = defineProps({
  active: {
    type: Number,
    default:0
  }
})
const state = reactive({
  cur: props.active,
})
const pageList = [
  {
    title: '首页',
    icon: h(Home),
    name: 'Index',
    pagePath: "/pages/index/index",
  },
  {
    title: '我的',
    icon: h(My),
    name: 'My',
    pagePath: "/pages/my/index",
  }
];

const tabSwitch = (item, index) => {
  const {router} = Taro.getCurrentInstance();
  const pagePath = pageList[index].pagePath;
 if(router.path !== pagePath) {
  Taro.navigateTo({
        url: pagePath,
    });
 }

}
</script>

<style lang="scss">
.nut-list {
  height: calc(100vh - 840px) !important;
  overflow-y: scroll;
}
.nut-list-phantom {
  height: auto !important;
}
</style>
