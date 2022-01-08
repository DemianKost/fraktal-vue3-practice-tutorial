import { createWebHistory, createRouter } from "vue-router";
import PlanetsList from '../components/PlanetsList.vue';
import PlanetView from '../components/PlanetView.vue';

const routes = [
    {
        path: '/',
        name: 'PlanetsList',
        component: PlanetsList
    },
    {
        path: '/view/:id',
        name: 'PlanetView',
        component: PlanetView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;