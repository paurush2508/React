import React from 'react';
const Contact = props => {
    console.log('contact props',props);
    return (
        <div>
        <h1>This is my component</h1>
        <button onClick={() => {props.fromParent(600)}}>Contact to App</button>
        </div>
    )
}
export default Contact;