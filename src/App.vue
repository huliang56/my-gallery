<template>
  <SwipeHeader />

  <van-grid class="main-list" :border="false" :column-num="2" :gutter="15">
    <van-grid-item
      v-for="(group, name) of CONFIG"
      :key="group.title"
      @click="showTabs(name)"
    >
      <van-image :src="group.images[0].url" />
      <div>{{ group.title }}</div>
    </van-grid-item>
  </van-grid>

  <van-action-sheet
    v-model:show="show"
    title="胡亮&余晔妮"
    :round="false"
    close-icon="arrow-left"
    close-on-popstate
  >
    <van-tabs v-model:active="active" sticky swipeable animated>
      <van-tab
        v-for="(group, name) of CONFIG"
        :key="group.title"
        :name="name"
        :title="group.title"
      >
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
              @click="previewImage(name, i)"
            />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </van-action-sheet>
</template>

<script>
import { ref, readonly } from 'vue';
import { ImagePreview } from 'vant';
import CONFIG from './config.json';
import SwipeHeader from './components/SwipeHeader.vue';

export default {
  components: { SwipeHeader },
  setup() {
    const show = ref(false);
    const active = ref(0);

    window.cacheImgs = (el) => {
      const imgs = Array.from(el.querySelectorAll('img'));
      return imgs.map((i) => ({
        url: i.src,
        ratio: ((i.naturalHeight / i.naturalWidth) * 100).toFixed(3) + '%',
      }));
    };

    const onpopstate = () => {
      if (show.value) {
        show.value = false;
        return false;
      }
    };
    window.addEventListener('popstate', onpopstate, false);

    const showTabs = (name) => {
      active.value = name;
      show.value = true;
      history.pushState('#' + name, name);
    };

    const previewImage = (name, startPosition) => {
      const images = CONFIG[name].images.map((i) => i.url);
      ImagePreview({ images, startPosition });
    };

    return {
      CONFIG: readonly(CONFIG),
      show,
      active,
      showTabs,
      previewImage,
    };
  },
};
</script>

<style lang="scss">
.main-list {
  margin: 20px 0;
  color: #333;
  letter-spacing: 0.5px;
  .van-grid-item__content {
    padding: 0;
    background-color: transparent;
  }
  .van-image {
    min-height: 110px;
    img {
      border-radius: 5px;
    }
  }
}

.van-action-sheet {
  max-height: 100vh;
  &__close {
    left: 0;
    right: initial;
  }
}

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
