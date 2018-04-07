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
      // 'Content-Type': 'application/*+json',
    },
    body: JSON.stringify({username,password})
  };
  return fetch('http://localhost:4001/api/login', requestOptions)
          .then(response => response.json().then(data => ({
            data:data,
            status: response.status
          })
        ).then(res => {
          console.log("22222")
          const user = res.data.user.username
          console.log(user)
          // login successful if there's a jwt token in the response
            if (user && res.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
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

  return fetch('http://localhost:4001/api/user').then(handleResponse);
}

function handleResponse(response) {
  if (!response.auth) {
    return Promise.reject(response.message);
  }
  return response.json();
}
