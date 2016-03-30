export const ListItems = new Mongo.Collection( 'list-items' );

if(Meteor.isServer){
  ListItems.remove({});
  ListItems.insert({
    _id: "one",
    title: "First",
    body: "This is the first item"
  });
  ListItems.insert({
    _id: "two",
    title: "Second",
    body: "This is the second item"
  });
}