import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import ListCard from "./ListCard";
import './tasklist.scss';

const TaskList = () => {
    const auth = useSelector((state) => state.auth );
    const tasks = useSelector((state) => state.task);

    const {currentUser } = auth
    const {AllTasks} = tasks;
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(getAllTasks(currentUser.token, currentUser.id));
    }, [dispatch, currentUser.token, currentUser.id]);

  return (
    <div>
      <ul className='list-header'>
          <li>
              <h5><b>Id</b></h5>
          </li>
          <li>
              <h5><b>Issue Name</b></h5>
          </li>
          <li>
              <h5><b>Status</b></h5>
          </li>
          <li>
              <h5><b>Action</b></h5>
          </li>
      </ul>
        {Object.values(AllTasks).map((item) => {
            return <ListCard key = {item._id} item = {item}/>;
        })}
    </div>
  )
}

export default TaskList;