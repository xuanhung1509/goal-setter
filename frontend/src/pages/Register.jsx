import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

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
      type: 'text',
      name: 'name',
      id: 'name',
      value: name,
      placeholder: 'Enter your name',
      onChange: handleChange,
    },
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
    {
      type: 'password',
      name: 'password2',
      id: 'password2',
      value: password2,
      placeholder: 'Confirm your password',
      onChange: handleChange,
    },
  ];

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
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
export default Register;
