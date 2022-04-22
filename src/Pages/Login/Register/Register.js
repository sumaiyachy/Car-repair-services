import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Register/Register.css';

const Register = () => {

    const navigate = useNavigate();
   const navigateLogin = () =>{
       navigate('/login')
   }

   const handleRegister = event =>{
       event.preventDefault()
       const name = event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
    //    console.log(event.target.email.value);
    //    console.log(event.target.name.value);
   };

    return (
        <div className='register-form'>
            <h3 style={{textAlign: 'center'}}>please register quickly</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name'/>
             
                <input type="email" name="email" placeholder='Your Email' required />
             
                <input type="password" name="Password" placeholder='Password' id=""  required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none pe-auto fw-bold' onClick={navigateLogin}>please Login</Link></p>
        </div>
    );
};

export default Register; <h3>please register quickly</h3>