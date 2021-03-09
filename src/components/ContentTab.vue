<template>
  <van-tabs ref="tabs" v-model:active="active" sticky swipeable animated>
    <van-tab v-for="group of CONFIG" :key="group.title" :title="group.title">
      <div class="masonry">
        <div
          class="item"
          v-for="(item, i) of group.images"
          :key="item.url"
          :style="{ paddingBottom: item.ratio }"
        >
          <van-image
            :src="item.url"
            lazy-load
            @click="previewImage(group, i)"
          />
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import { ref, inject } from 'vue';
import { ImagePreview } from 'vant';
export default {
  setup() {
    const active = ref(0);
    const CONFIG = inject('CONFIG');

    window.cacheImgs = (el) => {
      const imgs = Array.from(el.querySelectorAll('img'));
      return imgs.map((i) => ({
        url: i.src,
        ratio: ((i.naturalHeight / i.naturalWidth) * 100).toFixed(3) + '%',
      }));
    };

    return {
      active,
      CONFIG,
    };
  },
  methods: {
    previewImage(group, startPosition) {
      const images = group.images.map((i) => i.url);
      ImagePreview({ images, startPosition });
    },
  },
};
</script>

<style lang="scss">
.masonry {
  margin: 15px;
  columns: 2;
  column-gap: 10px;
  .item {
    height: 0;
    margin-bottom: 10px;
    background-color: #f7f8fa;
  }
  .van-image {
    display: block;
  }
  img {
    border-radius: 5px;
  }
}
</style>
