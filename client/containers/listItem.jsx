import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { composeWithTracker } from 'react-komposer';
import { ListItems } from '../../collections/list-items.js';
import { ListItem } from '../components/listItem.jsx';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('list-items');

  if (subscription.ready()) {
    const listItem = ListItems.findOne({_id: props.params.id});
    onData(null, { listItem });
  }
};

export default composeWithTracker(composer)(ListItem);