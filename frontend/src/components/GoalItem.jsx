import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ _id, text, createdAt }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGoal(_id));
  };

  return (
    <div className='goal'>
      {new Date(createdAt).toLocaleString('en-US')}
      <h2>{text}</h2>
      <button className='close' onClick={handleDelete}>
        X
      </button>
    </div>
  );
}
export default GoalItem;
