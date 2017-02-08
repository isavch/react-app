import React, { Component, PropTypes } from 'react';

import Button from '../button';
import EditableItem from '../editableItem';

/* form styles */
import styles from './signInform.scss';

/* Interface  */
const propTypes = {
  onSignIn: PropTypes.func.isRequired
};

class SignInForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      disabled: true,
      email: '',
      password: ''
    };
    this.onFormChange = field => value => {
      const { email, password } = this.state;
      const disabled = !email && field !== 'email' || !value || !password && field !== 'password' || !value;

      this.setState({
        [field]: value,
        disabled
      });
    };
    this.handleSubmit = event => {
      event.preventDefault();
      const { email, password } = this.state;

      if (email && password) {
        this.props.onSignIn({
          email: email.toLowerCase(),
          password
        });
      }
    };
  }
  render() {
    const { email, password, disabled } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <div className={styles.holder}>
          <EditableItem
            label='Login'
            onChange={this.onFormChange('email')}
            value={email}
            edit={true}
          />
          <EditableItem
            label='Password'
            type='password'
            onChange={this.onFormChange('password')}
            value={password}
            edit={true}
          />
        </div>
        <Button
          onClick={this.handleSubmit}
          label='LOG IN'
          className={styles.submitButton}
          disabled={disabled}
        />
      </form>
    );
  }
}

SignInForm.propTypes = propTypes;

export default SignInForm;
