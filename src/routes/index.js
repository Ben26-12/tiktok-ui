import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    {
        path: '/',
        catagoryName: 'Home',
        component: Home,
    },
    {
        path: '/following',
        catagoryName: 'Following',
        component: Following,
    },
    {
        path: '/:nickname',
        catagoryName: 'Profile',
        component: Profile,
    },
    {
        path: '/upload',
        catagoryName: 'Upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/Search',
        catagoryName: 'Search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
