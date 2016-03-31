import React from 'react';
import { Link } from 'react-router';

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

export const List = ({listItems, children}) => (
  <div>
    <ol>{ renderIfData(listItems) }</ol>
    { children }
  </div>
);