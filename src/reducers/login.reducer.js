import { userConstants } from '../constants/user.constants';
var initialState = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.SET_LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            })
        case userConstants.SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });
        case userConstants.SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.loginError
            });
        case 'LOG_OUT':
            return action.isLoginSuccess;
        default:
            return state;
    }
}