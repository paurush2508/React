import React from 'react';
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            name: '',
            email: ''
        }
    }
    handleChange(e){
        
    }
    render(){
        
        return (
            <div>
                <h1>Register</h1>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChange}/>
            </div>


        )
    }
}
export default Register;