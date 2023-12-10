<template>
  <div class="index-wp pt-10">
    <!-- swiper -->
    <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
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
        <div class="record"><nut-button size="mini" type="primary">迷你按钮</nut-button></div>
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
      <nut-tabs v-model="value" style="margin-top: 10px;">
        <nut-tab-pane title="每日任务" pane-key="0">
          <div>
            <img src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" />

          </div>
          <div>test11111</div>
          <div>test11111</div>
          <div>test11111</div>
          <div>test11111</div>
          <div>test11111</div>
          <div>test11111</div>
        </nut-tab-pane>
        <nut-tab-pane title="新人任务" pane-key="1"> Tab 2 </nut-tab-pane>
      </nut-tabs>
    </div>
  </div>
</template>
<script setup lang="ts" name="Index">
import { ref } from 'vue';
import { IconFont} from '@nutui/icons-vue-taro';
/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '闲钱宝'
});
const value = ref('0');
const page = ref(2);
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
}
</style>
