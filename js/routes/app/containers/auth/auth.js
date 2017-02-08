import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

let getState;

export default store => {
  getState = store.getState;
};

export const isAllowed = action => {
  const state = getState();
  const permissions = state.user.permissions || [];

  return permissions.some(item => item === action);
};

export const protectComponent = (OriginalComponent, action) => props => {
  return isAllowed(action) ? <OriginalComponent {...props}/> : null;
};

export const protectRoute = (OriginalComponent, action) => {
  class ProtectedComponent extends Component {
    componentWillMount() {
      if (!this.isAllowed()) {
        this.props.router.replace('/notAuthorized');
      }
    }
    isAllowed() {
      const permissions = this.props.user.permissions || [];

      return permissions.some(item => item === action);
    }
    render() {
      return (
        this.isAllowed() ? <OriginalComponent {...this.props}/> : null
      );
    }
  }

  const mapState = state => ({user: state.user});

  return connect(mapState)(withRouter(ProtectedComponent));
};
