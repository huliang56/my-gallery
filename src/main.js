import { createApp } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import './index.css';

createApp(App).use(Swipe).use(SwipeItem).mount('#app');
