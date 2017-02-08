import React, { Component } from 'react';
import { permissions, protectRoute } from '../../app/containers/auth';
import styles from './user.scss';


class UserDetails extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}></div>
    );
  }
}

export default protectRoute(UserDetails, permissions.ReadUsers);
