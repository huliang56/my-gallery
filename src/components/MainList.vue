<template>
  <van-grid class="main-list" :border="false" :column-num="2" :gutter="15">
    <van-grid-item v-for="group of CONFIG" :key="group.title">
      <van-image :src="group.images[0].url" />
      <div>{{ group.title }}</div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const CONFIG = inject('CONFIG');
    return { CONFIG };
  },
};
</script>

<style lang="scss">
.main-list {
  margin: 20px 0;
  .van-grid-item__content {
    padding: 0;
    background-color: transparent;
  }
  img {
    border-radius: 5px;
  }
}
</style>
