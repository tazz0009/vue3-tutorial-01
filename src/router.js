import { createRouter, createWebHashHistory } from 'vue-router';
import DcHeros from './components/DcHeros';
import Calendar from './components/Calendar';
import Markdown from './components/Markdown';

const routes = [
    {path: '/dc-heros', component: DcHeros},
    {path: '/calendar', component: Calendar},
    {path: '/markdown', component: Markdown},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;