import React from 'react';
class CreatePost extends React.Component{
constructor(){
    super();
    this.state={
        title: "",
        body: "",
        id: new Date()
    };
}
handleChange = (e) => {
    
    this.setState({[e.target.name]: e.target.value})
}
handleSubmit = e => {
    e.preventDefault();
    this.props.createPostFunction(this.state)
    
}

render(){
    return (
        <>
        <h1>Create a new Post</h1>
        <form onSubmit={this.handleSubmit}>
            Title: <input name="title" type="text" onChange={this.handleChange}/><br/>
            Body: <textarea name="body" onChange={this.handleChange}/>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        </>
    )
}
}
export default CreatePost;