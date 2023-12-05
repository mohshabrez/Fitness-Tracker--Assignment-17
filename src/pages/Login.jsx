import { useDispatch, useSelector } from "react-redux"
import { userLogin, userLoginInput } from "../redux/actions/userActions"
import { useEffect } from "react"
import { RESET_LOGIN } from "../redux/actionConstants"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const userInput = useSelector((state) => state.authState.loginInputFields)
    const error = useSelector((state) => state.authState.loginError)
    const isLoggedIn = useSelector((state) => state.authState.isLoggedIn)
    const dispatch = useDispatch()
    const Navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = userInput;

        dispatch(userLogin(email, password))
    }

    useEffect(() => {
        if(isLoggedIn){
            Navigate('/')
        }
        return function (){
            dispatch({type: RESET_LOGIN});
        }
    },[isLoggedIn])

    return(
        <div className=" p-4 min-h-[80vh] flex justify-center items-center">
            <form onSubmit={handleLogin} className="bg-gray-400 border-gray border-2 flex flex-col gap-7 w-[250px] h-[350px] py-2 px-4 rounded-md">
                <label className="flex flex-col bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text font-semibold">
                    Email:
                    <input value={userInput.email} 
                    onChange={(e) => dispatch(userLoginInput({...userInput, email: e.target.value}))}
                    type="email" placeholder="Enter Email" className="mt-1 text-black border-2 border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
                    />
                </label>
                <label className="flex flex-col bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text font-semibold">
          Password:
          <input
            value={userInput.password}
            onChange={(e) =>
              dispatch(
                userLoginInput({ ...userInput, password: e.target.value })
              )
            }
            type="password"
            placeholder="Enter Password"
            className="mt-1 border-2 text-black border-gray-300 rounded-md px-2 outline-none focus:border-violet-400"
          />
        </label>
        <Link to="/signup" className="mt-1 max-w-max text-blue-600 underline">
            signup?
        </Link>
        {error && <small className="text-red-600">{`* ${error}`}</small>}
            <button type="submit" className="text-blue bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text font-semibold p-1 rounded-md border-2 border-cyan-300">
                Login
            </button>
            <p onClick={() => 
                dispatch(userLoginInput({
                    ...userInput, email: "testuser1@domain.com",
                    password: "testuser1",
                }))
            } className="hover:underline cursor-pointer self-center text-blue-600">Set Test Credentials</p>
            </form>

        </div>
    )
}
