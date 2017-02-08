import React, { Component, PropTypes } from 'react';
import { IconMenu, MenuDivider } from 'react-toolbox/lib/menu';

import Item from './item';

import styles from './filter.scss';

/* Interface */
const propTypes = {
  field: PropTypes.string.isRequired,
  filterParams: PropTypes.object,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFilter: PropTypes.func.isRequired
};

/* Default */
const defaultProps = {
  filters: []
};

class FilterControl extends Component {
  constructor(...args) {
    super(...args);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(name, value) {
    const { filterParams, filters, field } = this.props;
    let filterObj;

    if (name === 'all') {
      filterObj = filters.reduce((res, item) => {
        res[item.value] = value;

        return res;
      }, {});
    } else {
      filterObj = Object.assign({}, filterParams, {
        [name]: value
      });
    }

    this.props.onFilter(filterObj, field, filters);
  }
  isSelected() {
    const { filterParams } = this.props;

    return this.props.filters.some(({value}) => {
      return filterParams && filterParams[value];
    });
  }
  isAllSelected() {
    const { filters, filterParams } = this.props;
    let res = true;

    if (!filterParams || !filters.length) {
      return false;
    }

    if (filters.some(({value}) => !filterParams[value])) {
      res = false;
    }

    return res;
  }
  render() {
    const { filterParams, filters } = this.props;

    return (
      filters.length ? <div className={`${styles.filter} ${this.isSelected() ? styles.active : ''}`}>
          <IconMenu
            theme={styles}
            position='topRight'
            icon='filter_list'
          >
            <Item
              label='Show All'
              name='all'
              onChange={this.changeHandler}
              selected={this.isAllSelected()}
            />
            <MenuDivider theme={styles}/>
            {filters.map(item => {
              return <Item
                key={item.value}
                label={item.label}
                name={item.value}
                onChange={this.changeHandler}
                selected={filterParams && filterParams[item.value]}
              />;
            })}
          </IconMenu>
        </div> : null
    );
  }
}

FilterControl.propTypes = propTypes;
FilterControl.defaultProps = defaultProps;

export default FilterControl;
