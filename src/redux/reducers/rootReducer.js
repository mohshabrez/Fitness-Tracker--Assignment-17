import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { exerciseReducer } from "./exerciseReducer";
import { foodReducer } from "./foodReducer";
import { goalReducer } from "./goalReducer";

export const rootReducer = combineReducers({
    authState: authReducer,
    exerciseState: exerciseReducer,
    foodState: foodReducer,
    goalState: goalReducer
})