import Home from '../components/Home';
import Post from '../components/Post';
import Comments from '../components/Comment';
import Todos from '../components/Todos';

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/posts',
        element: <Post />,
    },
    {
        path: '/comments',
        element: <Comments />,
    },
    {
        path: '/todos',
        element: <Todos />,
    },
    {
        path: '*',
        element: <Home />,
    },
];
