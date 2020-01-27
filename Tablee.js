import React from 'react';
import TableRoww from './TableRoww'
import 'bootstrap/dist/css/bootstrap.min.css'
class Tablee extends React.Component{
  render(){
    return(
      <table class="table table-striped">
        <thead className="table table-dark">
          <tr>
            <th>Defect Category</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          
            <TableRoww defectcat='UI' desc='Submit button coming to the extreme left.Refer the screenshots' priority='2' status='open' change='Close Defect'/>
            <TableRoww defectcat='Functional' desc='While submitting the form data, a confirmation popup should appear. Refer the SRS document.' priority='1' status='open' change='Close Defect'/>
            <TableRoww defectcat='Change Request' desc='Add remove user functionality' priority='3' status='closed' change='No action pending'/>
            
            
        </tbody>
    </table>
    )
  }
}
export default Tablee;