import { todoConstants } from '../_constants';
import { todoService } from '../_services';

export const todoActions = {
  getAll
}

function getAll() {
  return dispatch => {
    dispatch(request());

    todoService.getAll()
        .then(
          todos => {dispatch(success(todos))},
          error => {dispatch(failure(error))}
        );
  };

  function request() {
    return { type: todoConstants.GETTODOS_REQUEST}
  }
  function success(todos) {
    return { type: todoConstants.GETTODOS_SUCCESS, todos }
  }
  function failure(error) {
    return { type: todoConstants.GETTODOS_FAILURE, error }
  }
}
