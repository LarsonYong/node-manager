import { todoConstants } from '../_constants';

export function todos(state = {}, action) {
  switch (action.type) {
    case todoConstants.GETTODOS_REQUEST:
      return {
        loading:true
      };
    case todoConstants.GETTODOS_SUCCESS:
      return {
        items: action.todos
      };
    case todoConstants.GETTODOS_FAILTURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
