import React, {Component, PropTypes} from 'react';
import styles from './resources.scss';

const propTypes = {
  headerFields: PropTypes.array,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string
};

class Resources extends Component {
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

Resources.PropTypes = propTypes;

export default Resources;
