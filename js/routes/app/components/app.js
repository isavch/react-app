import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USER'
    });
  }
  render() {
    const { children } = this.props;

    return (
        <div>
          <Link to="test-route">Test</Link>
          { children }
        </div>
    );
  }
}

const mapStateToProps = ({ user, isLoading }) => ({ user, isLoading });

export default connect(mapStateToProps)(App);
