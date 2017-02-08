import React, { Component, PropTypes } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import gridStyles from '../grid.scss';
import styles from './sort.scss';

/* Interface */
const propTypes = {
  field: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['ASC', 'DESC']),
  sortField: PropTypes.string,
  isActive: PropTypes.bool
};

/* Default */
const defaultProps = {
  direction: null
};

class SortControl extends Component {
  constructor(...args) {
    super(...args);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    const { isActive, field, sortField, direction } = this.props;
    let newDirection = direction === 'ASC' ? 'DESC' : 'ASC';

    if (!isActive) {
      newDirection = 'ASC';
    }

    this.props.onSort({
      'sort_fields': sortField || field,
      'sort_direction': newDirection
    });
  }
  render() {
    const { text, isActive, direction } = this.props;
    const icon = direction === 'DESC' && isActive ? 'arrow_downward' : 'arrow_upward';

    return (
      <span
        className={styles.sort}
        onClick={this.clickHandler}>
        {text}
        <FontIcon
          value={icon}
          className={`${gridStyles.icon} ${isActive ? gridStyles.activeIcon : ''}`}
        />
      </span>
    );
  }
}

SortControl.propTypes = propTypes;
SortControl.defaultProps = defaultProps;

export default SortControl;
