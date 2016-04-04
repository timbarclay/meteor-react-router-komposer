import { Meteor } from 'meteor/meteor';
import { ListItems } from '../list-items.js';

const listFields = {_id: 1, title: 1};
const limit = 5;

const getListItemsPub = (filterDone, pageSkip = 0) => {
  let query = {};
  
  if(filterDone){
    query.done = filterDone;
  }
  
  return ListItems.find(query, {fields: listFields, skip: pageSkip});
}

Meteor.publish('list-items', getListItemsPub);

Meteor.publish('single-item', id => 
  ListItems.find(id));