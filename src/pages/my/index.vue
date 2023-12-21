<template>
  <view class="index">
    <!--pages/user/user.wxml-->
    <view class='container'>
      <!-- 用户信息 -->
      <view class='userinfo'>
        <view class='userinfo-avatar'>
          <nut-avatar size="normal">
              <img
                :src="state.imgUrl"
              />
            </nut-avatar>
        </view>
        <view class='userinfo-name'>Hadwin</view>
          <!-- <open-data type="userNickName"></open-data> -->

      </view>
      <!-- <view class='binding-phone'>
        <text class='show-tip'>绑定手机号后可查看订单和领取优惠券，</text>
        <text class='gotobinding' bindtap='toBindingPhone'>去绑定</text>
      </view> -->
      <!-- end 用户信息 -->

      <view class='list-cont'>

        <!-- 订单状态 -->
        <view class='total-order'>
          <view class='order-tit'>
            <text style='font-weight:bold'>我的订单</text>
            <view class='checkmore'  data-sts="0">
              <text>查看全部 </text>
              <text class='arrowhead'></text>
            </view>
          </view>
          <view class='procedure'>
            <view class='items'  data-sts="1">
              <img :src="state.imgUrl" />
              <text>待支付</text>
              <!-- <text class='num-badge' >{{orderAmount.unPay}}</text> -->
            </view>
            <view class='items'  data-sts="2">
              <img :src="state.imgUrl" />
              <text>待发货</text>
              <!-- <text class='num-badge'>{{orderAmount.payed}}</text> -->
            </view>
            <view class='items'  data-sts="3">
              <img :src="state.imgUrl" />
              <text>待收货</text>
              <!-- <text class='num-badge' >{{orderAmount.consignment}}</text> -->
            </view>
            <view class='items'  data-sts="5">
              <img :src="state.imgUrl" />
              <text>已完成</text>
            </view>
          </view>
        </view>
        <!--end 订单状态 -->

        <view class="prod-col">
          <view class="col-item" >
            <view class="num">6</view>
            <view class="tit">我的收藏</view>
          </view>
          <view class="col-item">
            <view class="num">5</view>
            <view class="tit">我的消息</view>
          </view>
          <view class="col-item">
            <view class="num">3</view>
            <view class="tit">我的足迹</view>
          </view>
        </view>

        <view class='my-menu'>
          <view class='memu-item' >
            <view class="i-name">
              <img :src="state.imgUrl" />
              <text>分销中心</text>
            </view>
            <view class='arrowhead'></view>
          </view>
          <view class='memu-item' >
            <view class="i-name">
              <img :src="state.imgUrl" />
              <text>领券中心</text>
            </view>
            <view class='arrowhead'></view>
          </view>
          <view class='memu-item' >
            <view class="i-name">
              <img :src="state.imgUrl" />
              <text>我的优惠券</text>
            </view>
            <view class='arrowhead'></view>
          </view>
          <view class='memu-item' >
            <view class="i-name">
              <img :src="state.imgUrl" />
              <text>收货地址</text>
            </view>
            <view class='arrowhead'></view>
          </view>
        </view>
        <!--end 列表项 -->
      </view>

      <view class="log-out"  >
        <view class="log-out-n">
          <text>退出登录</text>
        </view>
      </view>

    </view>
    <!-- <tab-bar :active="1"></tab-bar> -->
  </view>
</template>

<script setup lang="ts" name="My">
// import tabBar from '@/components/tabbar.vue'
import {reactive} from 'vue'
import './index.scss'


const state = reactive({
  imgUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
})

</script>
