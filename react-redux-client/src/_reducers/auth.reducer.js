import { authConstants } from '../_constants';

export function auth(state = {}, action) {
    switch (action.type) {
    case authConstants.TOKEN_REQUEST:
        return {
        loading: true
        };
    case authConstants.TOKEN_SUCCESS:
        return {
        items: action.token
        };
    case authConstants.TOKEN_FAILURE:
        return {
        error: action.error
        };
    default:
        return state
    }
}
