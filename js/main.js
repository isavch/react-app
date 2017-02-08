import React from 'react';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import {init} from 'services/api/request';
import auth from './routes/app/containers/auth';
import configureStore from './store';

/* common app styles */
import 'styles/main.scss';
import { muiTheme } from 'styles/theme';

const store = configureStore();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/* Init request service */
init({dispatch: store.dispatch});

/* Authentication */
auth(store);

/** Initialize app */
render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>, document.querySelector('.app'));
