import React from 'react';
import AddPost from '../AddPost/AddPost';
import './PostPane.css';

function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost />
    </div>
  )
}

export default PostPane