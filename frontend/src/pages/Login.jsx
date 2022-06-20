import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import Spinner from '../components/Spinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, user, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isSuccess, isError, user, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };
    dispatch(login(userData));
  };

  const inputs = [
    {
      type: 'email',
      name: 'email',
      id: 'email',
      value: email,
      placeholder: 'Enter your email',
      onChange: handleChange,
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      value: password,
      placeholder: 'Enter your password',
      onChange: handleChange,
    },
  ];

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to start creating goals</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div key={input.id} className='form-group'>
              <input {...input} />
            </div>
          ))}
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Login;
