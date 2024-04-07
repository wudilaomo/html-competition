import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router';

import Vuesax from 'vuesax-alpha';
import 'vuesax-alpha/theme-chalk/index.css';
import 'vuesax-alpha/theme-chalk/dark/css-vars.css';
import * as VuesaxAlphaIconsVue from '@vuesax-alpha/icons-vue';

import './style.css';

import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus)
    .use(router)
    .use(Vuesax, {
        colors: {
            primary: 'rgb(36, 159, 253)',
            success: 'rgb(23, 201, 100)',
            danger: 'rgb(242, 19, 93)',
            warning: 'rgb(255, 130, 0)',
            dark: 'rgb(36, 33, 69)'
        }
    })
    .mount('#app');

for (const [key, component] of Object.entries(VuesaxAlphaIconsVue)) {
    app.component(`VsIcon${key}`, component);
}
