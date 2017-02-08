import React from 'react';
import { Link } from 'react-router';

import 'images/arrow-left.png';
import styles from './back.scss';

/* Implementation */
const BackButton = ({url}) => {
  return <Link
    to={url}
    className={styles.link}
  />;
};

export default BackButton;
