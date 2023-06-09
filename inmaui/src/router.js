import { createRouter, createWebHistory } from 'vue-router';
import Admin from './views/AdminView.vue'


const routes = [
{
path: '/admin',
name: 'Admin',
component: Admin
},
]

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;