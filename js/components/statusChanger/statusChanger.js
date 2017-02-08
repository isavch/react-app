import React, { Component, PropTypes } from 'react';

import Button from '../../components/button';
import { modes } from '../../constants/hos';

import styles from './statusChanger.scss';
import icons from 'styles/icons.scss';

/* Interface */
const propTypes = {
  status: PropTypes.string,
  onChange: PropTypes.func
};

/* Implementation */
class StatusChanger extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isExpanded: false
    };
    this.onExpanderClick = this.onExpanderClick.bind(this);
  }
  handleChange(status) {
    this.setState({
      isExpanded: false
    });
    this.props.onChange(status);
  }
  onExpanderClick() {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const wrapperClasses = this.state.isExpanded ? `${styles.wrapper} ${styles.isExpanded}` : styles.wrapper;
    const arrowClass = this.state.isExpanded ? `${icons.arrowBottom} ${styles.arrow}` : `${icons.arrowTop} ${styles.arrow}`;

    return <div className={wrapperClasses}>
      <div className={styles.header}>
        <sup className={styles.label}>STATUS</sup>
        <span className={styles.status}>{modes[this.props.status]}</span>
        <i className={arrowClass} onClick={this.onExpanderClick}/>
      </div>
      <div className={styles.body}>
        <Button
          label='ON DUTY'
          active={this.props.status === 'ON'}
          className={styles.button}
          onClick={() => this.handleChange('ON')}
        />
        <Button
          label='OFF DUTY'
          active={this.props.status === 'OFF'}
          className={styles.button}
          onClick={() => this.handleChange('OFF')}
        />
        <Button
          label='DRIVING'
          active={this.props.status === 'D'}
          className={styles.button}
          onClick={() => this.handleChange('D')}
        />
        <Button
          label='SLEEPER'
          active={this.props.status === 'SB'}
          className={styles.button}
          onClick={() => this.handleChange('SB')}
        />
      </div>
    </div>;
  }
}

StatusChanger.propTypes = propTypes;


export default StatusChanger;
