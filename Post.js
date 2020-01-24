import React from 'react';
const Post = (props) => {
    return (
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.body}</p>
    <a href="#" class="btn btn-primary">Read more...</a>
  </div>
  </div>
    )
}
export default Post;