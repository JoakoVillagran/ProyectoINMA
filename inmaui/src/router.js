import { createRouter, createWebHistory } from 'vue-router';
import Admin from './views/AdminView.vue'
import Bodega from './views/BodegaView.vue'
import Caja from './views/CajaView.vue'


const routes = [
{
path: '/admin',
name: 'Admin',
component: Admin
},
{
    path: '/caja',
    name: 'Caja',
    component: Caja
},
{
    path: '/bodega',
    name: 'Bodega',
    component: Bodega
    }
]

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;