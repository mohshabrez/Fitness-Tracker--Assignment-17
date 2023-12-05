import { useState } from "react"
import { useDispatch } from "react-redux";
import { removeFood } from "../redux/actions/foodActions";
import { BiTrash as DeleteIcon } from "react-icons/bi";

export const FoodCard = ({ food}) => {
    const [isHovered, setIsHovered] = useState(false);
    const { _id, foodName, calories, protein, carbohydrates, fat } = food;
    const dispatch = useDispatch();

    const handleDeleteFood = () => {
        dispatch(removeFood(_id))
    }

    return(
        <div onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col gap-3 flex-grow md:flex-grow-0 min-w-[12%] py-1 px-2 rounded-md border shadow-lg hover:shadow-blue-200 hover:border-blue-300 transition-all ease-in-out duration-300"
      >
        <div className="flex gap-8 justify-between">
        <strong>{foodName}</strong>
        {!isHovered && <p>🍜{calories} kcal</p>}
        {isHovered && (
          <div
            onClick={handleDeleteFood}
            className="cursor-pointer hover:bg-white p-1 rounded-full"
          >
            <DeleteIcon fill="red" />
          </div>
        )}
      </div>

      <div className="flex gap-8 justify-between">
        <p>P: {protein}gm</p>
        <p>C: {carbohydrates}gm</p>
        <p>F: {fat}gm</p>
      </div>
        </div>
    )
}