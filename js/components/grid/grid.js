/**
 * @class Grid
 * @param data {Object[]} Set of data
 * @param field {Object[]} Set of fields, which will be displayed
 * @param [sortParams] {Object} Describes current sorting
 * @param [filterParams] {Object} Describers current filtering
 * @param [actions] {Object[]} Set of actions items, which will be rendered for every data item
 * @param keyField {String} Name of field uses as a component key
 * @param [onChange] {Function} Callback is called when sort or filter params change
 * @param [onEdit] {Function} Callback is called when data is changed
 * @param [onDelete] {Function} Callback is called when item is deleted
 * @param [onSelect] {Function} Callback is called when item is selected
 * @param [customRenderer] {Function} Function provides custom render method
 * @param [sortField] {String} Active sort field
 * @param [disableField] {String} Which field value must disable item
 * @param [selectedItem] {Number|String} Selected item
 * @param [selectable] {Boolean} Makes possible items to be selectable
 * @param [deletable] {Boolean} Makes possible items to be deletable
 * @param [loading] {Boolean} Show or hide spinner component
 */
import React, {Component, PropTypes } from 'react';
import { get } from 'lodash';

import Spinner from '../spinner';
import GridItem from './item';
import GridHeading from './heading';
import Filter from './filter';
import Sort from './sort';

import styles from './grid.scss';

/* Interface */
const propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([
      PropTypes.string, PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    selectable: PropTypes.bool,
    filterable: PropTypes.bool
  })).isRequired,
  sortParams: PropTypes.shape({
    'sort_fields': PropTypes.string,
    'sort_direction': PropTypes.oneOf(['ASC', 'DESC'])
  }),
  filterParams: PropTypes.object,
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    action: PropTypes.func
  })),
  keyField: PropTypes.string.isRequired,
  customRenderer: PropTypes.func,
  onChange: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  sortField: PropTypes.string,
  disableField: PropTypes.string,
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectable: PropTypes.bool,
  deletable: PropTypes.bool,
  loading: PropTypes.bool
};

/* Default */
const defaultProps = {
  sortParams: null,
  filterParams: null,
  selectable: true,
  deletable: false,
  loading: false
};

class Grid extends Component {
  constructor(...args) {
    super(...args);
    this.sortHandler = this.sortHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }
  sortHandler(sortParams) {
    this.props.onChange(sortParams);
  }
  filterHandler(filterParams, field) {
    this.props.onChange(filterParams, field);
  }
  renderHeadingControls({sortable, filterable, filters, name, sortField, title}) {
    const { filterParams, sortParams } = this.props;

    if (sortable) {
      return <Sort
        onSort={this.sortHandler}
        field={sortField || name}
        text={title || name}
        sortField={sortField}
        direction={sortParams && sortParams.sort_direction}
        isActive={sortParams && sortParams.sort_fields === (sortField || name)}
      />;
    }
    if (filterable) {
      return (
        <span>
          {title || name}
          <Filter
            onFilter={this.filterHandler}
            filters={filters}
            filterParams={filterParams && filterParams[name]}
            field={name}
          />
        </span>
      );
    }

    return title || name;
  }
  renderHeadings() {
    const headings = this.props.fields.map(fieldObj => {
      const { name } = fieldObj;

      return (
        <GridHeading key={name} >
          {this.renderHeadingControls(fieldObj)}
        </GridHeading>
      );
    });

    if (this.props.deletable || this.props.actions) {
      headings.push(<GridHeading key='controls'/>);
    }

    return headings;
  }
  renderContent() {
    const { disableField } = this.props;

    return this.props.data.map((item, i) => {
      return <GridItem
        key={get(item, this.props.keyField)}
        selectable={this.props.selectable}
        deletable={this.props.deletable}
        item={item}
        even={i % 2 !== 0}
        actions={this.props.actions}
        renderer={this.props.customRenderer}
        disabled={disableField && !item[disableField]}
        fields={this.props.fields}
        onEdit={this.props.onEdit}
        onSelect={this.props.onSelect}
        onDelete={this.props.onDelete}
      />;
    });
  }
  renderNoDataMessage() {
    if (!this.props.data.length) {
      return <span className={styles.message}>There is no Data</span>;
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
          <tr>{this.renderHeadings()}</tr>
          </thead>
          <tbody>{this.renderContent()}</tbody>
        </table>
        {this.renderNoDataMessage()}
        <Spinner active={this.props.loading} />
      </div>
    );
  }
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
