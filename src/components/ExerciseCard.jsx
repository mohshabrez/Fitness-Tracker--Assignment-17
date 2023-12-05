import { useState } from "react"
import { useDispatch } from "react-redux";
import { allExercises } from "../utils/exerciseUtils";
import { removeExercise } from "../redux/actions/exerciseActions";
import { BiTrash as DeleteIcon } from "react-icons/bi";

export const ExerciseCard = ({exercise}) => {
    const [isHovered, setIsHovered] = useState(false)
    const {_id, exerciseName, durationMinutes, caloriesBurned} = exercise;
    const dispatch = useDispatch()

    const {emoji} = allExercises[exerciseName];

    const handleDeleteExercise = () => {
        dispatch(removeExercise(_id))
    }

    return(
        <div className="flex flex-col gap-3 flex-grow md:flex-grow-0 min-w-[12%] py-1 px-2 rounded-md border shadow-lg hover:shadow-blue-200 hover:border-blue-300 transition-all ease-in-out duration-300" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
           <div className="flex gap-8 justify-between items-center">
            <strong>{exerciseName}</strong>
            {!isHovered && <p>{emoji}</p>}
            {isHovered && (
                <div onClick={handleDeleteExercise} className="cursor-pointer hover:bg-white p-1 rounded-full">
                    <DeleteIcon fill="red"/>
                </div>
            )}
            </div> 
                <div className="flex gap-8 justify-between">
                <p>⌚{durationMinutes} mins</p>
                 <p>🔥{caloriesBurned} kcal</p>
                </div>
        </div>
    )
}