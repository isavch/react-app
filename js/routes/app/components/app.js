import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from 'actions/user';
import Navigation from './navigation/navigation';
import Notifications from './notifications';
import Loader from './loader';

import styles from './app.scss';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.props.getUser()
      .then(this.userLoaded.bind(this))
      .catch(this.userLoadedFailed.bind(this));
  }
  userLoadedFailed() {
    this.setState({
      isLoading: false
    });
  }
  userLoaded() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    const { user, children } = this.props;

    return (
      this.state.isLoading ?
        <div>
          <Loader />
          <Notifications />
        </div> :
        <div>
          <Navigation user={ user } />
          <Notifications />
          <div className={styles.contentWrapper}>
            { children }
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { getUser })(App);
