import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        component: () => import('../pages/demo/demo.vue'),
        meta: {
            demo: true
        }
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../pages/demo/demo.vue'),
        meta: {
            demo: true
        }
    },
    {
        path: '/manager',
        name: 'manager',
        component: () => import('../pages/demo/manager.vue'),
        redirect: '/manager/manager_table',
        meta: {
            manager: true
        }
    },
    {
        path: '/manager/manager_table',
        name: 'manager_table',
        component: () => import('../pages/demo/manager_table/manager_table.vue'),
        meta: {
            manager: true
        }
    },
    {
        path: '/manager/manager_table2',
        name: 'manager_table2',
        component: () => import('../pages/demo/manager_table/manager_table2.vue'),
        meta: {
            manager: true
        }
    },
    {
        path: '/manager/GPT',
        name: 'GPT',
        component: () => import('../pages/demo/manager_table/GptComponent.vue'),
        meta: {
            gpt: true
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../pages/demo/SignIn/signIn.vue'),
        meta: {
            user: true
        }
    },
    {
        path: '/api',
        name: 'api',
        component: () => import('../pages/demo/manager_table/Apisetting.vue'),
        meta: {
            manager: true
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../pages/demo/search/search.vue'),
        meta: {
            search: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
