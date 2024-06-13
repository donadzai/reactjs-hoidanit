import Homepage from '~/pages/Home';
import UserPage from '~/pages/UserList';
import Login from '~/pages/Login';
import ManageUsers from '~/pages/ManageUsers';
import UserTrashListPage from '~/pages/UserTrashList';
import HeaderOnly from '~/conponents/Layouts/HeaderOnly';
import DefaultLayout from '~/conponents/Layouts/DefaultLayout';
import ManageLayout from '~/conponents/Layouts/ManageLayout';
import User from '~/pages/ManageUsers/User';

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
    {
        path: '/manageUsers',
        element: ManageUsers,
        layout: ManageLayout,
    },
    {
        path: '/manageUsers/user',
        element: User,
        layout: ManageLayout,
    },
];

export { publicRoutes };
