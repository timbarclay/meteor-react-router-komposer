import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/post-actions.js';

const addNewPost = (title, body) => {
  addPost(title, body);
}; 

const AddPostComponent = ({dispatch}) => {
  let title;
  let body;
  
  return (
    <div>
      <input ref={node => title = node}/>
      <input ref={node => body = node}/>
      <button onClick={() => {
        dispatch(addNewPost(title.value, body.value));
        title.value = body.value = "";
      }}>
      Add Post
      </button>
    </div>
  );
};

export default connect()(AddPostComponent);