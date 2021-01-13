// 也可以配置 路由，但是页面不好看了
import Search from './Search';
import App from './App';

let routes = [
    {
        path: '/',
        component: App,
        exact: true,
    },
    {
        path: '/search',
        component: Search,
    }
];

export default routes;