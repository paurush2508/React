import React from 'react';
import Post from './Post'
import axios from 'axios'
class Posts extends React.Component{
constructor(){
    super();
    this.state = {
        postsArray: []
    };
}
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => this.setState({postsArray: res.data}))
}


render(){
    const postList = this.state.postsArray.map((post,i) =>
    { return <Post key= {i} body={post.body} id={post.id} title={post.title}/> 
})
return (
    <>
    {postList}
    </>
)
}
}
export default Posts;