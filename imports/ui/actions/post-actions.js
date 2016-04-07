import { Meteor } from 'meteor/meteor';

export const addPost = (title, body) => Meteor.call('addPost', title, body);

export const toggleDone = (id) => Meteor.call('toggleDone', id);