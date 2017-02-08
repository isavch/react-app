import React, { PropTypes } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import styles from './delete.scss';

/* Interface */
const propTypes = {
  onClick: PropTypes.func.isRequired
};

const Delete = ({onClick}) => {
  return (
    <span
      className={styles.container}
      onClick={onClick}
    >
      <FontIcon
        className={styles.icon}
        value='remove'
      />
    </span>
  );
};

Delete.propTypes = propTypes;

export default Delete;
