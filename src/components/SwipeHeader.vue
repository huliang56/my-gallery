<template>
  <van-swipe class="swipe-header" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  setup() {
    const images = [
      'https://t7.baidu.com/it/u=3713375227,571533122&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=774679999,2679830962&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=1723458001,3671360301&fm=193&f=GIF',
    ];
    return { images };
  },
};
</script>

<style lang="scss">
.swipe-header {
  min-height: 200px;
  .van-swipe-item img {
    display: block;
    width: 100%;
  }
}
</style>
