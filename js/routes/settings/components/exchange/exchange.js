import React, { Component } from 'react';
import styles from './exchange.scss';

/** Implementation */
class Exchange extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <div className={ styles.container }></div>
    );
  }
}

export default Exchange;
