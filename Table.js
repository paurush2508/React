import React from 'react';
import TableRow from './TableRow';
class Table extends React.Component{
    constructor(){
        super();
        this.state={
            emps: [
                {name:"Aman", id:1, location:"BLR"},
                {name:"Ankur", id:2, location:"PUN"},
                {name:"Mayank", id:3, location:"CHD"}
            ]
        }
    }
    render(){
        const empList = this.state.emps.map((emp,i) => {
            return <TableRow key={i}name={emp.name} id={emp.id} location={emp.location}/>
        });
        return(
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>{empList}</tbody>
            
            </table>
            
        )
    }
}
export default Table;