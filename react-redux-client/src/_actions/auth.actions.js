import { authConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const authActions = {
  verifyToken
};

function verifyToken(token){
  return dispatch => {
    dispatch(request({token}));

    userService.verifyToken()
        .then(
          result => {dispatch(success(token))},
          error => {dispatch(failure(error))}
        );
  }

  function request() {
    return { type: authConstants.TOKEN_REQUEST }
  }
  function success(token) {
    return { type: authConstants.TOKEN_SUCCESS, token }
  }
  function failure(error) {
    return { type: authConstants.TOKEN_FAILURE, error }
  }
}
