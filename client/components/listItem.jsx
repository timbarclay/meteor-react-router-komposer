import React from 'react';

export const ListItem = ({ listItem }) => (
  <div>
    <h2>{ listItem.title }</h2>
    <p>{ listItem.body }</p>
  </div>
);