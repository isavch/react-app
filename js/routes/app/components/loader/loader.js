import React from 'react';
import Progress from 'components/progress';

import styles from './loader.scss';

export default () => {
  return (
    <div className={styles.container}>
      <Progress className={styles.progress} size={100} />
    </div>
  );
};
