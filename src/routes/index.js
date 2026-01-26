import routesConfig from '../config/routes.js';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    {
        path: routesConfig.home,
        catagoryName: 'Home',
        component: Home,
    },
    {
        path: routesConfig.following,
        catagoryName: 'Following',
        component: Following,
    },
    {
        path: routesConfig.profile,
        catagoryName: 'Profile',
        component: Profile,
    },
    {
        path: routesConfig.upload,
        catagoryName: 'Upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        catagoryName: 'Search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
