import React from 'react';

const Error = (props) => {
    
    return (
        <div>
        <h1>This is my Error</h1>
        <button onClick={()=>{
            props.history.push('/')
        }}></button>
        </div>
    )
}
export default Error;