export default {
  path: 'organizations/:id',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/organization').default), 'organization');
  }
};
