import React from 'react';

import styles from './primary.scss';

export default props => {
  return (
    <a href="#" className={styles.container}>
      {props.label}
    </a>
  );
};
