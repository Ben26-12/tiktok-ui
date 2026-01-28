import config from '~/config';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    {
        path: config.routesConfig.home,
        catagoryName: 'Home',
        component: Home,
    },
    {
        path: config.routesConfig.following,
        catagoryName: 'Following',
        component: Following,
    },
    {
        path: config.routesConfig.profile,
        catagoryName: 'Profile',
        component: Profile,
    },
    {
        path: config.routesConfig.upload,
        catagoryName: 'Upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routesConfig.search,
        catagoryName: 'Search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
