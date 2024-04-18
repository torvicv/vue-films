import { createWebHashHistory, createRouter } from "vue-router";
import Playing from "./components/pages/Playing.vue";
// import Popular from "./components/pages/Popular";


const routes = [
    { path: '/cartelera', component: Playing},
    //{ path: '/popular', component: Popular},
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;