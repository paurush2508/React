import React from 'react';
import Post from './Post'
import axios from 'axios'
import CreatePost from './CreatePost';
import 'bootstrap/dist/css/bootstrap.min.css'
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
createNewPost = data => {
   // console.log(data,"parent");
    const newArray = [data,...this.state.postsArray];
    this.setState({postsArray: newArray});
}


render(){
    const postList = this.state.postsArray.map((post,i) =>
    { return <Post key= {i} body={post.body} id={post.id} title={post.title}/> 
})
return (
    <div className="container">
    <CreatePost createPostFunction = {this.createNewPost}/>
    {postList}
    </div>
)
}
}
export default Posts;