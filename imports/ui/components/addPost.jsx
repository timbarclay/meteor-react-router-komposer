import React from 'react';
import { addPost } from '../actions/post-actions.js';

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