import { authHeader } from '../_helpers'

export const userService = {
  login,
  logout,
  getAll
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username,password})
  };
  return fetch('http://localhost:4001/api/login', requestOptions)
          .then(response => response.json().then(data => ({
            data:data,
            status: response.status
          })
        ).then(res => {
          if (res.data.auth) {
            const user = res.data.user.username
            // login successful if there's a jwt token in the response
              if (user && res.data.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('user', JSON.stringify(user));
                  localStorage.setItem('token', JSON.stringify(res.data.token));
              }
              return user;
          }
          else {
            return Promise.reject(res.data.message)
          }

        })
      )
}


function logout(){
  localStorage.removeItem('user');
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch('http://localhost:4001/api/user', requestOptions)
          .then(resp => resp.json())
          .then(json => {
            return json.users;
          })
}


function handleResponse(response) {
  
}
