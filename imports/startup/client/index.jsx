import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Store from '../../ui/store/storeWithMiddleware.js';
import Routes from './routes.jsx';

Meteor.startup(() => {
  render((
    <Provider store={Store}>
      <Routes />
    </Provider>
  ), document.getElementById('app'));
})