import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import '../_css/TodoEditForm.css';

const TodoEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.editTodo}>
      <div className="todofromrow">
        <FormGroup>
          <ControlLabel>Todo: </ControlLabel>
          <input type="hidden" name="id"/>
            <FormControl
              type="text" placeholder="Enter todo"
              name="todoText"
               />
        </FormGroup>

      </div>
      <div className="sumbit-button">
          <FormGroup>
            <Button type="submit" bsStyle="success " bsSize="" block>Submit</Button>
          </FormGroup>
      </div>
    </form>

  );
}

export default TodoEditForm;


// <input type="hidden" value={props.todoData._id} name="id"/>
// defaultValue={props.todoData.todoText}
// defaultValue={props.todoData.todoDesc}


// <FormGroup>
//   <ControlLabel>Description: </ControlLabel>
//   <FormControl
//     componentClass="textarea" placeholder="Enter description"
//       name="todoDesc"
//       />
// </FormGroup>
