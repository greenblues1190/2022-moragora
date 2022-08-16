import { Navigate, useRoutes } from 'react-router-dom';
import MeetingCreatePage from 'pages/MeetingCreatePage';
import MeetingListPage from 'pages/MeetingListPage';
import MeetingPage from 'pages/MeetingPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Auth from './Auth';
import SettingsPage from 'pages/SettingsPage';
import NotFoundPage from 'pages/NotFoundPage';
import EventCreatePage from 'pages/EventCreatePage';
import MeetingDetailPage from 'pages/MeetingDetailPage';
import UserConfigPage from 'pages/UserConfigPage';
import PasswordUpdatePage from 'pages/PasswordUpdatePage';
import UnregisterPage from 'pages/UnregisterPage';

const Router = () => {
  return useRoutes([
    { path: '/', element: <Navigate to="/meeting" replace /> },
    {
      element: <Auth shouldLogin={false} />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
      ],
    },
    {
      element: <Auth shouldLogin={true} />,
      children: [
        {
          path: 'meeting',
          children: [
            { path: '', element: <MeetingListPage /> },
            {
              path: ':id',
              element: <MeetingDetailPage />,
              children: [
                { path: '', element: <Navigate to="coffee-stack" replace /> },
                { path: 'coffee-stack', element: <MeetingPage /> },
                { path: 'event', element: <EventCreatePage /> },
                { path: 'meeting-config', element: <div>config</div> },
                { path: '*', element: <NotFoundPage /> },
              ],
            },
            { path: ':id/config', element: <EventCreatePage /> },
            { path: 'create', element: <MeetingCreatePage /> },
          ],
        },
        {
          path: 'settings',
          children: [
            { path: '', element: <SettingsPage /> },
            {
              path: 'user-config',
              children: [
                { path: '', element: <UserConfigPage /> },
                { path: 'password', element: <PasswordUpdatePage /> },
                { path: 'unregister', element: <UnregisterPage /> },
              ],
            },
          ],
        },
      ],
    },

    { path: '*', element: <NotFoundPage /> },
  ]);
};

export default Router;
