
import React, { PropTypes, Component } from 'react';

import styles from './dialog.scss';

/* Interface */
const propTypes = {
  title: PropTypes.string,
  action: PropTypes.array,
  onOverlayClick: PropTypes.func,
  active: PropTypes.bool
};

/* Defaults */
const defaultProps = {
  active: false,
  headerBtn: '',
  actions: [],
  children: ''
};

/* Implementation */
class Dialog extends Component {
  render() {
    return (
      <div className={`${styles.container} ${this.props.active ? styles.show : styles.hidden}`}>
        <div
          className={`${styles.backSide} ${this.props.active ? styles.active : ''}`}
          onClick={this.props.onOverlayClick}
        />
        <div className={styles.dialog}>
          <header className={styles.clearfix}>
            <h6 className={styles.label}>{this.props.title}</h6>
            <a
              className={`${styles.headerBtn}`}
              onClick={this.props.headerBtn.onClick}
            >
              { this.props.headerBtn.label }
            </a>
          </header>
          <section className={this.props.childClassName}>
            { this.props.children }
          </section>
          <footer className={styles.controlPanel}>
            { this.props.actions.map((el, id) => {
              return (
                <a
                  key={id}
                  className={ `${ el.isDisabled ? styles.disabled : '' } ${ styles.controlBtn }` }
                  onClick={ el.onClick }
                >
                  { el.label }
                </a>
              );
            }) }
          </footer>
        </div>
      </div>
    );
  }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
