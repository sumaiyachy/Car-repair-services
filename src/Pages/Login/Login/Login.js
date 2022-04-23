import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p>Error: {error.message}</p>

  }
  if (loading || sending) {
    return <Loading></Loading>
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  }

  const navigateRegister = event => {
    navigate('/register');
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('sent email');
    }
    else{
      toast('please enter your email address');
    }
  };

  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-primary text-center mb-3 mt-4'>Please login</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button onClick={signInWithEmailAndPassword} variant="danger w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to login? <Link to='/register' className='text-primary text-decoration-none pe-auto fw-bold' onClick={navigateRegister}>please register</Link></p>
      <p>Forgot password?<button className='text-primary btn btn-link text-decoration-none pe-auto fw-bold' onClick={resetPassword}>Reset password</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;