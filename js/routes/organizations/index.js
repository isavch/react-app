export default {
  path: 'organizations',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/organizations').default), 'organizations');
  }
};
