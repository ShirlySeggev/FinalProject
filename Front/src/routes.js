import { Home } from './pages/Home.jsx';
import { TrelloApp } from './pages/TrelloApp.jsx';
import { Boards } from './pages/Boards.jsx';
import { TaskDetails } from './cmps/task/TaskDetails';

export const routes = [
    {
        
        path: '/board/:boardId',
        component: TrelloApp,
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