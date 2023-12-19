<template>
  <div>
    <nut-list :listData="props.listCount" @scroll-bottom="handleScroll" >
        <template v-slot="{ item, index }">
          <div class="flex items-center bg-[#f0f2f5] rounded p-2 my-1" :class="{'list-item-first': index === 0 }">
            <nut-avatar size="normal">
              <img
                :src="item.imgUrl"
              />
            </nut-avatar>
            <div class="pl-2">
              <p class="font-size-28 truncate w-460">{{item.title}}</p>
              <p class="font-size-24 truncate w-460 text-[#909ca4]">{{item.desc}}</p>
            </div>
            <div class="text-right">
              <p>{{item.amount}}</p>
              <!-- <nut-button type="info" size="small" >立即领取</nut-button> -->
            </div>
          </div>
        </template>
      </nut-list>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps({
  listCount: {
    type: Array,
    default:() => {
      return []
    }
  }
})

const handleScroll = () => {
  console.log('滚动加载')
};
</script>

<style lang="scss">
.nut-list {
  height: calc(100vh - 690px) !important;
  overflow-y: scroll;
}
.nut-list-phantom {
  height: auto !important;
}
</style>
