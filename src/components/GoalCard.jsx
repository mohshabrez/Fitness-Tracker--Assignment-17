import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiTrash as DeleteIcon } from "react-icons/bi";
import { removeGoal } from "../redux/actions/goalActions";

export const GoalCard = ({ goal}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {
      _id,
      goalName,
      goalDescription,
      targetDate,
      targetCaloriesValue,
      status,
    } = goal;
    const dispatch = useDispatch();
  
    const date = new Date(targetDate);
  
    const handleDeleteGoal = () => {
      dispatch(removeGoal(_id));
    };
  
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col gap-3 flex-grow md:flex-grow-0 min-w-[12%] py-1 px-2 rounded-md border shadow-lg hover:shadow-blue-200 hover:border-blue-300 transition-all ease-in-out duration-300"
      >
        <div className="flex gap-8 justify-between">
          <strong>{goalName}</strong>
          {!isHovered && <p>{status}</p>}
          {isHovered && (
            <div
              onClick={handleDeleteGoal}
              className="cursor-pointer hover:bg-white p-1 rounded-full"
            >
              <DeleteIcon fill="red" />
            </div>
          )}
        </div>
  
        <p>Desc: {goalDescription}</p>
  
        <div className="flex gap-8 justify-between">
          <p>
            Target Date:{" "}
            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
          </p>
          <p>Target Calories: {targetCaloriesValue.toLocaleString()}</p>
        </div>
      </div>
    );
}