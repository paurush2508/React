import React from 'react';
class TableRow extends React.Component{
render(){
    return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.id}</td>
            <td>{this.props.location}</td>
        </tr>
        
    )
}
}
export default TableRow;