import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/* Interface */
const propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageClassName: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired
};

class Item extends Component {
  constructor(...args) {
    super(...args);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.onClick(this.props.page);
  }
  render() {
    const { activeClassName, pageClassName, currentPage, page } = this.props;
    const className = classNames({
      [activeClassName]: currentPage === page,
      [pageClassName]: true
    });

    return (
      <li className={className} onClick={this.clickHandler}>
        <a>{page + 1}</a>
      </li>
    );
  }
}

Item.propTypes = propTypes;

export default Item;
