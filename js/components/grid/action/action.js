import React, { Component, PropTypes } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

/* Interface */
const propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

class Action extends Component {
  constructor(...args) {
    super(...args);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    e.stopPropagation();
    this.props.action(this.props.item);
  }
  render() {
    return (
      <FontIcon
        value={this.props.icon}
        onClick={this.clickHandler}
      />
    );
  }
}

Action.propTypes = propTypes;

export default Action;
