import React from 'react';
import google from '../../../image/social/google.png';
import fb from '../../../image/social/facebook.jpg';
import github from '../../../image/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

// google and github
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    
    }

    if (user || user1) {
        navigate('/home');
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    // ...
    

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => { signInWithGoogle() }}
                    className='btn btn-dark w-50 d-block mx-auto m-3'>
                    <img src={google} width='8%' className='m-2' alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-light border border-2 w-50 d-block mx-auto m-3'>
                    <img src={fb} width='9%' className='m-2' alt="" />
                    Facebook Sign In
                </button>
                <button
                    onClick={() => { signInWithGithub() }}
                    className='btn btn-light border border-1 w-50 d-block mx-auto m-3'>
                    <img src={github} width='12%' className='m-2' alt="" />
                    GitHub Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;