import { createWebHashHistory, createRouter } from "vue-router";
import Playing from "./components/pages/Playing.vue";
import Popular from "./components/pages/Popular.vue";
import Upcoming from "./components/pages/Upcoming.vue";
import Top from "./components/pages/Top.vue";
import Today from "./components/pages-tv/Today.vue";
import Air from "./components/pages-tv/Air.vue";
import Populares from "./components/pages-tv/Popular.vue";


const routes = [
    { path: '/cartelera', component: Playing},
    { path: '/popular', component: Popular},
    { path: '/proximas', component: Upcoming},
    { path: '/mejores', component: Top},
    { path: '/hoy', component: Today},
    { path: '/en-el-aire', component: Air},
    { path: '/populares', component: Populares},
    { path: '/mejores-series', component: Populares},
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;