<template>
  <div class="index-wp">

    <div class="main-wp">
      <record-list :listCount="state.listCount"></record-list>
    </div>
  </div>
</template>
<script setup lang="ts" name="Index">
import { ref, reactive, onMounted } from 'vue';
import { IconFont} from '@nutui/icons-vue-taro';
import recordList from '../../components/record_list'

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '赚钱记录'
});

const state = reactive({
  listCount: [
    {
      imgUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
      title: '收藏小程序收藏小程序收藏小程序收藏小程序',
      desc: '描述信息',
      amount: '0.01'
    },
    {
      imgUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
      title: '收藏小程序收藏小程序收藏小程序收藏小程序',
      desc: '描述信息',
      amount: '0.01'
    },
  ],
})

const handleScroll = () => {
  console.log('滚动加载')
};
onMounted(() => {
})
</script>
<style lang="scss">

.list-item-first {
    margin-top: 16px;
  }
</style>
