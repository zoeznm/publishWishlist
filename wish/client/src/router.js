// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Top from './views/Top.vue'; // top.html이 아니라 top.vue로 가져와야 합니다.

const routes = [
  {
    path: '/',
    name: 'TopComponent',
    component: Top
  },
  // 다른 라우트 추가
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
