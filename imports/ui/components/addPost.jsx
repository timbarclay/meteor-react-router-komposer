import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/post-actions.js';

const addNewPost = (title, body) => {
  addPost(title, body, post => {
    console.log(post._id);
  });
}; 

const AddPostComponent = ({dispatch}) => {
  let title;
  let body;
  
  return (
    <div>
      <input ref={node => title = node}/>
      <input ref={node => body = node}/>
      <button onClick={() => {
        dispatch(addPost(title.value, body.value));
        title.value = body.value = "";
      }}>
      Add Post
      </button>
    </div>
  );
};

export default connect()(AddPostComponent);