import React from 'react';
import { addPost } from '../../api/list-items/methods.js';

export default () => {
  let title;
  let body;
  
  return (
    <div>
      <input ref={node => title = node}/>
      <input ref={node => body = node}/>
      <button onClick={() => {
        addPost(title.value, body.value);
        title.value = body.value = "";
      }}>
      Add Post
      </button>
    </div>
  );
};