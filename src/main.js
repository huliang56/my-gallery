import { createApp } from 'vue';
import {
  Image as VanImage,
  Loading,
  Swipe,
  SwipeItem,
  ActionSheet,
  Tab,
  Tabs,
  Lazyload,
} from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(VanImage)
  .use(Loading)
  .use(Swipe)
  .use(SwipeItem)
  .use(ActionSheet)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .mount('#app');
