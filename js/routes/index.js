import App from './app/components/app';
import other from './other';
import users from './users';
import user from './user';
import organization from './organization';
import organizations from './organizations';
import settings from './settings';

export default {
  childRoutes: [
    {
      path: '/',
      component: App,
      indexRoute: {
        onEnter: (nextState, replace) => replace('/organizations')
      },
      childRoutes: [
        users,
        user,
        organization,
        organizations,
        settings
      ]
    },
    other
  ]
};
