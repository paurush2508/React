import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Filter.css'
import Defects from './Defects';
import Tablee from './Tablee';
class Filter extends React.Component{
  render(){
    return(
      <div className = "jumbotron text-center">
        <div>
        <h1>Filter Details</h1>
        <div>
        <p>Priority</p>
        <select id="priority" name="priority">
          <option>All</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> 
        </div>
        <div>
        <p>Category</p>
        <select id="category" name="category">
          <option>All</option>
          <option>UI</option>
          <option>Functional</option>
          <option>Change Request</option>
        </select>
        </div>
        </div>
        <div>
          <Defects/>
        </div>
        <div>
          <Tablee/>
        </div>
      </div>

    );
  }
}
export default Filter;