import { Meteor } from 'meteor/meteor';

export const addPost = (title, body) => {
  return () => {
    Meteor.call('addPost', title, body)
  };
};

export const toggleDone = (id) => {
  return () => Meteor.call('toggleDone', id);
}