import { login, signup } from "../../services/authServices";
import { validateLogin, validateSignUp } from "../../utils/validationUtils";
import {
LOGIN_INPUT ,
LOGIN_ERROR ,
RESET_LOGIN ,
SIGNUP_INPUT ,
SIGNUP_ERROR ,
RESET_SIGNUP ,
USER_DATA ,
AUTH_LOADING,
LOGOUT 
} from "../actionConstants";

export const userLoginInput = (userInput) => ({
    type: LOGIN_INPUT,
    payload: userInput
})

export const userSignupInput = (userInput) => ({
    type: SIGNUP_INPUT,
    payload: userInput
})

export const userLogin = (email, password) => async (dispatch) => {
    try{
        dispatch({ type: AUTH_LOADING});

        const isValidated = validateLogin(email, password)

        if(!isValidated){
            throw new Error("Please fill all the required fields")
        }

        const userData = await login(email, password)

        const { user, token} = userData;

        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)

        dispatch({ type: USER_DATA, payload: user})
    }
    catch(error){
        dispatch({ type: LOGIN_ERROR, payload: error})
    }
}

export const userSignup = (userDetails) => async (dispatch) => {
    try{
        dispatch({ type: AUTH_LOADING});

        const isValidated = validateSignUp(userDetails)

        if(!isValidated){
            throw new Error('Please fill all the required details')
        }

        const userData = await signup(userDetails);

        const {createdUser, token} = userData;

        localStorage.setItem("user", JSON.stringify(createdUser))
        localStorage.setItem("token", token)

        dispatch({ type: USER_DATA, payload: createdUser})
    }catch(error){ 
        dispatch({ type: SIGNUP_ERROR, payload: error})
    }

}


export const userLogOut = () => async(dispatch) => {
    localStorage.removeItem('user', "");
    localStorage.removeItem("token", '');

    dispatch({ type: LOGOUT})
}


