import {
LOGIN_INPUT,
LOGIN_ERROR ,
RESET_LOGIN ,
SIGNUP_INPUT,
SIGNUP_ERROR ,
RESET_SIGNUP ,
USER_DATA ,
AUTH_LOADING ,
LOGOUT 
} from "../actionConstants";

const initialState = {
    user: {},
    isLoggedIn: false,
    authLoading: false,
    loginInputFields: {
        email: "",
        password: ""
    },
    signupInputFields: {
        email: "",
        password: "",
        profilePictureUrl: "",
        username: "",
      },
    signupError: "",
    loginError: "",
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_INPUT:
            return { ...state, loginInputFields: action.payload}
        case SIGNUP_INPUT:
            return {...state, signupInputFields: action.payload}
        case USER_DATA:
            return {...state, user: action.payload, isLoggedIn: true, authLoading: false}
        case LOGOUT: 
            return {...state, user: {}, isLoggedIn: false,}
        case AUTH_LOADING:
            return {...state, authLoading: true}
        case LOGIN_ERROR:
            return {...state, loginError: action.payload, authLoading: false
        }
        case SIGNUP_ERROR: 
            return {...state, signupError: action.payload, authLoading: false}
        case RESET_LOGIN:
            return {...state, loginInputFields: {
                email: "",
                password: ""
            }, loginError: ""}
        case RESET_SIGNUP:
            return {
                ...state,
        signupInputFields: {
          email: "",
          password: "",
          profilePictureUrl: "",
          username: "",
        },
        signupError: "",
            }
        default:
            return {...state}
        }
}