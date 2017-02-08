export default {
  path: '/notAuthorized',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/notAuthorized').default), 'notAuthorized');
  }
};
