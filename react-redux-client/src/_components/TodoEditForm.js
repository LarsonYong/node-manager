import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import '../_css/TodoEditForm.css';

const TodoEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="addTodoForm" onSubmit={props.addTodo}>
      <div className="todofromrow">
        <FormGroup>
          <ControlLabel>Add Your Todo: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter todo"
              name="todoText"
               />
        </FormGroup>

      </div>
      <div className="sumbit-button">
          <FormGroup>
            <Button type="submit" bsStyle="success"  block>Submit</Button>
          </FormGroup>
      </div>
    </form>

  );
}

export default TodoEditForm;
