import React from 'react';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import routes from './routes';
import configureStore from './store';
import 'styles/main.scss';

/** Initialize app */
render(
    <Provider store={configureStore()}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>, document.querySelector('.app'));
