import React, { PropTypes, PureComponent } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import { debounce } from 'lodash';

import Input from '../input';

import styles from './search.scss';

/* Interface */
const propTypes = {
  field: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string
};

/* Default */
const defaultProps = {
  value: ''
};

class Search extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      value: this.props.value
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.callCallback = debounce(this.callCallback.bind(this), 300);
  }
  clearHandler() {
    this.changeHandler('');
  }
  changeHandler(value) {
    this.setState({
      value
    });
    this.callCallback(value);
  }
  callCallback(value) {
    this.props.onSearch({
      'search_field': this.props.field,
      'search_value': value
    });
  }
  render() {
    return (
      <div className={styles.search}>
        <Input
          type='text'
          icon='search'
          value={this.state.value}
          onChange={this.changeHandler}
          className={`${!this.state.value ? styles.empty : ''}`}
        />
        <FontIcon
          onClick={this.clearHandler}
          className={`${styles.clear} ${!this.state.value ? styles.hide : ''}`}
          value='close'
        />
      </div>
    );
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
