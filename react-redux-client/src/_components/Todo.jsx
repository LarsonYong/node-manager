import React,  {Component} from 'react';
import '../_css/Todo.css';
import { Link } from 'react-router-dom';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div id="Todo">
          <div class="glass">
            <div class="template">Todo list component</div>
          </div>
        </div>
    )
  }
}

module.exports = Todo;
