import React, { PureComponent, PropTypes } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import PageItem from './item.js';
import BreakItem from './break.js';

import styles from './pagination.scss';

/* Interface */
const propTypes = {
  pageNum: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  activeClass: PropTypes.string,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  pageRange: PropTypes.number,
  startPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  previousEnable: PropTypes.bool,
  lastEnable: PropTypes.bool,
  theme: PropTypes.object
};

/* Default */
const defaultProps = {
  activeClass: 'Active',
  previousLabel: 'Previous',
  nextLabel: 'Next',
  previousEnable: true,
  nextEnable: true,
  pageNum: 0,
  pageRange: 2,
  startPage: 0,
  theme: styles
};

class Pagination extends PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      currentPage: parseInt(this.props.startPage, 10)
    };

    this.previousPageHandler = e => {
      if (e) {
        e.preventDefault();
      }
      this.changePage(this.state.currentPage - 1);
    };

    this.nextPageHandler = e => {
      if (e) {
        e.preventDefault();
      }
      this.changePage(this.state.currentPage + 1);
    };
    this.currentPageHandler = (newPage, e) => {
      if (e) {
        e.preventDefault();
      }
      this.changePage(newPage);
    };
  }
  componentWillReceiveProps(newProps) {
    if (this.state.currentPage > newProps.pageNum - 1) {
      this.changePage(newProps.pageNum - 1);
    }
  }
  changePage(newPage) {
    if (this.state.currentPage === newPage || newPage > this.props.pageNum - 1 || newPage < 0) {
      return;
    }

    this.setState({
      currentPage: newPage
    });

    this.props.onChange(newPage);
  }
  getConfiguredPageItem(i) {
    const { theme } = this.props;

    return (
      <PageItem
        key={i}
        pageClassName={theme.item}
        activeClassName={theme.active}
        currentPage={this.state.currentPage}
        page={i}
        onClick={this.currentPageHandler}
      />
    );
  }
  getConfiguredBreakeItem(i) {
    return (
      <BreakItem className={this.props.theme.item} key={i} />
    );
  }
  renderPages() {
    const items = [];
    const { currentPage } = this.state;
    const { pageNum, pageRange } = this.props;
    const start = Math.max(currentPage - pageRange, 1);
    const end = Math.min(currentPage + pageRange, pageNum - 2);

    if (start > 1) {
      items.push(this.getConfiguredBreakeItem(start - 1));
    }
    for (let i = start; i <= end; i++) {
      items.push(this.getConfiguredPageItem(i));
    }
    if (end < pageNum - 2) {
      items.push(this.getConfiguredBreakeItem(pageNum));
    }
    return items;
  }

  renderPrevious() {
    const { theme } = this.props;
    const { currentPage } = this.state;

    if (this.props.previousEnable) {
      return (
        <li
          className={`${theme.previous} ${currentPage > 0 ? '' : theme.disabled}`}
          onClick={this.previousPageHandler}
        >
          <FontIcon
            className={styles.icon}
            value='keyboard_arrow_left'
          />
        </li>
      );
    }
  }
  renderNext() {
    const { theme, pageNum } = this.props;
    const { currentPage } = this.state;

    if (this.props.nextEnable) {
      return (
        <li className={`${theme.next} ${currentPage === pageNum - 1 ? theme.disabled : ''}`} onClick={this.nextPageHandler}>
          <FontIcon
            className={styles.icon}
            value='keyboard_arrow_right'
          />
        </li>
      );
    }
  }
  renderFirst() {
    return (
      this.getConfiguredPageItem(0)
    );
  }
  renderLast() {
    return (
      this.getConfiguredPageItem(this.props.pageNum - 1)
    );
  }
  renderContent() {
    if (this.props.pageNum >= this.props.pageRange) {
      return (
        <ul className={this.props.theme.pagination}>
          {this.renderPrevious()}
          {this.renderFirst()}
          {this.renderPages()}
          {this.renderLast()}
          {this.renderNext()}
        </ul>
      );
    }
    return null;
  }
  render() {
    return (
      this.renderContent()
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
