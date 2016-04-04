import { ListItems } from '../../api/list-items/list-items.js';

Meteor.startup(() => {
  if(ListItems.find().count() === 0){
    ListItems.insert({
      _id: "one",
      done: true,
      title: "First",
      body: "This is the first item"
    });
    ListItems.insert({
      _id: "two",
      done: false,
      title: "Second",
      body: "This is the second item"
    });
    ListItems.insert({
      _id: "three",
      done: true,
      title: "Third",
      body: "Here's another one"
    });
    ListItems.insert({
      _id: "four",
      done: false,
      title: "Fourth",
      body: "Another one"
    });
    ListItems.insert({
      _id: "five",
      done: true,
      title: "Fifth",
      body: "Again"
    });
    ListItems.insert({
      _id: "six",
      done: false,
      title: "Sixth",
      body: "And again"
    });
  }
});
