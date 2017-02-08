import React, { Component, PropTypes } from 'react';

import Dropdown from '../dropdown';
import RadioGroup from '../radioGroup';
import Input from '../input';

/*  Interface */
const propTypes = {
  type: PropTypes.oneOf(['text', 'switch', 'dropdown', 'password', 'time']),
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  field: PropTypes.string,
  edit: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  theme: PropTypes.object,
  error: PropTypes.string
};

/* Default */
const defaultProps = {
  type: 'text',
  edit: false,
  error: '',
  value: ''
};

class EditableItem extends Component {
  constructor(...args) {
    super(...args);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(value) {
    const { edit, field } = this.props;

    if (edit) {
      this.props.onChange(value, field);
    }
  }
  renderControl() {
    const {
      type,
      error,
      theme,
      label,
      value,
      edit,
      options,
      required,
      name,
      min,
      max,
      maxLength
    } = this.props;

    if (type === 'dropdown') {
      return <Dropdown
        theme={theme}
        label={label}
        source={options}
        disabled={!edit}
        value={value}
        onChange={this.changeHandler}
        required={required}
        error={error}
      />;
    }

    if (type === 'switch') {
      return <RadioGroup
        theme={theme}
        label={label}
        disabled={!edit}
        name={name}
        value={value}
        onChange={this.changeHandler}
        error={error}
        required={required}
        options={options}
      />;
    }

    return <Input
      type={type}
      theme={theme}
      value={value}
      label={label}
      disabled={!edit}
      onChange={this.changeHandler}
      required={required}
      maxLength={maxLength}
      min={min}
      max={max}
      error={error}
    />;
  }
  render() {
    return (
      <div>
        {this.renderControl()}
      </div>
    );
  }
}

EditableItem.propTypes = propTypes;
EditableItem.defaultProps = defaultProps;

export default EditableItem;
