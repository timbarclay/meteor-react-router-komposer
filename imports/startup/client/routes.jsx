import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../../ui/components/app.jsx';
import List from '../../ui/containers/list.jsx';
import ListItem from '../../ui/containers/listItem.jsx';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/list" component={List}>
        <Route path="/list/:id" component={ListItem}/>
      </Route>
    </Route>
  </Router>
);