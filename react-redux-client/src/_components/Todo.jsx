import React,  {Component} from 'react';
import '../_css/Todo.css';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div id="Todo">

          <div className="glass">
          <div className="glass-title"><h3>My todo list: </h3></div>
          <Table striped bordered condensed hover className="todoT">
            <tbody>
            <tr>
              <td>1</td>
              <td>Someting to do
                <button type="button" className="btn btn-sm btn-success right">Done</button>
                <button type="button" className="btn btn-sm btn-default right">Modify</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Someting to do
                <button type="button" className="btn btn-sm btn-success right">Done</button>
                <button type="button" className="btn btn-sm btn-default right">Modify</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Someting to do
                <button type="button" className="btn btn-sm btn-success right">Done</button>
                <button type="button" className="btn btn-sm btn-default right">Modify</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Someting to do
                <button type="button" className="btn btn-sm  btn-success right">Done</button>
                <button type="button" className="btn btn-sm btn-default right">Modify</button>
              </td>
            </tr>
            </tbody>
          </Table>
          </div>
        </div>
    )
  }
}

module.exports = Todo;
