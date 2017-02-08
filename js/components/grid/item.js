import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { get, has } from 'lodash';

import Switch from '../switch';
import Delete from './delete';
import Action from './action';

import styles from './grid.scss';

/* Interface */
const propTypes = {
  item: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  even: PropTypes.bool,
  actions: PropTypes.array,
  labels: PropTypes.arrayOf(PropTypes.string),
  selectable: PropTypes.bool,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  renderer: PropTypes.func,
  onEdit: PropTypes.func,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func
};

/* Default */
const defaultProps = {
  disabled: false,
  renderer: null
};

class GridItem extends Component {
  constructor(...args) {
    super(...args);
    this.clickHandler = this.clickHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  deleteHandler(e) {
    this.preventClick(e);
    this.props.onDelete(this.props.item);
  }
  changeHandler(field, value) {
    this.props.onEdit(Object.assign({}, this.props.item, {[field]: value}));
  }
  clickHandler() {
    const { onSelect, selectable, disabled, item } = this.props;

    if (selectable && !disabled) {
      onSelect(item);
    }
  }
  preventClick(e) {
    e.stopPropagation();
  }
  getContent(labels, value, fieldName) {
    const { item, renderer } = this.props;

    if (renderer) {
      return renderer(value, fieldName, item);
    }

    if (labels && labels.length) {
      return value ? labels[0] : labels[1];
    }

    if (typeof value === 'undefined' && Array.isArray(fieldName)) {
      return fieldName.reduce((res, name) => {
        if (has(item, name)) {
          res.push(get(item, name));
        }

        return res;
      }, []).join(' ');
    }

    return Array.isArray(value) ? value.join(', ') : value;
  }
  renderContent() {
    const { actions } = this.props;
    const items = this.props.fields.map(fieldObj => {
      const { name, toggleable } = fieldObj;
      const value = get(this.props.item, name);

      return <td
        className={styles.cell}
        key={name}
      >{toggleable ?
        <span onClick={this.preventClick}>
          <Switch
            checked={value}
            onChange={this.changeHandler.bind(this, name)}
          />
        </span> : this.getContent(fieldObj.labels, value, name)}
      </td>;
    });

    if (this.props.deletable || actions) {
      items.push(
        <td
          className={styles.cell}
          key='controls'
        >
          {actions ? actions.map(item => {
            return <Action
              key={item.icon}
              icon={item.icon}
              item={this.props.item}
              action={item.action}
            />;
          }) : <Delete onClick={this.deleteHandler}/>}
        </td>
      );
    }

    return items;
  }
  render() {
    const { disabled } = this.props;
    const className = classNames({
      [styles.row]: true,
      [styles.disabled]: disabled,
      [styles.even]: this.props.even,
      [styles.selected]: this.props.selected,
      [styles.selectable]: this.props.selectable && !disabled
    });

    return (
      <tr
        className={className}
        onClick={this.clickHandler}
      >{this.renderContent()}</tr>
    );
  }
}

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

export default GridItem;
