import React, { PropTypes } from 'react';

import styles from './checkbox.scss';

/** Interface */
const propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string
};

/** Defaults */
const defaultProps = {
  checked: false,
  className: ''
};

/** Implementation */
const CheckBox = ({checked, className, onChange, label}) => {
  return <div className={className}>
    <i
      className={`${styles.container} ${checked ? styles.isChecked : ''}`}
      onClick={() => onChange(!checked)}
    />
    {label ? <span className={styles.label}>{label}</span> : null}
  </div>;
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
