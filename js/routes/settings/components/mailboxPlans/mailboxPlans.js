import React, { Component } from 'react';
import styles from './mailboxPlans.scss';

/** Implementation */
class MailboxPlans extends Component {
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

export default MailboxPlans;
