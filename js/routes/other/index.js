import notFound from './notFound';
import notAuthorized from './notAuthorized';
import notAuthenticated from './notAuthenticated';

export default {
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./other').default), 'other');
  },
  childRoutes: [
    notFound,
    notAuthorized,
    notAuthenticated,
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], require => cb(null, require('./notFound/components/notFound').default), 'notFound');
      }
    }
  ]
};
