import React from 'react';
import { Link } from 'react-router';

import AddPost from './addPost.jsx';

const renderIfData = (listItems) => {
  if (listItems && listItems.length > 0) {
    return listItems.map(item => {
      return <li key={ item._id }>
        <Link to={`/list/${ item._id }`}>{ item.title }</Link>
      </li>;
    });
  } else {
    return <p>No list items yet!</p>;
  }
};

export default ({listItems, children}) => (
  <div>
    <AddPost />
    <ol>{ renderIfData(listItems) }</ol>
    { children }
  </div>
);