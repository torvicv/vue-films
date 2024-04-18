import { createWebHashHistory, createRouter } from "vue-router";
import Playing from "./components/pages/Playing.vue";
import Popular from "./components/pages/Popular.vue";
import Upcoming from "./components/pages/Upcoming.vue";
import Top from "./components/pages/Top.vue";


const routes = [
    { path: '/cartelera', component: Playing},
    { path: '/popular', component: Popular},
    { path: '/proximas', component: Upcoming},
    { path: '/mejores', component: Top},
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;