import React, { PropTypes } from 'react';

import styles from './spinner.scss';

/* Interface */
const propTypes = {
  active: PropTypes.bool
};

const Spinner = ({active}) => {
  return (
    <div className={`${styles.container} ${active ? styles.visible : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

Spinner.propTypes = propTypes;

export default Spinner;
