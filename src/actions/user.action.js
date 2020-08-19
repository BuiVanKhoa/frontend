import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { history } from '../helps/history';


export const userActions = {
    login,
    logout
}

function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(true));

        userService.callLoginApi(username, password)
            .then(

                ([status, msg]) => {
                    if (status === 200) {
                        dispatch(setLoginSuccess(true))
                        history.push("/");
                    } else {
                        dispatch(setLoginError(msg))
                    }
                }

            )
    }


    function setLoginPending(isLoginPending) {
        return {
            type: userConstants.SET_LOGIN_PENDING,
            isLoginPending
        };
    }

    function setLoginSuccess(isLoginSuccess) {
        return {
            type: userConstants.SET_LOGIN_SUCCESS,
            isLoginSuccess
        };
    }

    function setLoginError(loginError) {
        return {
            type: userConstants.SET_LOGIN_ERROR,
            loginError
        }
    }
}

function logout() {
    return dispatch => {
        console.log("%%%%%%%%%%%%%%")
        localStorage.removeItem('login')
        localStorage.removeItem('token')
        dispatch(logOut(false))
        history.push("/login");
    }

    function logOut(isLoginSuccess) {
        return {
            type: 'LOG_OUT',
            isLoginSuccess
        }
    }
}