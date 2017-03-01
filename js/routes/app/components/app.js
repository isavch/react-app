import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
        <div>
          { children }
        </div>
    );
  }
}

const mapStateToProps = ({ user, isLoading }) => ({ user, isLoading });

export default connect(mapStateToProps)(App);
