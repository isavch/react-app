import React, { Component, PropTypes } from 'react';

import Checkbox from '../../checkbox';

/* Interface */
const propsTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

class Item extends Component {
  constructor(...args) {
    super(...args);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(value) {
    this.props.onChange(this.props.name, value);
  }
  render() {
    return (
      <Checkbox
        checked={this.props.selected}
        label={this.props.label}
        onChange={this.changeHandler}
      />
    );
  }
}

Item.propTypes = propsTypes;

export default Item;
