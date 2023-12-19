<template>
  <div class="index-wp">
    <!-- 收益 -->
    <!-- <nut-cell class="profit-wp">
        <div class="profit">
          <p><span class="desc">累计收益:</span></p>
          <p><nut-price :price="8888.01" position="after" symbol="元" /></p>
        </div>
      </nut-cell> -->
      <nut-cell title="累计收益 8888.01元" ></nut-cell>
    <div class="main-wp">
      <record-list :listCount="state.listCount"></record-list>
    </div>
  </div>
</template>
<script setup lang="ts" name="Record">
import recordList from '@/components/record_list.vue'
import { ref, reactive, onMounted } from 'vue';


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


</script>
<style lang="scss">
// 收益
.profit-wp{
    display: flex;
    // justify-content: center;
    align-items: center;
    .profit {
      flex: 1;
      display: flex;
      // justify-content: center;
      text-align: center;
      .desc {
        font-size: 24px;
        font-weight: 400;
      }
    }
    .record{
      justify-content: center;
      align-items: center;
    }
  }
.list-item-first {
    margin-top: 16px;
  }
</style>
