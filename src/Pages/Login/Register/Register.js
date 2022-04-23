import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import '../Register/Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
       console.log('user', user);
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

           await createUserWithEmailAndPassword(email, password);
           await updateProfile({ displayName: name});
           console.log('Updated profile');
           navigate('/home');

        // createUserWithEmailAndPassword(email, password);
        //    console.log(event.target.email.value);
        //    console.log(event.target.name.value);
    };

    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>Please register quickly</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' />

                <input type="email" name="email" placeholder='Your Email' required />

                <input type="password" name="password" placeholder='Password' id="" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'px-2': 'text-danger px-2'} htmlFor="terms">Accept Genius car terms and conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius car terms and conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mt-3 d-block mx-auto bg-primary border border-0 rounded'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none pe-auto fw-bold' onClick={navigateLogin}>please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register; <h3>please register quickly</h3>