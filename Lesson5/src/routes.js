import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';
import Users from './pages/Users';
import Posts from './pages/Posts';
import User from './pages/User';
import Post from './pages/Post';
import Comments from "./pages/Comments";
import Comment from "./pages/Comment";


export default [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/posts',
        component: Posts,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        exact: true
    },
    {
        path: '/layout',
        component: Layout,
        exact: true
    },
    {
        path: '*',
        component: PageNotFound,
        exact: true
    }
]