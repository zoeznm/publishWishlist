import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/Main.vue';
import Top from './views/Top.vue';
import Bottom from './views/Bottom.vue';

const routes = [
  {
    path: '/',
    name: 'MainComponent',
    component: Main
  },
  {
    path: '/top',
    name: 'TopComponent',
    component: Top
  },
  {
    path: '/bottom',
    name: 'BottomComponent',
    component: Bottom
  },
  // 다른 라우트 추가 가능
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
