import React, { PropTypes } from 'react';

import styles from './field.scss';

/* Interface */
const propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isEditable: PropTypes.bool,
  disabled: PropTypes.bool,
  isHidden: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onFieldChange: PropTypes.func
};

/* Defaults */
const defaultProps = {
  type: 'text',
  className: '',
  labelClassName: ''
};

/* Implementation */
const Field = props => {
  const {
    label,
    value,
    placeholder,
    children,
    className,
    isEditable,
    disabled,
    isHidden,
    type,
    onClick,
    onFieldChange,
    labelClassName,
    inputClassName
  } = props;
  let content = <span className={styles.value}>{value}</span>;

  if (isHidden) {
    return null;
  }

  if (isEditable || disabled) {
    content = <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`${styles.input} ${inputClassName}`}
      disabled={disabled}
      onChange={event => onFieldChange(event.target.value)}
      onClick={onClick}
    />;
  }


  return <div className={`${className} ${styles.container}`}>
    <sup className={`${labelClassName} ${styles.label}`}>
      {label}
    </sup>
    {content}
    {children}
  </div>;
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
