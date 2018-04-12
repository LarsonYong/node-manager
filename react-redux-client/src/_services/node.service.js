import { authHeader } from '../_helpers'
import { browserHistory } from 'react-router';

export const nodeService = {
  getAll
};

function getAll() {
  const headers = authHeader()
  const requestOptions = {
    method: 'GET',
    headers: headers
  };
  return fetch('http://localhost:4001/api/node', requestOptions)
          .then(resp => resp.json())
          .then(json => {
            if (!json.auth){
              if (json.err && json.err.message === 'jwt expired') {
                browserHistory.replace('/login');
              }
              return Promise.reject(json.message)
            }
            return json.nodes;
          })
}
