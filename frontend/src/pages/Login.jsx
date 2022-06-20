import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
