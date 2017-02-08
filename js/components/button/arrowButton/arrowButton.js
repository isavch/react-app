import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './arrowButton.scss';

/* Interface */
const propTypes = {
  label: PropTypes.any,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

/* Implementation */
const ArrowButton = ({url, label, onClick}) => {
  return <div className={styles.container}>
    <Link to={url} className={styles.link} onClick={onClick}>
      {label}
    </Link>
    <i className={styles.arrow} />
  </div>;
};

ArrowButton.propTypes = propTypes;

export default ArrowButton;
