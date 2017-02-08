import React, { Component, PropTypes } from 'react';
import Field from '../field';

import dropDown from './dropdown.scss';

/** Interface */
const propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.array,
  selected: PropTypes.any,
  isEditable: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onSelect: PropTypes.func
};

/** Defaults */
const defaultProps = {
  isExpanded: false,
  label: '',
  items: []
};

/* Implementation */
class DropDownList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isExpanded: this.props.isExpanded || false
    };
    this.onGlobalClick = this.onGlobalClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.onGlobalClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onGlobalClick, false);
  }
  // TODO Need to refactor this approach
  onGlobalClick(event) {
    if (this.refs.listSelector !== event.target) {
      this.setState({isExpanded: false});
    }
  }
  onSelect(item) {
    this.props.onSelect(item.value);
    this.setState({
      isExpanded: false
    });
  }
  onInputChange(value) {
    this.props.onSelect(value);
  }
  getSelected() {
    const selected = this.props.items.filter(item => item.value === this.props.selected);
    const selectedValue = selected.length ? selected[0].name : '';

    return selectedValue;
  }
  render() {
    const selected = this.getSelected();
    const items = this.props.items.map((item, key) =>
      <li key={key} onClick={this.onSelect.bind(this, item)} className={dropDown.listItem}>
        {item.name}
      </li>
    );

    if (!this.props.items.length || !this.props.isEditable) {
      return <Field
        name={this.props.label}
        value={selected || this.props.selected}
        isEditable={this.props.isEditable}
        placeholder={`Please enter ${this.props.label.toLowerCase()}`}
        onFieldChange={this.onInputChange.bind(this)}
      >{this.props.children}</Field>;
    }

    return <div className={dropDown.wrapper}>
      <label className={dropDown.label}>
        {this.props.label}
      </label>
      <div
        ref='listSelector'
        onClick={() => this.setState({isExpanded: !this.state.isExpanded})}
        className={dropDown.selected}
      >
        {selected || this.props.placeholder}
      </div>
      <div className={dropDown.container} style={{display: this.state.isExpanded ? 'block' : 'none'}}>
        <ul className={dropDown.list}>
          {items}
        </ul>
      </div>
      {this.props.children}
    </div>;
  }
}

DropDownList.propTypes = propTypes;
DropDownList.defaultProps = defaultProps;

export default DropDownList;
