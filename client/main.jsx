import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import List from './containers/list.jsx';
import ListItem from './containers/listItem.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/list" component={List}>
          <Route path="/list/:id" component={ListItem}/>
        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'));
})