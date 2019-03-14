import React, { Component } from 'react';
import TableRender from './TableRender';


class CustomForm extends Component {

    state = {
        employee: []
    }

     submitthisform = (e) => {
        e.preventDefault();
        console.log("the value is : " + e.target.elements.txtEmployee.value)
         const currentEntry = e.target.elements.txtEmployee.value;
         this.state.employee.push(currentEntry);
         this.setState(this.state);
         e.target.elements.txtEmployee.value = '';
    };
    
    render() {
    return(
      <div>
        <form onSubmit={this.submitthisform}>
                <input placeholder="enter employee name" type="text" name="txtEmployee" />
                <button className="btn btn-sm btn-danger"> Submit </button>
        </form>
            <TableRender val={this.state.employee}/>
      </div>
    )
  }
}

export default CustomForm;