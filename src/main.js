import { createApp } from 'vue';
import {
  Image as VanImage,
  Loading,
  Swipe,
  SwipeItem,
  ActionSheet,
  Grid,
  GridItem,
  Divider,
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
  .use(Grid)
  .use(GridItem)
  .use(Divider)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .mount('#app');
