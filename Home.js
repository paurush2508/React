import React from 'react';
import './Home.css';
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            name : "Angular",
            age : 23
        };
    }
    handleClick = () => {
        this.state.name === "Angular"
        ?this.setState({name: "Vue.js"})
        :this.setState({name: "Angular"})
    }



    render(){
        const white={color : "white"};
        
        console.log(this.props);
        return (
            <div>
            <div className="container">
                <h2 style={white}>This is Home Component!</h2>    
            </div>
            <div className="text text-success">
                <h1>Hello World</h1>
            </div>
                <h4>{this.state.name}</h4>
                <button onClick= {this.handleClick}>Change Name</button>
            
            </div>
            
        );
    }

}

export default Home;
