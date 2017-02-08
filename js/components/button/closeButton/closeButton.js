import React from 'react';
import { Link } from 'react-router';

import 'images/close.png';
import icons from 'styles/icons.scss';
import styles from './close.scss';

/* Implementation */
const CloseButtton = ({ url }) => {
  return <Link
    to={url}
    className={`${icons.close} ${styles.link}`}
  />;
};

export default CloseButtton;
