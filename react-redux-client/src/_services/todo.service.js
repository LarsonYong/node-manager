import { authHeader } from '../_helpers'
import { browserHistory } from 'react-router';

export const todoService = {
  getAll,
  updateTodo,
  deleteTodo
}

function getAll() {
  const headers = authHeader()
  const requestOptions = {
    method: 'GET',
    headers: headers
  };
  return fetch('http://localhost:4001/api/todo', requestOptions)
          .then(resp => resp.json())
          .then(json => {
            if (!json.auth){
              if (json.err && json.err.message === 'jwt expired') {
                browserHistory.replace('/login');
              }
              return Promise.reject(json.message)
            }
            return json.todos;
          })
}

function updateTodo (body) {
  const headers = authHeader()
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  };
  const url = 'http://localhost:4001/api/todo' 

  return fetch(url, requestOptions)
          .then(resp => resp.json())
          .then(json => {
            if (!json.auth){
              if (json.err && json.err.message === 'jwt expired') {
                browserHistory.replace('/login');
              }
              return Promise.reject(json.message)
            }
            return json;
          })
}

function deleteTodo (ID) {
  const headers = authHeader()
  const requestOptions = {
    method: 'DELETE',
    headers: headers,
  };
  const url = 'http://localhost:4001/api/todo/' + ID

  return fetch(url, requestOptions)
          .then(resp => resp.json())
          .then(json => {
            if (!json.auth){
              if (json.err && json.err.message === 'jwt expired') {
                browserHistory.replace('/login');
              }
              return Promise.reject(json.message)
            }
            return json;
          })
}
