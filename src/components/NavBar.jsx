import { NavLink } from "react-router-dom";
import {BiLogOut} from "react-icons/bi"
import { useDispatch } from "react-redux";
import { userLogOut } from "../redux/actions/userActions";

export function NavBar(){
    const dispatch = useDispatch()

    const handleLogOut= () => {
      dispatch(userLogOut())
    }

    return(
        <nav className="bg-gray-800 px-5 py-3 flex justify-between flex-wrap shadow-md rounded-b-md">
            <h1 className="bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text">
                <NavLink to="/">Fit To Hit</NavLink>
            </h1>
            <ul className="flex items-center gap-2 md:gap-4 flex-wrap font-semibold">
              <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                <NavLink to="/">DashBoard</NavLink>
              </li>  
              <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                <NavLink to="/exercises">Exercises</NavLink>
              </li>  
              <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                <NavLink to="foods">Foods</NavLink>
              </li> 
              <li className="text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                <NavLink to="/goals">Goals</NavLink>
              </li>   
              <li onClick={handleLogOut} className="cursor-pointer text-white hover:bg-gradient-to-r hover:bg-gradient-to-r from-orange-700 to-red-500 hover:text-transparent hover:bg-clip-text">
                <BiLogOut size={20} fill="white"/>
              </li>  
            </ul>
        </nav>
    )
}