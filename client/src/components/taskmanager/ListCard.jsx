import './listcard.scss';
import {BiChevronLeft, BiChevronRight, BiTrash} from 'react-icons/bi';
import { CiEdit } from "react-icons/ci";
import { arrowClick, deleteItem, editItem} from '../../redux/taskSlice';
import { useDispatch } from 'react-redux'; 
import { Link} from 'react-router-dom';

const ListCard = ( items ) => {
  const { item } = items;
  const dispatch = useDispatch();

  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string))
  };

  const handleDelete = () => {
		dispatch(deleteItem(item._id));
	};
  
  // const handleEdit = () => {
  //   <Link to='/EditTask' className='button'> 
  //   </Link>
  //   dispatch(editItem(item._id));
  // }

  return (
  <div>
      <ul className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`}>
          <li><p>{item._id}</p></li>
          <li><p>{item.task}</p></li>
          <li><p>{item.status}</p></li>
          <li>
            <button 
              disabled = {item.status === 'Backlog'} 
              onClick={() => ArrowClick('left')}
            >
              <BiChevronLeft/>
            </button>
            <button 
              disabled = {item.status === 'done'} 
              onClick={() => ArrowClick('right')}
            >
              <BiChevronRight/>
            </button>
					  <button onClick={handleDelete}>
						<BiTrash />
					</button>
          <Link to={`/EditTask/${item._id}`}>
            <CiEdit />
          </Link>
          </li>
      </ul>
    </div>
  )
}

export default ListCard;