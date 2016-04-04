import { Meteor } from 'meteor/meteor';

export const addPost = (title, body, callback) => {
  return () => Meteor.call('addPost', title, body, callback);
};

export const toggleDone = (id) => {
  return () => Meteor.call('toggleDone', id);
}