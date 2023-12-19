<template>
  <div class="index-wp">
    <!-- swiper -->
    <nut-swiper :init-page="state.swiperPage" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <!-- 间距 -->
    <!-- <nut-space ></nut-space> -->
    <div class="main-wp">
        <!-- 收益 -->
        <nut-cell class="profit-wp">
          <div class="profit">
            <p><span class="desc">今日收益</span><nut-price :price="8888.01" position="after" symbol="元" /></p>
          </div>
          <div class="profit">
            <p><span class="desc">累计收益</span><nut-price :price="8888.01" position="after" symbol="元" /></p>
          </div>
          <div class="record"><nut-button size="mini" type="primary" @click="handleRecord">赚钱记录</nut-button></div>
        </nut-cell>
        <!-- 通知 -->
        <nut-noticebar
            text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
            :background="`rgba(251, 248, 220, 1)`"
            :color="`#D9500B`"
            class="noticebar-wp"
          >
            <template #left-icon>
              <IconFont name="circle-close"></IconFont>
          </template>
          <template #right-icon>
              <p class="detail">查看详情 <IconFont name="rect-right"></IconFont></p>
          </template>
        </nut-noticebar>

      <nut-tabs v-model="state.tabVal" class="list-scroll">
        <nut-tab-pane title="每日任务" pane-key="0" class="!p-0">
          <record-list :listCount="state.listCount"></record-list>
        </nut-tab-pane>
        <nut-tab-pane title="新人任务" pane-key="1"> Tab 2 </nut-tab-pane>
      </nut-tabs>
    </div>
  </div>
</template>
<script setup lang="ts" name="Index">
import recordList from '@/components/record_list.vue'
import { ref, reactive, onMounted } from 'vue';
import { IconFont} from '@nutui/icons-vue-taro';
import Taro, { Component } from '@tarojs/taro'

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '七分钱'
});

const state = reactive({
  tabVal: '0', // tab切换
  swiperPage: 2, // swiper当前项
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

// 跳转赚钱记录
const handleRecord = () => {
  // 传入参数 id=2&type=test
  Taro.navigateTo({
    url: '/pages/record/index'
  })
}
</script>
<style lang="scss">
.nut-swiper-item {
  line-height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}

.index-wp{

  .noticebar-wp {
    margin-bottom: 15px;
    .nut-noticebar__page{
      padding-left: 0px;
      padding-right: 0px;
    }

  }
  .main-wp {
    background:#fff;
    border-radius: 18px 18px 0px 0px;
    position: relative;
    z-index: 1;
    top: -30px;
    padding: 15px;
    // display: flex; // 关键， flex布局
    // flex-direction: column; // 关键，三块主题column摆放。
    // height: calc(100vh - 270px); //
  }
  .detail{
    display: flex;
    align-items:center;
    justify-content: center;
  }

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
    }
    .record{
      justify-content: center;
      align-items: center;
    }
  }

  .list-item-first {
    margin-top: 16px;
  }
}
</style>
