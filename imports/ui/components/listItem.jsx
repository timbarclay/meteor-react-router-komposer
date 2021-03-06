import React from 'react';

export default ({ onClick, listItem }) => {
  return (
    <div onClick={onClick}>
      <h2 style={{textDecoration: listItem.done ? 'line-through' : 'none'}}>
        { listItem.title }
      </h2>
      <p>{ listItem.body }</p>
    </div>
  );
};