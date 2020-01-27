import React from 'react';
import axios from 'axios'
class IndividualPost extends React.Component{
    constructor(){
        super();
        this.state = {
            post: null
        };
    }
    componentDidMount(){
        const id= this.props.match.params.posts_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res => this.setState({post: res.data}))
    }
    render(){
        return (this.state.post ? 
         
            <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{this.state.post.title}</h5>
    <p className="card-text">{this.state.post.body}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>: <div>loading</div>)

        
    }
}
export default IndividualPost;