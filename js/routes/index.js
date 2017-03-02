import App from './app/components/app';
import testRoute from './test-route';
// import other from './other';
// import users from './users';
// import user from './user';
// import organization from './organization';
// import organizations from './organizations';
// import settings from './settings';

export default {
  childRoutes: [
    {
      path: '/',
      component: App,
      childRoutes: [
        testRoute
        // users,
        // user,
        // organization,
        // organizations,
        // settings
      ]
    }
    // other
  ]
};
