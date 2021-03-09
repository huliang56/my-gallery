<template>
  <van-swipe class="swipe-header" :autoplay="3000">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-1.jpg',
    ];
    return { images };
  },
};
</script>
<style lang="scss">
.swipe-header .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
</style>
