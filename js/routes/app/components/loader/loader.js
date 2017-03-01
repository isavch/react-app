import React from 'react';
import Spinner from 'components/spinner';

import styles from './loader.scss';

export default () => {
  return (
    <div className={styles.container}>
       <Spinner className={styles.progress}/>
    </div>
  );
};
