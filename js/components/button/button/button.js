import React, {PropTypes} from 'react';

import styles from './button.scss';

/* Interface */
const propTypes = {
  label: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

const defaultProps = {
  className: '',
  active: true
};

/* Implementation */
const Button = props => {
  return <a
    className={`${styles.container} ${props.className} styles.isActive ${props.active ? '' : styles['non-active']}`}
    onClick={ props.active ? props.onClick : '' }>
    {props.label}
  </a>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
