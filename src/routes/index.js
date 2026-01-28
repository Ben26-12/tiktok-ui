import config from '~/config';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home,
    },
    {
        path: config.routesConfig.following,
        component: Following,
    },
    {
        path: config.routesConfig.profile,
        component: Profile,
    },
    {
        path: config.routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routesConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routesConfig.live,
        component: Live,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
