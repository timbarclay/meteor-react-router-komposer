import { ListItems } from '../collections/list-items.js';

Meteor.publish('list-items', function() {
  return ListItems.find({}, {fields: {_id: 1, title: 1}});
});

Meteor.publish('single-item', function(id) {
  return ListItems.find(id);
})