import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notifications from './notifications';
import Loader from './loader';

class App extends Component {
  render() {
    const { children, isLoading } = this.props;

    return (
        <div>
          <Notifications />
          <Loader isLoading={isLoading}/>
          <div>
            { children }
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ user, isLoading }) => ({ user, isLoading });

export default connect(mapStateToProps)(App);
