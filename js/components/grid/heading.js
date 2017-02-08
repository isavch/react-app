import React from 'react';

import styles from './grid.scss';

const GridHeading = ({children}) => {
  return (
    <th className={`${styles.heading} ${styles.cell}`}>
      {children}
    </th>
  );
};

export default GridHeading;
