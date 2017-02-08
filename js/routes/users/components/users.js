import React, { Component } from 'react';

import { permissions, protectRoute } from '../../app/containers/auth';

class Users extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default protectRoute(Users, permissions.ReadUsers);
