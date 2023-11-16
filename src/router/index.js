import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Main.vue'),
        },

        {
            path: '/modify',
            name: 'modify',

            component: () => import('@/views/ModifyView.vue'),
        },

        {
            path: '/conqueredmountain',
            name: 'conqueredmountain',

            component: () => import('@/views/ConqueredMountain.vue'),
        },

        {
            path: '/board',
            name: 'board',

            component: () => import('../views/Board.vue'),
        },
        {
            path: '/plan',
            name: 'plan',

            component: () => import('../views/Plan.vue'),
        },
        {
            path: '/mypage',
            name: 'mypage',

            component: () => import('../views/MyPage.vue'),
        },
        {
            path: '/boardwrite',
            name: 'boardwrite',

            component: () => import('@/views/BoardWrite.vue'),
        },
        {
            path: '/login',
            name: 'login',

            component: () => import('../views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',

            component: () => import('../views/Regist.vue'),
        },
        {
            path: '/search',
            name: 'search',

            component: () => import('../views/Search.vue'),
        },

        {
            path: '/login',
            name: 'login',

            component: () => import('../views/Login.vue'),
        },

        {
            path: '/mountainview',
            name: 'mountainview',

            component: () => import('@/views/MountainView.vue'),
        },

        {
            path: '/regist',
            name: 'regist',

            component: () => import('../views/Regist.vue'),
        },
    ],
});

export default router;
