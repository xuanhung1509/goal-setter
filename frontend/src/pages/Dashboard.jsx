import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset, getGoals } from '../features/goals/goalSlice';
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, goals, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());

    return () => dispatch(reset());
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <div className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} {...goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goal</h3>
        )}
      </div>
    </>
  );
}
export default Dashboard;
