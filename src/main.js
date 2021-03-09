import { createApp } from 'vue';
import { Swipe, SwipeItem, ActionSheet, Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(Swipe)
  .use(SwipeItem)
  .use(ActionSheet)
  .use(Tab)
  .use(Tabs)
  .mount('#app');
