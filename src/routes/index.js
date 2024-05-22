import Homepage from '~/pages/Home';
import UserPage from '~/pages/UserList';
import Login from '~/pages/Login';
import UserTrashListPage from '~/pages/UserTrashList';
import HeaderOnly from '~/conponents/Layouts/HeaderOnly';
import DefaultLayout from '~/conponents/Layouts/DefaultLayout';

const publicRoutes = [
    {
        path: '/',
        element: Homepage,
        layout: DefaultLayout,
    },
    {
        path: '/userList',
        element: UserPage,
        layout: HeaderOnly,
    },
    {
        path: '/login',
        element: Login,
        layout: null,
    },
    {
        path: '/userTrashList',
        element: UserTrashListPage,
        layout: HeaderOnly,
    },
];

export { publicRoutes };
