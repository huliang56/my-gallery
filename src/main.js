import { createApp } from 'vue';
import {
  Image as VanImage,
  Loading,
  Swipe,
  SwipeItem,
  ActionSheet,
  Grid,
  GridItem,
  Tabs,
  Tab,
  Lazyload,
} from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(VanImage)
  .use(Lazyload)
  .use(Loading)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(ActionSheet)
  .use(Tabs)
  .use(Tab)
  .mount('#app');
