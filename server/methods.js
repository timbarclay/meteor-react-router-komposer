import { Meteor } from 'meteor/meteor';
import { ListItems } from '../collections/list-items.js';

Meteor.methods({
  addPost(title, body){
    const post = ListItems.insert({
      title: title,
      body: body,
      done: false
    });
    return post;
  },
  
  toggleDone(id){
    const item = ListItems.findOne({_id: id}, {fields:{done: true}});
    return ListItems.update({_id: id}, {$set: {done: !item.done}})
  }
});