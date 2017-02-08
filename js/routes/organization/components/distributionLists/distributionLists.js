import React, {Component} from 'react';

import styles from './distributionLists.scss';

class DistributionLists extends Component {
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

export default DistributionLists;
