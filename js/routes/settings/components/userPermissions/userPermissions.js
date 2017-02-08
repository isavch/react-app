import React, { Component } from 'react';

import styles from './userPermissions.scss';

/** Implementation */
class UserPermissions extends Component {
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

export default UserPermissions;
