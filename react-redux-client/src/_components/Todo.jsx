import React,  {Component} from 'react';
import '../_css/Todo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import { todoActions} from '../_actions';
import { todoService } from '../_services';

class Todo extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.dispatch(todoActions.getAll());
  }

  render(){
    const { todos } = this.props;
    console.log(this.props)
    return (
        <div id="Todo">
          {this.props.todos.loading &&<em>Loading todos...</em>}
          {this.props.todos.error && <span className="text-danger">ERROR: {this.props.todos.error}</span>}
          <div className="glass">
          <div className="glass-title">
            <h3>My todo list:   <button type="button" className="btn btn-sm btn-default left table-btn add-btn">+</button></h3>

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
