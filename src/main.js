import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../node_modules/flowbite-vue/dist/index.css';
import router from './router.js';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
