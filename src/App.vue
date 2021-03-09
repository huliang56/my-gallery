<template>
  <SwipeHeader />
  <MainList />
  <van-action-sheet
    v-model:show="show"
    title="标题"
    :round="false"
    close-icon="arrow-left"
    close-on-popstate
  >
    <ContentTab />
  </van-action-sheet>
</template>

<script>
import { ref, provide, readonly } from 'vue';
import CONFIG from './config.json';
import SwipeHeader from './components/SwipeHeader.vue';
import MainList from './components/MainList.vue';
import ContentTab from './components/ContentTab.vue';

export default {
  components: { SwipeHeader, MainList, ContentTab },
  setup() {
    const show = ref(true);
    provide('CONFIG', readonly(CONFIG));

    return {
      show,
    };
  },
};
</script>

<style lang="scss">
.van-action-sheet {
  max-height: 100vh;
  &__close {
    left: 0;
    right: initial;
  }
}
</style>
