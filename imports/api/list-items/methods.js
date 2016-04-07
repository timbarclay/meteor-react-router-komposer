import { Meteor } from 'meteor/meteor';
import { ListItems } from './list-items.js';

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

export const addPost = (title, body) => Meteor.call('addPost', title, body);

export const toggleDone = (id) => Meteor.call('toggleDone', id);