export default {
  path: '/notFound',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/notFound').default), 'notFound');
  }
};
