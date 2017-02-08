import React, {Component} from 'react';
import styles from './users.scss';

class Users extends Component {
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

export default Users;
