import { Home } from './pages/Home.jsx';
import { WePlanApp } from './pages/WePlanApp.jsx';
import { Boards } from './pages/Boards.jsx';

export const routes = [
    {
        
        path: '/board/:boardId',
        component: WePlanApp,
    },
    {
        path: '/board',
        component: Boards,
    },
    {
        path: '/',
        component: Home,
    },

]