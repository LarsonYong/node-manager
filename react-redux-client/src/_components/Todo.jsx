import React,  {Component} from 'react';
import '../_css/Todo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import { todoActions} from '../_actions';
import { todoService } from '../_services';
import TodoEditForm from './TodoEditForm';


class Todo extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditTodo = this.submitEditTodo.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(todoActions.getAll());
  }

  showEditModal(){

  }

  hideEditModal(){
    this.props.mappedhideEditModal();
  }

  submitEditTodo(e){
    e.preventDefault();
    const editForm = document.getElementById('EditTodoForm');
    if(editForm.todoText.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('todoText', editForm.todoText.value);
      data.append('todoDesc', editForm.todoDesc.value);
      this.props.mappedEditTodo(data);
    }
    else{
      return;
    }
  }



  render(){
    const { todos } = this.props;
    const todoState = this.props.mappedTodoState;
    // const todos = todoState.todos;
    // const editTodo = todoState.todoToEdit;
    console.log(this.props)
    return (
        <div id="Todo">
          {this.props.todos.loading &&<em>Loading todos...</em>}
          {this.props.todos.error && <span className="text-danger">ERROR: {this.props.todos.error}</span>}
          <div className="glass">
          <div className="glass-title">
            <h3>My todo list:   <button type="button" onClick={() => this.showEditModal()} className="btn btn-sm btn-default left table-btn add-btn">+</button></h3>

          </div>
          {this.props.todos.items && <Table striped bordered condensed hover className="todoT"><tbody>

            {this.props.todos.items.map((todo,index) => (
            <tr>
              <td>{index + 1}</td>
              <td className="todo-text">{todo.todoText}
              </td>
              <td className="todo-btn-area">

              <button type="button" className="btn btn-sm btn-success right table-btn">Done</button>
              <button type="button" className="btn btn-sm btn-default right table-btn">Modify</button>
              </td>
            </tr>
          ))}

          </tbody></Table>}

          </div>
        </div>
    )
  }
}

// module.exports = Todo;
function mapStateToProps(state) {
    const { todos } = state;
    return {
        todos: state.todos
    };
}

const connectedTodo = connect(mapStateToProps)(Todo);
export { connectedTodo as Todo };
