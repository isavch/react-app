import React from 'react';
import MainHeader from 'components/mainHeader';

import styles from './other.scss';

export default props => {
  return (
    <div>
      <MainHeader/>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  );
};
