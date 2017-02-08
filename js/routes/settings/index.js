export default {
  path: 'settings',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/settings').default), 'settings');
  }
};
