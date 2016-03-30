import { ListItems } from '../collections/list-items.js';

Meteor.publish( 'list-items', function() {
  return ListItems.find();
});